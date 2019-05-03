const UrlsUserController = require('../../controllers/Url/UrlsUserController')
const isAuthenticated = require('../../policies/isAuthenticated')

module.exports = (app) => {
    app.get('/urlsuser',
        isAuthenticated,
        MessagesUserController.index)
    app.post('/urlsuser',
        isAuthenticated,
        MessagesUserController.post)
    app.delete('/urlsuser/:urlUserId',
        isAuthenticated,
        MessagesUserController.delete)
}