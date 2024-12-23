import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setErrors({ ...errors, [id]: "" }); // Clear error when the user starts typing
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors = {
            name: formData.name ? "" : "Name is required.",
            email: formData.email
                ? validateEmail(formData.email)
                    ? ""
                    : "Invalid email. Please enter a valid one."
                : "Please enter an email.",
            message: formData.message ? "" : "Message is required.",
        };

        setErrors(newErrors);

        // Check if there are any errors
        if (!Object.values(newErrors).some((error) => error)) {
            // Submit the form (e.g., send data to your API)
            alert("Message sent successfully!");
        }
    };

    return (
        <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={handleSubmit}
        >
            <FormField
                label="Name"
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
            />
            <FormField
                label="Email"
                id="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
            />
            <FormField
                label="Message"
                id="message"
                placeholder="Your message"
                textarea
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
            />
            <Button className="w-full">Send Message</Button>
        </motion.form>
    );
};

interface FormFieldProps {
    label: string;
    id: string;
    type?: string;
    placeholder?: string;
    textarea?: boolean;
    value: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    error?: string;
}

const FormField = ({
    label,
    id,
    type = "text",
    placeholder,
    textarea,
    value,
    onChange,
    error,
}: FormFieldProps) => {
    const Component = textarea ? "textarea" : "input";

    return (
        <div>
            <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-400 mb-2"
            >
                {label}
            </label>
            <Component
                type={type}
                id={id}
                className={`w-full px-4 py-3 bg-gray-800 border ${
                    error ? "border-red-500" : "border-gray-700"
                } rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none text-white`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...(textarea && { rows: 4 })}
            />

            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>
    );
};
