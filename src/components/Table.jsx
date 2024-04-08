import React from "react";

const people = [
  {
    name: "/Defect ArrivalRate",
    views: "872,337 (15.82%)",
    pageview: "574,332 (15,33%)",
    time: "00:05:43",
    ext: "802,873 (16.73%)",
    exist: "25.96%",
    value: "$1,093 (5.11%)",
  },
  {
    name: "/Fixed Rate",
    views: "803,792 (14.39%)",
    pageview: "456,792 (13.39%)",
    time: "00:05:24",
    ext: "793,982 (15.64%)",
    exist: "76.13%",
    value: "$6,792 (36.16%)",
  },
  {
    name: "/Cycle Time",
    views: "740,702 (13.46%)",
    pageview: "405,860 (13.25%)",
    time: "00:04:36",
    ext: "684,873 (14.33%)",
    exist: "41.54%",
    value: "$702 (3.47%)",
  },
  {
    name: "/Lead time",
    views: "676,659 (10.29%)",
    pageview: "340,765 (11.70%)",
    time: "00:04:12",
    ext: "638,982 (13.02%)",
    exist: "46.42%",
    value: "$2,659 (11.64%)",
  },
  {
    name: "/New Feature",
    views: "508,837 (7.74%)",
    pageview: "317,543 (10.66%)",
    time: "00:04:11",
    ext: "555,982 (10.44%)",
    exist: "27.40%",
    value: "$4,508 (23.43%)",
  },
  {
    name: "/Ready Feature",
    views: "495,938 (7.38%)",
    pageview: "310,554 (10.58%)",
    time: "00:02:56",
    ext: "297,303 (6.07%)",
    exist: "28.89%",
    value: "$495 (7.38%)",
  },
];

