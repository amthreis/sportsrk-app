import { darkScheme, lightScheme } from "@/const/colors";
import { useColorScheme } from "react-native";

export default function useColors() {
    const colorScheme = useColorScheme();

    return colorScheme === "dark" ? darkScheme : lightScheme;
}
