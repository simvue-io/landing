"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-white dark:bg-slate-900">
      <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-slate-900 dark:border-gray-700">
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
                src="simvue-black-small.png"
                width="120"
                height="28"
                alt="Simvue Logo"
              />
            </a>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              <a
                className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="/landing"
              >
                Home
              </a>
              <a
                className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="https://docs.simvue.io"
              >
                Documentation
              </a>
              <a
                className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="/landing/use-cases"
              >
                Use cases
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main id="content">
        <div className="max-w-[85rem] mx-auto pt-12 pb-12 px-4 sm:px-6 lg:px-8 md:pt-24 md:pb-24">
          <div className="relative overflow-hidden">
            <div className="mt-5 max-w-2xl text-center mx-auto">
              <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                Simulation{" "}
                <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                  tracking
                </span>{" "}
                and{" "}
                <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                  monitoring
                </span>
              </h1>
            </div>

            <div className="mt-5 max-w-3xl text-center mx-auto">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Organise and gain insights into your data or AI/ML training by
                capturing metadata and data combined with real-time monitoring,
                logging and alerting.
              </p>
            </div>

            <div className="mt-8 gap-3 flex justify-center">
              <a
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-blue-400 hover:from-blue-400 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
                href="https://docs.simvue.io/introduction/"
              >
                Get started
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-slate-800 pt-12 pb-6">
          <div className="max-w-4xl mx-auto text-center pt-4 pb-4 lg:pb-1">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl dark:text-white">
              Core capabilities
            </h2>
          <p className="mt-4 md:text-lg text-gray-600 dark:text-gray-400">
