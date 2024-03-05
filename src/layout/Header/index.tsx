import Link from "next/link";
import { Container } from "../Container";
import { Logo } from "../../base-components/Logo";
import { NavLink } from "../../base-components/NavLink";
import { LocaleSwitcher } from "../../base-components/LocaleSwitch";
import { useTranslations } from "next-intl";
import { MobileNavigation } from "./MobileNavigation";

export function Header({ downloadText, href }: { downloadText?: string, href?: string }) {
  const t = useTranslations("Common")
  const nav = [
    {
      title: "Home",
      href: "/"
    },
  ]
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#ffffff03] py-6 mix-blend-difference shadow md:backdrop-blur">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo className="h-8 w-auto" />
            </Link>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:flex md:gap-x-6">
              {nav.map((item, index) => (
                <NavLink key={index} href={item.href}>{item.title}</NavLink>
              ))}
            </div>
            <LocaleSwitcher />
            <div className="-mr-1 md:hidden">
              <MobileNavigation nav={nav}>
              </MobileNavigation>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}