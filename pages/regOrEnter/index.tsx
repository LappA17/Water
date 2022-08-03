import Layout from '../../app/components/Authorization/layout/Layout'
import FavIcon from '../../app/images/Loader.svg'
import Button from '../../app/ui/Button/Button'
import styles from './RegOrEnter.module.scss'
import Link from 'next/link'

const Index = (): JSX.Element => {
	return (
		<Layout bgColor="black" title="Authorization">
			<FavIcon className={styles.icon} />
			<Link href="/registration">
				<a>
					<Button appearance="blue" className={styles.buttonReg}>
						Зарегистрироваться
					</Button>
				</a>
			</Link>

			<div className={styles.hr} />
			<Link href="/enter">
				<a>
					<Button appearance="white" className={styles.buttonEnter}>
						Войти
					</Button>
				</a>
			</Link>
		</Layout>
	)
}

export default Index
