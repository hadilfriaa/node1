const Order = require('../models/order.model');

exports.create = (req, res) => {

    const order = new Order({
        total: req.body.total,
        user: req.body.user,
        products: req.body.products
    });
    
    order.save()
      .then((data) => {
        res.send({
          order: data,
          created: true
        });
      })
      .catch((err) => {
        res.status(500).send({
          error: 500,
          message: err.message || 'some error occured while creating Order',
        });
      });
};

exports.getOrder = (req, res) => {
    OOrder.findById(req.params.id)
    .populate('products')
    .populate('user')
    .then(
      (order) => {
        res.status(200).json(order);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };


  exports.getAllOrder = (req, res) => {
    Order.find({
    })
    .populate('products')
    .populate('user')
    .then(
      (order) => {
        res.status(200).json(order);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
};
