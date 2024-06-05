"use client";

import { useRouter } from "next/navigation";
import RunsTable from "./components/RunsTable";
import AlertsTable from "./components/AlertsTable";
import Header from "./components/Header";

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-white dark:bg-slate-900">
      <Header />

      <main id="content">

        <div className="max-w-[85rem] mx-auto pt-4 pb-4 px-4 sm:px-6 lg:px-8 md:pt-8 md:pb-8">
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
                Organise and gain insights into simulations, data processing or AI/ML training by
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

        <div className="max-w-[85rem] mx-auto pt-2 pb-12 px-4 sm:px-6 lg:px-8 md:pt-8 md:pb-20">
<div className="aspect-video" >
    <iframe
        className="h-full w-full rounded-lg"
        src="https://www.youtube.com/embed/FJHL0SXinyY"
        width="100%"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
     </iframe>
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
                      className="flex-shrink-0 mt-1 size-10 icon icon-tabler icon-tabler-world"
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
                      className="flex-shrink-0 mt-1 size-10 icon icon-tabler icon-tabler-binary-tree-2"
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
                      className="flex-shrink-0 mt-1 size-10 icon icon-tabler icon-tabler-database"
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
                      className="flex-shrink-0 mt-1 size-10 icon icon-tabler icon-tabler-activity-heartbeat"
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
                      className="flex-shrink-0 mt-1 size-10 feather feather-align-justify"
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
                      className="flex-shrink-0 mt-1 size-10 icon icon-tabler icon-tabler-bell-bolt"
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

        <div className="max-w-4xl mx-auto text-center pt-20 pb-1 lg:pb-1">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl dark:text-white">
            Why Simvue?
          </h2>
          <p className="mt-4 md:text-lg text-gray-600 dark:text-gray-400">
            Are you struggling to keep track of hundreds or thousands of
            simulations or data processing tasks?
            Do you want to gain control and efficiently use your computing
            resources to minimise your carbon footprint?
          </p>
          <p className="mt-4 md:text-lg text-gray-600 dark:text-gray-400">
            Simvue lets you log and organise your work in a single place.
</p>
</div>

<div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 lg:py-8 mx-auto">
  <div className="md:grid md:grid-cols-3 md:items-center md:gap-12 xl:gap-12">

<div class="aspect-w-16 aspect-h-9">
  <iframe src="https://www.youtube.com/embed/FJHL0SXinyY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
</div>


<div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 lg:py-8 mx-auto">
  <div className="md:grid md:grid-cols-3 md:items-center md:gap-12 xl:gap-12">

    <div className="mt-5 sm:mt-5 lg:mt-0">
      <div className="space-y-6 sm:space-y-8">
        <div className="space-y-2 md:space-y-4">
          <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
            Tracking & monitoring
          </h2>
          <p className="text-gray-500 dark:text-neutral-500">
            Organise and track any number of any application running anywhere.
          </p>
        </div>

        <ul className="space-y-2 sm:space-y-4">
          <li className="flex space-x-3">
            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
              <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>

            <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
              Live monitoring
            </span>
          </li>

          <li className="flex space-x-3">
            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
              <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>

            <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
              Search, sort and filter
            </span>
          </li>

          <li className="flex space-x-3">
            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
              <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>

           <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
             Compare
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div className="col-span-2">
      <RunsTable />
    </div>

  </div>
</div>



<div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 lg:py-8 mx-auto">
  <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-12">

    <div>
      <AlertsTable />
    </div>

    <div className="mt-5 sm:mt-5 lg:mt-0">
      <div className="space-y-6 sm:space-y-8">
        <div className="space-y-2 md:space-y-4">
          <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
            Alerting
          </h2>
          <p className="text-gray-500 dark:text-neutral-500">
           Capture metadata, artifacts, metrics and events in real-time. Visualise in the dashboard and define alert criteria for detecting performance problems.
          </p>
        </div>

        <ul className="space-y-2 sm:space-y-4">
          <li className="flex space-x-3">
            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
              <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>

            <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
              Alerts from metrics and logs
            </span>
          </li>

          <li className="flex space-x-3">
            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
              <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>

            <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
              Notifications
            </span>
          </li>

          <li className="flex space-x-3">
            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
              <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>

           <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
             Automatically abort runs
            </span>
          </li>
        </ul>
      </div>
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
