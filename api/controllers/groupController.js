'use strict';
import Group from '../models/groupModel'

let createGroup = async (req,res) => {
    try {
        const group = new Group({
            name:req.body.name,
            owner:req.decoded.id,
            members:[req.decoded.id]
        })
        await group.save()
        res.status(201).json(group)
    } catch(err) {
        res.status(400).json({
            success: false,
            message: err
        });
    }
}


export default {createGroup}