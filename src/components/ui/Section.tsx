import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { Container } from './Container';

interface SectionProps {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, title, description, children, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`bg-gray-900 py-20 ${className}`}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-gray-400 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </Container>
    </section>
  );
};
