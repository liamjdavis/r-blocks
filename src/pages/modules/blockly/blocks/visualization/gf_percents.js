import Blockly from 'blockly';
import { categorical_vars, categorical_vars_alt } from '../../constants';

// Regular gf_percents block
Blockly.Blocks['gf_percents'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('gf_percents(~')
      .appendField(new Blockly.FieldDropdown(categorical_vars_alt), 'categorical_variable_1')
      .appendField(', fill = ~')
      .appendField(new Blockly.FieldDropdown(categorical_vars), 'categorical_variable_2')
      .appendField(', position = ')
      .appendField(
        new Blockly.FieldDropdown([
          ['"fill"', '"fill"'],
          ['position_dodge()', 'position_dodge()'],
        ]),
        'position'
      )
      .appendField(', data = ')
      .appendField(new Blockly.FieldDropdown([['HELPrct', 'HELPrct']]), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('segmented bar chart showing percentages for 2 categorical variables');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_percents'
    );
  },
};

Blockly.JavaScript['gf_percents'] = function (block) {
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_categorical_var2_name = block.getFieldValue('categorical_variable_2');
  var dropdown_position_name = block.getFieldValue('position');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    'gf_percents(~' +
    dropdown_categorical_var1_name +
    ', fill = ~' +
    dropdown_categorical_var2_name +
    ', position = ' +
    dropdown_position_name +
    ', data = ' +
    dropdown_data_name +
    ')\n';
  return code;
};

// Generic gf_percents block
Blockly.Blocks['Ggf_percents'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('gf_percents(~')
      .appendField(new Blockly.FieldTextInput(''), 'categorical_variable_1')
      .appendField(', fill = ~')
      .appendField(new Blockly.FieldTextInput(''), 'categorical_variable_2')
      .appendField(', position = ')
      .appendField(
        new Blockly.FieldDropdown([
          ['"fill"', '"fill"'],
          ['position_dodge()', 'position_dodge()'],
        ]),
        'position'
      )
      .appendField(', data = ')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('segmented bar chart showing percentages for 2 categorical variables');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_percents'
    );
  },
};

Blockly.JavaScript['Ggf_percents'] = Blockly.JavaScript['gf_percents'];

export default {};
