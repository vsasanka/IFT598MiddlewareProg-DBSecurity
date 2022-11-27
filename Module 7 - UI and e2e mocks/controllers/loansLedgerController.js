const loansLedger = require('../schemas/loanLedger');
const APIFeatures = require('../dataBaseManager/DBContext');

exports.getAllloansLedgers =   async (req, res) => {
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(loansLedger.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const loansLedgers = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: loansLedgers.length,
      data: {
        loansLedgers
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getloansLedger = async (req, res) => {
  try {
    const loansLedger1 = await loansLedger.findById(req.params.id);
    // loansLedger.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        loansLedger1
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createloansLedger= async  (req, res) => {
  try {
    // const newloansLedger = new loansLedger({})
    // newloansLedger.save()

    const newloansLedger = await loansLedger.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        loansLedger: newloansLedger
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateloansLedger = async (req, res) => {
  try {
    const loansLedger2 = await loansLedger.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        loansLedger2
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteloansLedger = async (req, res) => {
  try {
    await loansLedger.findByIdAndDelete(req.params.id);

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