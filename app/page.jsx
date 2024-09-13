"use client";

import { useRouter } from "next/navigation";

import HeaderLogoOnly from "./components/HeaderLogoOnly";

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-white dark:bg-slate-900">
      <div className="flex flex-col h-screen justify-between">
        <main id="content" className="mb-auto">
          <HeaderLogoOnly />

          <div className="max-w-[85rem] mx-auto pt-32 pb-4 px-4 sm:px-6 lg:px-8 md:pt-16 md:pb-8">
            <div className="relative overflow-hidden">
              <div className="mt-5 max-w-2xl text-center mx-auto">
                <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                  Unlocking {" "}
                  <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                    sustainability
                  </span>{" "}
                  for any {" "}
                  <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                    simulation, data or AI/ML task
                  </span>
                </h1>
              </div>

              <div className="mt-5 max-w-3xl text-center mx-auto">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                Innovative solutions for unlocking sustainability at an environmental, social and economic scale using real-time monitoring,   
                alerting, logging and capturing metadata and data, to organise and gain insights.
                </p>
              </div>

              <div className="mt-8 gap-3 flex justify-center">
                <button
                  type="button"
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full bg-gradient-to-tl from-blue-600 to-blue-400 hover:from-blue-400 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800 disabled:pointer-events-none"
                  onClick={() => router.push("mailto:info@simvue.io")}
                >
                  Contact us for more information
                </button>
              </div>
            </div>
          </div>
        </main>
        <footer className="ml-auto w-full py-6 px-4 sm:px-6 lg:px-8 mx-auto dark:bg-slate-900">
          <div className="flex justify-end">
            <img src="/UKAEA.png" width="213" height="24" alt="UKAEA" />
          </div>
        </footer>
      </div>
    </div>
  );
}
