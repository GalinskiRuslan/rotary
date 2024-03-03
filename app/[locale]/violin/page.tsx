import { useTranslations } from 'next-intl';
import cl from './style.module.css'
import { JuryCard } from '@/app/components/JuryCard/JuryCard';
import src1 from './imgs/c72715_75f0fc1d9d78447f80aa1abbfbc70987~mv2.webp'
import smallSrc from './imgs/small1.webp'
import src2 from './imgs/c72715_3c647ba26ee747ad940a6c175c4878a9~mv2.webp'
import smallSrc2 from './imgs/small2.webp'
import src3 from './imgs/c72715_d2c9de2b47ac4913aeb013c35b537586~mv2.webp'
import smallSrc3 from './imgs/small3.webp'
import src4 from './imgs/c72715_fdbe4b1cf99e4084a4ee73307cd35e62~mv2.webp'
import smallSrc4 from './imgs/small4.webp'
import src5 from './imgs/c72715_2b96ef618133495a993fcdd5943a8241~mv2.webp'
import smallSrc5 from './imgs/small5.webp'

export default function violin() {
  const t = useTranslations('violin');
  return (
    <div className={cl.container}>
      <p className={cl.title}>{t('title')}</p>
      <div className={cl.wrapper}>
        <JuryCard props={{ name: t('graph'), isPrec: t('prec'), isLeft: true, text: t('graphText'), src: src1, smallSrc: smallSrc }} />
        <JuryCard props={{ name: t('alehandro'), isPrec: '', isLeft: false, text: t('alehandroText'), src: src2, smallSrc: smallSrc2 }} />
        <JuryCard props={{ name: t('bagdat'), isPrec: '', isLeft: true, text: t('bagdatText'), src: src3, smallSrc: smallSrc3 }} />
        <JuryCard props={{ name: t('yan'), isPrec: '', isLeft: false, text: t('yanText'), src: src4, smallSrc: smallSrc4 }} />
        <JuryCard props={{ name: t('gayk'), isPrec: '', isLeft: true, text: t('gaykText'), src: src5, smallSrc: smallSrc5 }} />
      </div>
    </div>
  )
}

