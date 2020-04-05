const PORT = 5000;
const express       = require('express')
const app           = express()
const bodyparser    = require('body-parser')                      // untuk nge-post data di postman
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
  
var arrprod=[
    {
        id:1,
        nama:'popok hokage',
        harga: 100000,
        description: "siapkah bayi anda menjadi hokage selanjutnya?"
    },
    {
        id:2,
        nama:'popok ngesot',
        harga: 50000,
        description: "Dijamin bayi anda ngesot abis"
    },
    {
        id:3,
        nama:'popok yang tertukar',
        harga: 125000,
        description: "popok tiada banding"
    }
]

app.get('/products',(req,res)=>{                                        //kalau di browser sdh pasti get.
    // var newarrprod=arrprod.filter((val,index)=>{
    //     val.includes
    // })
    res.status(200).send(arrprod)
})
app.listen(PORT,()=>console.log('berhasil jalan di port '+ PORT))
console.log('tes')
// app.get('products',(req,res)=>{
//     console.log(req.query)
//     val.nama.toLowerCase().includes(req.query.nama.toLowerCase())
// })