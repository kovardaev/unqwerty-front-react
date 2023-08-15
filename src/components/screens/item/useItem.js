import { useQuery } from '@tanstack/react-query';
import itemService from '../../../services/item.service';
import { useParams } from 'react-router-dom';

export const useItem = () => {
	const { id } = useParams();

	const { data, isSuccess } = useQuery(
		['get item', id],
		() => itemService.get(id),
		{
			select: ({ data }) => data,
		}
	);

	return {
		data,
		isSuccess,
	};
};
