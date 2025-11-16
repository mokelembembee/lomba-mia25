'use client'

import { Bookmark, Calendar, Coffee, Share2Icon, StarIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "iconest-react"
import { UmkmItem } from "@/types/business"

const Friends = () => (
    <div className="flex -space-x-[0.675rem]">
        <img className="rounded-full ring-2 ring-slate-100 aspect-square" src="https://coss.com/origin/avatar-80-03.jpg" width={36} />
        <img className="rounded-full ring-2 ring-slate-100 aspect-square" src="https://coss.com/origin/avatar-80-04.jpg" width={36} />
        <img className="rounded-full ring-2 ring-slate-100 aspect-square" src="https://coss.com/origin/avatar-80-05.jpg" width={36} />
        <div className="rounded-full ring-2 ring-slate-100 bg-slate-300 font-semibold h-full aspect-square flex items-center justify-center text-sm size-10">
            3+
        </div>
    </div>
)

export const Sidebar = ({ selected }: { selected: any }) => (
    <aside className = "flex w-md h-[calc(100%-2rem)] absolute top-4 right-4 gap-1">
        <div className = "relative">
            <div className = "flex flex-col p-1 bg-white h-fit gap-1 rounded-full mt-1 border border-slate-200/60">
                <button className = "rounded-full bg-slate-100 p-2.5">
                    <Bookmark className = "size-5"/>
                </button>

                <button className = "rounded-full bg-slate-100 p-2.5">
                    <Share2Icon className = "size-5"/>
                </button>
            </div>

            <div className = "p-1 h-18 w-3 absolute top-1/2 -translate-y-1/2 right-0 bg-white rounded-full">
                <button className = "w-1 h-16 rounded-full bg-gray-400">

                </button>
            </div>
        </div>

        <div className = " w-full h-full relative border border-slate-200/60 bg-white rounded-2xl z-10 p-1 overflow-y-auto">
            <div className = "bg-red-500 h-72 relative rounded-xl overflow-hidden">
                <div className = "h-full rounded-xl bg-black relative">
                    <img src = "https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2025/03/umkm-adalah.webp" className = "absolute top-1/2 -translate-y-1/2 mask-radial-from-70% w-full h-auto object-cover"/>
                    
                    <div className="w-full h-full absolute bottom-0 bg-black/50 mask-t-from-0% inset-0 backdrop-blur-md rounded-xl"></div>

                    <div className = "absolute bottom-0 left-0 p-5 z-10 flex flex-col text-slate-100">
                        <div className = "flex items-center gap-2 mb-1 text-gray-700 bg-white w-fit px-3 py-1.5 rounded-full mb-2">
                            <StarIcon className = "size-3.5"/>
                            <span className = "font-medium text-xs translate-y-[1px] font-medium">{selected.rating}</span>
                        
                            <Calendar className = "size-3.5 ml-2.5"/>
                            <span className = "font-medium text-xs translate-y-[1px] font-medium">Buka setiap hari</span>
                        </div>
                        
                        <h1 className = "text-2xl font-semibold">{selected.name}</h1>
                        <span className = "text-sm font-medium text-slate-200/60">{selected.description}</span>
                    </div>
                </div>
            </div>

            <div className = "flex items-center min-h-16 bg-slate-100 rounded-xl mt-1 px-5">
                <Friends/>

                <span className = "text-sm font-medium text-gray-700 ml-3">Temanmu juga pernah kesini!</span>
            </div>

            <div className = "relative overflow-hidden">
                <h2 className = "font-medium text-xl p-5">Kata Mereka</h2>

                <img src = "/images/char-pink.png" className = "absolute right-0 -scale-x-100 top-1/2 -translate-y-1/2 w-auto h-[150%]"/>
            </div>

            <div className="bg-slate-100 p-1 rounded-2xl">
                <div className="w-full bg-gradient-to-r from-secondary to-purple-600 text-primary-foreground text-sm px-4 py-1.5 rounded-lg flex items-center gap-1">
                    <h4>Tempat</h4>
                    <h4 className="font-semibold">#{selected.tag.toUpperCase()}</h4>
                </div>

                <div className="grid grid-cols-2 w-full p-4 gap-3 text-sm">
                    {selected.facilities.map((f: any, i: number) => (
                        <div key={i} className="flex gap-3 items-center">
                            <div className = "bg-white rounded-md h-fit p-1 aspect-square flex">
                                <Check className="text-gray-600 min-w-5 size-4 m-auto" strokeWidth={3}/>
                            </div>
                            <span className = "text-gray-800">{f.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className = "relative overflow-hidden">
                <h2 className = "font-medium text-xl p-5">Unggulan</h2>

                <img src = "/images/char-test.svg" className = "absolute right-0 -scale-x-100 top-1/2 -translate-y-1/2 w-auto h-[150%]"/>
            </div>

            <div className = "grid grid-cols-3 w-full gap-1">
                {selected.items.slice(0, 4).map((item: UmkmItem, x: number) => (
                    <div key={x} className = {`flex flex-col h-32 bg-black p-4 relative gap-2 rounded-xl ${x == 0 || x == 3 ? 'col-span-2' : 'col-span-1'} overflow-hidden`}>
                        <img src = {item.imageUrl} className = "absolute h-full w-full object-cover top-0 left-0 mask-b-to-100% mask-b-from-60%"/>
                        <div className = "w-full h-full absolute backdrop-blur-md top-0 left-0 mask-t-from-20% mask-t-to-100% rounded-2xl"></div>
                        
                        <span className = "absolute bottom-4 max-w-[calc(100%-1rem)] left-4 text-white font-medium text-base line-clamp-1 truncate">{item.name}</span>
                    </div>
                ))}
            </div>

            <div className = "w-full bg-white p-1 border-t mt-1 sticky bottom-0">
                <Link href = {`/profile/${selected.slug}`}>
                    <Button className = "w-full">Selengkapnya</Button>
                </Link>
            </div>
        </div>
    </aside>
)
