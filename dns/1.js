/**
 * Created by peter on 14-8-10.
 */
var dns = require('dns');

dns.resolve4('www.yy.com', function (err, addresses) {
    if (err) throw err;

    console.log('addresses: ' + JSON.stringify(addresses));

    addresses.forEach(function (a) {
        dns.reverse(a, function (err, domains) {
            if (err) {
                throw err;
            }

            console.log('reverse for ' + a + ': ' + JSON.stringify(domains));
        });
    });
});