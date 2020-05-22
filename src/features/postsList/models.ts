import { createStore, createEffect } from 'effector-root';
import { getPostsList } from '../../services';
import { IPost } from '../types';

export const getPostsListFx = createEffect('fetching list of blog posts', {
  handler: () => {
    return getPostsList();
  },
});

export const $postsList = createStore<IPost[]>([]).on(
  getPostsListFx.doneData,
  (store, payload) => {
    return payload;
  },
);
