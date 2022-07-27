import Layout from '../../layout/Layout'
import Button from '../../../../ui/Button/Button'
import Input from '../../../../ui/Input/Input'
import styles from './Enter.module.scss'
import { useState } from 'react'
import { useActions } from '../../../../hooks/useActions'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import Loader from '../../../../ui/Loader/Loader'

interface IEnter {
	goBack: () => void
	forgotPassword: () => void
	goToPrivateAccount: () => void
}

const Enter = ({ goBack, forgotPassword, goToPrivateAccount }: IEnter): JSX.Element => {
	const { login } = useActions()
	const { error, isLoading, isAuth } = useTypedSelector(state => state.auth)
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const submit = () => {
		login(username, password)
	}

	const errorMessage = () => {
		return <div style={{ color: 'red', fontSize: 30 }}>Неверный Логин или Пароль</div>
	}

	return (
		<form onSubmit={submit}>
			{error && <div style={{ color: 'red' }}>{error}</div>}
			{isLoading && <Loader />}
			<Layout bgColor="black" title="Логин">
				<div className={styles.head}>
					<span className={styles.back}>
						<a className={styles.a} onClick={goBack}>
							<span className={styles.span}>{'<'}</span>Назад
						</a>
					</span>
					<h1 className={styles.h1}>Войти</h1>
					<span></span>
				</div>
				<Input
					type="login"
					placeholder="Эл. почта или телефон"
					className={styles.loginInput}
					onChange={e => setUsername(e.target.value)}
				/>
				<Input
					type="password"
					placeholder="Пароль"
					className={styles.passwordInput}
					onChange={e => setPassword(e.target.value)}
				/>
				<Button
					appearance="white"
					className={styles.button}
					type="submit"
					onClick={isAuth ? goToPrivateAccount : errorMessage}
				>
					Войти
				</Button>
				<a className={styles.forgotPassword} onClick={forgotPassword}>
					Забыли пароль?
				</a>
			</Layout>
		</form>
	)
}

export default Enter
