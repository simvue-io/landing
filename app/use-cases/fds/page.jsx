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
                Running efficient and cost-effective fire safety simulation
                campaigns
              </h2>
              <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
                Running complex fire safety simulations that model numerous
                parameters in real time is a challenge. Efficiently managing and
                preserving data lineage while running multiple scenarios on a
                scalable computing infrastructure from a single dashboard is
                beneficial.
              </p>
            </div>

            <div className="relative ms-4">
              <img
                className="w-full rounded-md"
                src="/landing/fds3.png"
                alt="Image Description"
              />
            </div>
          </div>
        </div>

        <div className="pt-6 pb-6">
          <div className="bg-gray-100 dark:bg-slate-800 pt-8 pb-8">
            <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-3xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                    The problem
                  </h2>

                  <p className="mt-3 text-gray-500 dark:text-neutral-500 pt-2">
                    Modelling various scenarios for fire safety or sprinkler
                    design necessitates running numerous simulations. Keeping
                    track of these simulations and comparing their results is
                    challenging. Gaining the ability to terminate ineffective
                    simulations would help reduce costs and optimise resources
                    for more efficient modelling campaigns.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                    The solution
                  </h2>

                  <p className="mt-3 text-gray-500 dark:text-neutral-500 pt-2">
                    Use <b>Simvue</b> to conduct fire safety simulation
                    campaigns, evaluating multiple scenarios while preserving
                    data lineage. Agnostic to legacy software or hardware
                    infrastructure, <b>Simvue</b> can manage your simulation
                    data effectively. Easily integrate your tagged data with
                    standard AI/ML frameworks.
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
                <div className="group flex flex-col h-full bg-gray-100 border border-gray-200 shadow-sm rounded-xl hover:shadow-lg transition rounded-xl dark:bg-slate-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                  <div className="p-4 md:p-6">
                    <span class="inline-flex justify-center items-center size-[46px] rounded-full bg-teal-300 text-blue-800 dark:bg-teal-900 dark:text-blue-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-lasso"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ffffff"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4.028 13.252c-.657 -.972 -1.028 -2.078 -1.028 -3.252c0 -3.866 4.03 -7 9 -7s9 3.134 9 7s-4.03 7 -9 7c-1.913 0 -3.686 -.464 -5.144 -1.255" />
                        <path d="M5 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M5 17c0 1.42 .316 2.805 1 4" />
                      </svg>
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white pt-4">
                      Metadata and tags
                    </h3>
                    <p className="mt-3 text-gray-500 dark:text-neutral-500">
                      Use tags and metadata to classify different simulation
                      campaigns and generate data that is suitable for peer view
                      or further
                    </p>
                  </div>
                </div>

                <div className="group flex flex-col h-full bg-gray-100 border border-gray-200 shadow-sm rounded-xl hover:shadow-lg transition rounded-xl dark:bg-slate-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                  <div className="p-4 md:p-6">
                    <span class="inline-flex justify-center items-center size-[46px] rounded-full bg-cyan-300 text-blue-800 dark:bg-cyan-900 dark:text-blue-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-database"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ffffff"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
                        <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
                        <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
                      </svg>
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white pt-4">
                      Store input and output files
                    </h3>
                    <p className="mt-3 text-gray-500 dark:text-neutral-500">
                      Keep track of input and numerous output files that are
                      generated from each simulation run. Easily access and
                      compare configurations and generate comparison plots for
                      different scenarios.
                    </p>
                  </div>
                </div>

                <div className="group flex flex-col h-full bg-gray-100 border border-gray-200 shadow-sm rounded-xl hover:shadow-lg transition rounded-xl dark:bg-slate-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                  <div className="p-4 md:p-6">
                    <span class="inline-flex justify-center items-center size-[46px] rounded-full bg-sky-300 text-blue-800 dark:bg-sky-900 dark:text-blue-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-filter-search"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ffffff"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M11.36 20.213l-2.36 .787v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414" />
                        <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M20.2 20.2l1.8 1.8" />
                      </svg>
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white pt-4">
                      AI/ML integration
                    </h3>
                    <p className="mt-3 text-gray-500 dark:text-neutral-500">
                      Use the tagged data to accelerate the development of
                      training data and machine learning models.
                    </p>
                  </div>
                </div>

                <div className="group flex flex-col h-full bg-gray-100 border border-gray-200 shadow-sm rounded-xl hover:shadow-lg transition rounded-xl dark:bg-slate-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                  <div className="p-4 md:p-6">
                    <span class="inline-flex justify-center items-center size-[46px] rounded-full bg-blue-300 text-blue-800 dark:bg-blue-900 dark:text-blue-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-share"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ffffff"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                      Events and logs
                    </h3>
                    <p className="mt-3 text-gray-500 dark:text-neutral-500">
                      Easily capture exceptions, errors and log messages when
                      running multiple simulations.
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
