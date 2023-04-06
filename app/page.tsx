import Scene from "./Scene";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-40">
        <Scene />
      </div>
      <h1 className="text-4xl font-bold">Cashbot</h1>
      <form name="waitlist" method="POST" data-netlify="true" action="/">
        <input type="email" id="email" name="email" />
        <button type="submit">send</button>
      </form>
    </div>
  );
}
