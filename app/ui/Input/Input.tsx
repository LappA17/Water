import { ForwardedRef, forwardRef } from 'react'
import { InputProps } from './InputProps'
import styles from './Input.module.scss'
import cn from 'classnames'

const Input = forwardRef(
	({ className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
		return <input ref={ref} {...props} className={cn(styles.input, className, {})} />
	}
)

export default Input
