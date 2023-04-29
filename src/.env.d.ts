// Aquí definimos los tipos de las demás variables de entorno que se usan en nuestro proyecto

declare namespace NodeJS {
  interface ProcessEnv {
    DB_USER: string = "postgres";
    DB_PASSWORD: string = "mia081013";
    DB_HOST: string = "localhost:5432";
    DB_NAME: string = "gameshop";
  }
}

