export { default } from "next-auth/middleware";

export const config = { matcher: [ "/transfer", "/transactions", "/p2ptransfer", "/dashboard"] };