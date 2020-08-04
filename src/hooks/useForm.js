/**Custom Hook (o prefixo use é reservado), ou seja,
 * se não colocar o prefixo use não funciona.
 */
import { useState } from 'react';

function useForm(valoresIniciais) {

    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        // chave: titulo, descricao, bla, bli
        setValues({
            ...values,
            [chave]: valor, // titulo: 'valor'
        })
    }

    // Muda o estado no atributo name do input
    function handleChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }

    function clearForm() {
        setValues(valoresIniciais);
    }

    return {
        values,
        handleChange,
        clearForm,
    };
}

export default useForm;


