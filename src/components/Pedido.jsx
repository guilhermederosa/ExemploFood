import { useState } from "react"

// Array de objetos contenndo o estado inicial do cardapio
const cardapio=[
    {id:1,nome:"Combo-01",preço:25.00,disponibilidade:true,quantidade:0},
    {id:2,nome:"Combo-02",preço:35.00,disponibilidade:true,quantidade:0},
    {id:3,nome:"Combo-03",preço:45.00,disponibilidade:false,quantidade:0},
    {id:4,nome:"Combo-04",preço:55.00,disponibilidade:true,quantidade:0},

];

const Pedido = () => {
    // HOOK-useState-Manipula o estado da variavel
    // Estados para gerenciar a lista de itens
    const Pedido = () => {
        const[itens,setItens]=useState(cardapio);
        const[status,setStatus]=useState("");
        const[enviar,setEnviar]=useState(false);

        // Valor fixo adicionado ao total quando tiver itens no carrinho
        const taxaEntrega=5.0 

        const alterarQuantidade = (id, valor) => {
            setItems(prev =>
            // MAP: percorre a lista para criar um NOVO array sem modificar o original (IMUTABILIDADE)
                prev.map(item =>
                // TERNARIO, verifica se o item da iteração atual é o que deve ser alterado
                // SPRED (...item) copia as propriedades do item, aleterando mas mantendo o que ja estava
                // MATH.MAX garante que a quantidade nunca seja menor que 0
                // Item: retorna o item intacto caso o id nao corresponda
                    item.id === id ? { ...item, quantidade: Math.max(0, item.quantidade + valor) }: item
                )
            );
        };
        // FILTER- Seleciona apenas os produtos disponiveis no carrinho
        const produtosDisponiveis= itens.filter(item=>item.disponibilidade);
        const carrinho = items.filter(item=>item.quantidade >0);
        // REDUCE-Calcula a soma dos itens (preco * quantidade) e adiona a taxa de entrega
        const subtotal = carrinho.reduce((ac,item)=>ac + item.preco * item.quantidade,0)
        const total = subtotal >0 ? subtotal + taxaEntrega: 0;
        // Simulação do ciclo de vida da entrega usando sincronizadores assincronos
        const confirmarPedido=()=>{
            setEnviar(True);
            setStatus("Restaurante preparando seu pedido...");
            setTimeout(()=>{
                setStatus("Seu pedido saiu para entrega!")
                setEnviar(false)

            },5000);
            setTimeout(()=>{
                setStatus("Seu pedido foi entregue com sucesso")
                setEnviar(false)
            },10000);
        }
    }
  return (
    <>

    </>
  )
}

export default Pedido