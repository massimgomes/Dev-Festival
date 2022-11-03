const nome = window.localStorage.getItem('nome');
const email = window.localStorage.getItem('email');
const quantity_tickets = window.localStorage.getItem('quantity_tickets');

const nomeLabel = document.getElementById('nome');
const emailLabel = document.getElementById('email');
const ticketLabel = document.getElementById('quantity-tickets');

nomeLabel.innerText = nome;
emailLabel.innerText = email;
ticketLabel.innerText = quantity_tickets;