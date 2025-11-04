import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useCreateUser } from "../../../hooks/useCreateUser";
import { useValidate } from "../../../hooks/useValidate";
import { userSchema } from "../../../schemas/add-user";
import { useForm } from "../../../hooks/useForm";
import { StatusEnum } from "../../../services/users/types";
import { CustomForm } from "../../organisms/form";

function CreateUser() {
  const navigate = useNavigate();
  const mutation = useCreateUser();
  const { errors, validate } = useValidate<{
    name: string;
    email: string;
  }>(userSchema);

  const { form, onChange } = useForm({
    name: "",
    email: "",
  });

  const goBack = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSave = useCallback(async () => {
    try {
      const valid = await validate({
        name: form.name,
        email: form.email,
      });
      if (valid) {
        await mutation.mutateAsync({
          name: form.name,
          email: form.email,
          status: StatusEnum.ACTIVE,
        });
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  }, [form, mutation, validate, navigate]);

  return (
    <CustomForm
      title="Adicionar usuário"
      form={form}
      errors={errors}
      onChange={onChange}
      goBack={goBack}
      onSave={onSave}
    />
  );
}

export default CreateUser;
