'use strict';
import express from 'express'
import userRoutes from './userRoutes'
import groupRoutes from './groupRoutes'

let router = express.Router()

router.use('/users',userRoutes)
router.use('/groups',groupRoutes)
router.get('/',(req,res) => res.send('teste'))
router.use((req,res) => {
    res.status(404).send({url: req.originalUrl + ' not found'})
  }); 
export default router