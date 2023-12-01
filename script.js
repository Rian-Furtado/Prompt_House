const links = document.querySelectorAll('.sidebar a');
const forms = document.querySelectorAll('.form');

links.forEach(link => {
	link.addEventListener('click', () => {
		const formId = link.getAttribute('href');
		const form = document.querySelector(formId);

		forms.forEach(form => {
			form.classList.remove('active');
		});

		form.classList.add('active');

		links.forEach(link => {
			link.classList.remove('active');
		});

		link.classList.add('active');
	});
});


function gerarMensagem() {
	// Coletar dados do formulário
	var nome = document.getElementById("name").value;
	var nomeProprietario = document.getElementById("nameOwner").value;
	var cnpj = document.getElementById("cnpj").value;
	var tokens = document.getElementById("tokens").value;
	var cancelTokens = document.getElementById("Canceltokens").value;
	var motivo = document.getElementById("motivo").value;
	var observacoes = document.getElementById("obs").value;

	// Criar a mensagem conforme necessário
	var mensagem = "Oi,\nSOLICITAÇÃO DE LICENÇAS (TOKENS)\n\n"
	mensagem += "Nome de quem solicitou a demanda: " + nome + "\n";
	mensagem += "Nome do Proprietário/Loja: " + nomeProprietario + "\n";
	mensagem += "CNPJ/Unidade: " + cnpj + "\n";
	mensagem += "Motivo: " + motivo + "";
	mensagem += "Licenças necessárias: " + tokens + "\n";
	mensagem += "Licenças a serem canceladas: " + cancelTokens + "\n\n\n";
	mensagem += "⚠ Observações: ⚠\n" + observacoes;

	// Exibir a mensagem no textarea
	document.getElementById("result").value = mensagem;

	// Habilitar o botão Copiar
	document.getElementById("copiarBtn").removeAttribute("disabled");
}

function copiarMensagem() {
	// Selecionar o conteúdo do textarea
	var resultado = document.getElementById("result");
	resultado.select();
	resultado.setSelectionRange(0, 99999); // Para dispositivos móveis

	// Copiar o texto para a área de transferência
	document.execCommand("copy");

	// Alerta ou feedback de que o texto foi copiado (opcional)
	alert("Mensagem copiada para a área de transferência!");

	limparFormulario();
}

function limparFormulario() {
	// Limpar os valores dos campos do formulário
	document.getElementById("name").value = "";
	document.getElementById("nameOwner").value = "";
	document.getElementById("cnpj").value = "";
	document.getElementById("tokens").value = "";
	document.getElementById("Canceltokens").value = "";
	document.getElementById("motivo").value = "";
	document.getElementById("obs").value = "";
	document.getElementById("result").value = "";

	// Desabilitar o botão Copiar novamente, se necessário
	document.getElementById("copiarBtn").setAttribute("disabled", "disabled");
}
