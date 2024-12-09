var models = [
  {
    name: "BMW 418d",
    image:"img/bmv.jpg",
    link: "http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe",
  },
  {
    name: "Mazda CX-3",
    image: "img/mazda.jpg",
    link: "http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe",
  },
  {
    name: "Volvo S60",
    image: "img/volvo.jpg",
    link: "http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe",
  },
  {
    name: "Skoda Superb",
    image: "img/skoda.jpg",
    link: "http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe",
  },
  {
    name: "Honda Civic",
    image: "img/honda.jpg",
    link: "http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe",
  },
];

var index = 2;
var slaytCount=models.length;
var interval;
var settings={
 duration:"2000",
 random:true,

};

init(settings);
document.querySelector(".fa-arrow-circle-left").addEventListener("click",function(){
index--;
showSlide(index);


});

document.querySelector(".fa-arrow-circle-right").addEventListener("click",function(){
index++;
showSlide(index);
console.log(index);

});

document.querySelectorAll(".arrow").forEach(function(item){
item.addEventListener("mouseenter",function(){
 clearInterval(interval);

})

})

document.querySelectorAll(".arrow").forEach(function(item){
  item.addEventListener("mouseleave",function(){
   init(settings);
  
  })
  
  })

function init(setttings){
  //setTimeout 2sn sonra diyelim başlıyor işletiliyor ve bir kere duruyor
  
  //setInterval
  //clearInterval sürekli belirtilen süre kadar işletilir ikiside 
  var prev;
  interval=setInterval(function(){

    if(settings.random){

      do{
        index=Math.floor(Math.random()*slaytCount);
      }while(index==prev)
      prev=index;
      //RANDOM İNDEX RANDOM TRUE İSE
    }
    else{
      //ARTAN İNDEX
      if(slaytCount==index+1){
        index=-1;
      }
      showSlide(index);
      index++;

    }
    showSlide(index)



  },settings.duration)//2 saniyede bir tekrarlanacak
}
function showSlide(i){
  index=i;
  if(i<0){
    index=slaytCount-1;
  }
  if(i>=slaytCount){
    index=0;
  }
  document.querySelector(".card-title").textContent = models[index].name;
  document.querySelector(".card-img-top").setAttribute("src", models[index].image);
  document.querySelector(".card-link").setAttribute("href", models[index].link);
  
}

