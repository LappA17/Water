import Layout from '../../../layout/Layout'
import styles from '../Enter.module.scss'

interface IForgotPassword {
	goBack: () => void
}
const ForgotPassword = ({ goBack }: IForgotPassword): JSX.Element => {
	return (
		<Layout bgColor="black" title="Забыли пароль">
			<div className={styles.head}>
				<span className={styles.back}>
					<a className={styles.a} onClick={goBack}>
						<span className={styles.span}>{'<'}</span>Назад
					</a>
				</span>
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

export default ForgotPassword
