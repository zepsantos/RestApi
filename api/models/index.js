'use strict';
import mongoose from 'mongoose'
import userSchema from './userModel'
mongoose.Promise = global.Promise

export const db = {}

db.mongoose = mongoose

db.user = userSchema
