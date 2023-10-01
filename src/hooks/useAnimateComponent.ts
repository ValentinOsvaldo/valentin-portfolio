import { useAnimation, useInView } from 'framer-motion';
import { RefObject, useEffect } from 'react';

export const useAnimateComponent = <T extends Element>(ref: RefObject<T>) => {
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView]);

  return [controls, isInView];
};
