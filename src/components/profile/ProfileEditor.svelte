<script lang="ts">
    import type { ProfileDto, ProfilePatch } from "../../library/types/interfaces";
    import { fetchUserProfile as apiFetchUserProfile, saveUserProfile as apiSaveUserProfile } from "../../library/server/bentoApi";

    export let userId: string; // Discord user id from auth
    export let username: string = "User";
    export let discriminator: string | undefined;
    export let avatarUrl: string | undefined;
    export let initialProfile: ProfileDto | null = null;

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

    let loading = false;
    let error: string | null = null;
    let saving = false;
    let savedAt: Date | null = null;

    let originalProfile: ProfileDto = mergeWithDefaults(defaultProfile(userId), initialProfile);
    let profile: ProfileDto = { ...originalProfile };

    function mergeWithDefaults(defaults: ProfileDto, incoming?: Partial<ProfileDto> | null): ProfileDto {
        // Start from defaults and only apply incoming fields that are not null/undefined
        const result: ProfileDto = { ...defaults };
        if (!incoming) return result;

        for (const [k, v] of Object.entries(incoming) as [keyof ProfileDto, ProfileDto[keyof ProfileDto]][]) {
            if (k === 'UserId') continue; // always trust the accurate string from props
            if (v !== null && v !== undefined) {
                // Satisfy TS for indexed assignment across heterogeneous keys
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (result as any)[k] = v as any;
            }
        }
        return result;
    }

    const fetchProfile = async () => {
        loading = true;
        error = null;
        try {
            const data = await apiFetchUserProfile(userId);
            const defaults = defaultProfile(userId);
            originalProfile = mergeWithDefaults(defaults, data);
            profile = { ...originalProfile };
        } catch (e: unknown) {
            console.error(e);
            error = (e as Error)?.message ?? "Unknown error";
            // Keep defaults so user can still edit and save
            originalProfile = defaultProfile(userId);
            profile = { ...originalProfile };
        } finally {
            loading = false;
        }
    };

    function computeProfilePatch(original: ProfileDto, current: ProfileDto): ProfilePatch {
        const patch: ProfilePatch = { UserId: current.UserId };
        for (const k of Object.keys(current) as (keyof ProfileDto)[]) {
            if (k === 'UserId') continue;
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

    function onToggleLastfm(e: Event) {
        const target = e.currentTarget as HTMLInputElement | null;
        if (target) profile.LastfmBoard = target.checked;
    }

    function onToggleXp(e: Event) {
        const target = e.currentTarget as HTMLInputElement | null;
        if (target) profile.XpBoard = target.checked;
    }

    function convertOpacityToHex(opacity?: number | null) {
        const value = opacity ?? 100;
        return Math.round((value / 100) * 255).toString(16).padStart(2, "0").toUpperCase();
    }

    $: backgroundColourFull = `${profile.BackgroundColour ?? "#1F2937"}${convertOpacityToHex(profile.BackgroundColourOpacity)}`;
    $: descriptionColourFull = `${profile.DescriptionColour ?? "#ffffff"}${convertOpacityToHex(profile.DescriptionColourOpacity)}`;
    $: overlayColourFull = `${profile.OverlayColour ?? "#000000"}${convertOpacityToHex(profile.OverlayOpacity)}`;
    $: sidebarColourFull = `${profile.SidebarColour ?? "#000000"}${convertOpacityToHex(profile.SidebarOpacity)}`;
    $: fmDivBGColourFull = `${profile.FmDivBgcolour ?? "#111827"}${convertOpacityToHex(profile.FmDivBgopacity)}`;
    $: fmSongTextColourFull = `${profile.FmSongTextColour ?? "#ffffff"}${convertOpacityToHex(profile.FmSongTextOpacity)}`;
    $: fmArtistTextColourFull = `${profile.FmArtistTextColour ?? "#ffffff"}${convertOpacityToHex(profile.FmArtistTextOpacity)}`;
    $: xpDivBGColourFull = `${profile.XpDivBgcolour ?? "#111827"}${convertOpacityToHex(profile.XpDivBgopacity)}`;
    $: xpTextColourFull = `${profile.XpTextColour ?? "#ffffff"}${convertOpacityToHex(profile.XpTextOpacity)}`;
    $: xpText2ColourFull = `${profile.XpText2Colour ?? "#ffffff"}${convertOpacityToHex(profile.XpText2Opacity)}`;
    $: xpBarColourFull = `${profile.XpBarColour ?? "#374151"}${convertOpacityToHex(profile.XpBarOpacity)}`;
    $: xpBar2ColourFull = `${profile.XpBar2Colour ?? "#374151"}${convertOpacityToHex(profile.XpBar2Opacity)}`;

</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div>
        <div class="mb-3 flex items-center gap-2">
            <h2 class="text-xl font-semibold">Preview</h2>
            {#if loading}
                <span class="text-sm text-zinc-500">Loading…</span>
            {/if}
            {#if savedAt}
                <span class="text-xs text-green-600">Saved at {savedAt.toLocaleTimeString()}</span>
            {/if}
        </div>

        <!-- Visualization approximating the C# HTML/CSS -->
        <div class={`relative rounded-lg overflow-hidden shadow ${profile.BackgroundUrl ? 'custom-bg' : ''}`}
             style={`width:600px;height:400px;background-color:${backgroundColourFull};${profile.BackgroundUrl ? `background-image:url('${profile.BackgroundUrl}')` : ''};background-size:cover;background-position:center;`}>
            <div class={`absolute inset-0 ${profile.BackgroundUrl ? 'overlay' : ''}`}
                 style={`background-color:${overlayColourFull}`}></div>

            <!-- Center description area -->
            <div class="absolute"
                 style={`left:40px; top:20px; width:325px; height:250px; color:${descriptionColourFull};`}>
                <div class="absolute bottom-0 w-[300px] text-[20px] leading-tight">
                    <p class="m-0"
                       style={`color:${descriptionColourFull}`}>{profile.Description ?? 'I am a happy user of Bento 🍱😄'}</p>
                </div>
            </div>

            <!-- Sidebar -->
            <div class={`absolute top-0 right-0 h-full w-[200px] ${profile.BackgroundUrl ? 'backdrop' : ''}`}
                 style={`background-color:${sidebarColourFull}; border-radius:0 10px 10px 0; ${profile.BackgroundUrl ? `backdrop-filter: blur(${profile.SidebarBlur ?? 3}px);` : ''}`}>
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
                         style={`font-size:24px;color:${profile.UsernameColour ?? '#ffffff'}`}>{username}</div>
                    <div class="font-['Urbanist'] text-[17px]"
                         style={`color:${profile.DiscriminatorColour ?? '#9CA3AF'}`}>{discriminator ? `#${discriminator}` : ''}</div>
                </div>

                <!-- Sidebar list -->
                <ul class="list-none m-0 p-0 text-center absolute"
                    style="top:170px; right:0; width:200px; line-height:1.1;">
                    <li class="py-3" style={`color:${profile.SidebarItemServerColour ?? '#D3D3D3'}`}>
                        <span class="text-[24px]" style={`color:${profile.SidebarValueServerColour ?? '#ffffff'}`}>Rank 0</span><br />Of
                        0 Users
                    </li>
                    <li class="py-3" style={`color:${profile.SidebarItemGlobalColour ?? '#D3D3D3'}`}>
                        <span class="text-[24px]" style={`color:${profile.SidebarValueGlobalColour ?? '#ffffff'}`}>Rank 0</span><br />Of
                        0 Users
                    </li>
                    <li class="py-3" style={`color:${profile.SidebarItemTimezoneColour ?? '#D3D3D3'}`}>
                        <span class="text-[24px]" style="color:#ffffff">🕒</span><br />
                    </li>
                </ul>
            </div>

            <!-- Footer: boards -->
            <div class="absolute left-0 bottom-0 w-[400px] h-[150px] p-5 flex flex-col gap-2">
                {#if profile.LastfmBoard}
                    <div class="rounded bg-black/30"
                         style={`background-color:${fmDivBGColourFull}; padding:8px 12px; display:flex; align-items:center; gap:10px`}>
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
                    <div class="rounded" style={`background-color:${xpDivBGColourFull}; padding:8px 12px;`}>
                        <div class="flex items-center justify-between text-right gap-4">
                            <div class="flex-1">
                                <div style={`color:${xpTextColourFull}`}>Level 0</div>
                                <div class="w-full h-1 rounded" style={`background-color:${xpBarColourFull}`}></div>
                            </div>
                            <div class="flex-1">
                                <div style={`color:${xpText2ColourFull}`}>Level 0</div>
                                <div class="w-full h-1 rounded" style={`background-color:${xpBar2ColourFull}`}></div>
                            </div>
                        </div>
                    </div>
                {/if}
            </div>
        </div>
    </div>

    <div>
        <div class="mb-3 flex items-center gap-2">
            <h2 class="text-xl font-semibold">Editor</h2>
            {#if error}
                <span class="text-sm text-red-600">{error}</span>
            {/if}
        </div>

        <div class="space-y-6">
            <section class="grid gap-3">
                <div class="grid sm:grid-cols-2 gap-3">
                    <label class="grid gap-1">
                        <span class="text-sm text-zinc-600 dark:text-zinc-400">Background URL</span>
                        <input class="input" placeholder="https://…" bind:value={profile.BackgroundUrl} />
                    </label>
                    <label class="grid gap-1">
                        <span class="text-sm text-zinc-600 dark:text-zinc-400">Description</span>
                        <input class="input" placeholder="Profile bio" bind:value={profile.Description} />
                    </label>
                </div>
                <div class="grid sm:grid-cols-2 gap-3">
                    <label class="grid gap-1">
                        <span class="text-sm">Last.fm Board</span>
                        <input type="checkbox" checked={!!profile.LastfmBoard} on:change={onToggleLastfm} />
                    </label>
                    <label class="grid gap-1">
                        <span class="text-sm">XP Board</span>
                        <input type="checkbox" checked={!!profile.XpBoard} on:change={onToggleXp} />
                    </label>
                </div>
            </section>

            <section>
                <h3 class="font-semibold mb-2">Colours</h3>
                <div class="grid sm:grid-cols-2 gap-3">
                    <label class="grid gap-1">
                        <span class="text-sm">Background Colour</span>
                        <input type="color" bind:value={profile.BackgroundColour} />
                        <input type="range" min="0" max="100" bind:value={profile.BackgroundColourOpacity} />
                    </label>
                    <label class="grid gap-1">
                        <span class="text-sm">Overlay Colour</span>
                        <input type="color" bind:value={profile.OverlayColour} />
                        <input type="range" min="0" max="100" bind:value={profile.OverlayOpacity} />
                    </label>
                    <label class="grid gap-1">
                        <span class="text-sm">Description Colour</span>
                        <input type="color" bind:value={profile.DescriptionColour} />
                        <input type="range" min="0" max="100" bind:value={profile.DescriptionColourOpacity} />
                    </label>
                    <label class="grid gap-1">
                        <span class="text-sm">Sidebar Colour</span>
                        <input type="color" bind:value={profile.SidebarColour} />
                        <input type="range" min="0" max="100" bind:value={profile.SidebarOpacity} />
                    </label>
                    <label class="grid gap-1">
                        <span class="text-sm">Sidebar Blur (px)</span>
                        <input type="range" min="0" max="20" bind:value={profile.SidebarBlur} />
                    </label>
                </div>
            </section>

            <section>
                <h3 class="font-semibold mb-2">Text Colours</h3>
                <div class="grid sm:grid-cols-2 gap-3">
                    <label class="grid gap-1">
                        <span class="text-sm">Username</span>
                        <input type="color" bind:value={profile.UsernameColour} />
                    </label>
                    <label class="grid gap-1">
                        <span class="text-sm">Discriminator</span>
                        <input type="color" bind:value={profile.DiscriminatorColour} />
                    </label>
                    <label class="grid gap-1">
                        <span class="text-sm">Sidebar Item (Server)</span>
                        <input type="color" bind:value={profile.SidebarItemServerColour} />
                    </label>
                    <label class="grid gap-1">
                        <span class="text-sm">Sidebar Value (Server)</span>
                        <input type="color" bind:value={profile.SidebarValueServerColour} />
                    </label>
                    <label class="grid gap-1">
                        <span class="text-sm">Sidebar Item (Global)</span>
                        <input type="color" bind:value={profile.SidebarItemGlobalColour} />
                    </label>
                    <label class="grid gap-1">
                        <span class="text-sm">Sidebar Value (Global)</span>
                        <input type="color" bind:value={profile.SidebarValueGlobalColour} />
                    </label>
                </div>
            </section>

            <div class="flex items-center gap-3">
                <button class="btn" on:click={saveProfile} disabled={saving}>
                    {saving ? 'Saving…' : 'Save Changes'}
                </button>
                <button class="btn-secondary" on:click={fetchProfile} disabled={loading}>
                    Reload
                </button>
            </div>
        </div>
    </div>
</div>

<style>
    @reference "../../styles/global.css";
    .input {
        @apply px-3 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900;
    }

    .btn {
        @apply px-4 py-2 rounded bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-60;
    }

    .btn-secondary {
        @apply px-4 py-2 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-300 dark:hover:bg-zinc-700 disabled:opacity-60;
    }
</style>
