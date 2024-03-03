'use client'
import { Link } from "./NavigateLang"
import { usePathname } from "next/navigation";
import cl from "./LaungeCharger.module.css"
export const LangCharger = () => {
    const path = usePathname();
    return (
        <div className={cl.container}>
            {/* <Link className={path.includes('/kz') ? cl.activeLang : isOpen ? cl.openLangLink : cl.langLink} href='/' locale='kz' onClick={() => { path.includes('/kz') && !isOpen ? setIsOpen(true) : setIsOpen(false) }}>KZ</Link> */}
            <Link className={path.includes('/ru') ? cl.activeLang : cl.langLink} href={path.includes('ru') ? path.split('/ru')[1] == '' ? '/' : path.split('/ru')[1] : path.includes('en') ? path.split('/en')[1] == '' ? '/' : path.split('/en')[1] : path} locale='ru'>RU</Link>
            <Link className={path.includes('/en') ? cl.activeLang : cl.langLink} href={path.includes('ru') ? path.split('/ru')[1] == '' ? '/' : path.split('/ru')[1] : path.includes('en') ? path.split('/en')[1] == '' ? '/' : path.split('/en')[1] : path} locale='en'>EN</Link>
            {/* <Link className={path.includes('/ch') ? cl.activeLang : isOpen ? cl.openLangLink : cl.langLink} href='/' locale='ch' onClick={() => { path.includes('/ch') && !isOpen ? setIsOpen(true) : setIsOpen(false) }}>CH</Link> */}
        </div>
    )
}