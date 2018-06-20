console.log('odd/even reporter');

for (var i = 0; i < 20; i++ ){
    if (i % 2 === 0){
        console.log(i + ' is even')
    } else {
        console.log(i + ' is odd')
    }
};

console.log('multiplication tables');

for (var a = 0; a < 10; a++){
    console.log(a * 9)
    for (b = 0; b < 10; b++){
        console.log(a * b)
    }
};

var bestFootballTeams = ['Colombia', 'Japan', 'Brazil', 'Germany'];

for (x = 0 ;x < bestFootballTeams.length; x++ ){
    debugger
    var suffix = (x + 1)
    
    if (suffix === 1){
        suffix += 'st'
    } else if (suffix === 2){
        suffix += 'nd'
    } else if (suffix === 3){
        suffix += 'rd'
    } else {
        suffix += 'th'
    }
    debugger
    console.log('my ' + suffix + ' choice is ' + bestFootballTeams[x])     
};