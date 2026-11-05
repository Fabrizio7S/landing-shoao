export interface Service {
  id: number;
  number: string;
  title: string;
  description: string;

  systems?: string[];
  extra?: string;
}