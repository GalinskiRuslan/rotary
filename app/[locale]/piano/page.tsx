import { useTranslations } from 'next-intl';
import cl from './style.module.css'
import { JuryCard } from '@/app/components/JuryCard/JuryCard';
import src1 from './imgs/c72715_30b02d0fdeb74a72ba2ab9f8bc6620a2~mv2.webp'
import smallSrc from './imgs/smallelen.webp'
import src2 from './imgs/c72715_78f73accd7454e75bef5e4488642f76f~mv2.webp'
import smallSrc2 from "./imgs/smalla.webp"
import src3 from './imgs/c72715_289d1a02a11a4ed3a789aa7be14a57b9~mv2.webp'
import smallSrc3 from './imgs/small3.webp'
import src4 from './imgs/c72715_56d4bed717614554b025376694c4e266~mv2.webp'
import smallSrc4 from './imgs/small4.webp'
import src5 from './imgs/c72715_94d27cb988ef491cb8b244cd5a41da08~mv2.webp'
import smallSrc5 from './imgs/small5.webp'
export default function piano() {
    const t = useTranslations('piano');
    return (
        <div className={cl.container}>
            <p className={cl.title}>{t('title')}</p>
            <div className={cl.wrapper}>
                <JuryCard props={{ name: t('eleon'), isPrec: t('prec'), emText: t('eleonTextEm'), boldText: t('eleonBoldText'), isLeft: true, text: t('eleonText'), src: src1, smallSrc: smallSrc }} />
                <JuryCard props={{ name: t('gulzhan'), isPrec: '', isLeft: false, text: t('gulzhanText'), src: src2, smallSrc: smallSrc2 }} />
                <JuryCard props={{ name: t('karisha'), isPrec: '', isLeft: true, emText: t('kadishaEmText'), boldText: t('kadishaBText'), text: t('kadishaText'), src: src3, smallSrc: smallSrc3 }} />
                <JuryCard props={{ name: t('suzann'), isPrec: '', isLeft: false, text: t('suzannText'), src: src4, smallSrc: smallSrc4 }} />
                <JuryCard props={{ name: t('vagan'), isPrec: '', isLeft: true, text: t('vaganText'), src: src5, smallSrc: smallSrc5 }} />
            </div>

        </div>
    )
}
