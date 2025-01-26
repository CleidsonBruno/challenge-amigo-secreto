// Declaração do array para armazenar os nomes
let amigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    // Validação de entrada
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adicionando o nome ao array e atualizando a lista
    amigos.push(nome);
    atualizarLista();

    // Limpar o campo de entrada
    input.value = "";
    input.focus();
}

// Função para atualizar a lista na tela
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpar a lista antes de atualizar

    // Criar elementos <li> para cada amigo no array
    amigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Verificar se há amigos na lista
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione pelo menos um nome.");
        return;
    }

    // Gerar índice aleatório e exibir o amigo sorteado
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    resultado.textContent = `O amigo secreto é: ${amigoSorteado}`;
}
