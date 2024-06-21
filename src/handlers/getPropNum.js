const propNum = require("../constants/propNum");

const getPropNum = (numero) => {
  return propNum[numero];
  // return propNum.find(propNum => propNum.numero === numero);
};

module.exports = getPropNum;
