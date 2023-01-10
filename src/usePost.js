import { useState } from "react";

export default function usePost() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const [error, setError] = useState(null);

  function fetchPost(url, data, clearForm) {
    fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        setIsPending(false);

        setIsSuccess(true);
        clearForm();
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }
  return { isSuccess, fetchPost, isPending, error };
}
