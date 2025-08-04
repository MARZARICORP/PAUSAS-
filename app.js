// Dados dos assistentes
const assistentesData = [
  {
    "nome": "CARLA QUITONGO",
    "pausa_manha": "11:05",
    "almoco": "12:30",
    "pausa_tarde": "16:00"
  },
  {
    "nome": "ALDAIR VILENGALENGA",
    "pausa_manha": "11:05",
    "almoco": "12:30",
    "pausa_tarde": "16:00"
  },
  {
    "nome": "GABRIELLY VIDAL",
    "pausa_manha": "11:05",
    "almoco": "12:30",
    "pausa_tarde": "16:00"
  },
  {
    "nome": "REBECA RODRIGUES",
    "pausa_manha": "11:15",
    "almoco": "13:00",
    "pausa_tarde": "16:10"
  },
  {
    "nome": "JOAO ALVES",
    "pausa_manha": "11:15",
    "almoco": "13:00",
    "pausa_tarde": "16:10"
  },
  {
    "nome": "STEFANY LOPES",
    "pausa_manha": "11:15",
    "almoco": "13:00",
    "pausa_tarde": "16:10"
  },
  {
    "nome": "MAYARA FERREIRA",
    "pausa_manha": "11:15",
    "almoco": "13:00",
    "pausa_tarde": "16:10"
  },
  {
    "nome": "MARIA EDUARDA SOARES",
    "pausa_manha": "11:25",
    "almoco": "13:30",
    "pausa_tarde": "16:20"
  },
  {
    "nome": "JULIANA FERREIRA",
    "pausa_manha": "11:25",
    "almoco": "13:30",
    "pausa_tarde": "16:20"
  },
  {
    "nome": "FELIPE RAMOS",
    "pausa_manha": "11:25",
    "almoco": "13:30",
    "pausa_tarde": "16:20"
  },
  {
    "nome": "ALEXANDRA SANTOS",
    "pausa_manha": "11:35",
    "almoco": "14:00",
    "pausa_tarde": "16:30"
  },
  {
    "nome": "DAVID SALVADOR",
    "pausa_manha": "11:35",
    "almoco": "14:00",
    "pausa_tarde": "16:30"
  },
  {
    "nome": "GUILHERME RIBEIRO",
    "pausa_manha": "11:35",
    "almoco": "14:00",
    "pausa_tarde": "16:30"
  },
  {
    "nome": "SIMONE AQUINO",
    "pausa_manha": "12:00",
    "almoco": "14:30",
    "pausa_tarde": "17:00"
  },
  {
    "nome": "SILVIA MANUEL",
    "pausa_manha": "12:00",
    "almoco": "14:30",
    "pausa_tarde": "17:00"
  },
  {
    "nome": "ROSANGELA FLORENTINO",
    "pausa_manha": "12:00",
    "almoco": "14:30",
    "pausa_tarde": "17:00"
  },
  {
    "nome": "ALINE MORENO",
    "pausa_manha": "12:00",
    "almoco": "14:30",
    "pausa_tarde": "17:00"
  },
  {
    "nome": "TEREZA CAMARGOS",
    "pausa_manha": "12:10",
    "almoco": "15:00",
    "pausa_tarde": "17:10"
  },
  {
    "nome": "BENVINDA BENJAMIN",
    "pausa_manha": "12:10",
    "almoco": "15:00",
    "pausa_tarde": "17:10"
  },
  {
    "nome": "JILVANIA CASSULE",
    "pausa_manha": "12:10",
    "almoco": "15:00",
    "pausa_tarde": "17:10"
  }
];

// Variáveis globais
let currentFilter = 'todos';
let searchQuery = '';

// Elementos DOM
let assistentesGrid;
let searchInput;
let filterButtons;
let totalAssistentesEl;
let filteredCountEl;
let noResultsEl;

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
    assistentesGrid.style.display = 'none';
    if (noResultsEl) noResultsEl.style.display = 'block';
  } else {
    assistentesGrid.style.display = 'grid';
    if (noResultsEl) noResultsEl.style.display = 'none';
    
    assistentesGrid.innerHTML = assistentes
      .map(assistente => createAssistenteCard(assistente))
      .join('');
  }
  
  // Atualizar estatísticas
  updateStats(assistentes.length);
}

