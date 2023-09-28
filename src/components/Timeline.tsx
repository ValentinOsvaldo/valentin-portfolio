import { FC, ReactNode } from "react";

interface TimelineElementProps {
  date: string;
  title: string;
  children?: ReactNode;
}

export const TimelineElement: FC<TimelineElementProps> = ({
  children,
  title,
  date,
}) => {
  return (
    <li className="mb-6 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {date}
      </time>
      <h3 className="text-lg font-semibold text-gray-300">{title}</h3>
      { children }
    </li>
  );
};

interface TimelineProps {
  children: ReactNode | ReactNode[];
}

export const Timeline: FC<TimelineProps> = ({ children }) => {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      {children}
    </ol>
  );
};
