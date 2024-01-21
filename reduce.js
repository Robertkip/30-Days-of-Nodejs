//Array REduce Transformation
//integer array(nums)
//reducer function(fn)
//initial value(init)

//Please solve it without using the built-in Array.reduce method.

const express = require('express');
const app = express();
const port = 3000;
const Shopify = require('shopify-api-node');

const shopify = new Shopify({
});

shopify.order
  .list({ limit: 5 })
  .then((orders) => console.log(orders))
  .catch((err) => console.error(err));

app.get('/', (req, res) => {
    res.send('Welcome to my Shopify App')
});



app.listen(port, () => {
    console.log(`Server is currently running on port ${port}`)
});

