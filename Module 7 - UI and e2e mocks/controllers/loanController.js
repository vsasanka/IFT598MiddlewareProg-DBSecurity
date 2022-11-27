const loan = require('../schemas/loan');
const APIFeatures = require('../dataBaseManager/DBContext');

exports.getAllloans =   async (req, res) => {
  
  try {
    
    // EXECUTE QUERY
    const features = new APIFeatures(loan.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const loans = await features.query;
    
    res.status(200).render('allLoans', {// this well render allLoans.pug
      loans
    
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getloan = async (req, res) => {
  try {
    const loan1 = await loan.findById(req.params.id);
    // loan.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        loan1
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createLoan= async  (req, res) => {
  try {
    // const newloan = new loan({})
    // newloan.save()

    const newloan = await loan.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        loan: newloan
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateLoan = async (req, res) => {
  try {
    const loan2 = await loan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        loan2
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteLoan = async (req, res) => {
  try {
    await loan.findByIdAndDelete(req.params.id);

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