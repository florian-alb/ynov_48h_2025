import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const SelectChat = ({chat, setChat}: {
    chat: string,
    setChat: React.Dispatch<React.SetStateAction<string>>
}) => {

    // Mise à jour de l'état à chaque changement de sélection
    const handleChange = (value: string) => {
        console.log("Selected chat:", value);
        setChat(value);
    };

    return (
        <Select value={chat} onValueChange={handleChange}>
            <SelectTrigger className="w-[180px]">
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

export default SelectChat;
