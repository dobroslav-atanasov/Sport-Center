const userService = {
    load: function () {
        return fetch(`http://localhost:3333/api/user`)
            .then(res => res.json());
    }
};

export default userService;