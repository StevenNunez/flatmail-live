import DS from 'ember-data';

export default DS.Model.extend({
  to: DS.attr('string'),
  from: DS.attr('string'),
  body: DS.attr('string'),
  starred: DS.attr('boolean'),
  archived: DS.attr('boolean')
});
