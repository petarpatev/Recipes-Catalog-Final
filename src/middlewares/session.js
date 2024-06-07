import { getUser } from "../utils.js";

export const addSession = (ctx, next) => {

    ctx.user = getUser();

    next();
}