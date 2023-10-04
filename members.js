function skillsMember(){
    return {
        restrict: 'E',
        templateUrl: 'views/skills-member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindtoController: true,
        scope: {
            member: '='
        }
    };
}