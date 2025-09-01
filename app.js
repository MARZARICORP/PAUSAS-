// Dados centralizados de todas as equipas
const teamsData = {
  frontOffice: [
    { "nome": "CARLA QUITONGO", "pausa_manha": "11:15", "almoco": "13:30", "pausa_tarde": "16:20" },
    { "nome": "ALDAIR VILENGALENGA", "pausa_manha": "12:20", "almoco": "14:30", "pausa_tarde": "17:00" },
    { "nome": "GABRIELLY VIDAL", "pausa_manha": "12:20", "almoco": "15:00", "pausa_tarde": "17:10" },
    { "nome": "JOAO ALVES", "pausa_manha": "12:20", "almoco": "15:00", "pausa_tarde": "17:10" },
    { "nome": "MAYARA FERREIRA", "pausa_manha": "11:05", "almoco": "13:00", "pausa_tarde": "16:00" },
    { "nome": "MARIA EDUARDA SOARES", "pausa_manha": "12:00", "almoco": "14:00", "pausa_tarde": "16:30" },
    { "nome": "JULIANA FERREIRA", "pausa_manha": "12:10", "almoco": "14:00", "pausa_tarde": "16:30" },
    { "nome": "FELIPE RAMOS", "pausa_manha": "12:20", "almoco": "14:30", "pausa_tarde": "17:00" },
    { "nome": "DAVID SALVADOR", "pausa_manha": "12:10", "almoco": "14:30", "pausa_tarde": "17:00" },
    { "nome": "GUILHERME RIBEIRO", "pausa_manha": "12:10", "almoco": "14:00", "pausa_tarde": "16:30" },
    { "nome": "SIMONE AQUINO", "pausa_manha": "11:05", "almoco": "12:30", "pausa_tarde": "16:00" },
    { "nome": "SILVIA MANUEL", "pausa_manha": "11:15", "almoco": "13:30", "pausa_tarde": "16:20" },
    { "nome": "ROSANGELA FLORENTINO", "pausa_manha": "12:00", "almoco": "13:30", "pausa_tarde": "16:20" },
    { "nome": "ALINE MORENO", "pausa_manha": "11:05", "almoco": "12:30", "pausa_tarde": "16:00" },
    { "nome": "TEREZA CAMARGOS", "pausa_manha": "12:00", "almoco": "13:30", "pausa_tarde": "16:20" },
    { "nome": "BENVINDA BENJAMIN", "pausa_manha": "11:15", "almoco": "13:00", "pausa_tarde": "16:10" },
    { "nome": "MARIA MANUELA SILVA", "pausa_manha": "11:15", "almoco": "13:00", "pausa_tarde": "16:10" }
  ],
  welcome: [
    { "nome": "MARIANA MOURA", "pausa_manha": "12:45", "almoco": "15:00", "pausa_tarde": "17:30" },
    { "nome": "REBECA CERQUEIRA", "pausa_manha": "11:00", "almoco": "13:00", "pausa_tarde": "16:00" },
    { "nome": "LUANA HUPP", "pausa_manha": "11:30", "almoco": "13:30", "pausa_tarde": "16:30" },
    { "nome": "ELOA MARINHO", "pausa_manha": "12:45", "almoco": "15:00", "pausa_tarde": "17:30" },
    { "nome": "JOHNATHAN SANTOS", "pausa_manha": "11:30", "almoco": "13:30", "pausa_tarde": "16:30" }
  ],
  fidelizacao: [
    { "nome": "DANIELA FIALHO", "pausa_manha": "11:00", "almoco": "13:00", "pausa_tarde": "16:00" },
    { "nome": "ELIANE FERREIRA", "pausa_manha": "11:00", "almoco": "13:00", "pausa_tarde": "16:00" },
    { "nome": "RICARDO GONÇALVES", "pausa_manha": "12:45", "almoco": "15:00", "pausa_tarde": "17:30" },
    { "nome": "HIGOR REIS", "pausa_manha": "11:00", "almoco": "13:00", "pausa_tarde": "16:00" },
    { "nome": "LISSA SANTOS", "pausa_manha": "12:45", "almoco": "15:00", "pausa_tarde": "17:30" }
  ],
  maisIberdrola: [
    { "nome": "JASMIM DELGADO", "pausa_manha": "11:00", "almoco": "15:00", "pausa_tarde": "17:00" },
    { "nome": "ANDERSON RODRIGUES", "pausa_manha": "12:45", "almoco": "15:00", "pausa_tarde": "17:30" },
    { "nome": "GISELE FERRARI", "pausa_manha": "12:30", "almoco": "14:00", "pausa_tarde": "17:30" },
    { "nome": "INÊS SANTOS", "pausa_manha": "12:45", "almoco": "15:00", "pausa_tarde": "17:30" },
    { "nome": "LUISA SANTOS", "pausa_manha": "11:30", "almoco": "13:30", "pausa_tarde": "16:30" },
    { "nome": "ISORQUIA FELICIANO", "pausa_manha": "11:00", "almoco": "13:00", "pausa_tarde": "16:00" },
    { "nome": "BERNARDO MELO", "pausa_manha": "11:30", "almoco": "13:30", "pausa_tarde": "16:30" },
    { "nome": "JOSE JORGE", "pausa_manha": "12:30", "almoco": "14:00", "pausa_tarde": "17:30" },
    { "nome": "NIDIA COSTA", "pausa_manha": "11:00", "almoco": "13:00", "pausa_tarde": "-" },
    { "nome": "SHELCIA CONGO", "pausa_manha": "11:00", "almoco": "13:00", "pausa_tarde": "16:00" }
  ]
};

