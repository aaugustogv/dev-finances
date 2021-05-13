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


const Transaction = {

    all: [
        {
            description: 'Luz',
            amount: -500111,
            date: '23/01/2021'
        },
        {
            description: 'WebSite',
            amount: 500000,
            date: '23/01/2021'
        }, 
        {
            description: 'Internet',
            amount: -20000,
            date: '23/01/2021'
        },
        {
            description: 'App',
            amount: 245600,
            date: '23/01/2021'
        },
    ],

    add(transaction){
        Transaction.all.push(transaction)

        App.reload()
    },

    remove(index) {
        Transaction.all.splice(index, 1)

        App.reload()
    },

    income() {
        let income = 0;

        Transaction.all.forEach(transaction => {

            if(transaction.amount > 0) {
                income += transaction.amount;
            }

        })

       return income;
    },

    expense() {
        let expense = 0;

        Transaction.all.forEach(transaction => {

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
    },

    clearTransactions() { 
        DOM.transactionsContainer.innerHTML = ""
    }
}

const Utils = {

    formatAmount(value) {
        value = Number(value) * 100 

        return value
    },

    formatDate(date) {
        const splittedDate = date.split("-")

        return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
    },

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

const Form = {

    description: document.querySelector('input#description'), //Fui lá peguei do HTML
    amount: document.querySelector('input#amount'),
    date: document.querySelector('input#date'),

    getValues() {
        return {
            description: Form.description.value, // Aqui recebo os valores do Form com o .value
            amount: Form.amount.value,
            date: Form.date.value
        }
    },

    validateFields() {
        const { description, amount, date } = Form.getValues()

        if(description.trim() === "" || //Se não tiver
        amount.trim() === "" || 
        date.trim() === "") {
            throw new Error("Preencha todos os campos") // retorna alert
        }
    },

    formatValues() { //formatando os dados
        let { description, amount, date } = Form.getValues()

        amount = Utils.formatAmount(amount)

        date = Utils.formatDate(date)

        return {
            description,
            amount,
            date
        }
    },

    clearFields() {
        Form.description.value = ""
        Form.amount.value = ""
        Form.date.value = ""
    },

    submit(event) {
        event.preventDefault()

        try {

        //verificar se todas as informacoes foram preenchidas
        Form.validateFields()
        //formatar os dados para salvar 
        const transaction = Form.formatValues()
        //Salvar
        Transaction.add(transaction)
        // apagar os dados do form
        Form.clearFields()
        // modal feche
        Modal.close()
        } catch (error) {
            alert(error.message)
        }
        
    }
}

const App = {
    init() {

        Transaction.all.forEach(transaction => {
            DOM.addTransaction(transaction)
        })
        
        DOM.updateBalance()
    },
    reload() {
        DOM.clearTransactions() 
        App.init()
    }
}

App.init()

 


