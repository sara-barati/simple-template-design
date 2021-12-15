function common(s1, s2) {
    let count = 0;
  
    for(var i=0; i<s1.length ; i++){
        if(s2.indexOf(s1[i])>-1){  
            count++;
            s2=s2.replace(s1[i],'');
        }
    }                   
        
    return count;
}
console.log(common( "aabcc","adcaa"));
console.log(common("aaab","aaaaaabb"));