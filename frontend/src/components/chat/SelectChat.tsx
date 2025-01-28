import React, {useState} from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface Message {
    id: number;
    sender: string;
    content: string;
}

const ChatPage: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        {id: 1, sender: "User", content: "Bonjour, comment ça va ?"},
        {id: 2, sender: "Bot", content: "Ça va bien, merci ! Et toi ?"},
    ]);
    const [input, setInput] = useState<string>("");
    const [chat, setChat] = useState<string>("ZONE_1");

    const handleSend = () => {
        if (input.trim() !== "") {
            setMessages([
                ...messages,
                {id: messages.length + 1, sender: "User", content: input},
            ]);
            setInput("");
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100 w-full mt-[100px]">
            <header
                className="p-4 bg-blue-600 text-white text-center text-xl font-semibold">
                Chat App
            </header>
            <div className="p-4">
                <SelectChat chat={chat} setChat={setChat}/>
            </div>
            <div className="flex-grow p-4 overflow-y-auto space-y-4">
                {messages.map((message) => (
                    <MessageBubble key={message.id} sender={message.sender}
                                   content={message.content}/>
                ))}
            </div>
            <div className="p-4 bg-white flex items-center border-t">
                <input
                    type="text"
                    className="flex-grow border rounded-lg p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Écris un message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    onClick={handleSend}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
                >
                    Envoyer
                </button>
            </div>
        </div>
    );
};

interface MessageBubbleProps {
    sender: string;
    content: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({sender, content}) => {
    const isUser = sender === "User";
    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
            <div
                className={`max-w-xs p-3 rounded-lg ${
                    isUser ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
                }`}
            >
                <p className="text-sm font-medium">{sender}</p>
                <p>{content}</p>
            </div>
        </div>
    );
};

const SelectChat: React.FC<{
    chat: string;
    setChat: React.Dispatch<React.SetStateAction<string>>;
}> = ({chat, setChat}) => {
    const handleChange = (value: string) => {
        console.log("Selected chat:", value);
        setChat(value);
    };

    return (
        <Select value={chat} onValueChange={handleChange}>
            <SelectTrigger className="">
                <SelectValue placeholder="Select Chat"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Toulouse</SelectLabel>
                    <SelectItem value="ZONE_1">ZONE 1</SelectItem>
                    <SelectItem value="ZONE_2">ZONE 2</SelectItem>
                    <SelectItem value="ZONE_3">ZONE 3</SelectItem>
                    <SelectItem value="ZONE_4">ZONE 4</SelectItem>
                    <SelectItem value="ZONE_5">ZONE 5</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default ChatPage;
