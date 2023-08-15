import styles from './Field.module.scss';

const Field = ({ register, name, options, error, value,  ...rest }) => {
	return (
		<div style={{ marginBottom: '1rem' }}>
			<input
				{...register(name, options)}
				{...rest}
				className={styles.input}
				value={value}
			/>
			{error && <div className="error">{error}</div>}
		</div>
	);
};
export default Field;
