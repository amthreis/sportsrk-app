
export interface ColorScheme {
    backgroundColor: string;
    color: string;

    text: {
        primary: string;
        secondary: string;
    }

    tray: {
        backgroundColor: string;
        contentColor: "dark" | "light" | "auto" | "inverted";
    }
};

export const lightScheme: ColorScheme = {
    backgroundColor: "white",
    color: "black",

    text: {
        primary: "black",
        secondary: "gray"
    },

    tray: {
        backgroundColor: "white",
        contentColor: "dark",
    }
}

export const darkScheme: ColorScheme = {
    backgroundColor: "red",
    color: "white",

    text: {
        primary: "green",
        secondary: "gray"
    },

    tray: {
        backgroundColor: "white",
        contentColor: "dark",
    }
}

export const schemes = {
    ["dark"]: darkScheme,
    ["light"]: lightScheme,
}

export type ColorSchemeId = "system" | "dark" | "light";

export const glColors = {
    bg: "black",
    fg: "red"
};

export const posCNs = {
    ["GK"]: "#CA8A04",

    ["CB"]: "#2563EB",
    ["FB"]: "#2563EB",

    ["DM"]: "#16A34A",
    ["CM"]: "#16A34A",
    ["LM"]: "#16A34A",
    ["AM"]: "#16A34A",

    ["WG"]: "#DC2626",
    ["ST"]: "#DC2626",
};