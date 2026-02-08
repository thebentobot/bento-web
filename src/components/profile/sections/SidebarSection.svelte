<script lang="ts">
    import { DateTime } from "luxon";
    import ColorOpacityPicker from "../ColorOpacityPicker.svelte";
    import ValueSlider from "../ValueSlider.svelte";
    import ColorSwatch from "../ColorSwatch.svelte";

    interface Props {
        sidebarColour?: string;
        sidebarOpacity?: number;
        sidebarBlur?: number;
        usernameColour?: string;
        discriminatorColour?: string;
        sidebarItemServerColour?: string;
        sidebarValueServerColour?: string;
        sidebarItemGlobalColour?: string;
        sidebarValueGlobalColour?: string;
        sidebarItemBentoColour?: string;
        sidebarValueBentoColour?: string;
        sidebarItemTimezoneColour?: string;
        timezone?: string;
        birthday?: string | null;
    }

    let {
        sidebarColour = $bindable("#000000"),
        sidebarOpacity = $bindable(30),
        sidebarBlur = $bindable(3),

        usernameColour = $bindable("#ffffff"),
        discriminatorColour = $bindable("#9CA3AF"),

        sidebarItemServerColour = $bindable("#D3D3D3"),
        sidebarValueServerColour = $bindable("#ffffff"),
        sidebarItemGlobalColour = $bindable("#D3D3D3"),
        sidebarValueGlobalColour = $bindable("#ffffff"),
        sidebarItemBentoColour = $bindable("#D3D3D3"),
        sidebarValueBentoColour = $bindable("#ffffff"),
        sidebarItemTimezoneColour = $bindable("#D3D3D3"),

        timezone = $bindable(""),
        birthday = $bindable<string | null>(null),
    }: Props = $props();

    // Timezone and birthday UX localized inside this section
    let supportedTimezones = $state<string[]>([]);
    // Debounce timezone validation
    let tzDebounceHandle: number | undefined;
    let debouncedTimezoneTrimmed = $state("");
    function scheduleTimezoneDebounce() {
        if (typeof window === "undefined") {
            debouncedTimezoneTrimmed = timezone?.trim() ?? "";
            return;
        }
        if (tzDebounceHandle) clearTimeout(tzDebounceHandle);
        tzDebounceHandle = window.setTimeout(() => {
            debouncedTimezoneTrimmed = timezone?.trim() ?? "";
        }, 300);
    }

    // One-time initial sync
    let tzInitDone = false;
    $effect(() => {
        if (tzInitDone) return;
        // Populate supported timezones if supported
        try {
            const sv = (Intl as unknown as { supportedValuesOf?: (key: string) => string[] })
                .supportedValuesOf;
            if (typeof sv === "function") supportedTimezones = sv("timeZone") ?? [];
        } catch {
            /* ignore */
        }
        debouncedTimezoneTrimmed = timezone?.trim() ?? "";
        tzInitDone = true;
    });

    const timezoneValid = $derived(
        debouncedTimezoneTrimmed === ""
            ? true
            : DateTime.now().setZone(debouncedTimezoneTrimmed).isValid
    );

    const timezoneOptions = $derived(
        (() => {
            if (!supportedTimezones?.length) return [] as string[];
            const q = debouncedTimezoneTrimmed.toLowerCase();
            if (q.length < 3) return [] as string[];
            const starts = supportedTimezones.filter((tz) => tz.toLowerCase().startsWith(q));
            const contains = supportedTimezones.filter(
                (tz) => tz.toLowerCase().includes(q) && !starts.includes(tz)
            );
            return [...starts, ...contains].slice(0, 8);
        })()
    );

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
        return dt.set({ year: DEFAULT_BDAY_YEAR }).toISODate();
    }
    function monthDayFromDateInput(v: string | null | undefined): string | null {
        if (!v) return null;
        const dt = DateTime.fromISO(v, { zone: "utc" });
        if (!dt.isValid) return null;
        return dt.toFormat("MM-dd");
    }
    function fromDateInputValue(value: string): string | null {
        return monthDayFromDateInput(value);
    }
    function onBirthdayInput(e: Event) {
        const el = e.currentTarget as HTMLInputElement;
        birthday = fromDateInputValue(el.value);
    }
    const birthdayInput = $derived(normalizeBirthdayToDateInput(birthday));
</script>

<div class="grid gap-3 w-full">
    <ColorOpacityPicker
        label="Sidebar Colour"
        bind:color={sidebarColour}
        bind:opacity={sidebarOpacity}
    />
    <ValueSlider label="Sidebar Blur" min={0} max={20} unit="px" bind:value={sidebarBlur} />
    <ColorSwatch label="Username Colour" bind:color={usernameColour} />
    <ColorSwatch label="Discriminator Colour" bind:color={discriminatorColour} />

    <div class="grid sm:grid-cols-2 gap-3">
        <ColorSwatch label="Sidebar Item (Server)" bind:color={sidebarItemServerColour} />
        <ColorSwatch label="Sidebar Value (Server)" bind:color={sidebarValueServerColour} />
        <ColorSwatch label="Sidebar Item (Global)" bind:color={sidebarItemGlobalColour} />
        <ColorSwatch label="Sidebar Value (Global)" bind:color={sidebarValueGlobalColour} />
        <ColorSwatch label="Sidebar Item (Bento)" bind:color={sidebarItemBentoColour} />
        <ColorSwatch label="Sidebar Value (Bento)" bind:color={sidebarValueBentoColour} />
        <ColorSwatch label="Sidebar Item (Timezone)" bind:color={sidebarItemTimezoneColour} />
    </div>

    <div class="grid sm:grid-cols-2 gap-3">
        <label class="grid gap-1">
            <span class="text-sm">Timezone</span>
            <input
                class={`input ${timezone && !timezoneValid ? "border-red-500 dark:border-red-600" : ""}`}
                placeholder="Europe/Copenhagen"
                bind:value={timezone}
                list="timezone-list"
                autocomplete="off"
                autocapitalize="off"
                spellcheck="false"
                inputmode="text"
                oninput={scheduleTimezoneDebounce}
            />
            {#if timezone && !timezoneValid}
                <span class="text-xs text-red-600"
                    >Invalid timezone. Try an IANA name like "Europe/Copenhagen".</span
                >
            {:else}
                <span class="text-xs text-zinc-500"
                    >Tip: Use your IANA timezone like "Europe/Copenhagen".</span
                >
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
                <input
                    class="input flex-1"
                    type="date"
                    value={birthdayInput}
                    oninput={onBirthdayInput}
                />
                {#if birthday}
                    <button
                        class="btn-secondary"
                        type="button"
                        onclick={() => {
                            birthday = null;
                        }}>Remove</button
                    >
                {/if}
            </span>
            <span class="text-xs text-zinc-500">Year is ignored; only month and day are used.</span>
        </label>
    </div>
</div>

<style>
    @reference "../../../styles/global.css";
    .input {
        @apply px-3 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900;
    }
    .btn-secondary {
        @apply px-4 py-2 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-300 dark:hover:bg-zinc-700 disabled:opacity-60 cursor-pointer transition-colors;
    }
</style>
