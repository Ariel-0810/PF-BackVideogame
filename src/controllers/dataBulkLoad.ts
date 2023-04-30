import axios, { AxiosResponse } from 'axios';
import { Request, Response } from 'express';
import { Types } from "../models/ExampleTypes";

const getTypesAPI = async (): Promise<string[]> => {
  let responseAPI: AxiosResponse = await axios.get("https://pokeapi.co/api/v2/type");
  const dataTypes: string[] = await responseAPI.data.results.map((e: { name: string }) => e.name);
  return dataTypes;
};



const getPostTypesIntoDBHandlers = async (req: Request, res: Response): Promise<void> => {
    try {
      const responseAPI = await getTypesAPI();
      console.log(responseAPI)
      responseAPI.forEach(e => {
        Types.findOrCreate({
          where: { name: e }
        })
      });
      const pokemonTypes = await Types.findAll();
      res.send(pokemonTypes)
    } catch (error) {
      res.status(400).send(error);
    }
  };
  

export { getTypesAPI, getPostTypesIntoDBHandlers  };