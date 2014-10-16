var App = Ember.Application.create ({
});

App.Router.map(function() {
  this.route('hare');
  this.route('seaturtle');
  this.route('snappingturtle');
});

App.HareRoute = Ember.Route.extend ({
  model: function() {
    return {
      turtle: "Hare",
      url: "https://1.bp.blogspot.com/-_hR7ja4ElGo/UQsBaesAPPI/AAAAAAAARz4/LgFBJ4n4Sk4/s1600/hare%252520web-0184.jpg"
    };
  }
})
