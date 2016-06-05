# custom-event-manager
A custom event registration, creation & subscription wrapper library

# Dependencies

This library has no dependencies.

# Usage
We use **bower** and **npm** for dependency management, run

```shell
bower install --save custom-event-manager
```
```shell
npm install --save custom-event-manager
```

This will copy the custom-event-manager files into your components folder, along with its dependencies.

### Load the script files in your application:
#### bower
```html
<script type="text/javascript" src="bower_components/custom-event-manager/dist/javascript/custom-event-manager.js"></script>
```
#### npm
```html
<script type="text/javascript" src="node_modules/custom-event-manager/dist/javascript/custom-event-manager.js"></script>
```

### Register Static Custom Events
Register custom events that are known at application start using the initialize function.
```html
CustomEventManager.initialize({
  "searchCompleted":{
    "beforeEvent":function(data){...},
    "afterEvent":function(data){...}
  },
  "searchInitialized":{
    "beforeEvent":function(data){...},
    "afterEvent":function(data){...}
  }
});
```
### Register Dynamic Custom Events
Register custom events that are dynamically computed using the register function.
```html
CustomEventManager.register("search_"+i+"_completed",{
  "beforeEvent":function(data){...},
  "afterEvent":function(data){...}
});
```
### Subscribe to Custom Events
Subscribe to custom registered events using the subscribe function. The element argument defaults to document.querySelector('body')
```html
CustomEventManager.subscribe("searchCompleted",function(data){
  console.log(data.searchTerm);
  console.log(data.resultCount);
});
```
### Trigger Custom Events with Event Data
Trigger custom registered events using the trigger function. The element argument defaults to document.querySelector('body')
```html
CustomEventManager.trigger("searchCompleted",{
  "searchTerm":"milk",
  "resultCount":56
});
```
