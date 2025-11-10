import Image from "next/image";
import LoginButton from "./LoginButton"

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <Image
                        alt="NextAuth.js"
                        src="/nextauth.png"
                        width={120}
                        height={120}
                        className="rounded-full shadow-lg ring-4 ring-indigo-500/20"
                        priority
                    />
                </div>
                <p className="mt-2 text-center text-sm text-gray-400">
                    Sign in with your Google account to continue
                </p>
            </div>

            {/* Login Card */}
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-gray-800/50 backdrop-blur-sm px-8 py-10 shadow-2xl ring-1 ring-gray-700 sm:rounded-2xl border border-gray-700/50">
                    <LoginButton />

                    {/* Divider */}
                    <div className="relative mt-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-700" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-gray-800 px-2 text-gray-400">Secure authentication</span>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="mt-8 space-y-3">
                        <Feature icon="🔒" text="Secure OAuth 2.0 authentication" />
                        <Feature icon="⚡" text="Lightning-fast sign-in process" />
                        <Feature icon="🛡️" text="Your data stays protected" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function Feature({ icon, text }: { icon: string; text: string }) {
    return (
        <div className="flex items-center gap-3 text-sm text-gray-300">
            <span className="text-lg">{icon}</span>
            <span>{text}</span>
        </div>
    )
}