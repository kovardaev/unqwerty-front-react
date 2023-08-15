import { useNavigate } from 'react-router-dom';
import styles from './Item.module.scss';
import { ImBin } from 'react-icons/im';

const ListItem = ({ item }) => {
	const navigate = useNavigate();

	return (
		<div className={styles.item}>
			<button
				aria-label="Create new item"
				onClick={() => navigate(`/items/${item.id}`)}
			>
				<span>{item.title}</span>
			</button>

			<button
				aria-label="Delete"
				onClick={() => {
					navigate(isAuth ? backLink : '/auth');
				}}
			>
				{/* <ImBin fill="red" fontSize={25} /> */}
			</button>
			
		</div>
	);
};
export default ListItem;
