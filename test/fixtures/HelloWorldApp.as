package {
  import flash.display.Sprite; 
  import mx.collections.ArrayCollection;
  [SWF(width=640, height=360, background=0x000000)]
  public class HelloWorldApp extends Sprite {
    public function HelloWorldApp() {
      this.graphics.beginFill(0xFF00CC);
      this.graphics.drawRect(10, 10, 100, 100);
      this.graphics.endFill();
      trace("HelloWorldApp...");
    }
  }
}