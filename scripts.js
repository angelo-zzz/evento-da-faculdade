
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("cadastro-form");
    const mensagemSucesso = document.getElementById("mensagem-sucesso");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const nome = document.getElementById("nome").value;
        mensagemSucesso.innerHTML = `<p>Cadastro realizado com sucesso para ${nome}!</p>`; // Correção na interpolação da string
        mensagemSucesso.classList.remove("hidden"); // Adição de aspas para "hidden" e correção na remoção da classe
        
        form.reset();
        
        setTimeout(function() {
            mensagemSucesso.classList.add("hidden");
        }, 5000);
    });
});