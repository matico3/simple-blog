import { useState } from "react";

export default function useForm(initial = {}) {
  const [form, setBlog] = useState(initial);
  function handleChange(e) {
    const { name, value } = e.target;
    setBlog({
      ...form,
      [name]: value,
    });
  }
  function clearForm() {
    setBlog({
      title: "",
      body: "",
      author: "Matic",
    });
  }
  return { form, handleChange, clearForm };
}
