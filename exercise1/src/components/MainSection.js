import React from 'react'
import styles from './MainSection.module.css'
export default function MainSection(props) {
    return (
        <div>
            <span className={styles.redtext}>{props.redball}</span>
            <span className={styles.heading}>{props.otsikko}</span>
            <span className={styles.bluetext}>{props.isoteksti}</span>
            <span className={styles.normaltext}>{props.pikkuteksti}</span>
            
        </div>
    )
}
