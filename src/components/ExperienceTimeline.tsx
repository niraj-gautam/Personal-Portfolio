import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TimelineItem from "./ui/TimelineItem";
import { Section } from "./ui/Section";
import { experiences } from "../data/experiences";

const ExperienceTimeline = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Section
            id="experience"
            title="Experience"
            description="Showcasing my professional journey and contributions to the tech world."
        >
            <div ref={ref} className="mb-16">
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-purple-600" />

                    {experiences.map((experience, index) => (
                        <TimelineItem
                            key={index}
                            experience={experience}
                            index={index}
                            inView={inView}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default ExperienceTimeline;
