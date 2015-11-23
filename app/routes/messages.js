import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('message');
  },
  actions: {
    toggleArchive(message){
      message.toggleProperty('archived');
      message.save();
    },
    toggleStarred(message){
      message.toggleProperty('starred');
      message.save();
    }
  }
});
