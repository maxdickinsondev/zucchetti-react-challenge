import { Schema, ValidationError } from "yup";
import { useCallback, useState } from "react";

type Errors<T> = Partial<Record<keyof T, string>>;

function useValidate<T>(schema: Schema) {
  const [errors, setErrors] = useState<Errors<T>>({});

  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  const validate = useCallback(
    async (data: T): Promise<boolean> => {
      try {
        await schema.validate(data, { abortEarly: false });
        setErrors({});
        return true;
      } catch (err) {
        const yupErrors: Errors<T> = {};
        if (err instanceof ValidationError) {
          err.inner.forEach((error) => {
            const { path } = error;
            const { message } = error;
            yupErrors[path as keyof T] = message;
          });
          setErrors(yupErrors);
        }
        return false;
      }
    },
    [schema],
  );

  return { errors, clearErrors, validate };
}

export { useValidate };
