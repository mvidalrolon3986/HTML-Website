
  // Function to navigate between sections

  // Function to show the "About Us" section
  function showAbout() {
  hideAllSections();
  document.getElementById('about-section').style.display = 'block';
}

  // Function to show the "Home" section
  function showHome() {
  hideAllSections();
  document.getElementById('home-section').style.display = 'block';
}

  // Function to show the "Products" section
  function showProducts() {
  hideAllSections();
  document.getElementById('products-section').style.display = 'block';
}

  // Function to show the "Contact" section
  function showContact() {
  hideAllSections();
  document.getElementById('contact-section').style.display = 'block';
}

  // Function to hide all sections
  function hideAllSections() {
  const sections = ['about-section', 'home-section', 'products-section', 'contact-section'];
  sections.forEach((s) => {
  document.getElementById(s).style.display = 'none';
});
}
