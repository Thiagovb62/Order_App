import React from 'react';
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";
import DadosEntrega from "./DadosEntrega";
import {Typography} from "@material-ui/core";


const FormularioCadastro = ({onSubmit}) => {
const [etapaAtual, setEtapaAtual] = React.useState(0);

const nextEtapaHandler = () => {
    setEtapaAtual(etapaAtual + 1);
}

const FormularioAtual = (etapaAtual) => {
    switch (etapaAtual) {
        case 0:
            return <DadosUsuarios aoEnviar={nextEtapaHandler}/>;
        case 1:
            return <DadosPessoais onSubmit={nextEtapaHandler}/>;
        case 2:
            return <DadosEntrega aoEnviar{onSubmit}/>;
        default:
            return <Typography>Erro ao selecionar etapa</Typography>;
    }
}
    // eslint-disable-next-line no-unreachable
    return (
        <>
            {FormularioAtual(etapaAtual)}
        </>
    );
}

export default FormularioCadastro;