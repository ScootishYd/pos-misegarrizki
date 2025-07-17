import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="bg-primary h-screen flex items-center justify-center">
      <div className="flex w-1/2 min-h-min rounded-lg shadow-sm overflow-hidden border-2 border-secondary">
        <div className="w-1/2 flex flex-col justify-between items-center p-8 bg-secondary text-white">
          <div className="text-center">
            <h1 className="text-2xl font-bold ">Halaman Masuk</h1>
            <p className="text-sm italic text-center mt-2">
              Jika anda telah memiliki akun, anda dapat masuk melalui form
              disamping ini!
            </p>
          </div>
          <Image src="login.svg" alt="login-icon" height={200} width={200} />
          <div>
            <h2 className="text-sm italic text-center mb-2">
              Belum memiliki akun?
            </h2>
            <Button variant="outline" asChild>
              <Link
                href="/register"
                className="bg-transparent hover:bg-primary transition-all px-16"
              >
                Daftar
              </Link>
            </Button>
          </div>
        </div>
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
                Password
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
                  href="/cashier"
                  className="px-16 bg-secondary font-bold hover:bg-primary hover:text-secondary hover:border hover:border-secondary transition-all delay-100"
                >
                  Masuk
                </Link>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