export function Table() {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 gap-3 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <select className="text-black " name="" id="">
              <option
                className="text-black rounded-lg border border-slate-300"
                value=""
              >
                PAGEVIEWS
              </option>
            </select>
          </div>
          <div>
            <div className="flex flex-1 ">
              <div className="border border-slate-500 px-3 rounded">Today</div>
              <div className="border border-slate-500 px-3 ">Yesterday</div>
              <div className="border border-slate-500 px-3 ">Week</div>
              <div className="border border-slate-500 px-3 bg-[#A2D2FC] ">Month</div>
              <div className="border border-slate-500 px-3 ">Quarter</div>
              <div className="border border-slate-500 px-3 rounded">Year</div>

              <div className="ml-4">
                <select
                  className="text-slate-500 border border-slate-500 rounded px-1"
                  name="Select Period"
                  id=""
                >
                  <option value="" className="text-slate-300">
                    Select Period
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span className="text-black font-bold">Page</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-bold text-black "
                      >
                        PageViews <br />
                        <span>356,928</span>
                        <br />
                        <svg
                          width="72"
                          height="20"
                          viewBox="0 0 72 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.45802 15.6295L9.32644 12.9616L13.1949 16.2965L17.0633 10.9607L20.9317 13.6286H24.8001L28.6685 7.62587L32.537 5.62496L36.4054 7.62587L40.2738 0.956177L44.1422 7.62587L48.0107 6.29193L51.8791 2.95708L56.5212 5.62496L59.6159 4.62451L63.4843 4.95799L67.3528 0.956177L71.9949 8.29284V19.6313H0.815918V14.2956L5.45802 15.6295Z"
                            fill="url(#paint0_linear_0_1)"
                          />
                          <path
                            d="M1.58984 14.2956L5.45826 15.6295L9.32668 12.9616L13.1951 15.6295L17.0635 10.9607L20.9319 13.6286H24.8004L28.6688 7.62587L32.5372 5.62496L36.4056 7.62587L40.274 0.956177L44.1425 7.62587L48.0109 6.29193L51.8793 2.95708L55.7477 5.62496L59.6162 4.29102L63.4846 4.95799L67.353 0.956177L71.2214 7.62587"
                            stroke="#539BBB"
                            stroke-width="1.16053"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_0_1"
                              x1="-14.013"
                              y1="-6.82513"
                              x2="-14.013"
                              y2="19.6313"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#4592FF" />
                              <stop
                                offset="1"
                                stop-color="white"
                                stop-opacity="0.01"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-bold text-black"
                      >
                        Unique pageViews <br />
                        <span>275,588</span> <br />
                        <svg
                          width="72"
                          height="20"
                          viewBox="0 0 72 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.24757 5.57176L9.11599 9.86704L12.9844 11.6545L16.8528 13.2819L20.7213 8.98664L24.5897 18.2709L28.4581 14.5892L32.3265 7.94617L36.1949 3.7576L40.0634 7.14581L43.9318 4.53129L47.8002 9.38682L51.6686 10.6941L56.3107 6.3988L59.4055 1.52993L63.2739 1.86341L67.1423 8.69318L71.7844 0.556152V19.6315H0.605469V11.9747L5.24757 5.57176Z"
                            fill="url(#paint0_linear_0_1)"
                          />
                          <path
                            d="M1.37939 11.201L5.24781 5.57173L9.11624 9.86701L12.9847 11.7612L16.8531 13.2819L20.7215 8.98661L24.5899 18.2708L28.4583 14.5892L32.3268 7.94614L36.1952 3.75758L40.0636 7.14578L43.932 4.53126L47.6564 9.32962L51.6689 10.6941L55.5373 7.17246L59.4057 1.9701L63.2741 2.63707L67.1425 8.69315L71.011 1.43652"
                            stroke="#539BBB"
                            stroke-width="1.16053"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_0_1"
                              x1="-14.2235"
                              y1="-7.3919"
                              x2="-14.2235"
                              y2="19.6315"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#4592FF" />
                              <stop
                                offset="1"
                                stop-color="white"
                                stop-opacity="0.01"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-bold text-black"
                      >
                        Avg time on page <br />
                        <span>00:03:52</span> <br />
                        <svg
                          width="72"
                          height="20"
                          viewBox="0 0 72 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.16847 3.25055L9.03689 5.22478L12.9053 7.78594L16.7737 5.54492L20.6422 3.5707L24.5106 2.79701L28.379 3.75745L32.2474 8.7197L36.1158 1.43639L39.9843 0.956177L43.8527 3.75745L47.7211 10.1604L51.5895 6.8255L55.4579 2.53022L59.3264 7.71924L63.1948 10.3738L67.0632 8.69302L71.7053 4.42442V19.6313H0.526367V8.87977L5.16847 3.25055Z"
                            fill="url(#paint0_linear_0_1)"
                          />
                          <path
                            d="M1.30029 8.87977L5.16871 3.25055L9.03713 5.22478L12.9056 7.89266L16.774 5.54492L20.6424 3.5707L24.5108 2.79701L28.3792 3.75745L32.2477 8.7197L36.1161 1.43639L39.9845 0.956177L43.8529 3.75745L47.7213 10.1604L51.5898 6.82551L55.4582 2.53022L59.3266 8.15944L63.195 10.3738L67.0634 8.69302L70.9319 4.53113"
                            stroke="#539BBB"
                            stroke-width="1.16053"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_0_1"
                              x1="-14.3026"
                              y1="-6.82513"
                              x2="-14.3026"
                              y2="19.6313"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#4592FF" />
                              <stop
                                offset="1"
                                stop-color="white"
                                stop-opacity="0.01"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-bold text-black"
                      >
                        Extrances <br />
                        <span>315,643</span> <br />
                        <svg
                          width="72"
                          height="20"
                          viewBox="0 0 72 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.95802 7.89342L8.82644 9.09396L12.6949 5.46565L16.5633 7.86674L20.4317 13.6294H24.3001L28.1685 5.30558L32.037 3.30467L35.9054 2.98452L39.7738 16.4306L43.6422 6.07926L47.5107 3.97164L51.3791 2.18416L56.0212 3.30467L59.1159 1.53053L62.9843 1.09033L66.8528 16.4306L71.4949 15.2568V19.6321H0.315918V11.9753L4.95802 7.89342Z"
                            fill="url(#paint0_linear_0_1)"
                          />
                          <path
                            d="M1.08936 11.9753L4.95778 7.89342L8.8262 9.09396L12.6946 5.57236L16.563 7.86674L20.4315 13.6294H24.2999L28.1683 5.30558L32.0367 3.30467L35.9051 2.98452L39.7736 16.4306L43.642 6.07926L47.5104 3.97164L51.3788 2.18416L55.2472 3.30467L59.1157 1.19705L62.9841 1.09033L66.8525 16.4306L70.7209 15.3635"
                            stroke="#539BBB"
                            stroke-width="1.16053"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_0_1"
                              x1="-14.513"
                              y1="-6.63539"
                              x2="-14.513"
                              y2="19.6321"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#4592FF" />
                              <stop
                                offset="1"
                                stop-color="white"
                                stop-opacity="0.01"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-bold text-black"
                      >
                        % Exit <br />
                        <span>39,84%</span> <br />
                        <svg
                          width="72"
                          height="20"
                          viewBox="0 0 72 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.98927 15.6295L8.85769 12.9616L12.7261 16.2965L16.5945 10.9607L20.463 13.6286H24.3314L28.1998 7.62587L32.0682 5.62496L35.9366 7.62587L39.8051 0.956177L43.6735 7.62587L47.5419 6.29193L51.4103 2.95708L56.0524 5.62496L59.1472 4.62451L63.0156 4.95799L66.884 0.956177L71.5261 8.29284V19.6313H0.347168V14.2956L4.98927 15.6295Z"
                            fill="url(#paint0_linear_1731_754)"
                          />
                          <path
                            d="M1.12061 14.2956L4.98903 15.6295L8.85745 12.9616L12.7259 15.6295L16.5943 10.9607L20.4627 13.6286H24.3311L28.1995 7.62587L32.068 5.62496L35.9364 7.62587L39.8048 0.956177L43.6732 7.62587L47.5417 6.29193L51.4101 2.95708L55.2785 5.62496L59.1469 4.29102L63.0153 4.95799L66.8838 0.956177L70.7522 7.62587"
                            stroke="#4592FF"
                            stroke-width="1.16053"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_1731_754"
                              x1="-14.4818"
                              y1="-6.82513"
                              x2="-14.4818"
                              y2="19.6313"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#4592FF" />
                              <stop
                                offset="1"
                                stop-color="white"
                                stop-opacity="0.01"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-bold text-black"
                      >
                        Page Value <br />
                        <span>$19.983</span> <br />
                        <svg
                          width="72"
                          height="20"
                          viewBox="0 0 72 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.77882 3.25055L8.64724 5.22478L12.5157 7.78594L16.3841 5.54492L20.2525 3.5707L24.1209 2.79701L27.9893 3.75745L31.8578 8.7197L35.7262 1.43639L39.5946 0.956177L43.463 3.75745L47.3315 10.1604L51.1999 6.8255L55.0683 2.53022L58.9367 7.71924L62.8051 10.3738L66.6736 8.69302L71.3157 4.42442V19.6313H0.136719V8.87977L4.77882 3.25055Z"
                            fill="url(#paint0_linear_1731_749)"
                          />
                          <path
                            d="M0.910645 8.87977L4.77906 3.25055L8.64749 5.22478L12.5159 7.89266L16.3843 5.54492L20.2527 3.5707L24.1212 2.79701L27.9896 3.75745L31.858 8.7197L35.7264 1.43639L39.5948 0.956177L43.4633 3.75745L47.3317 10.1604L51.2001 6.82551L55.0685 2.53022L58.937 8.15944L62.8054 10.3738L66.6738 8.69302L70.5422 4.53113"
                            stroke="#4592FF"
                            stroke-width="1.16053"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_1731_749"
                              x1="-14.6922"
                              y1="-6.82513"
                              x2="-14.6922"
                              y2="19.6313"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#4592FF" />
                              <stop
                                offset="1"
                                stop-color="white"
                                stop-opacity="0.01"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                      <tr key={person.name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <div className="text-sm text-gray-700">
                                {person.name}
                              </div>
                            </div>
                            <div className="ml-4">
                              {/* <div className="text-sm font-medium text-gray-900">
                                {person.views}
                              </div>
                              <div className="text-sm text-gray-700">
                                {person.email}
                              </div> */}
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">
                            {person.views}
                          </div>
                          
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-black">
                          <span >
                            {person.pageview}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-black">
                          {person.time}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-black">
                          {person.ext}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-black">
                          {person.exist}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {person.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
