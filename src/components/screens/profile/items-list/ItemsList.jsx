import styles from './Item.module.scss';
import ListItem from './ListItem';
import { useItems } from './useItems';
import Loader from '../../../ui/Loader';
import Alert from '../../../ui/alert/Alert';

const ItemsList = () => {
	const { data, error, isLoading, isSuccess } = useItems();

	return (
		<div
			className="wrapper-inner-page"
			style={{ paddingLeft: 0, paddingRight: 0 }}
		>
			{error && <Alert type="error" text={error} />}
			{isLoading && <Loader />}
			{isSuccess && (
				<div className={styles.wrapper}>
					{data.map((item) => (
						<ListItem key={item.id} item={item} />
					))}
				</div>
			)}

			{isSuccess && data?.length === 0 && (
				<Alert type="warning" text="Items not found" />
			)}
		</div>
	);
};
export default ItemsList;
