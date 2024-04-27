import { Avatar, AvatarFallback, AvatarImage } from "../avatar";

interface IProfileProps {
  avatarUrl?: string;
  name: string;
  userId: string;
}

function profile({ avatarUrl, name, userId }: IProfileProps) {
  return (
    <div className="flex gap-4 items-center border border-gray-200 px-2 py-3 rounded-xl cursor-pointer">
      <Avatar>
        <AvatarImage className="" src={avatarUrl} />
        <AvatarFallback className="bg-gray-500 text-white">CN</AvatarFallback>
      </Avatar>
      <div className="grid gap-1">
        <p className="text-sm font-medium leading-none">{name}</p>
        <p className="text-sm text-muted-foreground">{userId}</p>
      </div>
    </div>
  );
}

export default profile;
