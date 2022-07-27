import { FC } from 'react'
import Layout from '../layout/Layout'
import FavIcon from '../../../images/Loader.svg'
import styles from '../Authorization.module.scss'
import Button from '../../../ui/Button/Button'
import SliderIcon from './Ellipse 2.1.svg'
import ActiveSliderIcon from './Rectangle.svg'

interface ISecondSlider {
	nextComponent: () => void
}

const SecondSlider: FC<ISecondSlider> = ({ nextComponent }) => {
	return (
		<Layout bgColor="blue" title="Water me">
			<FavIcon className={styles.icon} />
			<h1 className={styles.h1}>Доставим тогда, когда вам удобно</h1>
			<p className={styles.p}>Выбирайте удобное время когда и куда вам привезти воду</p>
			<Button appearance="white" className={styles.button} onClick={nextComponent}>
				Дальше
			</Button>
			<div className={styles.iconWrapper}>
				<SliderIcon />
				<ActiveSliderIcon />
				<SliderIcon />
			</div>
		</Layout>
	)
}

export default SecondSlider
