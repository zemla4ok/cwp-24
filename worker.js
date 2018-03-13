const axios = require('axios');

class Worker{
    constructor(timer = 1000){
        this.interval = timer;
        this.data = {};
        this.working();
    }

    setTimer(timer)
    {
        this.timer = timer;
    }

    getData() {
        return this.data;
    }

    async working(){
        try {
            let response = await axios.get('https://blockchain.info/en/ticker');
            this.data = response.data;
            setTimeout(() => {
                this.working();
            }, this.timer);
        }
        catch (e) {
            console.error(e);
        }
    }
}

module.exports = Worker;