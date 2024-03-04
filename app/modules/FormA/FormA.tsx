'use client'
import { useTranslations } from 'next-intl';
import cl from './FormA.module.css'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { PatternFormat } from 'react-number-format';
import axios from 'axios';
import Modal from "react-modal";


interface Props {
    category: string
}
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const FormA = ({ props }: { props: Props }) => {
    const t = useTranslations('applicationForm');
    const [userInfo, setUserIInfo] = useState({ name: "", lastName: "", email: "", country: "", city: "", address: "", zip: "", phone: "", });
    const [competitionInfo, setCompetitionInfo] = useState({ instructor: "", repertoire1: "", repertoire2: "", repertoire3: "", link: "", });
    const [age, setAge] = useState(7);
    const [instrument, setInstrument] = useState('piano');
    const [birthDate, setBirthDate] = useState<Value>(new Date());
    const [modalIsOpen, setIsOpen] = useState(false);
    const [statusReq, setStatusReq] = useState(false);

    const onSubmit = async (e: any) => {
        e.preventDefault()
        const response = await axios({
            method: 'post',
            url: '/api/mailer',
            data: {
                category: props?.category ? props.category : '',
                userInfo,
                competitionInfo,
                age,
                instrument,
                birthDate
            }
        });
        setStatusReq(response.data.success);
        setIsOpen(true)
    }
    function closeModal() {
        setIsOpen(false);
    }
    const customStyles = {
        content: {
            maxWidth: '300px',
            width: "100%",
            left: "50%",
            marginLeft: "-150px",
            maxHeight: '300px',
            top: '30%'
        },
    };
    return (
        <div className={cl.container}>
            <div className={cl.wrapper}>
                <p className={cl.title}>{t('title')}</p>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className={cl.group}>
                        <div className={cl.item}>
                            <label>{t('firstName')} *</label>
                            <input name='name' placeholder={t('enter') + ' ' + t('firstName')} required value={userInfo.name} onChange={(e) => { setUserIInfo({ ...userInfo, name: e.target.value }); }} />
                        </div>
                        <div className={cl.item}>
                            <label>{t('lastName')} *</label>
                            <input name='lastName' placeholder={t('enter') + ' ' + t('lastName')} required value={userInfo.lastName} onChange={(e) => setUserIInfo({ ...userInfo, lastName: e.target.value })} />
                        </div>
                        <div className={cl.item} >
                            <label>{t('email')} *</label>
                            <input name='email' placeholder={t('enter') + ' ' + t('email')} type='email' required value={userInfo.email} onChange={(e) => setUserIInfo({ ...userInfo, email: e.target.value })} />
                        </div>
                    </div>
                    <div className={cl.item}>
                        <label>{t('country')} *</label>
                        <input name='country' placeholder={t('enter') + ' ' + t('country')} type='text' required value={userInfo.country} onChange={(e) => setUserIInfo({ ...userInfo, country: e.target.value })} />
                    </div>
                    <div className={cl.group}>
                        <div className={cl.item}>
                            <label>{t('city')} *</label>
                            <input name='city' placeholder={t('enterP') + ' ' + t('city')} type='text' required value={userInfo.city} onChange={(e) => setUserIInfo({ ...userInfo, city: e.target.value })} />
                        </div>
                        <div className={cl.item}>
                            <label>{t('address')}</label>
                            <input name='address' placeholder={t('enterP') + ' ' + t('address')} type='text' value={userInfo.address} onChange={(e) => setUserIInfo({ ...userInfo, address: e.target.value })} />
                        </div>
                        <div className={cl.item}>
                            <label>{t('zip')}</label>
                            <input name='zip' placeholder={t('enterP') + ' ' + t('zip')} type='text' value={userInfo.zip} onChange={(e) => setUserIInfo({ ...userInfo, zip: e.target.value })} />
                        </div>
                    </div>
                    <div className={cl.group}>
                        <div className={cl.item}>
                            <label>{t('phone')} *</label>
                            <PatternFormat required format="+# (###) ###-##-###" value={userInfo.phone} onChange={(e) => setUserIInfo({ ...userInfo, phone: e.target.value })} />
                        </div>
                        <div className={cl.item}>
                            <label>{t('birth')}</label>
                            <Calendar locale='en' value={birthDate} onChange={(date) => setBirthDate(date)} />
                        </div>
                        <div className={cl.item}>
                            <label>{t('old')}</label>
                            <select value={age} onChange={(e) => {
                                setAge(parseInt(e.target.value));
                            }}>
                                {props?.category === "applicationA" ? <><option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                </> : <><option value={10}>10</option>
                                    <option value={11}>11</option>
                                    <option value={12}>12</option>
                                </>}
                            </select>
                        </div>
                    </div>
                    <div className={cl.group}>
                        <div className={cl.item}>
                            <label>{t('instrument')}</label>
                            <select value={instrument} onChange={(e) => setInstrument(e.target.value)}>
                                <option value='piano'>{t('piano')}</option>
                                <option value='violin'>{t('violin')}</option>
                                <option value='cello'>{t('cello')}</option>
                            </select>
                        </div>
                        <div className={cl.item}>
                            <label>{t('instructor')} *</label>
                            <input required name='instructor' placeholder={t('instructor')} type='text' value={competitionInfo.instructor} onChange={(e) => setCompetitionInfo({ ...competitionInfo, instructor: e.target.value })} />
                        </div>

                    </div>
                    <div className={cl.group}>
                        <div className={cl.item}>
                            <label>{t('repertuar')} *</label>
                            <input required name='repertuar1' placeholder={t('enterP') + ' ' + t('repertuar')} type='text' value={competitionInfo.repertoire1} onChange={(e) => setCompetitionInfo({ ...competitionInfo, repertoire1: e.target.value })} />
                        </div>
                        <div className={cl.item}>
                            <label>{t('time')} *</label>
                            <input name='time1' placeholder={t('enterP') + ' ' + t('time')} type='text' required />
                        </div>
                    </div>
                    <div className={cl.group}>
                        <div className={cl.item}>
                            <label>{t('repertuar')} *</label>
                            <input name='repertuar2' required placeholder={t('enterP') + ' ' + t('repertuar')} type='text' value={competitionInfo.repertoire2} onChange={(e) => setCompetitionInfo({ ...competitionInfo, repertoire2: e.target.value })} />
                        </div>
                        <div className={cl.item}>
                            <label>{t('time')}</label>
                            <input name='time1' placeholder={t('enterP') + ' ' + t('time')} type='text' />
                        </div>
                    </div>
                    <div className={cl.group}>
                        <div className={cl.item}>
                            <label>{t('repertuar')} *</label>
                            <input name='repertuar1' required placeholder={t('enterP') + ' ' + t('repertuar')} type='text' value={competitionInfo.repertoire3} onChange={(e) => setCompetitionInfo({ ...competitionInfo, repertoire3: e.target.value })} />
                        </div>
                        <div className={cl.item}>
                            <label>{t('time')}</label>
                            <input name='time1' placeholder={t('enterP') + ' ' + t('time')} type='text' />
                        </div>
                    </div>
                    <div className={cl.item}>
                        <label>{t('videoLink')} *</label>
                        <input required name='videoLink' placeholder={t('videoLink')} type='text' value={competitionInfo.link} onChange={(e) => setCompetitionInfo({ ...competitionInfo, link: e.target.value })} />
                    </div>
                    <input type='submit' /* disabled={disabled}  */ className={cl.submit} placeholder={t('submit')} />
                </form>
            </div>
            <Modal style={customStyles} isOpen={modalIsOpen} onRequestClose={closeModal}>{statusReq ? t('success') : t('filed')}</Modal>
        </div >
    )
}
