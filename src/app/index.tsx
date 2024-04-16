import ScreenView from "@/cmp/screen-view";
import Top100PlayerCard, { PlayerTableRowProps } from "@/cmp/top100/top100-player-card";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, FlatList, StatusBar, Text, View } from "react-native";
import styled from "styled-components/native";

import {FlashList} from "@shopify/flash-list";

const Base = styled.View`
    background-color: ${ p => p.theme.backgroundColor };
    flex: 1;
`;

const Title = styled.Text`
    color: ${ p => p.theme.text.primary };
    font-size: 24px;
    font-weight: 900;
`;

const Description = styled.Text`
    color: ${ p => p.theme.text.secondary };
    font-size: 16px;
    font-weight: 400;
    margin-top: 2px;
    line-height: 24px;
`;


const Table = styled.View`
`;

const TableHeader = styled.View`
    display: flex;
    flex-direction: row;
    padding: 12px;
    
    border: 0 solid #d3d3d3;
    border-bottom-width: 2px;
`;

const TableHeaderText = styled.Text<{ flex: number, textAlign: "auto" | "center" | "left" | "right" | "justify" }>`
    color: ${ p => p.theme.text.secondary };
    text-align: ${ p => p.textAlign };
    font-size: 16px;
    font-weight: 500;
    flex:  ${ p => p.flex };
`;

const TableContent = styled.ScrollView`
    display: flex;
    flex-direction: column;
`;

const FooterText = styled.Text`
    text-align: center;
    padding: 20px 0;
    font-size: 16px;
    color: ${ p => p.theme.text.secondary };
`;

const TOP_PADDING = 20;

//const APP_NAME = process.env['APP_NAME'];

