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

const transaction =[
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

const transaction = {
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

// Preciso pegar as minhas transações
// do objeto em JS 
// e jogar la no HTML