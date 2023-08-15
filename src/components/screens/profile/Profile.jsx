import cn from 'clsx';
import stylesLayout from '../../layout/Layout.module.scss';
import Header from '../../layout/header/Header';
import styles from './Profile.module.scss';
import Statistics from './statistics/Statistics';
import { useProfile } from './useProfile';
import Loader from '../../ui/Loader';
import ItemsList from './items-list/itemsList';

const Profile = () => {
	const { data, isLoading } = useProfile();

	return (
		<div className="">
			<div className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}>
				<Header />

				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img
								src="/images/user.svg"
								alt="Profile"
								height="56"
								draggable={false}
							/>
							<h1 className={stylesLayout.heading}>
								{data?.email}
							</h1>
						</>
					)}
				</div>
				<Statistics />
				<ItemsList />
			</div>
		</div>
	);
};
export default Profile;
