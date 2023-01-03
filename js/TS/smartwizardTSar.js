$(document).ready(function() {
   var org_type, cons_detail, AppType_BND, ConsType_Value, Building_Type;
   var stNumber = 0;
   var selectedList = $('ul#credit').find('li.active').data('interest');
   var tabslength = $('ul#credit li').length;
   //alert(tabslength)
   $('#Cemail_Error').hide();
   $("#Total_PlotError").hide();
   $("#Car_Error").hide();
   $("#pTotal_PlotError").hide();
   $("#pCar_Error").hide();
   $("#others_hide").hide(); // BPTS13
   $(this).on('keyup keypress blur change ready load', function() {
   org_type = $('input[name=optradio]:checked').val();
   Building_Type = $('input[name=optradio5]:checked').val();
   ConsType_Value = $('#smartwizard').find('input[name=optradio4]:checked').val();

   if (AppType_BND == "Yes") {
      $("#benradio1").hide();
    } else {
      $("#benradio1").show();
    }
   
      if (org_type == "Organization") {
      $("#OrganizationDetails").show();
      $("#benType").hide();
      $("#optradio2").val('مؤسسة');
      $("#samehide").hide();
    } else {
      $("#OrganizationDetails").hide();
      $("#benType").show();
      $("#optradio2").val('فرد');
      $("#samehide").show();
    }
    // Request_Type - BPTS01 -select box 
    if($("#Request_ser").val() == "162" || $("#Request_ser").val() == "1000") {
      $("#lichide").hide();
      $('#Freezehide').hide();
    } else if($("#Request_ser").val() == "167" || $("#Request_ser").val() == "168") {
      $("#lichide").hide();
      $('#Freezehide').show();
    } else {
      $("#lichide").show();
      $('#Freezehide').hide();
    }
    
    if ($('#Bcolortype').val() == '101') {
      $('#Bcolorhide').show();
    }else {
      $('#Bcolorhide').hide();
    }
    if ($('#Pcolortype').val() == '101') {
      $('#Pcolorhide').show();
    }else {
      $('#Pcolorhide').hide();
    }
    //Beneficiary Type - Lease Contract New / Renew - BPHS01 - select box
    if ($('#Beneficiary_select').val() == "Owner" || $('#Beneficiary_select').val() == "Usufructer") {
      $("#AuthorizationNo").hide();
      $("#InvestorNo").hide();
      $("#benId").show();
      $("#waqf_Name").hide();
      $("#benradio").show();
      $("#benhide").hide();
      //$("#samehide").show();
    } else if ($('#Beneficiary_select').val() == "Investor") {
      $("#AuthorizationNo").hide();
      $("#InvestorNo").show();
      $("#benId").show();
      $("#waqf_Name").hide();
      $("#benradio").show();
      $("#benhide").show();
      $("#samehide").hide();
      $("#benradio1").hide();
    } else if ($('#Beneficiary_select').val() == "Attorney" || $('#Beneficiary_select').val() == "Heirs") {
      $("#AuthorizationNo").hide();
      $("#InvestorNo").hide();
      $("#waqf_Name").hide();
      $("#benradio").hide();
      $("#benhide").show();
      //$("#samehide").show();
      $("#Attorney_hide").hide();
      $("#Munlic").show();
    } else if ($('#Beneficiary_select').val() == "Individual") {
      $("#AuthorizationNo").hide();
      $("#InvestorNo").hide();
      $("#waqf_Name").hide();
      $("#benradio").hide();
      $("#benhide").show();
      //$("#samehide").show();
      $("#Attorney_hide").show();
      $("#Munlic").hide();
    } else if ($('#Beneficiary_select').val() == "waqf") {
      $("#InvestorNo").hide();
      $("#benId").hide();
      $("#waqf_Name").show();
      $("#benradio").hide();
      $("#benhide").show();
    } else if ($('#Beneficiary_select').val() == "Organization") { //BPHS03 only 
      $("#InvestorNo").hide();
      $("#AuthorizationNo").hide();
      $("#samehide").hide();
      $("#benType").hide();
      $("#OrganizationDetails").show();
      $("#benradio").hide();
      $("#optradio2").val('مؤسسة');
      $("#Munlic").show();
    } else {
      $("#AuthorizationNo").hide();
      $("#InvestorNo").hide();
      $("#benId").show();
      $("#waqf_Name").hide();
      $("#benradio").hide();
      $("#benhide").show();
      //$("#samehide").show();
      $("#benradio1").show();
    }
    if (Building_Type == "Occupied") {
      $("#Existinghide").show();
      $("#Proposedhide").show();
    } else if (Building_Type == "Regularization") {
      $("#Existinghide").show();
      $("#Proposedhide").hide();
    } else {
      $("#Existinghide").hide();
      $("#Proposedhide").show();
    }
    if (ConsType_Value == "180") {
      $("#CommericalRegistrationID_val").show();
      $("#commrcialname").show(); //Add code on 3/05/2017 by Balaram
      $("#approved").hide(); //Add code on 3/05/2017 by Balaram
      $("#Civilno").hide(); //Add code on 3/05/2017 by Balaram
      $('#Address_cons').val('Other');
    } else {
      $("#CommericalRegistrationID_val").hide();
      $("#commrcialname").hide(); //Add code on 3/05/2017 by Balaram
      $("#approved").show(); //Add code on 3/05/2017 by Balaram
      $("#Civilno").show(); //Add code on 3/05/2017 by Balaram
      $('#Address_cons').val('Applicant');
    }
    //General Services - Request Type - BPTS13 - select box
    if($('#conLN').val() == '180') {
      $("#others_hide").show();
    } else {
      $("#others_hide").hide();
    }
   });
   // ..................................smartwizard code start here...........................................//
  // Step show event 
  $("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
    //alert("You are on step "+stepNumber+" now");
    if (stepNumber == (tabslength - 3)) {
      $("#submitButton").show();
    }
    if (stepNumber != (tabslength - 3)) {
      $("#submitButton").hide();
    }
  }); 
  // Toolbar extra buttons
  var btnFinish = $('<button></button>').text('\u062d\u0641\u0638 \u0643\u0645\u0633\u0648\u062f\u0629').addClass('btn btn-ts').on('click', function() {});
  var btnRest = $('<button id="submitButton" onclick="submitpage()" style="display:none;margin-right:10px;"></button>').text('\u062a\u0633\u0644\u064a\u0645').addClass('btn btn-ts').on('click', function() {});
   // Smart Wizard
  $('#smartwizard').smartWizard({
    selected: 0,
    theme: 'default',
    transitionEffect: 'slide',
    toolbarSettings: {
      toolbarPosition: 'bottom',
      toolbarExtraButtons: [btnFinish, btnRest]
    }
  });
});
//# Existing Buildings Details & Proposed Buildings Details Total build up area - TS-703,711 by Balaram on 17/11/2017 #//
$(document).bind('input', function() {
   var Footprint_ExBld = $("#Footprint_ExBld").val(); //Existing Buildings Details
   var Carparkcapacity = $("#Carparkcapacity").val(); //Existing Buildings Details
   var PFootprint = $("#PFootprint").val(); //Proposed Buildings Details
   var PCarparkcapacity = $("#PCarparkcapacity").val(); //Proposed Buildings Details
   var Buildingtotalarea = $("#Buildingtotalarea").val(); //Existing Buildings Details
   var Ptotalarea = $("#Ptotalarea").val(); //Proposed Buildings Details
   if (parseInt(Footprint_ExBld) > parseInt(Buildingtotalarea)) {
      //alert("greater then  Total Mrks");
      $("#Footprint_ExBld").val("");
      $("#Total_PlotError").show();
   } else if (parseInt(Carparkcapacity) > parseInt(Footprint_ExBld)) {
      $("#Carparkcapacity").val("");
      $("#Car_Error").show();
   } else if (parseInt(PFootprint) > parseInt(Ptotalarea)) {
      $("#PFootprint").val("");
      $("#pTotal_PlotError").show();
   } else if (parseInt(PCarparkcapacity) > parseInt(PFootprint)) {
      $("#PCarparkcapacity").val("");
      $("#pCar_Error").show();
   } else {
      $("#Total_PlotError").hide();
      $("#Car_Error").hide();
      $("#pTotal_PlotError").hide();
      $("#pCar_Error").hide();
   }
});
//# Existing Buildings Details & Proposed Buildings Details Total build up area #//

