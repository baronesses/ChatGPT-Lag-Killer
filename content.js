// Внедряем магию динамического рендеринга прямо в стили страницы
const style = document.createElement('style');
style.innerHTML = `
  /* Это заставит браузер выгружать из памяти всё, что не видно на экране */
  section[data-testid^="conversation-turn"] {
    content-visibility: auto;
    contain-intrinsic-size: auto 200px; /* примерная высота блока для плавного скролла */
  }
`;
document.head.appendChild(style);

console.log("Lag Killer Pro: Динамический рендеринг активирован!");

// Жесткая зачистка: если чат перевалит за 100 сообщений, мы начнем физически прятать самые старые,
// так как даже content-visibility имеет свои пределы при гигантских объемах.
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

// Наблюдатель за новыми сообщениями
const observer = new MutationObserver(() => {
    deepClean();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});