

var tl=gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 90%",
    end:"50% 50%",
    scrub:true,
   
}});

tl.to(".fanta",{
    top:"125%",
    left:"6%",
    
},"orangehalf")

tl.to(".orangehalf",{
    top:"150%",
    left:"20%",
    rotate:360
},"orangehalf")

tl.to(".orange",{
    top:"163%",
    left:"85%",
    width:"12%"
    
},"orangehalf")

tl.to(".leaf1",{
    top:"110%",
    left:"85%",
    width:"10%",
    rotate:"150deg"
    
},"orangehalf")

tl.to(".leaf2",{
    top:"110%",
    left:"0%",
    width:"10%",
    rotate:"90deg"
    
},"orangehalf")

var tl2=gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 90%",
    end:"50% 50%",
    scrub:true,
   
}});


tl2.to(".fanta",{
    top:"220%",
    left:"35%"
},'ca')

tl2.to(".orangehalf",{
    top:"205%",
    left:"41%",
    rotate:"150deg"
},'ca')

tl2.to(".pepsi",{
    top:"215%",
    left:"14%",
    rotate:"0deg"
   
},'ca')

tl2.to(".cc",{
    top:"215%",
    right:"11%",
    rotate:"0deg"
   
},'ca')


tl2.to(".lemon1",{
    top:"200%",
    rotate:"360deg",
    left:"16%"
},'ca')

tl2.to(".lemon2",{
    top:"200%",
    rotate:"360deg",
    right:"16%"
},'ca')












