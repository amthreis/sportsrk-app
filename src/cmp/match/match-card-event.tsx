import BallSvg from '@/svg/ball-svg';
import React from 'react'
import { Image, Text, View } from 'react-native'
import styled from 'styled-components/native';
import FootballCard from './football-card';
import { posCNs } from '@/const/colors';

const Base = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

const LeftView = styled.View`

    flex: 1 1 0%;

    flex-wrap: wrap;

    flex-direction: row;
    gap: 6px;

    align-items: center;
    justify-content: flex-end;
`;

const MiddleView = styled.View`
`;

const RightView = styled.View`
    display: flex;
    flex-direction: row;
    flex: 1 1 0%;
    flex-wrap: wrap;
    
    gap: 6px;

    align-items: center;
`;

const MiddleText = styled.Text`
    color: ${ p => p.theme.text.primary };
    font-size: 17px;
    font-weight: 900;
    text-align: center;
`;

const LeftText = styled.Text`
    color: ${ p => p.theme.text.primary };
    font-size: 14px;
    font-weight: 400;
`;

const RightText = styled.Text`
    color: ${ p => p.theme.text.primary };
    font-size: 14px;
    font-weight: 400;
`;

const InfoViewPos = styled.Text<{ color: string }>`
    color: #ffffffe4;
    background-color:${ p => p.color };
    min-width: 36px;
    padding: 1px 0;
    font-size: 13px;
    font-weight: 900;
    text-align: center;
    vertical-align: middle;
    
    border-radius: 16px;
`;

const eventIcon = {
    ["GOAL"]: <BallSvg width={20} height={20} fill="darkgray" />,
    ["REDCARD"]: <FootballCard color="RED" />,
    ["YELLOWCARD"]: <FootballCard color="YELLOW" />,
    ["YELLOWREDCARD"]: <FootballCard color="YELLOWRED" />,
};

export interface MatchCardEventProps {
    time: number;
    player: string;
    side: "HOME" | "AWAY";
    type: "GOAL" | "REDCARD" | "YELLOWCARD" | "YELLOWREDCARD";
    playerpos: "GK" | "FB" | "CB" | "DM" | "CM" | "LM" | "AM" | "WG" | "ST";
}

export default function MatchCardEvent(props: MatchCardEventProps) {
    return (
        <Base>
            <LeftView>
                {
                    props.side === "HOME" && (
                        <>
                            <LeftText>{props.player.split("@")[0]}</LeftText>
                            {
                                eventIcon[props.type]
                            }
                        </>
                    )
                }
            </LeftView>
            <MiddleView><MiddleText>{props.time}''</MiddleText></MiddleView>
            <RightView>
                {
                    props.side === "AWAY" && (
                        <>
                            {
                                eventIcon[props.type]
                            }
                            <RightText>{props.player.split("@")[0]}</RightText>
                        </>
                    )
                }
            </RightView>
        </Base>
    )
};