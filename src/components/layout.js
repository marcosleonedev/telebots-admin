'use client'

import Image from "next/image"
import logo from "@/public/favicon.ico"
import Link from "next/link"
import { Component, CreditCard, DollarSign, HandCoins, LayoutDashboard, Menu, ShoppingCart, User, Users, Wallet, Waypoints, X } from "lucide-react"
import { ToggleTheme } from "@/components/ui/toggle-theme"
import { useState } from "react"
import { twMerge } from "tailwind-merge"
import { useRouter } from "next/navigation"
import { Bot, Headset, KeyRound, LogOut, Receipt, UserCircle } from "lucide-react";
import { handleUserLogout } from "@/functions/handleUserLogout"

export function Layout({ page, children, titulo, className }) {

    const menu = [
        { titulo: 'Usuários', icone: <Users className="h-4 w-4" />, url: '/users' },
        { titulo: 'Meus bots', icone: <Bot className="h-4 w-4" />, url: '/bots' },
        { titulo: 'Meus fluxos', icone: <Waypoints className="h-4 w-4" />, url: '/flows' },
        { titulo: 'Minha conta', icone: <UserCircle className="h-4 w-4" />, url: '/account' },
        { titulo: 'Suporte', icone: <Headset className="h-4 w-4" />, url: 'https://api.whatsapp.com/send?phone=5561981434176' },
        { titulo: 'Sair', icone: <LogOut className="h-4 w-4" /> }
    ]

    const [displayMenu, setDisplayMenu] = useState('hidden')
    const { push } = useRouter()

    return (
        <div className="w-full h-full flex relative">

            {/* Fundo do menu lateral escondido */}
            <div className={`w-screen h-screen bg-background/80 fixed z-50 top-0 left-0 ${displayMenu} min-[768px]:hidden`} onClick={() => setDisplayMenu(displayMenu == 'hidden' ? '' : 'hidden')}></div>

            {/* Menu lateral escondido */}
            <main className={`min-w-[280px] max-[1024px]:min-w-[280px] max-w-[300px] fixed z-100 top-0 left-0 ${displayMenu} min-[768px]:hidden border-r min-h-screen h-full bg-background z-50 overflow-y-auto`}>

                {/* Cabeça do menu */}
                <header className="px-6 max-[1024px]:px-4 h-[60px] max-[1024px]:h-14 border-b flex items-center justify-between">
                    <div className="flex items-center justify-center">
                        <Image src={logo.src} width={34} height={34} alt="Logo" />
                        <h2 className="font-semibold text-base ml-2">TeleBots</h2>
                    </div>
                    <X className="cursor-pointer" onClick={() => setDisplayMenu(displayMenu == 'hidden' ? '' : 'hidden')} />
                </header>

                {/* Barra de navegação */}
                <nav className="px-4 mt-2 max-[1024px]:px-2">
                    {
                        menu.map((item) => (
                            item.titulo == 'Sair' ?
                                <div key={item.titulo} onClick={() => handleUserLogout(push)} className={`cursor-pointer flex items-center gap-3 rounded-lg ${item.titulo == page ? 'bg-primary/20 text-primary' : 'text-muted-foreground'} px-3 py-2 transition-all hover:text-primary`}>
                                    {item.icone}
                                    <p className="text-sm font-semibold">{item.titulo}</p>
                                </div>
                                :
                                <Link key={item.titulo} href={item.url} className={`flex items-center gap-3 rounded-lg ${item.titulo == page ? 'bg-primary/20 text-primary' : 'text-muted-foreground'} px-3 py-2 transition-all hover:text-primary`}>
                                    {item.icone}
                                    <p className="text-sm font-semibold">{item.titulo}</p>
                                </Link>
                        ))
                    }
                </nav>
            </main>

            {/* Menu lateral */}
            <main className="fixed left-0 top-0 min-w-[280px] max-[1024px]:min-w-[280px] max-[768px]:hidden border-r min-h-screen h-full bg-muted/20">

                {/* Cabeça do menu */}
                <header className="px-6 max-[1024px]:px-4 h-[60px] max-[1024px]:h-14 border-b flex items-center">
                    <Image src={logo.src} width={34} height={34} alt="Logo" />
                    <h2 className="font-semibold text-base ml-2">TeleBots</h2>
                </header>

                {/* Barra de navegação */}
                <nav className="px-4 mt-2 max-[1024px]:px-2">
                    {
                        menu.map((item) => (
                            item.titulo == 'Sair' ?
                                <div key={item.titulo} onClick={() => handleUserLogout(push)} className={`flex items-center cursor-pointer gap-3 rounded-lg ${item.titulo == page ? 'bg-primary/20 text-primary' : 'text-muted-foreground'} px-3 py-2 transition-all hover:text-primary`}>
                                    {item.icone}
                                    <p className="text-sm font-semibold">{item.titulo}</p>
                                </div>
                                :
                                <Link key={item.titulo} href={item.url} className={`flex items-center gap-3 rounded-lg ${item.titulo == page ? 'bg-primary/20 text-primary' : 'text-muted-foreground'} px-3 py-2 transition-all hover:text-primary`}>
                                    {item.icone}
                                    <p className="text-sm font-semibold">{item.titulo}</p>
                                </Link>
                        ))
                    }
                </nav>
            </main>

            {/* Seessão de conteudos */}
            <section className="bg-background top-0 pb-[56px] fixed ml-[280px] w-[calc(100%-280px)] max-[1024px]:w-[calc(100%-280px)] max-[1024px]:ml-[280px] max-[768px]:ml-0 max-[768px]:w-full h-full">

                {/* Cabeça da sessão */}
                <header className="px-6 max-[1024px]:p-4 h-[60px] max-[1024px]:h-14 border-b flex items-center justify-between bg-muted/20">
                    <div className="flex items-center">
                        <button className="border w-9 h-9 rounded-md flex items-center justify-center bg-background text-foreground min-[769px]:hidden mr-4" onClick={() => setDisplayMenu(displayMenu == 'hidden' ? '' : 'hidden')}>
                            <Menu className="w-5 h-5" />
                        </button>
                        <h2 className="font-medium text-base">{titulo}</h2>
                    </div>
                    <ToggleTheme className="bg-transparent" />
                </header>

                {/* Conteúdo */}
                <div className={twMerge('p-5 overflow-y-auto [&_>*]:@apply max-h-[calc(100svh-56px)]', className)}>
                    {children}
                </div>
            </section>
        </div>
    )
}