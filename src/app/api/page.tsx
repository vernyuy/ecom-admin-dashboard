"use client";

import algoliasearch from "algoliasearch/lite";
import { Hit as AlgoliaHit } from "instantsearch.js";
import { GetServerSideProps } from "next";
import Head from "next/head";
// import singletonRouter from 'next/router';
import React from "react";
// import { renderToString } from 'react-dom/server';
import {
  DynamicWidgets,
  InstantSearch,
  Hits,
  Highlight,
  RefinementList,
  SearchBox,
  InstantSearchServerState,
  InstantSearchSSRProvider,
  getServerState,
} from "react-instantsearch";
import { createInstantSearchRouterNext } from "react-instantsearch-router-nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";

const searchClient = algoliasearch(
  "1H8TO0RHHP",
  "8d8d474170f8d306904c4675045b6f4e",
);

type HitProps = {
  hit: AlgoliaHit<{
    name: string;
    productImage: string;
  }>;
};

function Hit({ hit }: HitProps) {
  return (
    <>
      <div className="flex gap-5 ">
        {/* <Highlight hit={hit} attribute="firstname" className="Hit-label" /> */}
        {/* <Link href={"/products"}>
          <div className="border px-4 py-2 gap-5 flex border-red-500">
            <span className="Hit-price ">{hit.name}</span>
            <span className="Hit-price">{hit.firstname}</span>
          </div>
        </Link> */}

        <li className="ais-InfiniteHits-item" style={{ display: "flex" }}>
          <div className="InterfaceDemoHit">
            <div className="Image">
              <picture className="stl-flex stl-items-center h-1/2 stl-justify-center">
                <img
                  alt="f49765d2-3f08-4eb8-a407-df8b6ec82543"
                  src={hit.productImage}
                />
              </picture>
            </div>

            <div>
              {/* <div className="OutputResultsAndFilters">
              <div className="InterfaceDemoResultsZone withFiltersBlock editMode listDisplay">
                <div className="ZoneHeader">
                  <div className="HitsDetails">
                    <div className="NbHits data-hj-allow">26 results</div>
                    <div className="DisplayConfiguration">
                      <div className="ToggleDisplay">
                        <button
                          id="configure-grid-view-ui-builder"
                          data-state="closed"
                          type="button"
                          className="stl-btn stl-inline-flex stl-items-center stl-justify-center stl-h-8 stl-w-8 stl-text-md stl-btn-subtle"
                          aria-label="Grid view"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className=""
                          >
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect>
                            <rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect>
                          </svg>
                        </button>
                        <button
                          id="configure-list-view-ui-builder"
                          data-state="closed"
                          type="button"
                          className="stl-btn stl-inline-flex stl-items-center stl-justify-center stl-h-8 stl-w-8 stl-text-md stl-btn-subtle --active"
                          aria-label="List view"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className=""
                          >
                            <line x1="8" y1="6" x2="21" y2="6"></line>
                            <line x1="8" y1="12" x2="21" y2="12"></line>
                            <line x1="8" y1="18" x2="21" y2="18"></line>
                            <line x1="3" y1="6" x2="3.01" y2="6"></line>
                            <line x1="3" y1="12" x2="3.01" y2="12"></line>
                            <line x1="3" y1="18" x2="3.01" y2="18"></line>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ais-InfiniteHits">
                  <ul className="ais-InfiniteHits-list">
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="f49765d2-3f08-4eb8-a407-df8b6ec82543"
                              src="/images/proxy/i0Cz1zrZZgyztyMYYEhNonJNwVAjTl8LwQ_S7iUyP3k/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vcHJlbWl1bS1wc2QvcmVhbGlzdGljLWlwaG9uZS0xNC1wcm8tbWF4LTNkLXNtYXJ0cGhvbmUtc2NyZWVuLW1vY2t1cC10ZW1wbGF0ZS13aXRoLWVkaXRhYmxlLWJhY2tncm91bmQtcHNkXzM0OTAwMS01MzguanBnP3NpemU9NjI2JmV4dD1qcGcmZ2E9R0ExLjEuMTIyMjYxOTU1Mi4xNjg5NzY0NDExJnNlbXQ9YWlz.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  Product 3
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="f248d500-a164-4be3-9764-ef9d436d6e93"
                              src="/images/proxy/VIE6oGAD2DUQr_IgMj8lAJuIzVPnOWBEZlGvehuWy1Q/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vcHJlbWl1bS1wc2QvbGFwdG9wLXBzZC1tb2NrdXAtd2l0aC1ncmFkaWVudC1sZWQtbGlnaHRfNTM4NzYtMTM4MjgzLmpwZz9zaXplPTYyNiZleHQ9anBnJmdhPUdBMS4xLjEyMjI2MTk1NTIuMTY4OTc2NDQxMSZzZW10PWFpcw.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  MacBook Air M2
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="d3a05a55-fd71-407a-9422-b9f20024567e"
                              src="/images/proxy/KGhtr02tkgv6DX4L-AL8QeJHnaadOy5-jJ7aUIJRpdA/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9wbmcucG5ndHJlZS5jb20vcG5nLWNsaXBhcnQvMjAyMzA1MTcvb3VybWlkL3BuZ3RyZWUtYWlycG9kcy1wcm8tcG5nLWltYWdlXzcwOTk5NDgucG5n.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  Air Pods pro
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="cf7ee390-157d-4c47-8aed-13a8524cc8f9"
                              src="/images/proxy/TToBlnsmgNGmT55MfiMsVeRYCI4YfpRL-YCr8xfN1ck/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vcHJlbWl1bS1wc2QvcmVhbGlzdGljLWlwaG9uZS0xNC1wcm8tbWF4LTNkLXNtYXJ0cGhvbmUtc2NyZWVuLW1vY2t1cC10ZW1wbGF0ZS13aXRoLWVkaXRhYmxlLWJhY2tncm91bmQtcHNkXzM0OTAwMS01MzMuanBnP3NpemU9NjI2JmV4dD1qcGcmZ2E9R0ExLjEuMTIyMjYxOTU1Mi4xNjg5NzY0NDExJnNlbXQ9YWlz.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  Samsung note 10
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="cbd39da6-e82f-4201-ae2b-6aaf54e3e3bf"
                              src="/images/proxy/AkLUbzdcAKjusAc2iv3_zmcbmpEr3lLjS_L_Hiex6dM/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vcHJlbWl1bS1waG90by9jYXJ0b29uLWluc3RhbnQtcG90LWNvb2tlcnMtM2RfODUzNjc3LTM1Mzc0LmpwZz9zaXplPTYyNiZleHQ9anBnJmdhPUdBMS4xLjEyMjI2MTk1NTIuMTY4OTc2NDQxMSZzZW10PWFpcw.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  Instant Pot Duo Plus 9-in-1 Electric Pressure
                                  Cooker
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="c60bdb31-1114-421b-a37a-1760aaaadaf1"
                              src="/images/proxy/JAb4dHY7vyQl4lTZrHmbr8UK-ver6HH0nG3uYOMJ4Lw/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vZnJlZS1waG90by90ZWxldmlzaW9uLWhvdXNlcGxhbnRzLXJvb20tc2NlbmUtZ2VuZXJhdGl2ZS1haV8xODg1NDQtMTIxNDUuanBnP3NpemU9NjI2JmV4dD1qcGcmZ2E9R0ExLjEuMTIyMjYxOTU1Mi4xNjg5NzY0NDExJnNlbXQ9YWlz.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  Samsung QN90B Neo QLED 4K TV
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="c55b89f6-9ec8-4df0-9899-16f5f1ab9165"
                              src="/images/proxy/VIE6oGAD2DUQr_IgMj8lAJuIzVPnOWBEZlGvehuWy1Q/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vcHJlbWl1bS1wc2QvbGFwdG9wLXBzZC1tb2NrdXAtd2l0aC1ncmFkaWVudC1sZWQtbGlnaHRfNTM4NzYtMTM4MjgzLmpwZz9zaXplPTYyNiZleHQ9anBnJmdhPUdBMS4xLjEyMjI2MTk1NTIuMTY4OTc2NDQxMSZzZW10PWFpcw.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  MacBook Air M2
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="c1fac426-f81a-445d-adca-5aa144fb256b"
                              src="/images/proxy/pdUplTCVV0TUJs_E8JIpLZOF9n66VR3WUqu6oE789BE/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vZnJlZS1waG90by92aWV3LWVsZWN0cm9uaWMtcHJvZHVjdC1iYWxhbmNpbmctcG9kaXVtXzIzLTIxNTAxNDEzMTkuanBnP3c9NzQwJnQ9c3Q9MTY5OTY1MDE5MH5leHA9MTY5OTY1MDc5MH5obWFjPWJlNjcxZjFkZmRmNDE5ZWVlZjM4YmIwNTE3NDZiODY1NmY4OTI3MGIzODRkZWY5ZjE0MTYzZTQzMTQ3NjkzNjg.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  iMac pro 256
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="c1500d29-9c90-4cc9-89f8-7a8eb404b7a5"
                              src="/images/proxy/JAb4dHY7vyQl4lTZrHmbr8UK-ver6HH0nG3uYOMJ4Lw/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vZnJlZS1waG90by90ZWxldmlzaW9uLWhvdXNlcGxhbnRzLXJvb20tc2NlbmUtZ2VuZXJhdGl2ZS1haV8xODg1NDQtMTIxNDUuanBnP3NpemU9NjI2JmV4dD1qcGcmZ2E9R0ExLjEuMTIyMjYxOTU1Mi4xNjg5NzY0NDExJnNlbXQ9YWlz.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  Samsung QN90B Neo QLED 4K TV
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <svg
                              className="stl-progress-spinner"
                              viewBox="10 10 20 20"
                              width="20"
                              height="20"
                              role="status"
                              aria-busy="true"
                              aria-live="polite"
                            >
                              <title>Loading spinner</title>
                              <circle
                                cx="20"
                                cy="20"
                                r="9"
                                fill="none"
                                stroke-width="2"
                              ></circle>
                            </svg>
                            <span
                              className=""
                              style={{ display: "inline-block" }}
                            ></span>
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  Zet Air Pro
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <svg
                              className="stl-progress-spinner"
                              viewBox="10 10 20 20"
                              width="20"
                              height="20"
                              role="status"
                              aria-busy="true"
                              aria-live="polite"
                            >
                              <title>Loading spinner</title>
                              <circle
                                cx="20"
                                cy="20"
                                r="9"
                                fill="none"
                                stroke-width="2"
                              ></circle>
                            </svg>
                            <span
                              className=""
                              style={{ display: "inline-block" }}
                            ></span>
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  MacBook Air M2
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <svg
                              className="stl-progress-spinner"
                              viewBox="10 10 20 20"
                              width="20"
                              height="20"
                              role="status"
                              aria-busy="true"
                              aria-live="polite"
                            >
                              <title>Loading spinner</title>
                              <circle
                                cx="20"
                                cy="20"
                                r="9"
                                fill="none"
                                stroke-width="2"
                              ></circle>
                            </svg>
                            <span
                              className=""
                              style={{ display: "inline-block" }}
                            ></span>
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  iPhone 14 Pro Max
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <svg
                              className="stl-progress-spinner"
                              viewBox="10 10 20 20"
                              width="20"
                              height="20"
                              role="status"
                              aria-busy="true"
                              aria-live="polite"
                            >
                              <title>Loading spinner</title>
                              <circle
                                cx="20"
                                cy="20"
                                r="9"
                                fill="none"
                                stroke-width="2"
                              ></circle>
                            </svg>
                            <span
                              className=""
                              style={{ display: "inline-block" }}
                            ></span>
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  Instant Pot Duo Plus 9-in-1 Electric Pressure
                                  Cooker
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <svg
                              className="stl-progress-spinner"
                              viewBox="10 10 20 20"
                              width="20"
                              height="20"
                              role="status"
                              aria-busy="true"
                              aria-live="polite"
                            >
                              <title>Loading spinner</title>
                              <circle
                                cx="20"
                                cy="20"
                                r="9"
                                fill="none"
                                stroke-width="2"
                              ></circle>
                            </svg>
                            <span
                              className=""
                              style={{ display: "inline-block" }}
                            ></span>
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  Product tesy
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <svg
                              className="stl-progress-spinner"
                              viewBox="10 10 20 20"
                              width="20"
                              height="20"
                              role="status"
                              aria-busy="true"
                              aria-live="polite"
                            >
                              <title>Loading spinner</title>
                              <circle
                                cx="20"
                                cy="20"
                                r="9"
                                fill="none"
                                stroke-width="2"
                              ></circle>
                            </svg>
                            <span
                              className=""
                              style={{ display: "inline-block" }}
                            ></span>
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  Product 4
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <svg
                              className="stl-progress-spinner"
                              viewBox="10 10 20 20"
                              width="20"
                              height="20"
                              role="status"
                              aria-busy="true"
                              aria-live="polite"
                            >
                              <title>Loading spinner</title>
                              <circle
                                cx="20"
                                cy="20"
                                r="9"
                                fill="none"
                                stroke-width="2"
                              ></circle>
                            </svg>
                            <span
                              className=""
                              style={{ display: "inline-block" }}
                            ></span>
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  iPhone 14 Pro Max
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <svg
                              className="stl-progress-spinner"
                              viewBox="10 10 20 20"
                              width="20"
                              height="20"
                              role="status"
                              aria-busy="true"
                              aria-live="polite"
                            >
                              <title>Loading spinner</title>
                              <circle
                                cx="20"
                                cy="20"
                                r="9"
                                fill="none"
                                stroke-width="2"
                              ></circle>
                            </svg>
                            <span
                              className=""
                              style={{ display: "inline-block" }}
                            ></span>
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  HP Laptop
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <svg
                              className="stl-progress-spinner"
                              viewBox="10 10 20 20"
                              width="20"
                              height="20"
                              role="status"
                              aria-busy="true"
                              aria-live="polite"
                            >
                              <title>Loading spinner</title>
                              <circle
                                cx="20"
                                cy="20"
                                r="9"
                                fill="none"
                                stroke-width="2"
                              ></circle>
                            </svg>
                            <span
                              className=""
                              style={{ display: "inline-block" }}
                            ></span>
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  Dell 450
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <svg
                              className="stl-progress-spinner"
                              viewBox="10 10 20 20"
                              width="20"
                              height="20"
                              role="status"
                              aria-busy="true"
                              aria-live="polite"
                            >
                              <title>Loading spinner</title>
                              <circle
                                cx="20"
                                cy="20"
                                r="9"
                                fill="none"
                                stroke-width="2"
                              ></circle>
                            </svg>
                            <span
                              className=""
                              style={{ display: "inline-block" }}
                            ></span>
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  iPhone 14 Pro Max
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <svg
                              className="stl-progress-spinner"
                              viewBox="10 10 20 20"
                              width="20"
                              height="20"
                              role="status"
                              aria-busy="true"
                              aria-live="polite"
                            >
                              <title>Loading spinner</title>
                              <circle
                                cx="20"
                                cy="20"
                                r="9"
                                fill="none"
                                stroke-width="2"
                              ></circle>
                            </svg>
                            <span
                              className=""
                              style={{ display: "inline-block" }}
                            ></span>
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  Samsung QN90B Neo QLED 4K TV
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <button
                    id="load-more-button-ui-builder"
                    className="ais-InfiniteHits-loadMore"
                  >
                    Show more
                  </button>
                </div>
              </div>
            </div>

            <div className="OutputResultsAndFilters">
              <div className="InterfaceDemoResultsZone withFiltersBlock editMode">
                <div className="ZoneHeader">
                  <div className="HitsDetails">
                    <div className="NbHits data-hj-allow">26 results</div>
                    <div className="DisplayConfiguration">
                      <div className="ToggleDisplay">
                        <button
                          id="configure-grid-view-ui-builder"
                          data-state="closed"
                          type="button"
                          className="stl-btn stl-inline-flex stl-items-center stl-justify-center stl-h-8 stl-w-8 stl-text-md stl-btn-subtle --active"
                          aria-label="Grid view"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className=""
                          >
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect>
                            <rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect>
                          </svg>
                        </button>
                        <button
                          id="configure-list-view-ui-builder"
                          data-state="closed"
                          type="button"
                          className="stl-btn stl-inline-flex stl-items-center stl-justify-center stl-h-8 stl-w-8 stl-text-md stl-btn-subtle"
                          aria-label="List view"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className=""
                          >
                            <line x1="8" y1="6" x2="21" y2="6"></line>
                            <line x1="8" y1="12" x2="21" y2="12"></line>
                            <line x1="8" y1="18" x2="21" y2="18"></line>
                            <line x1="3" y1="6" x2="3.01" y2="6"></line>
                            <line x1="3" y1="12" x2="3.01" y2="12"></line>
                            <line x1="3" y1="18" x2="3.01" y2="18"></line>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ais-InfiniteHits">
                  <ul className="ais-InfiniteHits-list">
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="f49765d2-3f08-4eb8-a407-df8b6ec82543"
                              src="/images/proxy/i0Cz1zrZZgyztyMYYEhNonJNwVAjTl8LwQ_S7iUyP3k/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vcHJlbWl1bS1wc2QvcmVhbGlzdGljLWlwaG9uZS0xNC1wcm8tbWF4LTNkLXNtYXJ0cGhvbmUtc2NyZWVuLW1vY2t1cC10ZW1wbGF0ZS13aXRoLWVkaXRhYmxlLWJhY2tncm91bmQtcHNkXzM0OTAwMS01MzguanBnP3NpemU9NjI2JmV4dD1qcGcmZ2E9R0ExLjEuMTIyMjYxOTU1Mi4xNjg5NzY0NDExJnNlbXQ9YWlz.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  Product 3
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="f248d500-a164-4be3-9764-ef9d436d6e93"
                              src="/images/proxy/VIE6oGAD2DUQr_IgMj8lAJuIzVPnOWBEZlGvehuWy1Q/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vcHJlbWl1bS1wc2QvbGFwdG9wLXBzZC1tb2NrdXAtd2l0aC1ncmFkaWVudC1sZWQtbGlnaHRfNTM4NzYtMTM4MjgzLmpwZz9zaXplPTYyNiZleHQ9anBnJmdhPUdBMS4xLjEyMjI2MTk1NTIuMTY4OTc2NDQxMSZzZW10PWFpcw.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  MacBook Air M2
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="d3a05a55-fd71-407a-9422-b9f20024567e"
                              src="/images/proxy/KGhtr02tkgv6DX4L-AL8QeJHnaadOy5-jJ7aUIJRpdA/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9wbmcucG5ndHJlZS5jb20vcG5nLWNsaXBhcnQvMjAyMzA1MTcvb3VybWlkL3BuZ3RyZWUtYWlycG9kcy1wcm8tcG5nLWltYWdlXzcwOTk5NDgucG5n.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  Air Pods pro
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="cf7ee390-157d-4c47-8aed-13a8524cc8f9"
                              src="/images/proxy/TToBlnsmgNGmT55MfiMsVeRYCI4YfpRL-YCr8xfN1ck/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vcHJlbWl1bS1wc2QvcmVhbGlzdGljLWlwaG9uZS0xNC1wcm8tbWF4LTNkLXNtYXJ0cGhvbmUtc2NyZWVuLW1vY2t1cC10ZW1wbGF0ZS13aXRoLWVkaXRhYmxlLWJhY2tncm91bmQtcHNkXzM0OTAwMS01MzMuanBnP3NpemU9NjI2JmV4dD1qcGcmZ2E9R0ExLjEuMTIyMjYxOTU1Mi4xNjg5NzY0NDExJnNlbXQ9YWlz.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  Samsung note 10
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="cbd39da6-e82f-4201-ae2b-6aaf54e3e3bf"
                              src="/images/proxy/AkLUbzdcAKjusAc2iv3_zmcbmpEr3lLjS_L_Hiex6dM/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vcHJlbWl1bS1waG90by9jYXJ0b29uLWluc3RhbnQtcG90LWNvb2tlcnMtM2RfODUzNjc3LTM1Mzc0LmpwZz9zaXplPTYyNiZleHQ9anBnJmdhPUdBMS4xLjEyMjI2MTk1NTIuMTY4OTc2NDQxMSZzZW10PWFpcw.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  Instant Pot Duo Plus 9-in-1 Electric Pressure
                                  Cooker
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="c60bdb31-1114-421b-a37a-1760aaaadaf1"
                              src="/images/proxy/JAb4dHY7vyQl4lTZrHmbr8UK-ver6HH0nG3uYOMJ4Lw/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vZnJlZS1waG90by90ZWxldmlzaW9uLWhvdXNlcGxhbnRzLXJvb20tc2NlbmUtZ2VuZXJhdGl2ZS1haV8xODg1NDQtMTIxNDUuanBnP3NpemU9NjI2JmV4dD1qcGcmZ2E9R0ExLjEuMTIyMjYxOTU1Mi4xNjg5NzY0NDExJnNlbXQ9YWlz.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  Samsung QN90B Neo QLED 4K TV
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="c55b89f6-9ec8-4df0-9899-16f5f1ab9165"
                              src="/images/proxy/VIE6oGAD2DUQr_IgMj8lAJuIzVPnOWBEZlGvehuWy1Q/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vcHJlbWl1bS1wc2QvbGFwdG9wLXBzZC1tb2NrdXAtd2l0aC1ncmFkaWVudC1sZWQtbGlnaHRfNTM4NzYtMTM4MjgzLmpwZz9zaXplPTYyNiZleHQ9anBnJmdhPUdBMS4xLjEyMjI2MTk1NTIuMTY4OTc2NDQxMSZzZW10PWFpcw.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  MacBook Air M2
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="c1fac426-f81a-445d-adca-5aa144fb256b"
                              src="/images/proxy/pdUplTCVV0TUJs_E8JIpLZOF9n66VR3WUqu6oE789BE/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vZnJlZS1waG90by92aWV3LWVsZWN0cm9uaWMtcHJvZHVjdC1iYWxhbmNpbmctcG9kaXVtXzIzLTIxNTAxNDEzMTkuanBnP3c9NzQwJnQ9c3Q9MTY5OTY1MDE5MH5leHA9MTY5OTY1MDc5MH5obWFjPWJlNjcxZjFkZmRmNDE5ZWVlZjM4YmIwNTE3NDZiODY1NmY4OTI3MGIzODRkZWY5ZjE0MTYzZTQzMTQ3NjkzNjg.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  iMac pro 256
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="c1500d29-9c90-4cc9-89f8-7a8eb404b7a5"
                              src="/images/proxy/JAb4dHY7vyQl4lTZrHmbr8UK-ver6HH0nG3uYOMJ4Lw/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vZnJlZS1waG90by90ZWxldmlzaW9uLWhvdXNlcGxhbnRzLXJvb20tc2NlbmUtZ2VuZXJhdGl2ZS1haV8xODg1NDQtMTIxNDUuanBnP3NpemU9NjI2JmV4dD1qcGcmZ2E9R0ExLjEuMTIyMjYxOTU1Mi4xNjg5NzY0NDExJnNlbXQ9YWlz.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  Samsung QN90B Neo QLED 4K TV
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="b1b4678b-eb56-4d9e-849d-ca7c570271f5"
                              src="/images/proxy/v2mIl7kNzx2DN1el8-CZy1aHjCeF4dASmc77tR_RQEo/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9wbmcucG5ndHJlZS5jb20vcG5nLWNsaXBhcnQvMjAyMzA0MTEvb3VybWlkL3BuZ3RyZWUtbW9kZXJuLW1hY2Jvb2stc2NyZWVuLWZyYW1lLXRyYW5zcGFyZW50LW1vY2t1cC1wbmctaW1hZ2VfNjY5OTI3OC5wbmc.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  Zet Air Pro
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="a35fce25-d190-4fcb-be66-1c85cbe16ed5"
                              src="/images/proxy/VIE6oGAD2DUQr_IgMj8lAJuIzVPnOWBEZlGvehuWy1Q/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vcHJlbWl1bS1wc2QvbGFwdG9wLXBzZC1tb2NrdXAtd2l0aC1ncmFkaWVudC1sZWQtbGlnaHRfNTM4NzYtMTM4MjgzLmpwZz9zaXplPTYyNiZleHQ9anBnJmdhPUdBMS4xLjEyMjI2MTk1NTIuMTY4OTc2NDQxMSZzZW10PWFpcw.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  MacBook Air M2
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="985dbf71-1342-4c25-aa5e-a37975846def"
                              src="/images/proxy/Mh09XYyLg6tQc4VMMhR8zaKhyLEvGOX0CurevgTCziU/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vcHJlbWl1bS1wc2QvcmVhbGlzdGljLWlwaG9uZS0xNC1wcm8tbWF4LTNkLXNtYXJ0cGhvbmUtc2NyZWVuLW1vY2t1cC10ZW1wbGF0ZS13aXRoLWVkaXRhYmxlLWJhY2tncm91bmQtcHNkXzM0OTAwMS01MzMuanBnPw.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  iPhone 14 Pro Max
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="85808371-5ad0-43e9-8342-50d5961d232a"
                              src="/images/proxy/AkLUbzdcAKjusAc2iv3_zmcbmpEr3lLjS_L_Hiex6dM/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vcHJlbWl1bS1waG90by9jYXJ0b29uLWluc3RhbnQtcG90LWNvb2tlcnMtM2RfODUzNjc3LTM1Mzc0LmpwZz9zaXplPTYyNiZleHQ9anBnJmdhPUdBMS4xLjEyMjI2MTk1NTIuMTY4OTc2NDQxMSZzZW10PWFpcw.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  Instant Pot Duo Plus 9-in-1 Electric Pressure
                                  Cooker
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="6d6a0833-57e1-40b4-8d44-49c95638c9c9"
                              src="/images/proxy/SKzy0j66KOkTMPijUM3SbysflKdXeDE0dA-P3g_ckfw/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vcHJlbWl1bS1wc2QvcmVhbGlzdGljLWlwaG9uZS0xNC1wcm8tbWF4LTNkLXNtYXJ0cGhvbmUtc2NyZWVuLW1vY2t1cC10ZW1wbGF0ZS13aXRoLWVkaXRhYmxlLWJhY2tncm91bmQtcHNkXzM0OTAwMS01MjguanBnP3NpemU9NjI2JmV4dD1qcGcmZ2E9R0ExLjEuMTIyMjYxOTU1Mi4xNjg5NzY0NDExJnNlbXQ9YWlz.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  Product tesy
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="6cb370be-cc9d-440f-a5b6-656859d08cc3"
                              src="/images/proxy/Mh09XYyLg6tQc4VMMhR8zaKhyLEvGOX0CurevgTCziU/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vcHJlbWl1bS1wc2QvcmVhbGlzdGljLWlwaG9uZS0xNC1wcm8tbWF4LTNkLXNtYXJ0cGhvbmUtc2NyZWVuLW1vY2t1cC10ZW1wbGF0ZS13aXRoLWVkaXRhYmxlLWJhY2tncm91bmQtcHNkXzM0OTAwMS01MzMuanBnPw.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  Product 4
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="4eaa8e75-fd43-4dc8-947f-2e77f4168bbd"
                              src="/images/proxy/Mh09XYyLg6tQc4VMMhR8zaKhyLEvGOX0CurevgTCziU/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vcHJlbWl1bS1wc2QvcmVhbGlzdGljLWlwaG9uZS0xNC1wcm8tbWF4LTNkLXNtYXJ0cGhvbmUtc2NyZWVuLW1vY2t1cC10ZW1wbGF0ZS13aXRoLWVkaXRhYmxlLWJhY2tncm91bmQtcHNkXzM0OTAwMS01MzMuanBnPw.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  iPhone 14 Pro Max
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="4b69f5c4-c144-4b14-8dfd-e7dccb01e00c"
                              src="/images/proxy/bpKQZ_ODUCmPeaFcIMaeRGzIKCuaHAhwSWYCxYFqRrU/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9wbmcucG5ndHJlZS5jb20vcG5nLXZlY3Rvci8yMDIzMDMwNy9vdXJtaWQvcG5ndHJlZS1hcHBsZS1tYWNib29rLXByby12ZWN0b3ItcG5nLWltYWdlXzY2MzY2NzMucG5n.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  HP Laptop
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="4ab1b164-b8c8-4e50-9f86-b0407fea4ee8"
                              src="/images/proxy/v2mIl7kNzx2DN1el8-CZy1aHjCeF4dASmc77tR_RQEo/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9wbmcucG5ndHJlZS5jb20vcG5nLWNsaXBhcnQvMjAyMzA0MTEvb3VybWlkL3BuZ3RyZWUtbW9kZXJuLW1hY2Jvb2stc2NyZWVuLWZyYW1lLXRyYW5zcGFyZW50LW1vY2t1cC1wbmctaW1hZ2VfNjY5OTI3OC5wbmc.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  Dell 450
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="471b4e8a-6677-47cc-af5b-50b2d63117e3"
                              src="/images/proxy/Mh09XYyLg6tQc4VMMhR8zaKhyLEvGOX0CurevgTCziU/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vcHJlbWl1bS1wc2QvcmVhbGlzdGljLWlwaG9uZS0xNC1wcm8tbWF4LTNkLXNtYXJ0cGhvbmUtc2NyZWVuLW1vY2t1cC10ZW1wbGF0ZS13aXRoLWVkaXRhYmxlLWJhY2tncm91bmQtcHNkXzM0OTAwMS01MzMuanBnPw.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  iPhone 14 Pro Max
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ais-InfiniteHits-item">
                      <div className="InterfaceDemoHit">
                        <div className="Image">
                          <picture className="stl-flex stl-items-center stl-justify-center">
                            <img
                              alt="420c2ad6-8aa9-4bc5-ba06-bd9d24d5505d"
                              src="/images/proxy/JAb4dHY7vyQl4lTZrHmbr8UK-ver6HH0nG3uYOMJ4Lw/resizing_type:fit/width:208/height:208/gravity:sm/enlarge:true/extend:true/aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vZnJlZS1waG90by90ZWxldmlzaW9uLWhvdXNlcGxhbnRzLXJvb20tc2NlbmUtZ2VuZXJhdGl2ZS1haV8xODg1NDQtMTIxNDUuanBnP3NpemU9NjI2JmV4dD1qcGcmZ2E9R0ExLjEuMTIyMjYxOTU1Mi4xNjg5NzY0NDExJnNlbXQ9YWlz.jpg"
                            />
                          </picture>
                        </div>
                        <div className="Attributes">
                          <div className="FirstRow">
                            <div className="PrimaryAttribute">
                              <span className="ais-Highlight">
                                <span className="ais-Highlight-nonHighlighted">
                                  Samsung QN90B Neo QLED 4K TV
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <button
                    id="load-more-button-ui-builder"
                    className="ais-InfiniteHits-loadMore"
                  >
                    Show more
                  </button>
                </div>
              </div>
            </div> */}
            </div>

            <div className="Attributes">
              <div className="FirstRow">
                <div className="PrimaryAttribute">
                  <span className="ais-Highlight">
                    <span className="Hit-price ">{hit.name}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </div>
    </>
  );
}

