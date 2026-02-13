export interface UsageStatsDto {
    userCount: number;
    serverCount: number;
}

export interface PatreonUserDto {
    userId: bigint;
    name: string;
    avatarUrl: string;
    sponsor: boolean;
    disciple: boolean;
    enthusiast: boolean;
    follower: boolean;
    supporter: boolean;
}

export interface LeaderboardUserDto {
    rank: number;
    userId: bigint;
    level: number;
    xp: number;
    username: string;
    discriminator: string;
    avatarUrl: string;
}

export interface LeaderboardResponseDto {
    guildName?: string;
    icon?: string;
    users: LeaderboardUserDto[];
}

export interface ProfileDto {
    UserId: string;
    LastfmBoard: boolean | null;
    XpBoard: boolean | null;
    BackgroundUrl: string | null;
    BackgroundColourOpacity: number | null;
    BackgroundColour: string | null;
    DescriptionColourOpacity: number | null;
    DescriptionColour: string | null;
    OverlayOpacity: number | null;
    OverlayColour: string | null;
    UsernameColour: string | null;
    DiscriminatorColour: string | null;
    SidebarItemServerColour: string | null;
    SidebarItemGlobalColour: string | null;
    SidebarItemBentoColour: string | null;
    SidebarItemTimezoneColour: string | null;
    SidebarValueServerColour: string | null;
    SidebarValueGlobalColour: string | null;
    SidebarValueBentoColour: string | null;
    SidebarOpacity: number | null;
    SidebarColour: string | null;
    SidebarBlur: number | null;
    FmDivBgopacity: number | null;
    FmDivBgcolour: string | null;
    FmSongTextOpacity: number | null;
    FmSongTextColour: string | null;
    FmArtistTextOpacity: number | null;
    FmArtistTextColour: string | null;
    XpDivBgopacity: number | null;
    XpDivBgcolour: string | null;
    XpTextOpacity: number | null;
    XpTextColour: string | null;
    XpText2Opacity: number | null;
    XpText2Colour: string | null;
    XpDoneServerColour1Opacity: number | null;
    XpDoneServerColour1: string | null;
    XpDoneServerColour2Opacity: number | null;
    XpDoneServerColour2: string | null;
    XpDoneServerColour3Opacity: number | null;
    XpDoneServerColour3: string | null;
    XpDoneGlobalColour1Opacity: number | null;
    XpDoneGlobalColour1: string | null;
    XpDoneGlobalColour2Opacity: number | null;
    XpDoneGlobalColour2: string | null;
    XpDoneGlobalColour3Opacity: number | null;
    XpDoneGlobalColour3: string | null;
    Description: string | null;
    Timezone: string | null;
    Birthday: string | null;
    XpBarOpacity: number | null;
    XpBarColour: string | null;
    XpBar2Opacity: number | null;
    XpBar2Colour: string | null;
}

export type LeaderboardDenialReason = "not_bot_user" | "not_member";

export interface AuthorizedLeaderboardResult {
    authorized: true;
    data: LeaderboardResponseDto;
}

export interface DeniedLeaderboardResult {
    authorized: false;
    reason: LeaderboardDenialReason;
}

export type LeaderboardAccessResult = AuthorizedLeaderboardResult | DeniedLeaderboardResult;

type PartialWithUndefined<T> = { [K in keyof T]?: T[K] | undefined };

export type ProfilePatch = PartialWithUndefined<ProfileDto> & { UserId: string };
