import { Avatar, AvatarFallback, AvatarImage } from "../avatar";

interface IProfileCardProps {
  avatarUrl?: string;
  name: string;
  userId: string;
}

function ProfileCard({ avatarUrl, name, userId }: IProfileCardProps) {
  return (
    <div className="w-full flex gap-4 items-center border border-gray-200 px-2 py-3 rounded-xl cursor-pointer focus:border-none overflow-hidden">
      <Avatar>
        <AvatarImage className="" src={avatarUrl} />
        <AvatarFallback className="bg-gray-500 text-white">{name.slice(0,2)}</AvatarFallback>
      </Avatar>
      <div className="grid gap-1">
        <p className="text-sm font-medium leading-none">{name}</p>
        <p className="text-sm text-muted-foreground">{userId}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
