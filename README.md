# koa-notes
`POST /v1/auth/register` - `email, username, password, passwordConfirmation` - returns `user` object
`POST /v1/auth/login` - `email, password` - returns `user` object
`POST /v1/auth/user` - returns currently authenticated `user` object
`POST /v1/auth/logout`

`GET /v1/user/` - `` - returns `[user]` object
`GET /v1/user/:id` - `` - returns `user` object
`GET /v1/user/:id/notes` - `` - returns `[note]` object
`POST /v1/user/:id/notes` - `title, text` - returns `note` object
