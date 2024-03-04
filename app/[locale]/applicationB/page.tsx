import { TopBannerC } from "@/app/components/TopBannerC/TopBannerC";
import { useTranslations } from "next-intl";
import cl from './style.module.css'
import { FormA } from "@/app/modules/FormA/FormA";
import Image from "next/image";
import src from "./imgs/Ellipse 10.png"

export default function applicationB() {
    const t = useTranslations('applicationB');
    return (
        <main>
            <TopBannerC props={{ title: t('bannerTitle'), subTitle: t('bannerSubTitle'), buttonHref: t('href'), buttonText: t('compitationAplication') }} />
            <div className={cl.container}>
                <p className={cl.title}>{t('title')}</p>
                <div className={cl.step}>
                    <Image className={cl.circle} alt="0" src={src} /><p className='main-text'><span className={cl.bold}> {t('firstStep')}</span>{t('firstStepText')}
                        <span> <a href='mailto:stanek2004@mail.ru' className={cl.bold}>stanek2004@mail.ru</a> </span> {t('and')}
                        <span> <a href="mailto:starsofrotary@mail.ru" className={cl.bold}>starsofrotary@mail.ru</a></span>
                        {t('firstStepText2')}
                    </p>
                </div>
                <div className={cl.step}>
                    <Image className={cl.circle} alt="0" src={src} />
                    <p className='main-text'><span className={cl.bold}> {t('secondStep')}</span></p>
                </div>
                <p className='main-text'><span className={cl.bold}>{t('pianists')}</span></p>
                <ol>
                    <li className="main-text li">{t('pianistsText')}</li>
                    <li className="main-text li">{t('pianistsText2')}</li>
                    <li className="main-text li">{t('pianistsText3')}</li>
                </ol>
                <div className={cl.step}>
                    <p className='main-text'><span className={cl.bold}>{t('violin')}</span></p>
                </div>
                <ol>
                    <li className="main-text li">{t('violinText')}</li>
                    <li className="main-text li">{t('violinText2')}</li>
                </ol>
                <div className={cl.step}>
                    <p className='main-text'><span className={cl.bold}>{t('timePieca')}</span></p>
                </div>
                <p className="main-text">{t('goNext')}</p>
                <div className={cl.step}>
                    <Image className={cl.circle} alt="0" src={src} />
                    <p className='main-text'><span className={cl.bold}> {t('therdStep')}</span></p>
                </div>
                <div className={cl.step}>
                    <p className='main-text'><span className={cl.bold}> {t('importantForViolin')}</span></p>
                </div>
                <p className='main-text'> {t('forViolinText')}</p>
                <p className={cl.redTitle}>{t('presents')}</p>
                <ol>
                    <li className="main-text li"><p className="main-text"><span className={cl.bold}> {t('presentsText')} </span>{t('presentsText2')}</p></li>
                    <li className="main-text li"><p className="main-text"><span className={cl.bold}> {t('presentsText3')} </span>{t('presentsText4')}</p></li>
                    <li className="main-text li"><p className="main-text"><span className={cl.bold}> {t('presentsText5')} </span>{t('presentsText6')}</p></li>
                    <li className="main-text li"><p className="main-text"><span className={cl.bold}> {t('presentsText7')} </span>{t('presentsText8')}</p></li>
                    <li className="main-text li"><p className="main-text">{t('presentsText9')}</p></li>
                    <li className="main-text li"><p className="main-text">{t('presentsText10')}</p></li>
                    <li className="main-text li"><p className="main-text">{t('presentsText11')}<span className={cl.bold}> {t('presentsText12')}</span></p></li>
                    <li className="main-text li"><p className="main-text">{t('presentsText13')}</p></li>
                </ol>
                <p className={cl.jury}>{t('verdict')}</p>
                <div className={cl.step}>
                    <Image className={cl.circle} alt="0" src={src} />
                    <p className='main-text'><span className={cl.bold}> {t('order')}</span></p>
                </div>
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
            <FormA props={{ category: 'applicationB' }} />

        </main >
    );
}