import { posCNs } from '@/const/colors';
import { formatMMR } from '@/utils/no-format';
import { AwardIcon } from 'lucide-react-native';
import { Image, Text, View } from 'react-native';
import styled from 'styled-components/native';

const Base = styled.View`
    display: flex;
    flex-direction: row;
    padding: 12px;
    
    border: 0 solid #d3d3d3;
    border-bottom-width: 1px;
`;

const PlayerView = styled.View<{ flex: number }>`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    flex: ${ p => p.flex };
`;

const Avatar = styled.View`
`;

const AvatarImage = styled.Image<{ size: string }>`
    width: ${ p => p.size };
    height: ${ p => p.size };
    border-radius: ${ p => `${ parseInt(p.size.split("px")[0]) / 2 + "px" }` };
`;

const AvatarBadge = styled.View`
    background-color: #000000;
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translateX(-18px) translateY(6px);
    width: 36px;
    height: 18px;

    border-radius: 16px;
    text-align: center;
    font-weight: 900;
    color: #ffffff;
    font-size: 12px;

    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2px;
`;

const Rank = styled.Text`
    font-size: 12px;
    color: #ffffff;
    font-weight: 900;
`;


const Name = styled.Text`
    font-size: 17px;
    color: ${ p => p.theme.text.primary };
`;

const InfoView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;
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

const MMRView = styled.View<{ flex: number }>`
    flex: ${ p => p.flex };

    display: flex;

    align-items: center;
    justify-content: center;
`;

const MMR = styled.Text`
    color: ${ p => p.theme.text.primary };
    font-weight: 900;
    font-size: 20px;
`;

const MMRIncr = styled.Text`
    font-weight: 500;
    font-size: 14px;
`;

export const ptrowBadgeColors = ["gold", "darkgray", "peru"];

export interface PlayerTableRowProps {
    user: {
        email: string;
        id: string;
        avatar: string;
        role: string;
    };
    pos: "GK" | "FB" | "CB" | "DM" | "CM" | "LM" | "AM" | "WG" | "ST";
    mmr: number;
    mmrIncr: number;
    rank?: number;
}



export default function Top100PlayerCard(p: PlayerTableRowProps) {
    return (
        <Base>
            <PlayerView flex={0.7}>
                <Avatar>
                    <AvatarImage size={"60px"} source={{ 
                        uri: p.user.avatar.replace("cloudflare-ipfs.com", "gateway.ipfs.io"), 
                        headers: {
                            Accept: '*/*',
                        }}}
                    />
                    <AvatarBadge>
                    {(p.rank && p?.rank || 100) <= 3 && (
                        <AwardIcon color={ptrowBadgeColors[(p?.rank || 1) - 1]} size={12} style={{ flex:1, width: 32, height: 32 }}  />
                    )}
                        
                        <Rank>{p.rank}</Rank>
                    </AvatarBadge>
                </Avatar>
                <View style={{ gap: 2 }}>
                    <Name>{ p.user.email.split("@")[0] }</Name>
                    <InfoView>
                        <InfoViewPos color={posCNs[p.pos]} >{ p.pos }</InfoViewPos>
                    </InfoView>
                </View>
            </PlayerView>
            <MMRView flex={0.3}>
                <MMR>{formatMMR(p.mmr)}</MMR>
                <MMRIncr style={{ color: `${p.mmrIncr >= 0 ? "green" : "red"}` }}>
                    ({p.mmrIncr >= 0 ? "+" : ""}
                    {formatMMR(p.mmrIncr)})
                </MMRIncr>
            </MMRView>
        </Base>
    );
}