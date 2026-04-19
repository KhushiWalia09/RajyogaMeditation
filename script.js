function showPage(pageId) {
  // Find current active page
  const current = document.querySelector('.page.active');
  
  if (current) {
    if (current.id === pageId) return; // do nothing if it's the same page
    current.classList.remove('active');
  }

  // Adding a slight delay creates a much smoother crossfade/overlap effect
  setTimeout(() => {
    const next = document.getElementById(pageId);
    if (next) {
      next.classList.add('active');
    }
  }, 150);
}

function switchTab(evt, tabId) {
  // Get all tab contents and hide them
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => {
    content.classList.remove('active');
  });

  // Get all tab buttons and remove active class
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.classList.remove('active');
  });

  // Show current tab and add active class to clicked button
  document.getElementById(tabId).classList.add('active');
  evt.currentTarget.classList.add('active');
}