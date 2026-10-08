"use strict";
const detalhes = [...document.querySelectorAll("details")];
const expandir = document.getElementById("expandir");
const feedback = document.getElementById("feedback");
function atualizarBotao() {
  expandir.textContent = detalhes.every(item => item.open)
    ? "Fechar exemplos e modelos" : "Abrir todos os exemplos e modelos";
}
expandir.addEventListener("click", () => {
  const abrir = !detalhes.every(item => item.open);
  detalhes.forEach(item => { item.open = abrir; });
  atualizarBotao();
});
detalhes.forEach(item => item.addEventListener("toggle", atualizarBotao));
document.querySelectorAll("[data-copy]").forEach(botao => {
  botao.addEventListener("click", async () => {
    const alvo = document.getElementById(botao.dataset.copy);
    try {
      if (!navigator.clipboard) throw new Error("Clipboard indisponível");
      await navigator.clipboard.writeText(alvo.textContent);
      feedback.textContent = "Modelo copiado. Cole no seu editor para preencher e conferir o limite de páginas.";
      botao.textContent = "Copiado para a área de transferência";
    } catch {
      const range = document.createRange();
      range.selectNodeContents(alvo);
      const selecao = window.getSelection();
      selecao.removeAllRanges();
      selecao.addRange(range);
      alvo.focus();
      feedback.textContent = "Texto selecionado. Use Ctrl+C (ou a opção Copiar do navegador) e cole no seu editor.";
      botao.textContent = "Texto selecionado · use Copiar";
    }
  });
});
let estadoAntesDeImprimir = null;
window.addEventListener("beforeprint", () => {
  if (estadoAntesDeImprimir === null) estadoAntesDeImprimir = detalhes.map(item => item.open);
  detalhes.forEach(item => { item.open = true; });
});
window.addEventListener("afterprint", () => {
  if (estadoAntesDeImprimir !== null) {
    detalhes.forEach((item, i) => { item.open = estadoAntesDeImprimir[i]; });
    estadoAntesDeImprimir = null;
    atualizarBotao();
  }
});
document.getElementById("imprimir").addEventListener("click", () => window.print());
const links = [...document.querySelectorAll(".guia-nav a")];
function marcarSecao() {
  let atual = links[0];
  for (const link of links) {
    const titulo = document.querySelector(link.getAttribute("href"));
    if (titulo && titulo.getBoundingClientRect().top <= 190) atual = link;
  }
  links.forEach(link => {
    if (link === atual) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}
window.addEventListener("scroll", marcarSecao, { passive: true });
marcarSecao();
