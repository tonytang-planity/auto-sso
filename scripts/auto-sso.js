// Clicking the verification button on the first page
if (window.location.href.startsWith("SSO_URL")) {
  const confirmBtn = document.getElementById("cli_verification_btn")
  confirmBtn?.click()
}

// Observing mutations on the second page
if (window.location.href.startsWith("DEVICE_URL")) {
  const observer = new MutationObserver((mutationsList, observer) => {        // Creating a MutationObserver to watch for changes in the DOM
    mutationsList.forEach(mutation => {                                       // Looping through each mutation in the mutations list
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {  // Checking if the mutation type is 'childList' and if nodes were added to the DOM
        const allowBtn = document.getElementById("cli_login_button")
        allowBtn?.click()
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}
