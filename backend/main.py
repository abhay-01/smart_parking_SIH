# from herepy import (
#     TrafficApi,
#     IncidentsCriticalityStr,
#     IncidentsCriticalityInt,
#     FlowProximityAdditionalAttributes,
# )

# traffic_api = TrafficApi(api_key=API_KEY)

# response = traffic_api.incidents_in_bounding_box(
#     top_left=[52.5311, 13.3644],
#     bottom_right=[52.5114, 13.4035],
#     criticality=[
#         IncidentsCriticalityStr.minor,
#         IncidentsCriticalityStr.major,
#         IncidentsCriticalityStr.critical,
#     ],
# )
# print(response.as_dict())

# https://smartcities.data.gov.in/catalog/agra-parking-locations?filters%5Bfield_catalog_reference%5D=2920376&format=json&offset=0&limit=9&_=1694664425735&sort%5Bcreated%5D=desc

import requests
import json
import sys
import os
from pprint import pprint
from geopy.geocoders import Nominatim
import pandas as pd
from dotenv import load_dotenv
load_dotenv()

# Initialize Nominatim API
geolocator = Nominatim(user_agent="MyApp")
location = sys.argv[1]
location = geolocator.geocode(location)

API_KEY = os.getenv("API_KEY")

# res = requests.get(f"https://data.traffic.hereapi.com/v7/flow?locationReferencing=shape&in=bbox:13.400,52.500,13.405,52.505&apiKey={API_KEY}")

lat = location.latitude
lon = location.longitude

res = requests.get(
    f"https://data.traffic.hereapi.com/v7/flow?in=circle:{lat},{lon};r=500&locationReferencing=olr&apiKey={API_KEY}"
)
data = res.content.decode()
file = data
# data = json.loads(data)
# print(data)
#**********************************************
# file = file.decode()
file = json.loads(file)
# pprint(file)	
# print(type(file)) # dictionary

loc_query = sys.argv[1]
loc_query = loc_query.split(',')
loc_query = [x.replace(" ","") for x in loc_query]

# print(loc_query)

my_loc = loc_query[0][1:]
final_data = {"data":[]}
# print(type(file))
# print(my_loc)
# print(file)
for result in file["results"]:
	if my_loc in result["location"]["description"]:
		# print("yes")
		speed = result["currentFlow"]["speed"]
		jamFactor = result["currentFlow"]["jamFactor"]
		freeFlow = result["currentFlow"]["freeFlow"]
		park_loc = result["location"]["description"]
		final_data["data"].append({"park_loc":park_loc, "speed":speed, "jamFactor":jamFactor, "freeFlow": freeFlow})
		# print(f"""
		# 	speed : {speed}
		# 	jamFactor: {jamFactor}
		# 	freeFlow: {freeFlow}""")
# final_data = json.dumps(final_data)

i=9999
min_jam_park=""
min_jamFactor=0
# print(file["results"])
for x in final_data["data"]:
      if x["jamFactor"] <= i:
            i = x["jamFactor"]
            min_jam_park = x["park_loc"]
            min_jamFactor = x["jamFactor"]


df = pd.read_excel("D58. Parking Lots (1).xls")
park_addr = df["Parking Address"].values.tolist()
park_names = df["Name of Parking"].values.tolist()

avail_park =[]

for i in range(len(park_addr)):
    if my_loc in park_addr[i]:
        avail_park.append(park_names[i])
    
# print(avail_park)

geolocator = Nominatim(user_agent="MyApp")
location = min_jam_park
# print(min_jam_park)
location = location.split("/")

latitude =0
longitude =0

for loc in location:
    location = geolocator.geocode(loc)
    if location != None:
          latitude=location.latitude
          longitude = location.longitude

park_spots = {"park_addr":avail_park, "park_loc":min_jam_park,"jamFactor":min_jamFactor, "lat":latitude, "lon":longitude}
park_spots = json.dumps(park_spots)
print(park_spots)
sys.stdout.flush()
