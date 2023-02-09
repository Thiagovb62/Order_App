import React, {useState, useContext} from 'react';
import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core';
import ValidacaoCadastro from "../../Context/ValidacaoCadastro";
import useErros from "../Hooks/useErros";


const DadosPessoais = ({onSubmit}) => {

    const [nome, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [cpf, setCpf] = useState("");
    const [promotions, setPromotions] = useState(false);
    const [news, setNews] = useState(false);

    const validacoes = useContext(ValidacaoCadastro);


    const [errors, validaCampos] = useErros(validacoes)


    const onFormSubmit = (event) => {
        event.preventDefault();
        for (let campo in errors) {
            if (!errors[campo].valid) {
                return;
            }
        }
        onSubmit({nome, surname, cpf, promotions, news});
    }

    const onChangeName = (event) => {
        setName(event.target.value);
    }
    const onChangeSurname = (event) => {
        setSurname(event.target.value);
    }
    const onChangeCpf = (event) => {
        setCpf(event.target.value);
    }
    const onChangePromotions = (event) => {
        setPromotions(event.target.checked);
    }
    const onChangeNews = (event) => {
        setNews(event.target.checked);
    }

    return (
        <>
            <form onSubmit={ onFormSubmit }>
                <TextField
                    id="nome"
                    value={ nome }
                    label="Nome"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    onChange={ onChangeName }
                />

                <TextField
                    id="sobrenome"
                    value={ surname }
                    label="Sobrenome"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    onChange={ onChangeSurname }
                />

                <TextField
                    onChange={ onChangeCpf }
                    onBlur={ validaCampos }
                    id="cpf"
                    label="CPF"
                    name="cpf"
                    error={ !errors.cpf.valid }
                    helperText={ errors.cpf.text }
                    value={ cpf }
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />

                <FormControlLabel
                    label="Promoções"

                    control={
                        <Switch
                            checked={ promotions }
                            name="promocoes"
                            id="promocoes"

                            onChange={ onChangePromotions }
                        />
                    }/>

                <FormControlLabel
                    label="Novidades"
                    control={
                        <Switch
                            checked={ news }
                            name="novidades"
                            id="novidades"
                            onChange={ onChangeNews }
                        />
                    }/>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    proximo
                </Button>

            </form>
        </>
    );
}
export default DadosPessoais;