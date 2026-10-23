document.querySelectorAll('.filters [data-filter]').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filters [data-filter]').forEach((item) => {
      const selected = item === button;
      item.classList.toggle('selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('.experience-card').forEach((card) => {
      card.hidden = filter !== 'all' && !card.dataset.tags.split(' ').includes(filter);
    });
  });
});
