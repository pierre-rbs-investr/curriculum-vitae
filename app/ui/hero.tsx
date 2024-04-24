"use client";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Typewriter from "typewriter-effect";
import CodeDisplay from "./example-code";
import Experiences from "./short-experiences";
import LogoCloud from "./logo-cloud";
import Testimonials from "./testimonials";

export default function HeroSection() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 lg:mt-0 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  <Typewriter
                    options={{
                      strings: ["Get things done", "Hire a freelance!"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>

                <div className="mt-10 flex items-center justify-between">
                  <div className="md:flex md:items-center md:justify-between md:space-x-5">
                    <div className="flex items-start space-x-5">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <img
                            className="h-16 w-16 rounded-full"
                            src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                            alt=""
                          />
                          <span
                            className="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      {/*
          Use vertical padding to simulate center alignment when both lines of text are one line,
          but preserve the same layout if the text wraps without making the image jump around.
        */}
                      <div className="pt-1.5">
                        <h1 className="text-2xl font-bold text-gray-900">
                          Pierre Robisson
                        </h1>
                        <p className="text-sm font-medium text-gray-500">
                          Full Stack Developer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Contact
                    </button>
                  </div>
                </div>

                <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
                  Hi, I am a full stack developer with experiences in Next.js,
                  Django, Javascript, and Python. I am available for freelance
                  work. Let's work together!
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-[#2d2d2d]">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                          <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                            Next.js
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">
                            Django.py
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">
                            React.tsx
                          </div>
                        </div>
                      </div>
                      <div className="px-6 text-white font-mono text-sm">
                        <CodeDisplay />
                      </div>
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
      <LogoCloud />
      <Experiences />
      <Testimonials />
    </div>
  );
}
