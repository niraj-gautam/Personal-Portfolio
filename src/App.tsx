import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import Experience from "./components/ExperienceTimeline";

function App() {
    return (
        <div className="bg-gray-900 min-h-screen">
            <Header />
            <main>
                <Hero />
                <About />
                {/* <Experience /> */}
                <Projects />
                <Skills />
                <Contact />
            </main>
            <footer className="bg-gray-900 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-gray-400">
                        © {new Date().getFullYear()} John Doe. All rights
                        reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default App;
