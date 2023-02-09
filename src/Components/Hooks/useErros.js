import {useState} from 'react';

    const createInitialState = (validacoes) => {
        const initialState = {};
        for (let campo in validacoes) {
            initialState[campo] = {valid: true, text: ""};
        }
        return initialState;
    }
export default function useErros(validacoes) {

      const initialState = createInitialState(validacoes)

    const [errors, setErrors] = useState(initialState);

    function validateCampos(event) {
        const {name, value} = event.target;
        const newErrors = {...errors};
        newErrors[name] = validacoes[name](value);
        setErrors(newErrors);
    }
    return [errors, validateCampos];
}
