import Head from 'next/head'
import useDarkMode from '../utils/useDarkMode'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun,faMoon } from '@fortawesome/free-solid-svg-icons'
export default function Home() {
    const [ colorTheme, setTheme ] = useDarkMode();
    return(
        <>
            <Head>
                <title>Pravith B A</title>
            </Head>
            <div className='text-3xl font-bold underline'>
                Hello world
                <nav className={styles.navBar}>
                    <div onClick={(e)=>{
                        e.preventDefault()
                        if(colorTheme === 'light')
                            setTheme('light')
                        else
                            setTheme('dark')
                    }} >
                        <FontAwesomeIcon icon={(colorTheme === 'light')?faSun:faMoon}></FontAwesomeIcon>
                    </div>
                </nav>
            </div>
        </>
    )
}
