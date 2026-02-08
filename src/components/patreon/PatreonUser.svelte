<script lang="ts">
    import type { PatreonWithRank } from "../../library/server/patreon";

    interface RankStyle {
        width: string;
        avatarWidth: number | { mobile: number; desktop: number };
        avatarHeight: number | { mobile: number; desktop: number };
        textSize: string;
    }

    const rankStyles: Record<number, RankStyle> = {
        1: {
            width: "w-full sm:w-96",
            avatarWidth: { mobile: 80, desktop: 125 },
            avatarHeight: { mobile: 80, desktop: 125 },
            textSize: "text-xl",
        },
        2: {
            width: "w-full sm:w-96",
            avatarWidth: { mobile: 70, desktop: 100 },
            avatarHeight: { mobile: 70, desktop: 100 },
            textSize: "text-lg",
        },
        3: {
            width: "w-full sm:w-96",
            avatarWidth: { mobile: 60, desktop: 75 },
            avatarHeight: { mobile: 60, desktop: 75 },
            textSize: "text-base",
        },
        4: {
            width: "w-full sm:w-96",
            avatarWidth: { mobile: 40, desktop: 50 },
            avatarHeight: { mobile: 40, desktop: 50 },
            textSize: "text-sm",
        },
        5: {
            width: "w-full sm:w-96",
            avatarWidth: { mobile: 20, desktop: 25 },
            avatarHeight: { mobile: 20, desktop: 25 },
            textSize: "text-xs",
        },
    };

    interface Props {
        user: PatreonWithRank;
    }

    const { user }: Props = $props();

    const style = $derived(rankStyles[user.rank] || rankStyles[5]!);

    const avatarWidthStyle = $derived(
        typeof style.avatarWidth === "number"
            ? `${style.avatarWidth}px`
            : `clamp(${style.avatarWidth.mobile}px, 5vw + ${style.avatarWidth.mobile * 0.5}px, ${style.avatarWidth.desktop}px)`
    );

    const avatarHeightStyle = $derived(
        typeof style.avatarHeight === "number"
            ? `${style.avatarHeight}px`
            : `clamp(${style.avatarHeight.mobile}px, 5vw + ${style.avatarHeight.mobile * 0.5}px, ${style.avatarHeight.desktop}px)`
    );

    const avatarWidth = $derived(
        typeof style.avatarWidth === "number" ? style.avatarWidth : style.avatarWidth.desktop
    );

    const avatarHeight = $derived(
        typeof style.avatarHeight === "number" ? style.avatarHeight : style.avatarHeight.desktop
    );
</script>

<div>
    <li
        class="transition duration-300 ease-in-out dark:bg-zinc-900 bg-zinc-100 flex flex-wrap items-center {style.width} my-4 px-4 rounded-lg group hover:bg-zinc-200 dark:hover:bg-zinc-800 shadow-xs overflow-hidden"
    >
        <div class="shrink-0 truncate text-left py-5 mx-auto">
            <img
                width={avatarWidth}
                height={avatarHeight}
                class="rounded-full inline-block mx-4 whitespace-nowrap overflow-hidden"
                style="width: {avatarWidthStyle}; height: {avatarHeightStyle};"
                src={user.avatarUrl}
                alt="{user.name}'s Avatar"
            />
        </div>
        <div class="grow p-4 w-full md:w-auto overflow-hidden">
            <div
                class="transition duration-1000 ease-in-out text-black dark:text-white text-center lg:text-left overflow-hidden {style.textSize}"
            >
                {user.name}
            </div>
        </div>
    </li>
</div>
