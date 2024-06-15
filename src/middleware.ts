import { authkitMiddleware } from "@workos-inc/authkit-nextjs";

export default authkitMiddleware({ debug: true});

// configure what paths are given the authorization information
export const config = { matcher: [
                                    "/", 
                                    "/deck/:path*"
                                ]
                    };