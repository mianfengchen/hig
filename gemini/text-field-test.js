gemini.suite('text field', (parent) => {
  parent.setUrl('src/web/basics/form-elements/text-field/tests/gemini-text-field.html');

  gemini.suite('regular', (suite) => {
       suite.setCaptureElements('.test-group-default')
            .before(function(actions, find) {
                this.field = find('.test-group-default .hig__text-field__input');
            })
            .capture('plain')
            .capture('hovered', function(actions, find) {
                actions.mouseMove(this.field);
            })
            .capture('focused', function(actions, find) {
                actions.mouseDown(this.field);
            })
            .capture('with value', function(actions, find) {
                actions.sendKeys(this.field, 'Now it has a value');
            });
  });

  gemini.suite('with icon', (suite) => {
       suite.setCaptureElements('.test-group-icon')
            .capture('plain');
  });

});