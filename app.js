(() => {
  const copy = JSON.parse(document.getElementById('demo-content').textContent);
  const icon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>';
  const items = (id, values) => {
    const list = document.getElementById(id);
    list.replaceChildren(...values.map(value => {
      const item = document.createElement('li');
      item.innerHTML = icon;
      const label = document.createElement('span'); label.textContent = value;
      item.append(label); return item;
    }));
  };
  const set = (id, value) => document.getElementById(id).textContent = value;
  const selectTab = (buttons, button) => buttons.forEach(item => {
    item.setAttribute('aria-selected', String(item === button));
    item.tabIndex = item === button ? 0 : -1;
  });
  const scenarios = [...document.querySelectorAll('[data-scenario]')];
  scenarios.forEach(button => button.addEventListener('click', () => {
    const index = Number(button.dataset.scenario);
    selectTab(scenarios, button);
    document.getElementById('scenario-panel').setAttribute('aria-labelledby', button.id);
    set('demo-prompt', copy.demoPrompt[index]); set('demo-reply', copy.demoReply[index]);
    set('task-title', copy.taskTitles[index]); items('task-list', copy.tasks[index]);
    document.querySelectorAll('[data-agent]').forEach((agent, i) => agent.classList.toggle('active', i === index));
    set('approval-result', '');
  }));
  const modes = [...document.querySelectorAll('[data-mode]')];
  modes.forEach(button => button.addEventListener('click', () => {
    const mode = button.dataset.mode;
    selectTab(modes, button);
    document.getElementById('mode-panel').setAttribute('aria-labelledby', button.id);
    set('mode-title', copy[mode + 'Title']); set('mode-text', copy[mode + 'Text']);
    items('mode-list', copy[mode + 'Items']); set('mode-foot', copy[mode + 'Foot']);
    set('device-eyebrow', mode === 'local' ? copy.deviceTitle : copy.connected);
    set('device-model', mode === 'local' ? copy.deviceModel : (copy.lang === 'en' ? 'YOUR MODEL SERVICE' : '你的模型服务'));
  }));
  for (const buttons of [scenarios, modes]) buttons.forEach((button, index) => button.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % buttons.length;
    if (event.key === 'ArrowLeft') next = (index + buttons.length - 1) % buttons.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = buttons.length - 1;
    if (next === undefined) return;
    event.preventDefault(); buttons[next].focus(); buttons[next].click();
  }));
  document.getElementById('demo-approve').addEventListener('click', () => set('approval-result', copy.approved));
  document.getElementById('demo-deny').addEventListener('click', () => set('approval-result', copy.denied));
})();
