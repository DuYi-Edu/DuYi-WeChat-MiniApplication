module.exports = Behavior({
  behaviors: [require('behavior3.js')],
  definitionFilter(defFields, definitionFilterArr) {
    console.log("dehavior2-definitionFilter")
    //definitionFilterArr[0]代表behavior3的definitionFilter
    //defFields 谁（那个对象调用）
    definitionFilterArr[0](defFields)
  }
})