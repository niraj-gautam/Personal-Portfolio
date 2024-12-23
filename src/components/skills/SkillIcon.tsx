import { type ReactNode } from 'react';

interface SkillIconProps {
  icon: ReactNode;
}

export const SkillIcon = ({ icon }: SkillIconProps) => {
  return (
    <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
      {/* Apply sizing here instead of in the icon itself */}
      <div className="w-6 h-6">
        {icon}
      </div>
    </div>
  );
};
