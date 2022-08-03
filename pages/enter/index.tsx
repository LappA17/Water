import Layout from '../../app/components/Authorization/layout/Layout'
import Button from '../../app/ui/Button/Button'
import Input from '../../app/ui/Input/Input'
import styles from './Enter.module.scss'
import { useState } from 'react'
import { useActions } from '../../app/hooks/useActions'
import { useTypedSelector } from '../../app/hooks/useTypedSelector'
import Loader from '../../app/ui/Loader/Loader'
import Link from 'next/link'

const Index = (): JSX.Element => {
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
						<Link href="/regOrEnter">
							<a className={styles.a}>
								<span className={styles.span}>{'<'}</span>Назад
							</a>
						</Link>
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
				<Button appearance="white" className={styles.button} type="submit">
					Войти
				</Button>
				<Link href="/enter/forgotPassword">
					<a className={styles.forgotPassword}>Забыли пароль?</a>
				</Link>
			</Layout>
		</form>
	)
}

export default Index
