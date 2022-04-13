import { ErrorMessage, useField } from "formik";
import React from "react";
import { tw } from "../../lib/tailwind";

const className = tw`block w-full bg-white border border-gray-light px-3 py-3 pr-8 leading-tight font-sans text-base placeholder-gray-darker focus:outline-none focus:ring shadow-sm`;

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "textarea";
}

const Input: React.FC<React.PropsWithChildren<InputProps>> = ({ label, type = "text", ...props }) => {
  const [field] = useField({
    ...props,
    type: type === "textarea" ? "text" : type,
  });

  return (
    <label className="block relative pb-5 mb-2">
      <span className="block text-blue-dark text-base ml-1 mb-1">{label}</span>

      {type === "textarea" ? (
        <textarea className={className} rows={6} {...field} {...props} />
      ) : (
        <input className={className} type={type} {...field} {...props} />
      )}

      <ErrorMessage name={field.name}>
        {(error) => (
          <span className="ml-1 text-sm absolute bottom-0 text-gold">
            {error}
          </span>
        )}
      </ErrorMessage>
    </label>
  );
};

export default Input;
