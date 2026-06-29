export interface WorkCategory {
  name: string;
  slug: string;
  description?: string;
  cover?: string;
}

export interface Project {
  id: string; // Slug
  title: string;
  category: string; // Reference to WorkCategory slug
  coverImage: string;
  client: string;
  year: string;
  services: string[];
  heroMedia: {
    type: 'image' | 'video';
    url: string;
  };
  goals: string; // Rich text / Markdown
  process: string;
  results: string;
  gallery: string[];
  featured: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  author: string;
  publishedDate: string;
  category: string;
  cover: string;
  excerpt: string;
  body: string;
  relatedPosts?: string[]; // Array of slugs
  seoTitle?: string;
  seoDescription?: string;
}

export interface TeamMember {
  name: string;
  slug: string;
  role: string;
  photo: string;
  bio: string;
  socialLinks: {
    platform: 'twitter' | 'linkedin' | 'github' | 'instagram';
    url: string;
  }[];
  order: number;
}
