const evento = document.getElementById('evento')
const contador = document.createElement('h1')

// Defina a data final da contagem regressiva (substitua com a sua data)
const dataFinal = new Date('2024-12-25 23:59:59').getTime();

// Função para atualizar o contador a cada segundo
function atualizarContador() {

    const agora = new Date().getTime();
    const diferenca = dataFinal - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    contador.innerHTML=`${dias}d ${horas}h ${minutos}m ${segundos}s`
    if (diferenca <= 0) {
        clearInterval(interval);
        console.log("Contagem encerrada!");
    }
}

evento.appendChild(contador)
// Chame a função para iniciar a contagem regressiva e atualizar a cada segundo
const interval = setInterval(atualizarContador, 1000);

// // Este código adiciona um evento de clique ao elemento com o id 'emailButton'
// document.getElementById('emailButton').addEventListener('click', sendMail);

// // Esta é a função que será chamada quando o botão com id 'emailButton' for clicado
// function sendMail (e) {
//     // Previne o comportamento padrão do clique em um botão dentro de um formulário.
//     e.preventDefault();
    
//     // Obtém os valores dos campos de entrada do formulário com base em seus respectivos IDs.
//     const mail = document.getElementById('email').value;
//     const name = document.getElementById('name').value;

//     // Verifica se todos os campos (e-mail, mensagem e nome) foram preenchidos pelo usuário.
//     if (mail && name) {
//         // Se todos os campos estiverem preenchidos, usa a biblioteca 'Email.js'
//         // para enviar o e-mail com os detalhes fornecidos pelo usuário.

//           Email.send({
//             Host : "smtp.elasticemail.com",
//             Username : "xhadayt@gmail.com",
//             Password : "7B2F318ACA0C71EEF74635AE101144558CE20",
//             To : 'manoelvictor756@gmail.com',
//             From : "xhadayt@gmail.com",
//             Subject : "This is the subject",
//             Body : "And this is the body"
//         }).then(
//           message => alert(message)
//         );
//     } else {
//         // Se algum dos campos estiver em branco, exibe um alerta informando que todos os campos devem ser preenchidos.
//         alert('Preencha todos os campos!');
//     }    
// }
