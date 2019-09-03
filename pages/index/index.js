// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 打开文档
   */
  openDocument(){
    //需要先下载文档
    wx.downloadFile({
      url:'',//docx,xls,ppt,pdf
      success(res){
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success(res){
            console.log('文件已经打开')
          }
        })
      }
    })
  },

  /**
   * 清楚本地缓存文件
   */
  removeSavedFile(){
    //获取文件
    wx.getSavedFileList({
      success(res){
        console.log(res)
        //删除
        if(res.fileList.length>0){
          for (let i = 0; i < res.fileList.length;i++){
            wx.removeSavedFile({
              filePath: res.fileList[i].filePath,
              success(res){
                console.log('[success]',res)
              },
              fail(res){
                console.log('[fail]',res)
              },
              complete(res){
                console.log('[complete]',res)
              }
            })
          }
        }
      }
    })
  },

  /**
   * 获取以存储的文件列表
   */
  getSavedFiledList(){
    wx.getSavedFileList({
      success(res){
        console.log(res.fileList)
      }
    })
  },

  /**
   * 获取本地临时缓存文件
   * 
   */
  getFileInfo(){
    wx.chooseImage({
      success: function(res) {
        wx.getFileInfo({
          filePath: res.tempFilePaths[0],
          //size以字节为单位
          //digest 计算算法 md5/sha1 之后的一个值，默认md5
          success(res){
            console.log(res.size)
          }
        })
      },
    })
    
  },

  /**
   * 保存文件
   * 保存文件至本地，会移动临时文件，保存后临时文件讲不可用
   */
  saveFile(){
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        //保存
        
        wx.saveFile({
          tempFilePath: tempFilePaths[0],
          success(res){
            const savedFilePath = res.savedFilePath
            console.log(savedFilePath)
            //图片存储后的路径
            //windows：C:\Users\wangyan\AppData\Local\微信web开发者工具\User Data
          }
        })
        
        
        //保存至相册
        /*
        wx.saveImageToPhotosAlbum({
          filePath: tempFilePaths[0],
          success(res){
            const savedFilePath = res.savedFilePath
            console.log(savedFilePath)
          }
        })
        */

        //保存至视频目录
        /*
        wx.saveVideoToPhotosAlbum({
          filePath: tempFilePaths[0],//视频文件的临时路径
          success(res){
            wx.showToast({
              title: '保存成功',
            })
          }
        })
        */
      },
    })
  }
})