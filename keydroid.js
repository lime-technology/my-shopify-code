
<!-- Keydroid.js -->

$(document).ready(function() {
  var productInfoElement = document.querySelector('.product-info .smart_key_checkbox');
  var buttonElement = document.querySelector('.product-info .buy-buttons .active_btn');
  var inputElement = document.getElementById('modelInput'); 
  var selectElement = document.getElementById('selected_model');

  // Get the checkbox element by its ID
  var checkboxElement = document.getElementById('cb1');
  
  if (productInfoElement && checkboxElement && buttonElement) {
      checkboxElement.addEventListener('change', function() {
        
        if (checkboxElement.checked && inputElement.value.trim() !== '') {
          buttonElement.removeAttribute('disabled');
        } else {
          buttonElement.setAttribute('disabled', 'true');
        }

        if (document.querySelectorAll('#selected_model').length > 0 && selectElement.value == "default") {
          buttonElement.setAttribute('disabled', 'true');
        }
        
      });
      let typingTimer;
      inputElement.addEventListener('input', function() {
        clearTimeout(typingTimer);

        typingTimer = setTimeout(function() {
          console.log('User stopped typing:', inputElement.value);
          if (checkboxElement.checked && inputElement.value.trim() !== '') {
          buttonElement.removeAttribute('disabled');
        } else {
          buttonElement.setAttribute('disabled', 'true');
        }
        }, 500);
      });

    if (document.querySelectorAll('#selected_model').length > 0 ){
        selectElement.addEventListener('change', function() {
          if(document.querySelectorAll('#modelInput').length > 0){
            if (checkboxElement.checked && inputElement.value.trim() !== '') {
              buttonElement.removeAttribute('disabled');
            } else {
              buttonElement.setAttribute('disabled', 'true');
            }
          }else{
            if (checkboxElement.checked) {
              buttonElement.removeAttribute('disabled');
            } else {
              buttonElement.setAttribute('disabled', 'true');
            }
          }
  
          if (selectElement.value == "default") {
            buttonElement.setAttribute('disabled', 'true');
          }
        });
    }

  }
 

  $('.readmore').click(function (event) {
  event.preventDefault();
  var descriptionFull = $('.product-description-full');
  // descriptionFull.show();
  var descriptionShort = $('.product-description-short');
  // descriptionShort.hide();
      descriptionFull.addClass('visible');
        descriptionShort.addClass('invisible');
  });

  $('.readless').click(function (event) {
    event.preventDefault();
    var descriptionFull = $('.product-description-full');
    // descriptionFull.hide();
    var descriptionShort = $('.product-description-short');
    // descriptionShort.show();
    descriptionFull.removeClass('visible');  
    descriptionShort.removeClass('invisible');
  });  
});



        $(document).ready(function() {
          // find all img tags and add the oncontextmenu attribute
          $('img').attr('oncontextmenu', 'return false;');
        });
      
        $("#cart-drawer div:eq(0)").addClass("custom-scroll");
		(function($){
  			$(window).on("load",function(){
				$("#cart-drawer").mCustomScrollbar({
					theme:"minimal"
				});
			});
		})(jQuery);

        $('.moreless-button').click(function() {
          if ($('.moreless-button').text() == "Read more") {
              $(this).text("Read less")
            } else {
              $(this).text("Read more")
          }
          
          $('.moretext').slideToggle();
            
        });


    $(document).ready(function() {
    $('body.product_template.template_.blade-flip-smart-key-for-non-push-start-cars .smart_key_checkbox input').prop('checked', true);
});
      

  $(document).ready(function() {
$('button.button.button--xl.active_btn.smart_key_btn').addClass("my_class"); 
    
    $("buy-buttons.buy-buttons").click(function(){
       $('.model_select').addClass("error_active"); 
    })

    $("#selected_model").click(function(){
       $('button.button.button--xl.active_btn.smart_key_btn').removeClass("my_class"); 
       $('.model_select').removeClass("error_active"); 
      $('.model_select').addClass("remove_pera"); 
    })
});




      
document.addEventListener("DOMContentLoaded", function () {
  const copy_price_pera = document.querySelector('.copy_price_pera');
  const codShipping = document.querySelector('.actual-price');
  const updated_price = document.getElementById("updated_price");

  if (copy_price_pera) {
    const value = parseFloat(copy_price_pera.textContent);
    const roundedPricePlus = Math.floor(value);
    const pricePlus = roundedPricePlus + 99;
    codShipping.innerHTML = `₹${pricePlus}`;

    const minusPrice = roundedPricePlus - 1500;
    updated_price.innerHTML = `₹${minusPrice}`;
  }
});



 
