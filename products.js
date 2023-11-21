// const url='https://food-boutique.b.goit.study/api/products/categories';
// https://food-boutique.b.goit.study/api/products?keyword=Ac&category=Fresh_Produce&page=1&limit=1
class newApi {
    static #BASE_URL = 'https://food-boutique.b.goit.study/api';
  
    constructor() {
      this.keyword = 'Ac';
      this.category = 'Fresh_Produce';
      this.page = '1';
      this.limit = '1';
    }
  
    getArticles() {
      const END_POINT = '/products?';
      const PARAMS = new URLSearchParams({
        keyword: this.keyword,
        category: this.category,
        page: this.page,
        limit: this.limit,
      });
  
      const url = newApi.#BASE_URL + END_POINT + PARAMS;
    //   return fetch(url).then(res => res.json()).then(data => console.log(data));
      console.log(url);
    }
  }