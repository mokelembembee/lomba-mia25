export type UmkmItem = {
	name: string
	description: string
	price: number
	imageUrl: string
}

export type UmkmFacility = {
	name: string
	icon: string
}

export type UmkmData = {
	name: string
	slug: string
	category: string
	description: string
	tag: string[]
	imageUrl: string
	coordinates: [number, number]
	items: UmkmItem[]
	schedule: string
	facilities: UmkmFacility[]
	rating: number
	reviewedBy: number
}
