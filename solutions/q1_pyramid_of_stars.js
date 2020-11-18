/* Write a program to build a `Pyramid of stars` of given height */
const buildPyramid = (height) => {
     // Write your code here

     if(height==null || height ==undefined || isNaN(height))
     {
          return '';
     }     
     else{          
          let str='';
                    
          for (var x=0;x<=height-1;x++)
          {
               str=str+getSpaces(height-(x));
               str=str+buildStar(x+1)+' \n';               
          }
          
          return str;
     }
};
let buildStar=(length)=>{
     let str='';
     for(let x=1;x<=length;x++)
     {
          str=str+'* ';
     }
     return str;
};
let getSpaces=(length)=>
{
     let ret='';
     for(let x=length;x>0;x--)
     {
          ret=ret+' ';
     }
     return ret;
}

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
