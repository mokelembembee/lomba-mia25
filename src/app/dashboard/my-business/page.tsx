import { Button } from "@/components/ui/button"
import { Dialog, DialogHeader, DialogContent, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

const DashboardShopPage = () => {
    return (
        <main className = "w-full h-screen p-4">
            <div className = "p-4 p-12 rounded-3xl border border-border h-full flex flex-col items-center justify-center">
                <img src = "/images/sign_right.svg" className = "size-20 mb-4"/>
                
                <h1 className = "text-4xl font-medium text-gray-800">Mulai kelola bisnismu!</h1>
                <span className = "text-lg mt-2 text-gray-600">Gabung menjadi mitra Sekitar dan daftarkan UMKM milikmu!</span>

                <div className = "bg-slate-100 text-gray-800 p-4 rounded-2xl w-4/10 mt-4">
                    <span>Dengan menjadi mitra, Anda mendapatkan akses langsung ke ekosistem pemasaran kami dan peluang untuk menjangkau lebih banyak pelanggan potensial.</span>
                </div>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button className = "text-base px-12 mt-6">Mulai</Button>
                    </DialogTrigger>

                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="text-2xl text-gray-800">Daftar</DialogTitle>
                            <DialogDescription>Daftar sebagai mitra Sekitar.</DialogDescription>
                        </DialogHeader>

                        <div className = "grid grid-cols-2 items-center gap-4">
                            <label className = "font-semibold">Nama Usaha</label>
                            <Input placeholder="Nama Usaha Anda..."/>

                            <label className = "font-semibold">Jenis Usaha</label>
                            <Input placeholder="Jenis Usaha Anda..."/>

                            <label className = "font-semibold">Deskripsi Usaha</label>
                            <Input className = "col-span-2" placeholder="Nama Usaha Anda..."/>
                        </div>

                        <Button className = "ml-auto mt-4">Lanjut</Button>
                    </DialogContent>
                </Dialog>
            </div>
        </main>
    )
}

export default DashboardShopPage