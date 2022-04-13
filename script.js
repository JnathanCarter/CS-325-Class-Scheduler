var Project3 = (function () {

        var searchurl = "http://ec2-3-143-211-101.us-east-2.compute.amazonaws.com/CS325_Project3/search?";
        var listurl = "http://ec2-3-143-211-101.us-east-2.compute.amazonaws.com/CS325_Project3/list?";

        var jsonsubjects, jsonscheduleTypes = null;
        var userinput = {
                "subjectid": null,
                "num": null,
                "title": null,
                "scheduletypid": null,
                "start": null,
                "end": null,
                "days": [],
                "beginmm": null,
                "beginhh": null,
                "endhh": null,
                "endmm": null,
        };


        return {
                start: function () {
                        var that = this;

                        // get all the data from api to populate the forms

                        $.ajax({
                                url: 'http://ec2-3-143-211-101.us-east-2.compute.amazonaws.com/CS325_Project3/list?type=subject',
                                method: 'GET',
                                dataType: 'json',
                                success: function (response) {
                                        jsonsubjects = response;
                                        console.log("jsonsubjects---" + jsonsubjects);
                                        that.initSubjects();

                                }

                        })
                        $.ajax({
                                url: 'http://ec2-3-143-211-101.us-east-2.compute.amazonaws.com/CS325_Project3/list?type=scheduletype',
                                method: 'GET',
                                dataType: 'json',
                                success: function (response) {
                                        jsonscheduleTypes = response;
                                        console.log("scheduletypes---" + jsonscheduleTypes);
                                        that.initSchedule();

                                }
                        })

                        //add number selects to hours and minutes
                        $("#begin_hh").append("<option value = default> ");
                        for (var i = 1; i < 13; i++) {
                                if (i < 10) {

                                        $("#begin_hh").append("<option value = 0" + i + ">" + i);
                                }
                                else {
                                        $("#begin_hh").append("<option value = " + i + ">" + i);

                                }
                        }
                        $("#begin_mm").append("<option value = default> ");
                        for (var i = 0; i < 60; i += 15) {
                                if (i < 10) {

                                        $("#begin_mm").append("<option value = 0" + i + ">" + i);
                                }
                                else {
                                        $("#begin_mm").append("<option value = " + i + ">" + i);

                                }
                        }

                        $("#end_hh").append("<option value = default> ");
                        for (var i = 1; i < 13; i++) {
                                if (i < 10) {

                                        $("#end_hh").append("<option value = 0" + i + ">" + i);
                                }
                                else {
                                        $("#end_hh").append("<option value = " + i + ">" + i);

                                }
                        }
                        $("#end_mm").append("<option value = default> ");
                        for (var i = 0; i < 60; i += 15) {
                                if (i < 10) {

                                        $("#end_mm").append("<option value = 0" + i + ">" + i);
                                }
                                else {
                                        $("#end_mm").append("<option value = " + i + ">" + i);

                                }
                        }
                },


                /*Initialize the jsonsubjects, schedule types mthods and insturctor lists*/
                initSubjects: function () {
                        for (var i = 0; i < jsonsubjects[0].length; i++) {

                                $("#subj_id").append("<option value=" + jsonsubjects[0][i] + ">" + jsonsubjects[1][i]);
                        }
                },
                initSchedule: function () {
                        for (var i = 0; i < jsonscheduleTypes[0].length; i++) {

                                $("#scheduletypeid").append("<option value=" + jsonscheduleTypes[0][i] + ">" + jsonscheduleTypes[1][i]);
                        }
                },


                fail: function () {

                },

                //output results
                outputResults: function () {

                },

                //get info from the user and get info from api
                submitForm: function () {
                        userinput.subjectid = $("#subj_id").val().trim();
                        userinput.num = $("#number").val().trim();
                        userinput.title = $("#title").val().trim();

                        userinput.scheduletypid = $("#scheduletypeid").val().trim();


                        userinput.beginmm = $("#begin_mm").val().trim();
                        userinput.beginhh = $("#begin_hh").val().trim();
                        //convert to 24 hour time
                        if ($("#begin_ap").val().trim() == "pm") {
                                userinput.beginhh = Number(userinput.beginhh) + Number(12);
                        }


                        userinput.endmm = $("#end_mm").val().trim();
                        userinput.endhh = $("#end_hh").val().trim();
                        //convert to 24 hour time
                        if ($("#end_ap").val().trim() == "pm") {
                                userinput.endhh = Number(userinput.endhh) + Number(12);
                        }

                        //make start and end string
                        userinput.start = userinput.beginhh + ":" + userinput.beginmm + ":00";
                        userinput.end = userinput.endhh + ":" + userinput.endmm + ":00";

                        //days
                        var daysselected = false;
                        var days = [];
                        if ($("#sel_mwf")[0].checked) {
                                days.push("MWF");
                                if (!daysselected) {
                                        daysselected = true;
                                }
                        }
                        if ($("#sel_tr")[0].checked) {
                                days.push("TR");
                                if (!daysselected) {
                                        daysselected = true;
                                }
                        }
                        if ($("#sel_any")[0].checked) {
                                days = ["ANY"];
                                if (!daysselected) {
                                        daysselected = true;
                                }
                        }


                        if (!daysselected) {
                                days.push("ANY");
                        }

                        userinput.days = days;

                        //diagnostic print
                        for (const key in userinput) {

                                console.log(`${key}: ${userinput[key]}`);
                        }

                        //validate
                        if (userinput.subjectid != null) {
                                this.sendRequest();
                        }
                        else {
                                alert("You must select a subject");
                        }

                },

                sendRequest: function () {
                        console.log("requesting sent");

                },
                //reset the page
                reset: function () {
                        let confirmAction = confirm("Would you like to reset your selections?");
                        if (confirmAction) {
                                window.location.reload();
                        }

                },

        }


})();