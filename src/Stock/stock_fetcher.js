const request = require('request-promise');
const Stock = require('./stock.js');
const iconv = require('iconv-lite');

const stockId = 601006
var options = {
    uri: `http://hq.sinajs.cn/list=sh${stockId}`,
    encoding: null
};

const getSample = () => {
    return request(options)
        .then(res => {
            // parse data from script; use ASCII and convert it
            // from gb2312 to UTF-8
            var stringResponse = iconv.decode(res, 'gb2312');

            // value is a script, evil way to excute the scipt;
            eval(stringResponse);

            // even evil way to get value, Sina NB~
            let StringData = eval(`hq_str_sh${stockId}`);
            return new Stock(StringData);
        }).catch(function (err) {
            console.log(err);
        });
}

module.exports = { getSample }