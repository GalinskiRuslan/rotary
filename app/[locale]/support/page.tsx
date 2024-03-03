import { Application } from '@/app/modules/Application/Application'
import cl from './style.module.css'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import src from './imgs/d6f698_a13a567bf9e94d3cabf405cffd350310~mv2.webp'
import logo from './imgs/лого stars of rotary.webp'
import part from './imgs/33b933_ee277227f7ff4bc1823439a654e02551~mv2.webp'
import part2 from "./imgs/8d26a1_28f5433c29364777a34c5485e442f7ae~mv2.webp"
import part3 from './imgs/8d26a1_b2a4766cc8d8433f87cb3bb4d78a69d7~mv2.webp'
import part4 from './imgs/Без названия.webp'

const support = () => {
    const t = useTranslations('support');
    return (
        <div className={cl.container}>
            <div className={cl.topBanner}>
                <Image alt='banner' src={src} className={cl.bannerImg} />
                <div className={cl.wrapper}>
                    <Image alt='logo' src={logo} className={cl.logo} />
                    <p className={cl.title}>{t('title')}</p>
                </div>
            </div>
            <div className={cl.wrapper}>
                <p className='main-text'>{t('text')}<b>{t('rotary')}</b></p>
                <div className={cl.obzac}>
                    <p className='main-text'><b>{t('yourSupport')}</b>{t('text2')}</p>
                </div>
                <div className={cl.obzac}>
                    <p className='main-text'>{t('text3')}</p>
                </div>
                <div className={cl.obzac}>
                    <p className='main-text'><b>{t('howcan')}</b></p>
                </div>
                <div className={cl.obzac}>
                    <ol>
                        <li className='main-text'>{t('li1')}</li>
                        <li className='main-text'>{t('li2')}</li>
                        <li className='main-text'>{t('li3')}</li>
                        <li className='main-text'>{t('li4')}</li>
                        <li className='main-text'>{t('li5')}</li>
                        <li className='main-text'>{t('li6')}</li>
                        <li className='main-text'>{t('li7')}</li>
                    </ol>
                </div>
                <p className='main-text'><b>{t('weOpen')}</b></p>
                <a href={t('hrefOnDoc')}><button className={cl.btn}>{t('btn')}</button></a>
                <p className={cl.wePartners}>{t('wePartners')}</p>
                <div className={cl.parnersContainer}>
                    <Image alt='partner' src={part} />
                    <Image alt='partner' src={part2} />
                    <Image alt='partner' src={part3} />
                    <Image alt='partner' src={part4} />
                </div>
            </div>
        </div>
    )
}

export default support;