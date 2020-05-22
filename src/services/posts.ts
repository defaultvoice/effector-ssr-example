import axios from 'axios';
import { IPost } from '../features/types';

export const getPost = (id: string) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.data);
};

export const getPostsList = (): Promise<IPost[]> => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.data);
};
