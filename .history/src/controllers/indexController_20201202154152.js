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
        payment_methods: {
            excluded_payement_methods: [
                {id: 'visa'}
            ],
            excluded_payment_types: [
                {id: 'atm'}
            ],
            installments: 12
        },
        items: [
            {
                id: '1',
                picture_url: 'https://taller-mercadopago-sofi.herokuapp.com/images/products/jordan.jpg',
                tittle: 'Nombre del producto',
                unit_price: 999,
                quantity: 3
            }
        ]
    }
    
}
}