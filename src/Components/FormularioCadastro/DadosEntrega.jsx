import React from 'react';
import {Button, TextField} from "@material-ui/core";


const DadosEntrega = ({onSubmit}) => {

const [cep, setCep] = React.useState("");
const [endereco, setEndereco] = React.useState("");
const [numero, setNumero] = React.useState("");
const [estado, setEstado] = React.useState("");
const [cidade, setCidade] = React.useState("");

const submitCepHandler = (e) => {
    setCep(e.target.value);
}

const submitEnderecoHandler = (e) => {
    setEndereco(e.target.value);
}

const submitNumeroHandler = (e) => {
    setNumero(e.target.value);
}

const submitEstadoHandler = (e) => {
    setEstado(e.target.value);
}

const submitCidadeHandler = (e) => {
    setCidade(e.target.value);
}

const submitHandler = (event) => {
    event.preventDefault();
    onSubmit({cep, endereco, numero, estado, cidade});
}
    return (
        <form onSubmit={submitHandler}>
            <TextField
                id="cep"
                value={cep}
                label="CEP"
                onChange={submitCepHandler}
                type="number"
                variant="outlined"
                margin="normal"
            />
            <TextField
                id="endereco"
                value={endereco}
                onChange={submitEnderecoHandler}
                label="Endereço"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                id="numero"
                label="Número"
                value={numero}
                onChange={submitNumeroHandler}
                type="number"
                variant="outlined"
                margin="normal"
            />
            <TextField
                id="estado"
                label="Estado"
                value={estado}
                onChange={submitEstadoHandler}
                type="text"
                variant="outlined"
                margin="normal"
            />
            <TextField
                id="cidade"
                label="Cidade"
                value={cidade}
                onChange={submitCidadeHandler}
                type="text"
                variant="outlined"
                margin="normal"
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth={true}
            >
                Finalizar Entrega
            </Button>
        </form>
    );
};
export default DadosEntrega;