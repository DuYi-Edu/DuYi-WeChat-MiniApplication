module.exports = Behavior({
  
  //defFields dehavior/component对象
  //definitionFilterArr  dehavior列表
  /*
  definitionFilter(defFields, definitionFilterArr) {
    defFields.data.form = 'behavior-form'
  },
  */


  data:{
    from:'beh1'
  },

  behaviors: [require('./behavior2'), require('./behavior3')],
  definitionFilter(defFields,definitionFilterArr){
    console.log('behavior definitionFilter', defFields.data.from = defFields.data.from+ '-addsome')
  }
})