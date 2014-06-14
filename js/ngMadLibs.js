angular.module("ngMadLibs", [])
  .controller("ngMadLibsCtrl", function($scope) {
    var wordlist = {
      name: "",
      job_title: "",
      tedious_task: "",
      dirty_task: "",
      celebrity: "",
      useless_skill: "",
      obnoxious_celebrity: "",
      huge_number: "",
      adjective: ""
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

    $scope.wordlist = wordlist;
    $scope.pronouns = pronouns.female;
    $scope.gender = "female";

    $scope.setPronouns = function() {
      $scope.pronouns = pronouns[$scope.gender];
    }
  });

