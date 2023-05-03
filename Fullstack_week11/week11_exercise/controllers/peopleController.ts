import { Request, Response } from "express";
import logger from "../utility/logger";
import Person from "../models/peopleModel";

interface Person {
  id: string;
  name: string;
  age: number;
  city: string;
 
  [key:string]: any;
}

const personData : Person[]= 
[
    {
      "id": "1",
      "name": "Nikolaj",
      "age": 52,
      "city": "Lyngby",
    },
    {
      "id": "2",
      "name": "Frederik",
      "age": 26,
      "city": "Kbh SV"
    },
    {
      "id": "3",
      "name": "Yelong",
      "age": 31,
      "city": "Valby"
    },
    {
      "id": "4",
      "name": "Morten",
      "age": 34,
      "city": "Bagsværd"
    },
    {
      "id": "5",
      "name": "Kristina",
      "age": 22,
      "city": "Herlev"
    }
  ]

export const getAllPeople = async (req: Request, res: Response) => {

  const data = await Person.find();

    res.status(200)
        .json({
            status: "success",
            data: {data,
            }
        })
};

export const getPerson = async (req: Request, res: Response) => {


  const data = await Person.findById(req.params.id)
  try{
      res.status(200)
          .json({
              status: "success",
              people: data
          })
  }
  catch(err)
  {
      res.status(400)
      .json({
          status: "failed",
          people: err
      })
  }
};


export const updatePerson = async(req: Request, res: Response) => {
  try {
    /* const id = req.params.id;
    const person = personData[parseInt(id)];
    const personPatch = req.body;
    const objKeys = Object.keys(personPatch);

    objKeys.forEach((key: string) => {
      person[key] = personPatch[key];
    });

 */


    const person = await Person.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })

    
    res.status(200).json( {
      status: "succes", 
      data: {
        person,
      }
    })
  } catch (err) {
    logger.debug('Error:' + err);
    res.status(404).json({
      status: "fail", 
      message: err,
    })
  }
}

export const createPerson = async (req: Request, res: Response) => {

    const newPerson = await Person.create(req.body);
    const jsonData = req.body;
    personData.push(jsonData);
    console.log()
    res.status(201)
        .json({
            status: "success",
            data: {
              person: newPerson,
            }
        })
};
export const deletePerson = async (req: Request, res: Response) => {
  try {
    await Person.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'succes', 
      data: null
    })
  } catch {

  }
}

