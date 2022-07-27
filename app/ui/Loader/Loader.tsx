import React from 'react'
import FavIcon from '../../images/Loader.svg'
import styles from './Loader.module.scss'

const Loader = () => {
	return (
		<div className={styles.loader}>
			<h1>Загрузка...</h1>
			<FavIcon className={styles.water} />
		</div>
	)
}

export default Loader
