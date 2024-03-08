export interface StepCardProps {
  title: string;
  description: string[];
  index: number;
}

export const StepCard = ({ title, description,  index }: StepCardProps) => {
  return <li className="group mb-12 cursor-pointer rounded-lg bg-gray-100 p-5 pb-10 text-center hover:bg-gray-200">
    <div className="flex flex-col items-center">
      <div className="relative top-0 -mt-16 flex-shrink-0">
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-gray-800 text-xl font-semibold text-white">
          {index}
        </div>
      </div>
      <div className="mt-4 group-hover:scale-110">
        <h3 className="text-lg font-semibold leading-6 text-gray-900">{title}</h3>
        {description.map((desc, i) => <p key={i} className="mt-2 text-base leading-6 text-gray-500">
          {desc}
        </p>)}
      </div>
    </div>
  </li>
}