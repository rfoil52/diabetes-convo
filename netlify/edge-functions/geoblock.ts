import type { Context } from "https://edge.netlify.com";

const BLOCKED_COUNTRIES = [
    "CN", // China
    "VN", // Vietnam
    "IN", // India
    "PK", // Pakistan
    "RU", // Russia
];

export default async (request: Request, context: Context) => {
    const country = context.geo?.country?.code;
    if (country && BLOCKED_COUNTRIES.includes(country)) {
        return new Response("Access denied", { status: 403 });
    }
    return context.next();
};

export const config = { path: "/*" };