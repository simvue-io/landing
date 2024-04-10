export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm sticky top-0 bg-white">
        <nav
          className="mt-6 relative max-w-[85rem] w-full mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <a
              className="flex-none text-xl font-semibold dark:text-white"
              href="https://simvue.io"
              aria-label="Brand"
            >
              <img
                className="color-invertible"
                src="simvue-black-small.png"
                width="120"
                height="28"
                alt="Simvue Logo"
              />
            </a>
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
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
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
              <a
                className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="#"
              >
                Home
              </a>
              <a
                className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="#"
              >
                Documentation
              </a>
              <a
                className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="#"
              >
                Use cases
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main id="content">
        <div className="max-w-[85rem] mx-auto pt-12 pb-10 px-4 sm:px-6 lg:px-8 md:pt-24">
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
                Organise and gain insights your simulations, processing tasks
                and AI/ML training by capturing metadata and data combined with
                real-time monitoring, logging and alerting.
              </p>
            </div>

            <div className="mt-8 gap-3 flex justify-center">
              <a
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-blue-400 hover:from-blue-400 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
                href="https://docs.simvue.io"
              >
                Documentation
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center pt-20 pb-4 lg:pb-1">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl dark:text-white">
            Core capabilities
          </h2>
        </div>

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
              <div className="space-y-6 lg:space-y-10">
                <div className="flex">
                  <svg
                    className="w-16 h-16 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="54"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#007aff"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-globe"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Tracking
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      Track and monitor simulations running anywhere in the
                      world.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <svg
                    className="w-16 h-16 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="54"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00aaff"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-share-2"
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Metadata
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      Collect arbitrary metadata and categorise simulations
                      using tags.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <svg
                    className="w-16 h-16 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="54"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00c9ff"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-database"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Artifacts
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      Store software, input, intermediate and output files.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 lg:space-y-10">
                <div className="flex">
                  <svg
                    className="w-16 h-16 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="54"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00e0ff"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-activity"
                  >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Metrics
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      Monitor performance by collecting and visualising metrics.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <svg
                    className="w-16 h-16 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="54"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00f2c8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-align-justify"
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
                    className="w-16 h-16 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="54"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00ff90"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-bell"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Alerting
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      Automatically find out when simulations are not performing
                      well.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center pt-20 pb-6 lg:pb-16">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl dark:text-white">
            Overview
          </h2>
          <p className="mt-4 md:text-lg text-gray-600 dark:text-gray-400">
            Whether you're running simulations using thousands of CPUs on a
            large HPC cluster, running hundreds of simulations as part of a
            parameter study, training a model on a public cloud, or doing all of
            this at the same time, Simvue lets you log and organise your work in
            a single place.
          </p>
        </div>

        <div className="max-w-2xl mx-auto text-center pt-20 pb-6 lg:pb-16">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl dark:text-white">
            Ready to understand your workflows?
          </h2>
          <p className="mt-4 md:text-lg text-gray-600 dark:text-gray-400">
            Stop using notebooks to manually keep track of complex workflows.
            Log all steps in your data pipelines and workflows automatically.
          </p>

          <ul className="flex flex-wrap justify-center text-lg text-gray-400 -mx-2 -my-1 lg:pt-4">
            <li className="flex items-center mx-3 my-1">
              <span className="mt-0.5 mr-1 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                <svg
                  className="flex-shrink-0 size-3.5"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-sm sm:text-base text-gray-500">Compare</span>
            </li>
            <li className="flex items-center mx-3 my-1">
              <span className="mt-0.5 mr-1 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                <svg
                  className="flex-shrink-0 size-3.5"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-sm sm:text-base text-gray-500">
                Search, sort & filter
              </span>
            </li>
            <li className="flex items-center mx-3 my-1">
              <span className="mt-0.5 mr-1 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                <svg
                  className="flex-shrink-0 size-3.5"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-sm sm:text-base text-gray-500">Visualize</span>
            </li>
            <li className="flex items-center mx-3 my-1">
              <span className="mt-0.5 mr-1 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                <svg
                  className="flex-shrink-0 size-3.5"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-sm sm:text-base text-gray-500">
                Live monitoring
              </span>
            </li>
          </ul>
        </div>
      </main>

      <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
          <div className="sm:flex sm:justify-between sm:items-center">
            <div className="flex items-center gap-x-3">
              <div className="space-x-4 text-sm ms-4">
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  Terms
                </a>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  Privacy
                </a>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  Status
                </a>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="mt-3 sm:hidden">
                <a
                  className="flex-none text-xl font-semibold dark:text-white"
                  href="#"
                  aria-label="Brand"
                >
                  Brand
                </a>
                <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  © 2022 Preline.
                </p>
              </div>

              <div className="space-x-4">
                <a
                  className="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="https://twitter.com/simvue_io"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a
                  className="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="https://github.com/simvue-io"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
