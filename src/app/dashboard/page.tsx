import { Button } from '@/components/ui/button'
import PlaceCard from '@/components/ui/place-card'
import { UmkmData } from '@/types/business'
import { ArrowRight, SearchLg, Trophy2, X } from 'iconest-react'
import { Flame, TicketPercent } from 'lucide-react'

async function getBusinesses() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/business`, {
		cache: 'no-store'
	})

	if (!res.ok) return []
	const json = await res.json()
	return json.data
}

const promoTitles = [
	'Diskon hingga 20k',
	'Promo Spesial Hari Ini',
	'Cashback 10%',
	'Gratis Ongkir',
	'Diskon Member 15%',
	'Hemat 25k',
	'Voucher Belanja'
]

const promoDescriptions = [
	'Semua transaksi, minimal 100k',
	'Berlaku untuk pembelian menu tertentu',
	'Khusus pengguna baru',
	'Promo terbatas, hanya hari ini',
	'Minimal transaksi 50k',
	'Berlaku setiap weekend',
	'Hanya untuk pembayaran non-tunai'
]

const getRandom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)]

const DashboardPage = async () => {
	const categories = ['Makanan & Minuman', 'Laundry', 'Servis', 'Kosan', 'Oleh-oleh', 'Fotocopy']
	const businesses: UmkmData[] = await getBusinesses()

	return (
		<main className="w-full h-screen flex flex-col gap-4">
			<div className="grid grid-cols-6 p-4 gap-2">
				<div className="bg-white border border-slate-200 col-span-4 p-12 rounded-3xl space-y-2">
					<div className="flex relative">
						<div className="space-y-2 mb-6">
							<h1 className="text-4xl font-medium text-gray-700">
								Hai, halo. <strong className="text-gray-800">Kitakura</strong>!
							</h1>
							<span className="text-lg text-gray-500">
								Daripada pusing mikirin dia, mending jalan-jalan gak sih?
							</span>
						</div>

						<div className="absolute top-8 right-8">
							<div className="border px-4 py-2 rounded-2xl absolute bg-white w-[300%] -top-2 -left-0 -translate-x-1/2 -translate-y-full text-sm text-gray-700">
								<span className="w-full">Makan seblak enak deh...</span>

								<div className="bg-white rounded-full size-4 border absolute left-1/2 -translate-x-1/2" />
							</div>

							<img src="/images/char-base.png" />
							<img className="absolute top-0 left-0" src="/images/char-eyes.png" />
							<img
								className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
								src="/images/char-hand.png"
							/>
						</div>
					</div>

					<div className="bg-white w-full relative rounded-full flex gap-2 items-center pl-6 outline outline-3 outline-slate-100 focus-within:outline-primary transition-all duration-200">
						<SearchLg className="size-5 text-gray-500" />
						<input
							type="text"
							placeholder="Cari tempat keren..."
							className="w-full pl-4 pr-6 py-2.5 rounded-full focus:outline-none"
						/>
						<X className="mr-6 text-gray-500 size-5" />
					</div>

					<div className="relative bg-slate-100 rounded-xl">
						<div className="flex overflow-x-auto mt-4 gap-2 p-2 scrollbar-hide">
							{categories.map((category, index) => (
								<div
									key={index}
									className="p-1 bg-primary rounded-full text-sm whitespace-nowrap flex gap-2 items-center"
								>
									<div className="size-8 bg-white rounded-full flex"></div>
									<span className="mr-3 text-slate-100">{category}</span>
								</div>
							))}
						</div>

						<div className="absolute w-auto h-full rounded-r-2xl bg-gradient-to-r from-slate-100/0 via-slate-100 to-slate-100 mask-image top-0 right-0 flex pl-6 pr-2">
							<button className="rounded-full bg-white size-8 my-auto">
								<ArrowRight className="m-auto size-4" />
							</button>
						</div>
					</div>

					<h3 className="text-lg text-gray-500 mt-6">Sebelumnya pernah kamu kunjungin</h3>

					<div className="grid grid-cols-2 gap-2">
						{businesses.slice(0, 2).map((business: UmkmData, index: number) => (
							<PlaceCard
								key={index}
								title={business.name}
								description={business.description}
								useCTA
                                href={business.slug}
								useBorder
								size={'sm'}
							/>
						))}
					</div>
				</div>

				<div className="col-span-2 border border-border h-full rounded-3xl p-12 bg-secondary space-y-4 relative overflow-hidden">
					<img
						src="/images/corner-small.png"
						className="absolute top-0 right-0 opacity-60 select-none mask-t-from-50% w-auto h-full"
					/>

					<h3 className="text-2xl font-semibold text-slate-100 relative flex gap-4 items-center">
						<Trophy2 className="size-7" />
						UMKM Unggulan
					</h3>

					<div className="flex flex-col gap-1 relative">
                        {businesses.slice(0, 4).map((business: UmkmData, index: number) => (
                            <PlaceCard
                                key={index}
                                title={business.name}
                                description={business.description}
                                image={business.imageUrl}
                                size={'sm'}
                                href={business.slug}
                                useCTA
                            />
                        ))}
					</div>
				</div>
			</div>

			<div className="p-16 pt-8 flex flex-col gap-8">
				<div className="flex items-center">
					<Flame
						strokeWidth={2.5}
						className="size-12 p-2.5 bg-orange-400 rounded-full text-white mr-6"
					/>

					<div className="flex flex-col">
						<h2 className="font-medium text-3xl text-gray-800">Tempat Hits Abis</h2>
						<span className="text-lg text-gray-500">Tempat-tempat keren buat kamu!</span>
					</div>
				</div>

				<div className="grid grid-cols-4 gap-2 relative">
					{businesses.slice(2, 12).map((business: UmkmData, index: number) => (
						<PlaceCard
							key={index}
							title={business.name}
							description={business.description}
							image={business.imageUrl}
                                href={business.slug}

						/>
					))}
				</div>
			</div>

			<div className="col-span-6 bg-[#0cca97] relative p-16 flex flex-col gap-8">
				<div className="absolute w-full h-full mask-b-from-60% top-0 left-0 flex justify-between opacity-60 overflow-hidden">
					<img
						src="/images/corner-bottom.png"
						className="h-full w-auto bottom-0 left-0 mask-t-from-50% select-none"
					/>
					<img
						src="/images/corner.png"
						className="h-full w-auto top-0 right-0 mask-t-from-50% select-none"
					/>
				</div>

				<div className="flex w-full items-center relative z-10">
					<TicketPercent
						strokeWidth={2.5}
						className="size-12 p-2.5 bg-white rounded-full text-secondary mr-6"
					/>

					<div className="flex flex-col">
						<h2 className="font-medium text-3xl text-white">Diskon & Promo</h2>
						<span className="text-lg text-slate-100/80">Spesial buat malam Minggumu, loh!</span>
					</div>

					<div className="rounded-full px-4 py-2 border bg-white w-fit ml-auto flex items-center gap-1.5 text-gray-600">
						<span className="text-gray-600 text-sm mr-1">Berakhir dalam</span>

						<div className="bg-accent px-2 py-1 w-fit rounded-md text-slate-100 font-semibold">20</div>
						:
						<div className="bg-accent px-2 py-1 w-fit rounded-md text-slate-100 font-semibold">10</div>
						:
						<div className="bg-accent text-slate-100 px-2 py-1 w-fit rounded-md font-semibold">19</div>
					</div>
				</div>

				<div className="grid grid-cols-4 gap-2 relative">
                    {businesses.slice(4, 8).map((business: UmkmData, index: number) => {
                        const title = getRandom(promoTitles)
                        const description = getRandom(promoDescriptions)

                        return (
                            <div className="flex flex-col gap-2" key={index}>
                                <PlaceCard
                                    title={business.name}
                                    description={business.description}
                                href={business.slug}

                                />

                                <div
                                    className="relative bg-white h-24 flex px-7 rounded-xl overflow-hidden items-center gap-2"
                                    style={{
                                        WebkitMaskImage: `
                                            radial-gradient(circle 12px at -1% 50%, transparent 98%, black 100%),
                                            radial-gradient(circle 12px at 101% 50%, transparent 98%, black 100%)
                                        `,
                                        WebkitMaskRepeat: 'no-repeat',
                                        WebkitMaskSize: '100% 100%',
                                        WebkitMaskComposite: 'destination-in',
                                        maskComposite: 'intersect'
                                    }}
                                >
                                    <div className="flex flex-col">
                                        <span className="font-medium text-gray-800 text-sm">{title}</span>
                                        <span className="text-xs text-gray-600">{description}</span>
                                    </div>

                                    <Button className="h-fit ml-auto" variant={'secondary'}>
                                        Klaim
                                    </Button>
                                </div>
                            </div>
                        )
                    })}
				</div>
			</div>
		</main>
	)
}

export default DashboardPage
