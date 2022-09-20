const repository = require("../repositories/product-repository");

exports.get = async (_, res) => {
  const data = await repository.get();
  res.status(200).send(data);
};

exports.post = async (req, res, _) => {
  await repository.create(req.body);
  res.status(201).send({ message: "Criado com sucesso!" });
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
