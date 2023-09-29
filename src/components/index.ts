import { Timeline, TimelineElement } from './Timeline';

export * from './About';
export * from './Header';
export * from './Hero';
export * from './Projects';
export * from './ProjectCard';

export const TimeLine = Object.assign(Timeline, {
  Element: TimelineElement,
});
