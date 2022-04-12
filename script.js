var Project3 = (function () {

        var searchurl = "http://ec2-3-143-211-101.us-east-2.compute.amazonaws.com/CS325_Project3/search?";
        var listurl = "http://ec2-3-143-211-101.us-east-2.compute.amazonaws.com/CS325_Project3/list?";

        var jsonsubjects, jsonscheduleTypes = null;

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
                onSubmit: function () {
                        alert("this is on submit");
                },


                //reset the page
                reset: function () {
                        let confirmAction = confirm("Would you like to reset your selections?");
                        if (confirmAction) {
                                window.location.reload();
                        } else {
                                alert("Reset canceled");
                        }

                },

        }


})();