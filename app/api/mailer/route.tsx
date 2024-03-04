import { NextResponse, NextRequest } from 'next/server'
import { json } from 'stream/consumers';
const nodemailer = require('nodemailer');

// Handles POST requests to /api

export async function POST(request: any) {
    const data = await request.json();
    const { category, userInfo, competitionInfo, age, instrument, birthDate } = data;


    const transporter = nodemailer.createTransport({
        host: "smtp.mail.ru",
        port: 465,
        secure: true,
        auth: {
            user: "hiter_man@mail.ru",
            pass: "hP3zTmvyfLasw08ypLtv",
        },
        tls: {
            rejectUnauthorized: false,
        },
    });
    try {
        const sendEmail = async () => {
            await transporter.sendMail({
                from: `hiter_man@mail.ru`,
                to: "hiter_man@mail.ru",
                subject: 'Отклик на сайте Rotary',
                text: "",
                html: `<div><p>Заявка от ${userInfo.name} ${userInfo.lastName}</p>
                        <p>Для категории ${category == 'applicationA' ? 'Для группы А (7-9 лет)' : 'Для группы Б (10-12 лет)'}</p>
                    <p>Страна: ${userInfo.country}</p>
                    <p>Город: ${userInfo.city}</p>
                    <p>Адрес: ${userInfo.address} ${userInfo.zip}</p>
                    <p>Телефон: <a href="tel:${userInfo.phone}">${userInfo.phone}</a></p>
                    <p>Возраст: ${age}</p>
                    <p>Инструмент: ${instrument}</p>
                    <p>Дата рождения: ${birthDate}</p>
                    <p>Репертуар: ${competitionInfo.repertoire1} ${competitionInfo.repertoire2} ${competitionInfo.repertoire3}</p>
                    <p>Ссылка на видео участника: <a href="${competitionInfo.link}">${competitionInfo.link}</a></p>
                
                
                </div>`,
            });
        }
        const res = await sendEmail();
        console.log(res);
        return NextResponse.json({ success: true, message: "Email sent" });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: error });
    }
}
