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

    var flags = {
      revealStory: false,
      showErrors: false
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
      for (word in wordlist) {
        wordlist[word].value = "";
      }
      $scope.wordlist = wordlist;
    }

    function clearFlags() {
      flags.revealStory = false;
      flags.showErrors = false;

      $scope.flags = flags;
    }

    $scope.setPronouns = function() {
      $scope.pronouns = pronouns[$scope.gender];
    };

    $scope.isFilled = function(field) {
      return( field.value && (field.value != field.placeholder));
    };

    $scope.submit = function() {
      if ($scope.inputForm.$invalid) {
        $scope.flags.showErrors = true;
      } else {
        $scope.flags.revealStory = true;
        $scope.flags.showErrors = false;
      }
    };

    $scope.reset = function() {
      clearWords();
      clearFlags();
      $scope.gender = "female";
      $scope.setPronouns();
    };

    // Initializations
    $scope.reset();
  });

