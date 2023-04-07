import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-stretch h-full gap-8">
      <div>
        <h1 className="text-xl font-semibold">Your personal finance planner</h1>
        <p>Join the waitlist for launch updates</p>
      </div>

      <WaitlistForm />
    </div>
  );
}
