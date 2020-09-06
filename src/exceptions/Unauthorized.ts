import HTTPStatusCode from "../constants/HTTPStatusCode";
import HttpException from "./HttpException";

export default class UnauthorizedException extends HttpException {
  constructor(message: string = "") {
    super(HTTPStatusCode.UNAUTHORIZED, message);
  }
}
