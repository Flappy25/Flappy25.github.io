

class CloudMultiplayer {
	constructor() {}

	getInfo() {
		return {
			"id": "cloudplayer",
			"name": "Cloud Multiplayer",
			"color1": "#2638FC",
			"color2": "#2638FC",
			"blockIconURI": 'data:image/png;base64,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',
			"blocks": [{
				"opcode": "whengiven",
				"blockType": "hat",
				"text": "When [thing] recived from cloud",
				"arguments": {
					"thing": {
						"type": "string",
						"defaultValue": "message1"
					},
				}
			}, {
				"opcode": "give",
				"blockType": "command",
				"text": "Give string [brod]",
				"arguments": {
					"brod": {
						"type": "string",
						"defaultValue": "message1"
					},
				}
			}, {
				"opcode": "connect",
				"blockType": "command",
				"text": "Connect to cloud",
				"arguments": {},
			}, {
				"opcode": "whenanyrecivedwith",
				"blockType": "hat",
				"text": "When anything with [validator] true recived",
				"arguments": {
					"validator": {
						"type": "boolean",
						"defaultValue": ""
					},
				},
			}, {
				"opcode": "recived",
				"blockType": "reporter",
				"text": "Last recived from cloud",
				"arguments": {},
			}, {
				"opcode": "connected",
				"blockType": "reporter",
				"text": "Connected to cloud?",
				"arguments": {},
			} 
				  ]
		};
	}

	whengiven({thing}) {

	}

	give({brod}) {
		return "Gave " + brod + " to cloud!";
	}
	connect({}) {
		// Require module
const { Session, Cloud } = require('scratchcloud');
// Create user session
const project = null; // Project ID
const session = new Session(process.env.USERNAME, process.env.PASSWORD, function(user) {
  // Create cloud session
  const cloud = new Cloud(user, project, function(error, cloud) {
    // On error, throw error
    if(error) throw error;
    
    // Log that the cloud session has started
    return "Connected!";
   });
});
	}
		
	whenanyrecivedwith({validator}) {
		if (validator == true){
			return true;
		}
	}
	
	recived({}) {
		return "Placeholder.";
	}
	
	connected({}) {
		return "another placeholder lol";
	}
	
}

Scratch.extensions.register(new CloudMultiplayer());