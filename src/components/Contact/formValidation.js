const validateForm = (formData) => {
  let isValid = true;
  const errors = {};

  for (const [key, value] of Object.entries(formData)) {
    if (value.trim() === "") {
      isValid = false;
      errors[key] = "Please fill this field";
    }
  }

  return {
    isValid,
    errors,
  };
};

export default validateForm;
