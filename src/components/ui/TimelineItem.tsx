import React from "react";
import { motion } from "framer-motion";

interface TimelineItemProps {
    experience: {
        year: string;
        company: string;
        role: string;
        description: string;
    };
    index: number;
    inView: boolean;
}

const TimelineItem = ({ experience, index, inView }: TimelineItemProps) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            animate={
                inView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: isEven ? -20 : 20 }
            }
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex md:items-center mb-8 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
            }`}
        >
            <div
                className={`flex-1 ${
                    isEven ? "md:text-right" : "md:text-left"
                }`}
            >
                <div
                    className={`bg-white/5 p-6 rounded-lg max-w-md ${
                        isEven ? "md:ml-auto" : "md:mr-auto"
                    }`}
                >
                    <span className="text-purple-600 font-medium">
                        {experience.year}
                    </span>
                    <h4 className="text-lg font-bold mt-2">
                        {experience.company}
                    </h4>
                    <p className="text-gray-300 font-medium">
                        {experience.role}
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                        {experience.description}
                    </p>
                </div>
            </div>

            <div className="mx-4 relative">
                <div className="w-4 h-4 rounded-full bg-purple-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="flex-1" />
        </motion.div>
    );
};

export default TimelineItem;
