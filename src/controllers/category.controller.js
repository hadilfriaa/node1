const Category = require('../models/category.model');
const Product = require('../models/product.model');


exports.create = (req, res) => {

    const category = new Category({
        title: req.body.title,
        products: req.body.products

    });

    category.save()
    .then((data) => {
      Product.findByIdAndUpdate(req.body.product, { category: data._id })
      .then(() => {
				res
					.send({
						data: data
					})
					.catch((err) => res.send(err));
			});
			res.send({
				category: data,
				created: true
			});
    })
    .catch((err) => {
        console.log(err.message);    
        res.status(500).send({
            error: 500,
            message: err.message || "some error occured while creating category"
        })
    })

}

exports.getProductInCategory = (req, res) => {
  Category.findById(req.params.id)
  .populate('products') 
  .then((data) => {
    if (!data) {
      return res.status(404).send({
        message: `Can't find Category id ${req.params.id}`
      });
    }
    res.send(data)
    })
  .catch(
  (error) => {
    console.log(error)
    return res.send({error: error})
      
  }
);
};


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

exports.modifyCategory = (req, res, next) => {
  const category = new Category({
    _id: req.params.id,
    title: req.body.title,
    product: req.body.product
      });
  Category.updateOne({_id: req.params.id}, category)
  .then(
    (data) => {
      res.status(201).json({
        message: 'Category updated successfully!',
        category: data
      });
    }
  )
  .catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteCategory = (req, res, next) => {
  Category.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Category deleted successfully !'
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

