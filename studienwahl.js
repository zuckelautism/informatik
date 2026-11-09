(() => {
  const filter = document.getElementById("studyField");
  const cards = [...document.querySelectorAll(".study-profile")];
  const focus = document.getElementById("studyFocus");
  const question = document.getElementById("studyQuestion");
  const results = document.getElementById("studyResultCount");
  const update = () => {
    const field = filter.value;
    const interest = question.value;
    const visible = cards.filter(card => (field === "all" || card.dataset.field === field) &&
      (!interest || card.dataset.interest === interest));
    cards.forEach(card => { card.hidden = !visible.includes(card); });
    results.textContent = visible.length + (visible.length === 1 ? " passendes Studienprofil" : " passende Studienprofile");
    focus.hidden = !interest;
    focus.textContent = visible.length === 1
      ? "Lies das passende Profil und öffne die verlinkte Hochschulseite."
      : visible.length ? "Vergleiche zwei der angezeigten Profile und ihre nächsten Schritte." : "Versuche eine andere Auswahl.";
  };
  const params = new URLSearchParams(location.search);
  const field = params.get("bereich");
  if ([...filter.options].some(option => option.value === field)) filter.value = field;
  filter.addEventListener("change", () => { question.value = ""; update(); });
  question.addEventListener("change", () => { filter.value = "all"; update(); });
  document.getElementById("studyReset").addEventListener("click", () => {
    question.value = ""; filter.value = "all"; update(); question.focus();
  });
  const target = cards.find(card => card.id === location.hash.slice(1));
  if (target) filter.value = "all";
  update();
})();
