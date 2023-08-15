// import { useNavigate } from 'react-router-dom';
import styles from '../profile/items-list/Item.module.scss';
import Layout from '../../layout/Layout';
import Button from '../../ui/button/Button';
// import Header from '../../layout/header/Header';
import { useItem } from './useItem';
// import NewItem from '../new-item/NewItem';

const Item = () => {
	const { error, isLoading, isSuccess, data } = useItem();

	return (
		<>
			{error && <Alert type="error" text={error} />}
			{isLoading && <Loader />}
			{isSuccess && (
				<>
					<Layout heading={data.title} backLink="/profile">
						<div className={styles.cellwrapper}>
							<h3>username</h3>
							<div className={styles.cell}>{data.username}</div>
							<h3>password</h3>
							<div className={styles.cell}>{data.password}</div>
							<h3>created</h3>
							<div className={styles.cell}>{data.createdAt}</div>
							<h3>updated</h3>
							<div className={styles.cell}>{data.updatedAt}</div>
						</div>
					</Layout>
				</>
			)}
		</>
	);
};
export default Item;
