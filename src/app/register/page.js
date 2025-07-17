import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <div className="bg-primary h-screen flex items-center justify-center">
      <div className="flex w-1/2 min-h-min rounded-lg shadow-sm overflow-hidden border-2 border-secondary">
        <div className="w-1/2 flex flex-col items-center justify-center m-8">
          <form className="w-full px-8">
            <div className="mb-4">
              <label className="block text-md font-medium text-gray-700 mb-1">
                Nama Pengguna
              </label>
              <input
                type="text"
                id="username"
                placeholder="Cth. John Doe"
                className="block w-full rounded-md border border-gray-400 shadow-sm focus:border-secondary focus:ring-2 focus:ring-red-300 text-sm px-3 py-2"
              />
            </div>

            <div className="mb-6">
              <label className="block text-md font-medium text-gray-700 mb-1">
                Kata Sandi
              </label>
              <input
                type="password"
                id="username"
                placeholder="* * * * * * * *"
                className="block w-full rounded-md border border-gray-400 shadow-sm focus:border-secondary focus:ring-2 focus:ring-red-300 text-sm px-3 py-2"
              />
            </div>

            <div className="mb-6">
              <label className="block text-md font-medium text-gray-700 mb-1">
                Konfirmasi Kata Sandi
              </label>
              <input
                type="password"
                id="username"
                placeholder="* * * * * * * *"
                className="block w-full rounded-md border border-gray-400 shadow-sm focus:border-secondary focus:ring-2 focus:ring-red-300 text-sm px-3 py-2"
              />
            </div>

            <div className="text-center">
              <Button asChild>
                <Link
                  href="/login"
                  className="px-16 bg-secondary font-bold hover:bg-primary hover:text-secondary hover:border hover:border-secondary transition-all delay-100"
                >
                  Daftar
                </Link>
              </Button>
            </div>
          </form>
        </div>
        <div className="w-1/2 flex flex-col justify-between items-center p-8 bg-secondary text-white">
          <div className="text-center">
            <h1 className="text-2xl font-bold ">Halaman Daftar</h1>
            <p className="text-sm italic text-center mt-2">
              Untuk mendaftar dan terkoneksi, silahkan isi form disamping ini!
            </p>
          </div>
          <Image src="login.svg" alt="login-icon" height={200} width={200} />
          <div>
            <h2 className="text-sm italic text-center mb-2">
              Belum memiliki akun?
            </h2>
            <Button variant="outline" asChild>
              <Link
                href="/"
                className="bg-transparent hover:bg-primary transition-all px-16"
              >
                Masuk
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
