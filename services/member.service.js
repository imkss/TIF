const memberModel = require("../models/memberModel");
const roleModel = require("../models/roleModel");
const AppError = require("../utils/AppError");
const ResponseTemp = require("../utils/ResponseTemp");

class MemberService{

async createMemberService(community,user,role){
    const memberExists = await memberModel.findOne({community,user,role})
    if(memberExists){
        return new ResponseTemp(false,"Already Exist",409)
    }
    else{
        const resp = await memberModel.create({community,user,role})
        if(resp){
            return new ResponseTemp(true,"New Member Created",200,resp)
        }
        else{
            throw new AppError(true,"New Member Could Not Created, Try Again.",400)
        }
    }
}

async removeMemberService(_id){
    const resp  = await memberModel.findOneAndDelete({_id})
    if(resp){
        return new ResponseTemp(true,"Member Removed",200)
    } 
    else{
        throw new AppError(false,"Member Removed, Try Again.",500)
    }

}
}

module.exports = MemberService