// @ts-nocheck

'use client'

import { useState } from "react"
import ExplorationMap from "@/components/exploration-map"
import { Sidebar } from "@/components/dashboard/sidebar"

export default function ClientBridge({ businesses }: { businesses: any[] }) {
    const [selected, setSelected] = useState(null)

    return (
        <div className="relative">
            <ExplorationMap
                businesses={businesses}
                selectedBusiness={selected}
                onSelectBusiness={(b) => setSelected(b)}
            />

            <div className="absolute w-1/3 top-4 left-4 bg-white rounded-full flex gap-2 items-center pl-6 outline outline-3 outline-slate-100 focus-within:outline-primary transition-all duration-200">
                <input type="text" placeholder="Cari tempat keren..." className="w-full pl-4 pr-6 py-2.5 rounded-full focus:outline-none" />
            </div>

            {selected && (
                <Sidebar selected={selected} />
            )}
        </div>
    )
}
