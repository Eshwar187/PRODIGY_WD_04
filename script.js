document.querySelectorAll(".reveal")
    .forEach(function(elem){
        var parent=document.createElement("span");
        var child=document.createElement("span");

        parent.classList.add("parent");
        child.classList.add("child");

        child.innerHTML=elem.innerHTML;
        parent.appendChild(child);

        elem.innerHTML="";
        elem.appendChild(parent);
})
function loadAnimation(){
    var t1=gsap.timeline()
    t1
        .from(".child span",{
            x:100,
            stagger:.1,
            duration:1,
            ease:Power3.easeInOut,
        })
        .to(".parent .child",{
            y:"-100%",
            duration:0.5,
            ease:Circ.easeInOut,
        })
        .to("#loader",{
            height:0,
            duration:1,
            ease:Circ.easeInOut,
        })
        .to("#green",{
            height:"100%",
            top:0,
            duration:1,
            delay:-1,
            ease:Circ.easeInOut,
        })
        .to("#green",{
            height:0,
            duration:0.3,
            ease:Circ.easeInOut,
        })
}
function firstAnimation(){
    var t2=gsap.timeline()
    t2
        .from("#first h1",{
            y:"200%",
            stagger:2,
            duration:8,
        })
        .from("#second h1",{
            x:"105%",
            stagger:8,
            duration:2,
            delay:-1,
        })
        .to("#first h5",{
            y:"-20%",
            stagger:2,
            duration:1,
            opacity:"22%",
        })
        .to("#first h4",{
            y:"-20%",
            stagger:2,
            duration:1,
            opacity:"25%",
        })
}

loadAnimation();
firstAnimation();

    

