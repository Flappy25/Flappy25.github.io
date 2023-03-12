// By @apanentscratch2022 on Scratch
var counter = 0
var string = ''
var list = []
var bool = false
var timess1 = Date.now() / 1000

class MyUtilities {

  constructor() {}

  getInfo() {
    return {
      id: 'myutilities',
      name: 'apanentscratch2022',

      color1: '#ff0000',
      color2: '#ff0000',
      color3: '#ee0000', // So some things look right, modification by @kilgorezer
      
      blocks: [
        {
          opcode: 'isExactly',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] == [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'APPLE'
            }
          }
        },
        {
          opcode: 'squareRoot',

          blockType: Scratch.BlockType.REPORTER,

          text: 'square root of [A]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 4
            }
          }
        },
        {
          opcode: 'undefined',

          blockType: Scratch.BlockType.REPORTER,

          text: 'undefined',
          arguments: {}
        },
        {
          opcode: 'naN',

          blockType: Scratch.BlockType.REPORTER,

          text: 'NaN',
          arguments: {}
        },
        {
          opcode: 'ifthen',

          blockType: Scratch.BlockType.REPORTER,

          text: 'if [A] then [B] else [C]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.BOOLEAN
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'APPLE'
            },
            C: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'BANANA'
            }
          }
        },
        {
          opcode: 'random',

          blockType: Scratch.BlockType.REPORTER,

          text: 'Math.random([A])',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        },
        {
          opcode: 'exponent',

          blockType: Scratch.BlockType.REPORTER,

          text: '[A] ^ [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 2
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 4
            }
          }
        },
        {
          opcode: 'euler',

          blockType: Scratch.BlockType.REPORTER,

          text: 'Euler',
          arguments: {}
        },
        {
          opcode: 'fround',

          blockType: Scratch.BlockType.REPORTER,

          text: 'fround of [A]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5.05
            }
          }
        },
        {
          opcode: 'isgr',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] >= [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 5
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 4
            }
          }
        },
        {
          opcode: 'isle',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] <= [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 6
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 5
            }
          }
        },
        {
          opcode: 'exp',

          blockType: Scratch.BlockType.REPORTER,

          text: 'exp of [A]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 2
            }
          }
        },
        {
          opcode: 'trunc',

          blockType: Scratch.BlockType.REPORTER,

          text: 'trunc of [A]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 8
            }
          }
        },
        {
          opcode: 'ifnumerr',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'if [A] leads to an error',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: NaN
            }
          }
        },
        {
          opcode: 'uppercase',

          blockType: Scratch.BlockType.REPORTER,

          text: 'uppercase of [A]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apanentscratch2022'
            }
          }
        },
        {
          opcode: 'lowercase',

          blockType: Scratch.BlockType.REPORTER,

          text: 'lowercase of [A]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'APANENTSCRATCH2022'
            }
          }
        },
        {
          opcode: 'dateNow',

          blockType: Scratch.BlockType.REPORTER,

          text: 'Date.now',
          arguments: {}
        },
        {
          opcode: 'currentsec',

          blockType: Scratch.BlockType.REPORTER,

          text: 'current second',
          arguments: {}
        },
        {
          opcode: 'currentmin',

          blockType: Scratch.BlockType.REPORTER,

          text: 'current minute',
          arguments: {}
        },
        {
          opcode: 'currenthou',

          blockType: Scratch.BlockType.REPORTER,

          text: 'current hour',
          arguments: {}
        },
        {
          opcode: 'currentday',

          blockType: Scratch.BlockType.REPORTER,

          text: 'current day',
          arguments: {}
        },
        {
          opcode: 'fetch',

          blockType: Scratch.BlockType.REPORTER,

          text: 'get text [URL] if error, return [ERR]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://projects.scratch.mit.edu/613802646'
            },
            ERR: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'no text'
            }
          }
        },
        {
          opcode: 'count',

          blockType: Scratch.BlockType.REPORTER,

          text: 'counter',
          arguments: {}
        },
        {
          opcode: 'setcounter',

          blockType: Scratch.BlockType.COMMAND,

          text: 'set counter to [A]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        },
        {
          opcode: 'inccounter',

          blockType: Scratch.BlockType.COMMAND,

          text: 'increase counter',
          arguments: {}
        },
        {
          opcode: 'deccounter',

          blockType: Scratch.BlockType.COMMAND,

          text: 'decrease counter',
          arguments: {}
        },
        {
          opcode: 'join3',

          blockType: Scratch.BlockType.REPORTER,

          text: 'join [A] [B] [C]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            B: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: ' banana'
            },
            C: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: ' blueberry'
            }
          }
        },
        {
          opcode: 'join4',

          blockType: Scratch.BlockType.REPORTER,

          text: 'join [A] [B] [C] [D]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            B: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: ' banana'
            },
            C: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: ' blueberry'
            },
            D: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: ' strawberry'
            }
          }
        },
        {
          opcode: 'trueorfalse',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'boolean [A]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              menu: 'bools'
            }
          }
        },
        {
          opcode: 'thing',

          blockType: Scratch.BlockType.REPORTER,

          text: 'letters [A]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              menu: 'chars'
            }
          }
        },
        {
          opcode: 'true',

          blockType: Scratch.BlockType.REPORTER,

          text: 'true in string',
          arguments: {}
        },
        {
          opcode: 'false',

          blockType: Scratch.BlockType.REPORTER,

          text: 'false in string',
          arguments: {}
        },
         {
          opcode: 'inf',

          blockType: Scratch.BlockType.REPORTER,

          text: 'Infinity',
          arguments: {}
        },
         {
          opcode: 'pi',

          blockType: Scratch.BlockType.REPORTER,

          text: 'pi',
          arguments: {}
        },
        {
          opcode: 'notEqualTo',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] != [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'APPLE'
            }
          }
        },
        {
          opcode: 'ifchance',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A]% chance',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'color',

          blockType: Scratch.BlockType.REPORTER,

          text: 'hex code of [A]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.COLOR,
              defaultValue: '#ff0000'
            }
          }
        },
        {
          opcode: 'creator',

          blockType: Scratch.BlockType.REPORTER,

          text: 'creator',
          arguments: {}
        },
        {
          opcode: 'stringg',

          blockType: Scratch.BlockType.REPORTER,

          text: 'string',
          arguments: {}
        },
        {
          opcode: 'setstring',

          blockType: Scratch.BlockType.COMMAND,

          text: 'set string to [A]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        },
        {
          opcode: 'changestring',

          blockType: Scratch.BlockType.COMMAND,

          text: 'add [A] to string',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        },
        {
          opcode: 'listt',

          blockType: Scratch.BlockType.REPORTER,

          text: 'list, with seperator being [A]',
          arguments: {
            A: { // Modified by @kilgorezer
              type: Scratch.ArgumentType.STRING,
              menu: 'lineout'
            }
          }
        },
        {
          opcode: 'addtolist',

          blockType: Scratch.BlockType.COMMAND,

          text: 'add [A] to list',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        },
        {
          opcode: 'clearlist',

          blockType: Scratch.BlockType.COMMAND,

          text: 'clear list',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        },
        {
          // Added by @kilgorezer
          opcode: /*'extrastuffstrtobool'*/ 'strtoboolean', // changed for interchangability reasons
          blockType: Scratch.BlockType.BOOLEAN,
          text:  /*'[IN]'*/ '[A]', // Same
          arguments: {
            /*IN*/A: { // Also same
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'true'
            }
          }
        },
        {
          opcode: 'itemoflist',

          blockType: Scratch.BlockType.REPORTER,

          text: 'item [A] of list',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        },
        {
          opcode: 'lengthoflist',

          blockType: Scratch.BlockType.REPORTER,

          text: 'length of list',
          arguments: {}
        },
        {
          opcode: 'listcont',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'list contains [A]?',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'thing'
            }
          }
        },
        {
          opcode: 'roundz',

          blockType: Scratch.BlockType.REPORTER,

          text: 'roundz [A]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0.5
            }
          }
        },
        {
          opcode: 'setbool',

          blockType: Scratch.BlockType.COMMAND,

          text: 'set bool to [A]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              menu: 'bools2' // Modified by @kilgorezer
            }
          }
        },
        {
          opcode: 'boool',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'current boolean',
          arguments: {}
        },
        {
          opcode: 'e',

          blockType: Scratch.BlockType.REPORTER,

          text: 'E',
          arguments: {}
        },
        {
          opcode: 'negative',

          blockType: Scratch.BlockType.REPORTER,

          text: '-[A]',
          arguments: {}
        },
        { // Added by kilgorezer DO NOT USE EXCEPT FOR A PRANK!?!
          opcode: 'crash',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Crash Window',
          arguments: {}
        },
        {
          opcode: 'varjson',

          blockType: Scratch.BlockType.REPORTER,

          text: 'add [A] with a value [B] as a variable in json',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apples'
            },
            B: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: Math.ceil(Math.random() * 5)
            }
          }
        },
        {
          opcode: 'xor',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] xor [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.BOOLEAN
            },
            B: {
              type: Scratch.ArgumentType.BOOLEAN
            }
          }
        },
        {
          opcode: 'timerfixed',

          blockType: Scratch.BlockType.REPORTER,

          text: 'timer (fixed)',
          arguments: {}
        },
        {
          opcode: 'timerreset',

          blockType: Scratch.BlockType.COMMAND,

          text: 'reset fixed timer',
          arguments: {}
        },
        //{ // Edit by @kilgorezer : Already added lol
        //  opcode: 'strtoboolean',
        //
        //  blockType: Scratch.BlockType.BOOLEAN,
        //
        //  text: '[A]',
        //  arguments: {
        //    A: { 
        //      type: Scratch.ArgumentType.STRING,
        //      defaultValue: 'true'
        //    }
        //  }
        //}
      ],
      menus: {
        bools: {
          items: ['true', 'false'], // Fixed bug - @kilgorezer
          acceptReporters: false // Modified by @kilgorezer
        },
        bools2: { // Added by @kilgorezer
          items: ['true', 'false'],
          acceptReporters: true
        },
        chars: {
          items: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
          acceptReporters: true
        },
        lineout: {
          items: ['Space', 'New Line', 'Comma and space', 'Just a comma'],
          acceptReporters: false
        }
      }
    }
  }

  isExactly({A, B}) {
    return A === B;
  }

  squareRoot({A}) {
    return Math.sqrt(A);
  }

  undefined() {
    return 'undefined';
  }
  
  naN() {
    return "NaN";
  }

  ifthen({A, B, C}) { // fixed ifthen and ifelse opcode error
    return Boolean(A) ? '' + B : '' + C // Minor bug fix
  }

  random ({A}) {
    return Math.random() * A;
  }

  exponent ({A, B}) {
    return A ** B // you dont have to do Math.pow because it is easier
  }

  euler () {
    return Math.E // why not?
  }

  fround ({A}) {
    return Math.fround(A)
  }

  isgr ({A, B}) {
    return A > B || A == B
  }

  isle ({A, B}) {
    return A < B || A == B
  }

  exp ({A}) {
    return Math.exp(A)
  }

  trunc ({A}) {
    return Math.trunc(A)
  }

  ifnumerr ({A}) {
    return isNaN(Number(A))
  }

  uppercase ({A}) {
    return A.toUpperCase()
  }

  lowercase ({A}) {
    return A.toLowerCase()
  }
  
  dateNow () {
    return Date.now()
  }

  currentsec () {
    return (Date.now() / 1000) % 60
  }

  currentmin () {
    return Math.floor(Date.now() / 1000 / 60) % 60
  }

  currenthou () {
    return Math.floor(Date.now() / 1000 / 3600) % 24
  }

  currentday () {
    return Math.floor(Date.now() / 1000 / 86400) % 30
  }

  fetchFrom({URL, ERR}) {
    return fetch(URL).then(res => res.text())
      .catch(err => ERR);
  }

  count () {
    return counter
  }

  setcounter ({A}) {
    counter = A
  }

  inccounter () {
    counter++;
  }

  deccounter () {
    counter--;
  }

  join3 ({A, B, C}) {
    return "" + A + B + C;
  }
  
  join4 ({A, B, C, D}) {
    return "" + A + B + C + D;
  }
  
  trueorfalse({A}) {
    return String(A)=='true';
  }

  thing({A}) {
    return A;
  }

  true() {
    return 'true';
  }

  false() {
    return 'false'
  }

  inf() {
    return 9999999999 ** 9999999999
  }

  pi() {
    return Math.PI
  }

  notEqualTo({A, B}) {
    return !(A == B);
  }

  ifchance({A}) {
    return Math.random() <= A / 100
  }

  color({A}) {
    return A
  }

  creator() {
    return 'apanentscratch2022'
  }

  stringg() {
    return string
  }

  setstring ({A}) {
    string = A
  }

  changestring ({A}) {
    string += A
  }

  listt({A}) { // Modified by @kilgorezer
    return list.join(A=='Space'?' ':(A=='New Line'?'\n':(A=='Comma and space'?', ':(A=="Just a comma"?',':' ')))) // Modified by @kilgorezer
  }

  addtolist({A}) {
    list.push(A)
  }

  clearlist() {
    list = []
  }
  
  extrastuffstrtobool(a) {
    // Added by @kilgorezer
    return a.IN;
  }

  itemoflist({A}) {
    var n = A
    n--;
    return list[n]
  }

  lengthoflist() {
    return list.length
  }

  listcont({A}) {
    return list.includes(A)
  }

  roundz({A}) {
    var fun = A
    fun = fun - Math.abs(0.00000000001)
    return Math.round(fun)
  }

  setbool({A}) {
    A = String(A) // Modified by @kilgorezer
    bool = (A=='false'||A=='NaN'||A==''||A==undefined||A=='0')?false:true // Modified by @kilgorezer
  }

  boool() {
    return bool
  }

  e() {
    return Math.E
  }

  negative({A}) {
    return A * -1
  }
  crash() { // Added by @kilgorezer DO NOT USE UNLESS IT IS FOR A PRANK OR SOMETHING!!!
    while(true) {
      // The loop will cause the crash.
    }
  }

  varjson({A, B}) {
    return 'var ' + A + ' = ' + "'" + B + "'"
  }

  xor({A, B}) {
    return (Boolean(A) == true || Boolean(B) == true) && (Boolean(A) != Boolean(B)) // Fixed bug in script - @kilgorezer
  }

  timerfixed() {
    return (Date.now() / 1000) - timess1
  }

  timerreset() {
    timess1 = Date.now() / 1000
  }

  strtoboolean({A}) {
    return A
  }
}
Scratch.extensions.register(new MyUtilities());

class Delay {

  constructor() {}

  getInfo() {
    return {
      id: 'delay',
      name: 'Delay',

      color1: '#ff0000',
      color2: '#ff0000',
      color3: '#ee0000',

      blocks: [
        {
          opcode: 'main',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'wait for [A] seconds',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        }
      ]
    }
  }

  main({A}) {
    var time = Date.now() / 1000
    while (time - Date.now() / 1000 < Number(A) * -1) {
      yield; 
    }
    return '';
  }
}

Scratch.extensions.register(new Delay());