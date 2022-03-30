exports.initialReq = (req,res) => {
    res.render("home");
};

exports.paramImage = (req,res) => {
    let imagenum = req.params.imageNumber;
    if (imagenum == 1) {
        res.render("image1");
    };
    if (imagenum == 2) {
        res.render("image2");
    }
    if (imagenum == 3) {
        res.render("image3")
    }
    if (imagenum == 4) {
        res.render("image4")
    }
    if (imagenum == 5) {
        res.render("image5")
    }
    if (imagenum == 6) {
        res.render("image6")
    }
};