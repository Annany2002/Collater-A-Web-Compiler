export default function Home() {
  return (
    <div className="w-full h-[calc(100dvh-60px)] text-slate-300/65 flex justify-center items-center flex-col gap-3">
      <div className="-mt-2 w-1/2 flex flex-col gap-12 justify-center">
        <h1 className="md:text-[7rem] sm:text-[5rem] text-[3.5rem] font-bold text-center">
          Collater
        </h1>
        <p className="text-[1.25rem] sm:text-[1.5rem] text-center">
          Easily compile your HTML, CSS, and JavaScript files together using our
          online compiler, and effortlessly share your creations with your
          community.
        </p>
      </div>
    </div>
  );
}
