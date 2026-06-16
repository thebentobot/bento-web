interface IRankStyles {
    [key: number]: {
        width: string;
        avatarWidth: number | { mobile: number; desktop: number };
        avatarHeight: number | { mobile: number; desktop: number };
        textSize: string;
    };
}

export const rankStyles: IRankStyles = {
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
