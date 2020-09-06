import HttpException from "./HttpException";

import HTTPStatusCode from "../constants/HTTPStatusCode";

export default class BadRequestException extends HttpException {
  constructor(message: string = "") {
    super(HTTPStatusCode.BAD_REQUEST, message);
  }
}
