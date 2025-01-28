import {Base} from "@/layouts/base.tsx";
import ContainerChat from "@/components/chat/ContainerChat.tsx";

const Chat = () => {
    // const [selectedChat, setSelectedChat] = useState(1);

    return (
        <Base>
            <div
                className="flex min-h-svh w-full justify-center p-6 md:p-10">
                <div className="w-full flex justify-center">
                    {/*<SelectChat chat={selectedChat} setChat={setSelectedChat}/>*/}
                    <ContainerChat/>
                </div>
            </div>
        </Base>
    );
};

export default Chat;


