document.addEventListener("DOMContentLoaded", function () {

  const rows = document.querySelectorAll(".nv-offer-row");

  function getQtyInput() {
    return (
      document.querySelector('[name="quantity"]') ||
      document.querySelector('[id^="Quantity"]') ||
      document.querySelector('.quantity__input')
    );
  }

  function setQuantity(qty) {
    const input = getQtyInput();
    console.log("Found input:", input);

    if (input) {
      input.value = qty;

      // ❌ DO NOT trigger change or input
      // Theme automatically reads input.value
    }
  }

  rows.forEach((row) => {
    const radio = row.querySelector("input[type='radio']");

    row.addEventListener("click", () => {
      rows.forEach((r) => r.classList.remove("is-active"));
      row.classList.add("is-active");

      radio.checked = true;

      const qty = parseInt(row.getAttribute("data-qty"));
      setQuantity(qty);
    });
  });

});




  const testimonials = [
    {
      text: `"This is a value for money product, smells good and nice, I tried 2 of them, Cool water and Oud both are great."`,
      author: "– Vivek Sharma",
      stars: "★★★★★"
    },
    {
      text: `"Vedic range is good, I added this to my mother's car and she loved the fragrance."`,
      author: "– Deepti",
      stars: "★★★★★"
    },
    {
      text: `"Long lasting and premium look and feel. Highly recommended."`,
      author: "– Shraddha K.",
      stars: "★★★★☆"
    }
  ];

  const tText = document.getElementById("tText");
  const tAuthor = document.getElementById("tAuthor");
  const tStars = document.getElementById("tStars");

  let current = 0;

  function renderSlide(i) {
    const item = testimonials[i];
    tText.textContent = item.text;
    tAuthor.textContent = item.author;
    tStars.textContent = item.stars;
  }

  document.getElementById("prevBtn").addEventListener("click", () => {
    current = (current - 1 + testimonials.length) % testimonials.length;
    renderSlide(current);
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    current = (current + 1) % testimonials.length;
    renderSlide(current);
  });

 
  renderSlide(current);

  
  document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.custom-tab-title');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const parent = tab.parentElement;
        parent.classList.toggle('open');
      });
    });
  });
