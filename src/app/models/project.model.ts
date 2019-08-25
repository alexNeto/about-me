import { Tag } from './timeline-info.model';

export interface Project {
    title: string;
    subtitle: string;
    subproject: Subproject[];
}

export interface Subproject {
    title: string;
    link: string;
    tags: Tag[];
}
