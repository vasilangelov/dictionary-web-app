import { HTTPStatusCode } from "@/constants/http";

export class HTTPError extends Error {
  constructor(public status: HTTPStatusCode) {
    super();
  }
}