// $(document).ready(function() {
//   $(".haserror .form-control").css({'background-color': ''});
//   $(this).on('keyup', function(e) {
//     // console.log(e.target.value);
//     if (e.target.value.length > 0) {
//       $('#' + e.target.id).css({'background-color': '#fff'});
//     }
//   });
// });
/*******************************
* ACCORDION WITH TOGGLE ICONS
*******************************/
  function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".more-less")
            .toggleClass('glyphicon glyphicon-chevron-down glyphicon glyphicon-chevron-right');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);
function submitpage() {
  window.location.href="successar.html";
}
//.................................. Date picker by balaram on 14/11/2017..................................//
$(function() {
  $('.date').datepicker({
    format: "dd/m/yyyy",
    startDate: "01/1/1900",
    orientation: "auto bottom",
    forceParse: false,
    autoclose: true,
    todayHighlight: true,
    toggleActive: true,
    todayBtn: true
  });
  //$(".date").datepicker("setDate", new Date());
  $(".date input").attr("required", "true");
  $("#srdate, #sdate").datepicker("setDate", new Date());
   /* Civil ID Expiry Date  */
  $("#applcntEpiryDate").datepicker({
    format: "dd/m/yyyy",
    startDate: '+0d',
    orientation: "auto bottom",
    forceParse: false,
    autoclose: true,
    todayHighlight: true,
    toggleActive: true,
    todayBtn: true,
  });
  /* Civil ID Expiry Date  */
  /* BPTS06 - StartDate and EndDate */
  $("#StartDate").datepicker({
    format: "dd/m/yyyy",
    orientation: "auto bottom",
    forceParse: false,
    autoclose: true,
    todayHighlight: true,
    toggleActive: true,
  }).on('changeDate', function(selected) {
    var startDate = new Date(selected.date.valueOf());
    $('#CompletionDate').datepicker('setStartDate', startDate);
    //alert(startDate);
  }).on('clearDate', function(selected) {
    $('#CompletionDate').datepicker('setStartDate', null);
  });
  $("#CompletionDate").datepicker({
    format: "dd/m/yyyy",
    orientation: "auto bottom",
    forceParse: false,
    autoclose: true,
    todayHighlight: true,
    toggleActive: true,
  }).on('changeDate', function(selected) {
    var endDate = new Date(selected.date.valueOf());
    $('#StartDate').datepicker('setEndDate', endDate);
    //alert(endDate);
  }).on('clearDate', function(selected) {
    $('#StartDate').datepicker('setEndDate', null);
  });
  /* BPTS06 - StartDate and EndDate */
  
  //BPTS07 - start Dig period from and Dig period to
  $("#DrillingPeriodFrom").datepicker({
    format: "dd/m/yyyy",
    orientation: "auto bottom",
    forceParse: false,
    autoclose: true,
    todayHighlight: true,
    toggleActive: true,
  }).on('changeDate', function(selected) {
    var DrillingPeriodFrom = new Date(selected.date.valueOf());
    $('#DrillingPeriodTo').datepicker('setStartDate', DrillingPeriodFrom);
    //alert(DrillingPeriodFrom);
  }).on('clearDate', function(selected) {
    $('#DrillingPeriodTo').datepicker('setStartDate', null);
  });
  $("#DrillingPeriodTo").datepicker({
    format: "dd/m/yyyy",
    orientation: "auto bottom",
    forceParse: false,
    autoclose: true,
    todayHighlight: true,
    toggleActive: true,
  }).on('changeDate', function(selected) {
    var DrillingPeriodTo = new Date(selected.date.valueOf());
    $('#DrillingPeriodFrom').datepicker('setEndDate', DrillingPeriodTo);
    //alert(DrillingPeriodTo);
  }).on('clearDate', function(selected) {
    $('#DrillingPeriodFrom').datepicker('setEndDate', null);
  });
  //BPTS07 -  end Dig period from and Dig period to
});
// .................................. Datepicker ..................................//
// .................................. footerHeight ..................................//
$(document).ready(function() {
  var docHeight = $(window).height();
  var footerHeight = $('#footer').height();
  var footerTop = $('#footer').position().top + footerHeight;
  //alert(docHeight);
  if (footerTop < docHeight) {
    $('#footer').css('margin-top', 10 + (docHeight - footerTop) + 'px');
  }
});
// .................................. footerHeight ..................................//

// Request_Type - BPTS01 -select box for building details header change - Start
$("#Request_ser").change(function() {
  var Requestser = $("#Request_ser").val();
  if (Requestser == '164') {
      $('#buildheader').text('بيانات المبنى المراد إضافته');
    } else if(Requestser == "165") {
      $('#buildheader').text('بيانات المبنى المراد تعليته');
    } else {
      $('#buildheader').text('بيانات المبنى القائم حاليا');
    } 
});
// Request_Type - BPTS01 -select box for building details header change - End
