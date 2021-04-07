const Product = require('../models/product.model');
const Category = require('../models/category.model');


exports.create = (req, res) => {
    const product = new Product({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        category: req.body.category,
        favoris: req.body.favoris
    });

    product.save()
    .then((data) => {
      Category.findByIdAndUpdate(req.body.category, { $push: {products:data._id } })
      .then(() => {
                res.send({
                        data: data
                    })
                    .catch((err) => res.send(err));
            });
            res.send({
                product: data,
                created: true
            });
    })
    .catch((err) => {
        console.log(err.message);    
        res.status(500).send({
            error: 500,
            message: err.message || "some error occured while creating product"
        })
    })

}


exports.getAllProduct = (req, res) => {
    Product.find()
    .populate('Category')
    .then(
      (Products) => {
        res.status(200).json(Products);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
};

exports.getProductCategory = (req, res) => {
  Product.find({
    category: req.params.category
  })
  .then(
    (Products) => {
      res.status(200).json(Products);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};


exports.getProduct = (req, res) => {
  Product.findOne({
    _id: req.params.id
  }).then(
    (product) => {
      res.status(200).json(product);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};


exports.modifyProduct = (req, res, next) => {
    const product = new Product({
      _id: req.params.id,
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
      category: req.body.category,
      favoris: req.body.favoris
        });
    Product.updateOne({_id: req.params.id}, product).then(
      () => {
        res.status(201).json({
          message: 'Product updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
};

exports.deleteProduct = (req, res, next) => {
  Product.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Product deleted successfully !'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};