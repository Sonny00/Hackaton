const STORAGE_NAME = "user";

export default class UserStorage {
    static store(user) {
        localStorage.setItem(STORAGE_NAME, JSON.stringify(user));
    }
    static load() {
        const userStringified = localStorage.getItem(STORAGE_NAME);
        if (userStringified !== null) {
            return JSON.parse(userStringified);
        } else {
            return null;
        }
    }
    static clear() {
        localStorage.removeItem(STORAGE_NAME);
    }
}
