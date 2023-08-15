import { useQuery } from '@tanstack/react-query';
import ItemService from '../../../../services/item.service';

export const useItems = () => {
	const { data, isSuccess } = useQuery(
		['get items'],
		() => ItemService.getAll(),
		{
			select: ({ data }) => data,
		}
	);

	return {
		data,
		isSuccess,
	};
};