// Variáveis globais
let currentTeam = 'frontOffice';
let searchQuery = '';

// Elementos DOM
let assistentesGrid, searchInput, teamTabButtons, totalAssistentesEl, filteredCountEl, noResultsEl;

// Função para criar o HTML de um card de assistente
function createAssistenteCard(assistente) {
  return `
    <div class="assistente-card" data-nome="${assistente.nome.toLowerCase()}">
      <div class="card-header">
        <h3 class="assistente-nome">
          <i class="fas fa-user"></i>
          ${assistente.nome}
        </h3>
      </div>
      <div class="card-body">
        <div class="pausas-list">
          <div class="pausa-item">
            <div class="pausa-info">
              <div class="pausa-icon pausa-icon--manha">
                <i class="fas fa-sun"></i>
              </div>
              <span class="pausa-label">Pausa Manhã</span>
            </div>
            <span class="pausa-horario">${assistente.pausa_manha}</span>
          </div>
          <div class="pausa-item">
            <div class="pausa-info">
              <div class="pausa-icon pausa-icon--almoco">
                <i class="fas fa-utensils"></i>
              </div>
              <span class="pausa-label">Almoço</span>
            </div>
            <span class="pausa-horario">${assistente.almoco}</span>
          </div>
          <div class="pausa-item">
            <div class="pausa-info">
              <div class="pausa-icon pausa-icon--tarde">
                <i class="fas fa-moon"></i>
              </div>
              <span class="pausa-label">Pausa Tarde</span>
            </div>
            <span class="pausa-horario">${assistente.pausa_tarde}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Função para renderizar os assistentes
function renderAssistentes(assistentes) {
  if (!assistentesGrid) return;
  
  if (assistentes.length === 0) {
    assistentesGrid.innerHTML = '';
    assistentesGrid.style.display = 'none';
    if (noResultsEl) noResultsEl.style.display = 'block';
  } else {
    assistentesGrid.style.display = 'grid';
    if (noResultsEl) noResultsEl.style.display = 'none';
    assistentesGrid.innerHTML = assistentes.map(createAssistenteCard).join('');
  }
  
  updateStats(assistentes.length);
  setTimeout(addCardAnimations, 50);
}

// Função para atualizar estatísticas
function updateStats(filteredCount) {
    const currentTeamData = teamsData[currentTeam] || [];
    if (totalAssistentesEl) totalAssistentesEl.textContent = currentTeamData.length;
    if (filteredCountEl) filteredCountEl.textContent = filteredCount;
}

// Função para filtrar assistentes por busca
function filterBySearch(assistentes, query) {
  if (!query || !query.trim()) return assistentes;
  const searchTerm = query.toLowerCase().trim();
  return assistentes.filter(assistente => 
    assistente.nome.toLowerCase().includes(searchTerm)
  );
}

// Função principal para aplicar filtros
function applyFilters() {
  let result = teamsData[currentTeam] || [];
  
  if (searchQuery && searchQuery.trim()) {
    result = filterBySearch(result, searchQuery);
  }
  
  renderAssistentes(result);
}

// Função para configurar event listeners
function setupEventListeners() {
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      applyFilters();
    });
  }
  
  if (teamTabButtons) {
    teamTabButtons.forEach(button => {
      button.addEventListener('click', function() {
        teamTabButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        currentTeam = this.dataset.team;
        searchQuery = '';
        searchInput.value = '';

        applyFilters();
      });
    });
  }
}

// Função de inicialização
function init() {
  assistentesGrid = document.getElementById('assistentesGrid');
  searchInput = document.getElementById('searchInput');
  teamTabButtons = document.querySelectorAll('.team-tab-btn');
  totalAssistentesEl = document.getElementById('totalAssistentes');
  filteredCountEl = document.getElementById('filteredCount');
  noResultsEl = document.getElementById('noResults');
  
  setupEventListeners();
  applyFilters();
}

// Função para adicionar animações aos cards
function addCardAnimations() {
  const cards = assistentesGrid.querySelectorAll('.assistente-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 80);
  });
}

// Função para destacar horário atual
function highlightCurrentBreak() {
  const now = new Date();
  const currentTime = now.getHours().toString().padStart(2, '0') + ':' + 
                     now.getMinutes().toString().padStart(2, '0');
  
  const horarios = document.querySelectorAll('.pausa-horario');
  horarios.forEach(horario => {
    // Reset style
    horario.style.background = '';
    horario.style.color = '';
    
    // Apply style if matches
    if (horario.textContent === currentTime) {
      horario.style.background = 'var(--color-primary)';
      horario.style.color = 'var(--color-btn-primary-text)';
    }
  });
}

// Event listener para carregar a app
document.addEventListener('DOMContentLoaded', init);

// Executar highlight a cada minuto
setInterval(highlightCurrentBreak, 60000);
// Executar uma vez no carregamento
setTimeout(highlightCurrentBreak, 1000);
