const style = document.createElement('style');
style.innerHTML = `
  section[data-testid^="conversation-turn"] {
    content-visibility: auto;
    contain-intrinsic-size: auto 200px;
  }
`;
document.head.appendChild(style);

console.log("Lag Killer Pro: Динамический рендеринг активирован!");

const HARD_LIMIT = 30;

function deepClean() {
    const turns = document.querySelectorAll('section[data-testid^="conversation-turn"]');
    if (turns.length <= HARD_LIMIT) return;

    const hideCount = turns.length - HARD_LIMIT;
    turns.forEach((turn, index) => {
        if (index < hideCount) {
            turn.style.display = 'none';
        }
    });
}

const observer = new MutationObserver(() => {
    deepClean();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
