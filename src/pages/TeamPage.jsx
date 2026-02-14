import { useMemo, useState } from "react";
import { TEAM_MEMBERS } from "../data/team";
import PhotoGrid from "../features/Team/components/PhotoGrid";

export default function TeamPage() {
  const [selectedId, setSelectedId] = useState(TEAM_MEMBERS[0]?.id ?? null);

  const selectedMember = useMemo(
    () => TEAM_MEMBERS.find((member) => member.id === selectedId),
    [selectedId]
  );

  return (
    <main className="min-h-screen bg-[#efefef] px-4 py-10 sm:px-8">
      <section className="mx-auto w-full max-w-6xl rounded-sm bg-[#f8f8f8] p-6 sm:p-10">
        <h1 className="mb-10 text-center text-4xl font-semibold tracking-wider text-black">
          TEAM
        </h1>

        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          <PhotoGrid
            members={TEAM_MEMBERS}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />

          <aside className="rounded-sm border border-black/10 bg-white/60 p-5 text-sm leading-7 text-zinc-700">
            <p className="mb-2 text-xs tracking-widest text-zinc-500">SELECTED</p>
            <p className="text-base font-semibold text-black">
              {selectedMember?.name ?? "-"}
            </p>
            <p className="mb-4 text-zinc-600">{selectedMember?.part ?? "-"}</p>
            <p>{selectedMember?.quote ?? "멤버를 선택하면 멘트가 표시됩니다."}</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
