import closeX from "../../icons/closeX.svg?raw";
import hamburger from "../../icons/hamburger.svg?raw";
import warning from "../../icons/warning.svg?raw";
import moon from "../../icons/moon.svg?raw";
import sun from "../../icons/sun.svg?raw";
import sunMoon from "../../icons/sunMoon.svg?raw";
import user from "../../icons/user.svg?raw";
import login from "../../icons/login.svg?raw";
import logout from "../../icons/logout.svg?raw";
import settings from "../../icons/settings.svg?raw";
import system from "../../icons/monitor.svg?raw";
import edit from "../../icons/edit.svg?raw";
import users from "../../icons/users.svg?raw";

export const icons = {
    closeX,
    hamburger,
    warning,
    moon,
    sun,
    sunMoon,
    user,
    login,
    logout,
    settings,
    system,
    edit,
    users,
} as const;

export type IconName = keyof typeof icons;
