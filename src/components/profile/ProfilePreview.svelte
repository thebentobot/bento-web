<script lang="ts">
    import type { ProfileDto } from "../../library/types/interfaces";
    import { DateTime } from "luxon";

    type Target = "background" | "description" | "sidebar" | "lastfm" | "xp";

    const {
        profile,
        username = "User",
        discriminator,
        avatarUrl,
        editorExpanded = false,
        onOpen,
    } = $props<{
        profile: ProfileDto;
        username?: string;
        discriminator?: string;
        avatarUrl?: string;
        editorExpanded?: boolean;
        onOpen: (t: Target) => void;
    }>();

    // responsive scaling to fit 600x400 canvas
    let previewWrapper: HTMLDivElement;
    let scale = $state(1);
    $effect(() => {
        if (!previewWrapper) return;
        const ro = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const w = entry.contentRect.width;
                scale = Math.max(0.1, Math.min(1, w / 600));
            }
        });
        ro.observe(previewWrapper);
        return () => ro.disconnect();
    });

    function onKeyActivate(e: KeyboardEvent, cb: () => void) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            cb();
        }
    }

    function convertOpacityToHex(opacity?: number | null) {
        const value = opacity ?? 100;
        return Math.round((value / 100) * 255)
            .toString(16)
            .padStart(2, "0")
            .toUpperCase();
    }

    const backgroundColourFull = $derived(
        `${profile.BackgroundColour ?? "#1F2937"}${convertOpacityToHex(profile.BackgroundColourOpacity)}`
    );
    const descriptionColourFull = $derived(
        `${profile.DescriptionColour ?? "#ffffff"}${convertOpacityToHex(profile.DescriptionColourOpacity)}`
    );
    const overlayColourFull = $derived(
        `${profile.OverlayColour ?? "#000000"}${convertOpacityToHex(profile.OverlayOpacity)}`
    );
    const sidebarColourFull = $derived(
        `${profile.SidebarColour ?? "#000000"}${convertOpacityToHex(profile.SidebarOpacity)}`
    );
    const fmDivBGColourFull = $derived(
        `${profile.FmDivBgcolour ?? "#111827"}${convertOpacityToHex(profile.FmDivBgopacity)}`
    );
    const fmSongTextColourFull = $derived(
        `${profile.FmSongTextColour ?? "#ffffff"}${convertOpacityToHex(profile.FmSongTextOpacity)}`
    );
    const fmArtistTextColourFull = $derived(
        `${profile.FmArtistTextColour ?? "#ffffff"}${convertOpacityToHex(profile.FmArtistTextOpacity)}`
    );
    const xpDivBGColourFull = $derived(
        `${profile.XpDivBgcolour ?? "#111827"}${convertOpacityToHex(profile.XpDivBgopacity)}`
    );
    const xpTextColourFull = $derived(
        `${profile.XpTextColour ?? "#ffffff"}${convertOpacityToHex(profile.XpTextOpacity)}`
    );
    const xpText2ColourFull = $derived(
        `${profile.XpText2Colour ?? "#ffffff"}${convertOpacityToHex(profile.XpText2Opacity)}`
    );
    const xpBarColourFull = $derived(
        `${profile.XpBarColour ?? "#374151"}${convertOpacityToHex(profile.XpBarOpacity)}`
    );
    const xpBar2ColourFull = $derived(
        `${profile.XpBar2Colour ?? "#374151"}${convertOpacityToHex(profile.XpBar2Opacity)}`
    );

    const xpDoneServerColour1Full = $derived(
        `${profile.XpDoneServerColour1 ?? "#FCD34D"}${convertOpacityToHex(profile.XpDoneServerColour1Opacity)}`
    );
    const xpDoneServerColour2Full = $derived(
        `${profile.XpDoneServerColour2 ?? "#F59E0B"}${convertOpacityToHex(profile.XpDoneServerColour2Opacity)}`
    );
    const xpDoneServerColour3Full = $derived(
        `${profile.XpDoneServerColour3 ?? "#EF4444"}${convertOpacityToHex(profile.XpDoneServerColour3Opacity)}`
    );
    const xpDoneGlobalColour1Full = $derived(
        `${profile.XpDoneGlobalColour1 ?? "#FCD34D"}${convertOpacityToHex(profile.XpDoneGlobalColour1Opacity)}`
    );
    const xpDoneGlobalColour2Full = $derived(
        `${profile.XpDoneGlobalColour2 ?? "#F59E0B"}${convertOpacityToHex(profile.XpDoneGlobalColour2Opacity)}`
    );
    const xpDoneGlobalColour3Full = $derived(
        `${profile.XpDoneGlobalColour3 ?? "#EF4444"}${convertOpacityToHex(profile.XpDoneGlobalColour3Opacity)}`
    );

    const usernameSize = $derived(
        username.length <= 15
            ? "24px"
            : username.length <= 20
              ? "18px"
              : username.length <= 25
                ? "15px"
                : "11px"
    );

    const hasLastfm = $derived(!!profile.LastfmBoard);
    const hasXp = $derived(!!profile.XpBoard);
    const descriptionHeight = $derived(
        !hasLastfm && !hasXp
            ? "365px"
            : !hasLastfm && hasXp
              ? "310px"
              : hasLastfm && !hasXp
                ? "310px"
                : "250px"
    );
    const fmPaddingTop = $derived(
        hasLastfm && !hasXp ? "88px" : !hasLastfm && hasXp ? "88px" : "32.5px"
    );

    function timeOfDayEmoji(dt: DateTime): string {
        const hour = dt.hour;
        return hour < 4
            ? "🌌"
            : hour < 8
              ? "🌅"
              : hour < 12
                ? "☀️"
                : hour < 16
                  ? "🌞"
                  : hour < 20
                    ? "🌇"
                    : "🌙";
    }

    const tzDisplay = $derived(
        (() => {
            const tz = profile.Timezone?.trim();
            if (!tz) return "";
            try {
                const now = DateTime.now().setZone(tz);
                if (!now.isValid) return "";
                return `${now.toFormat("HH:mm")} ${timeOfDayEmoji(now)}`;
            } catch {
                return "";
            }
        })()
    );

    const birthdayDisplay = $derived(
        (() => {
            const b = profile.Birthday?.trim();
            if (!b) return "";
            let dt = DateTime.fromISO(b, { zone: "utc" });
            if (!dt.isValid) {
                const fmts = [
                    "yyyy-MM-dd",
                    "MM/dd/yyyy",
                    "dd/MM/yyyy",
                    "MMM d",
                    "MMMM d",
                    "d MMM",
                    "d MMMM",
                    "M-d-yyyy",
                    "MM-dd",
                    "M-d",
                    "dd-MM",
                    "d-M",
                ];
                for (const f of fmts) {
                    dt = DateTime.fromFormat(b, f, { zone: "utc", locale: "en" });
                    if (dt.isValid) break;
                }
            }
            return dt.isValid ? `${dt.toFormat("MMM d")} 🎂` : "";
        })()
    );
