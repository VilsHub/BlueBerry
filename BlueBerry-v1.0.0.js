"use strict"
addEventListener("load", ()=>{
    placeHolderActivator("BlueBerry_v1_0_0");
    responsiveWrap();
}, false)
function placeHolderActivator(formVersion){
    setPlaceholderState(formVersion);
    var forms = document.querySelectorAll("."+formVersion);
    registerFields(forms);
    document.addEventListener("focusin", function(e){
        if(e.target.getAttribute("data-bb") == "1"){
            var parent = e.target.parentNode;
            parent.setAttribute("data-state", "active");
        }
    }, false);
    document.addEventListener("focusout", function(e){
        if(e.target.getAttribute("data-bb") == "1"){
            if(e.target.value.length < 1){
                var parent = e.target.parentNode;
                parent.setAttribute("data-state", "inactive");
            }
        }
        
    }, false);
}
function setPlaceholderState(formVersion){
    var formInput = document.querySelectorAll("."+formVersion+ " input");
    var formTextarea = document.querySelectorAll("."+formVersion+ "textarea");
    if(formInput != null){
        for(var x = 0; x<formInput.length;x++){
            var parent = formInput[x].parentNode;
            if(formInput[x].value.length < 1){
                parent.setAttribute("data-state", "inactive");
            }else{
                parent.setAttribute("data-state", "active");
            }
        }
    }
    if(formTextarea != null){
        for(var x = 0; x<formTextarea.length;x++){
            var parent = formTextarea[x].parentNode;
            if(formTextarea[x].value.length < 1){
                parent.setAttribute("data-state", "inactive");
            }else{
                parent.setAttribute("data-state", "active");
            }
        }
    }
}
function registerFields(forms){
    forms.forEach(element => {
        var allinputs = element.querySelectorAll("*");
        var total = allinputs.length;
        for(var x=0; x<total; x++){
            if(allinputs[x].getAttribute("type") == "text" || allinputs[x].nodeName == "TEXTAREA"){
                allinputs[x].setAttribute("data-bb", "1")
            }
        }
    });
}
function responsiveWrap(){
    wrapInput1();
    wrapInput2();
    addEventListener("resize", ()=>{
        wrapInput1();
        wrapInput2();
    }, false)

    function wrapInput1 (){
        var allWrappable = document.querySelectorAll(".family-input[data-wrapViewPort]");
        var totalWrappable = allWrappable.length;
        for (var x=0; x<totalWrappable; x++){
            var wrapViewPort  = allWrappable[x].getAttribute("data-wrapViewPort");
            if(innerWidth <= wrapViewPort){
                allWrappable[x].classList.add("wrap");
            }else{
                allWrappable[x].classList.remove("wrap");
            }
        }
    }
    function wrapInput2 (){
        var allWrappable = document.querySelectorAll(".labeled-input[data-wrapViewPort]");
        var totalWrappable = allWrappable.length;
        for (var x=0; x<totalWrappable; x++){
            var wrapViewPort  = allWrappable[x].getAttribute("data-wrapViewPort");
            if(innerWidth <= wrapViewPort){
                allWrappable[x].classList.add("wrap");
            }else{
                allWrappable[x].classList.remove("wrap");
            }
        }
    }
}