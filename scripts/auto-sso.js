const selectors = [
  "#cli_verification_btn", // verification button (firest step)
  '[data-testid="allow-access-button"]', // autorisation button (second step)
];

function clickWhenAvailable(selector) {
  const observer = new MutationObserver(() => {
    const element = document.querySelector(selector);

    if (element) {
      element.click();
      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

selectors.forEach(clickWhenAvailable);
