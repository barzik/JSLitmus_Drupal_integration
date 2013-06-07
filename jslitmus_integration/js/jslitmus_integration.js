/**
 * Defining globals
 */

 var object_name_space = 'Drupal.behaviors'+'.';

/**
 * Looping through all of Drupal.behaviours
 */
for (var behavior in Drupal.behaviors) {
  runJSLitmusText(behavior);
}

/**
 * running the JSLitmus tests.
*/
function runJSLitmusText(behavior) {
	behavior_string = object_name_space+behavior;
	behavior = eval(behavior_string);
	for(var method in behavior) {
        if(typeof behavior[method] == "function") {
			JSLitmus.test(behavior_string, function() {
				behavior[method]();
			});
        }
    }
}
