function handleProductChange(product,isIncrease){




    const productInput=document.getElementById(product+'-count');
    const productCount=parseInt(productInput.value);
    let productNewCount=productCount;
    if(isIncrease==true){
        productNewCount=productNewCount+1;
    }
    if(isIncrease==false){
        if(productNewCount>0){
        productNewCount=productNewCount-1;
    }}

    productInput.value=productNewCount;
    let productPrice=0;
    if(product=='case'){
    productPrice=productPrice+productNewCount*59;}
    if(product=='phone'){
        productPrice=productPrice+productNewCount*1219;}
    document.getElementById(product+'-price').innerText='$'+productPrice;

totalPrice();


}


    function totalPrice(){
const caseCount=productCount('case');
const phoneCount=productCount('phone');
   
  
    
    
const totalPrice=caseCount*59+phoneCount*1219;
document.getElementById('subtotal').innerText='$'+totalPrice;


const taxAmount=document.getElementById('tax');
let taxCalculate=0;
taxCalculate=Math.round(taxCalculate+totalPrice*0.1);
document.getElementById('tax').innerText='$'+taxCalculate;


const mainTotal= document.getElementById('total');
let finalTotal=0;
finalTotal=finalTotal+taxCalculate+totalPrice;

document.getElementById('total').innerText='$'+finalTotal;




    }

    function productCount(product){


        const productInput=document.getElementById(product+'-count');
    const productCount=parseInt(productInput.value);
    return productCount; 


    }


    // function crossSign (){

    //     let removeItem = document.getElementsByClassName('remove-item');
    //     for (let i = 0; i < removeItem.length; i++)
    //     { const element=removeItem[i].addEventListener('click', function () {
    //     this.parentElement.parentElement.parentElement.remove();
    //     })
    //     }

       


    // }


    //Removing Mobile Here

//  document.getElementById('phone').addEventListener('click',function(){

       
//             const caseCount=productCount('case');
//             const phoneCount=0;   
            
//         const totalPrice=caseCount*59+phoneCount*1219;
//         document.getElementById('subtotal').innerText='$'+totalPrice;
        
        
//         const taxAmount=document.getElementById('tax');
//         let taxCalculate=0;
//         taxCalculate=Math.round(taxCalculate+totalPrice*0.1);
//         document.getElementById('tax').innerText='$'+taxCalculate;
        
        
//         const mainTotal= document.getElementById('total');
//         let finalTotal=0;
//         finalTotal=finalTotal+taxCalculate+totalPrice;
//         document.getElementById('total').innerText='$'+finalTotal;})
        
        


        //Removing Case Here
        // document.getElementById('case').addEventListener('click',function(){

       
        //     const phoneCount=productCount('phone');
        //     const caseCount=0;   
            
        // const totalPrice=caseCount*59+phoneCount*1219;
        // document.getElementById('subtotal').innerText='$'+totalPrice;
        
        
        // const taxAmount=document.getElementById('tax');
        // let taxCalculate=0;
        // taxCalculate=Math.round(taxCalculate+totalPrice*0.1);
        // document.getElementById('tax').innerText='$'+taxCalculate;
        
        
        // const mainTotal= document.getElementById('total');
        // let finalTotal=0;
        // finalTotal=finalTotal+taxCalculate+totalPrice;
        // document.getElementById('total').innerText='$'+finalTotal;})

  


       
           

        document.getElementById('myButton').addEventListener('click',function(){

            document.getElementById('shoppingCart').style.display="none";
        
            document.getElementById('success').style.display="block";
            
        const finalCost=document.getElementById('total').innerText;
        
        document.getElementById('finalAmount').innerText=" "+finalCost;







        })