import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { type Project } from "@/types";

interface ProjectCardProps {
    project: Project;
    index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 rounded-xl overflow-hidden group"
        >
            <div className="relative h-40 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                        <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4">
                    <ProjectLink
                        href={project.github}
                        icon={<Github size={20} />}
                        label="Code"
                    />
                    <ProjectLink
                        href={project.demo}
                        icon={<ExternalLink size={20} />}
                        label="Demo"
                    />
                </div>
            </div>
        </motion.div>
    );
};

const ProjectLink = ({
    href,
    icon,
    label,
}: {
    href: string;
    icon: React.ReactNode;
    label: string;
}) => (
    <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
    >
        {icon}
        {label}
    </motion.a>
);
