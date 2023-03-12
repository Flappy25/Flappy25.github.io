var database = Object.create(null);

class varsnum {
  getInfo() {
    return {
      id: 'varsnums', // change this if you make an actual extension!
      name: 'Extra Stuff',
      blocks: [
        {
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'true'
            }
          }
        },
        {
          opcode: 'runjs',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Run Code:\n[ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "return true"
            }
          }
        },
        {
          opcode: 'stackfornothing',
          blockType: Scratch.BlockType.COMMAND,
          text: '[ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Use this with Run Code: ()'
            }
          }
        },
        {
          opcode: 'setoop',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Make a object with contents [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'test: "Hello, world",test2: "hhfhgh"'
            }
          }
        },
        {
          opcode: 'getoop',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get item [ONE] from [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'text'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{"text": 5}'
            }
          }
        },
        {
          opcode: 'addoop',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Set value [ONE] on item [TWO] on object [THREE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '5'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'test'
            },
            THREE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{}'
            },
          }
        },
        //{
        //  opcode: 'dot',
        //  blockType: Scratch.BlockType.REPORTER,
        //  text: '[ONE].[TWO] (For JS Objects)',
        //  arguments: {
        //    ONE: {
        //      type: Scratch.BlockType.REPORTER
        //    },
        //    TWO: {
        //      type: Scratch.ArgumentType.STRING,
        //      defaultValue: ''
        //    }
        //  }
        //},
        {
          opcode: 'equ',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] equals [TWO] matching case',
          arguments: {
            ONE: {
              type: Scratch.BlockType.REPORTER
            },
            TWO: {
              type: Scratch.BlockType.REPORTER
            }
          }
        },
        {
          opcode: 'rep',
          blockType: Scratch.BlockType.REPORTER,
          text: '| [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Hello, world!"
            }
          }
        },
        {
          opcode: 'powerit',
          blockType: Scratch.BlockType.REPORTER,
          text: "[ONE]^[TWO]",
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 5
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 2
            }
          }
        },
        {
          opcode: 'logit',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Log [ONE] to console.',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello, dev console!'
            }
          }
        },
        {
          opcode: 'linebreak',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Line Break',
          arguments: {
            // N/A
          }
        },
        {
          opcode: 'charcode',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Convert ASCII charactor [ONE] to a number.',
          arguments: {
            ONE: {
              type: Scratch.BlockType.REPORTER
            }
          }
        },
        {
          opcode: 'tobin',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Convert number [ONE] to binary.',
          arguments: {
            ONE: {
              type: Scratch.BlockType.REPORTER
            }
          }
        },
        {
          opcode: 'fromcharcode',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Convert ASCII char code [ONE] to a charactor',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '117'
            }
          }
        },
        {
          opcode: 'todec',
          blockType: Scratch.BlockType.REPORTER,
          text: 'binary number [ONE] to decimal',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '101'
            }
          }
        },
        {
          opcode: 'setdata',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set variable [ONE] in database to value [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'x'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '5'
            }
          }
        },
        {
          opcode: 'getdata',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get value of variable [ONE] in database',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'x'
            }
          }
        },
        {
          opcode: 'deletedata',
          blockType: Scratch.BlockType.COMMAND,
          text: 'delete variable [ONE] in database',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'x'
            }
          }
        },
        {
          opcode: 'istrue',
          blockType: Scratch.BlockType.REPORTER,
          text: 'True',
          arguments: {}
        },
        {
          opcode: 'isfalse',
          blockType: Scratch.BlockType.REPORTER,
          text: 'False',
          arguments: {}
        },
        {
          opcode: 'newarray',
          blockType: Scratch.BlockType.REPORTER,
          text: 'empty array',
          arguments: {}
        },
        {
          opcode: 'numberstring',
          blockType: Scratch.BlockType.REPORTER,
          text: 'The number [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '5'
            }
          }
        }
      ]
    };
  }
  strictlyEquals(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    return args.ONE;
  }
  runjs(args) {
    return Function(args.ONE)()
  }
  stackfornothing(args) {
    // Do nothing
  }
  setoop(args) {
    return JSON.stringify(Function("return {"+args.ONE+"}")())
  }
  getoop(args) {
    return JSON.parse(args.TWO)[args.ONE]
  }
  addoop(args) {
    var i = JSON.parse(args.THREE)
    i[args.TWO] = args.ONE
    return JSON.stringify(i)
  }
  dot(args) {
    return args.ONE[args.TWO]
  }
  func(args) {
    return args.ONE(args.TWO, args.THREE, args.FOUR)
  }
  equ(args) {
    return args.ONE == args.TWO
  }
  rep(args) {
    return args.ONE
  }
  powerit(args) {
    return Number(args.ONE)**Number(args.TWO)
  }
  logit(args) {
    console.log(args.ONE)
  }
  warnit(args) {
    console.warn(args.ONE)
  }
  errorit(args) {
    console.error(args.ONE)
  }
  linebreak(args) {
    return "\n"
  }
  charcode(args) {
    return (String(args.ONE)).charCodeAt(0)
  }
  tobin(args) {
    return (Number(args.ONE)).toString(2)
  }
  fromcharcode(args) {
    return String.fromCharCode(args.ONE)
  }
  todec(args) {
    return Number.parseInt(args.ONE, 2)
  }
  setdata(args) {
    database[args.ONE] = args.TWO
  }
  getdata(args) {
    return database[args.ONE]
  }
  deletedata(args) {
    database[args.ONE] = undefined
  }
  istrue() {
    return true
  }
  isfalse() {
    return false
  }
  newarray() {
    return '[]'
  }
  numberstring(args) {
    return Number(args.ONE)
  }
}
//class varsnum2 {
//  getInfo() {
//    return {
//      id: 'varsnums2', // change this if you make an actual extension!
//      name: 'Extra Stuff (Extended)',
//      blocks: [
//      ]
//    };
//  }
//}
Scratch.extensions.register(new varsnum());
//Scratch.extensions.register(new varsnum2());

// Added from https://extensions.turbowarp.org/fetch.js
(function(Scratch) {
  'use strict';

  class Fetch {
    getInfo () {
      return {
        id: 'fetch',
        name: 'Fetch (From TurboWarp)',
        blocks: [
          {
            opcode: 'get',
            blockType: Scratch.BlockType.REPORTER,
            text: 'GET [URL]',
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org/hello.txt'
              }
            }
          }
        ]
      };
    }

    get (args) {
      return fetch(args.URL)
        .then(r => r.text())
        .catch(() => '');
    }
  }

  Scratch.extensions.register(new Fetch());
})(Scratch);