Simvue provides real-time tracking
and
monitoring
of any simulation or data processing task to enable faster
data discovery
and facilitate
green computing.
          </p>    
          </div>

          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
                <div className="space-y-6 lg:space-y-10">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 mt-1 size-8 icon icon-tabler icon-tabler-world"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#007aff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                      <path d="M3.6 9h16.8" />
                      <path d="M3.6 15h16.8" />
                      <path d="M11.5 3a17 17 0 0 0 0 18" />
                      <path d="M12.5 3a17 17 0 0 1 0 18" />
                    </svg>
                    <div className="ms-5 sm:ms-8">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Tracking
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        Track and monitor in real-time, all your data processing
                        tasks or simulations running anywhere in the world.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 mt-1 size-8 icon icon-tabler icon-tabler-binary-tree-2"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#00aaff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                      <path d="M7 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                      <path d="M21 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                      <path d="M14 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                      <path d="M12 8v8" />
                      <path d="M6.316 12.496l4.368 -4.992" />
                      <path d="M17.684 12.496l-4.366 -4.99" />
                    </svg>
                    <div className="ms-5 sm:ms-8">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Metadata
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        Collect arbitrary metadata and categorise your data
                        using tags for better data discovery.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 mt-1 size-8 icon icon-tabler icon-tabler-database"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#00c9ff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
                      <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
                      <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
                    </svg>
                    <div className="ms-5 sm:ms-8">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Artifacts
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        Store and easily retrieve software, input, intermediate
                        and output files.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 lg:space-y-10">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 mt-1 size-8 icon icon-tabler icon-tabler-activity-heartbeat"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#00e0ff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 12h4.5l1.5 -6l4 12l2 -9l1.5 3h4.5" />
                    </svg>
                    <div className="ms-5 sm:ms-8">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Metrics
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        Monitor performance by collecting and visualising
                        metrics so you are in control of your simulations or
                        data processing tasks.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00f2c8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 mt-1 size-8 feather feather-align-justify"
                    >
                      <line x1="21" y1="10" x2="3" y2="10"></line>
                      <line x1="21" y1="6" x2="3" y2="6"></line>
                      <line x1="21" y1="14" x2="3" y2="14"></line>
                      <line x1="21" y1="18" x2="3" y2="18"></line>
                    </svg>
                    <div className="ms-5 sm:ms-8">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Events and logs
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        Capture exceptions, errors and log messages to help
                        identity problems.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 mt-1 size-8 icon icon-tabler icon-tabler-bell-bolt"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#00ff90"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M13.5 17h-9.5a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v1" />
                      <path d="M9 17v1a3 3 0 0 0 4.368 2.67" />
                      <path d="M19 16l-2 3h4l-2 3" />
                    </svg>
                    <div className="ms-5 sm:ms-8">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Alerting
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        Automatically find out when simulations are not
                        performing well.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center pt-20 pb-6 lg:pb-16">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl dark:text-white">
            Why Simvue?
          </h2>
          <p className="mt-4 md:text-lg text-gray-600 dark:text-gray-400">
            Are you struggling to keep track of hundreds or thousands of
            simulations or data processing tasks?
          </p>
          <p className="mt-4 md:text-lg text-gray-600 dark:text-gray-400">
            Do you want to gain control and efficiently use your computing
            resources to minimise your carbon footprint?
          </p>
          <p className="mt-4 md:text-lg text-gray-600 dark:text-gray-400">
            Simvue lets you log and organise your work in a single place,
            whether you're running simulations using thousands of CPUs on a
            large HPC cluster, running hundreds of simulations as part of a
            parameter study, training a model on a public cloud, or doing all of
            this at the same time
          </p>
        </div>

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="relative p-6 md:p-16">
            <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
              <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
                  A platform for simulation tracking
                </h2>

                <nav
                  className="grid gap-4 mt-5 md:mt-10 shadow-none"
                  aria-label="Tabs"
                  role="tablist"
                >
                  <button
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 active"
                    id="tabs-with-card-item-1"
                    data-hs-tab="#tabs-with-card-1"
                    aria-controls="tabs-with-card-1"
                    role="tab"
                  >
                    <span className="flex">
                      <svg
                        className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                      <span className="grow ms-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                          Tracking
                        </span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                          Organise and track any application running anywhere.
                        </span>
                      </span>
                    </span>
                  </button>

                  <button
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700"
                    id="tabs-with-card-item-2"
                    data-hs-tab="#tabs-with-card-2"
                    aria-controls="tabs-with-card-2"
                    role="tab"
                  >
                    <span className="flex">
                      <svg
                        className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                      </svg>

                      <span className="grow ms-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                          Real-time monitoring
                        </span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                          Capture metadata, artifacts, metrics and events in
                          real-time.
                        </span>
                      </span>
                    </span>
                  </button>

                  <button
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700"
                    id="tabs-with-card-item-3"
                    data-hs-tab="#tabs-with-card-3"
                    aria-controls="tabs-with-card-3"
                    role="tab"
                  >
                    <span className="flex">
                      <svg
                        className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" />
                        <path d="M11.683 12.317l5.759 -5.759" />
                        <path d="M5.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                        <path d="M18.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                        <path d="M18.5 18.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                        <path d="M8.5 15.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" />
                      </svg>

                      <span className="grow ms-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                          Digital thread
                        </span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                          Understand the connections and dependencies between
                          different activities.
                        </span>
                      </span>
                    </span>
                  </button>
                </nav>
              </div>

              <div className="lg:col-span-6">
                <div className="relative">
                  <div>
                    <div
                      id="tabs-with-card-1"
                      role="tabpanel"
                      aria-labelledby="tabs-with-card-item-1"
                    >
                      <img
                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                        src="image2.png"
                        alt="Image Description"
                      />
                    </div>

                    <div
                      id="tabs-with-card-2"
                      className="hidden"
                      role="tabpanel"
                      aria-labelledby="tabs-with-card-item-2"
                    >
                      <img
                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                        src="image3.png"
                        alt="Image Description"
                      />
                    </div>

                    <div
                      id="tabs-with-card-3"
                      className="hidden"
                      role="tabpanel"
                      aria-labelledby="tabs-with-card-item-3"
                    >
                      <img
                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                        src="image4.png"
                        alt="Image Description"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 grid grid-cols-12 size-full">
              <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"></div>
            </div>
          </div>
        </div>

        <div className="pt-2 pb-2">
          <div className="w-full mx-auto pt-16 pb-16 text-center bg-gradient-to-br from-violet-700 to-sky-500">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl text-white">
              Are you ready to take control?
            </h2>
            <div className="mt-5 max-w-4xl text-center mx-auto md:text-lg text-white">
              Stop using notebooks to manually keep track of complex workflows.
              Use Simvue for real-time monitoring and tracking, to efficiently use
              your computing resources and minimise your carbon footprint.
            </div>
            <div className="mt-5 max-w-4xl text-center mx-auto md:text-lg text-white">
              <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                onClick={() => router.push("mailto:info@simvue.io")}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
