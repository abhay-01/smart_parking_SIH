const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const { spawn } = require("child_process");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

const executePython = async (script, args) => {
  const arguments = args.map((arg) => arg.toString());

  const py = spawn("python", [script, ...arguments]);

  const result = await new Promise((resolve, reject) => {
    var output;

    // get o/p from python script
    py.stdout.on("data", (data) => {
      //   console.log(typeof(data))
      //   console.log(data.toString())

      output = JSON.parse(data.toString());
    });

    // handle errors
    py.stderr.on("data", (data) => {
      console.error(`[python] error occured: ${data}`);
      reject(`Error occured in ${script}`);
    });

    py.on("exit", (code) => {
      console.log(`Child process exited with code ${code}`);
      resolve(output);
    });
  });
  return result;
};

app.get("/", async (req, res) => {
  try {
    const result = await executePython("main.py", ["Pune"]);

    res.json({ result: result });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const result = await executePython("main.py", [req.body.address]);
    console.log(result);
    // console.log(typeof result);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
