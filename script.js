const links = document.querySelectorAll(".sidebar a");
const forms = document.querySelectorAll(".form");

links.forEach((link) => {
  link.addEventListener("click", () => {
    const formId = link.getAttribute("href");
    const form = document.querySelector(formId);

    forms.forEach((form) => {
      form.classList.remove("active");
    });

    form.classList.add("active");

    links.forEach((link) => {
      link.classList.remove("active");
    });

    link.classList.add("active");
  });
});

function gerarMensagem() {
  var nome = document.getElementById("name").value;
  var nomeProprietario = document.getElementById("nameOwner").value;
  var cnpj = document.getElementById("cnpj").value;
  var tokens = document.getElementById("tokens").value;
  var cancelTokens = document.getElementById("Canceltokens").value;
  var motivo = document.getElementById("motivo").value;
  var observacoes = document.getElementById("obs").value;

  var mensagem = "Oi,\nSOLICITAÇÃO DE LICENÇAS (TOKENS)\n\n";
  mensagem += "Nome de quem solicitou a demanda: " + nome + "\n";
  mensagem += "Nome do Proprietário/Loja: " + nomeProprietario + "\n";
  mensagem += "CNPJ/Unidade: " + cnpj + "\n";
  mensagem += "Motivo: " + motivo + "";
  mensagem += "Licenças necessárias: " + tokens + "\n";
  mensagem += "Licenças a serem canceladas: " + cancelTokens + "\n\n\n";
  mensagem += "⚠ Observações: ⚠\n" + observacoes;

  document.getElementById("result").value = mensagem;

  document.getElementById("copiarBtn").removeAttribute("disabled");
}

function copiarMensagem() {
  var resultado = document.getElementById("result");
  resultado.select();

  document.execCommand("copy");

  alert("Mensagem copiada para a área de transferência!");

  limparFormulario();
}

function limparFormulario() {
  document.getElementById("name").value = "";
  document.getElementById("nameOwner").value = "";
  document.getElementById("cnpj").value = "";
  document.getElementById("tokens").value = "";
  document.getElementById("Canceltokens").value = "";
  document.getElementById("motivo").value = "";
  document.getElementById("obs").value = "";
  document.getElementById("result").value = "";

  document.getElementById("copiarBtn").setAttribute("disabled", "disabled");
}

var radios = document.getElementsByName("type");
var certificadoDigitalFields = document.getElementById(
  "certificadoDigitalFields"
);
var equipamentoSATFields = document.getElementById("equipamentoSATFields");
var naoConfiguradoFields = document.getElementById("naoConfiguradoFields");

for (var i = 0; i < radios.length; i++) {
  radios[i].addEventListener("change", function () {
    certificadoDigitalFields.style.display = "none";
    equipamentoSATFields.style.display = "none";
    naoConfiguradoFields.style.display = "none";

    if (this.value === "certificado_digital") {
      certificadoDigitalFields.style.display = "block";
    } else if (this.value === "equipamento_sat") {
      equipamentoSATFields.style.display = "block";
    } else if (this.value === "nao_configurado") {
      naoConfiguradoFields.style.display = "block";
    }
  });
}

function gerarMensagem2() {
  const data = document.querySelector('#form2 input[type="date"]').value;
  const numeroProtocolo = document.querySelector("#numberProtocol").value;
  const versionSystem = document.querySelector("#versionSystem").value;
  const situacaoFiscal = document.querySelector(
    'input[name="type"]:checked'
  ).value;
  const serie = document.querySelector(
    '#certificadoDigitalFields input[name="serie"]'
  ).value;
  const idToken = document.querySelector(
    '#certificadoDigitalFields input[name="idToken"]'
  ).value;
  const csc = document.querySelector(
    '#certificadoDigitalFields input[name="csc"]'
  ).value;
  const codigoAtivacao = document.querySelector(
    '#equipamentoSATFields input[name="codigoAtivacao"]'
  ).value;
  const chaveAC = document.querySelector(
    '#equipamentoSATFields input[name="chaveAC"]'
  ).value;
  const modeloEquipamento = document.querySelector(
    '#equipamentoSATFields input[name="modeloEquipamento"]'
  ).value;
  const motivoNaoConfigurado = document.querySelector(
    '#naoConfiguradoFields input[name="motivoNaoConfigurado"]'
  ).value;
  const observacoes = document.querySelector("#obs_atendimento").value;
  const diretorios = document.querySelector("#diretorio").value;

  let mensagem = `
> Data: ${data}
---

Número do Protocolo: ${numeroProtocolo}
Produtos(s) em Questão:
${versionSystem}

---
Situação Fiscal/Status: ${situacaoFiscal}
`;

  switch (situacaoFiscal) {
    case "certificado_digital":
      mensagem += `
Série de Nota: ${serie}
ID: ${idToken}
CSC: ${csc}
`;
      break;
    case "equipamento_sat":
      mensagem += `
Código de Ativação: ${codigoAtivacao}
Chave AC: 
${chaveAC}
Modelo do Equipamento: ${modeloEquipamento}
`;
      break;
    case "nao_configurado":
      mensagem += `
Motivo (segundo o cliente):
${motivoNaoConfigurado}
`;
      break;
  }

  mensagem += `
  ---
Observações do atendimento:
${observacoes}
`;
  mensagem += `
Diretórios:
${diretorios}
  `;

  document.getElementById("result2").value = mensagem;

  document.getElementById("copiarBtn2").disabled = false;
}

function copiarMensagem2() {
  const mensagemElement = document.querySelector("#result2");

  mensagemElement.select();
  mensagemElement.setSelectionRange(0, 99999);

  document.execCommand("copy");

  mensagemElement.setSelectionRange(0, 0);

  alert("Mensagem copiada para a área de transferência!");

  document.querySelector('#form2 input[type="date"]').value = "";
  document.querySelector("#numberProtocol").value = "";
  document.querySelector("#versionSystem").value = "";
  document.querySelector('input[name="type"]:checked').value = ""; // Isso assume que existe um valor padrão para os radio buttons
  document.querySelector(
    '#certificadoDigitalFields input[name="serie"]'
  ).value = "";
  document.querySelector(
    '#certificadoDigitalFields input[name="idToken"]'
  ).value = "";
  document.querySelector('#certificadoDigitalFields input[name="csc"]').value =
    "";
  document.querySelector(
    '#equipamentoSATFields input[name="codigoAtivacao"]'
  ).value = "";
  document.querySelector('#equipamentoSATFields input[name="chaveAC"]').value =
    "";
  document.querySelector(
    '#equipamentoSATFields input[name="modeloEquipamento"]'
  ).value = "";
  document.querySelector(
    '#naoConfiguradoFields input[name="motivoNaoConfigurado"]'
  ).value = "";
  document.querySelector("#obs_atendimento").value = "";
  document.querySelector("#diretorio").value = "";
  document.querySelector("#result2").value = "";

  // Restante do código para gerar a mensagem

  document.getElementById("result2").value = mensagem;

  document.getElementById("copiarBtn2").disabled = false;
}
