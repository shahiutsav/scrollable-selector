import CheckboxCard from "../checkbox-card/checkbox-card";

export default function SelectListContainer() {
  return (
    <div className="flex h-80 w-96 flex-col justify-around rounded-lg border bg-white px-6 shadow-md">
      {/* ---------- Header ---------- */}
      <div className="mt-2">
        <CheckboxCard label="All pages" />
      </div>
      <Divider />
      {/* ---------- Scrollable list ---------- */}
      <div className="no__scroll__bar overflow-y-auto">
        <CheckboxCard label="Page 1" />
        <CheckboxCard label="Page 2" />
        <CheckboxCard label="Page 3" />
        <CheckboxCard label="Page 4" />
        <CheckboxCard label="Page 5" />
        <CheckboxCard label="Page 6" />
      </div>
      <Divider />

      {/* ---------- Button ---------- */}
      <button className="p mb-4 h-16 w-full rounded bg-[#FFCE22] hover:bg-[#FFD84D] active:bg-[#FFCE22]">
        Done
      </button>
    </div>
  );
}

function Divider() {
  return <div className="my-3 h-px w-full bg-black/15"></div>;
}
