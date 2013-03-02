/**
 * Looping through all of Drupal.behaviours
**/
for (var behavior in Drupal.behaviors) {
  runJSLitmusText(behavior);
}

/**
 * running the JSLitmus tests.
*/
function runJSLitmusText(behavior) {
	var behavior = 'Drupal.behaviors.' + behavior;
	JSLitmus.test(behavior, function() {
		executeFunctionByName(behavior + '.attach', window, arguments);
	});
}

/**
 * Running the namespace behavior without eval
*/
function executeFunctionByName(functionName, context) {
  var args = Array.prototype.slice.call(arguments, 2);
  var namespaces = functionName.split(".");
  var func = namespaces.pop();
  for (var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
  }
  return context[func].apply(context, args);
}
