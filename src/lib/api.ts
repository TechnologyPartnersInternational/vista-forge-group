import { adminSession } from "./adminSession";

const API_URL = import.meta.env.VITE_API_URL || '/api';

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

export class ApiError extends Error {
  constructor(message: string, public status: number) {
    super(message);
    this.name = "ApiError";
  }
}

/** Turn a title into a URL-safe slug that the API accepts as an id. */
export const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/[\s-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 200);

async function request<T>(path: string, init: RequestInit = {}, fallbackError: string): Promise<T> {
  const headers = new Headers(init.headers);
  if (init.body) headers.set("Content-Type", "application/json");

  // Attach the admin token for writes.
  const method = (init.method || "GET").toUpperCase();
  if (method !== "GET") {
    const token = adminSession.getToken();
    if (token) headers.set("Authorization", `Bearer ${token}`);
  }

  const res = await fetch(`${API_URL}${path}`, { ...init, headers });
  const data = await res.json().catch(() => null);

  if (!res.ok) {
    if (res.status === 401 && method !== "GET") adminSession.clear();
    throw new ApiError(data?.message || fallbackError, res.status);
  }
  return data as T;
}

const encode = encodeURIComponent;

export const api = {
  login: (username: string, password: string) =>
    request<{ token: string; expiresAt: number }>(
      "/auth/login",
      { method: "POST", body: JSON.stringify({ username, password }) },
      "Login failed",
    ),

  getProjects: () => request<ProjectData[]>("/projects", {}, "Failed to fetch projects"),
  getProjectById: (id: string) =>
    request<ProjectData>(`/projects/${encode(id)}`, {}, "Failed to fetch project"),
  createProject: (data: Partial<ProjectData>) =>
    request<ProjectData>("/projects", { method: "POST", body: JSON.stringify(data) }, "Failed to create project"),
  updateProject: (id: string, data: Partial<ProjectData>) =>
    request<ProjectData>(`/projects/${encode(id)}`, { method: "PUT", body: JSON.stringify(data) }, "Failed to update project"),
  deleteProject: (id: string) =>
    request<{ message: string }>(`/projects/${encode(id)}`, { method: "DELETE" }, "Failed to delete project"),

  getInsights: () => request<InsightData[]>("/insights", {}, "Failed to fetch insights"),
  getInsightById: (id: string) =>
    request<InsightData>(`/insights/${encode(id)}`, {}, "Failed to fetch insight"),
  createInsight: (data: Partial<InsightData>) =>
    request<InsightData>("/insights", { method: "POST", body: JSON.stringify(data) }, "Failed to create insight"),
  updateInsight: (id: string, data: Partial<InsightData>) =>
    request<InsightData>(`/insights/${encode(id)}`, { method: "PUT", body: JSON.stringify(data) }, "Failed to update insight"),
  deleteInsight: (id: string) =>
    request<{ message: string }>(`/insights/${encode(id)}`, { method: "DELETE" }, "Failed to delete insight"),
};
