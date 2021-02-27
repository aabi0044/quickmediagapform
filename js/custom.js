var zipcode = "";
$(document).ready(function () {
  $(".zip-form .submit-btn").click(function (e) {
    e.preventDefault();
    zipcode = $("#zipcode").val();

    if (zipcode === "") {
      $(this).siblings(".control").removeClass("valid");
      $(this).siblings(".control").addClass("invalid");
    } else {
      $(this).siblings(".control").removeClass("invalid");
      $(this).siblings(".control").addClass("valid");
      window.location = "./form.html";
    }
  });
  $("#zipcode").keypress(function (e) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      return false;
    }
  });
});

const steps = [
  {
    name: "zipCode",
    valid: false,
    visible: true,
    id: 1,
    progress: 8,
    value: zipcode,
    pmin: 0,
    pmax: 9,
  },
  {
    name: "gender",
    valid: false,
    visible: false,
    id: 1,
    progress: 8,
    value: "",
    html: ``,
    pmin: 9,
    pmax: 15,
  },
  {
    name: "month",
    valid: false,
    visible: false,
    id: 1,
    progress: 8,
    value: "",
    html: ``,
    pmin: 16,
    pmax: 20,
  },
  {
    name: "day",
    valid: false,
    visible: false,
    id: 1,
    progress: 8,
    value: "",
    html: ``,
    pmin: 20,
    pmax: 25,
  },
  {
    name: "year",
    valid: false,
    visible: false,
    id: 1,
    progress: 8,
    value: "",
    html: ``,
    pmin: 25,
    pmax: 30,
  },
  {
    name: "pname",
    valid: false,
    visible: false,
    id: 1,
    progress: 8,
    value: {
      fname: "",
      lname: "",
    },
    html: ``,
    pmin: 30,
    pmax: 83,
  },
  {
    name: "email",
    valid: false,
    visible: false,
    id: 1,
    progress: 8,
    value: "",
    html: ``,
    pmin: 83,
    pmax: 89,
  },
  {
    name: "phone",
    valid: false,
    visible: false,
    id: 1,
    progress: 8,
    value: "",
    html: ``,
    pmin: 89,
    pmax: 95,
  },
  {
    name: "address",
    valid: false,
    visible: false,
    id: 1,
    progress: 8,
    value: "",
    html: ``,
    pmin: 95,
    pmax: 100,
  },
];

function handleNext(value) {
    console.log(value);
  const index = steps.findIndex((step) => step.name == value);
  console.log(index);
  if (index > -1 && steps[index].valid === true) {
    steps[index].visible = false;
    steps[index + 1].visible = true;
    loadContent()
  }else{
    steps[index].checked = true; 
    loadContent(false)
  }
}

function handleBack(value){
    const index = steps.findIndex((step) => step.name == value);
    console.log(index);
    if (index > -1 ) {
      steps[index].visible = false;
      steps[index - 1].visible = true;
      loadContent()
    }
}
function zipCodeHandler(){
    var zipcode = document.getElementById('zipcode').value;
    steps[0].value = zipcode.toString();
    var isValidZip = checkZip(zipcode);
    if(isValidZip){
        steps[0].valid = true;
    }else{
        steps[0].valid = false;
    }
    console.log(isValidZip);
}
function checkZip(value) {
    return (/(^\d{5}$)|(^\d{5}-\d{4}$)/).test(value);
};

