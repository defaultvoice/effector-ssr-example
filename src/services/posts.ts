import { IPost } from '../features/types';

export const getPost = (id: string) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  ).then((response) => response.json());
};

export const getPostsList = (): Promise<IPost[]> => {
  return fetch(`https://jsonplaceholder.typicode.com/posts`).then((response) =>
    response.json(),
  );
};
