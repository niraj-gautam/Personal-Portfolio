import { Section } from "./ui/Section";
import { ProjectCard } from "./projects/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
    return (
        <Section
            id="projects"
            title="Featured Projects"
            description="Here are some of my recent projects that showcase my skills and expertise in web development."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex justify-center container mx-auto">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </Section>
    );
};

export default Projects;
