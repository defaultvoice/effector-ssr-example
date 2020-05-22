import * as React from 'react';
import { useStore, useList } from 'effector-react/ssr';

import { $postsList } from './models';

export const PostsList = () => {
  const list = useList($postsList, ({ title, body }) => (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  ));

  return <div>{list}</div>;
};
