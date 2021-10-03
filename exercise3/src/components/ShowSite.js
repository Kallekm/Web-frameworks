import React from 'react'
import styles from './ShowSite.module.css'
import ItemList from './ItemList'

export default function ShowSite(props) {
    return (
        <div>
            <div className={styles.grid}>
            {
            props.items.map(item => <ItemList key={item.id}{...item}/>)
            }
        </div>
        </div>
    )
}
