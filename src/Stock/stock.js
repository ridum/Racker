class Stock {
    constructor(stringData) {
        var dataArr = stringData.split(",")
        this.name = dataArr[0];
        this.curPrice = dataArr[3];
        this.totalDeal = parseInt(dataArr[8]) / 100;
        this.buy1Deal = parseInt(dataArr[10]);
        this.buy1Price = parseFloat(dataArr[11]);
        this.sell1Deal = parseInt(dataArr[20]);
        this.sell1Price = parseFloat(dataArr[21]);
        this.date = new Date(`${dataArr[30]} ${dataArr[31]}`);
    }
}

module.exports = Stock