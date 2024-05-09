import React, { useEffect, useState } from "react";

import { SparkLineChart } from "@mui/x-charts/SparkLineChart";

function spark(data, points) {
  var newData = [];
  if (points == 0) {
    for (let i = 0; i < data.length; i++) {
      newData.push(data[i]);
    }
  } else {
    for (let i = 0; i < points; i++) {
      newData.push(data[i]);
    }
  }

  return (
    <SparkLineChart
      data={newData}
      height={34}
      width={150}
      area
      showTooltip
      showHighlight
      colors={["#ef9b20"]}
    />
  );
}

function status(name) {
  if (name == "Running") {
    return (
      <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-sky-100 text-sky-800 rounded-full dark:bg-sky-500/10 dark:text-sky-500">
        <svg
          className="size-2.5"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>
        Running
      </span>
    );
  } else if (name == "Failed") {
    return (
      <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-green-200">
        <svg
          className="size-2.5"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
        </svg>
        Failed
      </span>
    );
  }
  return (
    <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
      <svg
        className="size-2.5"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
      </svg>
      Completed
    </span>
  );
}

export default function Footer() {
  const [allData, setAllData] = useState([
    "Running",
    "Completed",
    "Running",
    "Running",
    "Running",
    "Running",
    "Running",
  ]);
  const [count, setCount] = useState(0);
  const [counts, setCounts] = useState([10, 0, 10, 12, 15, 13, 14]);

  // Update data regularly
  useEffect(() => {
    const timer = setInterval(() => {
      if (count == 2) {
        setAllData([
          "Running",
          "Completed",
          "Running",
          "Completed",
          "Running",
          "Running",
          "Running",
        ]);
      } else if (count == 5) {
        setAllData([
          "Running",
          "Completed",
          "Failed",
          "Completed",
          "Running",
          "Completed",
          "Running",
        ]);
      } else if (count == 9) {
        setAllData([
          "Running",
          "Completed",
          "Failed",
          "Completed",
          "Running",
          "Completed",
          "Running",
        ]);
      } else if (count == 12) {
        setAllData([
          "Running",
          "Completed",
          "Failed",
          "Completed",
          "Running",
          "Completed",
          "Completed",
        ]);
      } else if (count == 15) {
        setAllData([
          "Running",
          "Completed",
          "Failed",
          "Completed",
          "Completed",
          "Completed",
          "Completed",
        ]);
      } else if (count == 16) {
        setAllData([
          "Running",
          "Completed",
          "Failed",
          "Completed",
          "Completed",
          "Completed",
          "Completed",
        ]);
      }

      var newAllData = [];
      for (let i = 0; i < 7; i++) {
        if (allData[i] == "Running") {
          newAllData.push(counts[i] + 1);
        } else {
          newAllData.push(counts[i]);
        }
      }

      if (count == 18) {
        setCount(0);
        setCounts([10, 0, 10, 12, 15, 13, 14]);
      } else {
        setCount(count + 1);
        setCounts(newAllData);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count, counts]);

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
                          Name
                        </span>
                      </div>
                    </th>

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
                          Droplet diameter
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3  text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold tracking-wide text-gray-800 dark:text-neutral-200">
                          Particle velocity
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3  text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold tracking-wide text-gray-800 dark:text-neutral-200">
                          Heat release rate
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-blue-600 dark:text-blue-500">
                          shortest-bridge
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        {status(allData[0])}
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-gray-600 dark:text-neutral-400">
                          350
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-gray-600 dark:text-neutral-400">
                          16
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span>
                        {spark(
                          [
                            0.0, 0.0, 3.36101055, 15.666974, 24.28424366666667,
                            36.207769, 55.720214, 164.7559985,
                            1063.1372133333332, 2090.6468, 2853.95735,
                            2908.1389, 2925.858, 2132.1486, 2258.8241,
                            2739.0460000000003, 2415.8287, 995.15543,
                            0.072666145, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                            0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                            0.0, 0.0, 0.0, 0.0,
                          ],
                          counts[0],
                        )}
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap"></td>
                  </tr>

                  <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-blue-600 dark:text-blue-500">
                          legato-ladder
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        {status(allData[1])}
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-gray-600 dark:text-neutral-400">
                          350
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-gray-600 dark:text-neutral-400">
                          16
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="text-xs text-gray-600 dark:text-neutral-400">
                        {spark(
                          [
                            0.0, 0.0, 3.36101055, 15.666974, 24.28424366666667,
                            36.207769, 55.720214, 164.7559985,
                            1063.1372133333332, 2090.6468, 2853.95735,
                            2908.1389, 2925.858, 2132.1486, 2258.8241,
                            2739.0973000000004, 2229.5129333333334, 1234.54683,
                            243.86188, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                            0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                            0.0, 0.0, 0.0, 0.0,
                          ],
                          counts[1],
                        )}{" "}
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap"></td>
                  </tr>

                  <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-blue-600 dark:text-blue-500">
                          gourmet-rhombus
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        {status(allData[2])}
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-gray-600 dark:text-neutral-400">
                          350
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-gray-600 dark:text-neutral-400">
                          16
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="text-xs text-gray-600 dark:text-neutral-400">
                        {" "}
                        {spark(
                          [
                            0.0, 0.0, 3.36101055, 15.666974, 24.28424366666667,
                            36.207769, 55.720214, 164.7559985,
                            1063.1372133333332, 2090.6468, 2853.95735,
                            2917.4199, 2360.616433333333, 1844.6898500000002,
                            1762.3378, 1778.5886, 1234.4597999999999, 1494.7573,
                            467.12597500000004, 283.24345500000004, 0.0, 0.0,
                            0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                            0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                          ],
                          counts[2],
                        )}
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap"></td>
                  </tr>

                  <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-blue-600 dark:text-blue-500">
                          exact-photometry
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        {status(allData[3])}
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-gray-600 dark:text-neutral-400">
                          350
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-gray-600 dark:text-neutral-400">
                          16
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="text-xs text-gray-600 dark:text-neutral-400">
                        {" "}
                        {spark(
                          [
                            0.0, 0.0, 3.36101055, 15.666974, 24.28424366666667,
                            36.207769, 55.720214, 164.7559985,
                            1063.1372133333332, 2090.6468, 2853.95735,
                            2917.4671, 2344.8263666666667, 1917.96975,
                            1965.4135999999999, 1484.6258, 1416.0669333333335,
                            1656.2979, 1115.45525, 911.127205,
                            1181.0654233333332, 1401.18585, 1187.2669,
                            834.10749, 813.6964766666666, 959.0791650000001,
                            863.29874, 885.139055, 848.54385, 756.9149150000001,
                            7.9717195, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                            0.0, 0.0,
                          ],
                          counts[3],
                        )}
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap"></td>
                  </tr>

                  <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-blue-600 dark:text-blue-500">
                          bordeaux-cabinet
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        {status(allData[4])}
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-gray-600 dark:text-neutral-400">
                          350
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-gray-600 dark:text-neutral-400">
                          16
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="text-xs text-gray-600 dark:text-neutral-400">
                        {" "}
                        {spark(
                          [
                            0.0, 0.0, 3.36101055, 15.666974, 24.28424366666667,
                            36.207769, 55.720214, 164.7559985,
                            1063.1372133333332, 2090.6468, 2853.95735,
                            2932.0959000000003, 1923.6998333333331,
                            1208.5475999999999, 1174.6804499999998,
                            1348.7685999999999, 1382.6782666666668, 615.19264,
                            0.0076650388, 0.0030874187200000004, 0.000186512701,
                            2.585332e-5, 5.36156445e-6, 1.034022795e-6,
                            1.4255597333333333e-7, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                            0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                          ],
                          counts[4],
                        )}
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap"></td>
                  </tr>

                  <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-blue-600 dark:text-blue-500">
                          watery-window
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        {status(allData[5])}
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-gray-600 dark:text-neutral-400">
                          350
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-gray-600 dark:text-neutral-400">
                          16
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="text-xs text-gray-600 dark:text-neutral-400">
                        {" "}
                        {spark(
                          [
                            0.0, 0.0, 3.36101055, 15.666974, 24.28424366666667,
                            36.207769, 55.720214, 164.7559985,
                            1063.1372133333332, 2090.6468, 2853.95735,
                            2908.1389, 2925.858, 2132.1486, 2258.8241,
                            2741.4105, 2224.487266666667, 1240.58549, 1396.3406,
                            1202.4917, 1101.7391333333333, 2233.2129,
                            1049.55312, 1069.9042299999999, 804.0724799999999,
                            844.5637899999999, 348.814405, 203.04355999999999,
                            3.178797466666667, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                            0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                          ],
                          counts[5],
                        )}{" "}
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap"></td>
                  </tr>

                  <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-blue-600 dark:text-blue-500">
                          oscillating-hair
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        {status(allData[6])}
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-gray-600 dark:text-neutral-400">
                          350
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="block px-6 py-2">
                        <span className="text-xs text-gray-600 dark:text-neutral-400">
                          16
                        </span>
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <span className="text-xs text-gray-600 dark:text-neutral-400">
                        {" "}
                        {spark(
                          [
                            0.0, 0.0, 3.36101055, 15.666974, 24.28424366666667,
                            36.207769, 55.720214, 164.7559985,
                            1063.1372133333332, 2090.6468, 2853.95735,
                            2939.1164, 1974.653833333333, 1066.36087,
                            1148.43697, 1184.6770000000001, 1124.0234833333334,
                            814.895355, 39.222372935, 0.000790124105,
                            5.577238199999999e-5, 9.067211764999999e-7, 0.0,
                            0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                            0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                          ],
                          counts[6],
                        )}
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap"></td>
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
