import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-stretch h-full gap-8">
      <div>
        <h1 className="text-xl font-semibold">Welcome to Cashbot!</h1>
        <p>Your personal finance planner</p>
      </div>

      <a
        href="https://app.cashbot.me/auth/login"
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
        Login <ArrowRightIcon className="w-6 h-6" />
      </a>
    </div>
  );
}
