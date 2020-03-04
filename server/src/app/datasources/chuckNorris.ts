import { RESTDataSource } from 'apollo-datasource-rest';

interface IJokeByCategoryParams {
    category: string
}

class ChuckNorrisAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.chucknorris.io/jokes/';
    }

    async getAllCategories() {
        return await this.get('categories');
    }

    async getJokeByCategory({ category }: IJokeByCategoryParams) {
        return await this.get('random', { category });
    }
}

export default ChuckNorrisAPI
