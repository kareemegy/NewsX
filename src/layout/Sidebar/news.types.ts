export interface INews {
  id: number;
  title: string;
  icon: string;
  slug: string;
}
export interface INewsSource {
  id: number;
  title: string;
  data: INews[];
}
