import Layout from '../../../layout/Layout'
import Search from '../../../../../ui/Search/Search'
import styles from './PrivateAccount.module.scss'
import Button from '../../../../../ui/Button/Button'

const PrivateAccount = (): JSX.Element => {
	return (
		<Layout bgColor="white" title="private acc">
			<Button className={styles.button} appearance="white">
				Выйти
			</Button>
			<Search className={styles.search} />
		</Layout>
	)
}

export default PrivateAccount
