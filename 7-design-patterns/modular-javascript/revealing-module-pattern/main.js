const people = (function () {
  let peopleArr = ['Will', 'Laura'];

  const $pmElement = $('#people-module');
  const $button = $pmElement.find('button');
  const $input = $pmElement.find('input');
  const $ul = $pmElement.find('ul');
  const template = $pmElement.find('#people-template').html();
  // Bind Events
  $button.on('click', addPerson);
  $ul.delegate('i.del', 'click', removePerson);

  _render();

  function _render() {
    const data = {
      people: peopleArr,
    };
    $ul.html(Mustache.render(template, data));
  }

  function addPerson(value) {
    const personName = typeof value === 'string' ? value : $input.val();
    personName && peopleArr.push(personName);
    $input.val('');
    _render();
  }

  function removePerson(e, personName = '') {
    const $remove = $(e.target).closest('li');
    const liIndex = $ul.find('li').index($remove);
    peopleArr.splice(liIndex, 1);

    $remove.remove();
    _render();
  }

  return {
    addPerson,
    removePerson,
  };
})();
