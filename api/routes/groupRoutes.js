'use strict'
import express from 'express'
import groupController from '../controllers/groupController'
import authJwt from '../middleware/authJWT'

let router = express.Router()

/**
 * @api {post} /groups Create a Group
 * @apiName CreateGroup
 * @apiGroup Group
 *
 * @apiParam {String} name Group name.
 *
 *@apiSuccessExample Success-Response:
 *     HTTP/1.1 201 CREATED
 *    {
 *   members: [
 *       "5f1a63f8597c602a4af33b5a"
 *            ],
 *   id: "5f238d5119de8d07919bbdf1",
 *   name: "teste",
 *   owner: "5f1a63f8597c602a4af33b5a",
 *   __v: 0
 *    }
 */
router.post('/',authJwt.checkToken,groupController.createGroup)

export default router