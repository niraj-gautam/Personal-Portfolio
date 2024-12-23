import { motion } from "framer-motion";
import { type SkillCategory } from "@/types";
import { SkillIcon } from "./SkillIcon";
import { Card } from "../ui/Card";

interface SkillCardProps {
    category: SkillCategory;
    index: number;
}

export const SkillCard = ({ category, index }: SkillCardProps) => {
    return (
        <Card>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="hover:bg-gray-750 transition-colors"
            >
                <div className="flex items-center gap-3 mb-4">
                    <SkillIcon icon={category.icon} />
                    <h3 className="text-xl font-semibold text-white">
                        {category.title}
                    </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                        <motion.span
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: (index * 3 + skillIndex) * 0.025,
                            }}
                            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </Card>
    );
};
