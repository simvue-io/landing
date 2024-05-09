import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Footer() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead className="bg-gray-50 dark:bg-neutral-900">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold tracking-wide text-gray-800 dark:text-neutral-200">
                          Status
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold tracking-wide text-gray-800 dark:text-neutral-200">
                          Alert name
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold tracking-wide text-gray-800 dark:text-neutral-200">
                          Metric
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <CheckCircleIcon
                          color="success"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            height: 20,
                            width: 20,
                            pt: 0.5,
                          }}
                        />
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-blue-600 dark:text-blue-500">
                          accuracy of input source term values
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-blue-600 dark:text-blue-500">
                          HRR
                        </span>
                      </span>
                    </td>
                  </tr>

                  <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <CheckCircleIcon
                          color="success"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            height: 20,
                            width: 20,
                            pt: 0.5,
                          }}
                        />
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-blue-600 dark:text-blue-500">
                          consistency of thermal radiation calculation
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-blue-600 dark:text-blue-500">
                          radiation_loss
                        </span>
                      </span>
                    </td>
                  </tr>

                  <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <CheckCircleIcon
                          color="success"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            height: 20,
                            width: 20,
                            pt: 0.5,
                          }}
                        />
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-blue-600 dark:text-blue-500">
                          max velocity error too high
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-blue-600 dark:text-blue-500">
                          max_velocity_error
                        </span>
                      </span>
                    </td>
                  </tr>

                  <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <CheckCircleIcon
                          color="success"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            height: 20,
                            width: 20,
                            pt: 0.5,
                          }}
                        />
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-blue-600 dark:text-blue-500">
                          fed too high
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-blue-600 dark:text-blue-500">
                          FED*
                        </span>
                      </span>
                    </td>
                  </tr>

                  <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <CheckCircleIcon
                          color="success"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            height: 20,
                            width: 20,
                            pt: 0.5,
                          }}
                        />
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-blue-600 dark:text-blue-500">
                          temperature too high
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-blue-600 dark:text-blue-500">
                          THCP*
                        </span>
                      </span>
                    </td>
                  </tr>

                  <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <ErrorIcon
                          color="error"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            height: 20,
                            width: 20,
                            pt: 0.5,
                          }}
                        />
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-blue-600 dark:text-blue-500">
                          visibility too low
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-blue-600 dark:text-blue-500">
                          VIS*
                        </span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
