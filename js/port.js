
$(document).ready(function(){
          // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top -60
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        //window.location.hash = hash;
      });
    } // End if
  });

  $('#out').text(formatNumber(out)+".00");
  $('#insider').text(insider+"%");
  $('#totalasset').text(formatNumber(management));

  $('#customSwitch1').on('change', function() {
      if(this.checked){
        $('#fixedshare').removeAttr("disabled");
      }else{
        $('#fixedshare').attr("disabled","true");
      }calculate();
  });

  $('#customSwitch2').on('change', function() {
      if(this.checked){
        $('#noriskshare').removeAttr("disabled");
      }else{
        $('#noriskshare').attr("disabled","true");
      }calculate();
  });

  $('#customSwitch3').on('change', function() {
      if(this.checked){
        $('#lowriskshare').removeAttr("disabled");
      }else{
        $('#lowriskshare').attr("disabled","true");
      }calculate();
  });


  $('#customSwitch4').on('change', function() {
      if(this.checked){
        $('#mediumriskshare').removeAttr("disabled");
      }else{
        $('#mediumriskshare').attr("disabled","true");
      }calculate();
  });


  $('#customSwitch5').on('change', function() {
      if(this.checked){
        $('#highriskshare').removeAttr("disabled");
      }else{
        $('#highriskshare').attr("disabled","true");
      }calculate();
  });

  $("#fixedshare").on("focusout", function(){
    if (this.value<1000) {this.value=1000;}
    if(this.value>10000){this.value=10000;}
    calculate();
  });
  $("#noriskshare").on("focusout", function(){
    if (this.value<1000) {this.value=1000;}
    if(this.value>10000){this.value=10000;}
    calculate();
  });
  $("#lowriskshare").on("focusout", function(){
    if (this.value<1000) {this.value=1000;}
    if(this.value>10000){this.value=10000;}
    calculate();
  });
  $("#mediumriskshare").on("focusout", function(){
    if (this.value<1000) {this.value=1000;}
    if(this.value>10000){this.value=10000;}
    calculate();
  });
  $("#highriskshare").on("focusout", function(){
    if (this.value<1000) {this.value=1000;}
    if(this.value>10000){this.value=10000;}
    calculate();
  });

  $("#fixedshare").on("keyup", function(){calculate();});
  $("#noriskshare").on("keyup", function(){calculate();});
  $("#lowriskshare").on("keyup", function(){calculate();});
  $("#mediumriskshare").on("keyup", function(){calculate();});
  $("#highriskshare").on("keyup", function(){calculate();});

});

function calculate(){
  var sum=0;
  var share=0
  if($("#customSwitch1").is(":checked")){
    if($('#fixedshare').val()==""){
      share=0;
    }
    else{
      share = $('#fixedshare').val();
    }
    sum+= parseInt(share)*fixed[fixed.length-1];
  }
  if($("#customSwitch2").is(":checked")){
    if($('#noriskshare').val()==""){
      share=0;
    }
    else{
      share = $('#noriskshare').val();
    }
    sum+= parseInt(share)*ninetyfive[ninetyfive.length-1];
  }
  if($("#customSwitch3").is(":checked")){
    if($('#lowriskshare').val()==""){
      share=0;
    }
    else{
      share = $('#lowriskshare').val();
    }
    sum+= parseInt(share)*ninety[ninety.length-1];
  }
  if($("#customSwitch4").is(":checked")){
    if($('#mediumriskshare').val()==""){
      share=0;
    }
    else{
      share = $('#mediumriskshare').val();
    }
    sum+= parseInt(share)*doublerisk[doublerisk.length-1];
  }
  if($("#customSwitch5").is(":checked")){
    if($('#highriskshare').val()==""){
      share=0;
    }
    else{
      share = $('#highriskshare').val();
    }
    sum+= parseInt(share)*ultrarisk[ultrarisk.length-1];
  }
  $("#total").text(formatNumber(sum.toFixed(2)));
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
