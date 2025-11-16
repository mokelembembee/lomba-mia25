import ClientBridge from "@/components/dashboard/client-bridge"
import ExplorationMap from "@/components/exploration-map"
import { Button } from "@/components/ui/button"
import { SearchLg, X } from "iconest-react"
import { Bookmark, Calendar, Coffee, Share2Icon, StarIcon } from "lucide-react"
import Link from "next/link"

async function getBusinesses() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/business`, {
        cache: "no-store"
    })

    if (!res.ok) return []
    const json = await res.json()
    return json.data
}

const DashboardExplorePage = async () => {
    const businesses = await getBusinesses()

    return (
        <ClientBridge businesses={businesses} />
    )
}

export default DashboardExplorePage
