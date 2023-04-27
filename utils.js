(function(Scratch) {
  'use strict';
  const blockIconURI = 'https://flappy25.github.io/BunnyIcon1x1.png';

  var vars = {};
  vars['variables'] = {};

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('This extension must run unsandboxed');
  }

  class LMSUtils {
    constructor(runtime) {
      this.runtime = runtime;
    }
    getInfo() {
      return {
        id: 'lmsutilsblocks',
        name: 'LMS Utilities',
        color1: '#1cd6ff',
        color2: '#1cbbff',
        color3: '#1cbbff',
        blockIconURI: blockIconURI,
        blocks: [
          {
            opcode: 'whenBooleanHat',
            blockType: Scratch.BlockType.HAT,
            text: 'when [INPUT]',
            isEdgeActivated: true,
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: ''
              }
            }
          },
          {
            opcode: 'whenKeyString',
            blockType: Scratch.BlockType.HAT,
            text: 'when key [KEY_OPTION] pressed',
            isEdgeActivated: true,
            arguments: {
              KEY_OPTION: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'enter'
              }
            }
          },

          '---',

          {
            opcode: 'keyStringPressed',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'key [KEY_OPTION] pressed?',
            arguments: {
              KEY_OPTION: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'enter'
              }
            }
          },
          {
            opcode: 'trueFalseBoolean',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[TRUEFALSE]',
            arguments: {
              TRUEFALSE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'true',
                menu: 'trueFalseMenu'
              }
            }
          },
          {
            opcode: 'stringIf',
            blockType: Scratch.BlockType.REPORTER,
            text: 'if [BOOLEAN] then [INPUTA]',
            disableMonitor: true,
            arguments: {
              BOOLEAN: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: ''
              },
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          {
            opcode: 'stringIfElse',
            blockType: Scratch.BlockType.REPORTER,
            text: 'if [BOOLEAN] then [INPUTA] else [INPUTB]',
            disableMonitor: true,
            arguments: {
              BOOLEAN: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: ''
              },
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'banana'
              }
            }
          },

          '---',

          {
            opcode: 'getEffectValue',
            blockType: Scratch.BlockType.REPORTER,
            text: 'effect [INPUT]',
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'color',
                menu: 'colorMenu'
              }
            }
          },
          {
            opcode: 'clonesBeingUsed',
            blockType: Scratch.BlockType.REPORTER,
            text: 'clone count',
          },
          {
            opcode: 'isClone',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is clone?',
            filter: [Scratch.TargetType.SPRITE]
          },
          {
            opcode: 'spriteClicked',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'sprite clicked?',
            filter: [Scratch.TargetType.SPRITE]
          },

          '---',

          {
            opcode: 'lettersToOf',
            blockType: Scratch.BlockType.REPORTER,
            text: 'letters [INPUTA] to [INPUTB] of [STRING]',
            disableMonitor: true,
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              },
              INPUTB: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '3'
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'suspicious'
              }
            }
          },
          {
            opcode: 'replaceWords',
            blockType: Scratch.BlockType.REPORTER,
            text: 'replace [INPUTA] with [INPUTB] in [STRING]',
            disableMonitor: true,
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Scratch'
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Turbowarp'
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Scratch is brilliant!'
              }
            }
          },
          {
            opcode: 'findIndexOfString',
            blockType: Scratch.BlockType.REPORTER,
            text: 'index of [INPUTA] in [INPUTB]',
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'brilliant'
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Turbowarp is brilliant!'
              }
            }
          },
          {
            opcode: 'itemOfFromString',
            blockType: Scratch.BlockType.REPORTER,
            text: 'item [INPUTA] of [INPUTB] split by [INPUTC]',
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '2'
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple|banana'
              },
              INPUTC: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '|'
              }
            }
          },
          {
            opcode: 'stringToUpperCase',
            blockType: Scratch.BlockType.REPORTER,
            text: '[STRING] to uppercase',
            disableMonitor: true,
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          {
            opcode: 'stringToLowerCase',
            blockType: Scratch.BlockType.REPORTER,
            text: '[STRING] to lowercase',
            disableMonitor: true,
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'APPLE'
              }
            }
          },
          {
            opcode: 'reverseString',
            blockType: Scratch.BlockType.REPORTER,
            text: 'reverse [STRING]',
            disableMonitor: true,
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'prawobrut'
              }
            }
          },

          '---',

          {
            opcode: 'norBoolean',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[INPUTA] nor [INPUTB]',
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: ''
              },
              INPUTB: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: ''
              }
            }
          },
          {
            opcode: 'xorBoolean',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[INPUTA] xor [INPUTB]',
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: ''
              },
              INPUTB: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: ''
              }
            }
          },
          {
            opcode: 'xnorBoolean',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[INPUTA] xnor [INPUTB]',
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: ''
              },
              INPUTB: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: ''
              }
            }
          },
          {
            opcode: 'nandBoolean',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[INPUTA] nand [INPUTB]',
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: ''
              },
              INPUTB: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: ''
              }
            }
          },

          '---',

          {
            opcode: 'stringReporter',
            blockType: Scratch.BlockType.REPORTER,
            text: '[STRING]',
            disableMonitor: true,
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          {
            opcode: 'colourHex',
            blockType: Scratch.BlockType.REPORTER,
            text: 'color [COLOUR]',
            arguments: {
              COLOUR: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: '#0088ff'
              }
            }
          },
          {
            opcode: 'angleReporter',
            blockType: Scratch.BlockType.REPORTER,
            text: 'angle [ANGLE]',
            arguments: {
              ANGLE: {
                type: Scratch.ArgumentType.ANGLE,
                defaultValue: '90'
              }
            }
          },
          {
            opcode: 'matrixReporter',
            blockType: Scratch.BlockType.REPORTER,
            text: 'matrix [MATRIX]',
            arguments: {
              MATRIX: {
                type: Scratch.ArgumentType.MATRIX,
                defaultValue: '0101001010000001000101110'
              }
            }
          },
          {
            opcode: 'noteReporter',
            blockType: Scratch.BlockType.REPORTER,
            text: 'note [NOTE]',
            arguments: {
              NOTE: {
                type: Scratch.ArgumentType.NOTE,
                defaultValue: ''
              }
            }
          },
          {
            opcode: 'newlineCharacter',
            blockType: Scratch.BlockType.REPORTER,
            text: 'newline character',
            disableMonitor: true
          },

          '---',

          {
            opcode: 'equalsExactly',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[ONE] === [TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              TWO: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'banana'
              }
            }
          },
          {
            opcode: 'notEqualTo',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[INPUTA] ≠ [INPUTB]',
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'banana'
              }
            }
          },
          {
            opcode: 'moreThanEqual',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[INPUTA] ≥ [INPUTB]',
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '16'
              },
              INPUTB: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '25'
              }
            }
          },
          {
            opcode: 'lessThanEqual',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[INPUTA] ≤ [INPUTB]',
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '16'
              },
              INPUTB: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '25'
              }
            }
          },
          {
            opcode: 'stringCheckBoolean',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[INPUT] is [DROPDOWN]',
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              DROPDOWN: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'text',
                menu: 'stringCheckMenu'
              }
            }
          },

          '---',

          {
            opcode: 'encodeToBlock',
            blockType: Scratch.BlockType.REPORTER,
            text: 'encode [STRING] to [DROPDOWN]',
            disableMonitor: true,
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ''
              },
              DROPDOWN: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'base64',
                menu: 'conversionMenu'
              }
            }
          },
          {
            opcode: 'decodeFromBlock',
            blockType: Scratch.BlockType.REPORTER,
            text: 'decode [STRING] from [DROPDOWN]',
            disableMonitor: true,
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ''
              },
              DROPDOWN: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'base64',
                menu: 'conversionMenu'
              }
            }
          },

          '---',

          {
            opcode: 'negativeReporter',
            blockType: Scratch.BlockType.REPORTER,
            text: '- [INPUT]',
            disableMonitor: true,
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ''
              }
            }
          },
          {
            opcode: 'exponentBlock',
            blockType: Scratch.BlockType.REPORTER,
            text: '[INPUTA] ^ [INPUTB]',
            disableMonitor: true,
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ''
              },
              INPUTB: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ''
              }
            }
          },
          {
            opcode: 'rootBlock',
            blockType: Scratch.BlockType.REPORTER,
            text: '[INPUTA] √ [INPUTB]',
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ''
              },
              INPUTB: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ''
              }
            }
          },
          {
            opcode: 'normaliseValue',
            blockType: Scratch.BlockType.REPORTER,
            text: 'normalise [INPUT]',
            disableMonitor: true,
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              }
            }
          },
          {
            opcode: 'clampNumber',
            blockType: Scratch.BlockType.REPORTER,
            text: 'clamp [INPUTA] between [INPUTB] and [INPUTC]',
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              },
              INPUTB: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '25'
              },
              INPUTC: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '50'
              }
            }
          },

          '---',

          {
            opcode: 'setVariableTo',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set variable [INPUTA] to [INPUTB]',
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'my variable'
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '0'
              }
            }
          },
          {
            opcode: 'changeVariableBy',
            blockType: Scratch.BlockType.COMMAND,
            text: 'change variable [INPUTA] by [INPUTB]',
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'my variable'
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '1'
              }
            }
          },
          {
            opcode: 'getVariable',
            blockType: Scratch.BlockType.REPORTER,
            text: 'variable [INPUT]',
            disableMonitor: true,
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'my variable'
              }
            }
          },
          {
            opcode: 'deleteVariable',
            blockType: Scratch.BlockType.COMMAND,
            text: 'delete variable [INPUT]',
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'my variable'
              }
            }
          },
          {
            opcode: 'deleteAllVariables',
            blockType: Scratch.BlockType.COMMAND,
            text: 'delete all variables',
          },
          {
            opcode: 'listVariables',
            blockType: Scratch.BlockType.REPORTER,
            text: 'list active variables',
            disableMonitor: true,
          },

          '---',

          {
            opcode: 'greenFlag',
            blockType: Scratch.BlockType.COMMAND,
            text: 'green flag',
          },
          {
            opcode: 'setUsername',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set username to [INPUT]',
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'LukeManiaStudios'
              }
            }
          },

          '---',

          {
            opcode: 'setSpriteSVG',
            blockType: Scratch.BlockType.COMMAND,
            text: 'replace SVG data for costume [INPUTA] with [INPUTB]',

            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ''
              }
            }
          },

          '---',

          {
            opcode: 'alertBlock',
            blockType: Scratch.BlockType.COMMAND,
            text: 'alert [STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'A red spy is in the base!'
              }
            }
          },
          {
            opcode: 'inputPromptBlock',
            blockType: Scratch.BlockType.REPORTER,
            text: 'prompt [STRING]',
            disableMonitor: true,
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'The code is 1, 1, 1.. err... 1!'
              }
            }
          },
          {
            opcode: 'confirmationBlock',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'confirm [STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Are you the red spy?'
              }
            }
          },

          '---',

          {
            opcode: 'goToLink',
            blockType: Scratch.BlockType.COMMAND,
            text: 'open link [INPUT] in new tab',
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ''
              }
            }
          },
          {
            opcode: 'redirectToLink',
            blockType: Scratch.BlockType.COMMAND,
            text: 'redirect to link [INPUT]',
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ''
              }
            }
          },

          '---',

          {
            opcode: 'setClipboard',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set [STRING] to clipboard',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple',
              }
            }
          },
          {
            opcode: 'readClipboard',
            blockType: Scratch.BlockType.REPORTER,
            text: 'clipboard'
          },

          '---',

          {
            opcode: 'isUserMobile',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is mobile?'
          },
          {
            opcode: 'screenReporter',
            blockType: Scratch.BlockType.REPORTER,
            text: 'screen [DROPDOWN]',
            disableMonitor: true,
            arguments: {
              DROPDOWN: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'width',
                menu: 'screenReporterMenu'
              }
            }
          },
          {
            opcode: 'windowReporter',
            blockType: Scratch.BlockType.REPORTER,
            text: 'window [DROPDOWN]',
            disableMonitor: true,
            arguments: {
              DROPDOWN: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'width',
                menu: 'screenReporterMenu'
              }
            }
          },
          {
            opcode: 'osBrowserDetails',
            blockType: Scratch.BlockType.REPORTER,
            text: '[DROPDOWN]',
            disableMonitor: true,
            arguments: {
              DROPDOWN: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'operating system',
                menu: 'osBrowserMenu'
              }
            }
          },
          {
            opcode: 'projectURL',
            blockType: Scratch.BlockType.REPORTER,
            text: 'project URL',
            disableMonitor: true,
          },

          '---',

          {
            opcode: 'consoleLog',
            blockType: Scratch.BlockType.COMMAND,
            text: 'console [DROPDOWN] [INPUT]',
            disableMonitor: true,
            arguments: {
              DROPDOWN: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'log',
                menu: 'consoleLogMenu'
              },
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Apple'
              }
            }
          },
          {
            opcode: 'clearConsole',
            blockType: Scratch.BlockType.COMMAND,
            text: 'clear console'
          },

          '---',

          {
            opcode: 'commentHat',
            blockType: Scratch.BlockType.HAT,
            text: '// [STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'comment',
              }
            }
          },
          {
            opcode: 'commentCommand',
            blockType: Scratch.BlockType.COMMAND,
            text: '// [STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'comment',
              }
            }
          },
          {
            opcode: 'commentString',
            blockType: Scratch.BlockType.REPORTER,
            text: '// [INPUTA] [INPUTB]',
            disableMonitor: true,
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'comment'
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'input'
              }
            }
          },
          {
            opcode: 'commentBool',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '// [INPUTA] [INPUTB]',
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'comment'
              },
              INPUTB: {
                type: Scratch.ArgumentType.BOOLEAN,
              }
            }
          }
        ],
        menus: {
          conversionMenu: {
            acceptReporters: true,
            items: [
              {
                text: 'base64',
                value: 'base64'
              },
              {
                text: 'binary',
                value: 'binary'
              }
            ]
          },
          trueFalseMenu: {
            acceptReporters: true,
            items: [
              {
                text: 'true',
                value: 'true'
              },
              {
                text: 'false',
                value: 'false'
              },
              {
                text: 'random',
                value: 'random',
              }
            ]
          },
          screenReporterMenu: {
            acceptReporters: true,
            items: [
              {
                text: 'width',
                value: 'width'
              },
              {
                text: 'height',
                value: 'height'
              }
            ]
          },
          windowReporterMenu: {
            acceptReporters: true,
            items: [
              {
                text: 'width',
                value: 'width'
              },
              {
                text: 'height',
                value: 'height'
              }
            ]
          },
          stringCheckMenu: {
            acceptReporters: true,
            items: [
              {
                text: 'text',
                value: 'text'
              },
              {
                text: 'number',
                value: 'number'
              },
              {
                text: 'uppercase',
                value: 'uppercase'
              },
              {
                text: 'lowercase',
                value: 'lowercase'
              }
            ]
          },
          osBrowserMenu: {
            acceptReporters: true,
            items: [
              {
                text: 'operating system',
                value: 'operating system'
              },
              {
                text: 'browser',
                value: 'browser'
              }
            ]
          },
          consoleLogMenu: {
            acceptReporters: false,
            items: [
              {
                text: 'log',
                value: 'log'
              },
              {
                text: 'error',
                value: 'error'
              },
              {
                text: 'warn',
                value: 'warn'
              }
            ]
          },
          colorMenu: {
            acceptReporters: true,
            items: [
              {
                text: 'color',
                value: 'color'
              },
              {
                text: 'fisheye',
                value: 'fisheye'
              },
              {
                text: 'whirl',
                value: 'whirl'
              },
              {
                text: 'pixelate',
                value: 'pixelate'
              },
              {
                text: 'mosaic',
                value: 'mosaic'
              },
              {
                text: 'brightness',
                value: 'brightness'
              },
              {
                text: 'ghost',
                value: 'ghost'
              },
            ]
          },
        }
      };
    }

    whenBooleanHat(args) {
      return args.INPUT;
    }

    whenKeyString(args, util) {
      return util.ioQuery('keyboard', 'getKeyIsDown', [args.KEY_OPTION]);
    }

    equalsExactly(args) {
      return args.ONE === args.TWO;
    }

    stringReporter(args) {
      return args.STRING;
    }

    colourHex(args) {
      return args.COLOUR;
    }

    angleReporter(args) {
      return args.ANGLE;
    }

    matrixReporter(args) {
      return args.MATRIX;
    }

    noteReporter(args) {
      return args.NOTE;
    }

    newlineCharacter() {
      return '\n';
    }

    stringIf(args) {
      if (args.BOOLEAN) {
        return args.INPUTA;
      } else {
        return '';
      }
    }

    stringIfElse(args) {
      if (args.BOOLEAN) {
        return args.INPUTA;
      } else {
        return args.INPUTB;
      }
    }

    lettersToOf(args) {
      var string = args.STRING.toString();
      var input1 = args.INPUTA - 1;
      var input2 = args.INPUTB;
      return string.slice(input1, input2);
    }

    replaceWords(args) {
      var input1 = args.INPUTA;
      var input2 = args.INPUTB;
      var string = args.STRING;
      return string.replace(input1, input2);
    }

    exponentBlock(args) {
      return Math.pow(args.INPUTA, args.INPUTB);
    }

    rootBlock(args) {
      return Math.pow(args.INPUTB, 1 / args.INPUTA);
    }

    normaliseValue(args) {
      var input1 = args.INPUT;
      var input2 = Math.abs(input1);
      var output = (input1 / input2);
      if (isNaN(output)) {
        return '0';
      } else {
        return output;
      }
    }

    stringToUpperCase(args) {
      return args.STRING.toUpperCase();
    }

    stringToLowerCase(args) {
      return args.STRING.toLowerCase();
    }

    reverseString(args) {
      var input = args.STRING;
      var splitInput = input.split('');
      var reversedInput = splitInput.reverse();
      var joinedArray = reversedInput.join('');
      return joinedArray;
    }

    encodeToBlock(args) {
      if (args.STRING === '') {
        return '';
      }
      if (args.DROPDOWN === 'base64') {
        return btoa(args.STRING);
      }
      if (args.DROPDOWN === 'binary') {
        return args.STRING.split('').map(function (char) {
          return char.charCodeAt(0).toString(2);
        }).join(' ');
      }
    }

    decodeFromBlock(args) {
      if (args.STRING === '') {
        return '';
      }
      if (args.DROPDOWN === 'base64') {
         return atob(args.STRING);
      }
      if (args.DROPDOWN === 'binary') {
         var output = args.STRING.toString();
         return output.split(' ').map((x) => x = String.fromCharCode(parseInt(x, 2))).join('');
      }
    }

    trueFalseBoolean(args) {
      if (args.TRUEFALSE === 'random') {
        return Math.random() > 0.5;
      }
      if (args.TRUEFALSE === 'true') {
        return true;
      } else {
        return false;
      }
    }

    isClone(args, util) {
      if (util.target.isOriginal) {
        return false;
      } else {
        return true;
      }
    }

    clonesBeingUsed(args, util) {
      return Scratch.vm.runtime._cloneCounter;
    }

    keyStringPressed(args, util) {
      return util.ioQuery('keyboard', 'getKeyIsDown', [args.KEY_OPTION]);
    }

    spriteClicked(args, util) {
      return (util.ioQuery('mouse', 'getIsDown') && util.target.isTouchingObject('_mouse_'));
    }

    notEqualTo(args) {
      return (args.INPUTA != args.INPUTB);
    }

    moreThanEqual(args) {
      return (args.INPUTA >= args.INPUTB);
    }

    lessThanEqual(args) {
      return (args.INPUTA <= args.INPUTB);
    }

    stringCheckBoolean(args) {
      var input = args.INPUT;
      if (args.DROPDOWN === 'text') {
        return isNaN(args.INPUT);
      }
      if (args.DROPDOWN === 'number') {
        return !isNaN(args.INPUT);
      }
      if (args.DROPDOWN === 'uppercase') {
        return (args.INPUT == args.INPUT.toUpperCase());
      }
      if (args.DROPDOWN === 'lowercase') {
        return (args.INPUT == args.INPUT.toLowerCase());
      }
    }

    norBoolean(args) {
      return !(args.INPUTA || args.INPUTB);
    }

    xorBoolean(args) {
      return (args.INPUTA !== args.INPUTB);
    }

    xnorBoolean(args) {
      return (args.INPUTA === args.INPUTB);
    }

    nandBoolean(args) {
      return !(args.INPUTA && args.INPUTB);
    }

    screenReporter(args) {
      if (args.DROPDOWN === 'width') {
        return screen.width;
      }
      if (args.DROPDOWN === 'height') {
        return screen.height;
      }
    }

    windowReporter(args) {
      if (args.DROPDOWN === 'width') {
        return window.innerWidth;
      }
      if (args.DROPDOWN === 'height') {
        return window.innerHeight;
      }
    }

    osBrowserDetails(args) {
      var user = navigator.userAgent;
      if (args.DROPDOWN === 'operating system') {
        if (user.includes('Mac OS')) {
          return 'macOS';
        }
        if (user.includes('CrOS')) {
          return 'ChromeOS';
        }
        if (user.includes('Linux')) {
          return 'Linux';
        }
        if (user.includes('Windows')) {
          return 'Windows';
        }
        if (user.includes('iPad')) {
          return 'iOS';
        }
        if (user.includes('iPod')) {
          return 'iOS';
        }
        if (user.includes('iPhone')) {
          return 'iOS';
        }
        if (user.includes('Android')) {
          return 'Android';
        }
        return 'Other';
      }
      if (args.DROPDOWN === 'browser') {
        if (user.includes('Chrome')) {
          return 'Chrome';
        }
        if (user.includes('MSIE')) {
          return 'Internet Explorer';
        }
        if (user.includes('rv:')) {
          return 'Internet Explorer';
        }
        if (user.includes('Firefox')) {
          return 'Firefox';
        }
        if (user.includes('Safari')) {
          return 'Safari';
        }
        return 'Other';
      }
    }

    projectURL() {
      return window.location.href;
    }

    goToLink(args) {
      Scratch.openWindow(args.INPUT);
    }

    redirectToLink(args) {
      Scratch.redirect(args.INPUT);
    }

    greenFlag(args, util) {
      util.runtime.greenFlag();
    }

    setUsername(args, util) {
      util.runtime.ioDevices.userData._username = args.INPUT;
    }

    consoleLog(args) {
      if (args.DROPDOWN === 'log') {
        console.log(args.INPUT);
      } else if (args.DROPDOWN === 'error') {
        console.error(args.INPUT);
      } else if (args.DROPDOWN === 'warn') {
        console.warn(args.INPUT);
      }
    }

    clearConsole() {
      console.clear();
    }

    setClipboard(args) {
      navigator.clipboard.writeText(args.STRING);
    }

    readClipboard(args) {
      if (navigator.clipboard && navigator.clipboard.readText) {
        return navigator.clipboard.readText();
      }
      return '';
    }

    alertBlock(args) {
      alert(args.STRING);
    }

    inputPromptBlock(args) {
      return prompt(args.STRING);
    }

    confirmationBlock(args) {
      if (confirm(args.STRING)) {
        return true;
      } else {
        return false;
      }
    }

    commentHat(args, util) {
      return args.INPUT;
    }

    commentCommand(args) {
    }

    commentString(args) {
      return args.INPUTB;
    }

    commentBool(args) {
      return Scratch.Cast.toBoolean(args.INPUTB);
    }

    getVariable (args) {
      if (args.INPUT in vars['variables']) {
        return (vars['variables'][args.INPUT]);
      } else {
        return '';
      }
    }

    setVariableTo (args) {
      vars['variables'][args.INPUTA] = args.INPUTB;
    }

    changeVariableBy (args) {
      if (args.INPUTA in vars['variables']) {
        var prev = vars['variables'][args.INPUTA];
        var next = args.INPUTB;
        vars['variables'][args.INPUTA] = (prev + next);
      } else {
        vars['variables'][args.INPUTA] = args.INPUTB;
      }
    }

    listVariables (args, util) {
      if (Object.keys(vars['variables']).length) {
        var output = Object.keys(vars['variables']);
        return output;
      } else {
        return;
      }
    }

    deleteVariable (args) {
      Reflect.deleteProperty(vars['variables'], args.INPUT);
    }

    deleteAllVariables () {
      Reflect.deleteProperty(vars, 'variables');
      vars['variables'] = {};
    }

    clampNumber (args) {
      var input1 = args.INPUTA;
      var input2 = args.INPUTB;
      var input3 = args.INPUTC;
      return Math.min(Math.max(input1, input2), input3);
    }

    findIndexOfString (args) {
      var input1 = args.INPUTA;
      var input2 = args.INPUTB;
      if (input2.includes(input1)) {
        return (input2.indexOf(input1) + 1);
      } else {
        return '';
      }
    }

    itemOfFromString (args, util) {
      var input1 = (args.INPUTA - 1);
      var input2 = String(args.INPUTB);
      var input3 = args.INPUTC;
      var output = input2.split(input3)[input1] || '';
      return output;
    }

    isUserMobile (args, util) {
      return navigator.userAgent.includes('Mobile');
    }

    getEffectValue (args, util) {
      return util.target.effects[args.INPUT];
    }

    negativeReporter (args) {
      return (args.INPUT * -1);
    }

    setSpriteSVG (args, util) {
      try {
        Scratch.vm.runtime.renderer.updateSVGSkin(util.target.sprite.costumes[args.INPUTA - 1].skinId,args.INPUTB);
      } catch (error){
        return;
      }
      Scratch.vm.emitTargetsUpdate();
    }
  }
  Scratch.extensions.register(new LMSUtils());
})(Scratch);