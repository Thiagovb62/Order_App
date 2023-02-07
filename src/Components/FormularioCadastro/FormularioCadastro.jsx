import React from 'react';
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";
import DadosEntrega from "./DadosEntrega";


const FormularioCadastro = ({onSubmit}) => {
    const [etapaAtual, setEtapaAtual] = React.useState(0);

    const nextEtapaHandler = () => {
        setEtapaAtual(etapaAtual + 1);
    };

    const pages = [<DadosUsuarios aoEnviar={ nextEtapaHandler }/>, <DadosPessoais onSubmit={ nextEtapaHandler }/>,
        <DadosEntrega aoEnviar={ onSubmit }/>];

    let page = pages[etapaAtual];
    for (page in pages) {
        if (page === etapaAtual) {
            return pages[page];
        }
    }

    // eslint-disable-next-line no-unreachable
    return <React.Fragment>
            { pages[etapaAtual] }
        </React.Fragment>

};

export default FormularioCadastro;