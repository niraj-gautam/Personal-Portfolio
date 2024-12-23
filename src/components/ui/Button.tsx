import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps {
    variant?: "primary" | "secondary";
    children: ReactNode;
    className?: string;
    href?: string;
}

export const Button = ({
    variant = "primary",
    children,
    className,
    href,
}: ButtonProps) => {
    const baseStyles =
        "px-8 py-3 rounded-lg transition-colors flex items-center justify-center gap-2";
    const variants = {
        primary: "bg-purple-600 text-white hover:bg-purple-700",
        secondary: "bg-gray-800 text-white hover:bg-gray-700",
    };

    const Component = motion.create(href ? "a" : "button");

    return (
        <Component
            href={href}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(baseStyles, variants[variant], className)}
        >
            {children}
        </Component>
    );
};
