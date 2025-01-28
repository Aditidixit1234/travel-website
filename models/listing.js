const mongoose=require("mongoose");
const Schema= mongoose.Schema;
const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
      type:String,
      default:
        "https://www.google.com/search?sca_esv=3743d8ab6bf34ebe&sca_upv=1&q=beautiful+gallery+wallpaper+images&uds=ADvngMiVDleurOc74o53FBQ4Ga8lkI9sWAi7GWYAGI49af7m-NpB_BnLj011AeCJhA7EBuGzc0wE4brjdxbky24zURiQvjtOySJ5BXMvKbnbpK7PYXG_ZJoEyB3_ebQuoa0ID2ohCzoMir3yqueOi_ggjl5wg6pcGH2NzrPCd5XSioeWDdzmaB4hwJKOR3mfLEA9QYxBTNiHpfcGJrql8v8p3yqBYX8K6UbQe0mnX4Wu1alYZhYPD3BrZc5k8quLo78of5ps6heIMUhgQNeLoGNd0kSpue5jHeSWkloDZLfKJ9ga2zx4Rk-pAmCjBGbEv5maSEtPxZeSjoLxJyJgzS-8RGL4W9tyFvgWfsRM7f2RjAwlCGynSzs&udm=2&prmd=ivsnmbtz&sa=X&ved=2ahUKEwjsrpXxw8yGAxUZSGwGHWJxBXQQtKgLegQIFhAB&biw=1280&bih=585&dpr=1.5#vhid=Ack-J9CrGkL0BM&vssid=mosaic",
      set:(v)=>v === ""? "https://www.google.com/search?sca_esv=3743d8ab6bf34ebe&sca_upv=1&q=beautiful+gallery+wallpaper+images&uds=ADvngMiVDleurOc74o53FBQ4Ga8lkI9sWAi7GWYAGI49af7m-NpB_BnLj011AeCJhA7EBuGzc0wE4brjdxbky24zURiQvjtOySJ5BXMvKbnbpK7PYXG_ZJoEyB3_ebQuoa0ID2ohCzoMir3yqueOi_ggjl5wg6pcGH2NzrPCd5XSioeWDdzmaB4hwJKOR3mfLEA9QYxBTNiHpfcGJrql8v8p3yqBYX8K6UbQe0mnX4Wu1alYZhYPD3BrZc5k8quLo78of5ps6heIMUhgQNeLoGNd0kSpue5jHeSWkloDZLfKJ9ga2zx4Rk-pAmCjBGbEv5maSEtPxZeSjoLxJyJgzS-8RGL4W9tyFvgWfsRM7f2RjAwlCGynSzs&udm=2&prmd=ivsnmbtz&sa=X&ved=2ahUKEwjsrpXxw8yGAxUZSGwGHWJxBXQQtKgLegQIFhAB&biw=1280&bih=585&dpr=1.5#vhid=Ack-J9CrGkL0BM&vssid=mosaic":v,
    },
    price:Number,
    location:String,
    country:String,
});
const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;
