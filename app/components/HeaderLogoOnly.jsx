export default function Header() {
  return (
      <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-slate-900 dark:border-gray-700" style={{ minHeight: 68 }}>
        <nav
          className="relative w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <a
              className="flex-none text-xl font-semibold dark:text-white"
              href="/"
              aria-label="Simvue logo"
            >
              <img
                className="color-invertible"
                src="/simvue-black-small.png"
                width="120"
                height="28"
                alt="Simvue Logo"
              />
            </a>
          </div>
        </nav>
      </header>
  );
}
