document.getElementById('output').style.visibility = 'hidden';


var currentMode='pounds';
var currentValue=0;
var value= document.getElementById('lbsInput').value;
var value1=document.getElementById('item1Output');
var value2=document.getElementById('item2Output');
var value3=document.getElementById('item3Output');

var x=document.getElementById('selection').querySelectorAll('button');

for(var i=0;i<x.length;i++){
    x[i].addEventListener('click',function(e){
        for(var j=0;j<x.length;j++){
            x[j].classList.remove('button-selected');
        }
        this.classList.add('button-selected');
        currentMode=this.innerHTML;
        console.log(currentMode);
        document.getElementById('lbsInput').placeholder="Enter "+currentMode+"...";
        prepareCards();
        calculation();
    });
}

document.getElementById('lbsInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    value = e.target.value;
    calculation();


});

function calculation(){

  console.log("calculation called");
  if(currentMode==='Pounds'){
       value1.innerHTML= value/0.0022046;
       value2.innerHTML= value/2.2046;
       value3.innerHTML= value/0.0625;
  }else if(currentMode==='Grams'){
       value1.innerHTML= value/453.5929;
       value2.innerHTML= value/1000;
       value3.innerHTML= value/28.349492;
  }else if(currentMode==='Kilograms'){
       value1.innerHTML= value/0.4535;
       value2.innerHTML= value/0.001;
       value3.innerHTML= value/0.02834;
  }else{
       value1.innerHTML = value/16;
       value2.innerHTML = value/0.035273;
       value3.innerHTML = value/35.279;
  }
}









function prepareCards(){
    console.log("preparecards called");
    var item1=document.getElementById('item1');
    var item2=document.getElementById('item2');
    var item3=document.getElementById('item3');




    if(currentMode==='Pounds'){
        item1.innerHTML='Grams:'
        item2.innerHTML='Kilograms:'
        item3.innerHTML='Ounces:'

    }else if(currentMode==='Grams'){
        item1.innerHTML='Pounds:'
        item2.innerHTML='Kilograms:'
        item3.innerHTML='Ounces:'
    }else if(currentMode==='Kilograms'){
        item1.innerHTML='Pounds:'
        item2.innerHTML='Grams:'
        item3.innerHTML='Ounces:'
    }else{
        item1.innerHTML='Pounds:'
        item2.innerHTML='Grams:'
        item3.innerHTML='Kilograms:'
    }

}
