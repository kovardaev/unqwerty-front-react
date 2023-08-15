import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import Alert from '../../ui/alert/Alert';
import Layout from '../../layout/Layout';
import ItemService from '../../../services/item.service';
import Loader from '../../ui/Loader';
import Field from '../../ui/field/Field';
import Button from '../../ui/button/Button';

const NewItem = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		mode: 'onChange',
	});

	const { isSuccess, error, isLoading, mutate } = useMutation(
		['create item'],
		(body) => ItemService.create(body),
		{
			onSuccess: () => {
				reset();
			},
		}
	);

	const onSubmit = (data) => {
		mutate(data);
	};

	return (
		<>
			<Layout
				heading="Create new item"
				backLink="/"
			>
				
			<div className="wrapper-inner-page">
				{error && <Alert type="error" text={error} />}
				{isSuccess && <Alert text="Item created" />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.title?.message}
						name="title"
						register={register}
						options={{
							required: 'Title is required',
						}}
						type="text"
						placeholder="Title"
					/>
					<Field
						error={errors?.username?.message}
						name="username"
						register={register}
						options={{
							required: 'Username is required',
						}}
						type="text"
						placeholder="Username"
					/>
					<Field
						error={errors?.password?.message}
						name="password"
						register={register}
						options={{
							required: 'Password is required',
						}}
						type="text"
						placeholder="Password"
					/>
					<Button>Create</Button>
				</form>
			</div>
			</Layout>
		</>
	);
};
export default NewItem;
