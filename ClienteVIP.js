const Cliente = require('./Cliente');

class ClienteVIP extends Cliente {
  bonificacion(monto) {
    return monto >= 50 ? monto * 0.05 : 0;
  }
}

module.exports = ClienteVIP;
