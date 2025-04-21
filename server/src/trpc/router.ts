import { z } from "zod";
import { router } from "./trpc";
import { contactRouter } from "./exportRouter";

export const appRouter = router({
  //   export: exportRouter,
  contacts: contactRouter,
});

export type AppRouter = typeof appRouter;
