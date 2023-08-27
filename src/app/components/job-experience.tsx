
interface Props {
  position: string;
  company: string;
  children?: React.ReactNode;
}

export function JobExperience({ position, company, children }: Props) {
  return (
    <div className='flex flex-col gap-3'>
      <div className='font-bold header-2'>{position}</div>
      <div className='font-bold text-slate-300'>{company}</div>
      <div className='text-purple-400'>{children}</div>
    </div>
  );
}