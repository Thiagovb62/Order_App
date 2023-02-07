import React, {useEffect} from 'react';
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";
import DadosEntrega from "./DadosEntrega";
import {Step, StepLabel, Stepper, Typography} from "@material-ui/core";



const FormularioCadastro = ({onSubmit}) => {
    const [etapaAtual, setEtapaAtual] = React.useState(0);
    const [dadosColetados, setDados] = React.useState({});

    useEffect(() => {
        if (etapaAtual === pages. length - 1) {
            onSubmit(dadosColetados);
        }
    });

    const nextEtapaHandler = () => {
        setEtapaAtual(etapaAtual + 1);
    };
    const coletaDadosHandler = (dados) => {
        setDados({...dadosColetados, ...dados});
        nextEtapaHandler();
    }

    const pages = [<DadosUsuarios aoEnviar={ coletaDadosHandler }/>, <DadosPessoais onSubmit={ coletaDadosHandler }/>,
        <DadosEntrega onSubmit={coletaDadosHandler }/>,<Typography variant="h5" align="center">Obrigado pelo cadastro!</Typography>];

    // eslint-disable-next-line no-unreachable
    return <React.Fragment>
        <Stepper activeStep={etapaAtual}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Dados Pessoais</StepLabel></Step>
            <Step><StepLabel>Dados de Entrega</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
            { pages[etapaAtual] }
        </React.Fragment>

};

export default FormularioCadastro;