import { handleAuth } from "@workos-inc/authkit-nextjs";

// export the GET method of this route and redirect the user to the home page when they are authenticated/logged in
export const GET = handleAuth({
    returnPathname: "/",
});