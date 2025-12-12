import Link from "next/link";

function GoogleIcon() {
  return (
    <span className="mr-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white">
      <span className="text-[10px] font-semibold text-gray-800">G</span>
    </span>
  );
}

function AppleIcon() {
  return (
    <span className="mr-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-black">
      <span className="text-[10px] font-semibold text-white" aria-hidden="true">
        
      </span>
    </span>
  );
}

export const metadata = {
  title: "Sign In - Simple",
  description: "Page description",
};

export default function SignIn() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Logge dich in deinen Account ein</h1>
      </div>
      <form className="space-y-6">
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            E-Mail-Adresse
          </label>
          <input
            id="email"
            className="form-input w-full py-2"
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            Passwort
          </label>
          <input
            id="password"
            className="form-input w-full py-2"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>
        <button
          type="submit"
          className="btn w-full bg-gray-900 text-gray-100 shadow-sm hover:bg-black"
        >
          Einloggen
        </button>
      </form>
      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="h-px flex-1 bg-gray-200" />
          <span>Oder einloggen mit</span>
          <span className="h-px flex-1 bg-gray-200" />
        </div>
        <div className="flex flex-col items-center gap-3">
          <button
            type="button"
            className="btn flex w-full max-w-xs items-center justify-center bg-white text-gray-900 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50"
          >
            <GoogleIcon />
            <span className="text-sm">Mit Google einloggen</span>
          </button>
          <button
            type="button"
            className="btn flex w-full max-w-xs items-center justify-center bg-white text-gray-900 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50"
          >
            <AppleIcon />
            <span className="text-sm">Mit Apple einloggen</span>
          </button>
        </div>
      </div>
      <div className="mt-6 text-sm text-gray-600">
        <span>Oder hast du dein Passwort vergessen? </span>
        <Link
          href="/reset-password"
          className="font-medium text-gray-900 underline hover:no-underline"
        >
          Passwort zurücksetzen
        </Link>
      </div>
    </>
  );
}
