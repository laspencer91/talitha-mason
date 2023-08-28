
interface Props {
  position: string;
  company: string;
  lengthOfTime?: string;
  children?: React.ReactNode;
}

export function JobExperience({ position, company, children, lengthOfTime }: Props) {
  return (
    <div className='flex flex-col gap-3 w-full'>
      <div className='font-bold header-2 w-full flex flex-row justify-between'><div>{position}</div>{lengthOfTime ? <div>{lengthOfTime}</div> : null}</div>
      <div className='font-bold text-slate-300'>{company}</div>
      <div className='text-black'>{children}</div>
    </div>
  );
}