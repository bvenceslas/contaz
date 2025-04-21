import express from "express";
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./trpc/router";

const app = express();
const PORT = 4000;

app.use(cors({ origin: "http://localhost:5173/" }));
app.use(express.json());

// connect trpc to express
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: () => ({}),
  })
);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}/trpc`);
});
