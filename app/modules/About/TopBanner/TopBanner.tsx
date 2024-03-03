import cl from "./TopBanner.module.css"
import Image from "next/image"
import { useTranslations } from "next-intl"
import img from './imgs/Frame 1 (1).png'
import img2 from './imgs/Vector (1).png'
import img3 from './imgs/Vector (2).png'
import img4 from './imgs/Vector (3).png'
import img5 from './imgs/Vector (4).png'

export const TopBanner = () => {
    const t = useTranslations('about-top');
    return (
        <div className={cl.container}>
            <div className={cl.wrapper}>
                <div className={cl.leftContent}>
                    <h3 className={cl.title}>{t('title')}</h3>
                    <p className={cl.subtitle}>{t('text')}</p>
                    <p className={cl.subtitle}>{t('text2')}</p>
                </div>
                <div className={cl.rightContent}>
                    <Image alt="child" src={img} className={cl.img} />
                    <p className={cl.firstInnerText}>{t('flowertext')}</p>
                    <p className={cl.secondInnerText}>{t('flowertext2')}</p>
                    <p className={cl.thirdInnerText}>{t('flowertext3')}</p>
                    <p className={cl.fourthInnerText}>{t('flowertext4')}</p>
                </div>
            </div> 
            <Image alt="child" src={img2} className={cl.img2} />
            <Image alt="child" src={img3} className={cl.img3} />
            <Image alt="child" src={img4} className={cl.img4} />
            <Image alt="child" src={img5} className={cl.img5} />
        </div>
    )
}
