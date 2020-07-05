function validatingEmail() {
 var emailID = document.form.EMail.value;
  a = emailID.indexOf("@");
   b = emailID.lastIndexOf(".");
    if (a < 1 || ( b - a < 2 )) { 
    alert("Please enter correct email ID") document.form.EMail.focus() ;
     return false; } return( true );
      }
       function Validating() { 
       var a1 = document.form.phone.value; if(a1=="") 

    { 
    alert("Type your mobile Number"); document.form.phone.focus(); return false; 
    }
     if(isNaN(a1)) { alert("Enter valid Mobile Number(Like : 9247261338)");
      document.form.phone.focus(); return false;
       }
     if(a1.length !=10) {
      alert(" Your Mobile Number must be from 0 to 9 numbers"); 
      document.form.phone.select(); return false; } } function allLetter(a1) {
      var letters = /^[A-Za-z_]+[0-9]+$/; if(a1.value.match(letters))
      { 
      return true;
      }
      else { 
       alert("Please enter correct information which starts with 'alphabets' or underscore"); 
      return false;
       } 
       } 
       function palindrome() {
       var str = document.form.i1.value; var c = str.split('').reverse().join('');
         var d =str.localeCompare(c) if (d ==0) { alert("Palindrome"); return true;
             } 
       else{ 
         alert("not a palindrome"); return false; 
           } 
            } 
         function anagram(s1, s2){ 
           var s1 = document.form2.i2.value; var s2 = document.form2.i3.value; 
             var c = s1.toLowerCase().replace(" ", "").split("").sort().join("") === s2.toLowerCase().replace(" ", "").split("").sort().join(""); 
              if(c){ alert("anagram"); 
              return true }else { alert("not an anagram") return false
                }
                 }
            function dis(val) {
               document.getElementById("edu").value+=val
                  } 
           function solve() { 
              let x = document.getElementById("edu").value if(x.includes("√")) {
               let z = Math.sqrt(parseInt(x.replace("√", ""))) document.getElementById("edu").value = (z.toFixed(3)) return; 
              }
               let y = eval(x) document.getElementById("edu").value = y 
                     } 
                function clr() 
                 {
                    document.getElementById("edu").value = "" }
                    function first element() 
                     { 
                   var first element = Math.floor(Math.random() * 1000); 
                    first element= (first%3); return first element; 
                    } 
                    function s() { 
                   var s =Math.floor(Math.random() * 1000); s= (s%3); return s; 
                         } 
                         function result() 
                         { 
                         var a = first(); var b = s(); c = a-b; if(c==0) 
                         { 
                         alert("match draw"); return;
                          }
                           else if((a==0 && b==2)||(a==1 && b==0)||(a==2 && b==1)) { alert("1st player won the match"); return; 
                          } else { alert("2nd player won the match") return;
                           }
                            }