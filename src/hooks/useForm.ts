import { useCallback, useState } from "react";

function useForm<T>(data: T) {
  const [form, setForm] = useState<T>(data as T);

  const clearForm = useCallback(() => {
    setForm({} as T);
  }, []);

  const onChange = useCallback(
    <K extends keyof T>(key: K, value: T[K]) => {
      setForm(
        (prev) =>
          ({
            ...prev,
            [key]: value,
          }) as T,
      );
    },
    [],
  );

  return { form, clearForm, onChange };
}

export { useForm };
