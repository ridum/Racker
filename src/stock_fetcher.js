const request = require('request-promise');


var options = {
    uri: 'http://hq.sinajs.cn/list=sh601006',
    json: true // Automatically parses the JSON string in the response
};

const getSample = () => {
    return request(options)
        .then(res => {
            console.log(res);
            return res;
        }).catch(function (err) {
            console.log(err);
        });
}

module.exports = { getSample }