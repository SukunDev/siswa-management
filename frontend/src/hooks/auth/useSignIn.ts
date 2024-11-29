import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

function useSignIn() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_API_URL}/auth/signin`,
        { ...formData }
      );
      if (response.data.status) {
        Cookies.set("access_token", response.data.data.accessToken, {
          expires: 1,
        });
        toast("Success to login", { type: "success" });
        router.push("/dashboard/siswa");
      } else {
        toast(response.data.message, { type: "error" });
      }
      setIsLoading(false);
    } catch (error: unknown) {
      setIsLoading(false);
      if (axios.isAxiosError(error)) {
        setErrorMessage(
          `Error: ${error.response?.data.message || "An error occurred"}`
        );
      } else if (error instanceof Error) {
        setErrorMessage(`Error: ${error.message}`);
      } else {
        setErrorMessage("Unknown error occurred");
      }
    }
  };

  return {
    handleInput,
    handleSubmit,
    formData,
    errorMessage,
    isLoading,
  };
}

export default useSignIn;