function loadContent(loading=true) {
  var field = document.getElementById("fieldsetcontent");
  steps.forEach((step) => {
    if (step.name === "zipCode" && step.visible === true) {
    console.log(step);
      field.innerHTML = `<fieldset id="zf_step1" class="zf-step zf-step1">
          <h2 class="step-title text-center">What is your zip code?</h2>
          <div class="inner d-flex align-items-center justify-content-between">
              <div class="control ${!step.valid&& step.checked&& step.checked ===true? 'invalid':
              step.valid&& step.checked&& step.checked ===true? "valid" :''}">
                  <input id="zipcode" onkeyup="zipCodeHandler()" class="${!step.valid&& step.checked&& step.checked ===true? 'input-error':
                  step.valid&& step.checked&& step.checked ===true? "input-valid" :''
                }" type="number"  name="zip" maxlength="5" placeholder="zip code" value="${step.vaule!=="" ? Number(step.value):''}"
                      aria-invalid="true" required>
                  <div class="validation-icon">
                      <i class="fa fa-check valid" aria-hidden="true"></i>
                      <i class="fa fa-times" aria-hidden="true"></i>
                      <i class="fa fa-spinner" aria-hidden="true"></i>
                  </div>
              </div>
              <button class="btn block" type="button" onclick="handleNext('zipCode')">Continue</button>
          </div>
      </fieldset>`;
      if(loading)
      myLoop(step.pmin, step.pmax);
    }
    if (step.name === "gender" && step.visible === true) {
        field.innerHTML = `  <fieldset id="zf_step2" class="zf-step zf-step2">
        <h2 class="step-title text-center">What is your gender?</h2>
        <div class="inner d-flex align-items-center justify-content-center">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="gender" id="s2_i1" value="Male">
                <label class="form-check-label" for="s2_i1">
                    <svg onclick="handleNext('gender')">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <path
                                d="M69.6842105,74.8704 C72.8421053,75.8208 88.6315789,79.6224 92,84.9024 C95.3684211,90.1824 98.8421053,105.8112 99.6842105,127.0368 C99.6842105,127.0368 83.6842105,132.4224 55.6842105,131.3664 C27.5789474,130.3104 5.78947368,128.4096 0.526315789,126.6144 C0.526315789,126.6144 0.526315789,106.3392 3.47368421,93.2448 C6.42105263,80.1504 11.4736842,80.4672 25.8947368,74.7648 L69.6842105,74.7648 L69.6842105,74.8704 Z"
                                id="Shape" fill="#7799AF" fill-rule="nonzero"></path>
                            <path
                                d="M60.8421053,60.5088 C60.8421053,64.5216 60.8421053,70.224 63.6842105,72.864 L65.7894737,78.3552 L47.6842105,84.48 L30.8421053,76.7712 L32.4210526,72.336 C32.4210526,72.336 35.3684211,70.752 35.5789474,62.6208 L60.8421053,60.5088 Z"
                                id="Shape" fill="#D6C2AA" fill-rule="nonzero"></path>
                            <path
                                d="M70.5263158,35.7984 C71.8947368,35.376 74.7368421,36.8544 73.5789474,40.656 C72.4210526,44.4576 65.2631579,50.3712 65.2631579,50.3712 L70.5263158,35.7984 Z"
                                id="Shape" fill="#D6C2AA" fill-rule="nonzero"></path>
                            <path
                                d="M24.8421053,35.7984 C23.4736842,35.376 20.6315789,36.8544 21.7894737,40.656 C22.9473684,44.4576 30.1052632,50.3712 30.1052632,50.3712 L24.8421053,35.7984 Z"
                                id="Shape" fill="#D6C2AA" fill-rule="nonzero"></path>
                            <path
                                d="M26.6315789,40.2336 C25.0526316,37.0656 20.4210526,29.9904 21.4736842,23.6544 C22.5263158,17.3184 23.5789474,17.424 23.0526316,14.256 C22.5263158,11.088 27.0526316,8.0256 29.2631579,7.4976 C31.3684211,6.9696 33.6842105,0.9504 38.2105263,1.2672 C42.7368421,1.584 45.0526316,1.7952 49.4736842,0.528 C53.8947368,-0.7392 61.5789474,1.584 64.4210526,3.696 C67.2631579,5.808 67.5789474,10.4544 69.8947368,11.5104 C72.2105263,12.5664 74.6315789,16.4736 73.7894737,20.9088 C72.9473684,25.344 74.1052632,27.1392 72.9473684,31.9968 C71.6842105,36.96 67.6842105,43.0848 67.6842105,43.0848 L26.6315789,40.2336 Z"
                                id="Shape" fill="#C1C1C1" fill-rule="nonzero"></path>
                            <path
                                d="M26.8421053,25.9776 C25.3684211,38.1216 27.0526316,57.3408 35.0526316,63.4656 C43.0526316,69.5904 48.4210526,70.752 55.4736842,66.528 C62.5263158,62.304 65.7894737,59.9808 67.2631579,49.5264 C68.6315789,39.1776 70.7368421,28.512 68.2105263,22.704 C65.5789474,16.7904 61.6842105,15.6288 58.8421053,17.952 C56,20.2752 45.2631579,22.9152 39.5789474,19.3248 C33.8947368,15.84 28,16.2624 26.8421053,25.9776 Z"
                                id="Shape" fill="#E7D4B9" fill-rule="nonzero"></path>
                            <path
                                d="M46.6315789,34.1088 L43.6842105,45.6192 C43.0526316,47.9424 44.8421053,50.2656 47.2631579,50.2656 C49.5789474,50.2656 51.3684211,48.1536 50.8421053,45.8304 L48.4210526,34.2144 C48.3157895,33.1584 46.9473684,33.1584 46.6315789,34.1088 Z"
                                id="Shape" fill="#D6C2AA" fill-rule="nonzero"></path>
                            <path
                                d="M47.6842105,84.5856 C47.6842105,84.5856 62.5263158,76.4544 65.2631579,71.0688 L69.5789474,74.976 C69.5789474,74.976 63.3684211,87.8592 51.1578947,93.456 C51.2631579,93.3504 49.4736842,87.7536 47.6842105,84.5856 Z"
                                id="Shape" fill="#85B3B2" fill-rule="nonzero"></path>
                            <path
                                d="M47.6842105,84.5856 C47.6842105,84.5856 32.8421053,76.4544 30.1052632,71.0688 L25.7894737,74.976 C25.7894737,74.976 32,87.8592 44.2105263,93.456 C44.2105263,93.3504 45.8947368,87.7536 47.6842105,84.5856 Z"
                                id="Shape" fill="#85B3B2" fill-rule="nonzero"></path>
                            <path
                                d="M39.3684211,53.5392 C39.3684211,53.5392 47.5789474,56.8128 56.1052632,53.5392 C56.1052632,53.5392 48.3157895,61.1424 39.3684211,53.5392 Z"
                                id="Shape" fill="#FFFFFF" fill-rule="nonzero"></path>
                            <ellipse id="Oval" fill="#D6C2AA" fill-rule="nonzero" cx="37.2631579"
                                cy="35.0592" rx="1.36842105" ry="2.7456"></ellipse>
                            <ellipse id="Oval" fill="#D6C2AA" fill-rule="nonzero" cx="57.3684211"
                                cy="35.0592" rx="1.36842105" ry="2.7456"></ellipse>
                            <path
                                d="M47.3684211,50.2656 C50.3157895,50.2656 54.3157895,47.3088 57.4736842,50.2656 C60.6315789,53.2224 58.1052632,58.08 58.1052632,58.08 C58.1052632,58.08 57.4736842,53.856 53.2631579,54.7008 C48.9473684,55.5456 47.7894737,54.912 47.4736842,53.5392 C47.0526316,52.1664 47.0526316,52.1664 47.0526316,52.1664 L47.3684211,50.2656 Z"
                                id="Shape" fill="#C1C1C1" fill-rule="nonzero"></path>
                            <path
                                d="M47.5789474,50.2656 C44.6315789,50.2656 40.6315789,47.3088 37.4736842,50.2656 C34.3157895,53.2224 36.8421053,58.08 36.8421053,58.08 C36.8421053,58.08 37.4736842,53.856 41.6842105,54.7008 C46,55.5456 47.1578947,54.912 47.4736842,53.5392 C47.8947368,52.1664 47.8947368,52.1664 47.8947368,52.1664 L47.5789474,50.2656 Z"
                                id="Shape" fill="#C1C1C1" fill-rule="nonzero"></path>
                            <path
                                d="M54.4210526,28.512 C54.4210526,28.512 49.8947368,27.2448 47.0526316,27.2448 C44.3157895,27.2448 40.2105263,28.512 40.2105263,28.512"
                                id="Shape" stroke="#D6C2AA" stroke-width="0.526315789"></path>
                            <path
                                d="M56.6315789,26.6112 C56.6315789,26.6112 50.6315789,24.9216 47.0526316,24.9216 C43.4736842,24.9216 38.1052632,26.6112 38.1052632,26.6112"
                                id="Shape" stroke="#D6C2AA" stroke-width="0.526315789"></path>
                        </g>
                    </svg>
                    <span>Male</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="gender" id="s2_i2" value="Female">
                <label class="form-check-label" for="s2_i2">
                    <svg onclick="handleNext('gender')">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <path
                                d="M36.4583333,10.4132231 C36.4583333,10.4132231 37.5,2.91570248 47.3958333,1.24958678 C57.2916667,-0.416528926 68.125,5.6231405 77.8125,14.5785124 C87.5,23.6380165 86.6666667,39.3619835 84.4791667,44.0479339 C82.2916667,48.7338843 76.9791667,51.2330579 77.5,55.0859504 C78.0208333,58.938843 75.5208333,70.7057851 61.5625,70.3933884 C47.6041667,70.0809917 37.7083333,71.6429752 32.0833333,67.5818182 C26.3541667,63.5206612 25.2083333,55.3983471 25.9375,52.3785124 C26.5625,49.3586777 21.5625,45.5057851 20.4166667,37.6958678 C19.0625,29.7818182 21.3541667,10.1008264 36.4583333,10.4132231 Z"
                                id="Shape" fill="#C1C1C1"></path>
                            <path
                                d="M61.1458333,63.1041322 C61.5625,66.2280992 60.9375,72.0595041 67.3958333,74.246281 L68.0208333,78.8280992 L52.6041667,85.9090909 L35.2083333,80.1818182 L34.375,73.4132231 C34.375,73.4132231 38.75,72.892562 39.5833333,66.6446281 C40.4166667,60.3966942 40,54.5652893 40,54.5652893 L61.1458333,63.1041322 Z"
                                id="Shape" fill="#D6C2AA"></path>
                            <path
                                d="M43.3333333,19.5768595 C43.3333333,19.5768595 41.0416667,27.3867769 37.8125,31.968595 C34.5833333,36.5504132 36.0416667,40.507438 36.0416667,40.507438 C36.0416667,40.507438 35.5208333,34.4677686 31.4583333,35.6132231 C27.3958333,36.7586777 30,48.9421488 35,49.2545455 C35,49.2545455 41.5625,64.9785124 51.0416667,66.4363636 C60.5208333,67.8942149 66.6666667,62.1669421 70.625,52.0661157 C74.6875,41.9652893 76.4583333,29.9900826 66.25,25.9289256 C56.25,21.6595041 49.5833333,23.3256198 43.3333333,19.5768595 Z"
                                id="Shape" fill="#E7D4B9"></path>
                            <path
                                d="M58.5416667,38.6330579 C59.6875,37.1752066 60.1041667,44.6727273 60,47.7966942 C59.8958333,52.5867769 57.6041667,52.4826446 55.8333333,51.4413223 C54.1666667,50.6082645 56.7708333,40.9239669 58.5416667,38.6330579 Z"
                                id="Shape" fill="#D6C2AA"></path>
                            <ellipse id="Oval" fill="#D6C2AA" cx="47.2916667" cy="38.6330579"
                                rx="1.35416667" ry="2.29090909"></ellipse>
                            <ellipse id="Oval" fill="#D6C2AA" cx="65.7291667" cy="39.6743802"
                                rx="1.35416667" ry="2.29090909"></ellipse>
                            <path
                                d="M67.3958333,74.246281 C67.3958333,74.246281 76.5625,75.7041322 81.6666667,77.1619835 C86.7708333,78.6198347 93.125,80.2859504 96.0416667,92.1570248 C98.9583333,104.028099 99.7916667,119.231405 99.7916667,119.231405 C99.7916667,119.231405 45.8333333,135.059504 0.9375,116.836364 C0.9375,116.836364 1.5625,99.7586777 3.54166667,92.8859504 C5.52083333,86.0132231 9.79166667,79.661157 15.9375,78.0991736 C22.0833333,76.6413223 34.375,73.5173554 34.375,73.5173554 C34.375,73.5173554 38.9583333,82.368595 51.5625,82.368595 C63.6458333,82.368595 67.3958333,74.246281 67.3958333,74.246281 Z"
                                id="Shape" fill="#85B3B2"></path>
                            <path
                                d="M51.4583333,85.7008264 C64.4791667,85.7008264 70,77.0578512 71.1458333,74.9752066 C68.9583333,74.5586777 67.3958333,74.3504132 67.3958333,74.3504132 C67.3958333,74.3504132 63.6458333,82.4727273 51.5625,82.4727273 C38.9583333,82.4727273 34.375,73.6214876 34.375,73.6214876 C34.375,73.6214876 33.0208333,73.9338843 31.0416667,74.4545455 C32.6041667,77.0578512 38.4375,85.7008264 51.4583333,85.7008264 Z"
                                id="Shape" fill="#7799AF"></path>
                            <path
                                d="M52.3958333,125.583471 C51.7708333,125.583471 51.25,125.06281 51.25,124.438017 L51.25,84.5553719 L53.4375,84.5553719 L53.4375,124.438017 C53.5416667,125.166942 53.0208333,125.583471 52.3958333,125.583471 Z"
                                id="Shape" fill="#7799AF"></path>
                            <ellipse id="Oval" fill="#7799AF" cx="58.125" cy="101.320661"
                                rx="1.77083333" ry="1.77024793"></ellipse>
                            <ellipse id="Oval" fill="#7799AF" cx="58.125" cy="111.421488"
                                rx="1.77083333" ry="1.77024793"></ellipse>
                            <path
                                d="M50,56.3355372 C50,56.3355372 56.1458333,59.2512397 62.6041667,56.3355372 C62.6041667,56.3355372 56.7708333,63.1041322 50,56.3355372 Z"
                                id="Shape" fill="#FFFFFF"></path>
                        </g>
                    </svg>
                    <span>Female</span>
                </label>
            </div>
        </div>
        <a href="#" class="go-back" type="button" onclick="handleBack('gender')" >Go back</a>
    </fieldset>`;
    if(loading)
        myLoop(step.pmin, step.pmax);
      }
      if(step.name ==="month"&& step.visible === true ){
        field.innerHTML = `       <fieldset id="zf_step3" class="zf-step multi-option zf-step3">
        <h2 class="step-title text-center">What month were you born?</h2>
        <div class="inner d-flex align-items-center justify-content-center flex-wrap">
            <div class="form-check">
                <input class="form-check-input" type="radio" onclick="handleNext('month')" name="month" id="s3_i1" value="1">
                <label class="form-check-label" for="s3_i1">
                    <span>January</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" onclick="handleNext('month')"  name="month" id="s3_i2" value="2">
                <label class="form-check-label" for="s3_i2">
                    <span>February</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" onclick="handleNext('month')" name="month" id="s3_i3" value="3">
                <label class="form-check-label" for="s3_i3">
                    <span>March</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" onclick="handleNext('month')" name="month" id="s3_i4" value="4">
                <label class="form-check-label" for="s3_i4">
                    <span>April</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" onclick="handleNext('month')" name="month" id="s3_i5" value="5">
                <label class="form-check-label" for="s3_i5">
                    <span>May</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" onclick="handleNext('month')" name="month" id="s3_i6" value="6">
                <label class="form-check-label" for="s3_i6">
                    <span>June</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" onclick="handleNext('month')" name="month" id="s3_i7" value="7">
                <label class="form-check-label" for="s3_i7">
                    <span>July</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" onclick="handleNext('month')" name="month" id="s3_i8" value="8">
                <label class="form-check-label" for="s3_i8">
                    <span>August</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" onclick="handleNext('month')" name="month" id="s3_i9" value="9">
                <label class="form-check-label" for="s3_i9">
                    <span>September</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" onclick="handleNext('month')"  name="month" id="s3_i10" value="10">
                <label class="form-check-label" for="s3_i10">
                    <span>October</span>
                </label>
            </div>
            <div class="form-check"> 
                <input class="form-check-input" type="radio" onclick="handleNext('month')" name="month" id="s3_i11" value="11">
                <label class="form-check-label" for="s3_i11">
                    <span>November</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" onclick="handleNext('month')" name="month" id="s3_i12" value="12">
                <label class="form-check-label" for="s3_i12">
                    <span>December</span>
                </label>
            </div>
        </div>
        <a href="#" class="go-back" type="button" onclick="handleBack('month')">Go back</a>
    </fieldset>`;
    if(loading)
    myLoop(step.pmin, step.pmax);
      }
      if(step.name ==="day"&& step.visible === true ){
        field.innerHTML =`     <fieldset id="zf_step4" class="zf-step multi-option zf-step4">
        <h2 class="step-title text-center">What day were you born?</h2>
        <div class="inner d-flex align-items-center flex-wrap">
            <div class="form-check">
                <input class="form-check-input" onclick="handleNext('day')" type="radio" name="month" id="s4_i1" value="1">
                <label class="form-check-label" for="s4_i1">
                    <span>1</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i2" value="2">
                <label class="form-check-label" for="s4_i2">
                    <span>2</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i3" value="3">
                <label class="form-check-label" for="s4_i3">
                    <span>3</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i4" value="4">
                <label class="form-check-label" for="s4_i4">
                    <span>4</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i5" value="5">
                <label class="form-check-label" for="s4_i5">
                    <span>5</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i6" value="6">
                <label class="form-check-label" for="s4_i6">
                    <span>6</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i7" value="7">
                <label class="form-check-label" for="s4_i7">
                    <span>7</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i8" value="8">
                <label class="form-check-label" for="s4_i8">
                    <span>8</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i9" value="9">
                <label class="form-check-label" for="s4_i9">
                    <span>9</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i10" value="10">
                <label class="form-check-label" for="s4_i10">
                    <span>10</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i11" value="11">
                <label class="form-check-label" for="s4_i11">
                    <span>11</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i12" value="12">
                <label class="form-check-label" for="s4_i12">
                    <span>12</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i13" value="13">
                <label class="form-check-label" for="s4_i13">
                    <span>13</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i14" value="14">
                <label class="form-check-label" for="s4_i14">
                    <span>14</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i15" value="15">
                <label class="form-check-label" for="s4_i15">
                    <span>15</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i16" value="16">
                <label class="form-check-label" for="s4_i16">
                    <span>16</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i17" value="17">
                <label class="form-check-label" for="s4_i17">
                    <span>17</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i18" value="18">
                <label class="form-check-label" for="s4_i18">
                    <span>18</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i19" value="19">
                <label class="form-check-label" for="s4_i19">
                    <span>19</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i20" value="20">
                <label class="form-check-label" for="s4_i20">
                    <span>20</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i21" value="21">
                <label class="form-check-label" for="s4_i21">
                    <span>21</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i22" value="22">
                <label class="form-check-label" for="s4_i22">
                    <span>22</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i23" value="23">
                <label class="form-check-label" for="s4_i23">
                    <span>23</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i24" value="24">
                <label class="form-check-label" for="s4_i24">
                    <span>24</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i25" value="25">
                <label class="form-check-label" for="s4_i25">
                    <span>25</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i26" value="26">
                <label class="form-check-label" for="s4_i26">
                    <span>26</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i27" value="27">
                <label class="form-check-label" for="s4_i27">
                    <span>27</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i28" value="28">
                <label class="form-check-label" for="s4_i28">
                    <span>28</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i28" value="29">
                <label class="form-check-label" for="s4_i29">
                    <span>29</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i30" value="30">
                <label class="form-check-label" for="s4_i30">
                    <span>30</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="day" onclick="handleNext('day')" id="s4_i31" value="31">
                <label class="form-check-label" for="s4_i31">
                    <span>31</span>
                </label>
            </div>
        </div>
        <a href="#" class="go-back"type="button" onclick="handleBack('day')">Go back</a>
    </fieldset>`
    if(loading)
    myLoop(step.pmin, step.pmax);
      }

      if(step.name ==="year"&& step.visible === true ){

        field.innerHTML=`
        <fieldset id="zf_step5" class="zf-step zf-step5">
        <h2 class="step-title text-center">Birth Year?</h2>
        <div class="form-group birth-year">
            <label for="birth_year">19</label>
            <input type="text" class="form-control"  id="birth_year">
        </div>
        <button class="btn block m-auto" onclick="handleNext('year')">next</button>
        <a href="#" class="go-back" type="button" onclick="handleBack('year')">Go back</a>
    </fieldset>`
    if(loading)
    myLoop(step.pmin, step.pmax);
      }

      if(step.name ==="pname"&& step.visible === true ){
        field.innerHTML=`
        <fieldset id="zf_step6" class="zf-step zf-step6">
        <h2 class="step-title text-center">What is your full name?</h2>
        <div class="inner inner d-flex align-items-center justify-content-between">
            <div class="form-group">
                <label for="f_name">First name</label>
                <input type="text" class="form-control" id="f_name" placeholder="First Name">
            </div>
            <div class="form-group">
                <label for="l_name">Last name</label>
                <input type="text" class="form-control" id="l_name" placeholder="Last Name">
            </div>
        </div>
        <button class="btn block m-auto mt-c" onclick="handleNext('pname')">next</button>
        <a href="#" class="go-back" type="button" onclick="handleBack('pname')">Go back</a>
    </fieldset>`
    if(loading)
    myLoop(step.pmin, step.pmax);
      }
      if(step.name ==="email"&& step.visible === true ){
        field.innerHTML=`
        <fieldset id="zf_step7" class="zf-step zf-step7">
        <h2 class="step-title text-center">What is your email address?</h2>
        <div class="inner inner d-flex align-items-center justify-content-center">
            <div class="form-group w-100">
                <input type="email" class="form-control" id="email" placeholder="ex: JohnDoe@gmail.com">
            </div>
        </div>
        <button class="btn block m-auto mt-c" type="button" onclick="handleNext('email')">next</button>
        <a href="#" class="go-back" type="button" onclick="handleBack('email')">Go back</a>
    </fieldset>`
    if(loading)
    myLoop(step.pmin, step.pmax);

      }
      if(step.name ==="phone"&& step.visible === true ){
        field.innerHTML=`
        <fieldset id="zf_step8" class="zf-step zf-step8">
        <h2 class="step-title text-center">What is your phone number?</h2>
        <div class="inner inner d-flex align-items-center justify-content-center">
            <div class="form-group w-100">
                <input type="tel" class="form-control" id="phone_no" placeholder="Phone Number">
            </div>
        </div>
        <p class="note">A valid phone number is required for an accurate quote <br> We
            <strong>highly</strong> respect your privacy</p>
        <button class="btn block m-auto mt-c" onclick="handleNext('phone')">next</button>
        <a href="#" class="go-back" type="button" onclick="handleBack('phone')">Go back</a>
    </fieldset>`
    if(loading)
    myLoop(step.pmin, step.pmax);
      }
      if(step.name ==="address"&& step.visible === true ){

        field.innerHTML=`      <fieldset id="zf_step9" class="zf-step zf-step9">
        <h2 class="step-title text-center">What is your home address?</h2>
        <div class="inner inner d-flex align-items-center justify-content-center">
            <div class="form-group w-100">
                <label for="address">Street Address</label>
                <input type="tel" class="form-control" id="address" placeholder="Street Address">
            </div>
        </div>
        <button class="btn block m-auto mt-c">Get My Quotes!</button>
        <a href="#" class="go-back" type="button" onclick="handleBack('address')">Go back</a>
        <label class="describe">
            <input type="hidden" checked="checked" id="leadid_tcpa_disclosure"> 
            By clicking “Get My Quotes!” and seeking an insurance quote, I
            provide my signature and agree to receive communications via automated telephone dialing
            system, pre-recorded message, email or by text message from up to five insurance companies
            or their agents, this website, and partner companies at the land-line or wireless number I
            have provided. I understand that my signature consent is not a condition of purchase of any
            goods and services. Insurance companies or their agents that receive my quote request from
            this website or its partner companies may confirm my information through the use of a
            consumer report. I acknowledge that I have read and understand these terms, the terms of
            this website and agree to them. By completing the contact form above, you will be directed
            to a licensed sales agent who can answer your questions and provide information about
            Medicare Advantage, Part D or Medicare supplement insurance plans. Agents are not connected
            with or endorsed by the U.S. government or the federal Medicare program. One of <a
                href="/partners.html" target="_blank">these parties</a> may handle your health insurance
            case.</label>
    </fieldset>`
    if(loading)
    myLoop(step.pmin, step.pmax);
      }





  });
}

function showProgress(max) {
  var progress = document.getElementById("dynamicProgress");
  var value = document.getElementById("dynamicProgressValue");
  progress.style.width = `${max}%`;
  value.innerText = `${max}%`;
}

function myLoop(min, max) {
  showProgress(min); //  create a loop function
  setTimeout(function () {
    //  your code here
    min++; //  increment the counter
    if (min < max) {
      //  if the counter < 10, call the loop function
      myLoop(min, max); //  ..  again which will trigger another
    } //  ..  setTimeout()
  }, 50);
}

myLoop();
