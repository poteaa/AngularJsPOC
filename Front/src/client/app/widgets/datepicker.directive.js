(function() {
	
	angular
		.module('app.widgets')
		.directive('jqdatepicker', function() {
			return {
				restrict: 'A',
				require: 'ngModel',
				link: function (scope, element, attrs, ngModelCtrl) {
					element.datepicker({
						dateFormat: 'dd/mm/yy',
						onSelect: function (date) {
							scope.vmGoalEdit.updateDate(this.id, date);
							scope.$apply();
							// Next lines are the right way to do this but it is not working.
							// It is the right way because is wrapped inside try...catch
							// scope.$apply(function() {
								// scope.vmGoalEdit.updateDate(this.id, date);
							// });
						}
					});
				}
			}
		});
})();