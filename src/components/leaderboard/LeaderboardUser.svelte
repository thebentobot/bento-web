<script lang="ts">
    const rankToStyle = (rank: number) => {
        switch (rank) {
            case 1:
                return { color: "#FFD700", fontWeight: 1000 };
            case 2:
                return { color: "#C0C0C0", fontWeight: 700 };
            case 3:
                return { color: "#CD7F32", fontWeight: 500 };
            default:
                return {};
        }
    };

    const { rank, level, xp, avatarUrl, username, discriminator } = $props<{
        rank: number;
        level: number;
        xp: number;
        userId: bigint;
        avatarUrl: string;
        username: string;
        discriminator: string;
    }>();

    const rankNumber = $derived(Number(rank));
    const topUsersStyle = $derived(rankToStyle(rankNumber));
    const percent = $derived((xp / (level * level * 100)) * 100);
    const truncatedDiscriminator = $derived(("0000" + discriminator).slice(-4));
    const messagesToNextLevel = $derived(Math.round((level * level * 100 - xp) / 46));

    const styleString = $derived(
        Object.entries(topUsersStyle)
            .map(([key, value]) => `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${value}`)
            .join("; ")
    );
</script>

<li
    class="transition duration-300 ease-in-out dark:bg-zinc-900 bg-zinc-100 flex items-center w-full my-4 p-2 px-4 rounded-lg group hover:bg-zinc-200 dark:hover:bg-zinc-800 shadow-xs overflow-hidden"
>
    <div class="shrink-0 w-72 truncate dark:text-zinc-700 text-zinc-100 text-left">
        <div
            class="transition duration-300 ease-in-out inline-block dark:bg-zinc-800 bg-zinc-200 px-2 py-1 rounded-md dark:group-hover:bg-zinc-900 group-hover:bg-zinc-300"
        >
            <span
                class="transition duration-300 ease-in-out dark:text-zinc-400 dark:group-hover:text-zinc-400 text-zinc-950 group-hover:text-zinc-950 bg-clip-text"
                style={styleString}
            >
                {rankNumber}
            </span>
        </div>
        <img
            class="w-16 dark:bg-zinc-800 bg-zinc-200 rounded-full inline-block mx-4 whitespace-nowrap overflow-hidden"
            src={avatarUrl}
            alt="{username}'s Avatar"
            style="text-indent: 100%;"
            width={64}
            height={64}
        />
        <span
            title="{username}#{truncatedDiscriminator}"
            class="transition duration-300 ease-in-out text-zinc-400 group-hover:text-zinc-400"
        >
            <span
                class="transition duration-300 ease-in-out dark:text-zinc-200 dark:group-hover:text-white text-zinc-800 group-hover:text-black"
            >
                {username}
            </span>
            <span>#{truncatedDiscriminator}</span>
        </span>
    </div>

    <div class="grow p-4 w-full md:w-auto overflow-hidden">
        <div
            class="max-lg:hidden transition duration-1000 ease-in-out dark:text-white text-black text-left opacity-0 group-hover:opacity-100 overflow-hidden"
        >
            {messagesToNextLevel} messages to level {level + 1}
        </div>
        <div
            title="{messagesToNextLevel} messages to level {level + 1}"
            class="transition duration-300 ease-in-out mt-1 mb-1 w-full h-1 dark:bg-zinc-700 dark:group-hover:bg-zinc-500 bg-zinc-300 group-hover:bg-zinc-400 rounded-sm overflow-hidden"
        >
            <div class="progress-done" style="opacity: 0.75; width: {percent}%;"></div>
        </div>
    </div>

    <div
        class="dark:text-white text-black p-4 h-20 flex md:w-auto items-center justify-between"
    >
        <div>
            Level
            <br />
            <span class="text-2xl font-medium">{level}</span>
        </div>
    </div>
</li>
