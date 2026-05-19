export default function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute w-[400px] h-[400px] bg-cyan-400 blur-[120px] rounded-full top-[-100px] left-[-100px] opacity-40 animate-pulse" />
      <div className="absolute w-[500px] h-[500px] bg-sky-500 blur-[140px] rounded-full bottom-[-150px] right-[-150px] opacity-30 animate-pulse" />
      <div className="absolute w-[300px] h-[300px] bg-blue-300 blur-[100px] rounded-full top-[40%] left-[60%] opacity-20 animate-pulse" />
    </div>
  );
}