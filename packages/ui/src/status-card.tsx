import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

interface IStatusCardProps {
  icon?: React.ReactNode;
  title: string;
  Content: string;
  subContent?: string;
}

function StatusCard({ icon, Content, title, subContent }: IStatusCardProps) {
  return (
    <Card className="">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-">
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
