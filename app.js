const vault = require('node-vault')({ 
    endpoint: process.env.VAULT_ADDR,
    token: process.env.VAULT_TOKEN,
});

vault.read('secret/data/foo')
    .then((result) => console.log(result.data.data))
    .catch(console.error);