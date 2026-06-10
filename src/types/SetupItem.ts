export interface SetupItem {
  id: number;
  name: string;
  category: "Periféricos" | "Componentes" | "Software" | "Audio y Video";
  description: string;
  affiliateUrl?: string;
}
