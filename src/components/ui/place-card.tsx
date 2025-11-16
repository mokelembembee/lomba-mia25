import { ArrowRight } from "iconest-react"
import { Button } from "./button"
import { ProgressiveBlur } from "./progressive-blur"
import Link from "next/link"

interface PlaceCardProps {
    title: string
    description?: string
    image?: string
    useCTA?: boolean
    useBorder?: boolean
    size?: 'sm' | '1x1' | '1x2' | '2x1'
    href?: string
}

const PlaceCard = ({ title, href, description, image, useCTA, useBorder, size }: PlaceCardProps) => {
    return (
        <Link href={`/profile/${href}`} className = {`flex bg-white w-full rounded-xl items-center elative ${size == 'sm' ? `flex-row gap-2 p-2 ${useBorder && 'border border-slate-200'}` : `flex-col gap-1 ${useBorder && 'border border-slate-200 p-1'}`}`}>
            <div className = "relative w-full flex gap-2 items-center">
                <div className = {`relative bg-black overflow-hidden rounded-md rounded-lg ${size == 'sm' ? 'size-12 min-w-12' : 'h-48 w-full'}`}>
                    <img src = {image} className = "absolute top-1/2 -translate-y-1/2 mask-radial-from-70% w-full h-auto object-cover opacity-80"/>
                
                    <div className="w-full h-full absolute bottom-0 bg-black mask-t-from-0% rounded-xl"></div>
                </div>

                    <div className = {`flex flex-col z-10 mr-auto ${size == 'sm' ? 'relative' : 'absolute bottom-4 left-4'}`}>
                        <h3 className = {`${size == 'sm' ? 'text-sm text-gray-800 font-medium' : 'text-xl font-semibold text-white'}`}>{title}</h3>
                        {description && ( <span className = {`${size == 'sm' ? 'text-xs text-gray-600 font-medium' : 'text-sm text-slate-200/60'}`}>{description}</span> )}
                    </div>
                </div>

            {useCTA && (
                <>
                    {size == 'sm' ? (
                        <button className = "rounded-full size-8 min-w-8 my-auto bg-primary text-slate-100 mr-1 ml-2">
                            <ArrowRight className = "m-auto size-4.5"/>
                        </button>
                    ) : (
                        <Button className = "w-full">Lanjutkan</Button>
                    )}
                </>
            )}
        </Link>
    )
}

export default PlaceCard