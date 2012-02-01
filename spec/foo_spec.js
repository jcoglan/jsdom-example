FooSpec = JS.Test.describe("Foo", function() { with(this) {
  before(function() { with(this) {
    this.foo = new Foo()
  }})
  
  describe("method", function() { with(this) {
    it("returns something", function() { with(this) {
      assertEqual( "something", foo.method() )
    }})
  }})
}})

