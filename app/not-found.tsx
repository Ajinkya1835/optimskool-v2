import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-6">

      <div className="max-w-2xl text-center">

        <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
          404 Error
        </span>

        <h1 className="mt-8 text-6xl font-black text-slate-900 lg:text-8xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
          Sorry, the page you are
          looking for doesn’t exist
          or may have been moved.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <Link
            href="/"
            className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700"
          >
            Go Home
          </Link>

          <Link
            href="/contact"
            className="rounded-2xl border border-slate-300 px-8 py-4 text-lg font-semibold text-slate-900 hover:bg-slate-100"
          >
            Contact Us
          </Link>

        </div>

      </div>

    </main>
  );
}