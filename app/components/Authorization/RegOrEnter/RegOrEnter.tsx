import Layout from '../layout/Layout'
import FavIcon from '../../../images/Loader.svg'
import Button from '../../../ui/Button/Button'
import styles from './RegOrEnter.module.scss'

interface IRegOrEnter {
	nextComponent: () => void
	openEnterForm: () => void
}
const RegOrEnter = ({ nextComponent, openEnterForm }: IRegOrEnter): JSX.Element => {
	return (
		<Layout bgColor="black" title="Authorization">
			<FavIcon className={styles.icon} />
			<Button appearance="blue" className={styles.buttonReg} onClick={nextComponent}>
				Зарегистрироваться
			</Button>
			<div className={styles.hr} />
			<Button appearance="white" className={styles.buttonEnter} onClick={openEnterForm}>
				Войти
			</Button>
		</Layout>
	)
}

export default RegOrEnter
