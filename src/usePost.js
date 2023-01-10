import { useState } from "react";

export default function usePost() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [blogId, setBlogId] = useState(null);
  const [error, setError] = useState(null);

  function fetchPost(url, data, clearForm) {
    fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setBlogId(data.id);
        console.log(data.id);
        setIsSuccess(true);
        clearForm();
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }
  return { isSuccess, fetchPost, isPending, error, blogId };
}
