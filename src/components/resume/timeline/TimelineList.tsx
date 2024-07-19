interface TimelineListProps {
  children: React.ReactNode;
}

export const TimelineList: React.FC<TimelineListProps> = ({ children }) => {
  return (
    <ol className="relative border-s border-neutral-200 dark:border-neutral-700">
      {children}
    </ol>
  );
};
