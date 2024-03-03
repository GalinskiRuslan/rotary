
import cl from './Footer.module.css'
import Image from 'next/image'
import src from './imgs/Group.png'
import { useTranslations } from 'next-intl';
import { Link } from '../LaungeCharger/NavigateLang';
import insta from './imgs/instagram 1.svg'
import fb from './imgs/2021_Facebook_icon.svg.png'
import youTube from './imgs/YouTube.svg'
import tel from './imgs/phone-call 2.png'


export const Footer = () => {
    const t = useTranslations('footer');
    return (
        <div className={cl.container}>
            <div className={cl.wrapper}>
                <a href='/'><Image alt='icon' src={src} /></a>
                <div className={cl.items}>
                    <div>
                        <p className={cl.title}>{t('navigation')}</p>
                        <Link href='/'><p className={cl.text}>{t('home')}</p></Link>
                        <Link href='/about'><p className={cl.text}>{t('about')}</p></Link>
                        <Link href='applicationA'><p className={cl.text}>{t("applicationA")}</p></Link>
                        <Link href='applicationB'><p className={cl.text}>{t("applicationB")}</p></Link>
                        <Link href='piano'><p className={cl.text}>{t("piano")}</p></Link>
                        <Link href='violin'><p className={cl.text}>{t("violin")}</p></Link>
                        <Link href='cello'><p className={cl.text}>{t("cello")}</p></Link>
                        <Link href='/schedule'><p className={cl.text}>{t('schedule')}</p></Link>
                        <Link href='/support'><p className={cl.text}>{t('support')}</p></Link>
                    </div>
                    <div>
                        <p className={cl.title}>{t('contacts')}</p>
                        <a href='https://www.instagram.com/stars_of_rotary/?igsh=MXJtYm05ZWthemw4aA%3D%3D&utm_source=qr'><div className={cl.item}><Image className={cl.icons} alt='insta' src={insta} /><p>stars of rotary</p></div></a>
                        <a href='https://www.facebook.com/share/r/rkCU9LXL6Mp2FPr2/?mibextid=roAVj8'><div className={cl.item}><Image className={cl.icons} alt='fb' src={fb} /><p>stars of rotary</p></div></a>
                        <a href='https://www.youtube.com/@StarsRotary'><div className={cl.item}><Image className={cl.iconsYou} alt='youtube' src={youTube} /></div></a>
                        <a href='tel:+77776661331'><div className={cl.item}><Image className={cl.icons} alt='youtube' src={tel} /><p>+7 777 666 13 31</p></div></a>
                    </div>
                    <div>

                    </div>
                </div>

            </div>
        </div>
    )
}
