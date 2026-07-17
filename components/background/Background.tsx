export default function Background() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1022] via-[#050816] to-black" />

      <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-pink-500/20 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[160px]" />
    </>
  );
}