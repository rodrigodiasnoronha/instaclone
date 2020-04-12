export interface Post {
  id: number;
  image: string;
  small: string;
  aspectRatio: number;
  description: string;
  authorId: number;
}

export interface Author {
  id: number;
  name: string;
  avatar: string;
}
