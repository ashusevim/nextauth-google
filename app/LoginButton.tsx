"use client"
import Image from "next/image"
import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginButton() {
    const { data: session, status } = useSession()

    if (status === "loading") {
        return (
            <div className="flex items-center justify-center py-8">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" />
            </div>
        )
    }

    if (session?.user) {
        return (
            <div className="space-y-6">
                <div className="flex items-center gap-4 bg-gray-900/50 p-4 ring-1 ring-gray-700">
                    {session.user.image && (
                        <Image
                            src={session.user?.image}
                            alt={session.user?.name || "user"}
                            width={48}
                            height={48}
                            className="rounded-full ring-2 ring-indigo-500"
                        />
                    )}
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">
                            {session.user.name || "user"}
                        </p>
                        <p className="text-xs text-gray-400 truncate">
                            {session.user.email}
                        </p>
                    </div>
                    <div className="shrink-0">
                        <span className="inline-flex items-center rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-green-500/20">
                            ✓ Active
                        </span>
                    </div>
                </div>

                <button
                    onClick={() => signOut()}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-xl focus-visible:outline-offset-2 focus-visible:outline-red-600 active:scale-95"
                >
                    Sign out
                </button>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            <button
                onClick={() => signIn("google")}
                className="group relative flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-3.5 text-sm font-semibold text-white shadow-xl ring-1 ring-gray-700 transition-all hover:from-gray-800 hover:to-gray-700 hover:shadow-2xl hover:ring-gray-600 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-500 active:scale-95"
            >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span>Continue with Google</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <p className="text-center text-xs text-gray-500">
                You'll be redirected to Google to authenticate
            </p>
        </div>
    )
}