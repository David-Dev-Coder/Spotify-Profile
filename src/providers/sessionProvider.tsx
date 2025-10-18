'use client'

import { ReactNode } from "react";
import { SessionProvider } from 'next-auth/react'
import { Session } from "next-auth";

interface NextAuthSessionProviderProps {
	children: ReactNode,
    session: Session | null | undefined
}

export default function NextAuthSessionProvider({children, session}: NextAuthSessionProviderProps){
	return <SessionProvider session={session}>{children}</SessionProvider>
}