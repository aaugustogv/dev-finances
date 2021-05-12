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
        amount: -500111,
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
    },
    {
        id: 4,
        description: 'App',
        amount: 245600,
        date: '23/01/2021'
    },
]

const Transaction = {
    income() {
        let income = 0;

        transactions.forEach(transaction => {

            if(transaction.amount > 0) {
                income += transaction.amount;
            }

        })

       return income;
    },
    expense() {
        let expense = 0;

        transactions.forEach(transaction => {

            if(transaction.amount < 0) {
                expense += transaction.amount;
            }

        })

        return expense
    },
    total() {
        return Transaction.income() + Transaction.expense();
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
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td> 
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
       
        `
        return html
    },

    updateBalance() {

        document
        .getElementById('incomeDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.income())
        document
        .getElementById('expenseDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.expense())
        document
        .getElementById('totalDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.total())
    }
}

const Utils = {
    formatCurrency(value) { 
        const signal = Number(value) < 0 ? "-" : "" 

        value = String(value).replace(/\D/g,"") 

        value = Number(value) / 100 

        value = value.toLocaleString("pt-BR", { 
            style: "currency", 
            currency: "BRL"
        })

        return signal + value
    }
}

transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})

DOM.updateBalance()

