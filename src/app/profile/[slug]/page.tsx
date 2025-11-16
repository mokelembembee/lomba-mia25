import { Button } from "@/components/ui/button"
import { UmkmItem } from "@/types/business"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { Check, Clock, ShoppingBag, Star, Tag } from "iconest-react"
import { Coffee } from "lucide-react"

export const dynamic = "force-dynamic"

async function getData(slug: string) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/business/${slug}`, {
		cache: "no-store"
	})

	if (!res.ok) throw new Error("Gagal mengambil data")

	const json = await res.json()
	return json.data
}

const ProfilePage = async (props: { params: Promise<{ slug: string }> }) => {
    const params = await props.params;
    const slug = params.slug

    const data = await getData(slug)

    return (
		<main className="w-full h-auto p-4">
			<div className="flex flex-col">
				<h2>Sekitar</h2>
			</div>

			<div className="w-full min-h-screen border border-border rounded-3xl p-2">
				<div className="h-[65vh] w-full rounded-2xl overflow-hidden bg-black relative">
					<img
						src={data.imageUrl}
						className="w-4/5 h-full object-cover mask-r-from-50%"
					/>

					<div className="bg-black w-full h-full absolute top-0 left-0 mask-t-to-50% mask-t-from-0%" />
					<div className="absolute w-full h-full top-0 left-0 backdrop-blur-sm mask-t-to-50% mask-t-from-20%" />

					<div className="absolute z-20 bottom-10 left-10">
						<h1 className="text-3xl font-semibold text-white">{data.name}</h1>
						<span className="text-lg font-medium text-slate-100/70">
							{data.description}
						</span>
					</div>

					<div className="absolute right-4 top-4 bg-white flex flex-col w-1/4 p-1 h-[calc(100%-2rem)] rounded-xl z-10 overflow-y-auto">
					
						<div className="p-4 flex flex-col bg-primary rounded-2xl mb-1 relative">
							<div className = "absolute top-0 left-0 h-full w-fit mask-t-from-0% select-none">
								<img src = "/images/corner-bottom.png" className = "opacity-60 w-full h-full mask-b-from-50%"/>
							</div>

							<div className="flex items-center gap-3 mb-2 relative z-10">
								<Star className="size-6 fill-white text-white" />
								<h2 className="text-2xl font-semibold text-white">{data.rating}/5</h2>
								<span className="font-medium ml-auto text-white text-lg">Sempurna</span>
							</div>
							<span className="text-sm ml-auto text-slate-100 font-medium">
								Direview {data.reviewedBy}+ orang
							</span>
						</div>

						<div className="bg-slate-100 p-1 rounded-2xl">
							<div className="w-full bg-gradient-to-r from-secondary to-purple-600 text-primary-foreground text-sm px-4 py-1.5 rounded-lg flex items-center gap-1">
								<h4>Tempat</h4>
								<h4 className="font-semibold">#{data.tag.toUpperCase()}</h4>
							</div>

							<div className="grid grid-cols-2 w-full p-4 gap-3 text-sm">
								{data.facilities.map((f: any, i: number) => (
									<div key={i} className="flex gap-3 items-center">
										<div className = "bg-white rounded-md h-fit p-1 aspect-square flex">
											<Check className="text-gray-600 min-w-5 size-4 m-auto" strokeWidth={3}/>
										</div>
										<span className = "text-gray-800">{f.name}</span>
									</div>
								))}
							</div>
						</div>

						<div className="p-5 bg-slate-100 mt-1 rounded-2xl grid grid-cols-10 items-center gap-2">
							<span className="text-sm text-gray-500 w-full col-span-5">Jadwal Buka</span>
							<span className="text-sm text-gray-500 w-full col-span-5">Kisaran Harga</span>

							<Clock className="size-5 text-gray-600" />
							<span className="text-sm col-span-4 font-medium text-gray-800">{data.schedule}</span>

							<Tag className="size-5 text-gray-600" />
							<span className="text-sm mt-auto col-span-4 font-medium text-gray-800">
								{(() => {
									if (!data.items || data.items.length === 0) return 'Tidak ada harga'

									const prices = data.items.map((item: UmkmItem) => item.price)
									const minPrice = Math.min(...prices)
									const maxPrice = Math.max(...prices)

									if (minPrice === maxPrice) return `Rp${minPrice.toLocaleString()}`

									return `Rp${minPrice.toLocaleString().replaceAll(',', '.')} - Rp${maxPrice.toLocaleString().replaceAll(',', '.')}`
								})()}
							</span>
						</div>

						<div className="border-t mt-auto pt-1.5">
							<Button className="w-full bg-secondary hover:bg-secondary">Booking</Button>
							<Button className="mt-1 w-full">Simpan Tempat</Button>
						</div>
					</div>
				</div>

				{/* TAB PRODUK / REVIEW / TENTANG */}
				<div className="p-7 pt-6">
					<Tabs defaultValue="popular">
						<TabsList className="w-full border-b-2 border-border">
							<TabsTrigger value="popular" className="p-4 font-medium data-[state=active]:border-b-4 border-primary translate-y-0.5 data-[state=active]:text-gray-800 text-gray-600">
								Produk
							</TabsTrigger>
							<TabsTrigger value="review" className="p-4 font-medium data-[state=active]:border-b-4 border-primary translate-y-0.5 data-[state=active]:text-gray-800 text-gray-600">
								Review
							</TabsTrigger>
							<TabsTrigger value="about" className="p-4 font-medium data-[state=active]:border-b-4 border-primary translate-y-0.5 data-[state=active]:text-gray-800 text-gray-600">
								Tentang
							</TabsTrigger>
						</TabsList>

						<TabsContent value="popular" className="grid grid-cols-2 gap-2 p-4">
							{data.items.map((item: any, i: number) => (
								<div
									key={i}
									className="p-4 bg-slate-100 rounded-2xl flex gap-4 items-center"
								>
									<div className="size-24 rounded-xl overflow-hidden min-w-24">
										<img src={item.imageUrl} className="w-full h-full object-cover" />
									</div>

									<div className="flex flex-col">
										<h2 className="text-xl font-medium">{item.name}</h2>
										<span className="text-gray-600">{item.description}</span>
									</div>

									<div className="flex ml-auto flex-col gap-1 whitespace-nowrap">
										<span className="text-lg text-gray-800 font-medium">
											Rp. {item.price.toLocaleString()}
										</span>
										<Button>Pesan</Button>
									</div>
								</div>
							))}
						</TabsContent>

						<TabsContent value="review" className="p-4 text-gray-700">
							Belum ada review.
						</TabsContent>

						<TabsContent value="about">
							<div className="p-4 w-3/4">
								<span className="text-gray-700">{data.description}</span>
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</main>
	)
}

export default ProfilePage
