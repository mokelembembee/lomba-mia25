'use client'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import { Building7, Compass3, Home, UserCircle,  } from "iconest-react"
import Link from "next/link"

import { usePathname } from "next/navigation"

const DashboardNav = () => {
    const navigations = [{
        title: 'Beranda',
        url: '/dashboard',
        icon: Home
    }, {
        title: 'Jelajah',
        url: '/dashboard/explore',
        icon: Compass3
    }, {
        title: 'Teman',
        url: '/dashboard/social',
        icon: UserCircle
    }, {
        title: '',
        url: '/dashboard/my-business',
        icon: Building7
    }]

    const pathname = usePathname()
    
    return (
        <TooltipProvider delayDuration={100}>
            <nav className = "p-6 bg-gray-100 flex flex-col justify-center gap-6">
                {navigations.map((nav) => {
                    const isActive = (nav.url === '/dashboard')
                        ? pathname === nav.url
                        : pathname.startsWith(nav.url)

                    return (
                        <Tooltip key={nav.url}>
                            <TooltipTrigger asChild>
                                <Link href={nav.url}> 
                                    <button
                                        className={`rounded-full p-2.5 ${
                                            isActive
                                                ? 'bg-primary text-primary-foreground transition-all duration-150'
                                                : 'text-gray-600'
                                        }`}
                                    >
                                        <nav.icon
                                            className={`size-5.5 transition-all duration-100 ${
                                                isActive ? 'fill-white text-primary' : 'fill transparent'
                                            }`}
                                        />
                                    </button>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent 
                                side="right" 
                                align="center" 
                                sideOffset={32}
                                className="z-10 bg-white text-sm text-gray-800 px-4 py-1.5 rounded-full"
                            >
                                <p>{nav.title}</p>
                            </TooltipContent>
                        </Tooltip>
                    )
                })}
            </nav>  
        </TooltipProvider>
    )
}

export default DashboardNav