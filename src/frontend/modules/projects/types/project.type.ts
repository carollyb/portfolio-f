export type ProjectProps = {
  tag: string;
  view: 'grid' | 'list';
};

export type Project = {
  title: string;
  year: number;
  description: string;
  tags?: string[];
  image?: string;
};
