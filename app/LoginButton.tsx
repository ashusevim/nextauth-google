"use client"
import Image from "next/image"
import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginButton() {
    const { data: session, status } = useSession()

    if (status == "loading") {
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
                onClick={() => signIn("github")}
                className="group relative flex w-full items-center justify-center gap-3 rounded-lg bg-linear-to-r from-gray-900 to-gray-800 px-4 py-3.5 text-sm font-semibold text-white shadow-xl ring-1 ring-gray-700 transition-all hover:from-gray-800 hover:to-gray-700 hover:shadow-2xl hover:ring-gray-600 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-500 active:scale-95"
            >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>Continue with GitHub</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <p className="text-center text-xs text-gray-500">
                You'll be redirected to GitHub to authenticate
            </p>
        </div>
    )
}