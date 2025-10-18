import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import type { ProfilePatch } from "../library/types/interfaces";
import { saveUserProfile as saveUserProfileServer } from "../library/server/bentoApi";

export const server = {
  saveProfile: defineAction({
    input: z.custom<ProfilePatch>((val): val is ProfilePatch => {
      if (!val || typeof val !== "object") return false;
      const uid = (val as any).UserId;
      return typeof uid === "string" && /^\d+$/.test(uid);
    }, { message: "Invalid profile payload: missing or invalid UserId" }),
    handler: async (input) => {
      await saveUserProfileServer(input);
      return null;
    },
  }),
};
