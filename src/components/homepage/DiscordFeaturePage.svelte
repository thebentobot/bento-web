<script lang="ts">
    import "@skyra/discord-components-core";
    import { classNames } from "../../library/utils.ts";
    import DiscordMessagesModeAdjusted from "./DiscordMessagesModeAdjusted.svelte";
    import { onMount } from "svelte";

    const discordMessages = "block custom-textSize-messages";
    const discordMessage =
        "first:mt[0.5rem] pt-[0.125rem] pb-[0.125rem] flex flex-col custom-textSize-message relative wrap-break-word min-h-[1.375rem] pl-[1em] pr-12 mb-[inherit] custom-lineHeight-message";
    const discordCommand =
        "ml-14 mb-1 items-center relative flex pt-[2px] whitespace-pre custom-lineHeight-command";

    let isMobile = false;

    const checkMobile = () => (isMobile = window.innerWidth <= 640); // 40rem = 640px

    onMount(() => {
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    });
</script>

<div class="block overflow-hidden">
    <DiscordMessagesModeAdjusted class={discordMessages}>
        <discord-message profile="bento" class={discordMessage}>
            <discord-command
                author={isMobile ? "Fiji" : "Fiji Spring Water"}
                avatar="/fiji_discord.webp"
                roleColor="#e11d48"
                class={discordCommand}
                slot="reply"
                command="profile"
            ></discord-command>
            <discord-image-attachment
                slot="attachments"
                url="/Fiji_Spring_Water_profile.webp"
                width={isMobile ? 150 : 300}
                height={isMobile ? 100 : 200}
                alt="Bento Profile Example"
            ></discord-image-attachment>
        </discord-message>
        <discord-message profile="bento" class={discordMessage}>
            {#if isMobile}
                <discord-command
                    profile="lewis"
                    class={discordCommand}
                    slot="reply"
                    command="fm collage"
                ></discord-command>
                <discord-image-attachment
                    slot="attachments"
                    url="/166142440233893888_topartists_20250618_140742.webp"
                    width={375 / 2}
                    height={375 / 2}
                    alt="Bento LastFm Collage Example"
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
                    authorName="Lewis"
                    authorImage="/lewis_discord.webp"
                    authorUrl="https://www.last.fm/user/LewLu"
                    thumbnail="/brat_fm.webp"
                >
                    <discord-embed-description slot="description">
                        Now Playing
                        <br />
                        <strong>Charli XCX</strong> -
                        <discord-link href="https://www.last.fm/music/Charli+XCX/_/Talk+talk"
                            >Talk talk</discord-link
                        >
                        <br />
                        From the album <strong>BRAT</strong>
                        <br />
                        <br />
                        <discord-time>13 hours ago</discord-time>
                        <br />
                        <strong>Charli XCX</strong> -
                        <discord-link href="https://www.last.fm/music/Charli+XCX/_/forever"
                            >forever</discord-link
                        >
                        <br />
                        From the album <strong>how i&apos;m feeling now</strong>
                    </discord-embed-description>
                    <discord-embed-footer
                        slot="footer"
                        footerImage="/lastfm_avatar_twitter.52a5d69a85ac.webp"
                    >
                        Total Tracks: 211430 | Powered by last.fm
                    </discord-embed-footer>
                </discord-embed>
            {/if}
        </discord-message>
        <discord-message
            profile="bento"
            class={classNames("pr-[5px] relative", discordMessage)}
            ephemeral
        >
            <discord-command profile="adam" class={discordCommand} slot="reply" command="tag add"
            ></discord-command>
            The tag <discord-code>im</discord-code> has been saved!
        </discord-message>
        <discord-message profile="bento" class={discordMessage}>
            <discord-command profile="adam" class={discordCommand} slot="reply" command="tag get"
            ></discord-command>
            a mess in distress but we're still the best dressed fear less say yes we don't dress to impress
        </discord-message>
    </DiscordMessagesModeAdjusted>
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
