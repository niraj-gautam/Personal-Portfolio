import { Section } from './ui/Section';
import { SkillCard } from './skills/SkillCard';
import { skillCategories } from '@/data/skills';

const Skills = () => {
  return (
    <Section
      id="skills"
      title="Technical Skills"
      description="A comprehensive overview of my technical skills and expertise across different areas of software development."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <SkillCard key={index} category={category} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
