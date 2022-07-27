import { useState } from 'react'
import FirstSlider from './Preloader/FirstSlider'
import SecondSlider from './Preloader/SecondSlider'
import ThirdSlider from './Preloader/ThirdSlider'
import RegOrEnter from './RegOrEnter/RegOrEnter'
import Registration from './RegOrEnter/Registration/Registration'
import Enter from './RegOrEnter/Enter/Enter'
import ForgotPassword from './RegOrEnter/Enter/ForgotPassword/ForgotPassword'
import PrivateAccount from './RegOrEnter/Enter/PrivateAccount/PrivateAccount'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const Authorization = (): JSX.Element => {
	const { isAuth } = useTypedSelector(state => state.auth)
	const [step, setStep] = useState<number>(1)

	const nextComponent = () => {
		setStep((state: number) => state + 1)
	}

	const openEnterForm = () => {
		setStep((state: number) => (state = 6))
	}

	const forgotPassword = () => {
		setStep((state: number) => (state = 7))
	}

	const goBack = () => {
		setStep((state: number) => (state = 4))
	}

	const goToPrivateAccount = () => {
		setStep((state: number) => (state = 8))
	}

	return (
		<>
			{isAuth ? step === 8 : step === 4}
			{step === 1 && <FirstSlider nextComponent={nextComponent} />}
			{step === 2 && <SecondSlider nextComponent={nextComponent} />}
			{step === 3 && <ThirdSlider nextComponent={nextComponent} />}
			{step === 4 && (
				<RegOrEnter nextComponent={nextComponent} openEnterForm={openEnterForm} />
			)}
			{step === 5 && <Registration goBack={goBack} goToPrivateAccount={goToPrivateAccount} />}
			{step === 6 && (
				<Enter
					goBack={goBack}
					forgotPassword={forgotPassword}
					goToPrivateAccount={goToPrivateAccount}
				/>
			)}
			{step === 7 && <ForgotPassword goBack={goBack} />}
			{step === 8 && <PrivateAccount />}
		</>
	)
}

export default Authorization
