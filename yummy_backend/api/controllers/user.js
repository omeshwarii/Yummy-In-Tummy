const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Menu = require("../models/menu");


exports.get_menu = (req,res,next)=>{
  Menu.find().exec().then((menu)=>{
    res.status(200).json({menu:menu})
  }).catch((err)=>{
    res.status(500).json({message:err})
  })
}

