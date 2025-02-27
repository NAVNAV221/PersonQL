import express from "express";
import dotenv from "dotenv";
import {expressMiddleware} from "@apollo/server/express4";
import {ApolloServer} from "@apollo/server";
import { typeDefs, resolvers } from "./graphql/index";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

const bootstrapServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  await server.start();

  app.use(express.json());

  app.use(express.urlencoded({
    extended: true,
    inflate: true,
    limit: "1mb",
    parameterLimit: 200,
  }));

  app.use("/", expressMiddleware(server));

  app.get("/health", (req, res) => {
    res.send("Up and runnign");
  });

  app.listen(port, () => {
    console.log(`🚀 Graphql ready at http://localhost:${port}/`);
  });
};

bootstrapServer();
