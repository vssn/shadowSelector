# ShadowSelector

## Use case
Using Polymer Webcomponents with the requirement of finding elements with or without shadow dom capabilities in the browser
Note: ShadowSelector can not peek into Webcomponents with closed shadow DOM as they are not allowing access to their inner DOM

## How to use
```
Shadow(HTMLElement).shadowSelector('space separated query-string')
```
