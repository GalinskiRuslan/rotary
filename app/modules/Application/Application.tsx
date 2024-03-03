'use client'
import cl from './Application.module.css'
import Image from 'next/image'
import src from './imgs/Group 76.png'
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
export const Application = () => {
    const t = useTranslations('application');
    const router = useRouter();
    return (
        <div className={cl.container}>
            <div className={cl.wrapper}>
                <Image src={src} alt='photo' className={cl.img} />
                <p className={cl.title}>{t('title')}</p>
                <div className={cl.btns}>
                    <button onClick={() => { router.push('/applicationA') }} className={cl.btn}>{t('btn1')}</button>
                    <button onClick={() => { router.push('/applicationB') }} className={cl.btn}>{t('btn2')}</button>
                </div>
            </div>
        </div>
    )
}
