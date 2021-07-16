const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/productdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
.then(()=>console.log('Conexión a la base de datos establecida'))
.catch(err => console.log('Error con db', err));
