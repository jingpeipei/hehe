function openDoctor() {
  alert('跳转医生介绍')
}

function reservationFn(item) {
  alert('跳转')
}

window.onload = function () {
  // 科室、时间事件
  $.each($(".fold-wrapper"), function(i, item) {
    initFold($(item))
  })
  $(".fold-wrapper").click(function() {
    setFold($(this))
  })

  $('.dept-item').click(function() {
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
  })

  // 搜索
  document.getElementById('searchIpt').onchange = function(e) {
    alert('搜索值改变')
  }
  // 获取焦点光标在最后面
  document.getElementById('searchIpt').onfocus = function(e) {
  
  }

}


function initFold(ele) {
  var fold_text = ele.find('.fold-text').text()
  var foldChildrens = ele.parent().find('.dept-con').children()
  if (fold_text === '展开') {
    $.each(foldChildrens, function(i, item) {
      if (i > 2) {
        $(item).hide()
      }
    })
  } else {
    $.each(foldChildrens, function(i, item) {
      if (i > 2) {
        $(item).show()
      }
    })
  }
}

function setFold(ele) {
  var fold_text = ele.find('.fold-text').text()
  var foldChildrens = ele.parent().find('.dept-con').children()
  if (fold_text === '展开') {
    ele.find('.fold-text').text('折叠')
    ele.parent().find('.arrow').addClass('top')
    $.each(foldChildrens, function(i, item) {
      if (i > 2) {
        $(item).show()
      }
    })
  } else {
    ele.find('.fold-text').text('展开')
    ele.parent().find('.arrow').removeClass('top')
    $.each(foldChildrens, function(i, item) {
      if (i > 2) {
        $(item).hide()
      }
    })
  }
}