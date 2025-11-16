'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import DashboardNav from '@/components/dashboard/nav'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname()

	return (
		<main className="w-full flex h-screen relative overflow-hidden">
			<DashboardNav />

			<div className="w-full h-full overflow-y-auto relative">
				{children}
			</div>
		</main>
	)
}

export default DashboardLayout
