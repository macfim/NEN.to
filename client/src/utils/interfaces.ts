export interface IGenre {
  id: string;
  title: string;
}

export interface IMovie {
  id: string;
  title: string;
  poster: string;
  genres: IGenre[];
  publishedAt: string;
  updateAt: string;
}