export default function Top100Screen() {
    
    // const screenHeight = Dimensions.get('screen').height;
    // const windowHeight = Dimensions.get('window').height;
    // const navbarHeight = screenHeight - windowHeight + (StatusBar.currentHeight || 0);

    //console.log(APP_NAME);



    const [players, setPlayers] = useState<PlayerTableRowProps[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    useEffect(() => {
        //console.log("fUsers eff");
        async function fetchUsers() {
            //  console.log(
            //      "fetch from",
            //      `${process.env.API_URL}/common/football/top100`,
            //  );

            const response = await fetch(
                `${process.env.API_URL}/common/football/top100`,
                {
                    method: "GET",
                },
            );

            const result = await response.json();

            //console.log("start");
            // setTimeout(() => {
            //     console.log("set´p");
            // }, 5000);

            setPlayers(result);
            setIsLoading(false);
            //console.log(result);
        }

        fetchUsers();
    }, []);

    
    const renderItem = useCallback((item: PlayerTableRowProps, index: number) => (
        
                <Top100PlayerCard
                key={index}
                {...item}
                rank={index + 1}
            />
        
        
    ), []);


    if (isLoading) {
        return (
            <ScreenView>
                <Base >
                    <View style={{  flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <ActivityIndicator size={40}/>
                    </View>
                </Base >
            </ScreenView>
        );
    }

    // const plys: PlayerTableRowProps[] = [
    //     {
    //         user: {
    //             email: "Briana_AOIJSD",
    //             avatar: "",
    //             id: "01290dj192",
    //             role: "USER"
    //         },
    //         mmr: 78645325,
    //         mmrIncr: 9834,
    //         pos: "AM"
    //     },
    //     {
    //         user: {
    //             email: "Briana_AOIJSD",
    //             avatar: "",
    //             id: "01290dj192",
    //             role: "USER"
    //         },
    //         mmr: 78645325,
    //         mmrIncr: 9834,
    //         pos: "ST"
    //     },
    //     {
    //         user: {
    //             email: "Briana_AOIJSD",
    //             avatar: "",
    //             id: "01290dj192",
    //             role: "USER"
    //         },
    //         mmr: 78645325,
    //         mmrIncr: 9834,
    //         pos: "CB"
    //     },
    //     {
    //         user: {
    //             email: "Briana_AOIJSD",
    //             avatar: "",
    //             id: "01290dj192",
    //             role: "USER"
    //         },
    //         mmr: 78645325,
    //         mmrIncr: 9834,
    //         pos: "GK"
    //     },
    //     {
    //         user: {
    //             email: "Briana_AOIJSD",
    //             avatar: "",
    //             id: "01290dj192",
    //             role: "USER"
    //         },
    //         mmr: 78645325,
    //         mmrIncr: 9834,
    //         pos: "DM"
    //     },
    //     {
    //         user: {
    //             email: "Briana_AOIJSD",
    //             avatar: "",
    //             id: "01290dj192",
    //             role: "USER"
    //         },
    //         mmr: 78645325,
    //         mmrIncr: 9834,
    //         pos: "CB"
    //     },
    //     {
    //         user: {
    //             email: "Briana_AOIJSD",
    //             avatar: "",
    //             id: "01290dj192",
    //             role: "USER"
    //         },
    //         mmr: 78645325,
    //         mmrIncr: 9834,
    //         pos: "GK"
    //     },
    //     {
    //         user: {
    //             email: "Briana_AOIJSD",
    //             avatar: "",
    //             id: "01290dj192",
    //             role: "USER"
    //         },
    //         mmr: 78645325,
    //         mmrIncr: 9834,
    //         pos: "DM"
    //     },
    //     {
    //         user: {
    //             email: "Briana_AOIJSD",
    //             avatar: "",
    //             id: "01290dj192",
    //             role: "USER"
    //         },
    //         mmr: 78645325,
    //         mmrIncr: 9834,
    //         pos: "CB"
    //     },
    //     {
    //         user: {
    //             email: "Briana_AOIJSD",
    //             avatar: "",
    //             id: "01290dj192",
    //             role: "USER"
    //         },
    //         mmr: 78645325,
    //         mmrIncr: 9834,
    //         pos: "GK"
    //     },
    //     {
    //         user: {
    //             email: "Briana_AOIJSD",
    //             avatar: "",
    //             id: "01290dj192",
    //             role: "USER"
    //         },
    //         mmr: 78645325,
    //         mmrIncr: 9834,
    //         pos: "DM"
    //     },
    //     {
    //         user: {
    //             email: "Briana_AOIJSD",
    //             avatar: "",
    //             id: "01290dj192",
    //             role: "USER"
    //         },
    //         mmr: 78645325,
    //         mmrIncr: 9834,
    //         pos: "CB"
    //     },
    //     {
    //         user: {
    //             email: "Briana_AOIJSD",
    //             avatar: "",
    //             id: "01290dj192",
    //             role: "USER"
    //         },
    //         mmr: 78645325,
    //         mmrIncr: 9834,
    //         pos: "GK"
    //     },
    //     {
    //         user: {
    //             email: "Briana_AOIJSD",
    //             avatar: "",
    //             id: "01290dj192",
    //             role: "USER"
    //         },
    //         mmr: 78645325,
    //         mmrIncr: 9834,
    //         pos: "DM"
    //     }
    // ];

    //console.log(plys.length);
    
    return (
        <ScreenView>
            <Base >
                <FlashList contentContainerStyle={{ paddingTop: TOP_PADDING, paddingHorizontal: 12 }}
                    ListHeaderComponent={() => (
                        <>
                            <Title>TOP 100 BY MMR</Title>
                            <Description>MMR is defined by many factors and is meant to determine how good a player is.</Description>
                            <TableHeader style={{ backgroundColor: "white" }}>
                                <TableHeaderText textAlign="left" flex={0.7}>PLAYER</TableHeaderText>
                                <TableHeaderText textAlign="center"  flex={0.3}>MMR</TableHeaderText>
                            </TableHeader>
                        </>
                    )}
                    data={players}
                    keyExtractor={it => it.user.id}
                    renderItem={ ({item, index}) => renderItem(item, index) }
                    estimatedItemSize={84}
                    ListFooterComponent={(
                        <>
                            <FooterText>You've reached the end of the table.</FooterText>
                            <View style={{ height: TOP_PADDING }} />
                        </>
                    )}>
                </FlashList>
            </Base>
        </ScreenView>
    );
}

/*

                <View style={{ height: 0, width: "auto", backgroundColor: "white", borderTopColor: "lightgray", borderWidth: 2, borderBottomWidth: 0, borderLeftWidth: 0, 
                    borderRightWidth: 0
                 }} />
<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        {
                            plys.map((p, idx) => <Top100PlayerCard key={ idx } {...p} rank={idx +1}/>)
                        }
                        
                    </ScrollView>







                    */