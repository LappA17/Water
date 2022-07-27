import Head from 'next/head'

import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, useEffect, useState } from 'react'

import FavIcon from '../../../images/Loader.svg'
import Loader from '../../../ui/Loader/Loader'

import styles from './Layout.module.scss'
import cn from 'classnames'

interface ILayout extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string
	children: ReactNode
	bgColor: 'blue' | 'black' | 'white'
}

const Layout: FC<ILayout> = ({ children, title, bgColor, className, ...props }) => {
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)

		const timeout = setTimeout(() => {
			setIsLoading(false)
		}, 200)

		return () => {
			clearTimeout(timeout)
		}
	}, [])

	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="description" content="Water-shop app" />
				<link rel="shortcut icon" href={FavIcon.src} type="image/svg" />

				<meta name="theme-color" content="#1BBEF2" />
				<meta name="msapplication-navbutton-color" content="#1BBEF2" />
				<meta name="apple-mobile-web-app-status-bar-style" content="#1BBEF2" />
			</Head>

			<div
				className={cn(styles.wrapper, className, {
					[styles.bgBlue]: bgColor === 'blue',
					[styles.bgBlack]: bgColor === 'black',
					[styles.bgWhite]: bgColor === 'white',
				})}
				{...props}
			>
				{isLoading ? <Loader /> : children}
			</div>
		</div>
	)
}

export default Layout
