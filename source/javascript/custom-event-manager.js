/**
 * @license Custom Event Manager  version: 1.0.0
 * Copyright 2016 sidaudhi.com, Inc. http://stepfoods.co
 * License: MIT
 *
 * @author        Siddharth Audhinarayanan
 * @since        2016-Jun-05
 *
**/

CustomEventManager = {
  "initialize":function(configuration){
    if(configuration){
      this.events = configuration;
    }
  },
  "events":{},
  "trigger":function(event,data,element){
    if(!element)
      element = document.querySelector("body");

    if(!(event in this.events))
      console.log("Unregistered Event Triggered");

    var registration = this.events[event];

    if(typeof registration.beforeEvent === "function")
      this.events[event].beforeEvent(data);

    var e = new CustomEvent(event,data);
    element.dispatchEvent(e);

    if(typeof registration.afterEvent === "function")
    this.events[event].afterEvent(data);

  },
  "subscribe":function(event,callback,element){
    if(!element)
      element = document.querySelector("body");

    element.addEventListener(event,callback);
  },
  "register":function(event,data){
    if(!data)
      data = {};
    this.events[event] = data;
  }
}
