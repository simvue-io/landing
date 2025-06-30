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

          <div className="max-w-[85rem] mx-auto pt-8 pb-4 px-4 sm:px-6 lg:px-8 md:pt-8 md:pb-8">
            <div className="relative overflow-hidden">
              <div className="mt-5 max-w-3xl text-center mx-auto">
                <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                  Unlocking{" "}
                  <span className="bg-clip-text bg-gradient-to-tl from-green-600 to-lime-600 text-transparent">
                    sustainability
                  </span>{" "}
                  for any simulation, data processing or AI/ML tasks
                </h1>
              </div>

              <div className="mt-5 max-w-5xl text-center mx-auto">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Innovative solutions for unlocking sustainability at an
                  environmental, social and economic scale by capturing and
                  tracking metadata, using real-time monitoring, alerting and
                  logging to organise and gain insights.
                </p>
              </div>

              <div className="mt-6 gap-3 flex justify-center">
                <button
                  type="button"
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full bg-gradient-to-tl from-green-600 to-lime-600 hover:from-lime-500 hover:to-green-500 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800 disabled:pointer-events-none"
                  onClick={() => router.push("mailto:info@simvue.io")}
                >
                  Contact us for more information
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-[85rem] mx-auto pt-2 pb-8 px-4 sm:px-6 lg:px-8 md:pt-8 md:pb-8">
            <div className="flex justify-center">
              <iframe
                className="max-w-xl aspect-video rounded-lg"
                src="https://www.youtube.com/embed/jzMa0dHghBs"
                width="100%"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </main>
        <footer className="ml-auto w-full py-4 px-4 sm:px-4 lg:px-4 mx-auto dark:bg-slate-900">
          <div className="flex justify-between">
            <div className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
              Simvue is being developed at the UK Atomic Energy Authority
            </div>
            <img
              className="color-invertible"
              src="/UKAEA.png"
              width="256"
              height="28"
              alt="UKAEA"
            />
          </div>
        </footer>
      </div>
    </div>
  );
}
