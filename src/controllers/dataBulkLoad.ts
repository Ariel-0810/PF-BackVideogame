import axios from 'axios';
import { Request, Response } from 'express';
import { Videogame } from '../models/Videogame';

interface Platform {
  platform: { id:number, name:string, slug:string, image:string | null, year_end: string | null, year_start: string | null, games_count: number,  image_background: string};
  released_at: string;
  requirements_en: {
    minimum: string;
    recommended: string;
  } | null;  
}

interface Genre {
  id:number,
  name:string,
  slug:string,
  games_count: number,
  image_background: string  
}

interface Game {
  id: number;
  name: string;
  released: Date;
  platforms: Platform[];
  genres: Genre[];
  background_image: string;
  rating_top: number;
}


export const createBulkDB = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://api.rawg.io/api/games?page_size=10&key=6df927ecdff443ffa74507df2223a6ad&page_size=40"
    );
    const games: Game[] = response.data.results;

    const promises = games.map(async (game: any) => {
      const videogame: Videogame | null = await Videogame.findOne({
        where: { name: game.name },
      });
      // const requirements  =
      //   videogame && videogame.platforms
      //     ? videogame.platforms[3].requirements_en
      //     : null;
      // const minimum = requirements ? requirements.minimum : null;
      // const recommended = requirements ? requirements.recommended : null;
      //     console.log(requirements);
          
      const { id, name, released, background_image, rating_top } = game;
      return { id, name, released, background_image, rating_top };
    });

    const createdGames = await Promise.all(promises);
    const filteredGames = createdGames.filter((game) => game !== null);    
    const savedGames = await Videogame.bulkCreate(filteredGames);

    return res.status(200).json(savedGames);
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
