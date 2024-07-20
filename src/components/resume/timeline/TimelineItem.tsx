import { useTranslations } from 'next-intl';
import React from 'react';

interface TimelineItemProp {
  starDate: string;
  endDate?: string;
  technologies?: string[];
  jobTitle: string;
  company: string;
  description?: string;
  featured?: string[];
}

export const TimelineItem: React.FC<TimelineItemProp> = ({
  company,
  description,
  endDate,
  featured,
  jobTitle,
  starDate,
  technologies,
}) => {
  const t = useTranslations('work-experience');

  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 dark:bg-neutral-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
      <time className="mb-1 text-sm font-normal leading-none dark:text-neutral-400 capitalize">
        {starDate} {endDate && `- ${endDate}`}
      </time>
      <h3 className="text-lg font-semibold">{`${jobTitle} ${t(
        'in'
      )} ${company}`}</h3>
      {technologies && (
        <p className="font-mono dark:text-neutral-400 text-sm">
          {technologies.map((tech, index, array) => (
            <React.Fragment key={tech}>
              <span>{tech}</span>
              {index < array.length - 1 && ' | '}
            </React.Fragment>
          ))}
        </p>
      )}
      {description && (
        <p className="dark:text-neutral-400 text-sm">{description}</p>
      )}
      {featured && (
        <ul className="list-disc pl-8 dark:text-neutral-400">
          {featured.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </li>
  );
};
