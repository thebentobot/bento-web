<script lang="ts">
    import "@skyra/discord-components-core";
    import { classNames } from "../../library/utils.ts";
    import DiscordMessagesModeAdjusted from "../homepage/DiscordMessagesModeAdjusted.svelte";

    interface Props {
        feature: "profile" | "lastfm" | "tags" | "leaderboard";
    }

    const { feature }: Props = $props();

    const discordMessages = "block custom-textSize-messages";
    const discordMessage =
        "first:mt-[0.5rem] pt-[0.125rem] pb-[0.125rem] flex flex-col custom-textSize-message relative wrap-break-word min-h-[1.375rem] pl-[1em] pr-12 mb-[inherit] custom-lineHeight-message";
    const discordCommand =
        "ml-14 mb-1 items-center relative flex pt-[2px] whitespace-pre custom-lineHeight-command";

    let isMobile = $state(false);

    $effect(() => {
        if (typeof window === "undefined") return;

        const mq = window.matchMedia("(max-width: 40rem)");
        const update = () => (isMobile = mq.matches);

        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    });
</script>

<div class="block overflow-hidden w-full">
    {#if feature === "profile"}
        <DiscordMessagesModeAdjusted class={discordMessages}>
            <discord-message profile="bento" class={discordMessage} ephemeral>
                <discord-command
                    author={isMobile ? "Fiji" : "Fiji Spring Water"}
                    avatar="/fiji_discord.webp"
                    role-color="#e11d48"
                    class={discordCommand}
                    slot="reply"
                    command="profile background url"
                ></discord-command>
                Your background image has been updated!
            </discord-message>
            <discord-message profile="bento" class={discordMessage} ephemeral>
                <discord-command
                    author={isMobile ? "Fiji" : "Fiji Spring Water"}
                    avatar="/fiji_discord.webp"
                    role-color="#e11d48"
                    class={discordCommand}
                    slot="reply"
                    command="profile description"
                ></discord-command>
                Your bio has been updated!
            </discord-message>
            <discord-message profile="bento" class={discordMessage}>
                <discord-command
                    author={isMobile ? "Fiji" : "Fiji Spring Water"}
                    avatar="/fiji_discord.webp"
                    role-color="#e11d48"
                    class={discordCommand}
                    slot="reply"
                    command="profile user"
                ></discord-command>
                <discord-image-attachment
                    slot="attachments"
                    url="/Fiji_Spring_Water_profile.webp"
                    width={isMobile ? 150 : 300}
                    height={isMobile ? 100 : 200}
                    alt="Bento Profile Card"
                ></discord-image-attachment>
            </discord-message>
        </DiscordMessagesModeAdjusted>
    {:else if feature === "lastfm"}
        <DiscordMessagesModeAdjusted class={discordMessages}>
            <discord-message profile="bento" class={discordMessage}>
                {#if isMobile}
                    <discord-command
                        profile="lewis"
                        class={discordCommand}
                        slot="reply"
                        command="lastfm collage"
                    ></discord-command>
                    <discord-image-attachment
                        slot="attachments"
                        url="/166142440233893888_topartists_20250618_140742.webp"
                        width={375 / 2}
                        height={375 / 2}
                        alt="Last.fm Top Artists Collage"
                    ></discord-image-attachment>
                {:else}
                    <discord-command
                        profile="lewis"
                        class={discordCommand}
                        slot="reply"
                        command="lastfm nowplaying"
                    ></discord-command>
                    <discord-embed
                        slot="embeds"
                        color="#e4141e"
                        author-name="Lewis"
                        author-image="/lewis_discord.webp"
                        author-url="https://www.last.fm/user/LewLu"
                        thumbnail="/brat_fm.webp"
                    >
                        <discord-embed-description slot="description">
                            Now Playing
                            <br />
                            <strong>Charli XCX</strong> —
                            <discord-link href="https://www.last.fm/music/Charli+XCX/_/Talk+talk"
                                >Talk talk</discord-link
                            >
                            <br />
                            From the album <strong>BRAT</strong>
                            <br />
                            <br />
                            <discord-time>13 hours ago</discord-time>
                            <br />
                            <strong>Charli XCX</strong> —
                            <discord-link href="https://www.last.fm/music/Charli+XCX/_/forever"
                                >forever</discord-link
                            >
                            <br />
                            From the album <strong>how i&apos;m feeling now</strong>
                        </discord-embed-description>
                        <discord-embed-footer
                            slot="footer"
                            footer-image="/lastfm_avatar_twitter.52a5d69a85ac.webp"
                        >
                            Total Tracks: 211430 | Powered by last.fm
                        </discord-embed-footer>
                    </discord-embed>
                {/if}
            </discord-message>
            <discord-message profile="bento" class={discordMessage}>
                <discord-command
                    profile="lewis"
                    class={discordCommand}
                    slot="reply"
                    command="lastfm topartists"
                ></discord-command>
                <discord-embed
                    slot="embeds"
                    color="#e4141e"
                    author-name="Lewis's Top Artists — This Week"
                    author-image="/lewis_discord.webp"
                >
                    <discord-embed-description slot="description">
                        1. <strong>Charli XCX</strong> — 87 plays<br />
                        2. <strong>underscores</strong> — 54 plays<br />
                        3. <strong>Bladee</strong> — 41 plays<br />
                        4. <strong>Grimes</strong> — 29 plays<br />
                        5. <strong>SOPHIE</strong> — 18 plays<br />
                        6. <strong>Caroline Polachek</strong> — 15 plays<br />
                        7. <strong>Ethel Cain</strong> — 12 plays<br />
                        8. <strong>Arca</strong> — 9 plays<br />
                        9. <strong>FKA twigs</strong> — 7 plays<br />
                        10. <strong>Björk</strong> — 4 plays
                    </discord-embed-description>
                    <discord-embed-footer
                        slot="footer"
                        footer-image="/lastfm_avatar_twitter.52a5d69a85ac.webp"
                    >
                        Time period: 7day | Powered by Last.fm
                    </discord-embed-footer>
                </discord-embed>
            </discord-message>
        </DiscordMessagesModeAdjusted>
    {:else if feature === "tags"}
        <DiscordMessagesModeAdjusted class={discordMessages}>
            <discord-message
                profile="bento"
                class={classNames("pr-[5px] relative", discordMessage)}
                ephemeral
            >
                <discord-command
                    author={isMobile ? "Fiji" : "Fiji Spring Water"}
                    avatar="/fiji_discord.webp"
                    role-color="#e11d48"
                    class={discordCommand}
                    slot="reply"
                    command="tag edit"
                ></discord-command>
                The tag <discord-code>rules</discord-code> has been saved!
            </discord-message>
            <discord-message profile="bento" class={discordMessage}>
                <discord-command
                    profile="lewis"
                    class={discordCommand}
                    slot="reply"
                    command="tag get"
                ></discord-command>
                No advertising, hate speech, or NSFW content. Keep things friendly and on-topic. Use the
                right channels and have fun! 🎉
            </discord-message>
            <discord-message profile="bento" class={discordMessage}>
                <discord-command
                    profile="adam"
                    class={discordCommand}
                    slot="reply"
                    command="tag info"
                ></discord-command>
                <discord-embed slot="embeds" color="#FACC15">
                    <discord-embed-description slot="description">
                        <strong>rules</strong><br />
                        Created by Fiji Spring Water<br />
                        Used 112 times · Created September 2022
                    </discord-embed-description>
                </discord-embed>
            </discord-message>
        </DiscordMessagesModeAdjusted>
    {:else if feature === "leaderboard"}
        <DiscordMessagesModeAdjusted class={discordMessages}>
            <discord-message profile="bento" class={discordMessage}>
                <discord-command
                    author={isMobile ? "Fiji" : "Fiji Spring Water"}
                    avatar="/fiji_discord.webp"
                    role-color="#e11d48"
                    class={discordCommand}
                    slot="reply"
                    command="leaderboard user"
                ></discord-command>
                <discord-embed
                    slot="embeds"
                    color="#FACC15"
                    author-name={isMobile ? "Fiji's Rankings" : "Fiji Spring Water's Rankings"}
                    author-image="/fiji_discord.webp"
                    thumbnail="/fiji_discord.webp"
                >
                    <discord-embed-description slot="description">
                        <strong>Bento Bot Server Rank:</strong> #12 — Level 42 (12,340 XP)<br />
                        <strong>Global Rank:</strong> #847 — Level 57 (98,420 XP)<br />
                        <strong>Bento Bot Bento Rank:</strong> #5<br />
                        <strong>Global Bento Rank:</strong> #223 — 156 Bento
                    </discord-embed-description>
                </discord-embed>
            </discord-message>
            <discord-message profile="bento" class={discordMessage}>
                <discord-command
                    profile="lewis"
                    class={discordCommand}
                    slot="reply"
                    command="leaderboard global"
                ></discord-command>
                <discord-embed
                    slot="embeds"
                    color="#FACC15"
                    embed-title="Global XP Leaderboard"
                    url="https://bentobot.xyz/leaderboard"
                >
                    <discord-embed-description slot="description">
                        🥇 Fiji Spring Water · Level 42<br />
                        🥈 Lewis · Level 38<br />
                        🥉 Adam · Level 35
                    </discord-embed-description>
                </discord-embed>
            </discord-message>
        </DiscordMessagesModeAdjusted>
    {/if}
</div>

<style>
    .custom-lineHeight-command {
        line-height: 1.125rem;
    }
    .custom-lineHeight-message {
        line-height: 16px;
    }
    .custom-textSize-messages {
        font-size: 16px;
    }
    .custom-textSize-message {
        font-size: 0.9em;
    }
</style>
