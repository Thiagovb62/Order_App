import React, {createContext} from "react";
import {ValidaCpf, ValidaSenha} from "../Model/Cadastro";

const validacoesCadastro = createContext({cpf: ValidaCpf, senha: ValidaSenha});

export default validacoesCadastro