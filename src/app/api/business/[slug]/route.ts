import { NextResponse } from 'next/server'
import umkm from '@/data/business.json'

export const dynamic = 'force-static'

export async function GET(_req: Request, props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const { slug } = params

    const place = umkm.find((item) => item.slug === slug)

    if (!place) {
		return NextResponse.json(
			{
				success: false,
				message: `UMKM dengan slug "${slug}" tidak ditemukan`
			},
			{ status: 404 }
		)
	}

    return NextResponse.json({
		success: true,
		data: place
	})
}
