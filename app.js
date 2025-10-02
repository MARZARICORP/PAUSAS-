// Dados centralizados de todas as equipas
const teamsData = {
  frontOffice: [
    { "nome": "CARLA QUITONGO", "pausa_manha": "11:20", "almoco": "13:00", "pausa_tarde": "16:15" },
    { "nome": "ALDAIR VILENGALENGA", "pausa_manha": "12:00", "almoco": "14:00", "pausa_tarde": "17:15" },
    { "nome": "GABRIELLY VIDAL", "pausa_manha": "12:00", "almoco": "14:00", "pausa_tarde": "17:15" },
    { "nome": "JOAO ALVES", "pausa_manha": "11:35", "almoco": "13:30", "pausa_tarde": "16:30" },
    { "nome": "MAYARA FERREIRA", "pausa_manha": "11:20", "almoco": "13:00", "pausa_tarde": "16:16" },
    { "nome": "MARIA EDUARDA SOARES", "pausa_manha": "12:00", "almoco": "14:00", "pausa_tarde": "17:15" },
    { "nome": "JULIANA FERREIRA", "pausa_manha": "11:35", "almoco": "13:30", "pausa_tarde": "16:30" },
    { "nome": "FELIPE RAMOS", "pausa_manha": "12:15", "almoco": "14:30", "pausa_tarde": "17:25" },
    { "nome": "GUILHERME RIBEIRO", "pausa_manha": "11:20", "almoco": "13:00", "pausa_tarde": "16:15" },
    { "nome": "SIMONE AQUINO", "pausa_manha": "11:05", "almoco": "12:30", "pausa_tarde": "16:00" },
    { "nome": "SILVIA MANUEL", "pausa_manha": "11:20", "almoco": "13:00", "pausa_tarde": "16:15" },
    { "nome": "ALINE MORENO", "pausa_manha": "11:05", "almoco": "12:30", "pausa_tarde": "16:00" },
    { "nome": "TEREZA CAMARGOS", "pausa_manha": "12:00", "almoco": "14:00", "pausa_tarde": "17:15" },
    { "nome": "BENVINDA BENJAMIN", "pausa_manha": "11:05", "almoco": "12:30", "pausa_tarde": "16:00" },
    { "nome": "ANA PANEGASSI", "pausa_manha": "12:15", "almoco": "14:30", "pausa_tarde": "17:25" },
    { "nome": "ROSA SANTOS", "pausa_manha": "12:15", "almoco": "14:30", "pausa_tarde": "17:25" },
    { "nome": "LEANDRA MAURICIO", "pausa_manha": "12:30", "almoco": "15:00", "pausa_tarde": "17:40" },
    { "nome": "JOSÉ MALUCO", "pausa_manha": "12:30", "almoco": "15:00", "pausa_tarde": "17:40" },
    { "nome": "THEREZA QUEIROZ", "pausa_manha": "12:30:15", "almoco": "15:00", "pausa_tarde": "17:40" },
    { "nome": "VINICIUS BARROS", "pausa_manha": "12:30", "almoco": "15:00", "pausa_tarde": "17:40" },
    { "nome": "MARIA MANUELA SILVA", "pausa_manha": "11:05", "almoco": "12:30", "pausa_tarde": "16:00" }
  ],
  welcome: [
    { "nome": "MARIANA MOURA", "pausa_manha": "11:30", "almoco": "14:00", "pausa_tarde": "17:00" },
    { "nome": "REBECA CERQUEIRA", "pausa_manha": "11:00", "almoco": "13:00", "pausa_tarde": "16:00" },
    { "nome": "LUANA HUPP", "pausa_manha": "12:14", "almoco": "15:00", "pausa_tarde": "17:30" },
    { "nome": "ELOA MARINHO", "pausa_manha": "11:30", "almoco": "14:00", "pausa_tarde": "16:30" },
    { "nome": "JOHNATHAN SANTOS", "pausa_manha": "13:30", "almoco": "16:00", "pausa_tarde": "17:45" }
  ],
  fidelizacao: [
    { "nome": "DANIELA FIALHO", "pausa_manha": "12:45", "almoco": "15:00", "pausa_tarde": "17:30" },
    { "nome": "ELIANE FERREIRA", "pausa_manha": "11:00", "almoco": "13:00", "pausa_tarde": "16:00" },
    { "nome": "RICARDO GONÇALVES", "pausa_manha": "11:30", "almoco": "13:30", "pausa_tarde": "17:00" },
    { "nome": "HIGOR REIS", "pausa_manha": "12:45", "almoco": "15:00", "pausa_tarde": "17:30" },
    { "nome": "LISSA SANTOS", "pausa_manha": "11:30", "almoco": "13:30", "pausa_tarde": "16:30" }
  ],
  maisIberdrola: [
    { "nome": "JASMIM DELGADO", "pausa_manha": "11:00", "almoco": "15:00", "pausa_tarde": "17:00" },
    { "nome": "ANDERSON RODRIGUES", "pausa_manha": "12:30", "almoco": "14:30", "pausa_tarde": "17:30" },
    { "nome": "KENNEDY ARAUJO", "pausa_manha": "11:00", "almoco": "13:00", "pausa_tarde": "16:30" },
    { "nome": "SEVERINA MARQUES", "pausa_manha": "12:30", "almoco": "14:30", "pausa_tarde": "17:30" },
    { "nome": "GISELE FERRARI", "pausa_manha": "12:30", "almoco": "14:00", "pausa_tarde": "17:30" },
    { "nome": "ISORQUIA FELICIANO", "pausa_manha": "12:30", "almoco": "14:30", "pausa_tarde": "17:30" },
    { "nome": "BERNARDO MELO", "pausa_manha": "12:45", "almoco": "15:00", "pausa_tarde": "17:30" },
    { "nome": "JOSE JORGE", "pausa_manha": "11:00", "almoco": "13:00", "pausa_tarde": "16:30" },
    { "nome": "NIDIA COSTA", "pausa_manha": "11:00", "almoco": "13:00", "pausa_tarde": "-" },
    { "nome": "SHELCIA CONGO", "pausa_manha": "12:45", "almoco": "15:00", "pausa_tarde": "17:30" }
  ],
  backoffice: [
    { "nome": "JOEL DIAS", "pausa_manha": "11:15", "almoco": "13:00", "pausa_tarde": "16:00" },
    { "nome": "GABRIELA CARDOSO", "pausa_manha": "11:00", "almoco": "13:00", "pausa_tarde": "16:00" },
    { "nome": "ALEXANDRO PINGUELLO", "pausa_manha": "12:30", "almoco": "15:00", "pausa_tarde": "17:40" }
  ],
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
// =================================================================
// NOVA FUNÇÃO PARA AGRUPAR E ORDENAR POR HORÁRIO
// =================================================================
function groupAndSortByBreaks(assistentes) {
    // 1. Agrupar assistentes por horários idênticos
    const groupedByBreaks = assistentes.reduce((acc, assistente) => {
        // Cria uma chave única para cada combinação de horários
        const key = `${assistente.pausa_manha}-${assistente.almoco}-${assistente.pausa_tarde}`;
        
        // Se a chave ainda não existe no acumulador, cria um array vazio para ela
        if (!acc[key]) {
            acc[key] = [];
        }
        
        // Adiciona o assistente ao grupo correspondente
        acc[key].push(assistente);
        return acc;
    }, {});

    // 2. Ordenar as chaves (os grupos de horários)
    const sortedKeys = Object.keys(groupedByBreaks).sort((a, b) => {
        const [manhaA, almocoA, tardeA] = a.split('-');
        const [manhaB, almocoB, tardeB] = b.split('-');

        // Compara pela pausa da manhã
        if (manhaA.localeCompare(manhaB) !== 0) {
            return manhaA.localeCompare(manhaB);
        }
        // Se a manhã for igual, compara pelo almoço
        if (almocoA.localeCompare(almocoB) !== 0) {
            return almocoA.localeCompare(almocoB);
        }
        // Se o almoço for igual, compara pela pausa da tarde
        return tardeA.localeCompare(tardeB);
    });

    // 3. Criar um novo array plano com os assistentes na ordem correta
    const sortedAssistentes = sortedKeys.reduce((acc, key) => {
        // Dentro de cada grupo, podemos ordenar por nome para consistência
        const sortedGroup = groupedByBreaks[key].sort((a, b) => a.nome.localeCompare(b.nome));
        return acc.concat(sortedGroup);
    }, []);

    return sortedAssistentes;
}


// Função para renderizar os assistentes
function renderAssistentes(assistentes) {
  if (!assistentesGrid) return;
  
  if (assistentes.length === 0) {
    assistentesGrid.innerHTML = '';
    // A linha de estilo foi removida
    if (noResultsEl) noResultsEl.style.display = 'block';
  } else {
    // A linha de estilo foi removida
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
  
  // =================================================================
  // MODIFICAÇÃO: Aplicar a ordenação por horários antes de filtrar
  // =================================================================
  result = groupAndSortByBreaks(result);
  
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
        if (searchInput) searchInput.value = '';

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
