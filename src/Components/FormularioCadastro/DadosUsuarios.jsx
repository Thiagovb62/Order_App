import React, {useContext} from "react";
import {Button, TextField} from "@material-ui/core";
import ValidacaoCadastro from "../../Context/ValidacaoCadastro";
import useErros from "../Hooks/useErros";

const DadosUsuarios = ({aoEnviar}) => {
    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const validacoes = useContext(ValidacaoCadastro);

    const [errors, validaCampos] = useErros(validacoes);

    const submitSenhaHandler = (e) => {
        setSenha(e.target.value);
    }

     const submitEmailHandler = (e) => {
        setEmail(e.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        for (let campo in errors) {
            if (!errors[campo].valid) {
                return;
            }
        }
                aoEnviar({email, senha});
    }
    return (
        <form onSubmit={submitHandler}>
            <TextField
                id="email"
                label="Email"
                value={email}
                onChange={submitEmailHandler}
                type="email"
                required={true}
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                id="senha"
                label="Senha"
                name="senha"
                value={senha}
                onChange={submitSenhaHandler}
                onBlur={validaCampos}
                error={!errors.senha.valid}
                helperText={errors.senha.text}
                type="password"
                required={true}
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
            >
                proximo
            </Button>

        </form>
    );
}
export default DadosUsuarios;