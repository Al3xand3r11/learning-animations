'use client'
import styles from './page.module.scss'
import ZoomPara from '../zoompara/page'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

export default function First () {

    useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])

    return (
        <main className={styles.main}>
            <ZoomPara/>
        </main>
    )   
}