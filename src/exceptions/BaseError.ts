class BaseError extends Error {
  constructor() {
    super();
    // @ts-ignore
    // eslint-disable-next-line prefer-rest-params
    Error.apply(this, arguments);
  }
}

export default BaseError;
