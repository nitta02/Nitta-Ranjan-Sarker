document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('inquiry-form');
  const firstStep = document.getElementById('step-one');
  const secondStep = document.getElementById('step-two');
  const stepLabel = document.getElementById('step-label');
  const next = document.getElementById('next-step');
  const back = document.getElementById('back-step');
  const name = form.elements.name;
  const email = form.elements.email;

  document.querySelectorAll('.reason-option input').forEach((input) => {
    input.addEventListener('change', () => {
      document.querySelectorAll('.reason-option').forEach((option) => option.classList.remove('selected'));
      input.closest('.reason-option').classList.add('selected');
    });
  });

  next.addEventListener('click', () => {
    if (!name.reportValidity() || !email.reportValidity()) return;
    firstStep.hidden = true;
    secondStep.hidden = false;
    stepLabel.textContent = 'Steps 2 of 2';
    form.elements.message.focus();
  });

  back.addEventListener('click', () => {
    secondStep.hidden = true;
    firstStep.hidden = false;
    stepLabel.textContent = 'Steps 1 of 2';
    next.focus();
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Project inquiry: ${data.get('reason')}`);
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nReason: ${data.get('reason')}\n\n${data.get('message')}`);
    window.location.href = `mailto:hello@tanmoyvision.design?subject=${subject}&body=${body}`;
  });
});
