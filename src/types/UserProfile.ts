export interface UserProfile {
  id: number;
  userId: number;
  bio?: string;
  avatarUrl?: string;
  stack?: string[];
  socialMedias?: { platform: string; url: string }[];
  createdAt: Date;
  updatedAt: Date;
}
