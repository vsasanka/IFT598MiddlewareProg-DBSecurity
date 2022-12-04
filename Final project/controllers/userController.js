const User = require('./../models/userModel');

exports.getAllUsers = async (req, res, next) => {
  const users = await User.find();
  // SEND RESPONSE
  // res.status(200).json({
  //   status: 'success',
  //   results: users.length,
  //   data: {
  //     users
  //   }
  // });

  res.status(200).render('allUsers', {// this well render allUsers.pug
    users,
    authenticated: true
  });
};

exports.createUser = async (req, res) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.password // this needs to be changed
  });

  res.status(201).json({
    status: 'success',
    data: newUser
   
  });
};
exports.deleteMe = async (req, res) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });
  res.status(204).json({
    status: 'success',
    data: null
  });
};




exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    // loan.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        user
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};


// exports.getUser = (req, res) => {

//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined!'
//   });
// };



exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        user
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};


// exports.updateUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined!'
//   });
// };






exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

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

// exports.deleteUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined!'
//   });
// };
