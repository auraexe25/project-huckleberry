import { ColumnDef } from "@tanstack/react-table";

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      members: {
        Row: {
          id: string;
          created_at: string;
          profile_photo: string;
          user_name: string;
          email: string;
          mobile_no: number;
          role: string;
          github: string;
          linkedin: string;
          twitter: string;
          other_socials: string[];
          caption: string | null;
          introduction: string;
          is_admin: boolean;
          is_super_admin: boolean;
        };
        Insert: {
          id?: string;
          created_at?: string;
          profile_photo: string;
          user_name: string;
          email: string;
          mobile_no: number;
          role: string;
          github: string;
          linkedin: string;
          twitter: string;
          other_socials: string[];
          caption?: string | null;
          introduction: string;
          is_admin?: boolean;
          is_super_admin?: boolean;
        };
        Update: {
          id?: string;
          created_at?: string;
          profile_photo?: string;
          user_name?: string;
          email?: string;
          mobile_no?: number;
          role?: string;
          github?: string;
          linkedin?: string;
          twitter?: string;
          other_socials?: string[];
          caption?: string | null;
          introduction?: string;
          is_admin?: boolean;
          is_super_admin?: boolean;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

export interface Member {
  id: string;
  created_at: string;
  profile_photo: string;
  user_name: string;
  email: string;
  mobile_no: number;
  role: string;
  github: string;
  linkedin: string;
  twitter: string;
  other_socials: string[];
  caption: string | null;
  introduction: string;
  is_admin: boolean;
  is_super_admin: boolean;
}

export type MemberFormData = Omit<Member, "id" | "created_at"> & {
  id?: string;
  created_at?: string;
};

export interface MemberRegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: Partial<Member>) => void;
  defaultValues: Member | null;
  isEditing?: boolean;
  isLoading?: boolean;
}