angular.module("ngMadLibs", [])
  .controller("ngMadLibsCtrl", function($scope) {
    var wordlist = {
      name: {
        value: "",
        placeholder: "name" },
      job_title: {
        value: "",
        placeholder: "job title" },
      tedious_task: {
        value: "",
        placeholder: "tedious task" },
      dirty_task: {
        value: "",
        placeholder: "dirty task" },
      celebrity: {
        value: "",
        placeholder: "celebrity" },
      useless_skill: {
        value: "",
        placeholder: "useless skill" },
      obnoxious_celebrity: {
        value: "",
        placeholder: "obnoxious celebrity" },
      huge_number: {
        value: "",
        placeholder: "huge number" },
      adjective: {
        value: "",
        placeholder: "adjective" }
    };

    var pronouns = {
      female: {
        subject: "she",
        object: "her",
        possessive_adjective: "her",
        possessive_pronoun: "hers",
        reflexive: "herself"
      },
      male: {
        subject: "he",
        object: "him",
        possessive_adjective: "his",
        possessive_pronoun: "his",
        reflexive: "himself"
      }
    };

    function clearWords() {
      for (word in $scope.wordlist) {
        $scope.wordlist[word].value = "";
      }
    }

    $scope.setPronouns = function() {
      $scope.pronouns = pronouns[$scope.gender];
    };

    $scope.isFilled = function(field) {
      return( field.value && (field.value != field.placeholder));
    };

    $scope.submit = function() {
    };

    $scope.reset = function() {
      clearWords();
      $scope.gender = "female";
      $scope.setPronouns();
      $scope.submitted = false;
    };

    // Initializations
    $scope.wordlist = wordlist;
    $scope.reset();
  });

