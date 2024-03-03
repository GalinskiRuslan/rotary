'use client'
import cl from "./TopBannerC.module.css"
import Image from "next/image"
import img from './imgs/слой 03.png'
import img2 from './imgs/Vector (1).png'
import img3 from './imgs/Vector (2).png'
import img4 from './imgs/Vector (3).png'
import img5 from './imgs/Vector (4).png'
import { useRouter } from "next/navigation"
import Link from "next/link"

export const TopBannerC = ({ props }: { props: any }) => {
    const title = props.title;
    const subTitle = props.subTitle;
    const buttonHref = props.buttonHref;
    const buttonText = props.buttonText;

    const router = useRouter();
    return (
        <div className={cl.container}>
            <div className={cl.wrapper}>
                <div className={cl.leftContent}>
                    <h3 className={cl.title}>{title}</h3>
                    <p className={cl.subtitle}>{subTitle}</p>
                    {buttonText ? <Link href={buttonHref} className={cl.btn}>{buttonText}</Link> : ""}
                </div>
                <div className={cl.rightContent}>
                    <Image alt="child" src={img} className={cl.img} />
                </div>
            </div>
            <Image alt="child" src={img2} className={cl.img2} />
            <Image alt="child" src={img3} className={cl.img3} />
            <Image alt="child" src={img4} className={cl.img4} />
            <Image alt="child" src={img5} className={cl.img5} />
        </div>
    )
}
