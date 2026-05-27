const { model }      = require("mongoose");
const { UserSchema } = require("../Schemas/UserSchema"); 
const UsersModel = model("user", UserSchema);

module.exports =  UsersModel;