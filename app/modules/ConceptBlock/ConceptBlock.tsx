import { useTranslations } from 'next-intl';
import cl from './ConceptBlock.module.css'
import Image from 'next/image';
import img2 from './imgs/Vector (1).png'
import img3 from './imgs/Vector (2).png'
import img4 from './imgs/Vector (3).png'
import img5 from './imgs/Vector (4).png'
import img6 from './imgs/Vector.png'

export const ConceptBlock = () => {
    const t = useTranslations('conceptMain');
    return (
        <div className={cl.container}>
            <div className={cl.item}>
                <div>
                    <p className={cl.text}>{t('firstText')}</p>
                    <p className={cl.text}>{t('secText')}</p>
                    <Image alt="child" src={img4} className={cl.img4} />
                    <Image alt="child" src={img5} className={cl.img5} />
                </div>
                <video className={cl.video} autoPlay muted src='/Stars of Rotary v2 subtitles v2.mp4' controls></video>
            </div>
        </div>
    )
}
