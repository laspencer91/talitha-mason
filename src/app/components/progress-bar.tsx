export function ProgressBar({ percentage }: { percentage: number }) {
  return (
    <div className='w-full h-3 bg-zinc-300'>
      <div style={{ width: `${percentage}%`}} className={`h-full w-[${percentage}%] background-2`}></div>
    </div>
  );
}