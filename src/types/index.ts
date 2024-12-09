export interface NavItem {
  title: string;
  path: string;
  subItems?: NavItem[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
  category: 'ai' | 'iot' | 'fullstack';
}