export interface MovieQuery {
  language?: string;
  sort_by?: string;
  include_adult?: boolean;
  include_video?: boolean;
  page?: number
}