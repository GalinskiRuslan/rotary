import cl from './JuryCard.module.css'
import Image from 'next/image';
import ellipse from './imgs/Ellipse 10.png'

export const JuryCard = ({ props }: { props: any }) => {
    const name = props.name;
    const isLeft = props.isLeft;
    const text = props.text;
    const isPrec = props.isPrec;
    const emText = props.emText;
    const boldText = props.boldText;
    const smallSrc = props.smallSrc;
    return (
        <div className={cl.container}>

            <div className={cl.title}>
                <Image alt='0' src={ellipse} className={cl.ellipse} /><p className={cl.name}>{name}</p> <p className={cl.prec}>{isPrec ? isPrec : ''}</p>
            </div>
            <div className={isLeft ? cl.left : cl.right}>
                <div>
                    {emText ? <p className='main-text'><em>{emText}</em></p> : ""}
                    {boldText ? <p style={{ margin: '30px 0' }} className='main-text'><b>{boldText}</b></p> : ""}
                    <p className='main-text'>{text}</p>
                </div>
                <div>
                    <Image alt='photo' src={props.src} className={cl.img} />
                    <Image alt='photo' src={smallSrc} className={cl.smallImg} />
                </div>
            </div>
        </div>
    )
}
