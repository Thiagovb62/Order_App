import './App.css';
import FormularioCadastro from "./Components/FormularioCadastro/FormularioCadastro";
import {Container, Typography} from "@material-ui/core";
import 'fontsource-roboto';
import {ValidaCpf,ValidaSenha} from "./Model/Cadastro";
import ValidacaoCadastro from "./Context/ValidacaoCadastro";


const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Container component="article" maxWidth="sm">
                    <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
                    <FormularioCadastro onSubmit={SubmitFormHandler} validacoes={{cpf:ValidaCpf, senha:ValidaSenha}}/>
                </Container>
            </header>
        </div>
    );
}
    const SubmitFormHandler = (DATA) => {
        console.log(DATA);
    }

export default App;
