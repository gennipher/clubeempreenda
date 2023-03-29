export default class Storage {
          static save(key, value) {
            localStorage.setItem(key, value);
          }
        
          static get(key) {
            return localStorage.getItem(key);
          }
}
        