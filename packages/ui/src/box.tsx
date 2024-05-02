import { cn } from "@repo/utils/cn";

interface IBoxProps {
  className?: string;
  children: React.ReactNode;
}

function Box({ className, children }: IBoxProps) {
  return (
    <div className={cn("rounded-2xl p-1.5 bg-[var(--theme-background)] shadow-lg mob:p-3 tabL:p-5", className)}>
      {children}
    </div>
  );
}

export default Box;
