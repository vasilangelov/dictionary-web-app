import { QueryClient } from "@tanstack/react-query";

export const QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
    },
  },
});
