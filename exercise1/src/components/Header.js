import React from 'react'
import styles from './Header.module.css'

export default function Header() {
    return (
        <div className= {styles.headerBackgorund}>
        <div className= {styles.header}>
            <div className={styles.brand}>HELSINGIN SANOMAT</div>
            <div style={{color: 'white'}}>Etusivu</div>
            <div>Uutiset</div>
            <div> Lehdet </div>
            <div>Asiakaspalvelut</div>      
            <div>Tilaa </div>
            <div>Kirjaudu</div>
            <div>Valikko</div>
            
            
            </div>
            
        </div>
    )
}
