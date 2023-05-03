// import { Application, Request, Response } from "express";
// // import GameShopData from "../../data/gameshop.json";
//  import * as GameShopData from "../src/data/data.json";
//  import axios from "axios";


// interface Game {
//   id: number;
//   name: string;
//   background_image: string;
//   rating_top: number;
// }

// export const loadApiEndpoints = (app: Application): void => {
//   app.get("/api", async (req: Request, res: Response) => {
//     try {
//       const gameShop = GameShopData;
//       if (!gameShop) {
//         return res.status(404).json({ message: "No se encontraron Juegos" });
//       }
//       return res.status(200).json(gameShop);
//     } catch (error) {
//     // console.error(Error al cargar cursos: ${error});
//     console.error("No se encontraron Juegos");
//       return res.status(500).json({ message: "Error interno del servidor" });
//     }
//   });

//  app.get("/api/games", async (req: Request, res: Response) => {
//     try {
//       const response = await axios.get(
//         "https://api.rawg.io/api/games?page_size=10&key=20769d79ed974b54ad7a5ccd0f24c887&page_size=25"
//       );

//       const games: Game[] = response.data.results.map((game: any) => {
//         const { id, name, background_image, rating_top } = game;
//         return { id, name, background_image, rating_top };
//       });

//       return res.status(200).json(games);
//     } catch (error) {
//       // console.error(Error al cargar juegos: ${error});
//       return res.status(500).json({ message: "Error interno del servidor" });
//     }
//   });
// };

// export const createVideogames = async (): Promise<void> => {
//     try {
//       const gamesResponse: AxiosResponse<Game[]> = await axios.get<Game[]>("https://api.rawg.io/api/games?key=6df927ecdff443ffa74507df2223a6ad");
//       const games = Array.isArray(gamesResponse.data) ? gamesResponse.data.map((game) => ({
//         id: game.id,
//         name: game.name,
        // description: game.description,
        // released: game.released,
        // rating: game.rating,
        // platforms: game.platforms.map((platform) => ({
        //   id: platform.platform.id,
        //   name: platform.platform.name,
        //   slug: platform.platform.slug,
        //   released_at: platform.released_at,
        //   requirements_en: platform.requirements_en,
        //   requirements_ru: platform.requirements_ru,
        // })),
        // genres: game.genres.map((genre) => ({
        //   id: genre.id,
        //   name: genre.name,
        //   slug: genre.slug,
        //   games_count: genre.games_count,
        //   image_background: genre.image_background,
        // })),
//         background_image: game.background_image,
//         rating_top: game.rating_top,
//         // ratings_count: game.ratings_count,
//       })):[];
//       const createdGames = await Videogame.bulkCreate(games);
//       console.log(`Se crearon ${createdGames.length} videojuegos`);
//       console.log(games);
//     } catch (error) {
//       console.error('Error al crear los videojuegos', error);
//     }
//   };
  