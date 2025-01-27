import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { LogOutIcon } from "lucide-react";

export function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  return (
    <div className="flex items-center gap-2">
      <Popover>
        <PopoverTrigger>
          <Avatar>
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </PopoverTrigger>

        <PopoverContent>
          <div className="grid flex-1 text-left text-sm leading-tight pb-2">
            <span className="truncate font-semibold">{user.name}</span>
            <span className="truncate text-xs">{user.email}</span>
          </div>
          <Separator />
          <div className="pt-2">
            <Button>
              <LogOutIcon className="w-4 h-4" />
              <span>Logout</span>
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
