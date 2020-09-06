import HttpException from "./HttpException";

import HTTPStatusCode from "../constants/HTTPStatusCode";

export default class UnauthorizedException extends HttpException {
  constructor(message: string = "") {
    super(HTTPStatusCode.NOT_FOUND, message);
  }
}
