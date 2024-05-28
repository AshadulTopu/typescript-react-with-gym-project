import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { ReactHTMLElement } from "react";
import { useForm } from "react-hook-form";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
    console.log("submitting...");
    console.log("formData", e.target);
  };
  return (
    <section id="contactus" className="mx-auto w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.contactUs)}
      >
        <HText>
          CONTACT <span className="text-primary-500">US</span>
        </HText>

        <form
          //   action="https://formsubmit.co/your@email.com"
          className="flex flex-col gap-4"
          onSubmit={onSubmit}
          method="POST"
        >
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: true, maxLength: 100 })}
            className="w-full rounded-lg bg-primary-100 px-5 py-3 text-black outline-1 outline-primary-500 placeholder:text-secondary-500"
          />

          {errors.name && (
            <p className="mt-1 text-primary-500">
              {errors.name.type === "required" && "This field is required."}
              {errors.name.type === "maxLength" && "Max length is 100 char."}
            </p>
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg bg-primary-100 px-5 py-3 text-black outline-1 outline-primary-500 placeholder:text-secondary-500"
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
              // pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{(2, 4)}$/i,
            })}
          />

          {errors.email && (
            <p className="mt-1 text-primary-500">
              {errors.email.type === "required" && "This field is required."}
              {errors.email.type === "pattern" && "Invalid email address."}
            </p>
          )}

          <textarea
            placeholder="Message"
            rows={4}
            {...register("message", { required: true, maxLength: 2000 })}
            className="w-full rounded-lg bg-primary-100 px-5 py-3 text-black outline-1 outline-primary-500 placeholder:text-secondary-500"
          />
          {errors.name && (
            <p className="mt-1 text-primary-500">
              {errors.name.type === "required" && "This field is required."}
              {errors.name.type === "maxLength" && "Max length is 2000 char."}
            </p>
          )}
          <button
            type="submit"
            className="rounded-lg bg-secondary-500 px-20 py-3"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </section>
  );
};
