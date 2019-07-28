const axios = require('axios')

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => {
        return null
    },
    method: () => console.log("hello World"),
    checkValue: (x) => {
        return x
    },
    createUser: () => {
        const USER = {
            firstName: "Arvind",
            lastName: "Dhindsa"
        }
        return USER;
    },
    fetchUser: () => {
        axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(res => {
                return res.data
            })
    }

}
functions.fetchUser();

module.exports = functions