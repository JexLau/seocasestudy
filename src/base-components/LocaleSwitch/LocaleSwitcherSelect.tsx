'use client';
import { PropsWithChildren, useTransition } from 'react';
import { useRouter, usePathname, } from './navigation';

interface LocaleSwitcherSelectProps extends PropsWithChildren {
  defaultValue: string;
  label: string;
}

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: LocaleSwitcherSelectProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const path = usePathname();

  function onSelectChange(event: any) {
    const nextLocale = event.target?.value;
    startTransition(() => {
      // 通过useRouter
      router.replace(path, { locale: nextLocale })
    });
  }

  return (
    <div>
      <label htmlFor="location" className="block bg-[#ffffff03] text-sm font-medium leading-6 text-main-text "></label>
      <p className="sr-only text-main-text">{label}</p>
      <select
        id="location"
        name="location"
        className="block bg-[#ffffff03]  w-full border-0 py-1.5 pl-3 pr-10 text-main-text sm:text-sm sm:leading-6 box-shadow-none focus:outline-none focus:ring-0 focus:border-0"
        disabled={isPending}
        defaultValue={defaultValue}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </div>
  );
}
