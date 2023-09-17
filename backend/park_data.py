import pandas as pd
from geopy.geocoders import Nominatim


df = pd.read_excel("D58. Parking Lots (1).xls")
my_loc = "haradi"
data = {
    "data": [
        {
            "freeFlow": 10.833334,
            "jamFactor": 4.9,
            "park_loc": "Yashwant Nagar Chowk/Chandan Nagar Kharadi Road",
            "speed": 6.9444447,
        },
        {
            "freeFlow": 8.055555,
            "jamFactor": 4.8,
            "park_loc": "Kharadi Bypass/Solapur Nagar Bypass",
            "speed": 5.277778,
        },
        {
            "freeFlow": 8.611112,
            "jamFactor": 3.8,
            "park_loc": "Yashwant Nagar Chowk/Chandan Nagar Kharadi Road",
            "speed": 6.111111,
        },
        {
            "freeFlow": 7.2222223,
            "jamFactor": 5.8,
            "park_loc": "Kharadi Bypass/Solapur Nagar Bypass",
            "speed": 3.3333335,
        },
    ],
}

park_addr = df["Parking Address"].values.tolist()
park_names = df["Name of Parking"].values.tolist()

avail_park =[]


for i in range(len(park_addr)):
    if my_loc in park_addr[i]:
        avail_park.append(park_names[i])
    
print(avail_park)

geolocator = Nominatim(user_agent="MyApp")
location = "Chandan Nagar Kharadi Road"
location = geolocator.geocode(location)

print(location.latitude ,location.longitude)