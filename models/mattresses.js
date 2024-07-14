const mongoose=require('mongoose')

const mattressesSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    price:String,
    description:String,
    countInStock:Number,
    Shopby:String,
    type:String,
    Discount:String,
    actualPrice:String,
    imageUrl:String
})
module.exports=mongoose.model('Mattresses',mattressesSchema)