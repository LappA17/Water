import { ButtonProps } from './Button.props'
import cn from 'classnames'
import { FC } from 'react'
import styles from './Button.module.scss'

const Button: FC<ButtonProps> = ({ children, appearance, className, ...props }) => {
	return (
		<button
			{...props}
			className={cn(styles.button, className, {
				[styles.white]: appearance == 'white',
				[styles.blue]: appearance == 'blue',
				[styles.green]: appearance == 'green',
			})}
		>
			{children}
		</button>
	)
}

export default Button
