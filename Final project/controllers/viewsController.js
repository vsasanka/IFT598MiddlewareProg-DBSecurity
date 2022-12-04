const { isLoggedIn } = require("./authController");


exports.getLandingPAge = async (req, res) => {
    res.status(200).render('overview', {
      title: `Over View`
    
    });
  };

  exports.getAllLoans = async (req, res) => {
    console.log("getAllLOans"+JSON.stringify(req))
    if(!isLoggedIn(req,res)){
      res.render('login');
    }
    else{
      res.status(200).render('allLoans', {
        title: `Over View of Loans`,
        authenticated: true,
        customerName: req.user._id
      });
    }
  };
  
  exports.getCourse = async (req, res) => {
    res.status(200).render('Course', {
      title: `Get Course`
    });
  };
  exports.createNewCourse = async (req, res) => {
    res.status(200).render('newCourse', {
      title: `Create New Course`
    });
  };
  
  exports.getSignInForm = (req, res) => {
    res.status(200).render('signup', {
      title: 'Sign in New User'
    });
  };
  exports.getLoginForm = (req, res) => {
    res.status(200).render('login', {
      title: 'Log into your account'
    });
  };
  exports.getNewLoanPage = (req,res) => {
    res.status(201).render('createNewLoan',{
      title: 'Create a new loan'
    });
  }
  
  