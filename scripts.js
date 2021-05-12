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

    transactionsContainer: document.querySelector('#data-table tbody'), //Seleciona o id #Data-table dentro o
    // tbody

    addTransaction(transaction,index) {
        const tr = document.createElement('tr') // cria o elemento tr (no html)
        tr.innerHTML = DOM.innerHTMLTransaction(transaction) //ascessa no objeto DOM o innerHTMLTransaction
        //na qual o transaction tem a estrutura HTML das Tabelas (transaction)

        DOM.transactionsContainer.appendChild(tr)//Aqui ele ira adicionar o tr com a função appendChild(tr)
        // para colocar em volta de todo innerHTMLTransaction

    },

    innerHTMLTransaction(transaction) { // o innerHTMLTransaction onde é colocado a estrutura HTML


        //esses ${}, são para colocar as variáveis das transaction nos seus determinados locais
        const html = `
            <td class="description">${transaction.description}</td> 
            <td class="expenses">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td> 
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
       
        `
        return html
    }
}

DOM.addTransaction(transactions[0])
DOM.addTransaction(transactions[1])
DOM.addTransaction(transactions[2])

transactions.forEach(function(transaction) {})

