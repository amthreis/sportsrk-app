import { Ionicons } from "@expo/vector-icons";
import { Link, usePathname, useSegments } from "expo-router";
import { TrophyIcon } from "lucide-react-native";
import React from "react";
import {
    SafeAreaView,
    StatusBar,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
} from "react-native";
import styled from "styled-components/native";

const Base = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border: 0 solid #d3d3d3;
    border-bottom-width: 2px;
    padding: 12px 12px;
`;

const TitleView = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3px;
    padding: 0 8px;
`;

const Title = styled.Text`
    font-size: 24px;
    font-weight: 900;
`;

const OptionsView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    height: 100%;
`;

const LinkButton = styled.TouchableOpacity<{ selected: boolean }>`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 8px;
    background-color: ${ ({ selected = false }) => selected ? "#d3d3d3" : "transparent" };
    border-radius: 8px;
`;

const LBText = styled.Text`
    font-size: 14px;
    font-weight: 700;
`;

export default function Header() {
    const path = usePathname();

    // console.log(usePathname());
    // console.log(useSegments());

    return (
        <Base>
            <Link href="/" asChild>
                <TitleView>
                    <TrophyIcon size={18} color="black"/>
                    <Title>SPORTSRK</Title>
                </TitleView>
            </Link>
            <OptionsView>
                <Link href="/" asChild>
                <LinkButton selected={path === "/"}>
                    <LBText>TOP 100</LBText>
                </LinkButton>
                </Link>
                <Link href="/matches" asChild>
                    <LinkButton selected={path === "/matches"}>
                        <LBText>MATCHES</LBText>
                    </LinkButton>
                </Link>
            </OptionsView>
        </Base>
    );
}
