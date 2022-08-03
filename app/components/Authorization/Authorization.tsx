import { useState } from 'react'
import FirstSlider from './Preloader/FirstSlider'
import SecondSlider from './Preloader/SecondSlider'
import ThirdSlider from './Preloader/ThirdSlider'

const Authorization = (): JSX.Element => {
	const [step, setStep] = useState<number>(1)

	const nextComponent = () => {
		setStep((state: number) => state + 1)
	}

	return (
		<>
			{step === 1 && <FirstSlider nextComponent={nextComponent} />}
			{step === 2 && <SecondSlider nextComponent={nextComponent} />}
			{step === 3 && <ThirdSlider nextComponent={nextComponent} />}
		</>
	)
}

export default Authorization
