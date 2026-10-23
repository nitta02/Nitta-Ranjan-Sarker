const projectCards = [...document.querySelectorAll('.project-card')];
const filters = [...document.querySelectorAll('[data-filter]')];
const viewButtons = [...document.querySelectorAll('[data-view]')];
const projectList = document.querySelector('.project-list');
const emptyState = document.querySelector('.empty-state');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filters.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    let visibleCount = 0;
    projectCards.forEach((card) => {
      const visible = category === 'all' || card.dataset.category === category;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    emptyState.hidden = visibleCount !== 0;
  });
});

viewButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const matrix = button.dataset.view === 'matrix';
    projectList.classList.toggle('matrix-view', matrix);
    viewButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('view-active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
  });
});
