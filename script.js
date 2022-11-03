
const buyButton = document.getElementById('buy-button');
const removeTicket = document.getElementById('remove-ticket');
const addTicket = document.getElementById('add-ticket');
const ticket = document.getElementById('number-ticket');
const ticketPrice = document.getElementById('ticket-price');

addTicket.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('adicionando ticket');
    ticket.innerText = parseInt(ticket.innerText)+1;
    ticketPrice.innerText = parseInt(ticketPrice.innerText)+90;
});
removeTicket.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('removendo ticket');
    if(parseInt(ticket.innerText) !== 1) {
        ticket.innerText = parseInt(ticket.innerText)-1;
        ticketPrice.innerText = parseInt(ticketPrice.innerText)-90;
    };   
});

buyButton.addEventListener('click', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const quantity_tickets = ticket.innerText;

    window.localStorage.setItem('nome', nome);
    window.localStorage.setItem('email', email);
    window.localStorage.setItem('quantity_tickets', quantity_tickets);
    window.location.href = 'pagina-final.html';
});

