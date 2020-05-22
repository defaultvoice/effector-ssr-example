import * as React from 'react';
import { useEvent } from 'effector-react/ssr';

import { START } from 'lib/effector';
import * as model from './model';
import { PostsList } from '../../features/postsList';

export const HomePage = () => {
  const pageLoaded = useEvent(model.pageLoaded);

  React.useEffect(() => pageLoaded(), []);

  return (
    <section>
      <h2>Hello world! Effector SSR example</h2>
      <div>
        <PostsList />
      </div>
    </section>
  );
};

HomePage[START] = model.pageLoaded;