// type HomePageProps = {
//   serverState?: InstantSearchServerState;
//   url?: string;
// };

export default function HomePage({ serverState, url }: any) {
  // const router = useRouter()
  return (
    <InstantSearchSSRProvider {...serverState}>
      <InstantSearch
        searchClient={searchClient}
        initialUiState={{
          dev_rogroup: {
            query: "Fonchu",
            page: 1,
          },
        }}
        indexName="products"
        routing={true}
        insights={true}
      >
        <div className="Container">
          <div>
            {/* <DynamicWidgets fallbackComponent={FallbackComponent} /> */}
          </div>
          <div className="h-screen">
            <SearchBox className="text-black" style={{ padding: "10px" }} />
            <Hits className="text-black" hitComponent={Hit} />
          </div>
        </div>
      </InstantSearch>
    </InstantSearchSSRProvider>
  );
}

// function FallbackComponent({ attribute }: { attribute: string }) {
//   return (
//     <Panel header={attribute}>
//       <RefinementList attribute={attribute} />
//     </Panel>
//   );
// }

// export const ge =
//   async function getServerSideProps() {
//     const protocol = req.headers.referer?.split('://')[0] || 'https';
//     const url = `${protocol}://${req.headers.host}${req.url}`;
//     // const serverState = await getServerState(<HomePage url={url} />, {
//     //   renderToString,
//     // });

//     return (

//     );
//   };
