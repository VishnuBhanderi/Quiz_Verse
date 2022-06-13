import { Dimensions } from "react-native";
const{width, height} = Dimensions.get('window');

export const COLORS = {
    primary : "#252c4a",
    secondary: "#1E90FF",
    accent:"#3498db",

    success:"#00C851",
    success1:"#00C85120",
    error:"#FF0000",
    error1:"#FF000020",

    black: "#171717",
    white:"#FFFFFF",
    background:"#252c4as"
}

export const SIZES = {
    base: 10,
    width,
    height
}