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




