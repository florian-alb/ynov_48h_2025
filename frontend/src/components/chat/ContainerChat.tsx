import React, {useState, useEffect, useRef} from "react";
import SelectChat from "@/components/chat/SelectChat.tsx";
import MessageBubble from "@/components/chat/MessageBubbleProps.tsx";

interface Message {
    id: number;
    sender: string;
    content: string;
    zone: string;
}

const ContainerChat: React.FC = () => {
    const [messagesByZone, setMessagesByZone] = useState<{
        [key: string]: Message[]
    }>({
        ZONE_1: [],
        ZONE_2: [],
        ZONE_3: [],
        ZONE_4: [],
        ZONE_5: [],
    });
    const [chat, setChat] = useState<string>("ZONE_1");
    const [input, setInput] = useState<string>("");
    const [isConnected, setIsConnected] = useState<boolean>(true); // Indicateur de connexion WebSocket
    const ws = useRef<WebSocket | null>(null);

    useEffect(() => {
        // Connexion au serveur WebSocket
        const connectWebSocket = () => {
            ws.current = new WebSocket("wss://votre-serveur-websocket.com"); // Remplacez par votre URL WebSocket

            ws.current.onopen = () => {
                console.log("WebSocket connecté !");
                setIsConnected(true);
            };

            ws.current.onmessage = (event) => {
                const receivedMessage: Message = JSON.parse(event.data);
                console.log("Message reçu :", receivedMessage);

                // Ajouter le message reçu à la zone appropriée
                setMessagesByZone((prev) => ({
                    ...prev,
                    [receivedMessage.zone]: [...(prev[receivedMessage.zone] || []), receivedMessage],
                }));
            };

            ws.current.onerror = (error) => {
                console.error("WebSocket erreur :", error);
            };

            ws.current.onclose = () => {
                console.log("WebSocket déconnecté.");
                setIsConnected(false);
                // Essayer de se reconnecter après 5 secondes
                setTimeout(connectWebSocket, 5000);
            };
        };

        connectWebSocket();

        return () => {
            ws.current?.close();
        };
    }, []);

    const handleSend = () => {
        if (input.trim() !== "") {
            const newMessage: Message = {
                id: Date.now(),
                sender: "User",
                content: input,
                zone: chat,
            };

            setMessagesByZone((prev) => ({ // NOT CONNECT
                ...prev,
                [chat]: [...prev[chat], newMessage],
            }));

            if (isConnected && ws.current?.readyState === WebSocket.OPEN) {
                ws.current.send(JSON.stringify(newMessage));
            } else {
                console.warn("Message ajouté localement, WebSocket déconnecté.");
            }

            setInput("");
        }
    };

    const currentMessages = messagesByZone[chat] || [];

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
                {currentMessages.map((message) => (
                    <MessageBubble key={message.id} sender={message.sender}
                                   content={message.content}/>
                ))}
            </div>
            {!isConnected && (
                <div className="p-2 bg-orange-500 text-white text-center">
                    Impossible de se connecter au serveur distant.
                </div>
            )}
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

export default ContainerChat;
