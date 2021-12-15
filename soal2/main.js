function sortByHeight(a) {
    let people = a.filter(function(number){return number !==-1});
    people.sort((a, b) => b - a);
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== -1) {
        a[i] = people.pop();
      }
    }
    return a;
  }
 console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])); 
