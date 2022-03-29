exports.respondwithimage = (req,res) => {
    let paramsImage =req.params.myImage
    res.render("images", { image: paramsImage})
}