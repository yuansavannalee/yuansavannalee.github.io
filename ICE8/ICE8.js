$(document).ready(function(){
  // alert('beginning!')
  
  // function validatePass(){
  //   if ($('#password1').val() !== $('#password2').val()) {
  //     $('.errormessage').show();
  //   }
  // }

  $('#password2').on('change',function(){
    if ($('#password2') !== $('#password1')){
      /*$('.errormessage').show();*/
      alert('The two passwords are not the same')
    }
  })


  $("input[type='tel']").each(function(){
    $(this).on("change keyup paste", function (e) {
      var output,
        $this = $(this),
        input = $this.val();

      if(e.keyCode != 8) {
        input = input.replace(/[^0-9]/g, '');
        var area = input.substr(0, 3);
        var pre = input.substr(3, 3);
        var tel = input.substr(6, 4);
        if (area.length < 3) {
          output = "(" + area;
        } else if (area.length == 3 && pre.length < 3) {
          output = "(" + area + ")" + " " + pre;
        } else if (area.length == 3 && pre.length == 3) {
          output = "(" + area + ")" + " " + pre + "-" + tel;
        }
        $this.val(output);
      }
    });
  });

})