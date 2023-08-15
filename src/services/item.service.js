import { $axios } from '../api';

export const ITEMS = '/items';

class ItemService {
	async getAll() {
		return $axios.get(ITEMS);
	}

	async get(id) {
		return $axios.get(`${ITEMS}/${id}`);
	}

	async create(body) {
		return $axios.post(ITEMS, body);
	}

	async update(id, body) {
		return $axios.put(`${ITEMS}/${id}`, body);
	}

	async delete(id) {
		return $axios.delete(`${ITEMS}/${id}`);
	}
}
export default new ItemService();
