const people = {
  people: ['Will', 'Laura'],
  init() {
    this.cacheDom();
    this.bindEvents();
    this.render();
  },
  cacheDom() {
    this.$pmElement = $('#people-module');
    this.$button = this.$pmElement.find('button');
    this.$input = this.$pmElement.find('input');
    this.$ul = this.$pmElement.find('ul');
    this.template = this.$pmElement.find('#people-template').html();
  },
  bindEvents() {
    this.$button.on('click', this.addPerson.bind(this));
    this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
  },
  render() {
    const data = {
      people: this.people,
    };
    this.$ul.html(Mustache.render(this.template, data));
  },
  addPerson(value) {
    this.people.push(value || this.$input.val());
    this.$input.val('');
    this.render();
  },
  deletePerson(e) {
    const $remove = $(e.target).closest('li');
    const removeText = $remove.find('span').text();
    $remove.remove();
    this.people = this.people.filter((person) => person !== removeText);
    this.render();
  },
};

people.init();
