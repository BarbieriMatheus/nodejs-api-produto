const repository = require("../repositories/product-repository");
const service = require("../services/email-service");

exports.get = async (_, res) => {
  const data = await repository.get();
  res.status(200).send(data);
};

exports.post = async (req, res) => {
  try {
    const product = await repository.create(req.body);
    const { title, description, price, active } = req.body;
    await service.sendEmail({
      title,
      description,
      price,
      active,
    });
    res.status(201).send(product);
  } catch (error) {
    console.log("[ERROR]", error);
    res.status(400).send({ message: "Não foi possível criar o produto" });
  }
};

exports.put = async (req, res, _) => {
  const id = req.params.id;
  const body = req.body;
  await repository.put(id, body);
  res.status(200).send({ message: "Atualizado com sucesso!" });
};

exports.getById = async (req, res) => {
  const data = await repository.getById(req.params.id);

  if (!data) res.status(404).send({ message: "Não encontrado" });
  res.status(200).send(data);
};

exports.deleteById = async (req, res) => {
  await repository.deleteById(req.params.id);
  res.status(200).send({ message: "Inativado com sucesso!" });
};
