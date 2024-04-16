
import {  StatusBar, View, ViewProps } from "react-native";
import styled from "styled-components/native";

const Base = styled.View`
    display: flex;
    height: 100%;
`;

export default function ScreenView(props: ViewProps) {
    return (
        <View>
            <Base>{props.children}</Base>
        </View>
    );
}
