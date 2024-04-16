import React from 'react'
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import MatchCardEvent, { MatchCardEventProps } from './match-card-event';
import { formatDistanceToNow } from 'date-fns';
import { formatMMR } from '@/utils/no-format';


const ScoreView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8px;
`;

const Score = styled.Text`
    color: ${ p => p.theme.text.primary };
    font-size: 24px;
    font-weight: 900;
`;

const DateCmp = styled.Text`
    color: ${ p => p.theme.text.secondary };
    font-size: 14px;
    font-weight: 400;
    margin-top: 2px;
    line-height: 24px;
`;

const Separator = styled.View<{ width: string, height: string }>`
    background-color: #d3d3d3;
    height: ${ p=> p.height };
    width: ${ p=> p.width };
    align-self: center;

    margin: 14px 0;
`;

export interface MatchCardProps {
    id: string;
    state: string;
    time: string;
    avgmmr: number;

    data: {
        teams: {
            matchId: string;
            side: string;
            goals: number;
        }[];
    };

    events: MatchCardEventProps[];
}

export default function MatchCard(props: MatchCardProps) {
    const events: MatchCardEventProps[] = [
        {
            player: "Matilda88",
            playerpos: "WG",
            side: "HOME",
            time: 75,
            type: "GOAL"
        },
        {
            player: "Matilda88",
            playerpos: "CB",
            side: "AWAY",
            time: 75,
            type: "YELLOWCARD"
        },
        {
            player: "Matilda88",
            playerpos: "CB",
            side: "HOME",
            time: 75,
            type: "REDCARD"
        },
        {
            player: "Matilda88",
            playerpos: "CB",
            side: "AWAY",
            time: 75,
            type: "YELLOWREDCARD"
        }
    ]

    function getDate() {
        const dateStr = new Date(Date.parse(props.time)).toLocaleDateString();
        const dateStrSmp = new Date(Date.parse(props.time));
    
        return (
            <>
                {
                    new Date(Date.parse(props.time)).toLocaleDateString()}, {" "}
                    {
                        formatDistanceToNow(new Date(Date.parse(props.time)), {
                            addSuffix: true,
                        }
                    )
                }           
            </>
        )
    }

    return (
        <View style={{ marginTop: 10, flexDirection: "column", alignItems: "center" }}>
            <ScoreView>
                <View style={{ width: 32, height: 32, backgroundColor: "red", borderRadius: 16 }} />
                <Score>
                    {props.data.teams.find(t => t.side === "HOME")?.goals}{" "}-{" "}
                    {props.data.teams.find(t => t.side === "AWAY")?.goals}
                </Score>
                <View style={{ width: 32, height: 32, backgroundColor: "green", borderRadius: 16 }} />
            </ScoreView>
            <DateCmp>{ getDate() }</DateCmp>
            <Separator width="80px" height="1px"/>
            <View style={{gap: 8, width: "100%", alignItems: "center" }}>
                {
                    props.events.map((ev, idx) => <MatchCardEvent key={idx} {...ev}/>)
                }
            </View>
            
            <Separator width="80px" height="1px"/>
            
            <DateCmp>Average MMR: { formatMMR(props.avgmmr) }</DateCmp>
            
            <Separator width="140px" height="2px"/>
        </View>
    );
}
