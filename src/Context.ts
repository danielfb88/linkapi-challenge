import { AxiosInstance } from "axios";
import * as express from "express";
import { Connection } from "typeorm";
import Bling from "./integrations/bling/Bling";
import Pipedrive from "./integrations/pipedrive/Pipedrive";
import { MovieRepository } from "./repositories";

export interface IContext {
  captureException(error: Error): void;
  app: express.Application;
  db: {
    connection: Connection;
    movies: MovieRepository;
  };
  integrations: {
    pipedrive: AxiosInstance;
    bling: AxiosInstance;
  };
}

export class Context {
  private static instance: IContext;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(): IContext {
    if (Context.instance === undefined) {
      throw Error("Context not created yet");
    }

    return Context.instance;
  }

  public static createContext(args: { connection: Connection; app: express.Application }) {
    const { connection, app } = args;

    Context.instance = {
      app,
      captureException: () => null,
      db: {
        connection,
        movies: connection.getCustomRepository(MovieRepository),
      },
      integrations: {
        bling: Bling.createBlingAxiosClient(),
        pipedrive: Pipedrive.createPipedriveAxiosClient(),
      },
    };
  }
}
