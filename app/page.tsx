import Scene from "./Scene";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center p-12 h-full">
      <div className="flex flex-col justify-start items-stretch gap-10">
        <div className="h-40">
          <Scene />
        </div>
        <div>
          <h1 className="text-xl font-semibold">
            Your personal finance planner
          </h1>
          <p>Join the waitlist for launch updates</p>
        </div>

        <form name="waitlist" method="POST" data-netlify="true" action="/">
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
      </div>
      <div className="text-gray">Made in Ukraine 🇺🇦</div>
    </div>
  );
}
