const API_URL = 'http://localhost:5000/api';

export type InsightType = "Article" | "Issues" | "Story" | "News";

export interface ProjectData {
  _id?: string;
  id: string;
  title: string;
  subtitle?: string;
  client: string;
  service: string;
  category: string;
  industry: string;
  location: string;
  year: string;
  status: "ongoing" | "completed";
  heroImage: string;
  summary: string;
  problem: string;
  approach: string;
  result: string;
  metrics: { label: string; value: string }[];
  delivered?: string[];
  collaborators?: string[];
  mainContent?: {
    heading: string;
    text: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  galleryImages?: string[];
}

export interface InsightData {
  _id?: string;
  id: string;
  title: string;
  excerpt: string;
  category: string;
  type: InsightType;
  date: string;
  readTime: string;
  featured?: boolean;
  content: string;
  bannerImage?: string;
  author?: {
    name: string;
    role: string;
    image?: string;
  };
  lastUpdated?: string;
}

export const api = {
  getProjects: async (): Promise<ProjectData[]> => {
    const res = await fetch(`${API_URL}/projects`);
    if (!res.ok) throw new Error('Failed to fetch projects');
    return res.json();
  },
  getProjectById: async (id: string): Promise<ProjectData> => {
    const res = await fetch(`${API_URL}/projects/${id}`);
    if (!res.ok) throw new Error('Failed to fetch project');
    return res.json();
  },
  createProject: async (data: Partial<ProjectData>) => {
    const res = await fetch(`${API_URL}/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to create project');
    return res.json();
  },
  updateProject: async (id: string, data: Partial<ProjectData>) => {
    const res = await fetch(`${API_URL}/projects/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to update project');
    return res.json();
  },
  deleteProject: async (id: string) => {
    const res = await fetch(`${API_URL}/projects/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete project');
    return res.json();
  },
  getInsights: async (): Promise<InsightData[]> => {
    const res = await fetch(`${API_URL}/insights`);
    if (!res.ok) throw new Error('Failed to fetch insights');
    return res.json();
  },
  getInsightById: async (id: string): Promise<InsightData> => {
    const res = await fetch(`${API_URL}/insights/${id}`);
    if (!res.ok) throw new Error('Failed to fetch insight');
    return res.json();
  },
  createInsight: async (data: Partial<InsightData>) => {
    const res = await fetch(`${API_URL}/insights`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to create insight');
    return res.json();
  },
  updateInsight: async (id: string, data: Partial<InsightData>) => {
    const res = await fetch(`${API_URL}/insights/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to update insight');
    return res.json();
  },
  deleteInsight: async (id: string) => {
    const res = await fetch(`${API_URL}/insights/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete insight');
    return res.json();
  },
};
