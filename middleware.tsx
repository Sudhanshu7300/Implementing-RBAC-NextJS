import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { protectedRoutes } from "./ProtectedRoutes";
// Define the middleware function
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  try {
    // Get the user's token
    const token = await getToken({ req: request });

    // Check if the route is protected and user has a valid token
    if (protectedRoutes[pathname] && !token) {
      return NextResponse.redirect(
        new URL(
          "/login?error=Please login first to access this route",
          request.url
        )
      );
    }

    if (token && pathname === "/login") {
      return NextResponse.redirect(new URL("/", request.url));
    }
    if (token && protectedRoutes[pathname]) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } catch (error) {
    console.error("Error in middleware:", error);
    return NextResponse.error();
  }
}
