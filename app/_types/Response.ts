type Status = 200 | 400 | 404 | 500;

export type Response<T> =
  | {
      status: 200;
      data: T;
    }
  | {
      status: 400 | 404 | 500;
      data: null;
    };
