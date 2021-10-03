import React from 'react'
import styles from './ItemList.module.css'

export default function ItemList(props) {
    return (
        <div className={styles.container}>
            <div><img className ={styles.img} src={`/images/${props.image}`} /></div>
            <div>{props.name}</div>
            <div className={styles.smalltext}>{props.author} </div>
            <div>${props.price}</div>
            <div>Rating: {props.rating}</div>
            <div className={styles.smalltext}>{props.format}</div>
            <div className={styles.smalltext}>{props.delivery}</div>
        </div>
    )
}
