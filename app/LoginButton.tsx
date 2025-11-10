"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginButton(){
    const { data: session } = useSession()
    
    if(session && session.user){
        return (
            <>
                <button onClick={() => signOut()}>Logout</button>
            </>
        )
    }

    return (
        <>
            <h1>Not signed in</h1>
            <button onClick={() => signIn('google')} className="border-2 p-2">Sign in with google</button>
        </>
    )
}