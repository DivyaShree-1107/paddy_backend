module.exports = function(app) {
    const todoList = require('../Controller/Controller');
    const buyform = require('../Controller/Controllerbuy');
    const email = require('../Controller/ControllerEmail');


     const isAuth=require('../Middleware/isAuth')
    
   
     app.route('/Signup')
    .get(todoList.get_a_data)
    .post(todoList.signup)

   
    app.route('/reset')
    .put(todoList.changepassword)

    app.route('/Signin')
    .post(todoList.userSignin);
    
    app.route('/Singup/:SingupId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

    // Route for Buy form a new folder in db

    app.route('/Buyform')
    .get(buyform.get_a_data)
    .post(buyform.update_a_task);

    app.route('/Buyform')
    .post(buyform.get_a_data)
    

    app.route('/Email')
    .post(email.nodemailer1)

};

    
   