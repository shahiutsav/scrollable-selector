import CheckboxCard from "@/components/checkbox-card/checkbox-card";

export default function Home() {
  return (
    <main className="flex h-dvh w-full items-center justify-center">
      <div className="flex h-80 w-96 flex-col justify-around rounded-lg border bg-white px-6 shadow-md">
        <div className="mt-2">
          <CheckboxCard label="All pages" />
        </div>
        <Divider />
        <div className="no__scroll__bar overflow-y-auto">
          <CheckboxCard label="Page 1" />
          <CheckboxCard label="Page 2" />
          <CheckboxCard label="Page 3" />
          <CheckboxCard label="Page 4" />
          <CheckboxCard label="Page 5" />
          <CheckboxCard label="Page 6" />
        </div>
        <Divider />
        <button className="p mb-4 h-16 w-full rounded bg-yellow-400">
          Done
        </button>
      </div>
    </main>
  );
}

function Divider() {
  return <div className="my-3 h-px w-full bg-black/15"></div>;
}
