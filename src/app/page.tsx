import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-600">
      <h1 className="text-4xl sm:text-6xl lg:text-9xl text-gray-400">
        <strong className="text-gray-100">eShuri</strong> web
      </h1>
      <div className="text-center">
        <Link href="./loginUser">
          <button className="btn btn-md mt-10 bg-gray-800 text-gray-50 rounded-full px-6 py-3">
            Responsive
          </button>
        </Link>
      </div>
    </main>
  );
}
