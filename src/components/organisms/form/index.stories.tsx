import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CustomForm } from ".";

const meta: Meta<typeof CustomForm> = {
  title: "Components/Form",
  component: CustomForm,
};

export default meta;

type Story = StoryObj<typeof CustomForm>;

const CustomFormWithState = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const [errors] = useState({
    name: "",
    email: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <CustomForm
      title="Adicionar usuário"
      form={form}
      errors={errors}
      goBack={() => alert("click to go back")}
      onSave={() => alert("click to save")}
      onChange={handleChange}
    />
  );
};

export const Primary: Story = {
  render: () => <CustomFormWithState />,
};
