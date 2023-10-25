export class ApiError {
  constructor(public code: number, public message: string) {
    this.code = code;
    this.message = message;
  }

  static resourceNotFound(msg: string) {
    console.log("msg:", msg);
    return new ApiError(404, msg);
  }

  static forbidden(msg: string) {
    console.log("msg:", msg);
    return new ApiError(403, msg);
  }

  static badRequest(msg: string) {
    console.log("msg:", msg);
    return new ApiError(400, msg);
  }

  static internal(msg: string) {
    console.log("msg:", msg);
    return new ApiError(500, msg);
  }
}
