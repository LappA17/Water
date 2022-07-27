import { FormEvent, useEffect, useRef, useState } from 'react'
import Layout from '../../layout/Layout'
import Button from '../../../../ui/Button/Button'
import Input from '../../../../ui/Input/Input'
import styles from './Registration.module.scss'
import cn from 'classnames'
import axios from 'axios'
import Loader from '../../../../ui/Loader/Loader'

interface IRegistration {
	goBack: () => void
	goToPrivateAccount: () => void
}

const Registration = ({ goBack, goToPrivateAccount }: IRegistration): JSX.Element => {
	const [name, setName] = useState<string>('')
	const [mail, setMail] = useState<string>('')
	const [number, setNumber] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [street, setStreet] = useState<string>('')
	const [streetNumber, setStreetNumber] = useState<string>('')
	const [entrance, setEntrance] = useState<string>('')
	const [floor, setFloor] = useState<string>('')
	const [lift, setLift] = useState<boolean>(false)

	const [loading, setLoading] = useState<boolean>(false)

	const focusRef = useRef<HTMLInputElement | null>(null)

	useEffect(() => {
		focusRef.current?.focus()
	}, [])

	const submitData = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
		try {
			e.preventDefault()
			setLoading(true)
			const response = await axios.post('/api/users', {
				name: name,
				mail: mail,
				number: number,
				password: password,
				street: street,
				streetNumber: streetNumber,
				entrance: entrance,
				floor: floor,
				lift: lift ? 'Лифт есть' : 'Лифта нет',
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

	console.log(lift)

	return (
		<form onSubmit={submitData}>
			<Layout bgColor="black" title="Registration" className={styles.wrapper}>
				{loading && <Loader />}
				<div className={styles.head}>
					<span className={styles.back}>
						<a className={styles.a} onClick={goBack}>
							<span className={styles.span}>{'<'}</span>Назад
						</a>
					</span>
					<h1 className={styles.h1}>Зарегестрироваться</h1>
					<span></span>
				</div>
				<Input
					className={styles.name}
					placeholder="Как к вам обращаться"
					onChange={e => setName(e.target.value)}
					ref={focusRef}
				/>
				<Input placeholder="Эл. почта" onChange={e => setMail(e.target.value)} />
				<Input placeholder="Телефон" onChange={e => setNumber(e.target.value)} />
				<Input placeholder="Пароль" onChange={e => setPassword(e.target.value)} />
				<Input placeholder="Улица и дом" onChange={e => setStreet(e.target.value)} />
				<div className={styles.addressHead}>
					<Input
						placeholder="Кв/офис"
						className={styles.inputAddress}
						onChange={e => setStreetNumber(e.target.value)}
					/>
					<Input
						placeholder="Подъезд"
						className={styles.inputAddress}
						onChange={e => setEntrance(e.target.value)}
					/>
					<Input
						placeholder="Этаж"
						className={styles.inputAddress}
						onChange={e => setFloor(e.target.value)}
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

				<Button
					appearance="blue"
					className={styles.button}
					type="submit"
					onClick={goToPrivateAccount}
				>
					Зарегистрироваться
				</Button>
			</Layout>
		</form>
	)
}

export default Registration
