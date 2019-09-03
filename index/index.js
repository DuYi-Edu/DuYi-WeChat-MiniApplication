Page({
  data: {
    fontFamily: 'Bitstream Vera Serif Bold',
    loaded: false,
  },

  onLoad() {
    this.setData({
      loaded: false
    })
  },

  loadFontFace() {
    const self = this
    wx.loadFontFace({
      family: this.data.fontFamily,
      source: 'url("https://sungd.github.io/Pacifico.ttf")',
      success(res) {
        console.log(res.status)
        self.setData({ loaded: true })
      },
      fail: function(res) {
        console.log(res.status)
      },
      complete: function(res) {
        console.log(res.status)
      }
    });
  }
})
