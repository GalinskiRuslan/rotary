import cl from './Concept2Block.module.css'
import Image from 'next/image'
import src from './imgs/EmptyName 43.webp'
import src2 from './imgs/Rectangle 21.png'
import src3 from './imgs/Rectangle 21 (1).png'
import { useTranslations } from 'next-intl'
import { Link } from '@/app/components/LaungeCharger/NavigateLang'

export const Concept2Block = () => {
    const t = useTranslations('concept2');
    return (
        <div className={cl.container}>
            <div className={cl.wrapper}>
                <p className={cl.title}>{t('title')}</p>
                <div className={cl.items}>
                    <Link href='/about#sec'>
                        <div className={cl.item}>
                            <Image src={src} alt='img' className={cl.itemImg} />
                            <p className={cl.goldText}>{t('consciousness')}</p>
                        </div>
                    </Link>
                    <Link href='/about#sec'>
                        <div className={cl.item}>
                            <Image src={src2} alt='img' className={cl.itemImg} />
                            <p className={cl.goldText}>{t('empathy')}</p>
                        </div>
                    </Link>
                    <Link href='/about#sec'>
                        <div className={cl.item}>
                            <Image src={src3} alt='img' className={cl.itemImg} />
                            <p className={cl.goldText}>{t('expression')}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
