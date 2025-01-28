const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require(".init/listing.js");
const MONGO_URL="mongodb://127.0.0.1:27017/hellos2";

main().then(()=>{
    console.log("connected successfully");
})
.catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
}
const initDB=async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initialized");

};
initDB();