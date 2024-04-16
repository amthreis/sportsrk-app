import MatchCard, { MatchCardProps } from "@/cmp/match/match-card";
import ScreenView from "@/cmp/screen-view";
import Top100PlayerCard, { PlayerTableRowProps } from "@/cmp/top100/top100-player-card";
import { FlashList } from "@shopify/flash-list";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

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

const Separator = styled.View`
    background-color: #d3d3d3;
    height: 2px;
    width: 80px;
    align-self: center;

    margin: 14px 0;
`;

const FooterText = styled.Text`
    text-align: center;
    padding: 20px 0;
    font-size: 16px;
    color: ${ p => p.theme.text.secondary };
`;


//<MatchCard/>

const TOP_PADDING = 20;
export default function MatchesScreen() {
    const [matches, setMatches] = useState<MatchCardProps[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchMatches() {
            //console.log("an effect");

            const response = await fetch(
                `${process.env.API_URL}/common/football/latest-matches`,
                {
                    method: "GET",
                },
            );

            const result = await response.json();

            setMatches(result);
            setIsLoading(false);
            //console.log(result);
        }

        fetchMatches();
    }, []);

    
    const renderItem = useCallback((item: MatchCardProps, index: number) => (
        <MatchCard
            key={index}
            {...item}
        />
    ), []);

    if (isLoading || matches === undefined) {
        return (
            <ScreenView>
                <Base>
                    <View style={{  flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <ActivityIndicator size={40}/>
                    </View>
                </Base >
            </ScreenView>
        );
    }


    return (
        <ScreenView>
            <Base>
                <FlashList contentContainerStyle={{ paddingTop: TOP_PADDING, paddingHorizontal: 12 }}
                    ListHeaderComponent={() => (
                        <>
                        <Title>MATCHES</Title>
                        <Description>Result and events of the latest games.</Description>
                        
                        <Separator/>
                        </>
                    )}
                    data={matches}
                    keyExtractor={it => it.id}
                    renderItem={ ({item, index}) => renderItem(item, index) }
                    estimatedItemSize={250}
                    ListFooterComponent={(
                        <>
                            <FooterText>You've reached the end of the list.</FooterText>
                            <View style={{ height: TOP_PADDING }} />
                        </>
                    )}>
                </FlashList>
            </Base>
        </ScreenView>
    );
}