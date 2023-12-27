var digitalPins = [
  [
    "D3",
    "D3"
  ],
  [
    "D4",
    "D4"
  ],
  [
    "D5",
    "D5"
  ],
  [
    "D6",
    "D6"
  ],
  [
    "D7",
    "D7"
  ],
  [
    "D8",
    "D8"
  ],
  [
    "D9",
    "D9"
  ],
  [
    "D10",
    "D10"
  ],
  [
    "D11",
    "D11"
  ],
  [
    "D12",
    "D12"
  ],
  [
    "D13",
    "D13"
  ],
  [
    "D0",
    "D0"
  ],
  [
    "D1",
    "D1"
  ],
  [
    "D2",
    "D2"
  ]
];

Blockly.Blocks['yolouno_sound_start'] = {
  init: function () {
    this.jsonInit(
      {
        type: "yolouno_sound_start",
        message0: "khởi động máy nghe nhạc chân TX %1 chân RX %2",
        previousStatement: null,
        nextStatement: null,
        args0: [
          {
            type: "field_dropdown",
            name: "TX",
            "options": digitalPins
          },
          {
            "type": "field_dropdown",
            "name": "RX",
            "options": digitalPins
          }
        ],
        colour: "#00A06B",
        tooltip: "",
        helpUrl: ""
      }
    );
  }
};


Blockly.Blocks['yolouno_sound_action'] = {
  init: function () {
    this.jsonInit(
      {
        type: "yolouno_sound_action",
        message0: "%1",
        args0: [
          {
            type: "field_dropdown",
            name: "action",
            options: [
              [
                "Phát nhạc",
                "play"
              ],
              [
                "Tạm dừng",
                "pause"
              ],
              [
                "Dừng phát nhạc",
                "stop"
              ],
              [
                "Phát bài nhạc kế tiếp",
                "play_next"
              ],
              [
                "Phát bài nhạc trước đó",
                "play_previous"
              ]
            ]
          }
        ],
        previousStatement: null,
        nextStatement: null,
        colour: "#00A06B",
        tooltip: "",
        helpUrl: ""
      }
    );
  }
};


Blockly.Blocks['yolouno_sound_vol'] = {
  init: function () {
    this.jsonInit(
      {
        type: "yolouno_sound_vol",
        message0: "mở âm lượng %1 (0-30)",
        args0: [
          {
            type: "input_value",
            name: "vol"
          }
        ],
        previousStatement: null,
        nextStatement: null,
        colour: "#00A06B",
        tooltip: "",
        helpUrl: ""
      }
    );
  }
};

Blockly.Blocks['yolouno_sound_playtrack'] = {
  init: function () {
    this.jsonInit(
      {
        type: "yolouno_sound_vol",
        message0: "phát bài nhạc số %1",
        args0: [
          {
            type: "input_value",
            name: "track"
          }
        ],
        previousStatement: null,
        nextStatement: null,
        colour: "#00A06B",
        tooltip: "",
        helpUrl: ""
      }
    );
  }
};

// Python Code

Blockly.Python['yolouno_sound_start'] = function (block) {
  // TODO: Assemble Python into code variable.
  var tx = block.getFieldValue('TX');
  var rx = block.getFieldValue('RX');
  Blockly.Python.definitions_['import_sound_player'] = 'from sound_player import *';
  Blockly.Python.definitions_['init_sound_player'] = 'sound = Sound_Player(tx=' + tx + '_PIN, rx=' + rx + '_PIN)';
  var code = '';
  return code;
};

Blockly.Python['yolouno_sound_action'] = function (block) {
  var dropdown_action = block.getFieldValue('action');
  // TODO: Assemble Python into code variable.
  var code = 'sound.' + dropdown_action + '()\n';
  return code;
};

Blockly.Python['yolouno_sound_vol'] = function (block) {
  var number_vol = Blockly.Python.valueToCode(block, 'vol', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'sound.set_volume(' + number_vol + ')\n';
  return code;
};

Blockly.Python['yolouno_sound_playtrack'] = function (block) {
  var number_track = Blockly.Python.valueToCode(block, 'track', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'sound.play_track(' + number_track + ')\n';
  return code;
};