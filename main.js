$(document).ready(function () {
     // Crea el primer formulario
     hbspt.forms.create({
        region: "na1",
        portalId: "8293688",
        formId: "a3a1f174-f7df-4daf-a78d-0a333c08aa58",
        target: "#formulario" // Indica el selector del primer formulario
    });

    // Crea el segundo formulario
    hbspt.forms.create({
        region: "na1",
        portalId: "8293688",
        formId: "61f53062-160b-493e-9fa9-af3717406974",
        target: "#formulario2" // Indica el selector del segundo formulario
    });


    // Crea el tercer formulario
  hbspt.forms.create({
    region: "na1",
    portalId: "45210627",
    formId: "6242fd3e-bb26-4018-82b2-9bd5e1c86937",
    target: "#formulario3" // Indica el selector del tercer formulario
  });









$(".boton a").click(function (e) { 
    e.preventDefault();

$(".form").css({
    opacity: 1,
    transition: "opacity 0.90s",
    "pointer-events": "initial"
  
  });
});


$(".boton_mobile a").click(function (e) { 
    e.preventDefault();

$(".form").css({
    opacity: 1,
    transition: "opacity 0.90s",
    "pointer-events": "initial"
   
  });
});


$(".equis").click(function (e) { 
    e.preventDefault();
   
    $(".form").css({
        opacity: 0,
        transition: "opacity 0.90s",
        "pointer-events": "none"
        
      });
});

    


























});