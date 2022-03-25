import { useState } from "react";

export interface Values {
  from_name?: any;
  sender_email?: any;
  message?: any;
}

export default function useForm(validateOnChange = false, validate: any) {
  const [values, setValues] = useState<Values>({
    from_name: "",
    sender_email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Values>({});

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) {
      validate({ [name]: value });
    }
  };

  const resetForm = () => {
    setValues({
      from_name: "",
      sender_email: "",
      message: "",
    });
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
}
