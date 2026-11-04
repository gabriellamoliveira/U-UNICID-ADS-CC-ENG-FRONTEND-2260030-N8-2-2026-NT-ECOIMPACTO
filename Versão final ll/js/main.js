/* EcoFuture — interações acessíveis e sem dependências externas */
(() => {
  "use strict";

  const safeGet = (key, fallback = null) => {
    try {
      const value = localStorage.getItem(key);
      return value === null ? fallback : value;
    } catch (_) { return fallback; }
  };
  const safeSet = (key, value) => {
    try { localStorage.setItem(key, value); return true; }
    catch (_) { return false; }
  };

  // Preferências de leitura persistentes entre páginas.
  const body = document.body;
  const contrast = document.getElementById("contrast-toggle");
  const largerText = document.getElementById("text-toggle");
  const applyPreference = (control, key, className) => {
    if (!control) return;
    const enabled = safeGet(key, "false") === "true";
    control.checked = enabled;
    body.classList.toggle(className, enabled);
    control.addEventListener("change", () => {
      body.classList.toggle(className, control.checked);
      safeSet(key, String(control.checked));
    });
  };
  applyPreference(contrast, "ecofuture-high-contrast", "high-contrast");
  applyPreference(largerText, "ecofuture-large-text", "large-text");

  // Compromissos: guarda apenas as opções marcadas neste navegador.
  document.querySelectorAll("[data-persist-checklist] input[type='checkbox']").forEach((item, index) => {
    const key = `ecofuture-commitment-${index}`;
    item.checked = safeGet(key, "false") === "true";
    item.addEventListener("change", () => safeSet(key, String(item.checked)));
  });

  // Formulário demonstrativo: não envia dados a um servidor.
  const form = document.getElementById("volunteer-form");
  const status = document.getElementById("form-status");
  if (form && status) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = Object.fromEntries(new FormData(form).entries());
      const saved = safeSet("ecofuture-volunteer-demo", JSON.stringify({
        name: data.name,
        email: data.email,
        interest: data.interest,
        savedAt: new Date().toISOString()
      }));
      status.textContent = saved
        ? "Cadastro demonstrativo salvo neste navegador. Nenhum dado foi enviado à equipe EcoFuture."
        : "Não foi possível salvar neste navegador. Seus dados não foram enviados.";
      status.classList.add("form-status");
      status.focus();
      if (saved) form.reset();
    });
  }

  // Ano automático no rodapé.
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
})();