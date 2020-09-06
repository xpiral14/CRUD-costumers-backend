import HTTPStatusCode from "../constants/HTTPStatusCode";

export default class HttpException extends Error {
  private httpStatusCode: HTTPStatusCode;
  constructor(httpStatusCode: HTTPStatusCode, message: string = "") {
    super(message);
    this.httpStatusCode = httpStatusCode;
  }

  public getStatus() {
    return this.httpStatusCode;
  }


}
