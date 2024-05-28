import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { IDropDownItem } from "../interace";
import ProfileCard from "./profile-card";

interface IProfileProps {
  avatarUrl?: string;
  name: string;
  userId: string;
  dropdownItemsArr?: IDropDownItem[][]; // send nested array for seperation [ [item1, item2], [item1, item2] ]
}

function profile({ avatarUrl, name, userId, dropdownItemsArr }: IProfileProps) {
  return (
    <div className="w-full max-w-72 outline-none">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full outline-none">
          <ProfileCard name={name} avatarUrl={avatarUrl} userId={userId} />
        </DropdownMenuTrigger>
        {dropdownItemsArr?.length && (
          <DropdownMenuContent className="max-w-full bg-white">
            {dropdownItemsArr.map((sectionArr) => (
              <>
                {sectionArr?.map((item) => (
                  <DropdownMenuItem onClick={item.onClick} className="hover:bg-gray-200 cursor-pointer">
                    {item.name}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
              </>
            ))}
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
}

export default profile;
