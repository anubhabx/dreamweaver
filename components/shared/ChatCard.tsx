import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { TextSelectionIcon } from "lucide-react";

type Props = {
  message: {
    content: string | Promise<string>;
    isUser: boolean;
  };
};

const ChatCard = ({ message }: Props) => {
  const { user } = useUser();

  return (
    <Card className="max-w-screen-md mx-auto w-full">
      <div className="flex flex-col gap-4">
        <CardContent>
          <CardHeader className="px-0 py-4">
            <div className="flex items-center gap-4">
              {message.isUser ? (
                <>
                  <Image
                    src={user?.imageUrl || "/avatar-placeholder.svg"}
                    alt="User avatar"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span>{user?.firstName}</span>
                </>
              ) : (
                <>
                  <TextSelectionIcon
                    size={24}
                    strokeWidth={1.5}
                    color="currentColor"
                  />
                  <span>Dreamweaver</span>
                </>
              )}
            </div>
          </CardHeader>

          <div className="w-full h-[.5px] bg-slate-500/50 my-4" />

          <CardDescription className="text-primary text-base">
            {message.content}
          </CardDescription>
        </CardContent>
      </div>
    </Card>
  );
};

export default ChatCard;
