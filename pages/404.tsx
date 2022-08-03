import Layout from '../app/components/Authorization/layout/Layout'
import Link from 'next/link'

export function Error404(): JSX.Element {
	return (
		<Layout bgColor="white" title="Ошибка">
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					flexDirection: 'column',
				}}
			>
				<div style={{ color: '#20BCFF', marginTop: 200 }}>
					<Link href="/regOrEnter">
						<a>{'<'}Назад</a>
					</Link>
				</div>
				<h1>Ошибка 404</h1>
				<div></div>
			</div>
		</Layout>
	)
}

export default Error404
