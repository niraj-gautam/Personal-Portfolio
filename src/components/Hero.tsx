import { motion } from "framer-motion";
import { Code2, Sparkles, Terminal } from "lucide-react";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-gray-900 pt-16"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col-reverse lg:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1"
                >
                    <div className="text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center justify-center lg:justify-start gap-2 text-purple-400 mb-4"
                        >
                            <Code2 className="w-5 h-5" />
                            <span className="text-sm font-medium">
                                Full Stack Developer
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
                        >
                            Crafting Digital
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                {" "}
                                Experiences
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto lg:mx-0"
                        >
                            I am{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-semibold">
                                NIRAJ GAUTAM{" "}
                            </span>
                            , a passionate full-stack developer specializing in
                            creating beautiful, functional, and user-centered
                            digital experiences.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <a
                                href="#contact"
                                className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <Terminal className="w-5 h-5" />
                                Let's Talk
                            </a>
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <Sparkles className="w-5 h-5" />
                                View Projects
                            </a>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 relative"
                >
                    <div className="w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 relative mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                        <img
                            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=400&h=400"
                            alt="John Doe"
                            className="rounded-full w-full h-full object-cover relative z-10 border-4 border-purple-500/20"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
