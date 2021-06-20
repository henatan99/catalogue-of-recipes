import http from './baseHttp';

class recipesApiService {
  getAll() {
    return http.get('/categories.php');
  }

  get(id) {
    return http.get(`/lookup.php?i=${id}`);
  }

  findByName(name) {
    return http.get(`/search.php?s=${name}`);
  }
}

export default new recipesApiService();
