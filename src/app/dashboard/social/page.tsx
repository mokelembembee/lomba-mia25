import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Calendar, MessageChatCircle, MessageCircle } from "iconest-react"
import { Flame } from "lucide-react"

const DashboardSocialPage = () => {
    return (
        <main className="w-full min-h-screen p-4 flex gap-2">
            
            {/* LEFT CONTENT */}
            <div className="p-2 border rounded-3xl h-max w-full">
                <div className="bg-secondary p-12 rounded-2xl relative overflow-hidden">
                    <img 
                        src="/images/corner-small.png" 
                        className="absolute top-0 right-0 opacity-60 select-none mask-t-from-50% w-auto h-[200%]"
                    />

                    <div className="flex relative items-center gap-8">
                        <div className="flex flex-col whitespace-nowrap">
                            <h2 className="text-3xl font-medium text-white">Reviewer Sepuh</h2>
                            <span className="text-lg text-white/80 font-medium">
                                Lorem ipsum dolor sit amet
                            </span>
                        </div>

                        <div className="w-full h-full p-1.5 bg-white rounded-full relative">
                            <div className="bg-primary w-2/3 px-2 font-medium text-right rounded-full text-xs text-white">
                                100/150 EXP
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-2 relative mt-6 rounded-2xl flex">
                        <div className="flex gap-2 w-full">

                                <Dialog>
                                    <DialogTrigger className = "bg-slate-100 p-4 rounded-xl w-full flex items-center gap-4 text-gray-800">
                                        <img src="/images/icon-mission.svg" className="size-12" />

                                        <div className="flex flex-col text-left">
                                            <span className="font-medium">Misi Minggu Ini</span>
                                            <span className="text-sm text-gray-500">Selesaikan dan dapatkan hadiah.</span>
                                        </div>
                                    </DialogTrigger>

                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle className="text-2xl text-gray-800">Misi Minggu Ini</DialogTitle>
                                            <DialogDescription>Selesaikan misi dan dapatkan hadiah!</DialogDescription>
                                        </DialogHeader>

                                        <div className = "flex flex-col gap-1">
                                            <div className = "p-4 bg-slate-100 rounded-2xl">
                                                <h3 className = "font-medium text-lg">Jajan Edan</h3>
                                                <span className = "text-sm text-gray-600 flex gap-2 items-center">Lakukan transaksi pada UMKM dengan kategori <div className = "bg-primary w-fit text-white font-medium px-3 py-0.5 rounded-full">Makanan</div></span>
                                                <span className = "text-sm text-gray-600 flex gap-1 items-center">sebanyak 5x dengan minimal transaksi Rp. 5.000.</span>
                                            
                                                <div className = "mt-4 border-t pt-4 flex items-center">
                                                    <span className = "text-sm font-medium text-gray-700">Hadiah: Voucher Diskon Rp. 10.000</span>
                                                
                                                    <span className = "ml-auto text-sm text-gray-800 bg-accent px-3 text-white font-medium py-1 rounded-full">Progres: 3/5</span>
                                                </div>
                                            </div>

                                            <div className = "p-4 bg-slate-100 rounded-2xl">
                                                <h3 className = "font-medium text-lg">Nongkrong Asik</h3>
                                                <span className = "text-sm text-gray-600 flex gap-2 items-center">Pesan tempat dengan temanmu sebanyak 2x.</span>
                                            
                                                <div className = "mt-4 border-t pt-4 flex items-center">
                                                    <span className = "text-sm font-medium text-gray-700">Hadiah: Voucher Diskon Rp. 25.000</span>
                                                
                                                    <span className = "ml-auto text-sm text-gray-800 bg-accent px-3 text-white font-medium py-1 rounded-full">Progres: 1/2</span>
                                                </div>
                                            </div>

                                            <div className = "p-4 bg-slate-100 rounded-2xl">
                                                <h3 className = "font-medium text-lg">Hypebeast Asli</h3>
                                                <span className = "text-sm text-gray-600 flex gap-2 items-center">Review 10 tempat dengan tag <div className = "bg-secondary w-fit text-white font-medium px-3 py-0.5 rounded-full">#HYPEBEAST</div>.</span>

                                                <div className = "mt-4 border-t pt-4 flex items-center">
                                                    <span className = "text-sm font-medium text-gray-700 flex gap-2 items-center">Hadiah: Badge<div className = "bg-secondary w-fit text-white font-medium px-3 py-0.5 rounded-full">Reviewer Handal</div></span>
                                                
                                                    <span className = "ml-auto text-sm text-gray-800 bg-accent px-3 text-white font-medium py-1 rounded-full">Progres: 3/5</span>
                                                </div>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>

                            <div className="bg-slate-100 p-4 rounded-xl w-full flex items-center gap-4 text-gray-800">
                                <img src="/images/icon-achievement.svg" className="size-12" />

                                <button className="flex flex-col text-left">
                                    <span className="font-medium">Pencapaian</span>
                                    <span className="text-sm text-gray-500">Lihat prestasi kerenmu.</span>
                                </button>
                            </div>

                            <div className="bg-slate-100 p-4 rounded-xl w-full flex items-center gap-4 text-gray-800">
                                <img src="/images/icon-gather.svg" className="size-12" />

                                <button className="flex flex-col text-left">
                                    <span className="font-medium">Ngumpul</span>
                                    <span className="text-sm text-gray-500">Rencanakan nongkrong dengan temanmu.</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "p-10 flex flex-col gap-8">
                    <div className="flex items-center">
                        <div 
                            className="size-12 p-2.5 bg-orange-400 rounded-full text-white mr-6 flex items-center justify-center"
                        >
                            <Calendar strokeWidth={2.5} className = "size-6.5"/>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="font-medium text-3xl text-gray-800">Acaramu</h2>
                            <span className="text-lg text-gray-500">Spesial buat malam Minggumu, loh!</span>
                        </div>
                    </div>

                    <div className = "p-8 bg-slate-100 rounded-2xl flex flex-col gap-2 items-center">
                        <img src = "/images/no-event.svg" className = "size-20"/>

                        <span className = "text-lg text-gray-500 w-1/2 text-center mb-2">Kamu belum punya acara sama temanmu. Ayo buat sekarang!</span>

                                <Dialog>
                                    <DialogTrigger asChild>
                                         <Button className = "!text-base w-fit px-8">Buat</Button>
                                    </DialogTrigger>

                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle className="text-2xl text-gray-800">Buat Acara</DialogTitle>
                                            <DialogDescription>Ajak temanmu untuk gabung ke acara, pesan tempat dan makanan!</DialogDescription>
                                        </DialogHeader>

                                        <div className = "grid grid-cols-2 items-center gap-4">
                                            <label className = "font-semibold text-gray-700">Nama Acara</label>
                                            <Input placeholder="Nongkrong Asik" className = "placeholder:text-gray-400"/>

                                            <label className = "font-semibold text-gray-700">Tanggal</label>
                                            <Button>Pilih Tanggal</Button>

                                            <label className = "font-semibold text-gray-700">Tempat</label>
                                            <Button>Pilih Tempat</Button>

                                            <label className = "font-semibold text-gray-700">Teman</label>

                                            <div className = "p-1 bg-slate-100 rounded-2xl w-full col-span-2 flex flex-col gap-1">
                                                <div className="flex gap-2 items-center bg-white p-2 rounded-2xl">
                                                    <img src = "/images/users/1.png" className = "size-12 border border-border rounded-full"/>

                                                    <div className="flex flex-col text-sm font-medium">
                                                        <span className="text-gray-800">Asep Surasep</span>
                                                        <span className="text-xs text-gray-600">Sedang Aktif</span>
                                                    </div>

                                                    <Button variant={'secondary'} className = "ml-auto">Undang</Button>
                                                </div>

                                                <div className="flex gap-2 items-center bg-white p-2 rounded-2xl">
                                                    <img src = "/images/users/2.png" className = "size-12 border border-border rounded-full"/>

                                                    <div className="flex flex-col text-sm font-medium">
                                                        <span className="text-gray-800">John Slebew</span>
                                                        <span className="text-xs text-gray-600">Sedang Aktif</span>
                                                    </div>

                                                    <Button variant={'secondary'} className = "ml-auto">Undang</Button>
                                                </div>


                                                <div className="flex gap-2 items-center bg-white p-2 rounded-2xl">
                                                    <img src = "/images/users/3.png" className = "size-12 border border-border rounded-full"/>

                                                    <div className="flex flex-col text-sm font-medium">
                                                        <span className="text-gray-800">Salman Nursalman</span>
                                                        <span className="text-xs text-gray-600">Aktif 2 jam lalu</span>
                                                    </div>

                                                    <Button variant={'secondary'} className = "ml-auto">Undang</Button>
                                                </div>
                                            </div>
                                        </div>

                                        <Button className = "mt-4 ml-auto">Simpan</Button>
                                    </DialogContent>
                                </Dialog>
                    </div>
                </div>

                <div className="flex flex-col p-10 pt-0">
                    <div className="flex items-center">
                        <Flame 
                            strokeWidth={2.5} 
                            className="size-12 p-2.5 bg-orange-400 rounded-full text-white mr-6"
                        />

                        <div className="flex flex-col">
                            <h2 className="font-medium text-3xl text-gray-800">Perjalanan Temanmu</h2>
                            <span className="text-lg text-gray-500">Spesial buat malam Minggumu, loh!</span>
                        </div>
                    </div>

                    <div className = "">

                    </div>
                </div>

                <div className="grid grid-cols-3 auto-rows-[80px] gap-2 px-10 pb-8">
                    <div className="bg-red-500 rounded-lg row-span-3" />
                    <div className="bg-red-500 rounded-lg row-span-2" />
                    <div className="bg-red-500 rounded-lg row-span-4" />
                    <div className="bg-red-500 rounded-lg row-span-3" />
                    <div className="bg-red-500 rounded-lg row-span-2" />
                    <div className="bg-red-500 rounded-lg row-span-4" />
                    <div className="bg-red-500 rounded-lg row-span-2" />
                    <div className="bg-red-500 rounded-lg row-span-4" />
                </div>

            </div>
            
            {/* SIDEBAR */}
            <div className="flex flex-col sticky top-4 p-8 bg-primary w-4/10 rounded-2xl gap-6 relative h-[calc(100vh-2rem)] overflow-hidden">
                
                <div className="absolute bottom-0 left-0 opacity-60 mask-t-from-50% pointer-events-none">
                    <img 
                        src="/images/corner-bottom.png" 
                        className="w-full mask-b-from-60% select-none"
                    />
                </div>

                <h1 className="text-2xl font-medium text-white">Temanmu</h1>

                <div className="space-y-1">
                    <div className="flex gap-2 items-center bg-white p-2 rounded-2xl">
                        <img src = "/images/users/1.png" className = "size-12 border border-border rounded-full"/>

                        <div className="flex flex-col text-sm font-medium">
                            <span className="text-gray-800">Asep Surasep</span>
                            <span className="text-xs text-gray-600">Sedang Aktif</span>
                        </div>

                        <MessageCircle className="ml-auto size-5 mr-2 text-gray-500" />
                    </div>

                    <div className="flex gap-2 items-center bg-white p-2 rounded-2xl">
                        <img src = "/images/users/2.png" className = "size-12 border border-border rounded-full"/>

                        <div className="flex flex-col text-sm font-medium">
                            <span className="text-gray-800">John Slebew</span>
                            <span className="text-xs text-gray-600">Sedang Aktif</span>
                        </div>

                        <MessageCircle className="ml-auto size-5 mr-2 text-gray-500" />
                    </div>

                    <div className="flex gap-2 items-center bg-white p-2 rounded-2xl">
                        <img src = "/images/users/3.png" className = "size-12 border border-border rounded-full"/>

                        <div className="flex flex-col text-sm font-medium">
                            <span className="text-gray-800">Salman Nursalman</span>
                            <span className="text-xs text-gray-600">Aktif 2 jam lalu</span>
                        </div>

                        <MessageCircle className="ml-auto size-5 mr-2 text-gray-500" />
                    </div>
                </div>

                <h1 className="text-2xl font-medium text-white">Mungkin Kamu Kenal</h1>

                <div className = "space-y-1 relative">
                    <div className="flex gap-2 items-center bg-white p-2 rounded-2xl">
                        <img src = "/images/users/1.png" className = "size-12 border border-border rounded-full"/>

                        <div className="flex flex-col text-sm font-medium">
                            <span className="text-gray-800">Waluh Sigma</span>
                            <span className="text-xs text-gray-600">Kontak Anda</span>
                        </div>

                        <MessageCircle className="ml-auto size-5 mr-2 text-gray-500" />
                    </div>

                    <div className="flex gap-2 items-center bg-white p-2 rounded-2xl">
                        <img src = "/images/users/2.png" className = "size-12 border border-border rounded-full"/>

                        <div className="flex flex-col text-sm font-medium">
                            <span className="text-gray-800">Gajah Terbang</span>
                            <span className="text-xs text-gray-600">Kontak Anda</span>
                        </div>

                        <MessageCircle className="ml-auto size-5 mr-2 text-gray-500" />
                    </div>

                    <div className="flex gap-2 items-center bg-white p-2 rounded-2xl">
                        <img src = "/images/users/3.png" className = "size-12 border border-border rounded-full"/>

                        <div className="flex flex-col text-sm font-medium">
                            <span className="text-gray-800">Sepatu Kiri</span>
                            <span className="text-xs text-gray-600">Kontak Anda</span>
                        </div>

                        <MessageCircle className="ml-auto size-5 mr-2 text-gray-500" />
                    </div>

                   <div className="flex gap-2 items-center bg-white p-2 rounded-2xl">
                        <img src = "/images/users/4.png" className = "size-12 border border-border rounded-full"/>

                        <div className="flex flex-col text-sm font-medium">
                            <span className="text-gray-800">Bintang Kejora</span>
                            <span className="text-xs text-gray-600">Kontak Anda</span>
                        </div>

                        <MessageCircle className="ml-auto size-5 mr-2 text-gray-500" />
                    </div>
                </div>
            </div>

        </main>
    )
}

export default DashboardSocialPage
