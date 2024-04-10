import { Apple, Book, Bus, Cigarette, Computer, Gamepad2, Joystick } from "lucide-react";

interface IconProps {
    name: string
}

const icons = [
    { name: "computer",        icon: <Computer />},
    { name: "gampad-2",    icon: <Gamepad2/>},
    { name: "joystick",         icon: <Joystick />},
    { name: "bus",          icon: <Bus />},
]

export function Icon({ name }: IconProps){
    return icons.find( icon => icon.name == name )?.icon
}