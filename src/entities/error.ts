export type ErorrType<T> = Partial<Record<keyof T, string | string[]>>;
export type ApiError<T> = {
  message: string;
  errors: ErorrType<T>;
};

export type FormHandlerReturnType = 'error' | void;
