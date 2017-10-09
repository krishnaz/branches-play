@title[Effective GIT]
## Effective Git
 
#### Let branches help you be effective with GIT.

---
### Problem

<div style="font-size:0.7em">
What happens often when we start working on some task - get to the code, 
start changing/refactoring/adding new things. 
And only after couple of changes maybe in several files we 
realise that there is code style issue or even some sloppiness 
in code that makes you itchy to refactor it or even it's essential 
to do such refactor.
</div><br/>
You either:
* <span style="font-size: 0.7em">Start doing refactor/styling -> exploding PR in size</span>
* <span style="font-size: 0.7em">Skip it to do later and never return to that.</span>

---
### How branches could help?

Lets consider several scenarios

---
#### Started work, noticed code style issue
You are in master branch, saved couple of files, no commits yet.

```shell
$ git stash
$ git checkout -b feature/NOJIRA-code-style
$ git push

$ git checkout -b feature/ADAT-000-ticketX feature/NOJIRA-code-style
$ git stash pop

$ git merge origin/master
$ git push
```

@[1](Put all so far made changes into stash.)
@[2](Create new branch for a code-style changes.)
@[3](Do code style changes, save and push to server.)
@[4](Create PR.)
@[5](Create target branch on top of code-style and pop changes from stash.)
@[1-6](That way you can pause your work, do code style changes and return to work, having those style changes in your code, but in separate PR.)
@[8-9](After code-style PR is merged, merge mater with current branch.)

Note:
first.js file<br/>
Add method to return string instead of array of strings <br/>
```javascript
function everySecondLetter(text) {
    return everySecondLetterAsArray(text).join("");
}
```
Format code in a mean time and change method name.

---
#### Have done several commits already and found code that you are itchy to refactoring

You are in target branch with couple of commits and 
want to refactor code that is not directly related to your work/ticket.

```shell
$ git commit -m "Current changes"
$ git checkout -b feature/NOJIRA-refactor master
$ git push

$ git checkout feature/ADAT-000-ticketX
$ git rebase feature/NOJIRA-refactor

$ git merge origin/master
$ git push
```
@[1](Commit current changes.)
@[2](Create new refactor branch from master.)
@[3](Do refactoring, save and push to server.)
@[4](Create PR.)
@[5](Get your original branch and rebase it onto refactoring.)
@[6](Rebasing may bump into some conflicts and they need to be resolved, but it’s not so scary.)
@[1-6](That way you can interrupt your work, do code refactoring and return to work, having those changes in your code, but in separate PR.)
@[8-9](After code-style PR is merged, merge master with current branch.)

Note:
* Add median method
```javascript
function calculateMedian(array) {
    return array.sort((a, b) => a - b)[array.length / 2];
}
module.exports.median = calculateMedian;
```
* Refactor average to functional way
```javascript
function calculateAverage(array) {
    return array.reduce((acc, item) => acc + item, 0);
}
```

---
<h4 style="margin-top: -100px;">Special case of the previous: You have to/need to work on 
two tasks sharing the same codebase.</h4>

<div style="font-size: 0.6em;">You finished working on one task/ticket and created PR for that, 
but it takes time to review. 
In a mean time you decided to work on another task which need to be done in the same codebase and, 
probably, even based on your previous changes. While working on the second one you’ve got comments 
for the first PR and need to do some changes there.</div>

```shell
$ git checkout -b feature/ADAT-002-ticketY feature/ADAT-001-ticketX
$ git commit -a -m "Changes"
$ git checkout feature/ADAT-001-ticketX
$ git commit -a -m "Address comments" && git push

$ git checkout feature/ADAT-002-ticketY
$ git rebase feature/ADAT-001-ticketX

$ git rebase —onto origin/master feature/ADAT-001-ticketX feature/ADAT-002-ticketY
```

@[1](Start your second branch on top of the first one, that way you get all required changes.)
@[2](Do changes, commit, etc.)
@[3-4](Now you have to return to the first branch to address comments in PR, commit and push.)
@[6-7](Now you need to rebase your second branch onto top of the first one to keep track of those changes, otherwise it would be hard to merge it later, but you don’t want to just merge first branch into second - it’s not approved yet.)
@[6-7](Checkout the second branch and rebase it onto top of the first one.)
@[9](You’ve done with first one, merged it to master, now all base code that you need is in master and you should rebase onto that.)

Note:
* Talk about partially rebasing branch
* Fix average bug
* Added filtering between median and average 
* Address comment on bug - check for array is null.
---
