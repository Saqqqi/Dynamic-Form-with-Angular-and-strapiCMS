// src/models/Resumes.ts
export interface Resumes {
  data: {
    id: number;
    attributes: {
      name: string;
      email: string | null;
      phone: string | null;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      Experience: DynamicFieldDetail[]; // Update to match the actual structure
    };
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}


// Define a new interface for dynamic fields
export interface DynamicField {
  section: string;
  fields: DynamicFieldDetail[];
}

// src/models/Resumes.ts
export interface DynamicFieldDetail {
  id: number;
  title: string;
  company?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  description?: string | null;
}

