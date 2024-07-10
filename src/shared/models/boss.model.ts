export interface BossAPIResponse {
  success: boolean;
  count: number;
  total: number;
  data: Boss[];
}
export interface Boss {
  id: string;
  name: string;
  image: string;
  region: string;
  description: string;
  location: string;
  drops: string[];
  healthPoints: string;
}