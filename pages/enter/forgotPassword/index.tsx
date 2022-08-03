import Layout from '../../../app/components/Authorization/layout/Layout'
import styles from '../Enter.module.scss'
import Link from 'next/link'

interface IForgotPassword {
	goBack: () => void
}
const Index = ({ goBack }: IForgotPassword): JSX.Element => {
	return (
		<Layout bgColor="black" title="Забыли пароль">
			<div className={styles.head}>
				<Link href="/enter">
					<span className={styles.back}>
						<a className={styles.a} onClick={goBack}>
							<span className={styles.span}>{'<'}</span>Назад
						</a>
					</span>
				</Link>
				<h1 className={styles.h1}></h1>
				<span></span>
			</div>
			<div
				style={{
					marginTop: 100,
					color: '#ffffff',
					fontSize: 17,
					fontWeight: 400,
				}}
			>
				Пожалуйста напиште нам на эту почту:
			</div>
			<span style={{ color: '#0EB7ED' }}>water-me@gmail.com</span>
			<div
				style={{
					marginTop: 100,
					color: '#ffffff',
					fontSize: 17,
					fontWeight: 400,
				}}
			>
				и мы с вами свяжемся в скором времени
			</div>
		</Layout>
	)
}

export default Index
