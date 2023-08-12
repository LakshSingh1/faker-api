const {faker} = require('@faker-js/faker')

module.exports = {
    User: createUser = () => {
        const newUser = {
            name: faker.person.fullName(),
        }
        return newUser;
    },
    Company: createCompany = () => {
        const newCompany = {
            name: faker.company.name(),
        }
        return newCompany
    }
}