import { RefObject, createRef, useEffect, useRef } from 'react';
import { AnimationControls, useAnimation, useInView } from 'framer-motion';

interface Options {
  root?:   RefObject<Element>;
  margin?: string;
  amount?: number | 'some' | 'all';
  once?:   boolean;
}

type AnimateComponent<T extends Element> = [RefObject<T>, AnimationControls];


export const useAnimateComponent = <T extends Element>(options?: Options): AnimateComponent<T> => {
  const ref = useRef<T>(null);
  const isInView = useInView(ref, options);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView]);

  return [ref, controls];
};
