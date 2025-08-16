







  document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function() {
    document.body.style.display = "none";
  });
    
    const links = document.querySelectorAll(".tabbtnflex .tab-link");
    const sectionIds = {
      0: "shopify-section-template--18784325140702__featured_collection_nkbx8d",
      1: "shopify-section-template--18784325140702__featured_collection_fRGdLt",
      2: "shopify-section-template--18784325140702__featured_collection_kaqNUz"
    };

    const sections = Object.values(sectionIds).map(id => document.getElementById(id));

    // Add tab-section class and show only the first one
    sections.forEach((section, index) => {
      section.classList.add("tab-section");
      if (index === 0) section.classList.add("active");
    });

    links.forEach((link, index) => {
      link.addEventListener("click", function () {
        // Update tab active states
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");

        // Hide all sections and show the selected one
        sections.forEach((section, i) => {
          section.classList.remove("active");
        });

        document.getElementById(sectionIds[index]).classList.add("active");
      });
    });
  });



  window.addEventListener("load", function() {
    document.body.style.display = "block";
  });








