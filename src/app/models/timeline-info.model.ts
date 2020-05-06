export interface TimelineInfo {
  date: string;
  header: string;
  content: string;
  tags: Tag[];
}

export interface Tag {
  link: string;
  text: string;
  color?: string,
  background?: string
}
