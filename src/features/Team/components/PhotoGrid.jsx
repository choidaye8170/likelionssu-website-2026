const FALLBACK_IMAGE = "/vite.svg";

export default function PhotoGrid({ members, selectedId, onSelect }) {
  return (
    <div className="relative mx-auto h-[560px] w-full max-w-[740px]">
      {members.map((member) => {
        const isSelected = selectedId === member.id;

        return (
          <button
            key={member.id}
            type="button"
            onClick={() => onSelect(member.id)}
            className="group absolute block h-[170px] w-[130px] overflow-hidden bg-zinc-200 shadow-md transition-transform duration-300 hover:scale-[1.02]"
            style={{
              top: member.position.top,
              left: member.position.left,
              transform: `rotate(${member.rotation}deg)`,
              zIndex: isSelected ? 30 : member.zIndex,
            }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover grayscale"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.src = FALLBACK_IMAGE;
              }}
            />

            <div
              className={`absolute inset-0 flex flex-col items-center justify-center bg-black/60 px-3 text-center text-white transition-opacity duration-200 ${
                isSelected ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-sm font-medium">{member.part}</p>
              <p className="mt-1 text-lg font-semibold">{member.name}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
