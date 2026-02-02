export interface SkillItem {
  name: string;
  description: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
}
