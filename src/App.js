import './App.css';
import FormularioCadastro from "./Components/FormularioCadastro/FormularioCadastro";
import {Container, Typography} from "@material-ui/core";
import 'fontsource-roboto';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Container component="article" maxWidth="sm">
                    <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
                    <FormularioCadastro onSubmit={SubmitFormHandler}/>
                </Container>
            </header>
        </div>
    );
}
    const SubmitFormHandler = (DATA) => {
        console.log(DATA);
    }

export default App;
