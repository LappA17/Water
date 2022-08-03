import Layout from '../../../app/components/Authorization/layout/Layout'
import Search from '../../../app/ui/Search/Search'
import styles from './PrivateAccount.module.scss'
import Button from '../../../app/ui/Button/Button'
import { useActions } from '../../../app/hooks/useActions'
import { useTypedSelector } from '../../../app/hooks/useTypedSelector'

const Index = (): JSX.Element => {
	const { logout } = useActions()
	const { user } = useTypedSelector(state => state.auth)

	return (
		<Layout bgColor="white" title="private acc">
			<div className={styles.header}>
				<a href="На страницу профиля пользователя" className={styles.username}>
					Ruslan {/*{user.username}*/}
				</a>
				<div style={{ color: '#000000', marginLeft: 20 }}>{'/'}</div>
				<Button className={styles.button} appearance="white" onClick={logout}>
					Выйти
				</Button>
			</div>
			<Search className={styles.search} />
		</Layout>
	)
}

export default Index
