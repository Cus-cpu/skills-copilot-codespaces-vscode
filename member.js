function skillsMember() 
return {
    restrict: 'E',
    templateUrl: 'directives/member.html'
    controller: 'SkillsController',
    controllerAs: 'skillsCtrl' 
    bindToController: true
    scope: {
        member: '='
    }
}