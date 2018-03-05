const axios = require('axios');

class Worker{
    constructor(){
        this.interval = 1000;
        this.data = {};
        this.isWork = false;
    }

    getData(currency){
        return this.data[currency];
    }

    setInterval(pInterval){
        this.interval = pInterval;
    }

    startWorker(){
        this.isWork = true;
        this.working();
    }

    stopWorker(){
        this.isWork = false;
    }

    async working(){
        axios.get('https://blockchain.info/en/ticker')
            .then((res) => {
                this.data = res;
            })

        setTimeout(this.working, this.interval);
    }
}

module.exports = Worker;