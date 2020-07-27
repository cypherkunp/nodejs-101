var events = (function () {
  let events = {};

  function publish(eventName, data) {
    if (events[eventName]) {
      events[eventName].forEach((fn) => {
        fn(data);
      });
    }
  }

  function subscribe(eventName, fn) {
    events[eventName] = events[eventName] || [];
    events[eventName].push(fn);
  }

  function unsubscribe(eventName, fn) {
    if (events[eventName]) {
      events[eventName] = events[eventName].filter((handler) => handler !== fn);
    }
  }

  return {
    publish,
    subscribe,
    unsubscribe,
  };
})();

var stats = (function () {
  var people = 0;

  //cache DOM
  var $stats = $('#stats-module');
  var template = $('#stats-template').html();

  //bind events
  events.subscribe('peopleChanged', setPeople);
  _render();

  function _render() {
    $stats.html(Mustache.render(template, { people: people }));
  }

  function setPeople(newPeople) {
    people = newPeople.people.length;
    _render();
  }
})();
