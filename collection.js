var search = document.getElementById("search");

var products = document.querySelectorAll(".product");


search.addEventListener("keyup", function(){

    var enteredValue = search.value.toLowerCase();


    products.forEach(function(product){

        var productName = product.querySelector("h2")
                                  .textContent
                                  .toLowerCase();


        if(productName.includes(enteredValue))
        {
            product.style.display = "block";
        }
        else
        {
            product.style.display = "none";
        }


    });

});