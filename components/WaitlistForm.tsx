"use client";

import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function WaitlistForm() {
  return (
    // @ts-ignore
    <form name="waitlist" method="POST" netlify action="/thankyou">
      <div className="flex flex-col gap-md">
        <div className="flex flex-col gap-sm">
          <label
            htmlFor="email"
            className="text-gray-dark text-base font-bold uppercase"
          >
            email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="
              border-gray-light
            text-gray-dark
              p-md
              rounded-md
              transition
              duration-200
              ease-in-out
            bg-white
              w-full
              font-sans
              leading-tight
              disabled:opacity-50"
          />
        </div>
        <button
          type="submit"
          className="
              p-md
              rounded-md
            text-white
            bg-gray-darkest
            hover:bg-black
            disabled:bg-gray
              transition
              duration-200
              ease-in-out
              capitalize
              flex
              gap-sm
              hover:shadow-lg
              hover:scale-105
              items-center
              justify-center
              font-semibold
              box-border"
        >
          Join <ArrowRightIcon className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
}
