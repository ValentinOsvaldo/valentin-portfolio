import { Timeline, TimelineElement } from './Timeline';

export * from './About';
export * from './Contact';
export * from './Header';
export * from './Hero';
export * from './Projects';
export * from './ProjectModal';
export * from './ProjectCard';

export const TimeLine = Object.assign(Timeline, {
  Element: TimelineElement,
});
