/**
 * 在worker线程中，会自动创建一个worker对象，所以可以直接使用
 */

//接受（监听）主线程的数据
worker.onMessage((res)=>{
  console.log('这是worker内的线程打印数据')
  let worker_x = res.x
  let worker_y = res.y
  let sum = add(worker_x,worker_y)
  //发送数据回主线程
  worker.postMessage({
    sum: sum
  })
})

//求和操作
function add(x,y){
  return parseInt(x)+parseInt(y)
}