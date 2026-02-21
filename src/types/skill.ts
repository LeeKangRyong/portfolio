export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
}
