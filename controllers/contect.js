const contect = require("../models/contect")

exports.contectCreate = async function (req, res, next) {
    try {
      if (!req.body.mobilenumber || !req.body.name || !req.body.lastname) {
        throw new Error('pleace enter valid fields')
      }
      const data = await contect.create(req.body)
  
      res.status(201).json({  
        message: "user signup successful",
        data: data
      })
    }
    catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
}

exports.contectFind = async function (req, res, next) {
  try {
    const data = await contect.find()

    res.status(200).json({
      status: "success",
      message: "data found successfull",
      data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }

}

exports.contectUpdate =  async function (req, res, next) { 
    try {
      await contect.findByIdAndUpdate(req.query.id , req.body)
  
      res.status(201).json({
        status: "success",
        message: "data update successfull"
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
}

exports.contectDelete = async function (req, res, next) {
    try {
      const data = await contect.findByIdAndDelete(req.query.id)
  
      res.status(200).json({
        status: "success",
        message: "data delete successfull",
        data
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
}

