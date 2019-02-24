/**
 * initiate a Class
 */
class CustomResponse {
    /**
   * constructor
   */
    constructor() { }

    /**
  *
  */
    get getResponse() {
        return this.makeResponse();
    }

    setResponse(res, successStatus,status, result, platformstatus = 200) {

        this.res = res;
        this.successStatus = successStatus;
        this.status = status;
        this.result = result;
        this.makeResponse();
    }

    /**
   * making response format
   */
    makeResponse() {
        this.res.set('Access-Control-Allow-Origin', '*');
        this.res.statusMessage = this.message;
        this.res.status(this.status).send({
            status: this.successStatus,
            code: this.status,
            result: (this.result === null || this.result === 'null' || this.result === '') ? [] : this.result,
        });
    }
}

// exporting all functions
module.exports = new CustomResponse();
