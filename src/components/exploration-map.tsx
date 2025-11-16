//@ts-nocheck

'use client'

import React, { useRef, useEffect } from 'react'
import * as maptilersdk from '@maptiler/sdk'
import "@maptiler/sdk/dist/maptiler-sdk.css"
import { createRoot } from 'react-dom/client'
import { UmkmData, UmkmItem } from '@/types/business'

const PopupContent = ({ title, onClick }: { title: string; onClick: () => void }) => {
    return (
        <div className="p-2 text-center font-sans">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <button
                onClick={onClick}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Lihat Detail
            </button>
        </div>
    )
}

export default function ExplorationMap({
    businesses,
    selectedBusiness,
    onSelectBusiness
}: {
    businesses: UmkmData[]
    selectedBusiness: UmkmData | null
    onSelectBusiness: (b: UmkmData) => void
}) {

    const mapContainer = useRef<HTMLDivElement | null>(null)
    const map = useRef<maptilersdk.Map | null>(null)

    maptilersdk.config.apiKey = "xjjNKWp5P6nt8tKXmrtu"

    useEffect(() => {
        if (map.current) return

        map.current = new maptilersdk.Map({
            container: mapContainer.current!,
            style: maptilersdk.MapStyle.STREETS,
            center: [107.61, -6.91],
            zoom: 15,
            pitch: 20,
            bearing: 0
        })

        businesses.forEach((b) => {
            const popupContainer = document.createElement("div")
            const root = createRoot(popupContainer)

			console.log(b)

            root.render(
                <PopupContent
                    title={b.name}
                    onClick={() => onSelectBusiness(b)}
                />
            )

            const popup = new maptilersdk.Popup({ offset: 25 }).setDOMContent(popupContainer)

            new maptilersdk.Marker()
                .setLngLat([b.coordinates.lng, b.coordinates.lat])
                .setPopup(popup)
                .addTo(map.current!)
        })
    }, [businesses, onSelectBusiness])

    useEffect(() => {
        if (!map.current || !selectedBusiness) return

        map.current.flyTo({
            center: [
                selectedBusiness.coordinates.lng,
                selectedBusiness.coordinates.lat
            ],
            zoom: 17,
            duration: 1000
        })
    }, [selectedBusiness])

    return (
        <div className="relative w-full h-screen">
            <div ref={mapContainer} className="absolute w-full h-full" />
        </div>
    )
}
