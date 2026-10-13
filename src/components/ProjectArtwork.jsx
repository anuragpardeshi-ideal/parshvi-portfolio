function WindowDots() {
  return (
    <div className="flex gap-1.5" aria-hidden="true">
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-25" />
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-25" />
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-25" />
    </div>
  )
}

function StretusArt() {
  return (
    <div className="art-grid relative flex h-full min-h-[23rem] items-center justify-center overflow-hidden bg-[#6862d9] p-7 md:min-h-[32rem] md:p-12">
      <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-acid blur-sm" />
      <div className="relative w-full max-w-[34rem] rotate-[-3deg] rounded-[1.4rem] bg-[#f7f5ef] p-3 shadow-[0_2rem_5rem_rgba(24,18,61,0.35)] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.02]">
        <div className="flex items-center justify-between border-b border-black/10 px-2 pb-3"><WindowDots /><span className="text-[0.55rem] font-bold uppercase tracking-[0.15em]">Stretus / Workspace</span></div>
        <div className="grid grid-cols-[4.5rem_1fr] gap-3 pt-3">
          <div className="rounded-xl bg-[#eae7df] p-2"><div className="h-4 w-8 rounded bg-[#6862d9]" /><div className="mt-5 space-y-2">{[1,2,3,4].map((item)=><div className="h-1.5 rounded bg-black/10" key={item} />)}</div></div>
          <div><div className="flex justify-between"><div className="h-4 w-24 rounded bg-black/80"/><div className="h-5 w-12 rounded-full bg-acid"/></div><div className="mt-4 grid grid-cols-3 gap-2">{[1,2,3].map((item)=><div className="h-16 rounded-lg bg-white shadow-sm" key={item}><div className="m-2 h-2 w-7 rounded bg-[#6862d9]/40"/></div>)}</div><div className="mt-3 h-24 rounded-lg bg-[#ddd9fa] p-3"><div className="h-2 w-1/2 rounded bg-[#6862d9]/40"/><div className="mt-3 h-10 rounded-md bg-white/70"/></div></div>
        </div>
      </div>
    </div>
  )
}

function SroiArt() {
  return (
    <div className="art-grid relative flex h-full min-h-[23rem] items-center justify-center overflow-hidden bg-[#173d2b] p-8 text-[#173d2b] md:min-h-[32rem] md:p-14">
      <div className="absolute left-10 top-8 h-28 w-28 rounded-full border-[0.0625rem] border-white/30" />
      <div className="relative grid w-full max-w-[33rem] rotate-2 grid-cols-2 gap-3 rounded-[1.4rem] bg-[#e9ffd0] p-4 shadow-[0_2rem_5rem_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.02]">
        <div className="col-span-2 flex items-center justify-between border-b border-[#173d2b]/15 pb-3"><WindowDots/><span className="text-[0.55rem] font-bold uppercase tracking-[0.15em]">Impact overview</span></div>
        <div className="rounded-xl bg-[#173d2b] p-4 text-white"><p className="text-[0.6rem] uppercase tracking-widest text-white/55">Social value</p><p className="mt-5 text-4xl font-bold tracking-[-0.06em]">3.7×</p><div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/15"><div className="h-full w-4/5 rounded-full bg-acid"/></div></div>
        <div className="flex items-end justify-around rounded-xl bg-white/70 p-4">{['h-8','h-14','h-11','h-20','h-16'].map((height,index)=><div className={`w-4 rounded-t bg-[#54aa68] ${height}`} key={index}/>)}</div>
        <div className="col-span-2 flex items-center justify-between rounded-xl border border-[#173d2b]/10 bg-white/45 px-4 py-3"><span className="text-xs font-bold">Positive outcomes</span><div className="flex -space-x-2">{[1,2,3].map(item=><span className="h-7 w-7 rounded-full border-2 border-[#e9ffd0] bg-[#54aa68]" key={item}/>)}</div></div>
      </div>
    </div>
  )
}

function TokenArt() {
  return (
    <div className="art-grid relative flex h-full min-h-[23rem] items-center justify-center overflow-hidden bg-[#1418ce] p-8 md:min-h-[32rem] md:p-14">
      <div className="absolute h-[19rem] w-[19rem] rounded-full border-[2.2rem] border-[#827cff]/50 md:h-[27rem] md:w-[27rem] md:border-[3rem]" />
      <div className="absolute h-[12rem] w-[12rem] rounded-full border-[0.0625rem] border-white/50 md:h-[19rem] md:w-[19rem]" />
      <div className="relative grid h-36 w-36 rotate-6 place-items-center rounded-[2.4rem] bg-acid shadow-[0_2rem_5rem_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110 md:h-48 md:w-48">
        <div className="grid h-20 w-20 place-items-center rounded-full bg-ink text-4xl font-bold text-white md:h-28 md:w-28 md:text-6xl">E</div>
      </div>
      <div className="absolute bottom-8 left-8 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur md:bottom-12 md:left-12">Secure · Simple · Clear</div>
    </div>
  )
}

function PerfumeArt() {
  return (
    <div className="relative flex h-full min-h-[23rem] items-center justify-center overflow-hidden bg-[#d8b895] p-8 md:min-h-[32rem] md:p-14">
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[#6f3025]" />
      <div className="absolute left-[12%] top-[14%] font-serif text-5xl italic text-[#6f3025]/20 md:text-8xl">essence</div>
      <div className="relative mt-10 transition-transform duration-700 group-hover:-translate-y-2">
        <div className="mx-auto h-16 w-20 rounded-t-lg border border-white/30 bg-[#241a17] shadow-xl" />
        <div className="relative grid h-48 w-40 place-items-center overflow-hidden rounded-[2rem_2rem_1rem_1rem] border border-white/50 bg-[linear-gradient(145deg,rgba(255,255,255,.72),rgba(194,118,74,.6))] shadow-[0_2.2rem_4rem_rgba(54,25,16,0.45)] backdrop-blur md:h-60 md:w-48">
          <div className="grid h-24 w-24 place-items-center rounded-full border border-[#6f3025]/25 bg-[#f0ddc5]/70 text-center text-[#6f3025]"><span className="font-serif text-xl italic leading-none">Maison<br/><b className="font-sans text-[0.55rem] not-italic tracking-[0.2em]">Nº 08</b></span></div>
          <div className="absolute left-4 top-4 h-28 w-5 rotate-[16deg] rounded-full bg-white/30 blur-sm" />
        </div>
      </div>
    </div>
  )
}

export default function ProjectArtwork({ tone }) {
  if (tone === 'violet') return <StretusArt />
  if (tone === 'green') return <SroiArt />
  if (tone === 'blue') return <TokenArt />
  return <PerfumeArt />
}
