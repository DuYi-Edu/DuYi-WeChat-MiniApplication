module.exports = Behavior({
  behaviors:[require('behavior2.js')],
  definitionFilter(defFields,definitionFilterArr){
    console.log("dehavior1-definitionFilter")
    defFields.data.form = 'behavior-form'
  }
})