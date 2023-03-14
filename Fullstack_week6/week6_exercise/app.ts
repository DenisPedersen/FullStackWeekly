import express = require("express");
import logger from "./src/logger";
import morgan = require("morgan");
import { Request } from "express";
import fs from "fs";

interface CustomRequest extends Request {
  requestTime?: string;
}

type Person = {
  id: number;
  name: string;
  age: number;
  city: string;
};

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log("You are currently in Development Mode");
}

app.use(express.json()); //body parser
app.use(express.static(`${__dirname}/public`));

app.use((req: CustomRequest, res, next) => {
  try {
    req.requestTime = new Date().toISOString();
    next();
  } catch (err) {
    next(err);
  }
});

//GET ALL PEOPLE IN THE DB
app.get("/people", (req: CustomRequest, res) => {
  try {
    const data = fs.readFileSync("./people.json", "utf-8");
    console.log(req.requestTime);
    res
      .status(200)
      .header({
        "Content-Type": "application/json",
        "Content-Length": data.length,
      })
      .json({
        status: "succes",
        data: JSON.parse(data),
      });
  } catch {
    logger.error("OOPSIE NO PEOPLE FOR YOU!");
  }
});

//GET A SINGLE PERSON FROM ID
app.get("/people/:id", (req: CustomRequest, res) => {
  try{
  const data: { person: Person[] } = JSON.parse(
    fs.readFileSync("./people.json", "utf-8")
  );
  const id = parseInt(req.params.id);
  const person = data.person.find((person) => person.id === id);

  if (!person) {
    res.status(404).json({
      status: "error",
      message: "No such id or person",
    });
    return;
  }
  console.log(req.requestTime);
  res
    .status(200)
    .header({
      "Content-Type": "application/json",
      "Content-Length": JSON.stringify(person).length,
    })
    .json({
      status: "success",
      data: person,
    });
    logger.info("succesfully found person from selected id: "+ {id})
}catch{
  logger.error("OOPSIE HERE IS AN ERROR COULDN'T FIND PERSON FROM SELECTED ID")
}
});

app.listen(3000, () => {
  console.log(`Server is listening to http://localhost:3000`);
});
