"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import Button from "@/components/ui/button";

import styles from "./form.module.css";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

type SupportFormProps = {
  urlHandler: string;
};

const SupportForm = ({ urlHandler }: SupportFormProps) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await fetch(urlHandler, {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        return toast.error("🚨 Une erreur est survenue", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

      return toast.success("👍 Votre message a bien été envoyé", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      return toast.error("🚨 Une erreur est survenue", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <form className={styles["form"]} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles["form__input-group"]}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required {...register("name")} />
      </div>
      <div className={styles["form__input-group"]}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required {...register("email")} />
      </div>
      <div className={styles["form__input-group"]}>
        <label htmlFor="message">Message</label>
        <textarea id="message" rows={15} required {...register("message")} />
      </div>

      <Button variant="secondary" style={{ color: "#fff" }} type="submit">
        Envoyer
      </Button>
    </form>
  );
};

export default SupportForm;
