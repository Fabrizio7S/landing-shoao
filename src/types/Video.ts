export interface Video {
  videoId: string;
  category?: string;
  /** Si viene del feed ya trae título y miniatura; si no, la tarjeta los busca. */
  title?: string;
  thumbnail?: string;
  publishedAt?: string;
}
