import BaseError from './BaseError'

export default class HttpRequestError extends BaseError {
  constructor(public status: number, public message: string) {
    super();
  }
}
