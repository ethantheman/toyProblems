/*
    Suppose you have a roomba that is vacuuming an infinitely sized room, 
    starting at position (0, 0) on the coordinate plane. The roomba accepts 
    a set of instructions, and keeps executing the instructions over and over,
    forever. There are three possible instructions the roomba can execute:
    'R': turn right
    'L': turn left
    'G': go forward
    Given an array of strings, each representing sequences of instructions, 
    determine whether or not the roomba is moving in an infinite circle.

    Example Input: ['L', 'RG', 'RGLG', 'GGRR', 'LGRGRGG', 'GGRL']
    Output: ['YES', YES', 'NO', 'YES', 'YES', 'NO']
*/

let roombaCircle = (commands) => {
    let x = 0, y = 0, direction = 'N', 
    Rmap = {
        'N': 'E',
        'S': 'W',
        'E': 'S',
        'W': 'N'
    },
    Lmap = {
        'N': 'W',
        'S': 'E',
        'E': 'N',
        'W': 'S'
    },
    result = [];
    
    commands.forEach(str => {
        x = 0;
        y = 0;
        direction = 'N';
        for ( var times = 0; times < 4; times++ ) {
            for ( var i = 0; i < str.length; i++ ) {
                if ( str[i] === 'G' ) {
                    if ( direction === 'N' ) {
                        y++;
                    }
                    if ( direction === 'S' ) {
                        y--;
                    }
                    if ( direction === 'E' ) {
                        x++;
                    }
                    if ( direction === 'W' ) {
                        x--;
                    }
                }

                if ( str[i] === 'L' ) {
                    direction = Lmap[direction];
                }
                if ( str[i] === 'R' ) {
                    direction = Rmap[direction];
                }
            }
        }
        if ( x === 0 && y === 0 && direction === 'N' ) {
            result.push('YES');
        } else {
            result.push('NO');
        }
    });
    
    return result;
}

console.log(roombaCircle(['L', 'RG', 'RGLG', 'GGRR', 'LGRGRGG', 'GGRL']));