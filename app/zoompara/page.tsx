'use client'
import styles from './styles.module.scss'
import Image from 'next/image'
import Image1 from '../../public/image1.webp'
import Image2 from '../../public/image2.webp'
import Image3 from '../../public/image3.webp'
import Image4 from '../../public/image4.webp'
import Image5 from '../../public/image5.webp'
import Image6 from '../../public/image6.webp'
import Image7 from '../../public/image7.webp'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'


export default function ZoomPara () {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: Image1,
            scale: scale4
        },
        {
            src: Image2,
            scale: scale5
        },
        {
            src: Image3,
            scale: scale6
        },
        {
            src: Image4,
            scale: scale5
        },
        {
            src: Image5,
            scale: scale6
        },
        {
            src: Image6,
            scale: scale8
        },
        {
            src: Image7,
            scale: scale9
        }
    ]
    return (

        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {
                    pictures.map(({src, scale}, index ) => {
                        return <motion.div key={index} style={{scale}} className={styles.el}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={src}
                                    fill
                                    alt='image'
                                    placeholder='blur'
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>

    )

}