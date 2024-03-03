'use client'
import React, { useEffect, useState } from 'react'
import { LangCharger } from '../LaungeCharger/LaungeCharger'
import { useTranslations } from 'next-intl';
import cl from './Header.module.css'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import src from './Group.png'
import src2 from './Group 5.png'
import { Link } from '../LaungeCharger/NavigateLang';


export const Header = () => {
    const t = useTranslations('header');
    const path = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [isOpen]);
    return (<>
        <div className={isOpen ? cl.container + ' ' + cl.active : cl.container}>
            <Image alt='logo' src={src} />
            <Link onClick={() => setIsOpen(false)} href='https://rotary-club-almaty.kz/'><Image alt='logo2' src={src2} /></Link>
            <Link onClick={() => setIsOpen(false)} className={path.length < 4 ? cl.activeLink : cl.link} href='/'>{t("home")}</Link>
            <Link onClick={() => setIsOpen(false)} className={path.includes('/about') ? cl.activeLink : cl.link} href='/about'>{t("about")}</Link>
            <div className={path.includes('/application') ? cl.activeLink : cl.link} onMouseLeave={() => setVisible(false)} onMouseEnter={() => setVisible(true)}>
                <p>{t("contestant")}</p>
                <div className={visible ? cl.visible : cl.unvisible}>
                    <Link onClick={() => setIsOpen(false)} className={path.includes('/applicationA') ? cl.activeLink : cl.link} href='applicationA'>{t("applicationA")}</Link>
                    <Link onClick={() => setIsOpen(false)} className={path.includes('/applicationB') ? cl.activeLink : cl.link} href='applicationB'>{t("applicationB")}</Link>
                </div>
            </div>
            <div className={path.includes('/piano') || path.includes('/violin') || path.includes('/cello') ? cl.activeLink : cl.link} onMouseLeave={() => setVisible2(false)} onMouseEnter={() => setVisible2(true)}>
                <p>{t("jury")}</p>
                <div className={visible2 ? cl.visible : cl.unvisible}>
                    <Link onClick={() => setIsOpen(false)} className={path.includes('/piano') ? cl.activeLink : cl.link} href='piano'>{t("piano")}</Link>
                    <Link onClick={() => setIsOpen(false)} className={path.includes('/violin') ? cl.activeLink : cl.link} href='violin'>{t("violin")}</Link>
                    <Link onClick={() => setIsOpen(false)} className={path.includes('/cello') ? cl.activeLink : cl.link} href='cello'>{t("cello")}</Link>
                </div>
            </div>
            <Link onClick={() => setIsOpen(false)} className={path.includes('/schedule') ? cl.activeLink : cl.link} href='/schedule'>{t("schedule")}</Link>
            <Link onClick={() => setIsOpen(false)} className={path.includes('/support') ? cl.activeLink : cl.link} href='/support'>{t("support")}</Link>
            <LangCharger />
        </div>
        <button className={cl.burgerBtn} onClick={() => setIsOpen(!isOpen)}><span></span></button>
    </>
    )
}
