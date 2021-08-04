'use strict';
import express from 'express'
import verifySignUp from '../middleware/verifySignUp'
import userController from '../controllers/userController.js'
import authRoutes from './authRoutes'

let router = express.Router()


router.use('/login',authRoutes)

/**
 * @api {post} /users Register User
 * @apiName RegisterUser
 * @apiGroup User
 *
 * @apiParam {String} name User Name.
 * @apiParam {String} email User Unique email.
 * @apiParam {String} password User password.
 *
 *@apiSuccessExample Success-Response:
 *     HTTP/1.1 201 CREATED
 *     {
 *       success: true,
 *       message: "Account created"
 *     }
 */
  router.post('/',verifySignUp,(userController.signUp))
    
   /*router.route('/users/:userID')
       .get()
        .put()
        .delete(); */

export default router