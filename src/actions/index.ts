import { defineAction, ActionError } from "astro:actions";
import { z } from "astro:schema";
import type { ProfilePatch } from "../library/types/interfaces";
import { saveUserProfile as saveUserProfileServer } from "../library/server/bentoApi";
import type { BentoBetterAuthUser } from "../library/auth";

// Build a strict Zod schema that mirrors ProfileDto, then derive a Patch schema
const ProfileDtoSchema = z
    .object({
        UserId: z.string(),
        LastfmBoard: z.boolean().nullable(),
        XpBoard: z.boolean().nullable(),
        BackgroundUrl: z.string().nullable(),
        BackgroundColourOpacity: z.number().nullable(),
        BackgroundColour: z.string().nullable(),
        DescriptionColourOpacity: z.number().nullable(),
        DescriptionColour: z.string().nullable(),
        OverlayOpacity: z.number().nullable(),
        OverlayColour: z.string().nullable(),
        UsernameColour: z.string().nullable(),
        DiscriminatorColour: z.string().nullable(),
        SidebarItemServerColour: z.string().nullable(),
        SidebarItemGlobalColour: z.string().nullable(),
        SidebarItemBentoColour: z.string().nullable(),
        SidebarItemTimezoneColour: z.string().nullable(),
        SidebarValueServerColour: z.string().nullable(),
        SidebarValueGlobalColour: z.string().nullable(),
        SidebarValueBentoColour: z.string().nullable(),
        SidebarOpacity: z.number().nullable(),
        SidebarColour: z.string().nullable(),
        SidebarBlur: z.number().nullable(),
        FmDivBgopacity: z.number().nullable(),
        FmDivBgcolour: z.string().nullable(),
        FmSongTextOpacity: z.number().nullable(),
        FmSongTextColour: z.string().nullable(),
        FmArtistTextOpacity: z.number().nullable(),
        FmArtistTextColour: z.string().nullable(),
        XpDivBgopacity: z.number().nullable(),
        XpDivBgcolour: z.string().nullable(),
        XpTextOpacity: z.number().nullable(),
        XpTextColour: z.string().nullable(),
        XpText2Opacity: z.number().nullable(),
        XpText2Colour: z.string().nullable(),
        XpDoneServerColour1Opacity: z.number().nullable(),
        XpDoneServerColour1: z.string().nullable(),
        XpDoneServerColour2Opacity: z.number().nullable(),
        XpDoneServerColour2: z.string().nullable(),
        XpDoneServerColour3Opacity: z.number().nullable(),
        XpDoneServerColour3: z.string().nullable(),
        XpDoneGlobalColour1Opacity: z.number().nullable(),
        XpDoneGlobalColour1: z.string().nullable(),
        XpDoneGlobalColour2Opacity: z.number().nullable(),
        XpDoneGlobalColour2: z.string().nullable(),
        XpDoneGlobalColour3Opacity: z.number().nullable(),
        XpDoneGlobalColour3: z.string().nullable(),
        Description: z.string().nullable(),
        Timezone: z.string().nullable(),
        Birthday: z.string().nullable(),
        XpBarOpacity: z.number().nullable(),
        XpBarColour: z.string().nullable(),
        XpBar2Opacity: z.number().nullable(),
        XpBar2Colour: z.string().nullable(),
    })
    .strict();

const ProfilePatchSchema: z.ZodType<ProfilePatch> = ProfileDtoSchema.partial().merge(
    z.object({ UserId: z.string().regex(/^\d+$/, "UserId must be a string of digits") })
);

export const server = {
    saveProfile: defineAction({
        input: ProfilePatchSchema,
        handler: async (input, context) => {
            const user = context.locals.user as BentoBetterAuthUser | null;
            if (!user) {
                throw new ActionError({
                    code: "UNAUTHORIZED",
                    message: "You must be signed in to update your profile.",
                });
            }

            const authenticatedId =
                user.discordId || (user as unknown as { discordId?: string }).discordId;
            if (!authenticatedId) {
                throw new ActionError({
                    code: "UNAUTHORIZED",
                    message: "Missing authenticated user id.",
                });
            }

            if (input.UserId !== authenticatedId) {
                throw new ActionError({
                    code: "FORBIDDEN",
                    message: "You are not allowed to modify this profile.",
                });
            }

            await saveUserProfileServer(input);
            return null;
        },
    }),
};
