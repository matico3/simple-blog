import { useState } from "react";

export default function useForm(initial = {}) {
  const [form, setBlog] = useState(initial);
  function handleChange(e) {
    console.log("bla");
    const { name, value } = e.target;
    console.log(name, value);
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
