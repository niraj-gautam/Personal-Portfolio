import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigation = (id: string) => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 50);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const socialLinks = [
        {
            href: "https://github.com",
            icon: <Github size={20} />,
            label: "GitHub",
        },
        {
            href: "https://linkedin.com",
            icon: <Linkedin size={20} />,
            label: "LinkedIn",
        },
    ];

    return (
        <header className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm pt-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-xl font-medium text-purple-400"
                    >
                        devNIRAJ
                    </motion.div>

                    <nav className="hidden md:flex space-x-8">
                        {["Home", "About", "Projects", "Skills", "Contact"].map(
                            (item) => (
                                <motion.button
                                    key={item}
                                    onClick={() =>
                                        handleNavigation(item.toLowerCase())
                                    }
                                    className="text-gray-300 hover:text-white transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item}
                                </motion.button>
                            )
                        )}
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        {socialLinks.map((social) => (
                            <div key={social.label} className="relative group">
                                <SocialLink
                                    href={social.href}
                                    icon={social.icon}
                                />
                                {/* Tooltip */}
                                <div className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 hidden group-hover:block">
                                    <div className="bg-gray-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
                                        {social.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="md:hidden text-gray-300 hover:text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <motion.div
                            animate={{ rotate: isMenuOpen ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.div>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                            opacity: 1,
                            height: "auto",
                            transition: {
                                height: {
                                    duration: 0.2,
                                },
                                opacity: {
                                    duration: 0.2,
                                },
                            },
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                            transition: {
                                height: {
                                    duration: 0.2,
                                },
                                opacity: {
                                    duration: 0.2,
                                },
                            },
                        }}
                        className="md:hidden bg-gray-800 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3">
                            <div className="space-y-1">
                                {[
                                    "Home",
                                    "About",
                                    "Projects",
                                    "Skills",
                                    "Contact",
                                ].map((item) => (
                                    <button
                                        key={item}
                                        onClick={() =>
                                            handleNavigation(item.toLowerCase())
                                        }
                                        className="block w-full px-3 py-2 text-gray-300 hover:text-white text-left"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                            {/* Social links section for mobile */}
                            <div className="border-t border-gray-700 mt-3 pt-3 ">
                                <div className="flex justify-start items-center">
                                    {socialLinks.map((social, index) => (
                                        <React.Fragment key={social.label}>
                                            <motion.a
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center space-x-2 text-gray-300 hover:text-white px-4"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <span className="p-2 bg-gray-700/50 rounded-lg">
                                                    {social.icon}
                                                </span>
                                                <span>{social.label}</span>
                                            </motion.a>
                                            {index < socialLinks.length - 1 && (
                                                <div className="h-8 w-px bg-gray-700" />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

const SocialLink = ({
    href,
    icon,
}: {
    href: string;
    icon: React.ReactNode;
}) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    >
        {icon}
    </motion.a>
);

export default Header;
