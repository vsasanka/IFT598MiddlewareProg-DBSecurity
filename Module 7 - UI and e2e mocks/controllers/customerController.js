const customer = require('../schemas/customerSchema');
const APIFeatures = require('../dataBaseManager/DBContext');

exports.getAllcustomers = async (req, res) => {
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(customer.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const customers = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: customers.length,
      data: {
        customers
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getcustomer = async (req, res) => {
  try {
    const customer1 = await customer.findById(req.params.id);
    // customer.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        customer1
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createCustomer = async (req, res) => {
  try {
    // const newcustomer = new customer({})
    // newcustomer.save()

    console.log("Request body is: " + JSON.stringify(req.body));

    const newcustomer = await customer.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        customer: newcustomer
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const customer2 = await customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        customer2
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    await customer.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};