// Função para atualizar estatísticas
function updateStats(filteredCount) {
  if (totalAssistentesEl) totalAssistentesEl.textContent = assistentesData.length;
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

// Função para filtrar assistentes por tipo de pausa
function filterByPauseType(assistentes, filterType) {
  if (filterType === 'todos') return assistentes;
  
  // Obter horários únicos para cada tipo de pausa
  const uniqueTimes = {
    manha: [...new Set(assistentes.map(a => a.pausa_manha))],
    almoco: [...new Set(assistentes.map(a => a.almoco))],
    tarde: [...new Set(assistentes.map(a => a.pausa_tarde))]
  };
  
  // Para demonstração, vamos mostrar assistentes com horários específicos
  switch (filterType) {
    case 'manha':
      // Mostrar assistentes com pausa manhã às 11:05 (primeiro grupo)
      return assistentes.filter(a => a.pausa_manha === '11:05');
    case 'almoco':
      // Mostrar assistentes com almoço às 12:30 (primeiro grupo)
      return assistentes.filter(a => a.almoco === '12:30');
    case 'tarde':
      // Mostrar assistentes com pausa tarde às 16:00 (primeiro grupo)
      return assistentes.filter(a => a.pausa_tarde === '16:00');
    default:
      return assistentes;
  }
}

// Função principal para aplicar filtros
function applyFilters() {
  let result = [...assistentesData];
  
  // Aplicar filtro de busca primeiro
  if (searchQuery && searchQuery.trim()) {
    result = filterBySearch(result, searchQuery);
  }
  
  // Aplicar filtro por tipo de pausa
  if (currentFilter !== 'todos') {
    result = filterByPauseType(result, currentFilter);
  }
  
  renderAssistentes(result);
}

// Função para configurar event listeners
function setupEventListeners() {
  // Event listener para busca
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      searchQuery = e.target.value;
      console.log('Search query:', searchQuery); // Debug
      applyFilters();
    });
    
    // Adicionar também keyup para garantir compatibilidade
    searchInput.addEventListener('keyup', function(e) {
      searchQuery = e.target.value;
      applyFilters();
    });
  }
  
  // Event listeners para filtros
  if (filterButtons) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remover classe active de todos os botões
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Adicionar classe active ao botão clicado
        this.classList.add('active');
        
        // Atualizar filtro atual
        currentFilter = this.dataset.filter;
        console.log('Filter changed to:', currentFilter); // Debug
        
        // Aplicar filtros
        applyFilters();
      });
    });
  }
}

// Função de inicialização
function init() {
  // Obter elementos DOM
  assistentesGrid = document.getElementById('assistentesGrid');
  searchInput = document.getElementById('searchInput');
  filterButtons = document.querySelectorAll('.filter-btn');
  totalAssistentesEl = document.getElementById('totalAssistentes');
  filteredCountEl = document.getElementById('filteredCount');
  noResultsEl = document.getElementById('noResults');
  
  // Verificar se os elementos foram encontrados
  console.log('Elements found:', {
    assistentesGrid: !!assistentesGrid,
    searchInput: !!searchInput,
    filterButtons: filterButtons.length,
    totalAssistentesEl: !!totalAssistentesEl,
    filteredCountEl: !!filteredCountEl,
    noResultsEl: !!noResultsEl
  });
  
  // Configurar event listeners
  setupEventListeners();
  
  // Renderizar todos os assistentes inicialmente
  renderAssistentes(assistentesData);
  
  // Adicionar animação aos cards
  setTimeout(addCardAnimations, 100);
}

// Função para adicionar animações aos cards
function addCardAnimations() {
  const cards = assistentesGrid.querySelectorAll('.assistente-card');
  
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 100);
  });
}

// Função para destacar horário atual
function highlightCurrentBreak() {
  const now = new Date();
  const currentTime = now.getHours().toString().padStart(2, '0') + ':' + 
                     now.getMinutes().toString().padStart(2, '0');
  
  const horarios = document.querySelectorAll('.pausa-horario');
  horarios.forEach(horario => {
    const time = horario.textContent;
    if (time === currentTime) {
      horario.style.background = 'var(--color-primary)';
      horario.style.color = 'white';
      horario.parentElement.style.background = 'var(--color-bg-1)';
    }
  });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app...'); // Debug
  init();
});

// Executar highlight a cada minuto
setInterval(highlightCurrentBreak, 60000);

// Executar uma vez no carregamento (com delay para garantir que os elementos estejam renderizados)
setTimeout(highlightCurrentBreak, 1000);