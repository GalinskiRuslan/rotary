import React from 'react'
import { useTranslations } from 'next-intl';
import cl from './style.module.css'
import { JuryCard } from '@/app/components/JuryCard/JuryCard';
import src1 from './imgs/c72715_ca750f753c6340828d092e4add505841~mv2.webp'
import src2 from './imgs/8d26a1_dda06a58575a49c493e3519320d54980~mv2.webp'
import src3 from './imgs/8d26a1_ccd0a74a8e8549e099a623c434fb0ed6~mv2.webp'
import src4 from './imgs/c72715_63f0d4ae02034685891025ac6e8f80ca~mv2.webp'
import src5 from './imgs/c72715_46f661d8167149d4b0e974da8b696bc7~mv2.webp'
import smallSrc from './imgs/small.webp'
export default function cello() {
  const t = useTranslations('cello');
  return (
    <div className={cl.container}>
      <p className={cl.title}>{t('title')}</p>
      <div className={cl.wrapper}>
        <JuryCard props={{ name: t('levon'), isPrec: t('prec'), isLeft: true, text: t('levonText'), src: src1, smallSrc: src1 }} />
        <JuryCard props={{ name: t('denis'), isPrec: '', isLeft: false, text: t('denisText'), src: src2, smallSrc: smallSrc }} />
        <JuryCard props={{ name: t('sergey'), isPrec: '', isLeft: true, text: t('sergeyText'), src: src3, smallSrc: src3 }} />
        <JuryCard props={{ name: t('ermek'), isPrec: '', isLeft: false, text: t('ermekText'), src: src4, smallSrc: src4 }} />
        <JuryCard props={{ name: t('zhenya'), isPrec: '', isLeft: true, text: t('zhenyaText'), src: src5, smallSrc: src5 }} />
      </div>
    </div>
  )
}
