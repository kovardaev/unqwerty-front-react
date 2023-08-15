import { useNavigate } from 'react-router-dom';
import Button from '../../ui/button/Button';
import Layout from '../../layout/Layout';
import styles from './Home.module.scss';
import Statistics from '../profile/statistics/Statistics';

function Home() {
	const navigate = useNavigate();

	return (
		<Layout>
			<Button clickHandler={() => navigate('/new-item')}>
				+ New login item
			</Button>
			<h1 className={styles.heading}>Forget your qwerty pass!</h1>
			<Statistics />
		</Layout>
	);
}
export default Home;
