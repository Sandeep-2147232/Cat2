

    
    var mname=document.getElementById('name');
    var memail=document.getElementById('useremail');    
    var mcourse=document.getElementById('course');
    var mcollege=document.getElementById('collegename');
    var mstate=document.getElementById('state');
    var mage=document.getElementById('age');
    var mnumber=document.getElementById('phone');
    var maddress=document.getElementById('address');
    var number=document.getElementById('username');    
    var mpassword=document.getElementById('psw');
    var pvalid=document.getElementsByTagName('valid');

    


    function onlyAlphabets(e, t) {
            try {
                if (window.event) {
                    var charCode = window.event.keyCode;
                }
                else if (e) {
                    var charCode = e.which;
                }
                else { return true; }
                if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
                    return true;
                else
                    return false;
            }
            catch (err) {
                alert(err.Description);
            }
        }

    function validation()
    {
        
        if (mname.value==""){
            mname.style.border="solid 2px red";
            return false;
        }

        if (memail.value==""){
            memail.style.border="solid 2px red";
            return false;
        }
        if (mcourse.value==""){
            mcourse.style.border="solid 2px red";
            return false;
        }

        if (mcollege.value==""){
            mcollege.style.border="solid 2px red";
            return false;
        }
        if (mstate.value==""){
            mstate.style.border="solid 2px red";
            return false;
        }
        if (mage.value==""){
            mage.style.border="solid 2px red";
            return false;
        }
        if (number.value==""){
            number.style.border="solid 2px red";
            return false;
        }
        if (maddress.value=="" ){
            maddress.style.border="solid 2px red";
            return false;
        }
        if (mpassword.value==""){
            mpassword.style.border="solid 2px red";
            return false;
        }
        
    }

    mnumber.onkeydown=function()
    {
       const validphone=/^[0-9]{9}$/;
      
       if(validphone.test(mnumber.value))
       {
        mnumber.style.border="solid 1px white"; 
       }
       else{
        mnumber.style.border="solid 2px red";
       }
    }
    mage.onkeydown=function(){        
        if(age.value == 0)
       {
        mage.style.border="solid 1px white";
       }
       else{
        mage.style.border="solid 2px red";
       }
    }
   
    mname.onkeydown=function(){
        const nameregex=/^([a-zA-z]{5,12})$/;
        if(nameregex.test(mname.value))
       {
        mname.style.border="solid 1px white";
       }
       else{
        mname.style.border="solid 2px red";
       }
    }
    memail.onkeydown=function()
    {
    //    const validemail=/^([a-z0-9\.-]+)@([a-z0-9]+)\.([a-z]{1,3})$/;
       const validemail=/^([a-z0-9\.-]+)@(university)\.([a-z]{1,3})$/;
      
       if(validemail.test(memail.value))
       {
        memail.style.border="solid 1px white"; 
       }
       else{
        memail.style.border="solid 2px red";
       }
    }
    
    
    mpassword.onkeyup=function(){
        const validpsw=/^(?=.\d)(?=.[a-z])(?=.[@$!%?&])(?=.*[A-Z]).{8,}$/;
        if(validpsw.test(mpassword.value))
       {
        pvalid[0].style.display="none"; 
        mpassword.style.border="solid 1px white"; 
       }
       else{
        mpassword.style.border="solid 2px red";
        if(mpassword.value.match(validpsw)){
            pvalid[0].style.display="none"; 
        mpassword.style.border="solid 1px white"; 
        }
        var upperCaseLetters = /[A-Z]/g;
        if(mpassword.value.match(upperCaseLetters)) {
            // pvalid[0].style.display="none";  
          
        } else {
            pvalid[0].innerText="Aleast 1 UpperCase";
            pvalid[0].style.color="red";
           
        }

        var lowerCaseLetters = /[a-z]/g;
        if(mpassword.value.match(lowerCaseLetters)) {
            // pvalid[0].style.display="none";  
          
        } else {
            pvalid[0].innerText="Aleast 1 lowerCase";
            pvalid[0].style.color="red";
           
        }
        

        var numbers = /[0-9]/g;
        if(mpassword.value.match(numbers)) {  
            // pvalid[0].style.display="none";
        } else {
            pvalid[0].innerText="Aleast 1 Digit";
            pvalid[0].style.color="red";
        }

        var numbers = /[@$!%*?&]/g;
        if(mpassword.value.match(numbers)) {  
            // pvalid[0].style.display="none";
        } else {
            pvalid[0].innerText="Aleast 1 Special character";
            pvalid[0].style.color="red";
        }

        
        if(mpassword.value.length>=8) {  
            // pvalid[0].style.display="none";
        } else {
            pvalid[0].innerText="Minimum 8 characters";
            pvalid[0].style.color="red";
        }


       }
    }

        
