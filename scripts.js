const Modal = {
    open(){
        document.querySelector('.modal-overlay')
        .classList
        .add('active')
    },
    close(){
        document.querySelector('.modal-overlay')
        .classList
        .remove('active')
    }
}

const transactions =[
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021'
    },
    {
        id: 2,
        description: 'WebSite',
        amount: 500000,
        date: '23/01/2021'
    }, 
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021'
    }
]

const Transaction = {
    income() {
        //somar as entradas
    },
    expense() {
        //somar as saídas
    },
    total() {
        //entradas - saidas
    }
}

//Pegar os dados do HTML e substituir pelo os do JS
const DOM = {

    transactionsContainer: document.querySelector('#data-table tbody'), 
    

    addTransaction(transaction,index) {
        const tr = document.createElement('tr') 
        tr.innerHTML = DOM.innerHTMLTransaction(transaction) 

        DOM.transactionsContainer.appendChild(tr)

    },

    innerHTMLTransaction(transaction) { 
        const CSSclass = transaction.amount > 0 ? "income" : "expenses"

        const amount = Utils.formatCurrency(transaction.amount)
        
        const html = `
            <td class="description">${transaction.description}</td> 
            <td class="${CSSclass}">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td> 
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
       
        `
        return html
    }
}

const Utils = {
    formatCurrency(value) { //Vamos entender como funciono os números do .amount
        const signal = Number(value) < 0 ? "-" : "" // se menor 1ue 0 adicione - (menos)

        value = String(value).replace(/\D/g,"") // se for uma String, coloque nada

        value = Number(value) / 100 // atualizei o value para número de novo

        value = value.toLocaleString("pt-BR", { //e aqui utilizamos o .toLocaleString para aplicar o tipo de moeda em que estamos trabalhando
            style: "currency", //estilo moeda
            currency: "BRL"
        })

        console.log(signal + value)
    }
}

transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})

