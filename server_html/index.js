const express = require("express"), 
    app =express(),
    homeController= require("./controllers/homecontroller");


app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
    express.urlencoded({
        extended: false
    })
);

app.get('/', (req,res)=>{
    res.render('home')
});

app.get("/home", homeController.initialReq);
app.get("/images/:imageNumber", homeController.paramImage);

app.listen(app.get("port"), ()=>{
    console.log(`Server running at http://localhost:${app.get("port")}`);
});
