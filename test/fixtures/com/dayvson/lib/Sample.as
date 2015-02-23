package com.dayvson.lib {
  import flash.events.EventDispatcher;
  public class Sample extends EventDispatcher {
    public function Sample() {
      trace("HelloWorldApp...");
    }
    public function getVersion():String {
      return "1.0.0";
    }
  }
}