import { ColorSchemeId, lightScheme, schemes } from "@/const/colors";
import { useState } from "react";
import { Appearance, useColorScheme } from "react-native";

export function useCustomTheme() {
    const [theme] = useState<ColorSchemeId>("light");

    let currScheme = lightScheme;

    if (theme === "system") {
        const themeCol = useColorScheme();

        if (themeCol) currScheme = schemes[themeCol];
    } else {
        currScheme = schemes[theme];
        Appearance.setColorScheme("light");
    }

    console.log("theme", theme);
    return currScheme;
}
