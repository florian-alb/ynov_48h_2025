import {Base} from "@/layouts/base.tsx";
import ContainerChat from "@/components/chat/ContainerChat.tsx";

const Chat = () => {
    return (
        <Base>
            <div
                className="flex min-h-svh w-full justify-center p-6 md:p-10">
                <div className="w-full flex justify-center">
                    <ContainerChat/>
                </div>
            </div>
        </Base>
    );
};

export default Chat;


