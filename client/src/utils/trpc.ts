import { createTRPCReact, httpBatchLink } from "@trpc/react-query";
import type { AppRouter } from "../../../server/src/trpc/router";
// import SuperJSON from "superjson";

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
  //   transformer: SuperJSON,
  links: [
    httpBatchLink({
      url: "http://localhost:4000/trpc",
    }),
  ],
});
