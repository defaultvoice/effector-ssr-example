import * as React from 'react';
import { useStore } from 'effector-react/ssr';

import { $postsList } from './models';

export const PostsList = () => {
  const posts = useStore($postsList);
  return (
    <>
      {posts.map(({ id, title, body }) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      ))}
    </>
  );
};
