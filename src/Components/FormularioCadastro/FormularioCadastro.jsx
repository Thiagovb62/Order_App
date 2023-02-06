import React, { useState} from 'react';
import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core';


const FormularioCadastro = ({onSubmit}) => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [cpf, setCpf] = useState("");
    const [promotions, setPromotions] = useState(false);
    const [news, setNews] = useState(false);
    const [errors, setErrors] = useState({cpf: {valid: true, text: ""}});

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit({name, surname, cpf, promotions, news});
    }

    const validateCpf = (DATA) => {
           if (DATA.target.value.length !== 11) {
                setErrors({cpf: {valid: false, text: "CPF deve ter 11 dígitos."}});
            } else {
                setErrors({cpf: {valid: true, text: ""}});
            }
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
            <form onSubmit={onFormSubmit}>
                <TextField
                    id="nome"
                    value={name}
                    label="Nome"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    onChange = {onChangeName}
                />

                <TextField
                    id="sobrenome"
                    value={surname}
                    label="Sobrenome"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    onChange={onChangeSurname}
                />

                <TextField
                    onBlur={validateCpf}
                    onChange={onChangeCpf}
                    id="cpf"
                    label="CPF"
                    error={!errors.cpf.valid}
                    helperText={errors.cpf.text}
                    value={cpf}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />

                <FormControlLabel
                    label="Promoções"

                    control={
                        <Switch
                            checked={promotions}
                            name="promocoes"
                            id="promocoes"

                            onChange={onChangePromotions}
                        />
                    }/>

                <FormControlLabel
                    label="Novidades"
                    control={
                        <Switch
                            checked={news}
                            name="novidades"
                            id="novidades"

                            onChange={onChangeNews}
                        />
                    }/>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary">
                    Cadastrar
                </Button>

            </form>
        </>
    );
}
export default FormularioCadastro;