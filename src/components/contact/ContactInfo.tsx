import { motion } from "framer-motion";
import { Mail, MapPin, User } from "lucide-react";

const contactItems = [
    {
        icon: <User className="w-6 h-6" />,
        title: "Name",
        content: "Niraj Gautam",
    },
    {
        icon: <Mail className="w-6 h-6" />,
        title: "Email",
        content: "contact@example.com",
        href: "mailto:contact@example.com",
    },
    {
        icon: <MapPin className="w-6 h-6" />,
        title: "Location",
        content: "San Francisco, CA",
    },
];

export const ContactInfo = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
        >
            {contactItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                        {item.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                            {item.title}
                        </h3>
                        {item.href ? (
                            <a
                                href={item.href}
                                className="text-gray-300 hover:text-purple-400 transition-colors"
                            >
                                {item.content}
                            </a>
                        ) : (
                            <p className="text-gray-300">{item.content}</p>
                        )}
                    </div>
                </div>
            ))}
        </motion.div>
    );
};