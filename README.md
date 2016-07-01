Ruphoner
========

Ruphoner is AngularJS filter made to uniform russian phone numbers formatting.

If input string is valid russian phone number (11-digits, begins with +7, 7 or 8) it will be transformed to +7 987 654-32-10 form (`+7` `3–5 digits code` `grouped number`).

Using
-----

Include `altimho.ruphoner` module as your app dependency (`angular.module('example_app', [ 'altimho.ruphoner' ])`).

Use filter in templates:

```html
<span ng-bind="user.phone | ruphoner"></span>
```

or in code:

```javascript
$filter('ruphoner')(input)
```
