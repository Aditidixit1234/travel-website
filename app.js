const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing=require("./models/listing.js");
const path=require("path");
const MONGO_URL="mongodb://127.0.0.1:27017/hellos2";
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
main().then(()=>{
    console.log("connected successfully");
})

.catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
}
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

app.get("/",(req,res)=>{
    res.send("hello");
});


app.get("/listings",async(req,res)=>{
    const allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});
});
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
})

app.get("/listings/:id",async(req,res)=>{
    let {id}=req.params;
   const listing=await Listing.findById(id);
   res.render("listings/show.ejs",{listing});
})
app.post("/listings",async(req,res)=>{
    const newListing=new Listing(req.body.listing);
    await newListing.save();
 res.redirect("/listings");
});

app.get("/listings/:id/edit",async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/edit.ejs",{listing}); 
});
app.put("/listings/:id",async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
})



app.get("/testing",async (req,res)=>{
    let sampleListing = new Listing({
        title:"my new home",
        description:"hello",
        price:1200,
        location:"bombay",
        country:"hello world",
    });
   await sampleListing.save();
 console.log("sample was saved");
 res.send("successfull");

});
app.listen(3000,()=>{
    console.log("server is listening");
});