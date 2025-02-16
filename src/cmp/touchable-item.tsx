import React from "react";
import {
    Platform,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
} from "react-native";

const ANDROID_VERSION_LOLLIPOP = 21;

function TouchableItem(props: any) {
    if (
        Platform.OS === "android" &&
        Platform.Version >= ANDROID_VERSION_LOLLIPOP
    ) {
        const { borderless, onPress, style, ...rest } = props;

        return (
            <TouchableNativeFeedback
                {...rest}
                background={TouchableNativeFeedback.Ripple(
                    "rgba(0, 0, 0, .32)",
                    borderless,
                )}
                onPress={() => {
                    if (props.onPress) {
                        requestAnimationFrame(() => {
                            props.onPress();
                        });
                    }
                }}
                style={null}
            >
                <View style={style}>{props.children}</View>
            </TouchableNativeFeedback>
        );
    }

    return <TouchableOpacity {...props}>{props.children}</TouchableOpacity>;
}

export { TouchableItem };
