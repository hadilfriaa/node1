const Category = require('../models/category.model');

exports.create = (req, res) => {

    const category = new Category({
        title: req.body.title

    });

    category.save()
    .then((data) => {
        res.send({
            category: data,
            created: true
        })
    })
    .catch((err) => {
        console.log(err.message);    
        res.status(500).send({
            error: 500,
            message: err.message || "some error occured while creating category"
        })
    })

}


exports.getAllCategory = (req, res) => {
    Category.find()
    .then(
      (Category) => {
        res.status(200).json(Category);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
};




