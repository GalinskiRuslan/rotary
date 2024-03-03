import { useTranslations } from 'next-intl';
import cl from './FormA.module.css'

export const FormA = () => {
    const t = useTranslations('applicationForm');
    return (
        <div className={cl.container}>
            <div className={cl.wrapper}>
                <p className={cl.title}>{t('title')}</p>
                <form>
                    <div className={cl.group}>
                        <div className={cl.item}>
                            <label>{t('firstName')}</label>
                            <input name='name' placeholder={t('enter') + ' ' + t('firstName')} required />
                        </div>
                        <div className={cl.item}>
                            <label>{t('lastName')}</label>
                            <input name='lastName' placeholder={t('enter') + ' ' + t('lastName')} required />
                        </div>
                        <div className={cl.item} >
                            <label>{t('email')}</label>
                            <input name='email' placeholder={t('enter') + ' ' + t('email')} type='email' required />
                        </div>
                    </div>
                    <div className={cl.item}>
                        <label>{t('country')}</label>
                        <input name='country' placeholder={t('enter') + ' ' + t('country')} type='text' required />
                    </div>
                    <div className={cl.group}>
                        <div className={cl.item}>
                            <label>{t('city')}</label>
                            <input name='city' placeholder={t('enterP') + ' ' + t('city')} type='text' required />
                        </div>
                        <div className={cl.item}>
                            <label>{t('address')}</label>
                            <input name='address' placeholder={t('enterP') + ' ' + t('address')} type='text' required />
                        </div>
                        <div className={cl.item}>
                            <label>{t('zip')}</label>
                            <input name='zip' placeholder={t('enterP') + ' ' + t('zip')} type='text' required />
                        </div>
                    </div>
                    <div className={cl.group}>
                        <div className={cl.item}>
                            <label>{t('phone')}</label>
                            <input name='phone' placeholder={t('enterP') + ' ' + t('phone')} type='text' required />
                        </div>
                        <div className={cl.item}>
                            <label>{t('birth')}</label>
                            <input name='calendar' placeholder={t('enterP') + ' ' + t('birth')} type='text' required />
                        </div>
                        <div className={cl.item}>
                            <label>{t('old')}</label>
                            <select>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                            </select>
                        </div>
                    </div>
                    <div className={cl.group}>
                        <div className={cl.item}>
                            <label>{t('instrument')}</label>
                            <select>
                                <option>{t('piano')}</option>
                                <option>{t('violin')}</option>
                                <option>{t('cello')}</option>
                            </select>
                        </div>
                        <div className={cl.item}>
                            <label>{t('instructor')}</label>
                            <input name='instructor' placeholder={t('instructor')} type='text' />
                        </div>

                    </div>
                    <div className={cl.group}>
                        <div className={cl.item}>
                            <label>{t('repertuar')}</label>
                            <input name='repertuar1' placeholder={t('enterP') + ' ' + t('repertuar')} type='text' />
                        </div>
                        <div className={cl.item}>
                            <label>{t('time')}</label>
                            <input name='time1' placeholder={t('enterP') + ' ' + t('time')} type='text' />
                        </div>
                    </div>
                    <div className={cl.group}>
                        <div className={cl.item}>
                            <label>{t('repertuar')}</label>
                            <input name='repertuar1' placeholder={t('enterP') + ' ' + t('repertuar')} type='text' />
                        </div>
                        <div className={cl.item}>
                            <label>{t('time')}</label>
                            <input name='time1' placeholder={t('enterP') + ' ' + t('time')} type='text' />
                        </div>
                    </div>
                    <div className={cl.group}>
                        <div className={cl.item}>
                            <label>{t('repertuar')}</label>
                            <input name='repertuar1' placeholder={t('enterP') + ' ' + t('repertuar')} type='text' />
                        </div>
                        <div className={cl.item}>
                            <label>{t('time')}</label>
                            <input name='time1' placeholder={t('enterP') + ' ' + t('time')} type='text' />
                        </div>
                    </div>
                    <div className={cl.item}>
                        <label>{t('videoLink')}</label>
                        <input name='videoLink' placeholder={t('videoLink')} type='text' />
                    </div>
                    <input type='submit' className={cl.submit} placeholder={t('submit')} />
                </form>
            </div>
        </div>
    )
}
