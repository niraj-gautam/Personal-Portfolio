import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={cn("bg-gray-800 rounded-xl p-6", className)}>
      {children}
    </div>
  );
};
