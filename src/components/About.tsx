import { motion } from "framer-motion";
import { Section } from "./ui/Section";

const About = () => {
    return (
        <Section id="about" title="About Me" description="Know more about me.">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1"
                >
                    <div className="relative w-full max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-cyan-800 rounded-xl blur-2xl opacity-30"></div>
                        <img
                            src="https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="About Me"
                            className="rounded-xl w-full h-full object-cover relative z-10 aspect-[4/3]"
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1"
                >
                    <p className="text-gray-300 mb-6">
                        I'm a passionate full-stack developer with expertise in
                        modern web technologies. My journey in software
                        development started 5 years ago, and I've been crafting
                        digital experiences ever since.
                    </p>
                    <p className="text-gray-300">
                        I specialize in building scalable applications using
                        React, Node.js, and cloud technologies. When I'm not
                        coding, you'll find me contributing to open-source
                        projects or mentoring aspiring developers.
                    </p>
                </motion.div>
            </div>
        </Section>
    );
};

export default About;
