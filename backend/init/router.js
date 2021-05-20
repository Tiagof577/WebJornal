module.exports = (app) => {

    //app.use('/', require("../routes/home.routes"));
    app.use('/noticias', require('../routes/noticia.routes'));
    app.use('/auth', require('../routes/auth.routes'));
    app.use('/funcionarios', require('../routes/funcionario.routes'));
    //app.use('/quizzes', require('../routes/quiz.routes'));
    //app.use('/users/levels', require('../routes/userlevel.routes'));
    app.use('/users', require('../routes/user.routes'));
    //app.use('/emails', require('../routes/email.routes'));
    
}