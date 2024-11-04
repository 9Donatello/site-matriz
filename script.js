const showDateTimeCheckbox = document.getElementById('showDateTime');
const dateTimeFields = document.getElementById('dateTimeFields');

showDateTimeCheckbox.addEventListener('change', () => {
    if (showDateTimeCheckbox.checked) {
        dateTimeFields.style.display = 'block';
    } else {
        dateTimeFields.style.display = 'none';
    }
});

// index.html (JavaScript)
function submitForm(formData) {
    localStorage.setItem('formdata', JSON.stringify(formData));
    // Redirecionar para o dashboard
    window.location.href = 'dash.html';
  }

// dash.html (JavaScript)
const savedData = JSON.parse(localStorage.getItem('formdata'));

// Atualizando o dashboard com os dados
function populateDashboard(data) {
  // ... seu código para criar os elementos do dashboard
}

populateDashboard(savedData);

// Supondo que você tenha uma função para obter os dados do formulário (ex: getFormData())
function getFormData() {
    // Lógica para obter os dados do formulário index.html
    // Retornar um array de objetos, cada objeto representando um equipamento
    // Exemplo:
    return [
        { equipamento: 'SDV001SJC', velocidade: 40, periodo: '07:00-08:00' },
        // ... outros equipamentos
    ];
}

// Função para criar um elemento HTML para cada equipamento
function createEquipmentElement(data) {
    const div = document.createElement('div');
    div.classList.add('equipment-item');
    div.innerHTML = `
        <p>Equipamento: ${data.equipamento}</p>
        <p>Velocidade: ${data.velocidade} km/h</p>
        <p>Período: ${data.periodo}</p>
    `;
    return div;
}

// Função para popular o dashboard
function populateDashboard() {
    const dashboardContainer = document.getElementById('dashboard-container');
    const formData = getFormData();

    formData.forEach(data => {
        const equipmentElement = createEquipmentElement(data);
        dashboardContainer.appendChild(equipmentElement);
    });
}

// Chamar a função para popular o dashboard ao carregar a página
populateDashboard();