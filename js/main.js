document.getElementById('output').style.visibility = 'hidden';


var currentMode='pounds';

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
    });
}

document.getElementById('lbsInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    var value = e.target.value;
    if(currentMode==='Pounds'){
        document.getElementById('item1Output').innerHTML = value/0.0022046;
        document.getElementById('item2Output').innerHTML = value/2.2046;
        document.getElementById('item3Output').innerHTML = value*16;
    }else if(currentMode==='Grams'){
        document.getElementById('item1Output').innerHTML = value/453.5929;
        document.getElementById('item2Output').innerHTML = value/1000;
        document.getElementById('item3Output').innerHTML = value*28.349492;
    }else if(currentMode==='Kilograms'){
        document.getElementById('item1Output').innerHTML = value/453.5929;
        document.getElementById('item2Output').innerHTML = value/1000;
        document.getElementById('item3Output').innerHTML = value*28.349492;
    }else{
        document.getElementById('item1Output').innerHTML = value/453.5929;
        document.getElementById('item2Output').innerHTML = value/1000;
        document.getElementById('item3Output').innerHTML = value*28.349492;
    }

});










function prepareCards(){
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





