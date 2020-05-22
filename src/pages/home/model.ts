import { createEvent, forward } from 'effector-root';

import { getPostsListFx } from '../../features/postsList/models';

export const pageLoaded = createEvent();

forward({
  from: pageLoaded,
  to: getPostsListFx,
});
