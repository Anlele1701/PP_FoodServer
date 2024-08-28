class ResponseClass {
  constructor(status, message, code, data) {
    this.status = status;
    this.message = message;
    this.code = code;
    this.data = data;
  }

  success(message, data = null, code = 200) {
    return new ResponseClass(true, message, code, data);
  }

  error(message, code = 500) {
    return new ResponseClass(false, message, code, null);
  }
}
module.exports = ResponseClass;
