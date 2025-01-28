import React from "react";

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

export default MessageBubble;