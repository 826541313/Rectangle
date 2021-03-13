$(()=>{
  let $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calc'),
      $perimeter = $('#perimeter'),
      $area = $('#area'),
      $widthValidate = $('#width-validate'),
      $heightValidate = $('#height-validate');

  $btnCal.click(()=>{
  
    let w = Number($width.val()),
        h = Number($height.val());

    if(validate($width,$widthValidate) && validate($height,$heightValidate)){

      let p = (w + h) * 2
          a = w * h;

      $perimeter.val(p);
      $area.val(a);
    };
  })
})

  function validate(input,output){

    console.log(input.val())
    //is empty
    if(input.val()===''){
      output.html('该字段不能为空');
      return false
    }else{
      output.html("")
    }

    //is number
    
    let val = Number(input.val());

    if(isNaN(val)){
      output.html('该字段应该是数值');
      return false;
    }else{
      output.html('');
    }

    //is +
    
    if(val<0){
      output.html('该数值不能小于0');
      return false;
    }else{
      output.html('');
    }


    return true
  }

