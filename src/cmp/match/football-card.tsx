import { View } from "react-native";
import styled from "styled-components/native";

interface FootballCardProps {
    color: "YELLOW" | "RED" | "YELLOWRED";
}

const cardColor = {
    ["YELLOW"]: "#fbbf24",
    ["RED"]: "#f87171",
    ["YELLOWRED"]: "orange",
};

const Card = styled.View<{ color: string, tX: string, tY: string }>`
    width: 16px;
    height: 24px;

    transform: translateX(${ p => p.tX }) translateY(${ p => p.tY }) ;

    border-radius: 4px;
    background-color: ${ p => p.color };
`;

export default function FootballCard(props: FootballCardProps) {
    if (props.color === "YELLOWRED") {
        return (
            <Card color={cardColor["YELLOW"]} tX={"-3px"} tY={"-3px"} >
                <Card color={cardColor["RED"]} tX={"6px"} tY={"6px"} ></Card>
            </Card>
        );
    } else {
        return (
            <Card color={cardColor[props.color]} tX={"0px"} tY={"0px"} ></Card>
        );
    }
}
