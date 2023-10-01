import { AnimationControls, useAnimation, useInView } from 'framer-motion';
import { RefObject, createRef, useEffect, useRef } from 'react';

type AnimateComponent<T extends Element> = [RefObject<T>, AnimationControls];

export const useAnimateComponent = <T extends Element> (): AnimateComponent<T> => {
  const ref = useRef<T>(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView]);

  return [ref, controls];
};
