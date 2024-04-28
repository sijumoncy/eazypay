import { cn } from "@repo/utils/cn";

interface IBoxProps {
  className?: string;
  children: React.ReactNode;
}

function Box({ className, children }: IBoxProps) {
  return (
    <div className={cn("rounded-2xl p-5 bg-[var(--theme-light)] shadow-lg", className)}>
      {children}
    </div>
  );
}

export default Box;
