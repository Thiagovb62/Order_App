
    const ValidaCpf = (cpf) => {
        if (cpf.length !== 11) {
            return { valid: false, text: "CPF deve ter 11 dígitos." };
        } else {
            return { valid: true, text: "" };
        }
    }

    const ValidaSenha = (senha) => {
        if (senha.length < 4 || senha.length > 72) {
            return { valid: false, text: "Senha deve ter entre 4 e 72 dígitos." };
        } else {
            return { valid: true, text: "" };
        }
    }


export  { ValidaCpf, ValidaSenha}