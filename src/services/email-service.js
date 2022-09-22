const { formatCoin } = require("../utils/formatCoin");

const axios = require("axios").default;

const env = process.env;

exports.sendEmail = async ({ title, description, price, active }) => {
  try {
    await axios.post(env.URL_SERVICE_EMAIL, {
      emailFrom: env.EMAIL_FROM,
      emailTo: env.EMAIL_TO,
      subject: "Produto cadastrado",
      text: `O produto ${title} com o preço ${formatCoin(price)} e o status ${
        active ? "ativo" : "desativado"
      } foi cadastrado com sucesso na plataforma. Com a descrição: ${description}`,
    });
    return true;
  } catch (error) {
    return false;
  }
};
