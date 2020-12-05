const { response } = require('express');
const mercadopago = require ('mercadopago')

mercadopago.configure({
    access_token : 'APP_USR-6317427424180639-042414-47e969706991d3a442922b0702a0da44-469485398',

    integrator_id : 'dev_24c65fb163bf11ea96500242ac130004'

})

module.exports = {
    home: (req, res) => {
        return res.render("index");
    },
    detail: (req, res) => {
        return res.render("detail", { ...req.query });
    
},

comprar: (req, res) => {

    let preference = {

        items: [
            {
                id: '1',

                picture_url: 'https://taller-mercadopago-sofi.herokuapp.com/images/products/disruptor.jpg',

                tittle: 'Nombre del producto',

                description: 'descripcion del producto',

                unit_price: 999,

                quantity: 3
            }
        ]
    }

    mercadopago.preferences.create (preference).then (response => {

        global.init_point = response.body.init_point

        res.render ('confirm')
    }).catch (error => {

        console.log (error)

        res.send ('error')
    })
    
}
}