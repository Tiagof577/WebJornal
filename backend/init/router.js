module.exports = (app) => {

    app.use('/noticias', require('../routes/noticia.routes'));
    app.use('/auth', require('../routes/auth.routes'));
    app.use('/funcionarios', require('../routes/funcionario.routes'));
    app.use('/assinaturas', require('../routes/assinaturas.routes'));
    //app.use('/users/levels', require('../routes/userlevel.routes'));
    app.use('/users', require('../routes/user.routes'));
    
}