</script>

<!-- Outer wrapper controls layout size on mobile vs desktop -->
<div class="relative w-full max-w-[600px] mx-auto aspect-[3/2]" bind:this={previewWrapper}>
    <!-- Inner canvas keeps 600x400 design and scales to fill the wrapper -->
    <div
        class={`rounded-lg overflow-hidden shadow ${profile.BackgroundUrl ? "custom-bg" : ""} absolute top-0 left-0 ${editorExpanded ? "cursor-default" : "cursor-pointer"} ${!editorExpanded ? "editable editable-bg" : ""}`}
        style={`width:600px;height:400px;transform-origin:top left;transform:scale(${scale});background-color:${backgroundColourFull};${profile.BackgroundUrl ? `background-image:url("${profile.BackgroundUrl}")` : ""};background-size:cover;background-position:center;`}
        role="button"
        tabindex={editorExpanded ? -1 : 0}
        aria-disabled={editorExpanded ? "true" : "false"}
        onkeydown={(e) => onKeyActivate(e, () => onOpen("background"))}
        onclick={() => onOpen("background")}
    >
        {#if profile.BackgroundUrl}
            <div
                class="absolute inset-0 overlay"
                style={`background-color:${overlayColourFull}`}
            ></div>
        {/if}

        <!-- Center description area -->
        <div
            class={`absolute ${editorExpanded ? "cursor-default" : "cursor-pointer"} ${!editorExpanded ? "editable" : ""}`}
            style={`left:40px; top:20px; width:325px; height:${descriptionHeight}; color:${descriptionColourFull};`}
            role="button"
            tabindex={editorExpanded ? -1 : 0}
            aria-disabled={editorExpanded ? "true" : "false"}
            onkeydown={(e) => onKeyActivate(e, () => onOpen("description"))}
            onclick={(e) => {
                e.stopPropagation();
                onOpen("description");
            }}
        >
            <div class="absolute bottom-0 w-[300px] text-[20px] leading-tight">
                <p class="m-0" style={`color:${descriptionColourFull}`}>
                    {profile.Description ?? "I am a happy user of Bento 🍱😄"}
                </p>
            </div>
        </div>

        <!-- Sidebar -->
        <div
            class={`absolute top-0 right-0 h-full w-[200px] ${profile.BackgroundUrl ? "backdrop" : ""} ${editorExpanded ? "cursor-default" : "cursor-pointer"} ${!editorExpanded ? "editable" : ""}`}
            style={`background-color:${sidebarColourFull}; border-radius:0 10px 10px 0; ${profile.BackgroundUrl ? `backdrop-filter: blur(${profile.SidebarBlur ?? 3}px);` : ""}`}
            role="button"
            tabindex={editorExpanded ? -1 : 0}
            aria-disabled={editorExpanded ? "true" : "false"}
            onkeydown={(e) => onKeyActivate(e, () => onOpen("sidebar"))}
            onclick={(e) => {
                e.stopPropagation();
                onOpen("sidebar");
            }}
        >
            <!-- Avatar -->
            <div
                class="absolute"
                style="left:100px; transform: translate(-50%, 16px); width:96px; height:96px; border-radius:50%; overflow:hidden; z-index:2;"
            >
                {#if avatarUrl}
                    <img src={avatarUrl} alt="avatar" class="w-24 h-24 object-cover" />
                {:else}
                    <div class="w-24 h-24 bg-zinc-700"></div>
                {/if}
            </div>

            <!-- Name -->
            <div class="absolute" style="top:120px; width:200px; text-align:center;">
                <div
                    class="font-['Urbanist']"
                    style={`font-size:${usernameSize};color:${profile.UsernameColour ?? "#ffffff"}`}
                >
                    {username}
                </div>
                <div
                    class="font-['Urbanist'] text-[17px]"
                    style={`color:${profile.DiscriminatorColour ?? "#9CA3AF"}`}
                >
                    {discriminator ? `#${discriminator}` : ""}
                </div>
            </div>

            <!-- Sidebar list -->
            <ul
                class="list-none m-0 p-0 text-center absolute"
                style="top:170px; right:0; width:200px; line-height:1.1;"
            >
                <li
                    class="pt-[13px] h-auto"
                    style={`color:${profile.SidebarItemServerColour ?? "#D3D3D3"}`}
                >
                    <span
                        class="text-[24px]"
                        style={`color:${profile.SidebarValueServerColour ?? "#ffffff"}`}
                        >Rank 0</span
                    ><br />Of 0 Users
                </li>
                <li
                    class="pt-[13px] h-auto"
                    style={`color:${profile.SidebarItemGlobalColour ?? "#D3D3D3"}`}
                >
                    <span
                        class="text-[24px]"
                        style={`color:${profile.SidebarValueGlobalColour ?? "#ffffff"}`}
                        >Rank 0</span
                    ><br />Of 0 Users
                </li>
                <li
                    class="pt-[13px] h-auto"
                    style={`color:${profile.SidebarItemBentoColour ?? "#D3D3D3"}`}
                >
                    <span
                        class="text-[24px]"
                        style={`color:${profile.SidebarValueBentoColour ?? "#ffffff"}`}>0 🍱</span
                    ><br /> Rank 0/0 🍱 Users
                </li>
                <li
                    class="pt-[13px] h-auto"
                    style={`color:${profile.SidebarItemTimezoneColour ?? "#D3D3D3"}`}
                >
                    <span class="text-[24px]" style="color:#ffffff">😎</span><br />
                    {tzDisplay}
                    {birthdayDisplay}
                </li>
            </ul>
        </div>

        <!-- Footer: boards -->
        <div
            class="absolute w-[400px] h-[150px] flex flex-col gap-2"
            style={`left:0; top:250px; padding-top:${fmPaddingTop}; padding-left:20px;`}
        >
            {#if profile.LastfmBoard}
                <div
                    class={`rounded bg-black/30 ${editorExpanded ? "cursor-default" : "cursor-pointer"} ${!editorExpanded ? "editable" : ""}`}
                    style={`background-color:${fmDivBGColourFull}; padding:8px 12px; display:flex; align-items:center; gap:10px; width:95%;`}
                    role="button"
                    tabindex={editorExpanded ? -1 : 0}
                    aria-disabled={editorExpanded ? "true" : "false"}
                    onkeydown={(e) => onKeyActivate(e, () => onOpen("lastfm"))}
                    onclick={(e) => {
                        e.stopPropagation();
                        onOpen("lastfm");
                    }}
                >
                    <div class="w-9 h-9 bg-zinc-700 rounded"></div>
                    <div class="overflow-hidden">
                        <div
                            class="truncate"
                            style={`color:${fmSongTextColourFull}; font-size:14px`}
                        >
                            Last.fm song title
                        </div>
                        <div
                            class="truncate"
                            style={`color:${fmArtistTextColourFull}; font-size:12px`}
                        >
                            Artist name
                        </div>
                    </div>
                </div>
            {/if}
            {#if profile.XpBoard}
                <div
                    class={`rounded ${editorExpanded ? "cursor-default" : "cursor-pointer"} ${!editorExpanded ? "editable" : ""}`}
                    style={`background-color:${xpDivBGColourFull}; padding:8px 12px; width:95%;`}
                    role="button"
                    tabindex={editorExpanded ? -1 : 0}
                    aria-disabled={editorExpanded}
                    onkeydown={(e) => onKeyActivate(e, () => onOpen("xp"))}
                    onclick={(e) => {
                        e.stopPropagation();
                        onOpen("xp");
                    }}
                >
                    <div class="flex items-center justify-between text-right gap-4">
                        <div class="flex-1">
                            <div style={`color:${xpTextColourFull}`}>Level 0</div>
                            <div
                                class="w-full h-1 rounded overflow-hidden"
                                style={`background-color:${xpBarColourFull}`}
                            >
                                <div
                                    style={`height:100%; width:60%; background: linear-gradient(to left, ${xpDoneServerColour1Full}, ${xpDoneServerColour2Full}, ${xpDoneServerColour3Full}); border-radius:20px;`}
                                ></div>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div style={`color:${xpText2ColourFull}`}>Level 0</div>
                            <div
                                class="w-full h-1 rounded overflow-hidden"
                                style={`background-color:${xpBar2ColourFull}`}
                            >
                                <div
                                    style={`height:100%; width:60%; background: linear-gradient(to left, ${xpDoneGlobalColour1Full}, ${xpDoneGlobalColour2Full}, ${xpDoneGlobalColour3Full}); border-radius:20px;`}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    @reference "../../styles/global.css";
    /* Hover affordance for click-to-edit elements */
    /* Use visual filters instead of borders to avoid layout shifts */
    .editable {
        /* No positioning change to avoid overriding absolute/static layout */
        transition:
            filter 120ms ease,
            box-shadow 120ms ease;
    }
    .editable:hover {
        /* Stronger, clearer but still tasteful indication */
        filter: brightness(1.08) saturate(1.15) contrast(1.05);
        /* Inner outline for high contrast even when outer is clipped */
        box-shadow:
            inset 0 0 0 2px rgba(255, 255, 255, 0.55),
            inset 0 0 0 9999px rgba(255, 255, 255, 0.045),
            0 0 0 2px rgba(0, 0, 0, 0.35);
    }
    /* Keyboard focus parity with hover */
    .editable:focus-visible {
        outline: 2px solid rgba(255, 255, 255, 0.7);
        outline-offset: -2px;
        filter: brightness(1.08) saturate(1.15) contrast(1.05);
        box-shadow:
            inset 0 0 0 2px rgba(255, 255, 255, 0.55),
            inset 0 0 0 9999px rgba(255, 255, 255, 0.045);
    }

    /* Only highlight the background area when hovering it directly, not when hovering its children */
    .editable-bg:hover:has(:global(.editable:hover)) {
        /* A descendant is hovered; suppress parent hover indication */
        filter: none;
        box-shadow: none;
    }
</style>
