function showForm(index) {
    const forms = document.querySelectorAll('.message-form');
    forms.forEach((form, i) => {
        if (i === index) {
            form.style.display = 'block';
        } else {
            form.style.display = 'none';
        }
    });
}
const licencasCheckbox = document.getElementById('configLicencas');
const licencasTextContainer = document.getElementById('licencasText');
const licencasInputsContainer = document.getElementById('licencasInputs');
const licencasTextoInput = document.getElementById('licencasTexto');
const addLicencaButton = document.getElementById('addLicencaButton');
const licencasListContainer = document.getElementById('licencasList');
const licencasUl = document.getElementById('licencasUl');
let licencasTextoArray = [];


licencasCheckbox.addEventListener('change', function () {
    if (licencasCheckbox.checked) {
        licencasTextContainer.style.display = 'block';
    } else {
        licencasTextContainer.style.display = 'none';
    }
});

function addLicenca() {
    const licencaTexto = licencasTextoInput.value;
    if (licencaTexto.trim() !== '') {
        licencasTextoArray.push(licencaTexto);
        licencasTextoInput.value = '';
        updateLicencasList();
    }
}

function updateLicencasList() {
    licencasUl.innerHTML = '';
    licencasTextoArray.forEach(licenca => {
        const li = document.createElement('span\n');
        li.textContent = licenca;
        licencasUl.appendChild(li);
    });
    licencasListContainer.style.display = 'block';
}


licencasCheckbox.addEventListener('change', function () {
    if (licencasCheckbox.checked) {
        licencasTextContainer.style.display = 'block';
    } else {
        licencasTextContainer.style.display = 'none';
    }
});

function generateMessage() {
    const name = document.getElementById('name').value;
    const ownerName = document.getElementById('ownerName').value;
    const cnpj = document.getElementById('cnpj').value;
    const motivo = document.getElementById('motivo').value;
    const licenses = document.getElementById('licenses').value;
    const cancelLicenses = document.getElementById('cancelLicenses').value;
    const comments = document.getElementById('comments').value;

    const message = `Oi,\n*SOLICITAÇÃO DE LICENÇAS (TOKENS)*\n\n*Nome de quem solicitou a demanda:* ${name}\n*Nome do proprietário/loja:* ${ownerName}\n*CNPJ/Unidade:* ${cnpj}\n*Motivo:* ${motivo}\n*Licenças necessárias:* ${licenses}\n*Licenças a serem canceladas:* ${cancelLicenses}\n\n*⚠ Observações ⚠*\n\n${comments}`;

    const messageOutput = document.getElementById('messageOutput');
    messageOutput.value = message;
    
    document.getElementById('copyButton').disabled = false;
}

function generateMessage2() {
    // Obtenha os valores dos campos do formulário
    const clienteNome = document.getElementById('clienteNome').value;
    const configLoja = document.getElementById('configLoja').checked ? '✅ Configuração Loja' : '🚫 Configuração Loja';
    const configImpressora = document.getElementById('configImpressora').checked ? '✅ Configuração/Teste impressora' : '🚫 Configuração/Teste impressora';
    const configCozinha = document.getElementById('configCozinha').checked ? '✅ Configuração Cozinha' : '🚫 Configuração Cozinha';
    const configDelivery = document.getElementById('configDelivery').checked ? '✅ Configuração Delivery' : '🚫 Configuração Delivery';

    // Construa a parte das licenças instaladas
    let licencasTexto = '✅ Licenças Instaladas';
    licencasTextoArray.forEach(licenca => {
        licencasTexto += '\n\t✅ ' + licenca;
    });

    const configModuloFiscal = document.getElementById('configModuloFiscal').checked ? '✅ Configuração/Teste Módulo Fiscal' : '🚫 Configuração/Teste Módulo Fiscal';
    const comments = document.getElementById('comments_fase1').value;

    // Crie o modelo da mensagem
    const message = `☑️ *${clienteNome}*\n\nSETUP 1 FASE = RESPONSÁVEL EQUIPE SUPORTE TÉCNICO\n\n${configLoja}\n${configImpressora}\n${configCozinha}\n${configDelivery}\n${licencasTexto}\n${configModuloFiscal}\n\n*⚠ Observações ⚠*\n\n${comments}\n\n\n✅ = FEITO 100%\n🚫 = NÃO FOI FEITO`;

    // Exiba a mensagem no textarea
    document.getElementById('messageOutput2').value = message;

    document.getElementById('copyButton_fase1').disabled = false;
}


licencasCheckbox.addEventListener('change', function () {
    if (licencasCheckbox.checked) {
        licencasTextContainer.style.display = 'block';
    } else {
        licencasTextContainer.style.display = 'none';
    }
});

function addLicenca() {
    const licencaTexto = licencasTextoInput.value;
    if (licencaTexto.trim() !== '') {
        licencasTextoArray.push(licencaTexto);
        licencasTextoInput.value = '';
        updateLicencasList();
    }
}

function updateLicencasList() {
    licencasUl.innerHTML = '';
    licencasTextoArray.forEach(licenca => {
        const li = document.createElement('li');
        li.textContent = licenca;
        licencasUl.appendChild(li);
    });
    licencasListContainer.style.display = 'block';
}



// Função genérica para copiar para a área de transferência
function copyToClipboard(outputId) {
    const output = document.getElementById(outputId);
    output.select();
    document.execCommand('copy');
    alert('Mensagem copiada para a área de transferência!');
}

// Função genérica para limpar o formulário
function clearForm(formId) {
    const form = document.getElementById(formId);
    form.reset();
}

