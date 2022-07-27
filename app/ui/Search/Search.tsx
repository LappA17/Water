import { SearchProps } from './Search.props'
import cn from 'classnames'
import styles from './Search.module.scss'
import GlassIcon from './glass.svg'

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	return (
		<form className={cn(className, styles.search)} {...props} role="search">
			<input className={styles.input} placeholder="Поиск" />
			<button className={styles.button}>
				<GlassIcon />
			</button>
		</form>
	)
}

export default Search
