'use strict';
import express from 'express'
import userController from '../controllers/userController';
let router = express.Router()

/**
 * @api {post} /users/login Login User
 * @apiName LoginUser
 * @apiGroup User
 *
 * @apiParam {String} email User email.
 * @apiParam {String} password User password.
 *
 *@apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWE0ZjIxNDQ2ODhiMjI2M2E1MmY0ZiIsImlhdCI6MTU5NjE1NjkzNiwiZXhwIjoxNTk2MTU3MDIyfQ.3R1o4o2Q_PsEr4wK_x3VmUHw64LpiDrjRdFq0fBOiFw",
 *       id: "5f1a4f2144688b2263a52f4f",
 *       email: "ze@gmail.com",
 *       name: "ze"
 *     }
 */
router.post('/',userController.login)
    
   /*router.route('/users/:userID')
       .get()
        .put()
        .delete(); */

export default router