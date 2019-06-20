
/*var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['VK', 'Watsup', 'Odnoklasniki', 'Facebook'],
        datasets: [{
            label: 'Number of accounts',
            backgroundColor: ['rgb(0,169,255)', 'rgb(0,245,0)', 'rgb(255,172,0)', 'rgb(0,62,253)'],
            borderColor: 'rgb(255, 99, 132)',
            data: [1110022, 1234414, 603555, 934558]
        }]
    },

    // Configuration options go here
    options: {}
});*/



var now = new Date();
console.log(now);
let d;
switch(now.getMonth()){
    case 0: d = "Jan";
        break;
    case 1: d = "Feb";
        break;
    case 2: d = "Mar";
        break;
    case 3: d = "Apr";
        break;
    case 4: d = "May";
        break;
    case 5: d = "Jun";
        break;
    case 6: d = "Jul";
        break;
    case 7: d = "Avg";
        break;
    case 8: d = "Sep";
        break;
    case 9: d = "Oct";
        break;
    case 10: d = "Nov";
        break;
    case 11: d = "Dec";
        break;
}

let days = now.getDate() + " " + d;

console.log(days);
let dd = now.getDate();
a = 1;
let md;
let dates = [];
for (i = 0; i<=16;i++){
    
    md = dd - a;
    a++;
   // console.log(md + " " + d);
    dates.push(md);   
}
console.log(dates);
let countAc = [];

for(let i = 0;i < 10; i++){
function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;
  }

countAc.push(getRandomInt(0,21));


console.log(countAc);
}



var time = document.querySelector("#time");



let cond = document.querySelector("#condition");
let pieCond = new Chart(cond,{
    type:"pie",
    data:{
    labels:["work", "blocked"],
    datasets: [{
        label: 'Number of accounts',
        backgroundColor:["#16E116","#DD4223"],
        borderColor:["#16E116","#DD4223",],
        data:[10,3],
    }],
},
    option:{}
});



$(document).ready(function(){
  //  $.ajax({
  //      method:"GET",
    //    url:location.origin + "/echo",
    //    dataType: "json",
   ///     success: retVal,
    //    error: function(){$(".post").text("Error");}
   // });

})

let counter = 0;

    $.ajax({
        method:"POST",
        url:location.origin + "/echo1",
        dataType: "json",
        success: test,
        error: function(){
            $(".post").text("Error"); 
        }
    });
let val;

    function test(wVal){
        //$(".post2").text(wVal);
        //let arr1 = [wVal[0],wVal[1],wVal[2],wVal[3],wVal[4],wVal[5],wVal[6],wVal[7],wVal[8],wVal[9]];
            //console.log(arr1);

            for(let i = 0; i<=wVal.length; i++){

                if(wVal[i] == 5){

                    counter++;

                }
            }

            console.log(counter);

        var myChart = document.querySelector("#myChart");
        var chart = new Chart(myChart, {

            type: 'line',


            data: {
                labels: [dates[9],dates[8],dates[7],dates[6],dates[5],dates[4],dates[3],dates[2],dates[1],dates[0]],
                datasets: [{
                    label: 'Number of accounts',
                    //backgroundColor: 'rgb(0,169,255)',
                    borderColor: 'rgb(0, 255, 0)',
                    data: [wVal[0],wVal[1],wVal[2],wVal[3],wVal[4],wVal[5],wVal[6],wVal[7],wVal[8],wVal[9]],
                },
                {
                    label: 'Level',
                    //backgroundColor: 'rgb(0,169,255)',
                    borderColor: 'rgb(255, 0, 0)',
                    data: [5,5,5,5,5,5,5,5,5,5],
                }],
            },

            options: {}
        });

        var chart1 = new Chart(time, {

            type: 'line',

            data: {
                labels: [dates[9],dates[8],dates[7],dates[6],dates[5],dates[4],dates[3],dates[2],dates[1],dates[0]],
                datasets: [{
                    label: 'Number of accounts',
                    //backgroundColor: 'rgb(0,169,255)',
                    borderColor: 'rgb(0,152,255)',
                    data: [countAc[0],countAc[1],countAc[2],countAc[3],countAc[4],countAc[5],countAc[6],countAc[7],countAc[8],countAc[9]],
                },
                {
                    label: 'Level',
                    //backgroundColor: 'rgb(0,169,255)',
                    borderColor: 'rgb(255, 0, 0)',
                    data: [5,5,5,5,5,5,5,5,5,5],
                }]
            },

            // Configuration options go here
            options: {}
        });
    }




