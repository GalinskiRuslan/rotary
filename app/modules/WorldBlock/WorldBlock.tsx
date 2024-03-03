import { useTranslations } from 'next-intl';
import cl from './WorldBlock.module.css'
import src from './imgs/Group 54.png'
import Image from 'next/image'

export const WorldBlock = () => {
    const t = useTranslations('worldBlock');
    return (
        <div className={cl.container}>
            <div className={cl.wrapper}>
                <Image alt='world' src={src} className={cl.worldImg} />
                <div><p className={cl.text}>{t('text')}</p></div>
            </div>
        </div>
    )
}
