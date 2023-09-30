import mongoose from "mongoose";

export const dataBase = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/myPortofolio"
    ).then(()=>{
        console.log("db Connected");
    }).catch((e)=>{
        console.log(e)
    })
}