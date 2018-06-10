class Github {
    constructor() {
        this.client_id = 'b9fe3d05e66176890930';
        this.client_secret = '59056652aeba7e3a780dfd985fe16140654e6aff';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}