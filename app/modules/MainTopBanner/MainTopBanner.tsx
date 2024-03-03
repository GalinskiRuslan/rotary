'use client'
import cl from "./MainTopBanner.module.css"
import Image from "next/image"
import { useTranslations } from "next-intl"
import img from './imgs/слой 03.png'
import img2 from './imgs/Vector (1).png'
import img3 from './imgs/Vector (2).png'
import img4 from './imgs/Vector (3).png'
import img5 from './imgs/Vector (4).png'
import img6 from './imgs/Vector.png'
import { useRouter } from "next/navigation"

export const MainTopBanner = () => {
    const t = useTranslations('mainBanner');
    const router = useRouter();
    return (
        <div className={cl.container}>
            <div className={cl.wrapper}>
                <div className={cl.leftContent}>
                    <h3 className={cl.title}>{t('title')}</h3>
                    <p className={cl.subtitle}>{t('music')}</p>
                    <p className={cl.smallText}>{t('rotary')}</p>
                    <p className={cl.fatText}>{t('district')}</p>
                    <button className={cl.btn} onClick={() => { router.push('https://www.youtube.com/watch?v=egAzhtRVISA&ab_channel=%D0%AE%D0%BB%D0%B8%D1%8F%D0%9A%D1%83%D0%B7%D0%BD%D0%B5%D1%86%D0%BE%D0%B2%D0%B0') }}>{t('button')}</button>
                </div>
                <div className={cl.rightContent}>
                    <Image alt="child" src={img} className={cl.img} />

                </div>
            </div>
            <Image alt="child" src={img2} className={cl.img2} />
            <Image alt="child" src={img3} className={cl.img3} />
            <Image alt="child" src={img4} className={cl.img4} />
            <Image alt="child" src={img5} className={cl.img5} />
        </div>
    )
}
