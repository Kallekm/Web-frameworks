import React from 'react'
import styles from './SideSection.module.css'

export default function SideSection(props) {
    return (
        <div className = {styles.container}>
            
            <span className={styles.number}>{props.num}</span> <span className={styles.header}> {props.main}:</span> {props.text}
        </div>
    )
}
