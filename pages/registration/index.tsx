import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import Layout from '../../app/components/Authorization/layout/Layout'
import Button from '../../app/ui/Button/Button'
import Input from '../../app/ui/Input/Input'
import styles from './Registration.module.scss'
import cn from 'classnames'
import axios from 'axios'
import Loader from '../../app/ui/Loader/Loader'
import Link from 'next/link'

const Index = (): JSX.Element => {
	const [loading, setLoading] = useState<boolean>(false)

	const focusRef = useRef<HTMLInputElement | null>(null)
	useEffect(() => {
		focusRef.current?.focus()
	}, [])

	const [form, setForm] = useState({
		name: '',
		mail: '',
		number: '',
		password: '',
		street: '',
		streetNumber: '',
		entrance: '',
		floor: '',
	})
	const [lift, setLift] = useState<boolean>(false)

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const submitData = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
		try {
			e.preventDefault()
			setLoading(true)
			const response = await axios.post('/api/users', {
				...form,
				lift: lift ? 'Есть лифт' : 'Нет лифта',
			})
			console.log(response)
			setLoading(false)
		} catch (e) {
			if (e instanceof Error) {
				alert(`Ошибка${e.message}`)
			}
		} finally {
			setLoading(false)
		}
	}

	return (
		<form onSubmit={submitData}>
			<Layout bgColor="black" title="Index" className={styles.wrapper}>
				{loading && <Loader />}
				<div className={styles.head}>
					<Link href="/regOrEnter">
						<span className={styles.back}>
							<a className={styles.a}>
								<span className={styles.span}>{'<'}</span>Назад
							</a>
						</span>
					</Link>

					<h1 className={styles.h1}>Зарегестрироваться</h1>
					<span></span>
				</div>
				<Input
					className={styles.name}
					placeholder="Как к вам обращаться"
					name="name"
					ref={focusRef}
					onChange={onChange}
					value={form.name}
				/>
				<Input placeholder="Эл. почта" name="mail" onChange={onChange} value={form.mail} />
				<Input
					placeholder="Телефон"
					name="number"
					onChange={onChange}
					value={form.number}
				/>
				<Input
					placeholder="Пароль"
					name="password"
					onChange={onChange}
					value={form.password}
				/>
				<Input
					placeholder="Улица и дом"
					name="street"
					onChange={onChange}
					value={form.street}
				/>
				<div className={styles.addressHead}>
					<Input
						placeholder="Кв/офис"
						className={styles.inputAddress}
						name="streetNumber"
						onChange={onChange}
						value={form.streetNumber}
					/>
					<Input
						placeholder="Подъезд"
						className={styles.inputAddress}
						name="entrance"
						onChange={onChange}
						value={form.entrance}
					/>
					<Input
						placeholder="Этаж"
						className={styles.inputAddress}
						name="floor"
						onChange={onChange}
						value={form.floor}
					/>
				</div>
				<div className={styles.liftHead}>
					<div className={styles.lift}>Есть лифт</div>
					<div></div>
					<div className={styles.container}>
						<label className={styles.switch} htmlFor="checkbox">
							<input type="checkbox" id="checkbox" onChange={() => setLift(!lift)} />
							<div className={cn(styles.slider, styles.round)}></div>
						</label>
					</div>
				</div>
				<div className={styles.hr}></div>
				<Link href="/enter">
					<a>
						<Button appearance="blue" className={styles.button} type="submit">
							Зарегистрироваться
						</Button>
					</a>
				</Link>
			</Layout>
		</form>
	)
}

export default Index
