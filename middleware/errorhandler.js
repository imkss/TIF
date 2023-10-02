const AppError = require("../utils/AppError");

// Passing four parameter for error detecting by Node
const errorHandler = (error, req, res, next) =>{

    if(error instanceof AppError){
      
        return res.status(error?.errorCode).json({
            success:error?.success,
            errorStatus:error?.errorStatus,
            message:error?.message,
            data:error?.data
        })
    }
     
    else{
        return res.status(500).json({
            success:false,
            error:true,
            message:error.message || "Opps, Something Went Wrong!\n Don't Worry, We're Fixing It.",
        })
    }
}
module.exports = errorHandler;