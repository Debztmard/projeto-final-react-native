import Cadastro from "../model/cadastro";

export const createTable = async () => {
  await Cadastro.createTable();
  console.log("Tabela criada!");
};

export const createCadastro = async ( usuario, senha ) => {
  const novoCadastro = new Cadastro({
    usuario: usuario,
    senha: senha,
  });
  await novoCadastro.save();
};

export const getAllCadastro = async() => {
    return await Cadastro.query();
};

export const deleteAllCadastro = async () => {
    Cadastro.destroyAll();
}