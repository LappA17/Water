import { FC } from 'react'
import Layout from '../layout/Layout'
import FavIcon from '../../../images/Loader.svg'
import styles from '../Authorization.module.scss'
import Button from '../../../ui/Button/Button'
import ActiveSliderIcon from './Rectangle.svg'
import SliderIcon from './Ellipse 2.1.svg'

interface IFirstSlider {
	nextComponent: () => void
}

const FirstSlider: FC<IFirstSlider> = ({ nextComponent }) => {
	return (
		<Layout bgColor="blue" title="Water me">
			<FavIcon className={styles.icon} />
			<h1 className={styles.h1}>Выбирайте воду нужного качества и вкуса</h1>
			<p className={styles.p}>
				В ассортименте вы можете найти как обычную воду, так и премиальную
			</p>
			<Button appearance="white" className={styles.button} onClick={nextComponent}>
				Дальше
			</Button>
			<div className={styles.iconWrapper}>
				<ActiveSliderIcon />
				<SliderIcon />
				<SliderIcon />
			</div>
		</Layout>
	)
}

export default FirstSlider
