import { NextResponse } from 'next/server'
import umkm from '@/data/business.json'

export const dynamic = 'force-static'

export async function GET(_req: Request) {
    return NextResponse.json({
        success: true,
        data: umkm
    })
}
