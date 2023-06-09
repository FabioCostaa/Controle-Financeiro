import React, {useState} from 'react'
import * as C from "./styles";
import Grid from '../Grid';

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);
  
    const generateID = () => Math.round(Math.random() * 1000);
  
    const handleSave = () => {
      if (!desc || !amount) {
        alert("Informe a descrição e o valor!");
        return;
      } else if (amount < 1) {
        alert("O valor tem que ser positivo!");
        return;
      }
  
      const transaction = {
        id: generateID(),
        desc: desc,
        amount: amount,
        expense: isExpense,
      };
  
      handleAdd(transaction);
  
      setDesc("");
      setAmount("");
    };

  return (
    <>
        <C.Container>
            <C.InputContent>
                <C.Label>Descrição</C.Label>
                <C.input value={desc} onChange={(e) => setDesc(e.target.value)}/>
            </C.InputContent>
            <C.InputContent>
                <C.Label>Valor</C.Label>
                <C.input
                    value={amount}
                    type='number'
                    onChange={(e) => setAmount(e.target.value)}
                />
            </C.InputContent>
            <C.RadioGroup>
                <C.input
                    type='radio'
                    id='rincome'
                    defaultChecked
                    name='group1'
                    onChange={() => setExpense(!isExpense)}
                />
                <C.Label htmlFor='rincome'>Entrada</C.Label>
                <C.input
                    type='radio'
                    id='rExpenses'
                    name='group1'
                    onChange={() => setExpense(!isExpense)}
                />
                <C.Label htmlFor='rExpenses'>Saídas</C.Label>
            </C.RadioGroup>
            <C.Button onClick={handleSave}>ADICIONAR</C.Button>
        </C.Container>
        <Grid itens={transactionsList} setItens={setTransactionsList}/>
    </>
  )
}

export default Form