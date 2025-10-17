<!-- suppressed because it is Svelte 5 syntax, dunno why it is warning still. -->
<!--suppress CommaExpressionJS -->
<script lang="ts">
    import type { ProfileDto, ProfilePatch } from "../../library/types/interfaces";
    import { saveUserProfile as apiSaveUserProfile } from "../../library/server/bentoApi";
    import { DateTime } from "luxon";
    import ColorOpacityPicker from "./ColorOpacityPicker.svelte";
    import DescriptionField from "./DescriptionField.svelte";
    import ColorSwatch from "./ColorSwatch.svelte";
    import ValueSlider from "./ValueSlider.svelte";
    import ToggleSwitch from "./ToggleSwitch.svelte";

    const { userId, username = "User", discriminator, avatarUrl, initialProfile = null } = $props<{
        userId: string;
        username?: string;
        discriminator?: string;
        avatarUrl?: string;
        initialProfile: ProfileDto | null;
    }>();

    const defaultProfile = (uid: string): ProfileDto => ({
        UserId: uid,
        LastfmBoard: false,
        XpBoard: true,
        BackgroundUrl: null,
        BackgroundColourOpacity: 100,
        BackgroundColour: "#1F2937",
        DescriptionColourOpacity: 100,
        DescriptionColour: "#ffffff",
        OverlayOpacity: 20,
        OverlayColour: "#000000",
        UsernameColour: "#ffffff",
        DiscriminatorColour: "#9CA3AF",
        SidebarItemServerColour: "#D3D3D3",
        SidebarItemGlobalColour: "#D3D3D3",
        SidebarItemBentoColour: "#D3D3D3",
        SidebarItemTimezoneColour: "#D3D3D3",
        SidebarValueServerColour: "#ffffff",
        SidebarValueGlobalColour: "#ffffff",
        SidebarValueBentoColour: "#ffffff",
        SidebarOpacity: 30,
        SidebarColour: "#000000",
        SidebarBlur: 3,
        FmDivBgopacity: 100,
        FmDivBgcolour: "#111827",
        FmSongTextOpacity: 100,
        FmSongTextColour: "#ffffff",
        FmArtistTextOpacity: 100,
        FmArtistTextColour: "#ffffff",
        XpDivBgopacity: 100,
        XpDivBgcolour: "#111827",
        XpTextOpacity: 100,
        XpTextColour: "#ffffff",
        XpText2Opacity: 100,
        XpText2Colour: "#ffffff",
        XpDoneServerColour1Opacity: 100,
        XpDoneServerColour1: "#FCD34D",
        XpDoneServerColour2Opacity: 100,
        XpDoneServerColour2: "#F59E0B",
        XpDoneServerColour3Opacity: 100,
        XpDoneServerColour3: "#EF4444",
        XpDoneGlobalColour1Opacity: 100,
        XpDoneGlobalColour1: "#FCD34D",
        XpDoneGlobalColour2Opacity: 100,
        XpDoneGlobalColour2: "#F59E0B",
        XpDoneGlobalColour3Opacity: 100,
        XpDoneGlobalColour3: "#EF4444",
        Description: "I am a happy user of Bento 🍱😄",
        Timezone: null,
        Birthday: null,
        XpBarOpacity: 100,
        XpBarColour: "#374151",
        XpBar2Opacity: 100,
        XpBar2Colour: "#374151",
    });

    let loading = $state(false);
    let error = $state<string | null>(null);
    let saving = $state(false);
    let savedAt = $state<Date | null>(null);

    const initialProfileWithDefaults: ProfileDto = mergeWithDefaults(defaultProfile(userId), initialProfile);
    let originalProfile = $state<ProfileDto>(initialProfileWithDefaults);
    let profile = $state<ProfileDto>({ ...initialProfileWithDefaults });

    // Preview scaling logic: keep the 600x400 design canvas but scale to fill its container responsively
    let previewWrapper: HTMLDivElement;
    let scale = $state(1);

    $effect(() => {
        if (!previewWrapper) return;
        const ro = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const w = entry.contentRect.width;
                // Base design is 600x400 (3:2). Keep a sensible minimum scale and never upscale beyond 1x.
                scale = Math.max(0.1, Math.min(1, w / 600));
            }
        });
        ro.observe(previewWrapper);
        // Populate supported timezones list if provided by the browser
        try {
            const sv = (Intl as unknown as { supportedValuesOf?: (key: string) => string[] }).supportedValuesOf;
            if (typeof sv === "function") {
                supportedTimezones = sv("timeZone") ?? [];
            }
        } catch {
            // ignore
        }
        return () => ro.disconnect();
    });

    // Click-to-edit modal state and editor fold state
    type Target = "background" | "description" | "sidebar" | "lastfm" | "xp";
    let editorExpanded = $state(false); // folded by default
    let showModal = $state(false);
    let selectedTarget = $state<Target | null>(null);

    function handleOpen(target: Target) {
        if (editorExpanded) return; // disable click editing when editor is open
        selectedTarget = target;
        showModal = true;
    }

    function onDetailsToggle(e: Event) {
        const el = e.currentTarget as HTMLDetailsElement | null;
        if (el?.open) showModal = false;
    }

    // Allow keyboard users to activate clickable preview areas with Enter/Space
    function onKeyActivate(e: KeyboardEvent, cb: () => void) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            cb();
        }
    }

    function mergeWithDefaults(defaults: ProfileDto, incoming?: Partial<ProfileDto> | null): ProfileDto {
        // Start from defaults and only apply incoming fields that are not null/undefined
        const result: ProfileDto = { ...defaults };
        if (!incoming) return result;

        for (const [k, v] of Object.entries(incoming) as [keyof ProfileDto, ProfileDto[keyof ProfileDto]][]) {
            if (k === "UserId") continue; // always trust the accurate string from props
            if (v !== null && v !== undefined) {
                // Satisfy TS for indexed assignment across heterogeneous keys
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (result as any)[k] = v as any;
            }
        }
        return result;
    }


    function computeProfilePatch(original: ProfileDto, current: ProfileDto): ProfilePatch {
        const patch: ProfilePatch = { UserId: current.UserId };
        for (const k of Object.keys(current) as (keyof ProfileDto)[]) {
            if (k === "UserId") continue;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const ov = (original as any)[k];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const cv = (current as any)[k];
            const changed = ov !== cv;
            if (changed) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (patch as any)[k] = cv as any;
            }
        }
        return patch;
    }

    const changeCount = $derived(Object.keys(computeProfilePatch(originalProfile, profile)).length - 1);
    const hasChanges = $derived(changeCount > 0);

    const saveProfile = async () => {
        saving = true;
        error = null;
        try {
            const patch = computeProfilePatch(originalProfile, profile);
            const changedCount = Object.keys(patch).length - 1; // exclude UserId
            if (changedCount <= 0) {
                savedAt = new Date();
                return;
            }
            await apiSaveUserProfile(patch);
            originalProfile = { ...profile };
            savedAt = new Date();
        } catch (e: unknown) {
            console.error(e);
            error = (e as Error)?.message ?? "Unknown error";
        } finally {
            saving = false;
        }
    };

    function resetChanges() {
        profile = { ...originalProfile };
    }


    function convertOpacityToHex(opacity?: number | null) {
        const value = opacity ?? 100;
        return Math.round((value / 100) * 255).toString(16).padStart(2, "0").toUpperCase();
    }

    const backgroundColourFull = $derived(`${profile.BackgroundColour ?? "#1F2937"}${convertOpacityToHex(profile.BackgroundColourOpacity)}`);
    const descriptionColourFull = $derived(`${profile.DescriptionColour ?? "#ffffff"}${convertOpacityToHex(profile.DescriptionColourOpacity)}`);
    const overlayColourFull = $derived(`${profile.OverlayColour ?? "#000000"}${convertOpacityToHex(profile.OverlayOpacity)}`);
    const sidebarColourFull = $derived(`${profile.SidebarColour ?? "#000000"}${convertOpacityToHex(profile.SidebarOpacity)}`);
    const fmDivBGColourFull = $derived(`${profile.FmDivBgcolour ?? "#111827"}${convertOpacityToHex(profile.FmDivBgopacity)}`);
    const fmSongTextColourFull = $derived(`${profile.FmSongTextColour ?? "#ffffff"}${convertOpacityToHex(profile.FmSongTextOpacity)}`);
    const fmArtistTextColourFull = $derived(`${profile.FmArtistTextColour ?? "#ffffff"}${convertOpacityToHex(profile.FmArtistTextOpacity)}`);
    const xpDivBGColourFull = $derived(`${profile.XpDivBgcolour ?? "#111827"}${convertOpacityToHex(profile.XpDivBgopacity)}`);
    const xpTextColourFull = $derived(`${profile.XpTextColour ?? "#ffffff"}${convertOpacityToHex(profile.XpTextOpacity)}`);
    const xpText2ColourFull = $derived(`${profile.XpText2Colour ?? "#ffffff"}${convertOpacityToHex(profile.XpText2Opacity)}`);
    const xpBarColourFull = $derived(`${profile.XpBarColour ?? "#374151"}${convertOpacityToHex(profile.XpBarOpacity)}`);
    const xpBar2ColourFull = $derived(`${profile.XpBar2Colour ?? "#374151"}${convertOpacityToHex(profile.XpBar2Opacity)}`);

    const xpDoneServerColour1Full = $derived(`${profile.XpDoneServerColour1 ?? "#FCD34D"}${convertOpacityToHex(profile.XpDoneServerColour1Opacity)}`);
    const xpDoneServerColour2Full = $derived(`${profile.XpDoneServerColour2 ?? "#F59E0B"}${convertOpacityToHex(profile.XpDoneServerColour2Opacity)}`);
    const xpDoneServerColour3Full = $derived(`${profile.XpDoneServerColour3 ?? "#EF4444"}${convertOpacityToHex(profile.XpDoneServerColour3Opacity)}`);
    const xpDoneGlobalColour1Full = $derived(`${profile.XpDoneGlobalColour1 ?? "#FCD34D"}${convertOpacityToHex(profile.XpDoneGlobalColour1Opacity)}`);
    const xpDoneGlobalColour2Full = $derived(`${profile.XpDoneGlobalColour2 ?? "#F59E0B"}${convertOpacityToHex(profile.XpDoneGlobalColour2Opacity)}`);
    const xpDoneGlobalColour3Full = $derived(`${profile.XpDoneGlobalColour3 ?? "#EF4444"}${convertOpacityToHex(profile.XpDoneGlobalColour3Opacity)}`);

    const usernameSize = $derived(username.length <= 15 ? "24px" : username.length <= 20 ? "18px" : username.length <= 25 ? "15px" : "11px");

    const hasLastfm = $derived(!!profile.LastfmBoard);
    const hasXp = $derived(!!profile.XpBoard);
    const descriptionHeight = $derived((!hasLastfm && !hasXp) ? "365px" : (!hasLastfm && hasXp) ? "310px" : (hasLastfm && !hasXp) ? "310px" : "250px");
    // When only Last.fm is enabled, push it down to the bottom similar to the XP-only case
    const fmPaddingTop = $derived((hasLastfm && !hasXp) ? "88px" : (!hasLastfm && hasXp) ? "88px" : "32.5px");

    // Timezone and birthday display using Luxon
    function timeOfDayEmoji(dt: DateTime): string {
        const hour = dt.hour;
        return hour < 4 ? "🌌" : hour < 8 ? "🌅" : hour < 12 ? "☀️" : hour < 16 ? "🌞" : hour < 20 ? "🌇" : "🌙";
    }

    const tzDisplay = $derived((() => {
        const tz = profile.Timezone?.trim();
        if (!tz) return "";
        try {
            const now = DateTime.now().setZone(tz);
            if (!now.isValid) return "";
            return `${now.toFormat("HH:mm")} ${timeOfDayEmoji(now)}`;
        } catch {
            return "";
        }
    })());

    // Timezone validation and suggestions
    let supportedTimezones = $state<string[]>([]);

    // Debounce timezone validation to avoid instant invalid feedback
    let tzDebounceHandle: number | undefined;
    let debouncedTimezoneTrimmed = $state<string>("");
    function scheduleTimezoneDebounce() {
        if (typeof window === "undefined") {
            debouncedTimezoneTrimmed = profile.Timezone?.trim() ?? "";
            return;
        }
        if (tzDebounceHandle) clearTimeout(tzDebounceHandle);
        tzDebounceHandle = window.setTimeout(() => {
            debouncedTimezoneTrimmed = profile.Timezone?.trim() ?? "";
        }, 300);
    }

    // One-time initial sync to avoid 'state referenced locally' warning while keeping debounce for subsequent changes
    let tzInitDone = $state(false);
    $effect(() => {
        if (tzInitDone) return;
        debouncedTimezoneTrimmed = profile.Timezone?.trim() ?? "";
        tzInitDone = true;
    });

    const timezoneValid = $derived(debouncedTimezoneTrimmed === "" ? true : DateTime.now().setZone(debouncedTimezoneTrimmed).isValid);

    // Filtered timezone options to keep the suggestion popup compact
    const timezoneOptions = $derived((() => {
        if (!supportedTimezones?.length) return [] as string[];
        const q = debouncedTimezoneTrimmed.toLowerCase();
        if (q.length < 3) return [] as string[]; // wait for at least 3 chars to avoid tall lists
        const starts = supportedTimezones.filter((tz) => tz.toLowerCase().startsWith(q));
        const contains = supportedTimezones.filter((tz) => tz.toLowerCase().includes(q) && !starts.includes(tz));
        return [...starts, ...contains].slice(0, 8); // cap results to reduce height
    })());

    const birthdayDisplay = $derived((() => {
        const b = profile.Birthday?.trim();
        if (!b) return "";
        // Try ISO first
        let dt = DateTime.fromISO(b, { zone: "utc" });
        if (!dt.isValid) {
            // Fallback common formats (ensure English locale for month names like "Nov")
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
    })());

    // Birthday helpers for <input type="date">
    const DEFAULT_BDAY_YEAR = 2000;

    function normalizeBirthdayToDateInput(b: string | null | undefined): string {
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
        if (!dt.isValid) return "";
        return dt.set({ year: DEFAULT_BDAY_YEAR }).toISODate(); // yyyy-MM-dd
    }

    function monthDayFromDateInput(v: string | null | undefined): string | null {
        if (!v) return null;
        const dt = DateTime.fromISO(v, { zone: "utc" });
        if (!dt.isValid) return null;
        return dt.toFormat("MM-dd");
    }

    const birthdayInput = $derived(normalizeBirthdayToDateInput(profile.Birthday));

    function fromDateInputValue(value: string): string | null {
        return monthDayFromDateInput(value);
    }


</script>

<div class={editorExpanded ? "grid grid-cols-1 lg:grid-cols-2 gap-6" : "flex flex-col"}>
    <div>

        <!-- Visualization approximating the C# HTML/CSS -->
        <!-- Outer wrapper controls layout size on mobile vs desktop -->
        <div class="relative w-full max-w-[600px] mx-auto aspect-[3/2]" bind:this={previewWrapper}>
            <!-- Inner canvas keeps 600x400 design and scales to fill the wrapper -->
            <div class={`rounded-lg overflow-hidden shadow ${profile.BackgroundUrl ? "custom-bg" : ""} absolute top-0 left-0 ${editorExpanded ? "cursor-default" : "cursor-pointer"} ${!editorExpanded ? "editable editable-bg" : ""}`}
                 style={`width:600px;height:400px;transform-origin:top left;transform:scale(${scale});background-color:${backgroundColourFull};${profile.BackgroundUrl ? `background-image:url("${profile.BackgroundUrl}")` : ""};background-size:cover;background-position:center;`}
                 role="button"
                 tabindex={editorExpanded ? -1 : 0}
                 aria-disabled={editorExpanded ? "true" : "false"}
                 onkeydown={(e) => onKeyActivate(e, () => handleOpen("background"))}
                 onclick={() => handleOpen("background")}>
                {#if profile.BackgroundUrl}
                    <div class="absolute inset-0 overlay" style={`background-color:${overlayColourFull}`}></div>
                {/if}

                <!-- Center description area -->
                <div class={`absolute ${editorExpanded ? "cursor-default" : "cursor-pointer"} ${!editorExpanded ? "editable" : ""}` }
                     style={`left:40px; top:20px; width:325px; height:${descriptionHeight}; color:${descriptionColourFull};`}
                     role="button"
                     tabindex={editorExpanded ? -1 : 0}
                     aria-disabled={editorExpanded ? "true" : "false"}
                     onkeydown={(e) => onKeyActivate(e, () => handleOpen("description"))}
                     onclick={(e) =>{ e.stopPropagation(); handleOpen("description"); }}>
                    <div class="absolute bottom-0 w-[300px] text-[20px] leading-tight">
                        <p class="m-0"
                           style={`color:${descriptionColourFull}`}>{profile.Description ?? "I am a happy user of Bento 🍱😄"}</p>
                    </div>
                </div>

                <!-- Sidebar -->
                <div class={`absolute top-0 right-0 h-full w-[200px] ${profile.BackgroundUrl ? "backdrop" : ""} ${editorExpanded ? "cursor-default" : "cursor-pointer"} ${!editorExpanded ? "editable" : ""}`}
                     style={`background-color:${sidebarColourFull}; border-radius:0 10px 10px 0; ${profile.BackgroundUrl ? `backdrop-filter: blur(${profile.SidebarBlur ?? 3}px);` : ""}`}
                     role="button"
                     tabindex={editorExpanded ? -1 : 0}
                     aria-disabled={editorExpanded ? "true" : "false"}
                     onkeydown={(e) => onKeyActivate(e, () => handleOpen("sidebar"))}
                     onclick={(e) =>{ e.stopPropagation(); handleOpen("sidebar"); }}>
                    <!-- Avatar -->
                    <div class="absolute"
                         style="left:100px; transform: translate(-50%, 16px); width:96px; height:96px; border-radius:50%; overflow:hidden; z-index:2;">
                        {#if avatarUrl}
                            <img src={avatarUrl} alt="avatar" class="w-24 h-24 object-cover" />
                        {:else}
                            <div class="w-24 h-24 bg-zinc-700"></div>
                        {/if}
                    </div>

                    <!-- Name -->
                    <div class="absolute" style="top:120px; width:200px; text-align:center;">
                        <div class="font-['Urbanist']"
                             style={`font-size:${usernameSize};color:${profile.UsernameColour ?? "#ffffff"}`}>{username}</div>
                        <div class="font-['Urbanist'] text-[17px]"
                             style={`color:${profile.DiscriminatorColour ?? "#9CA3AF"}`}>{discriminator ? `#${discriminator}` : ""}</div>
                    </div>

                    <!-- Sidebar list -->
                    <ul class="list-none m-0 p-0 text-center absolute"
                        style="top:170px; right:0; width:200px; line-height:1.1;">
                        <li class="pt-[13px] h-auto" style={`color:${profile.SidebarItemServerColour ?? "#D3D3D3"}`}>
                            <span class="text-[24px]" style={`color:${profile.SidebarValueServerColour ?? "#ffffff"}`}>Rank 0</span><br />Of
                            0 Users
                        </li>
                        <li class="pt-[13px] h-auto" style={`color:${profile.SidebarItemGlobalColour ?? "#D3D3D3"}`}>
                            <span class="text-[24px]" style={`color:${profile.SidebarValueGlobalColour ?? "#ffffff"}`}>Rank 0</span><br />Of
                            0 Users
                        </li>
                        <li class="pt-[13px] h-auto" style={`color:${profile.SidebarItemBentoColour ?? "#D3D3D3"}`}>
                            <span class="text-[24px]" style={`color:${profile.SidebarValueBentoColour ?? "#ffffff"}`}>0 🍱</span><br />
                            Rank 0/0 🍱 Users
                        </li>
                        <li class="pt-[13px] h-auto" style={`color:${profile.SidebarItemTimezoneColour ?? "#D3D3D3"}`}>
                            <span class="text-[24px]" style="color:#ffffff">😎</span><br />
                            {tzDisplay} {birthdayDisplay}
                        </li>
                    </ul>
                </div>

                <!-- Footer: boards -->
                <div class="absolute w-[400px] h-[150px] flex flex-col gap-2" style={`left:0; top:250px; padding-top:${fmPaddingTop}; padding-left:20px;`}>
                    {#if profile.LastfmBoard}
                        <div class={`rounded bg-black/30 ${editorExpanded ? "cursor-default" : "cursor-pointer"} ${!editorExpanded ? "editable" : ""}`}
                             style={`background-color:${fmDivBGColourFull}; padding:8px 12px; display:flex; align-items:center; gap:10px; width:95%;`}
                             role="button"
                             tabindex={editorExpanded ? -1 : 0}
                             aria-disabled={editorExpanded ? "true" : "false"}
                             onkeydown={(e) => onKeyActivate(e, () => handleOpen("lastfm"))}
                             onclick={(e) => { e.stopPropagation(); handleOpen("lastfm"); }}>
                            <div class="w-9 h-9 bg-zinc-700 rounded"></div>
                            <div class="overflow-hidden">
                                <div class="truncate" style={`color:${fmSongTextColourFull}; font-size:14px`}>Last.fm song
                                    title
                                </div>
                                <div class="truncate" style={`color:${fmArtistTextColourFull}; font-size:12px`}>Artist
                                    name
                                </div>
                            </div>
                        </div>
                    {/if}
                    {#if profile.XpBoard}
                        <div class={`rounded ${editorExpanded ? "cursor-default" : "cursor-pointer"} ${!editorExpanded ? "editable" : ""}`} style={`background-color:${xpDivBGColourFull}; padding:8px 12px; width:95%;`}
                             role="button"
                             tabindex={editorExpanded ? -1 : 0}
                             aria-disabled={editorExpanded}
                             onkeydown={(e) => onKeyActivate(e, () => handleOpen("xp"))}
                             onclick={(e) => { e.stopPropagation(); handleOpen("xp"); }}>
                            <div class="flex items-center justify-between text-right gap-4">
                                <div class="flex-1">
                                    <div style={`color:${xpTextColourFull}`}>Level 0</div>
                                    <div class="w-full h-1 rounded overflow-hidden" style={`background-color:${xpBarColourFull}`}>
                                        <div style={`height:100%; width:60%; background: linear-gradient(to left, ${xpDoneServerColour1Full}, ${xpDoneServerColour2Full}, ${xpDoneServerColour3Full}); border-radius:20px;`}></div>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <div style={`color:${xpText2ColourFull}`}>Level 0</div>
                                    <div class="w-full h-1 rounded overflow-hidden" style={`background-color:${xpBar2ColourFull}`}>
                                        <div style={`height:100%; width:60%; background: linear-gradient(to left, ${xpDoneGlobalColour1Full}, ${xpDoneGlobalColour2Full}, ${xpDoneGlobalColour3Full}); border-radius:20px;`}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
        <div class="hidden sm:block text-xs text-zinc-500 w-full max-w-[600px] mx-auto mt-2">
            {editorExpanded ? "Preview Editing disabled while the expanded editor is open" : "Tip: Click elements in the preview to edit"}
        </div>

        {#if !editorExpanded}
        <div class="mt-4 flex flex-col items-center gap-3">
            <div class="flex items-center gap-3">
                <button class="btn" onclick={saveProfile} disabled={saving || !hasChanges}>
                    {saving ? "Saving…" : "Save Changes"}
                </button>
                {#if hasChanges}
                <button class="btn-secondary" onclick={resetChanges}>Reset changes</button>
                {/if}
                <button class="btn-secondary" onclick={() => { showModal = false; editorExpanded = true; }}>Open Editor</button>
            </div>
            <div class="min-h-[1.25rem] text-center">
                {#if error}
                    <div class="text-sm text-red-600">{error}</div>
                {:else if saving}
                    <div class="text-sm text-zinc-500">Saving…</div>
                {:else if loading}
                    <div class="text-sm text-zinc-500">Loading…</div>
                {:else if savedAt}
                    <div class="text-xs text-green-600">Saved at {savedAt.toLocaleTimeString()}</div>
                {/if}
            </div>
        </div>
        {/if}
    </div>

    {#if showModal}
        <div class="fixed inset-0 z-50 flex items-center justify-center">
            <div class="absolute inset-0 bg-black/40" role="button" tabindex="0" aria-label="Close modal"
                 onkeydown={(e) => onKeyActivate(e, () => (showModal = false))}
                 onclick={() => (showModal = false)}></div>
            <div class="relative z-10 w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 shadow-lg">
                <div class="flex items-center justify-between mb-3">
                    <h3 class="font-semibold text-lg">Edit {selectedTarget}</h3>
                    <button class="btn-secondary" onclick={() => (showModal = false)}>Close</button>
                </div>

                {#if selectedTarget === "background"}
                    <div class="grid gap-3">
                        <label class="grid gap-1">
                            <span class="text-sm">Background URL</span>
                            <input class="input" placeholder="https://…" bind:value={() => profile.BackgroundUrl ?? "", (v) => (profile.BackgroundUrl = v || null)} />
                        </label>
                        <ColorOpacityPicker label="Background Colour" bind:color={() => profile.BackgroundColour ?? "#1F2937", (v) => (profile.BackgroundColour = v)} bind:opacity={() => profile.BackgroundColourOpacity ?? 100, (v) => (profile.BackgroundColourOpacity = v)} />
                        <ColorOpacityPicker label="Overlay Colour" bind:color={() => profile.OverlayColour ?? "#000000", (v) => (profile.OverlayColour = v)} bind:opacity={() => profile.OverlayOpacity ?? 20, (v) => (profile.OverlayOpacity = v)} />
                        <div class="grid sm:grid-cols-2 gap-3">
                            <ToggleSwitch label="Last.fm Board" bind:checked={() => !!profile.LastfmBoard, (v) => (profile.LastfmBoard = !!v)} />
                            <ToggleSwitch label="XP Board" bind:checked={() => !!profile.XpBoard, (v) => (profile.XpBoard = !!v)} />
                        </div>
                    </div>
                {:else if selectedTarget === "description"}
                    <div class="grid gap-3">
                        <DescriptionField label="Description" bind:value={() => profile.Description ?? "", (v) => (profile.Description = v)} maxLength={500} placeholder="Profile bio" />
                        <ColorOpacityPicker label="Description Colour" bind:color={() => profile.DescriptionColour ?? "#ffffff", (v) => (profile.DescriptionColour = v)} bind:opacity={() => profile.DescriptionColourOpacity ?? 100, (v) => (profile.DescriptionColourOpacity = v)} />
                    </div>
                {:else if selectedTarget === "sidebar"}
                    <div class="grid gap-3 w-full">
                        <ColorOpacityPicker label="Sidebar Colour" bind:color={() => profile.SidebarColour ?? "#000000", (v) => (profile.SidebarColour = v)} bind:opacity={() => profile.SidebarOpacity ?? 30, (v) => (profile.SidebarOpacity = v)} />
                        <ValueSlider label="Sidebar Blur" min={0} max={20} unit="px" bind:value={() => profile.SidebarBlur ?? 3, (v) => (profile.SidebarBlur = v)} />
                        <ColorSwatch label="Username Colour" bind:color={() => profile.UsernameColour ?? "#ffffff", (v) => (profile.UsernameColour = v)} />
                        <ColorSwatch label="Discriminator Colour" bind:color={() => profile.DiscriminatorColour ?? "#9CA3AF", (v) => (profile.DiscriminatorColour = v)} />
                        <div class="grid sm:grid-cols-2 gap-3">
                            <ColorSwatch label="Sidebar Item (Server)" bind:color={() => profile.SidebarItemServerColour ?? "#D3D3D3", (v) => (profile.SidebarItemServerColour = v)} />
                            <ColorSwatch label="Sidebar Value (Server)" bind:color={() => profile.SidebarValueServerColour ?? "#ffffff", (v) => (profile.SidebarValueServerColour = v)} />
                            <ColorSwatch label="Sidebar Item (Global)" bind:color={() => profile.SidebarItemGlobalColour ?? "#D3D3D3", (v) => (profile.SidebarItemGlobalColour = v)} />
                            <ColorSwatch label="Sidebar Value (Global)" bind:color={() => profile.SidebarValueGlobalColour ?? "#ffffff", (v) => (profile.SidebarValueGlobalColour = v)} />
                            <ColorSwatch label="Sidebar Item (Bento)" bind:color={() => profile.SidebarItemBentoColour ?? "#D3D3D3", (v) => (profile.SidebarItemBentoColour = v)} />
                            <ColorSwatch label="Sidebar Value (Bento)" bind:color={() => profile.SidebarValueBentoColour ?? "#ffffff", (v) => (profile.SidebarValueBentoColour = v)} />
                            <ColorSwatch label="Sidebar Item (Timezone)" bind:color={() => profile.SidebarItemTimezoneColour ?? "#D3D3D3", (v) => (profile.SidebarItemTimezoneColour = v)} />
                        </div>
                        <div class="grid sm:grid-cols-2 gap-3">
                            <label class="grid gap-1">
                                <span class="text-sm">Timezone</span>
                                <input class={`input ${profile.Timezone && !timezoneValid ? "border-red-500 dark:border-red-600" : ""}`} placeholder="Europe/Copenhagen" bind:value={() => profile.Timezone ?? "", (v) => (profile.Timezone = v)} list="timezone-list" autocomplete="off" autocapitalize="off" spellcheck="false" inputmode="text" oninput={scheduleTimezoneDebounce} />
                                {#if profile.Timezone && !timezoneValid}
                                    <span class="text-xs text-red-600">Invalid timezone. Try an IANA name like "Europe/Copenhagen".</span>
                                {:else}
                                    <span class="text-xs text-zinc-500">Tip: Use your IANA timezone like "Europe/Copenhagen".</span>
                                {/if}
                            </label>
                            {#if timezoneOptions.length}
                                <datalist id="timezone-list">
                                    {#each timezoneOptions as tz (tz)}
                                        <option value={tz}></option>
                                    {/each}
                                </datalist>
                            {/if}
                            <label class="grid gap-1">
                                <span class="text-sm">Birthday</span>
                                <span class="flex gap-2">
                                    <input class="input flex-1" type="date" bind:value={() => birthdayInput, (v) => (profile.Birthday = fromDateInputValue(v))} />
                                    {#if profile.Birthday}
                                        <button class="btn-secondary" type="button" onclick={() => { profile.Birthday = null; }}>Remove</button>
                                    {/if}
                                </span>
                                <span class="text-xs text-zinc-500">Year is ignored; only month and day are used.</span>
                            </label>
                        </div>
                    </div>
                {:else if selectedTarget === "lastfm"}
                    <div class="grid gap-3">
                        <ColorOpacityPicker label="Panel Background" bind:color={() => profile.FmDivBgcolour ?? "#111827", (v) => (profile.FmDivBgcolour = v)} bind:opacity={() => profile.FmDivBgopacity ?? 100, (v) => (profile.FmDivBgopacity = v)} />
                        <ColorOpacityPicker label="Song Text" bind:color={() => profile.FmSongTextColour ?? "#ffffff", (v) => (profile.FmSongTextColour = v)} bind:opacity={() => profile.FmSongTextOpacity ?? 100, (v) => (profile.FmSongTextOpacity = v)} />
                        <ColorOpacityPicker label="Artist Text" bind:color={() => profile.FmArtistTextColour ?? "#ffffff", (v) => (profile.FmArtistTextColour = v)} bind:opacity={() => profile.FmArtistTextOpacity ?? 100, (v) => (profile.FmArtistTextOpacity = v)} />
                    </div>
                {:else if selectedTarget === "xp"}
                    <div class="grid gap-3">
                        <ColorOpacityPicker label="Panel Background" bind:color={() => profile.XpDivBgcolour ?? "#111827", (v) => (profile.XpDivBgcolour = v)} bind:opacity={() => profile.XpDivBgopacity ?? 100, (v) => (profile.XpDivBgopacity = v)} />
                        <ColorOpacityPicker label="Server Text" bind:color={() => profile.XpTextColour ?? "#ffffff", (v) => (profile.XpTextColour = v)} bind:opacity={() => profile.XpTextOpacity ?? 100, (v) => (profile.XpTextOpacity = v)} />
                        <ColorOpacityPicker label="Global Text" bind:color={() => profile.XpText2Colour ?? "#ffffff", (v) => (profile.XpText2Colour = v)} bind:opacity={() => profile.XpText2Opacity ?? 100, (v) => (profile.XpText2Opacity = v)} />
                        <ColorOpacityPicker label="Server Bar" bind:color={() => profile.XpBarColour ?? "#374151", (v) => (profile.XpBarColour = v)} bind:opacity={() => profile.XpBarOpacity ?? 100, (v) => (profile.XpBarOpacity = v)} />
                        <ColorOpacityPicker label="Global Bar" bind:color={() => profile.XpBar2Colour ?? "#374151", (v) => (profile.XpBar2Colour = v)} bind:opacity={() => profile.XpBar2Opacity ?? 100, (v) => (profile.XpBar2Opacity = v)} />
                        <ColorOpacityPicker label="Server Gradient 1" bind:color={() => profile.XpDoneServerColour1 ?? "#FCD34D", (v) => (profile.XpDoneServerColour1 = v)} bind:opacity={() => profile.XpDoneServerColour1Opacity ?? 100, (v) => (profile.XpDoneServerColour1Opacity = v)} />
                        <ColorOpacityPicker label="Server Gradient 2" bind:color={() => profile.XpDoneServerColour2 ?? "#F59E0B", (v) => (profile.XpDoneServerColour2 = v)} bind:opacity={() => profile.XpDoneServerColour2Opacity ?? 100, (v) => (profile.XpDoneServerColour2Opacity = v)} />
                        <ColorOpacityPicker label="Server Gradient 3" bind:color={() => profile.XpDoneServerColour3 ?? "#EF4444", (v) => (profile.XpDoneServerColour3 = v)} bind:opacity={() => profile.XpDoneServerColour3Opacity ?? 100, (v) => (profile.XpDoneServerColour3Opacity = v)} />
                        <ColorOpacityPicker label="Global Gradient 1" bind:color={() => profile.XpDoneGlobalColour1 ?? "#FCD34D", (v) => (profile.XpDoneGlobalColour1 = v)} bind:opacity={() => profile.XpDoneGlobalColour1Opacity ?? 100, (v) => (profile.XpDoneGlobalColour1Opacity = v)} />
                        <ColorOpacityPicker label="Global Gradient 2" bind:color={() => profile.XpDoneGlobalColour2 ?? "#F59E0B", (v) => (profile.XpDoneGlobalColour2 = v)} bind:opacity={() => profile.XpDoneGlobalColour2Opacity ?? 100, (v) => (profile.XpDoneGlobalColour2Opacity = v)} />
                        <ColorOpacityPicker label="Global Gradient 3" bind:color={() => profile.XpDoneGlobalColour3 ?? "#EF4444", (v) => (profile.XpDoneGlobalColour3 = v)} bind:opacity={() => profile.XpDoneGlobalColour3Opacity ?? 100, (v) => (profile.XpDoneGlobalColour3Opacity = v)} />
                    </div>
                {/if}
            </div>
        </div>
    {/if}

{#if editorExpanded}
    <div class="lg:sticky lg:top-0 lg:h-screen overflow-y-auto pr-3 md:pr-4">
        <details open ontoggle={onDetailsToggle}>
            <summary class="sticky top-0 z-20 bg-white dark:bg-black py-3 mb-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between cursor-default select-none"
                     tabindex="-1"
                     aria-disabled="true"
                     onclick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                     onkeydown={(e) => { e.preventDefault(); }}>
                <span class="flex items-center gap-2">
                    <span class="text-xl font-semibold">Editor</span>
                </span>
                <span class="flex items-center gap-3">
                    <button class="btn" onclick={saveProfile} disabled={saving || !hasChanges}>
                        {saving ? "Saving…" : "Save Changes"}
                    </button>
                    {#if hasChanges}
                        <button class="btn-secondary" onclick={resetChanges}>Reset Changes</button>
                    {/if}
                    <button class="btn-secondary" onclick={() => (editorExpanded = false)}>
                        Close Editor
                    </button>
                </span>
            </summary>

            <div class="space-y-6">
            <div class="min-h-[1.25rem] text-center mb-2">
                {#if error}
                    <div class="text-sm text-red-600">{error}</div>
                {:else if saving}
                    <div class="text-sm text-zinc-500">Saving…</div>
                {:else if loading}
                    <div class="text-sm text-zinc-500">Loading…</div>
                {:else if savedAt}
                    <div class="text-xs text-green-600">Saved at {savedAt.toLocaleTimeString()}</div>
                {/if}
            </div>
            <section class="grid gap-3">
                <label class="grid gap-1">
                    <span class="text-sm text-zinc-600 dark:text-zinc-400">Background URL</span>
                    <input class="input" placeholder="https://…" bind:value={() => profile.BackgroundUrl ?? "", (v) => (profile.BackgroundUrl = v || null)} />
                </label>
                <DescriptionField label="Description" bind:value={() => profile.Description ?? "", (v) => (profile.Description = v)} maxLength={500} placeholder="Profile bio" />
                <div class="grid sm:grid-cols-2 gap-3">
                    <ToggleSwitch label="Last.fm Board" bind:checked={() => !!profile.LastfmBoard, (v) => (profile.LastfmBoard = !!v)} />
                    <ToggleSwitch label="XP Board" bind:checked={() => !!profile.XpBoard, (v) => (profile.XpBoard = !!v)} />
                </div>
            </section>

            <section>
                <h3 class="font-semibold mb-2">Colours</h3>
                <div class="grid sm:grid-cols-2 gap-3">
                    <ColorOpacityPicker label="Background Colour" bind:color={() => profile.BackgroundColour ?? "#1F2937", (v) => (profile.BackgroundColour = v)} bind:opacity={() => profile.BackgroundColourOpacity ?? 100, (v) => (profile.BackgroundColourOpacity = v)} />
                    <ColorOpacityPicker label="Overlay Colour" bind:color={() => profile.OverlayColour ?? "#000000", (v) => (profile.OverlayColour = v)} bind:opacity={() => profile.OverlayOpacity ?? 20, (v) => (profile.OverlayOpacity = v)} />
                    <ColorOpacityPicker label="Description Colour" bind:color={() => profile.DescriptionColour ?? "#ffffff", (v) => (profile.DescriptionColour = v)} bind:opacity={() => profile.DescriptionColourOpacity ?? 100, (v) => (profile.DescriptionColourOpacity = v)} />
                    <ColorOpacityPicker label="Sidebar Colour" bind:color={() => profile.SidebarColour ?? "#000000", (v) => (profile.SidebarColour = v)} bind:opacity={() => profile.SidebarOpacity ?? 30, (v) => (profile.SidebarOpacity = v)} />
                    <ValueSlider label="Sidebar Blur" min={0} max={20} unit="px" bind:value={() => profile.SidebarBlur ?? 3, (v) => (profile.SidebarBlur = v)} />
                </div>
            </section>

            <section>
                <h3 class="font-semibold mb-2">Text Colours</h3>
                <div class="grid sm:grid-cols-2 gap-3">
                    <ColorSwatch label="Username" bind:color={() => profile.UsernameColour ?? "#ffffff", (v) => (profile.UsernameColour = v)} />
                    <ColorSwatch label="Discriminator" bind:color={() => profile.DiscriminatorColour ?? "#9CA3AF", (v) => (profile.DiscriminatorColour = v)} />
                    <ColorSwatch label="Sidebar Item (Server)" bind:color={() => profile.SidebarItemServerColour ?? "#D3D3D3", (v) => (profile.SidebarItemServerColour = v)} />
                    <ColorSwatch label="Sidebar Value (Server)" bind:color={() => profile.SidebarValueServerColour ?? "#ffffff", (v) => (profile.SidebarValueServerColour = v)} />
                    <ColorSwatch label="Sidebar Item (Global)" bind:color={() => profile.SidebarItemGlobalColour ?? "#D3D3D3", (v) => (profile.SidebarItemGlobalColour = v)} />
                    <ColorSwatch label="Sidebar Value (Global)" bind:color={() => profile.SidebarValueGlobalColour ?? "#ffffff", (v) => (profile.SidebarValueGlobalColour = v)} />
                </div>
            </section>

            <section>
                <h3 class="font-semibold mb-2">Sidebar Extra Colours</h3>
                <div class="grid sm:grid-cols-2 gap-3">
                    <ColorSwatch label="Sidebar Item (Bento)" bind:color={() => profile.SidebarItemBentoColour ?? "#D3D3D3", (v) => (profile.SidebarItemBentoColour = v)} />
                    <ColorSwatch label="Sidebar Item (Timezone)" bind:color={() => profile.SidebarItemTimezoneColour ?? "#D3D3D3", (v) => (profile.SidebarItemTimezoneColour = v)} />
                    <ColorSwatch label="Sidebar Value (Bento)" bind:color={() => profile.SidebarValueBentoColour ?? "#ffffff", (v) => (profile.SidebarValueBentoColour = v)} />
                </div>
            </section>

            <section>
                <h3 class="font-semibold mb-2">Last.fm Board</h3>
                <div class="grid sm:grid-cols-2 gap-3">
                    <ColorOpacityPicker label="Panel Background" bind:color={() => profile.FmDivBgcolour ?? "#111827", (v) => (profile.FmDivBgcolour = v)} bind:opacity={() => profile.FmDivBgopacity ?? 100, (v) => (profile.FmDivBgopacity = v)} />
                    <ColorOpacityPicker label="Song Text" bind:color={() => profile.FmSongTextColour ?? "#ffffff", (v) => (profile.FmSongTextColour = v)} bind:opacity={() => profile.FmSongTextOpacity ?? 100, (v) => (profile.FmSongTextOpacity = v)} />
                    <ColorOpacityPicker label="Artist Text" bind:color={() => profile.FmArtistTextColour ?? "#ffffff", (v) => (profile.FmArtistTextColour = v)} bind:opacity={() => profile.FmArtistTextOpacity ?? 100, (v) => (profile.FmArtistTextOpacity = v)} />
                </div>
            </section>

            <section>
                <h3 class="font-semibold mb-2">XP Board</h3>
                <div class="grid sm:grid-cols-2 gap-3">
                    <ColorOpacityPicker label="Panel Background" bind:color={() => profile.XpDivBgcolour ?? "#111827", (v) => (profile.XpDivBgcolour = v)} bind:opacity={() => profile.XpDivBgopacity ?? 100, (v) => (profile.XpDivBgopacity = v)} />
                    <ColorOpacityPicker label="Server Text" bind:color={() => profile.XpTextColour ?? "#ffffff", (v) => (profile.XpTextColour = v)} bind:opacity={() => profile.XpTextOpacity ?? 100, (v) => (profile.XpTextOpacity = v)} />
                    <ColorOpacityPicker label="Global Text" bind:color={() => profile.XpText2Colour ?? "#ffffff", (v) => (profile.XpText2Colour = v)} bind:opacity={() => profile.XpText2Opacity ?? 100, (v) => (profile.XpText2Opacity = v)} />
                    <ColorOpacityPicker label="Server Bar" bind:color={() => profile.XpBarColour ?? "#374151", (v) => (profile.XpBarColour = v)} bind:opacity={() => profile.XpBarOpacity ?? 100, (v) => (profile.XpBarOpacity = v)} />
                    <ColorOpacityPicker label="Global Bar" bind:color={() => profile.XpBar2Colour ?? "#374151", (v) => (profile.XpBar2Colour = v)} bind:opacity={() => profile.XpBar2Opacity ?? 100, (v) => (profile.XpBar2Opacity = v)} />
                    <ColorOpacityPicker label="Server Gradient 1" bind:color={() => profile.XpDoneServerColour1 ?? "#FCD34D", (v) => (profile.XpDoneServerColour1 = v)} bind:opacity={() => profile.XpDoneServerColour1Opacity ?? 100, (v) => (profile.XpDoneServerColour1Opacity = v)} />
                    <ColorOpacityPicker label="Server Gradient 2" bind:color={() => profile.XpDoneServerColour2 ?? "#F59E0B", (v) => (profile.XpDoneServerColour2 = v)} bind:opacity={() => profile.XpDoneServerColour2Opacity ?? 100, (v) => (profile.XpDoneServerColour2Opacity = v)} />
                    <ColorOpacityPicker label="Server Gradient 3" bind:color={() => profile.XpDoneServerColour3 ?? "#EF4444", (v) => (profile.XpDoneServerColour3 = v)} bind:opacity={() => profile.XpDoneServerColour3Opacity ?? 100, (v) => (profile.XpDoneServerColour3Opacity = v)} />
                    <ColorOpacityPicker label="Global Gradient 1" bind:color={() => profile.XpDoneGlobalColour1 ?? "#FCD34D", (v) => (profile.XpDoneGlobalColour1 = v)} bind:opacity={() => profile.XpDoneGlobalColour1Opacity ?? 100, (v) => (profile.XpDoneGlobalColour1Opacity = v)} />
                    <ColorOpacityPicker label="Global Gradient 2" bind:color={() => profile.XpDoneGlobalColour2 ?? "#F59E0B", (v) => (profile.XpDoneGlobalColour2 = v)} bind:opacity={() => profile.XpDoneGlobalColour2Opacity ?? 100, (v) => (profile.XpDoneGlobalColour2Opacity = v)} />
                    <ColorOpacityPicker label="Global Gradient 3" bind:color={() => profile.XpDoneGlobalColour3 ?? "#EF4444", (v) => (profile.XpDoneGlobalColour3 = v)} bind:opacity={() => profile.XpDoneGlobalColour3Opacity ?? 100, (v) => (profile.XpDoneGlobalColour3Opacity = v)} />
                </div>
            </section>

            <section>
                <h3 class="font-semibold mb-2">Meta</h3>
                <div class="grid sm:grid-cols-2 gap-3">
                    <label class="grid gap-1">
                        <span class="text-sm">Timezone</span>
                        <input class={`input ${profile.Timezone && !timezoneValid ? "border-red-500 dark:border-red-600" : ""}`} placeholder="Europe/Copenhagen" bind:value={() => profile.Timezone ?? "", (v) => (profile.Timezone = v)} list="timezone-list" autocomplete="off" autocapitalize="off" spellcheck="false" inputmode="text" oninput={scheduleTimezoneDebounce} />
                        {#if profile.Timezone && !timezoneValid}
                            <span class="text-xs text-red-600">Invalid timezone. Try an IANA name like "Europe/Copenhagen".</span>
                        {:else}
                            <span class="text-xs text-zinc-500">Tip: Use your IANA timezone like "Europe/Copenhagen".</span>
                        {/if}
                    </label>
                    {#if timezoneOptions.length}
                        <datalist id="timezone-list">
                            {#each timezoneOptions as tz (tz)}
                                <option value={tz}></option>
                            {/each}
                        </datalist>
                    {/if}
                    <label class="grid gap-1">
                        <span class="text-sm">Birthday</span>
                        <span class="flex gap-2">
                            <input class="input flex-1" type="date" bind:value={() => birthdayInput, (v) => (profile.Birthday = fromDateInputValue(v))} />
                            {#if profile.Birthday}
                                <button class="btn-secondary" type="button" onclick={() => { profile.Birthday = null; }}>Remove</button>
                            {/if}
                        </span>
                        <span class="text-xs text-zinc-500">Year is ignored; only month and day are used.</span>
                    </label>
                </div>
            </section>

        </div>
        </details>
    </div>
{/if}
</div>

<style>
    @reference "../../styles/global.css";
    .input {
        @apply px-3 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900;
    }

    .btn {
        @apply px-4 py-2 rounded bg-yellow-500 text-black hover:bg-yellow-600 disabled:opacity-60 cursor-pointer transition-colors;
    }

    .btn-secondary {
        @apply px-4 py-2 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-300 dark:hover:bg-zinc-700 disabled:opacity-60 cursor-pointer transition-colors;
    }

    /* Hover affordance for click-to-edit elements */
    /* Use visual filters instead of borders to avoid layout shifts */
    .editable {
        /* No positioning change to avoid overriding absolute/static layout */
        transition: filter 120ms ease, box-shadow 120ms ease;
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
    .editable-bg:hover:has(.editable:hover) {
        /* A descendant is hovered; suppress parent hover indication */
        filter: none;
        box-shadow: none;
    }
</style>