/*$.get(
   "https://samples.openweathermap.org/data/2.5/forecast/daily?",
   {
       "id": "524901",
       "appid":"b1b15e88fa797225412429c1c50c122a1"
   },
   {
       function (data) {
           console.log(data);
        }
   }
)*/ 


function hideShowWU(){
    $(".whatsup").hide();
    


    $("#whatsup").click(function(){
        $(".whatsup").show();
        $("#whatsup").click(function(){
            hideShowWU();
        });
    });
}

function hideShowVK(){
    $(".vk").hide();

    $("#vk").click(function(){
        $(".vk").show();
        $("#vk").click(function(){
            hideShowVK();
        });
    });
}


hideShowWU();

hideShowVK();





var inp_info = document.querySelector("#name");
    //selected = document.querySelectorAll("#sel");
    var sel = document.getElementById("sel");

    $(".t_stat").hide();
    $("#d_stat").hide();
    $('.del_stat').hide();
    $(".main_stat").hide();



$("#btn").click(function(){
    let dataObj = {};

   // console.log(inp_info.value);
    dataObj.action = sel.value;
    dataObj.channel = inp_info.value;

   // console.log(' ===== >>>> ', dataObj)
   // console.log(JSON.stringify(dataObj));
    //let headers = new Headers();
    //headers.append('Access-Control-Allow-Origin', '*'),
    //headers.append('Content-Type', 'application/json'),



    if (sel.value === "show"){

      let dataObject = {
        "channel": inp_info.value
      }

      console.log(JSON.stringify(dataObject,dataObj));


      let count_poll = 0;
      let count_link = 0;
      let count_simple = 0;

      let arr_dates = 0;

      let res = {};

      let res_d = [];

      let arr_date = [];

      let count_del = 0;
      let count_no_del = 0;

      let counter_mes = 0;

            $.ajax({
                method:"POST",
                //headers: headers,
                dataType: "json",
                url: 'http://10.17.22.100:8000/get_messages',
                data: JSON.stringify(dataObj,dataObject),
                beforeSend:function(){

                       $('#result').prepend('<img id="theImg" src="static/5.gif" />');

                },
                success: filter_poll,
                error:function(){
                    $("#result").html("Error");
                }
            })


            function filter_poll(value){

                $('#theImg').hide();

                 console.log(value);

                  //  console.log(value[4]['channel_title']);

                    for (let i = 0; i < value.length; i++){

                        if(value[i]['poll'] != null){

                            count_poll++;

                         }

                        if(value[i]['entities']['links'] != null){

                            count_link++;

                        }

                        if(value[i]['entities']['links'] == null && value[i]['poll'] == null){

                            count_simple++;

                        }

                      arr_date[i] = value[i]["date"].slice(0,10);


                        if(value[i]['deleted'] == true){

                            count_del++;

                        }

                        if(value[i]['deleted'] == false){

                            count_no_del++;

                        }

                        counter_mes++;


                    }


        function fn (arg) {
            var result = [];
            var obj = {}

            for(var i = 0; i < arg.length; i++) {
                obj[arg[i]] = arg[i];
            }

            for(var i in obj) {
               result.push(obj[i])
            }

            return result;
            }


            arr_dates = (fn(arr_date));



            value.forEach(function (elem) {
               let date = elem.date.split(' ')[0];

               if (res[date]) {
                   res[date] += 1;
               }else{
                   res[date] = 1;
               }

            });


            console.log(Object.values(res));

            console.log(res.length);
            console.log(Object.keys(res).length);


                $(".t_stat").show();
                $("#d_stat").show();
                $(".del_stat").show();
                $(".main_stat").show();

                console.log(count_poll);
                console.log(count_link);
                console.log(count_simple);


                retVal();

                // let date_start = document.querySelector("date_start"),
                //     date_end = document.querySelector("date_end");
                // $("#timeBtn").click(function(){
                //     if(date_start == null && date_end == null){
                //         $('.date_form').append('<p>Input the date!<p>');
                //         $('.date_form p').css('color','red');
                //     }
                // });

                statByDay();
                statDelMes();
                statistic();

            function retVal(){


                        let pieDig = document.querySelector("#net");

                        let pieChart = new Chart(pieDig,{

                            type:"pie",
                            data:{
                            labels:["Messages with polls", "Messages with links", "Simple messages"],
                            datasets: [{
                                label: 'Messages',
                                backgroundColor:["#45A5F0","#4400AD","#074CB4"],
                                borderColor:["#45A5F0","#4400AD","#074CB4"],
                                data:[count_poll,count_link,count_simple],
                            }],
                        },
                            option:{}
                    });
                }


             }

             function statistic(value){

                $('#count').text(counter_mes);

                let last_date = arr_dates[arr_dates.length - 1];

                let m;

                switch(last_date[5]+last_date[6]){

                    case '01': m = "January";
                        break;
                    case '02': m = "Feb";
                        break;
                    case '03': m = "Mar";
                        break;
                    case '04': m = "Apr";
                        break;
                    case '05': m = "May";
                        break;
                    case '06': m = "Jun";
                        break;
                    case '07': m = "Jul";
                        break;
                    case '08': m = "Avg";
                        break;
                    case '09': m = "Sep";
                        break;
                    case '10': m = "Oct";
                        break;
                    case '11': m = "Nov";
                        break;
                    case '12': m = "Dec";
                        break;
                }


            if(last_date[8] == 0){

                $('#last_date').text(last_date[9] + " " + m + " " + (last_date[0]+last_date[1]+last_date[2]+last_date[3]));

            }else{

                $('#last_date').text(last_date[8] + last_date[9] + " " + m + " " + (last_date[0]+last_date[1]+last_date[2]+last_date[3]));

            }


                if(now.getDate() < 10 ){
                    var curr_date = "0" + now.getDate();
                }
                else{
                    var curr_date = now.getDate();
                }

                if(now.getMonth() + 1 < 10){
                    var curr_month = "0" + (now.getMonth() + 1);
                }else{
                    var curr_month = now.getMonth() + 1;
                }

                var curr_year = now.getFullYear();


                let now_date = curr_year + "-" + curr_month + "-" + curr_date;


                var daysLag = Date.parse(now_date) - Date.parse(last_date);
                let days_ost = Math.floor((daysLag/1000/60/60/24));

                $('#days').text(days_ost);

                let first_date = arr_dates[0];

                let m1;

                switch(first_date[5]+first_date[6]){

                    case '01': m1 = "January";
                        break;
                    case '02': m1 = "Feb";
                        break;
                    case '03': m1 = "Mar";
                        break;
                    case '04': m1 = "Apr";
                        break;
                    case '05': m1 = "May";
                        break;
                    case '06': m1 = "Jun";
                        break;
                    case '07': m1 = "Jul";
                        break;
                    case '08': m1 = "Avg";
                        break;
                    case '09': m1 = "Sep";
                        break;
                    case '10': m1 = "Oct";
                        break;
                    case '11': m1 = "Nov";
                        break;
                    case '12': m1 = "Dec";
                        break;
                }


                if(first_date[8] == 0){

                    $('#first_date').text(first_date[9] + " " + m + " " + (first_date[0]+first_date[1]+first_date[2]+first_date[3]));

                }else{

                    $('#first_date').text(first_date[8] + first_date[9] + " " + m1 + " " + (first_date[0]+first_date[1]+first_date[2]+first_date[3]));

                }

             }


             function statByDay(){

                 var myChart = document.querySelector("#statByDay");
                    var chart = new Chart(myChart, {

                        type: 'line',


                        data: {
                            labels: arr_dates,
                            datasets: [{
                                label: 'Number of messages',
                                backgroundColor: 'rgb(38, 164, 232, 0.2)',
                                borderColor: '#26A4E8',
                                data: Object.values(res),
                            }]
                        },

                        options: {
                           scales: {
                                 yAxes: [{
                                        display: true,
                                        ticks: {
                                                suggestedMin: 0,
                                                }
                                        }]
                                    }

                                }
                    });

             }

             function statDelMes(){

                let pieDig = document.querySelector("#stat_del");

                        let pieChart = new Chart(pieDig,{

                            type:"pie",
                            data:{
                            labels:["Messages", "Deleted messages"],
                            datasets: [{
                                label: 'Messages',
                                backgroundColor:["#45A5F0","#4400AD"],
                                borderColor:["#45A5F0","#4400AD"],
                                data:[count_no_del,count_del],
                            }],
                        },
                            option:{


                            }
                    });

             }

    }else{



        $.ajax({
            method:"POST",
            //headers: headers,
            dataType: "json",
            url: 'http://10.17.22.100:8000/channels',
            data: JSON.stringify(dataObj),
            success: function(value){
                $('#result').html(JSON.stringify(value))
                console.log(value)
            },
            error:function(){
                $("#result").html("Error");
            }
        })
    }



});



// let dataObject = {"channel": input from field}





//$(".change").click(function(){
//    $(this).hide();
//})

//$(".change").css("backgroundColor","red");




