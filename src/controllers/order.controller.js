const Order = require('../models/order.model');
const User = require('../models/user.model');




exports.create = (req, res) => {

    const order = new Order({
        total: req.body.total,
        user: req.body.user,
        products: req.body.products,
        status: req.body.status,
        date: req.body.date
    });
    
    order.save()
      .then((data) => {
        User.findByIdAndUpdate(req.body.user, { $push: {orders:data._id } }).then(() => {
          res
            .send({
              data: data
            })
            .catch((err) => res.send(err));
        });
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
    Order.findById(req.params.id)
    .populate('users')
    .populate('product')
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
    Order.find()
    .populate('users')
    .populate('product')
    .then(
      (orders) => {
        console.log("je suis la valid order");
        res.status(200).json(orders);
      }
    ).catch(
      (error) => {
        console.log("je suis dans erreur");
        res.status(404).json({
          error: error
        });
      }
    );
};

exports.modifyOrder = (req, res, next) => {
  const order = new Order({
    _id: req.params.id,
    status: req.body.status
      });
  Order.updateOne({_id: req.params.id}, order).then(
    () => {
      res.status(201).json({
        message: 'Order updated successfully!'
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