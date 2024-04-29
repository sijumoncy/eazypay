import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { cn } from "@repo/utils/cn";

interface IStatusCardProps {
  icon?: React.ReactNode;
  title: string;
  Content: string;
  subContent?: string;
  className?: string;
}

function StatusCard({
  icon,
  Content,
  title,
  subContent,
  className,
}: IStatusCardProps) {
  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold">{Content}</div>
        <p className="text-xs text-muted-foreground">{subContent}</p>
      </CardContent>
    </Card>
  );
}

export default StatusCard;
