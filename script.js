var Project3 = (function () {

        var searchurl = "http://ec2-3-143-211-101.us-east-2.compute.amazonaws.com/CS325_Project3/search?";
        var listurl = "http://ec2-3-143-211-101.us-east-2.compute.amazonaws.com/CS325_Project3/list?";

        var subjects, scheduleTypes, InstructionalMethods, instructors, attriubuteTypes = null;

        return {
                start: function () {
                        var that = this;

                        // get all the data from api to populate the forms
                        $.when(
                                $.ajax({

                                }),

                                $.ajax({

                                }),

                                $.ajax({

                                }),

                                $.ajax({

                                }),

                                $.ajax({

                                }),

                        ).then(that.init(), that.fail);

                },

                /*Initialize the subjects, schedule types mthods and insturctor lists*/
                init: function () {

                },

        }


})();