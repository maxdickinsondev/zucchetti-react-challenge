import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useUpdateUser } from "../../../hooks/useUpdateUser";
import { useValidate } from "../../../hooks/useValidate";
import { userSchema } from "../../../schemas/add-user";
import { useForm } from "../../../hooks/useForm";
import { findUserById } from "../../../services/users";
import { StatusEnum } from "../../../services/users/types";
import { CustomForm } from "../../organisms/form";

function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const mutation = useUpdateUser();
  const { errors, validate } = useValidate<{
    name: string;
    email: string;
  }>(userSchema);
  const { form, setForm, onChange } = useForm({
    name: "",
    email: "",
  });

  useEffect(() => {
    async function fetchUser() {
      try {
        if (id) {
          const response = await findUserById(id);
          setForm({
            name: response.name,
            email: response.email,
          });
          console.log("response", response);
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchUser();
  }, [id, setForm]);

  const goBack = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSave = useCallback(async () => {
    try {
      const valid = await validate({
        name: form.name,
        email: form.email,
      });
      if (id && valid) {
        await mutation.mutateAsync({
          id: id,
          name: form.name,
          email: form.email,
          status: StatusEnum.ACTIVE,
        });
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  }, [form, id, mutation, navigate, validate]);

  console.log("aqui");

  return (
    <CustomForm
      title="Editar usuário"
      form={form}
      errors={errors}
      onChange={onChange}
      goBack={goBack}
      onSave={onSave}
    />
  );
}

export default UpdateUser;
