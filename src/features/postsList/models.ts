import { root } from 'effector-root';
import { getPostsList } from '../../services';
import { IPost } from '../types';

export const $postsList = root.createStore<IPost[]>([]);

export const getPostsListFx = root.createEffect('fetching list of blog posts', {
  handler: () => {
    return getPostsList();
  },
});

$postsList.on(getPostsListFx.doneData, (_, payload) => payload);
