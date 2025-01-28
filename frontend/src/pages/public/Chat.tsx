// import Login_form from "@/components/auth/Login_form.tsx";
import {Base} from "@/layouts/base.tsx";
import SelectChat from "@/components/chat/SelectChat.tsx";
import {useState} from "react";

const Chat = () => {
    const [selectedChat, setSelectedChat] = useState(0);

    return (
        <Base>
            <div
                className="flex min-h-svh w-full justify-center p-6 md:p-10">
                <div className="w-full flex justify-center">
                    <SelectChat chat={selectedChat} setChat={setSelectedChat}/>
                </div>
            </div>
        </Base>
    );
};

export default Chat;


