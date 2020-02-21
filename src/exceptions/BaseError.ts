class BaseError extends Error {
  constructor() {
    super();
    // @ts-ignore
    Error.apply(this, arguments);
  }
}

export default BaseError
