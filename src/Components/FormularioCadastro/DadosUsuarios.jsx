import React from "react";
import {Button, TextField} from "@material-ui/core";

const DadosUsuarios = ({aoEnviar}) => {
    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");

    const submitSenhaHandler = (e) => {
        setSenha(e.target.value);
    }

     const submitEmailHandler = (e) => {
        setEmail(e.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        aoEnviar();
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
                value={senha}
                onChange={submitSenhaHandler}
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
                Cadastrar
            </Button>

        </form>
    );
}
export default DadosUsuarios;