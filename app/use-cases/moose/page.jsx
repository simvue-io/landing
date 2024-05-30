import Header from "../../components/Header";

export default function UseCase() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Header />

      <main id="content">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
            <div>
              <h2 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">
                Monitor your <span className="text-blue-600">MOOSE</span>{" "}
                applications in real time
              </h2>
              <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
                Keep track of key metrics within your simulation, visualising
                the in real time in the web UI. Get alerted if simulations will
                fail, saving time and money from early termination.
              </p>

              <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                <a
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  Get started
                  <svg
                    className="flex-shrink-0 size-4"
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
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="relative ms-4">
              <img
                className="w-full rounded-md"
                src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
                alt="Image Description"
              />
            </div>
          </div>
        </div>

        <div className="pt-12 pb-6">
          <div className="bg-gray-100 dark:bg-slate-800 pt-12 pb-6">
            <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-3xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                    The problem
                  </h2>

                  <p className="mt-3 text-gray-500 dark:text-neutral-500">
                    As MOOSE simulations progress, large volumes of unhelpful
                    information is printed to the console log. Results are
                    created in a range of different files but cannot be tracked
                    in real time. Simulations are often long running and can be
                    prone to fail, leading to wasted compute time. Often
                    numerous MOOSE simulations are performed to find optimal
                    values, but these are difficult to keep track of.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                    The solution
                  </h2>

                  <p className="mt-3 text-gray-500 dark:text-neutral-500">
                    Simvue can be used to track and store inputs and outputs
                    from MOOSE simulations, uploading tags and metadata to runs
                    to help with sorting and filtering. Data from the console
                    and results can be uploaded in real time, with useful
                    information immediately available in the UI. If results
                    breach certain conditions, users can be quickly alerted so
                    that they can abort the run - saving time and money.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 pb-6">
          <div className="max-w-4xl mx-auto text-center pt-4 pb-4 lg:pb-1">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl dark:text-white">
              Key benefits
            </h2>
          </div>

          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-12">
                <div className="group flex flex-col h-full bg-gray-100 border border-gray-200 shadow-sm rounded-xl dark:bg-slate-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                  <div className="p-4 md:p-6">
                    <span class="inline-flex justify-center items-center size-[46px] rounded-full bg-teal-300 text-blue-800 dark:bg-teal-900 dark:text-blue-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-lasso"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4.028 13.252c-.657 -.972 -1.028 -2.078 -1.028 -3.252c0 -3.866 4.03 -7 9 -7s9 3.134 9 7s-4.03 7 -9 7c-1.913 0 -3.686 -.464 -5.144 -1.255" />
                        <path d="M5 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M5 17c0 1.42 .316 2.805 1 4" />
                      </svg>
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white pt-4">
                      Dedicated MOOSE integration
                    </h3>
                    <p className="mt-3 text-gray-500 dark:text-neutral-500">
                      With our custom MOOSE integration, no coding experience is
                      required - just specify what you want to track your
                      simulation.
                    </p>
                  </div>
                </div>

                <div className="group flex flex-col h-full bg-gray-100 border border-gray-200 shadow-sm rounded-xl dark:bg-slate-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                  <div className="p-4 md:p-6">
                    <span class="inline-flex justify-center items-center size-[46px] rounded-full bg-cyan-300 text-blue-800 dark:bg-cyan-900 dark:text-blue-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-timeline"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 16l6 -7l5 5l5 -6" />
                        <path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      </svg>
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white pt-4">
                      Real time tracking and alerting
                    </h3>
                    <p className="mt-3 text-gray-500 dark:text-neutral-500">
                      Get closer to your simuilations with real time tracking
                      and alerting about key data points. Instantly view your
                      results in the web UI.
                    </p>
                  </div>
                </div>

                <div className="group flex flex-col h-full bg-gray-100 border border-gray-200 shadow-sm rounded-xl dark:bg-slate-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                  <div className="p-4 md:p-6">
                    <span class="inline-flex justify-center items-center size-[46px] rounded-full bg-sky-300 text-blue-800 dark:bg-sky-900 dark:text-blue-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-filter-search"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M11.36 20.213l-2.36 .787v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414" />
                        <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M20.2 20.2l1.8 1.8" />
                      </svg>
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white pt-4">
                      Searchable simulation history
                    </h3>
                    <p className="mt-3 text-gray-500 dark:text-neutral-500">
                      Upload inputs and outputs for your run for remote storage.
                      Specify tags and metadata to allow for searching and data
                      lineage.
                    </p>
                  </div>
                </div>

                <div className="group flex flex-col h-full bg-gray-100 border border-gray-200 shadow-sm rounded-xl dark:bg-slate-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                  <div className="p-4 md:p-6">
                    <span class="inline-flex justify-center items-center size-[46px] rounded-full bg-blue-300 text-blue-800 dark:bg-blue-900 dark:text-blue-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-share"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M8.7 10.7l6.6 -3.4" />
                        <path d="M8.7 13.3l6.6 3.4" />
                      </svg>
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white pt-4">
                      Share results with your team
                    </h3>
                    <p className="mt-3 text-gray-500 dark:text-neutral-500">
                      Easily share runs with your team through the web UI. Allow
                      users to retrieve results from the server to allow for
                      further data analysis locally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
