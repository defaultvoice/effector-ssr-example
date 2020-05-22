import { root } from 'effector-root';

root.onCreateEffect((effect) => {
  if (process.env.NODE_ENV !== 'production') {
    effect.fail.watch(({ params, error }) => {
      console.error(
        `Effect ${effect.compositeName.fullName} called with`,
        params,
        `is failed with error`,
        error,
      );
    });
  }
});

export const START = `☄️/start-event`;
