import { TopBannerC } from "@/app/components/TopBannerC/TopBannerC";
import { useTranslations } from "next-intl";
import cl from './style.module.css'
import { FormA } from "@/app/modules/FormA/FormA";

export default function applicationA() {
    const t = useTranslations('applicationA');
    return (
        <main>
            <TopBannerC props={{ title: t('bannerTitle'), subTitle: t('bannerSubTitle'), buttonHref: t('href'), buttonText: t('compitationAplication') }} />
            <div className={cl.container}>
                <p className={cl.title}>{t('title')}</p>
                <p className='main-text'>{t('text')}</p>
                <p className='main-text'>{t('text2')}</p>
                <p className='main-text'>{t('text21')}
                    <span> <a href='mailto:stanek2004@mail.ru' className={cl.bold}>stanek2004@mail.ru</a> </span> {t('and')}
                    <span> <a href="mailto:starsofrotary@mail.ru" className={cl.bold}>starsofrotary@mail.ru</a></span> {t('text3')}</p>
                <p className={cl.redTitle}>{t('redTitle')}</p>
                <p className='main-text'>{t('text4')}</p>
                <p className='main-text'>{t('text5')}<span className={cl.bold}> {t('boldtext')}</span></p>
                <p className='main-text'>{t('text6')}<span className={cl.bold}> {t('boldtext2')}</span></p>
                <p className='main-text'>{t('text7')}<span className={cl.bold}> {t('boldtext3')}</span></p>
                <p className='main-text'>{t('text8')}<span className={cl.bold}> {t('boldtext4')}</span></p>
                <p className={cl.titleWithLine}>{t('title2')}</p>
                <ol>
                    <li className="main-text li"><p className="main-text"> {t('text9')} <a> {t('here')}</a></p></li>
                    <li className="main-text li"><p className="main-text"> {t('text10')}</p></li>
                    <li className="main-text li"><p className="main-text"> {t('text11')}</p>
                        <p className="main-text"> {t('text111')}</p>
                        <p className="main-text"> {t('text112')}</p></li>
                    <li className="main-text li"><p className="main-text"> {t('text12')}</p></li>
                    <li className="main-text li"><p className="main-text"> {t('text13')}<span> <a href='mailto:stanek2004@mail.ru' className={cl.bold}>stanek2004@mail.ru</a> </span>{t('and')}<span> <a href="mailto:starsofrotary@mail.ru" className={cl.bold}>starsofrotary@mail.ru</a></span> </p></li>
                </ol>
                <p className='main-text'><span className={cl.bold}>{t('text14')}</span></p><br />
                <p className='main-text'><span className={cl.bold}>{t('text15')}</span></p>
            </div>
            <FormA props={{ category: 'applicationA' }} />

        </main>
    );
}