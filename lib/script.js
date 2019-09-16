'use strict';

/**
 * This is the logic for the application.
 * @param {org.studentrecord.transactions.secondSemesterReportCard} secondSemesterReportCard
 * @transaction
 */
function secondSemesterReportCard(reportCard){

    var factory = getFactory();
    var NS =  'org.studentrecord.record';
    var NS2 = 'org.studentrecord.reportcard';
    var flag0 = 0;
    var percentage = 0;
    var tempRecordForExtraction = {};



    return getAssetRegistry('org.studentrecord.record.Record').then(function(tempRecordRegistry){
        return tempRecordRegistry.get(reportCard.studentDetails.registrationNumber);
    }).then(function(tempRecord){
        tempRecordForExtraction = tempRecord;
        if(tempRecord.studentDetails.enrolledUniversity == "University A" && reportCard.universitySecret == "12345" || tempRecord.studentDetails.enrolledUniversity == "University B" && reportCard.universitySecret == "54321"){
            return tempRecord.secondSemesterReportId;
        }else{
            throw new Error('This University is not allowed to modify the record '+tempRecord.registrationId +' .');
        }
    }).then(function(tempArray){
        if(tempArray!= null && tempArray.length>0){
            var tempArrayElement = tempArray[tempArray.length-1];
            return getAssetRegistry('org.studentrecord.reportcard.SecondSemesterReportCard').then(function(tempReportCardRegistry){
                return tempReportCardRegistry.get(tempArrayElement);
            }).then(function(tempReportCard){
                if(tempReportCard.result === "Fail"){

                    var ssReportCard = factory.newResource(NS2, 'SecondSemesterReportCard', reportCard.reportId );
                    var tempMarks = factory.newConcept(NS2, 'SecondSemesterMarks');


                    if(tempReportCard.secondSemesterMarks.Engineering_Mathematics_II_Theory_Assesment<8){
                        tempMarks.Engineering_Mathematics_II_Theory_Assesment = reportCard.SecondSemesterMarks.Engineering_Mathematics_II_Theory_Assesment;                       
                    }else{
                        tempMarks.Engineering_Mathematics_II_Theory_Assesment = tempReportCard.secondSemesterMarks.Engineering_Mathematics_II_Theory_Assesment;
                    }
                    if(tempReportCard.secondSemesterMarks.Engineering_Mathematics_II_Theory_Final<32){
                        tempMarks.Engineering_Mathematics_II_Theory_Final = reportCard.SecondSemesterMarks.Engineering_Mathematics_II_Theory_Final;
                        
                    }else{
                        tempMarks.Engineering_Mathematics_II_Theory_Final = tempReportCard.secondSemesterMarks.Engineering_Mathematics_II_Theory_Final;
                    }
                    if(tempReportCard.secondSemesterMarks.Engineering_Drawing_II_Practical_Assesment<24){
                        tempMarks.Engineering_Drawing_II_Practical_Assesment = reportCard.SecondSemesterMarks.Engineering_Drawing_II_Practical_Assesment;
                        
                    }else{
                        tempMarks.Engineering_Drawing_II_Practical_Assesment = tempReportCard.secondSemesterMarks.Engineering_Drawing_II_Practical_Assesment;
                    }
                    if(tempReportCard.secondSemesterMarks.Engineering_Drawing_II_Practical_Final<16){
                        tempMarks.Engineering_Drawing_II_Practical_Final = reportCard.SecondSemesterMarks.Engineering_Drawing_II_Practical_Final;
                        
                    }else{
                        tempMarks.Engineering_Drawing_II_Practical_Final = tempReportCard.secondSemesterMarks.Engineering_Drawing_II_Practical_Final;
                    }
                    if(tempReportCard.secondSemesterMarks.Basic_Electronics_Engineering_Theory_Assesment<8){
                        tempMarks.Basic_Electronics_Engineering_Theory_Assesment = reportCard.SecondSemesterMarks.Basic_Electronics_Engineering_Theory_Assesment;
                        
                    }else{
                        tempMarks.Basic_Electronics_Engineering_Theory_Assesment = tempReportCard.secondSemesterMarks.Basic_Electronics_Engineering_Theory_Assesment ;
                    }
                    if(tempReportCard.secondSemesterMarks.Basic_Electronics_Engineering_Theory_Final<32){
                        tempMarks.Basic_Electronics_Engineering_Theory_Final =reportCard.SecondSemesterMarks.Basic_Electronics_Engineering_Theory_Final;
                        
                    }else{
                        tempMarks.Basic_Electronics_Engineering_Theory_Final =tempReportCard.secondSemesterMarks.Basic_Electronics_Engineering_Theory_Final;
                    }
                    if(tempReportCard.secondSemesterMarks.Basic_Electronics_Engineering_Practical_Assesment<10){
                        tempMarks.Basic_Electronics_Engineering_Practical_Assesment =reportCard.SecondSemesterMarks.Basic_Electronics_Engineering_Practical_Assesment;                        
                    }else{
                        tempMarks.Basic_Electronics_Engineering_Practical_Assesment =tempReportCard.secondSemesterMarks.Basic_Electronics_Engineering_Practical_Assesment;
                    }
                    if(tempReportCard.secondSemesterMarks.Engineering_Chemistry_Theory_Assesment<8){
                        tempMarks.Engineering_Chemistry_Theory_Assesment = reportCard.SecondSemesterMarks.Engineering_Chemistry_Theory_Assesment;
                        
                    }else{
                        tempMarks.Engineering_Chemistry_Theory_Assesment = tempReportCard.secondSemesterMarks.Engineering_Chemistry_Theory_Assesment;
                    }
                    if(tempReportCard.secondSemesterMarks.Engineering_Chemistry_Theory_Final<32){
                        tempMarks.Engineering_Chemistry_Theory_Final = reportCard.SecondSemesterMarks.Engineering_Chemistry_Theory_Final;
                        
                    }else{
                        tempMarks.Engineering_Chemistry_Theory_Final =tempReportCard.secondSemesterMarks.Engineering_Chemistry_Theory_Final;
                    }
                    if(tempReportCard.secondSemesterMarks.Engineering_Chemistry_Practical_Assesment<8){
                        tempMarks.Engineering_Chemistry_Practical_Assesment = reportCard.SecondSemesterMarks.Engineering_Chemistry_Practical_Assesment;
                        
                    }else{
                        tempMarks.Engineering_Chemistry_Practical_Assesment = tempReportCard.secondSemesterMarks.Engineering_Chemistry_Practical_Assesment;
                    }
                    if(tempReportCard.secondSemesterMarks.Engineering_Chemistry_Practical_Final<12){
                        tempMarks.Engineering_Chemistry_Practical_Final = reportCard.SecondSemesterMarks.Engineering_Chemistry_Practical_Final;
                        
                    }else{
                        tempMarks.Engineering_Chemistry_Practical_Final = tempReportCard.secondSemesterMarks.Engineering_Chemistry_Practical_Final;
                    }
                    if(tempReportCard.secondSemesterMarks.Thermodynamics_And_Heat_Transfer_Theory_Assesment<8){
                        tempMarks.Thermodynamics_And_Heat_Transfer_Theory_Assesment = reportCard.SecondSemesterMarks.Thermodynamics_And_Heat_Transfer_Theory_Assesment;
                        
                    }else{
                        tempMarks.Thermodynamics_And_Heat_Transfer_Theory_Assesment = tempReportCard.secondSemesterMarks.Thermodynamics_And_Heat_Transfer_Theory_Assesment;
                    }
                    if(tempReportCard.secondSemesterMarks.Thermodynamics_And_Heat_Transfer_Theory_Final<32){
                        tempMarks.Thermodynamics_And_Heat_Transfer_Theory_Final =reportCard.SecondSemesterMarks.Thermodynamics_And_Heat_Transfer_Theory_Final;
                        
                    }else{
                        tempMarks.Thermodynamics_And_Heat_Transfer_Theory_Final =tempReportCard.secondSemesterMarks.Thermodynamics_And_Heat_Transfer_Theory_Final;
                    }
                    if(tempReportCard.secondSemesterMarks.Thermodynamics_And_Heat_Transfer_Practical_Assesment<10){
                        tempMarks.Thermodynamics_And_Heat_Transfer_Practical_Assesment = reportCard.SecondSemesterMarks.Thermodynamics_And_Heat_Transfer_Practical_Assesment;
                        
                    }else{
                        tempMarks.Thermodynamics_And_Heat_Transfer_Practical_Assesment = tempReportCard.secondSemesterMarks.Thermodynamics_And_Heat_Transfer_Practical_Assesment;
                    }
                    if(tempReportCard.secondSemesterMarks.Workshop_Technology_Theory_Assesment<4){
                        tempMarks.Workshop_Technology_Theory_Assesment = reportCard.SecondSemesterMarks.Workshop_Technology_Theory_Assesment;
                        
                    }else{
                        tempMarks.Workshop_Technology_Theory_Assesment = tempReportCard.secondSemesterMarks.Workshop_Technology_Theory_Assesment;
                    }
                    if(tempReportCard.secondSemesterMarks.Workshop_Technology_Practical_Assesment<16){
                        tempMarks.Workshop_Technology_Practical_Assesment = reportCard.SecondSemesterMarks.Workshop_Technology_Practical_Assesment;
                        
                    }else{
                        tempMarks.Workshop_Technology_Practical_Assesment = tempReportCard.secondSemesterMarks.Workshop_Technology_Practical_Assesment;
                    }
                    ssReportCard.secondSemesterMarks = tempMarks;



                    if(tempMarks.Engineering_Mathematics_II_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Engineering_Mathematics_II_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Engineering_Drawing_II_Practical_Assesment<24){flag0 = 1;}
                    if(tempMarks.Engineering_Drawing_II_Practical_Final<16){flag0 = 1;}
                    if(tempMarks.Basic_Electronics_Engineering_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Basic_Electronics_Engineering_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Basic_Electronics_Engineering_Practical_Assesment<10){flag0 = 1;}
                    if(tempMarks.Engineering_Chemistry_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Engineering_Chemistry_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Engineering_Chemistry_Practical_Assesment<8){flag0 = 1;}
                    if(tempMarks.Engineering_Chemistry_Practical_Final<12){flag0 = 1;}
                    if(tempMarks.Thermodynamics_And_Heat_Transfer_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Thermodynamics_And_Heat_Transfer_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Thermodynamics_And_Heat_Transfer_Practical_Assesment<10){flag0 = 1;}
                    if(tempMarks.Workshop_Technology_Practical_Assesment<16){flag0 = 1;}
                    if(tempMarks.Workshop_Technology_Theory_Assesment<4){flag0 = 1;}
        
                    if(flag0 == 1){
                        ssReportCard.result = "Fail";
                    }else{
                        ssReportCard.result = "Pass";
                        percentage = 100*(
                            tempMarks.Engineering_Mathematics_II_Theory_Assesment +
                            tempMarks.Engineering_Mathematics_II_Theory_Final +
                            tempMarks.Engineering_Drawing_II_Practical_Assesment +
                            tempMarks.Engineering_Drawing_II_Practical_Final +
                            tempMarks.Basic_Electronics_Engineering_Theory_Assesment +
                            tempMarks.Basic_Electronics_Engineering_Theory_Final +
                            tempMarks.Basic_Electronics_Engineering_Practical_Assesment +
                            tempMarks.Engineering_Chemistry_Theory_Assesment +
                            tempMarks.Engineering_Chemistry_Theory_Final +
                            tempMarks.Engineering_Chemistry_Practical_Assesment +
                            tempMarks.Engineering_Chemistry_Practical_Final +
                            tempMarks.Thermodynamics_And_Heat_Transfer_Theory_Assesment +
                            tempMarks.Thermodynamics_And_Heat_Transfer_Theory_Final +
                            tempMarks.Thermodynamics_And_Heat_Transfer_Practical_Assesment +
                            tempMarks.Workshop_Technology_Practical_Assesment +
                            tempMarks.Workshop_Technology_Theory_Assesment  
                        )/650;
                    }

                    //
                    var tempDetails = factory.newConcept(NS2, 'StudentDetails');
                    if(tempRecordForExtraction.studentDetails.firstName == reportCard.studentDetails.firstName && tempRecordForExtraction.studentDetails.lastName == reportCard.studentDetails.lastName && tempRecordForExtraction.studentDetails.enrolledCollege == reportCard.studentDetails.enrolledCollege){
                        tempDetails.registrationNumber = reportCard.studentDetails.registrationNumber;
                        tempDetails.firstName = reportCard.studentDetails.firstName;
                        tempDetails.lastName = reportCard.studentDetails.lastName;
                        tempDetails.faculty = "BCT";
                        tempDetails.enrolledCollege = reportCard.studentDetails.enrolledCollege;

                        ssReportCard.studentDetails = tempDetails;
                    }else{
                        throw new Error('Student details does not match to any record. Please provide correct details.');
                    }

                    //
                    var tempRelationship = factory.newRelationship(NS,'Record',reportCard.studentDetails.registrationNumber);
                    ssReportCard.record = tempRelationship;

                    return ssReportCard;
                }else{
                    throw new Error('Student '+ reportCard.studentDetails.registrationNumber + ' already passed second semester.');
                }
            });
        }else{
            var ssReportCard = factory.newResource(NS2, 'SecondSemesterReportCard', reportCard.reportId );
            var tempMarks = factory.newConcept(NS2, 'SecondSemesterMarks');

            
            tempMarks.Engineering_Mathematics_II_Theory_Assesment = reportCard.SecondSemesterMarks.Engineering_Mathematics_II_Theory_Assesment;
            tempMarks.Engineering_Mathematics_II_Theory_Final = reportCard.SecondSemesterMarks.Engineering_Mathematics_II_Theory_Final;
            tempMarks.Engineering_Drawing_II_Practical_Assesment = reportCard.SecondSemesterMarks.Engineering_Drawing_II_Practical_Assesment;
            tempMarks.Engineering_Drawing_II_Practical_Final = reportCard.SecondSemesterMarks.Engineering_Drawing_II_Practical_Final;
            tempMarks.Basic_Electronics_Engineering_Theory_Assesment = reportCard.SecondSemesterMarks.Basic_Electronics_Engineering_Theory_Assesment ;
            tempMarks.Basic_Electronics_Engineering_Theory_Final =reportCard.SecondSemesterMarks.Basic_Electronics_Engineering_Theory_Final;
            tempMarks.Basic_Electronics_Engineering_Practical_Assesment = reportCard.SecondSemesterMarks.Basic_Electronics_Engineering_Practical_Assesment;
            tempMarks.Engineering_Chemistry_Theory_Assesment = reportCard.SecondSemesterMarks.Engineering_Chemistry_Theory_Assesment;
            tempMarks.Engineering_Chemistry_Theory_Final =reportCard.SecondSemesterMarks.Engineering_Chemistry_Theory_Final;
            tempMarks.Engineering_Chemistry_Practical_Assesment = reportCard.SecondSemesterMarks.Engineering_Chemistry_Practical_Assesment;
            tempMarks.Engineering_Chemistry_Practical_Final = reportCard.SecondSemesterMarks.Engineering_Chemistry_Practical_Final;
            tempMarks.Thermodynamics_And_Heat_Transfer_Theory_Assesment = reportCard.SecondSemesterMarks.Thermodynamics_And_Heat_Transfer_Theory_Assesment;
            tempMarks.Thermodynamics_And_Heat_Transfer_Theory_Final =reportCard.SecondSemesterMarks.Thermodynamics_And_Heat_Transfer_Theory_Final;
            tempMarks.Thermodynamics_And_Heat_Transfer_Practical_Assesment = reportCard.SecondSemesterMarks.Thermodynamics_And_Heat_Transfer_Practical_Assesment;
            tempMarks.Workshop_Technology_Theory_Assesment = reportCard.SecondSemesterMarks.Workshop_Technology_Theory_Assesment;
            tempMarks.Workshop_Technology_Practical_Assesment = reportCard.SecondSemesterMarks.Workshop_Technology_Practical_Assesment;

            if(tempMarks.Engineering_Mathematics_II_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Engineering_Mathematics_II_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Engineering_Drawing_II_Practical_Assesment<24){flag0 = 1;}
            if(tempMarks.Engineering_Drawing_II_Practical_Final<16){flag0 = 1;}
            if(tempMarks.Basic_Electronics_Engineering_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Basic_Electronics_Engineering_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Basic_Electronics_Engineering_Practical_Assesment<10){flag0 = 1;}
            if(tempMarks.Engineering_Chemistry_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Engineering_Chemistry_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Engineering_Chemistry_Practical_Assesment<8){flag0 = 1;}
            if(tempMarks.Engineering_Chemistry_Practical_Final<12){flag0 = 1;}
            if(tempMarks.Thermodynamics_And_Heat_Transfer_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Thermodynamics_And_Heat_Transfer_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Thermodynamics_And_Heat_Transfer_Practical_Assesment<10){flag0 = 1;}
            if(tempMarks.Workshop_Technology_Practical_Assesment<16){flag0 = 1;}
            if(tempMarks.Workshop_Technology_Theory_Assesment<4){flag0 = 1;}




            if(flag0 == 1){
                ssReportCard.result = "Fail";
            }else{
                ssReportCard.result = "Pass";
                percentage = 100*(
                    tempMarks.Engineering_Mathematics_II_Theory_Assesment +
                    tempMarks.Engineering_Mathematics_II_Theory_Final +
                    tempMarks.Engineering_Drawing_II_Practical_Assesment +
                    tempMarks.Engineering_Drawing_II_Practical_Final +
                    tempMarks.Basic_Electronics_Engineering_Theory_Assesment +
                    tempMarks.Basic_Electronics_Engineering_Theory_Final +
                    tempMarks.Basic_Electronics_Engineering_Practical_Assesment +
                    tempMarks.Engineering_Chemistry_Theory_Assesment +
                    tempMarks.Engineering_Chemistry_Theory_Final +
                    tempMarks.Engineering_Chemistry_Practical_Assesment +
                    tempMarks.Engineering_Chemistry_Practical_Final +
                    tempMarks.Thermodynamics_And_Heat_Transfer_Theory_Assesment +
                    tempMarks.Thermodynamics_And_Heat_Transfer_Theory_Final +
                    tempMarks.Thermodynamics_And_Heat_Transfer_Practical_Assesment +
                    tempMarks.Workshop_Technology_Practical_Assesment +
                    tempMarks.Workshop_Technology_Theory_Assesment  
                )/650;

            }

            ssReportCard.secondSemesterMarks = tempMarks;


            var tempDetails = factory.newConcept(NS2, 'StudentDetails');
            if(tempRecordForExtraction.studentDetails.firstName == reportCard.studentDetails.firstName && tempRecordForExtraction.studentDetails.lastName == reportCard.studentDetails.lastName && tempRecordForExtraction.studentDetails.enrolledCollege == reportCard.studentDetails.enrolledCollege){
                tempDetails.registrationNumber = reportCard.studentDetails.registrationNumber;
                tempDetails.firstName = reportCard.studentDetails.firstName;
                tempDetails.lastName = reportCard.studentDetails.lastName;
                tempDetails.faculty = "BCT";
                tempDetails.enrolledCollege = reportCard.studentDetails.enrolledCollege;

                ssReportCard.studentDetails = tempDetails;
            }else{
                throw new Error('Student details does not match to any record. Please provide correct details.');
            }

            var tempRelationship = factory.newRelationship(NS,'Record',reportCard.studentDetails.registrationNumber);
            ssReportCard.record = tempRelationship;


        }
        return ssReportCard;
    }).then(function(ssReportCard){

        var recordRegistry={};
        return getAssetRegistry('org.studentrecord.reportcard.SecondSemesterReportCard').then(function(tempRecordRegistry){
            return tempRecordRegistry.add(ssReportCard);
        }).then(function(){
            return getAssetRegistry('org.studentrecord.record.Record');
        }).then(function(tempRecordRegistry){
            recordRegistry = tempRecordRegistry;
            return tempRecordRegistry.get(reportCard.studentDetails.registrationNumber);
        }).then(function(tempRecord){
            if(flag0 == 1){
                tempRecord.secondSemesterResult = "Fail";
            }else{
                tempRecord.secondSemesterResult = "Pass";
                tempRecord.secondSemesterPercentage = percentage.toFixed(2);
            }
            if(tempRecord.secondSemesterReportId){
                tempRecord.secondSemesterReportId.push(reportCard.reportId);
                return recordRegistry.update(tempRecord);
            }else{
                var tempArray = [reportCard.reportId];
                tempRecord.secondSemesterReportId = tempArray;
                return recordRegistry.update(tempRecord);
            }
        });

    });
}




/**
 * This is the logic for the first semester report card.
 * @param {org.studentrecord.transactions.firstSemesterReportCard} firstSemesterReportCard
 * @transaction
 */
function firstSemesterReportCard(reportCard){

    var factory = getFactory();
    var NS =  'org.studentrecord.record';
    var NS2 = 'org.studentrecord.reportcard';
    var flag0 = 0;
    var percentage = 0;
    var tempRecordForExtraction = {};

    return getAssetRegistry('org.studentrecord.record.Record').then(function(tempRecordRegistry){
        return tempRecordRegistry.get(reportCard.studentDetails.registrationNumber);
    }).then(function(tempRecord){
        tempRecordForExtraction = tempRecord;
        if(tempRecord.studentDetails.enrolledUniversity == "University A" && reportCard.universitySecret == "12345" || tempRecord.studentDetails.enrolledUniversity == "University B" && reportCard.universitySecret == "54321"){
            return tempRecord.firstSemesterReportId;
        }else{
            throw new Error('This University is not allowed to modify the record '+tempRecord.registrationId +' .');
        }
    }).then(function(tempArray){
        if(tempArray!= null && tempArray.length>0){
            var tempArrayElement = tempArray[tempArray.length-1];
            return getAssetRegistry('org.studentrecord.reportcard.FirstSemesterReportCard').then(function(tempReportCardRegistry){
                return tempReportCardRegistry.get(tempArrayElement);
            }).then(function(tempReportCard){
                if(tempReportCard.result === "Fail"){

                    var ssReportCard = factory.newResource(NS2, 'FirstSemesterReportCard', reportCard.reportId );
                    var tempMarks = factory.newConcept(NS2, 'FirstSemesterMarks');

                    if(tempReportCard.firstSemesterMarks.Engineering_Mathematics_I_Theory_Assesment<8){
                        tempMarks.Engineering_Mathematics_I_Theory_Assesment = reportCard.FirstSemesterMarks.Engineering_Mathematics_I_Theory_Assesment;
                    }else{
                        tempMarks.Engineering_Mathematics_I_Theory_Assesment = tempReportCard.firstSemesterMarks.Engineering_Mathematics_I_Theory_Assesment;
                    }
                    if(tempReportCard.firstSemesterMarks.Engineering_Mathematics_I_Theory_Final<32){
                        tempMarks.Engineering_Mathematics_I_Theory_Final = reportCard.FirstSemesterMarks.Engineering_Mathematics_I_Theory_Final;
                    }else{
                        tempMarks.Engineering_Mathematics_I_Theory_Final = tempReportCard.firstSemesterMarks.Engineering_Mathematics_I_Theory_Final;
                    }
                    if(tempReportCard.firstSemesterMarks.Computer_Programming_Theory_Assesment<8){
                        tempMarks.Computer_Programming_Theory_Assesment = reportCard.FirstSemesterMarks.Computer_Programming_Theory_Assesment;
                    }else{
                        tempMarks.Computer_Programming_Theory_Assesment = tempReportCard.firstSemesterMarks.Computer_Programming_Theory_Assesment;
                    }
                    if(tempReportCard.firstSemesterMarks.Computer_Programming_Theory_Final<32){
                        tempMarks.Computer_Programming_Theory_Final = reportCard.FirstSemesterMarks.Computer_Programming_Theory_Final;
                    }else{
                        tempMarks.Computer_Programming_Theory_Final = tempReportCard.firstSemesterMarks.Computer_Programming_Theory_Final;
                    }
                    if(tempReportCard.firstSemesterMarks.Computer_Programming_Practical_Assesment<20){
                        tempMarks.Computer_Programming_Practical_Assesment = reportCard.FirstSemesterMarks.Computer_Programming_Practical_Assesment;
                    }else{
                        tempMarks.Computer_Programming_Practical_Assesment = tempReportCard.firstSemesterMarks.Computer_Programming_Practical_Assesment;
                    }
                    if(tempReportCard.firstSemesterMarks.Engineering_Drawing_I_Practical_Assesment<24){
                        tempMarks.Engineering_Drawing_I_Practical_Assesment = reportCard.FirstSemesterMarks.Engineering_Drawing_I_Practical_Assesment;
                    }else{
                        tempMarks.Engineering_Drawing_I_Practical_Assesment = tempReportCard.firstSemesterMarks.Engineering_Drawing_I_Practical_Assesment;
                    }
                    if(tempReportCard.firstSemesterMarks.Engineering_Drawing_I_Practical_Final<16){
                        tempMarks.Engineering_Drawing_I_Practical_Final = reportCard.FirstSemesterMarks.Engineering_Drawing_I_Practical_Final;
                    }else{
                        tempMarks.Engineering_Drawing_I_Practical_Final = tempReportCard.firstSemesterMarks.Engineering_Drawing_I_Practical_Final;
                    }
                    if(tempReportCard.firstSemesterMarks.Engineering_Physics_Theory_Assesment<8){
                        tempMarks.Engineering_Physics_Theory_Assesment = reportCard.FirstSemesterMarks.Engineering_Physics_Theory_Assesment;
                    }else{
                        tempMarks.Engineering_Physics_Theory_Assesment = tempReportCard.firstSemesterMarks.Engineering_Physics_Theory_Assesment;
                    }
                    if(tempReportCard.firstSemesterMarks.Engineering_Physics_Theory_Final<32){
                        tempMarks.Engineering_Physics_Theory_Final = reportCard.FirstSemesterMarks.Engineering_Physics_Theory_Final;
                    }else{
                        tempMarks.Engineering_Physics_Theory_Final = tempReportCard.firstSemesterMarks.Engineering_Physics_Theory_Final;
                    }
                    if(tempReportCard.firstSemesterMarks.Engineering_Physics_Practical_Assesment<8){
                        tempMarks.Engineering_Physics_Practical_Assesment = reportCard.FirstSemesterMarks.Engineering_Physics_Practical_Assesment;
                    }else{
                        tempMarks.Engineering_Physics_Practical_Assesment = tempReportCard.firstSemesterMarks.Engineering_Physics_Practical_Assesment;
                    }
                    if(tempReportCard.firstSemesterMarks.Engineering_Physics_Practical_Final<12){
                        tempMarks.Engineering_Physics_Practical_Final = reportCard.FirstSemesterMarks.Engineering_Physics_Practical_Final;
                    }else{
                        tempMarks.Engineering_Physics_Practical_Final = tempReportCard.firstSemesterMarks.Engineering_Physics_Practical_Final;
                    }
                    if(tempReportCard.firstSemesterMarks.Applied_Mechanics_Theory_Assesment<8){
                        tempMarks.Applied_Mechanics_Theory_Assesment = reportCard.FirstSemesterMarks.Applied_Mechanics_Theory_Assesment;
                    }else{
                        tempMarks.Applied_Mechanics_Theory_Assesment = tempReportCard.firstSemesterMarks.Applied_Mechanics_Theory_Assesment;
                    }
                    if(tempReportCard.firstSemesterMarks.Applied_Mechanics_Theory_Final<32){
                        tempMarks.Applied_Mechanics_Theory_Final = reportCard.FirstSemesterMarks.Applied_Mechanics_Theory_Final;
                    }else{
                        tempMarks.Applied_Mechanics_Theory_Final = tempReportCard.firstSemesterMarks.Applied_Mechanics_Theory_Final;
                    }
                    if(tempReportCard.firstSemesterMarks.Basic_Electrical_Engineering_Theory_Assesment<8){
                        tempMarks.Basic_Electrical_Engineering_Theory_Assesment = reportCard.FirstSemesterMarks.Basic_Electrical_Engineering_Theory_Assesment;
                    }else{
                        tempMarks.Basic_Electrical_Engineering_Theory_Assesment = tempReportCard.firstSemesterMarks.Basic_Electrical_Engineering_Theory_Assesment;
                    }
                    if(tempReportCard.firstSemesterMarks.Basic_Electrical_Engineering_Theory_Final<32){
                        tempMarks.Basic_Electrical_Engineering_Theory_Final = reportCard.FirstSemesterMarks.Basic_Electrical_Engineering_Theory_Final;
                    }else{
                        tempMarks.Basic_Electrical_Engineering_Theory_Final = tempReportCard.firstSemesterMarks.Basic_Electrical_Engineering_Theory_Final;
                    }
                    if(tempReportCard.firstSemesterMarks.Basic_Electrical_Engineering_Practical_Assesment<10){
                        tempMarks.Basic_Electrical_Engineering_Practical_Assesment = reportCard.FirstSemesterMarks.Basic_Electrical_Engineering_Practical_Assesment;
                    }else{
                        tempMarks.Basic_Electrical_Engineering_Practical_Assesment = tempReportCard.firstSemesterMarks.Basic_Electrical_Engineering_Practical_Assesment;
                    }

                    ssReportCard.firstSemesterMarks = tempMarks;

                    if(tempMarks.Engineering_Mathematics_I_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Engineering_Mathematics_I_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Computer_Programming_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Computer_Programming_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Computer_Programming_Practical_Assesment<20){flag0 = 1;}
                    if(tempMarks.Engineering_Drawing_I_Practical_Assesment<24){flag0 = 1;}
                    if(tempMarks.Engineering_Drawing_I_Practical_Final<16){flag0 = 1;}
                    if(tempMarks.Engineering_Physics_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Engineering_Physics_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Engineering_Physics_Practical_Assesment<8){flag0 = 1;}
                    if(tempMarks.Engineering_Physics_Practical_Final<12){flag0 = 1;}
                    if(tempMarks.Applied_Mechanics_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Applied_Mechanics_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Basic_Electrical_Engineering_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Basic_Electrical_Engineering_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Basic_Electrical_Engineering_Practical_Assesment<10){flag0 = 1;}
        
                    if(flag0 == 1){
                        ssReportCard.result = "Fail";
                    }else{
                        ssReportCard.result = "Pass";
                        percentage = 100*(
                            tempMarks.Engineering_Mathematics_I_Theory_Assesment+
                            tempMarks.Engineering_Mathematics_I_Theory_Final+
                            tempMarks.Computer_Programming_Theory_Assesment+
                            tempMarks.Computer_Programming_Theory_Final+
                            tempMarks.Computer_Programming_Practical_Assesment+
                            tempMarks.Engineering_Drawing_I_Practical_Assesment+
                            tempMarks.Engineering_Drawing_I_Practical_Final+
                            tempMarks.Engineering_Physics_Theory_Assesment+
                            tempMarks.Engineering_Physics_Theory_Final+
                            tempMarks.Engineering_Physics_Practical_Assesment+
                            tempMarks.Engineering_Physics_Practical_Final+
                            tempMarks.Applied_Mechanics_Theory_Assesment+
                            tempMarks.Applied_Mechanics_Theory_Final+
                            tempMarks.Basic_Electrical_Engineering_Theory_Assesment+
                            tempMarks.Basic_Electrical_Engineering_Theory_Final+
                            tempMarks.Basic_Electrical_Engineering_Practical_Assesment
                        )/725;
                    }


                    var tempDetails = factory.newConcept(NS2, 'StudentDetails');
                    if(tempRecordForExtraction.studentDetails.firstName == reportCard.studentDetails.firstName && tempRecordForExtraction.studentDetails.lastName == reportCard.studentDetails.lastName && tempRecordForExtraction.studentDetails.enrolledCollege == reportCard.studentDetails.enrolledCollege){
                        tempDetails.registrationNumber = reportCard.studentDetails.registrationNumber;
                        tempDetails.firstName = reportCard.studentDetails.firstName;
                        tempDetails.lastName = reportCard.studentDetails.lastName;
                        tempDetails.faculty = "BCT";
                        tempDetails.enrolledCollege = reportCard.studentDetails.enrolledCollege;

                        ssReportCard.studentDetails = tempDetails;
                    }else{
                        throw new Error('Student details does not match to any record. Please provide correct details.');
                    }

                    //
                    var tempRelationship = factory.newRelationship(NS,'Record',reportCard.studentDetails.registrationNumber);
                    ssReportCard.record = tempRelationship;

                    return ssReportCard;
                }else{
                    throw new Error('Student ' + reportCard.studentDetails.registrationNumber + ' already passed first semester.');
                }
            });
        }else{
            var ssReportCard = factory.newResource(NS2, 'FirstSemesterReportCard', reportCard.reportId );
            var tempMarks = factory.newConcept(NS2, 'FirstSemesterMarks');

            tempMarks.Engineering_Mathematics_I_Theory_Assesment = reportCard.FirstSemesterMarks.Engineering_Mathematics_I_Theory_Assesment;
            tempMarks.Engineering_Mathematics_I_Theory_Final = reportCard.FirstSemesterMarks.Engineering_Mathematics_I_Theory_Final;
            tempMarks.Computer_Programming_Theory_Assesment = reportCard.FirstSemesterMarks.Computer_Programming_Theory_Assesment;
            tempMarks.Computer_Programming_Theory_Final = reportCard.FirstSemesterMarks.Computer_Programming_Theory_Final;
            tempMarks.Computer_Programming_Practical_Assesment = reportCard.FirstSemesterMarks.Computer_Programming_Practical_Assesment;
            tempMarks.Engineering_Drawing_I_Practical_Assesment = reportCard.FirstSemesterMarks.Engineering_Drawing_I_Practical_Assesment;
            tempMarks.Engineering_Drawing_I_Practical_Final = reportCard.FirstSemesterMarks.Engineering_Drawing_I_Practical_Final;
            tempMarks.Engineering_Physics_Theory_Assesment = reportCard.FirstSemesterMarks.Engineering_Physics_Theory_Assesment;
            tempMarks.Engineering_Physics_Theory_Final = reportCard.FirstSemesterMarks.Engineering_Physics_Theory_Final;
            tempMarks.Engineering_Physics_Practical_Assesment = reportCard.FirstSemesterMarks.Engineering_Physics_Practical_Assesment;
            tempMarks.Engineering_Physics_Practical_Final = reportCard.FirstSemesterMarks.Engineering_Physics_Practical_Final;
            tempMarks.Applied_Mechanics_Theory_Assesment = reportCard.FirstSemesterMarks.Applied_Mechanics_Theory_Assesment;
            tempMarks.Applied_Mechanics_Theory_Final = reportCard.FirstSemesterMarks.Applied_Mechanics_Theory_Final;
            tempMarks.Basic_Electrical_Engineering_Theory_Assesment = reportCard.FirstSemesterMarks.Basic_Electrical_Engineering_Theory_Assesment;
            tempMarks.Basic_Electrical_Engineering_Theory_Final = reportCard.FirstSemesterMarks.Basic_Electrical_Engineering_Theory_Final;
            tempMarks.Basic_Electrical_Engineering_Practical_Assesment = reportCard.FirstSemesterMarks.Basic_Electrical_Engineering_Practical_Assesment;


            if(tempMarks.Engineering_Mathematics_I_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Engineering_Mathematics_I_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Computer_Programming_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Computer_Programming_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Computer_Programming_Practical_Assesment<20){flag0 = 1;}
            if(tempMarks.Engineering_Drawing_I_Practical_Assesment<24){flag0 = 1;}
            if(tempMarks.Engineering_Drawing_I_Practical_Final<16){flag0 = 1;}
            if(tempMarks.Engineering_Physics_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Engineering_Physics_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Engineering_Physics_Practical_Assesment<8){flag0 = 1;}
            if(tempMarks.Engineering_Physics_Practical_Final<12){flag0 = 1;}
            if(tempMarks.Applied_Mechanics_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Applied_Mechanics_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Basic_Electrical_Engineering_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Basic_Electrical_Engineering_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Basic_Electrical_Engineering_Practical_Assesment<10){flag0 = 1;}

            if(flag0 == 1){
                ssReportCard.result = "Fail";
            }else{
                ssReportCard.result = "Pass";
                percentage = 100*(
                    tempMarks.Engineering_Mathematics_I_Theory_Assesment+
                    tempMarks.Engineering_Mathematics_I_Theory_Final+
                    tempMarks.Computer_Programming_Theory_Assesment+
                    tempMarks.Computer_Programming_Theory_Final+
                    tempMarks.Computer_Programming_Practical_Assesment+
                    tempMarks.Engineering_Drawing_I_Practical_Assesment+
                    tempMarks.Engineering_Drawing_I_Practical_Final+
                    tempMarks.Engineering_Physics_Theory_Assesment+
                    tempMarks.Engineering_Physics_Theory_Final+
                    tempMarks.Engineering_Physics_Practical_Assesment+
                    tempMarks.Engineering_Physics_Practical_Final+
                    tempMarks.Applied_Mechanics_Theory_Assesment+
                    tempMarks.Applied_Mechanics_Theory_Final+
                    tempMarks.Basic_Electrical_Engineering_Theory_Assesment+
                    tempMarks.Basic_Electrical_Engineering_Theory_Final+
                    tempMarks.Basic_Electrical_Engineering_Practical_Assesment
                )/725;
            }

            ssReportCard.firstSemesterMarks = tempMarks;

            var tempDetails = factory.newConcept(NS2, 'StudentDetails');
            if(tempRecordForExtraction.studentDetails.firstName == reportCard.studentDetails.firstName && tempRecordForExtraction.studentDetails.lastName == reportCard.studentDetails.lastName && tempRecordForExtraction.studentDetails.enrolledCollege == reportCard.studentDetails.enrolledCollege){
                tempDetails.registrationNumber = reportCard.studentDetails.registrationNumber;
                tempDetails.firstName = reportCard.studentDetails.firstName;
                tempDetails.lastName = reportCard.studentDetails.lastName;
                tempDetails.faculty = "BCT";
                tempDetails.enrolledCollege = reportCard.studentDetails.enrolledCollege;

                ssReportCard.studentDetails = tempDetails;
            }else{
                throw new Error('Student details does not match to any record. Please provide correct details.');
            }

            //
            var tempRelationship = factory.newRelationship(NS,'Record',reportCard.studentDetails.registrationNumber);
            ssReportCard.record = tempRelationship;

        }
        return ssReportCard;
    }).then(function(ssReportCard){

        var recordRegistry={};
        return getAssetRegistry('org.studentrecord.reportcard.FirstSemesterReportCard').then(function(tempRecordRegistry){
            return tempRecordRegistry.add(ssReportCard);
        }).then(function(){
            return getAssetRegistry('org.studentrecord.record.Record');
        }).then(function(tempRecordRegistry){
            recordRegistry = tempRecordRegistry;
            return tempRecordRegistry.get(reportCard.studentDetails.registrationNumber);
        }).then(function(tempRecord){
            if(flag0 == 1){
                tempRecord.firstSemesterResult = "Fail";
            }else{
                tempRecord.firstSemesterResult = "Pass";
                tempRecord.firstSemesterPercentage = percentage.toFixed(2);
            }
            if(tempRecord.firstSemesterReportId){
                tempRecord.firstSemesterReportId.push(reportCard.reportId);
                return recordRegistry.update(tempRecord);
            }else{
                var tempArray = [reportCard.reportId];
                tempRecord.firstSemesterReportId = tempArray;
                return recordRegistry.update(tempRecord);
            }
        });

    });

}



/**
 * This is the logic for the first semester report card.
 * @param {org.studentrecord.transactions.thirdSemesterReportCard} thirdSemesterReportCard
 * @transaction
 */
function thirdSemesterReportCard(reportCard){


    var factory = getFactory();
    var NS =  'org.studentrecord.record';
    var NS2 = 'org.studentrecord.reportcard';
    var flag0 = 0;
    var percentage = 0;
    var tempRecordForExtraction = {};

    return getAssetRegistry('org.studentrecord.record.Record').then(function(tempRecordRegistry){
        return tempRecordRegistry.get(reportCard.studentDetails.registrationNumber);
    }).then(function(tempRecord){
        tempRecordForExtraction = tempRecord;
        if(tempRecord.studentDetails.enrolledUniversity == "University A" && reportCard.universitySecret == "12345" || tempRecord.studentDetails.enrolledUniversity == "University B" && reportCard.universitySecret == "54321"){
            return tempRecord.thirdSemesterReportId;
        }else{
            throw new Error('This University is not allowed to modify the record '+tempRecord.registrationId +' .');
        }
    }).then(function(tempArray){
        if(tempArray!= null && tempArray.length>0){
            var tempArrayElement = tempArray[tempArray.length-1];
            return getAssetRegistry('org.studentrecord.reportcard.ThirdSemesterReportCard').then(function(tempReportCardRegistry){
                return tempReportCardRegistry.get(tempArrayElement);
            }).then(function(tempReportCard){
                if(tempReportCard.result === 'Fail'){

                    var ssReportCard = factory.newResource(NS2, 'ThirdSemesterReportCard', reportCard.reportId );
                    var tempMarks = factory.newConcept(NS2, 'ThirdSemesterMarks');

                    if(tempReportCard.thirdSemesterMarks.Engineering_Mathematics_III_Theory_Assesment<8){
                        tempMarks.Engineering_Mathematics_III_Theory_Assesment = reportCard.ThirdSemesterMarks.Engineering_Mathematics_III_Theory_Assesment;
                    }else{
                        tempMarks.Engineering_Mathematics_III_Theory_Assesment = tempReportCard.thirdSemesterMarks.Engineering_Mathematics_III_Theory_Assesment;
                    }
                    if(tempReportCard.thirdSemesterMarks.Engineering_Mathematics_III_Theory_Final<32){
                        tempMarks.Engineering_Mathematics_III_Theory_Final = reportCard.ThirdSemesterMarks.Engineering_Mathematics_III_Theory_Final;
                    }else{
                        tempMarks.Engineering_Mathematics_III_Theory_Final = tempReportCard.thirdSemesterMarks.Engineering_Mathematics_III_Theory_Final;
                    }
                    if(tempReportCard.thirdSemesterMarks.Object_Oriented_Programming_Theory_Assesment<8){
                        tempMarks.Object_Oriented_Programming_Theory_Assesment = reportCard.ThirdSemesterMarks.Object_Oriented_Programming_Theory_Assesment;
                    }else{
                        tempMarks.Object_Oriented_Programming_Theory_Assesment = tempReportCard.thirdSemesterMarks.Object_Oriented_Programming_Theory_Assesment;
                    }
                    if(tempReportCard.thirdSemesterMarks.Object_Oriented_Programming_Theory_Final<32){
                        tempMarks.Object_Oriented_Programming_Theory_Final = reportCard.ThirdSemesterMarks.Object_Oriented_Programming_Theory_Final;
                    }else{
                        tempMarks.Object_Oriented_Programming_Theory_Final = tempReportCard.thirdSemesterMarks.Object_Oriented_Programming_Theory_Final;
                    }
                    if(tempReportCard.thirdSemesterMarks.Object_Oriented_Programming_Practical_Assesment<20){
                        tempMarks.Object_Oriented_Programming_Practical_Assesment = reportCard.ThirdSemesterMarks.Object_Oriented_Programming_Practical_Assesment;
                    }else{
                        tempMarks.Object_Oriented_Programming_Practical_Assesment = tempReportCard.thirdSemesterMarks.Object_Oriented_Programming_Practical_Assesment;
                    }
                    if(tempReportCard.thirdSemesterMarks.Theory_Of_Computation_Theory_Assesment<8){
                        tempMarks.Theory_Of_Computation_Theory_Assesment = reportCard.ThirdSemesterMarks.Theory_Of_Computation_Theory_Assesment;
                    }else{
                        tempMarks.Theory_Of_Computation_Theory_Assesment = tempReportCard.thirdSemesterMarks.Theory_Of_Computation_Theory_Assesment;
                    }
                    if(tempReportCard.thirdSemesterMarks.Theory_Of_Computation_Theory_Final<32){
                        tempMarks.Theory_Of_Computation_Theory_Final = reportCard.ThirdSemesterMarks.Theory_Of_Computation_Theory_Final;
                    }else{
                        tempMarks.Theory_Of_Computation_Theory_Final = tempReportCard.thirdSemesterMarks.Theory_Of_Computation_Theory_Final;
                    }
                    if(tempReportCard.thirdSemesterMarks.Electric_Circuit_Theory_Theory_Assesment<8){
                        tempMarks.Electric_Circuit_Theory_Theory_Assesment = reportCard.ThirdSemesterMarks.Electric_Circuit_Theory_Theory_Assesment;
                    }else{
                        tempMarks.Electric_Circuit_Theory_Theory_Assesment = tempReportCard.thirdSemesterMarks.Electric_Circuit_Theory_Theory_Assesment;
                    }
                    if(tempReportCard.thirdSemesterMarks.Electric_Circuit_Theory_Practical_Assesment<10){
                        tempMarks.Electric_Circuit_Theory_Practical_Assesment = reportCard.ThirdSemesterMarks.Electric_Circuit_Theory_Practical_Assesment;
                    }else{
                        tempMarks.Electric_Circuit_Theory_Practical_Assesment = tempReportCard.thirdSemesterMarks.Electric_Circuit_Theory_Practical_Assesment;
                    }
                    if(tempReportCard.thirdSemesterMarks.Electric_Circuit_Theory_Theory_Final<32){
                        tempMarks.Electric_Circuit_Theory_Theory_Final = reportCard.ThirdSemesterMarks.Electric_Circuit_Theory_Theory_Final;
                    }else{
                        tempMarks.Electric_Circuit_Theory_Theory_Final = tempReportCard.thirdSemesterMarks.Electric_Circuit_Theory_Theory_Final;
                    }
                    if(tempReportCard.thirdSemesterMarks.Electronic_Devices_And_Circuits_Theory_Assesment<8){
                        tempMarks.Electronic_Devices_And_Circuits_Theory_Assesment = reportCard.ThirdSemesterMarks.Electronic_Devices_And_Circuits_Theory_Assesment;
                    }else{
                        tempMarks.Electronic_Devices_And_Circuits_Theory_Assesment = tempReportCard.thirdSemesterMarks.Electronic_Devices_And_Circuits_Theory_Assesment;
                    }
                    if(tempReportCard.thirdSemesterMarks.Electronic_Devices_And_Circuits_Theory_Final<32){
                        tempMarks.Electronic_Devices_And_Circuits_Theory_Final = reportCard.ThirdSemesterMarks.Electronic_Devices_And_Circuits_Theory_Final;
                    }else{
                        tempMarks.Electronic_Devices_And_Circuits_Theory_Final = tempReportCard.thirdSemesterMarks.Electronic_Devices_And_Circuits_Theory_Final;
                    }
                    if(tempReportCard.thirdSemesterMarks.Electronic_Devices_And_Circuits_Practical_Assesment<10){
                        tempMarks.Electronic_Devices_And_Circuits_Practical_Assesment = reportCard.ThirdSemesterMarks.Electronic_Devices_And_Circuits_Practical_Assesment;
                    }else{
                        tempMarks.Electronic_Devices_And_Circuits_Practical_Assesment = tempReportCard.thirdSemesterMarks.Electronic_Devices_And_Circuits_Practical_Assesment;
                    }
                    if(tempReportCard.thirdSemesterMarks.Digital_Logic_Theory_Assesment<8){
                        tempMarks.Digital_Logic_Theory_Assesment = reportCard.ThirdSemesterMarks.Digital_Logic_Theory_Assesment;
                    }else{
                        tempMarks.Digital_Logic_Theory_Assesment = tempReportCard.thirdSemesterMarks.Digital_Logic_Theory_Assesment;
                    }
                    if(tempReportCard.thirdSemesterMarks.Digital_Logic_Theory_Final<32){
                        tempMarks.Digital_Logic_Theory_Final = reportCard.ThirdSemesterMarks.Digital_Logic_Theory_Final;
                    }else{
                        tempMarks.Digital_Logic_Theory_Final = tempReportCard.thirdSemesterMarks.Digital_Logic_Theory_Final;
                    }
                    if(tempReportCard.thirdSemesterMarks.Digital_Logic_Practical_Assesment<20){
                        tempMarks.Digital_Logic_Practical_Assesment = reportCard.ThirdSemesterMarks.Digital_Logic_Practical_Assesment;
                    }else{
                        tempMarks.Digital_Logic_Practical_Assesment = tempReportCard.thirdSemesterMarks.Digital_Logic_Practical_Assesment;
                    }
                    if(tempReportCard.thirdSemesterMarks.Electromagnetics_Theory_Assesment<8){
                        tempMarks.Electromagnetics_Theory_Assesment = reportCard.ThirdSemesterMarks.Electromagnetics_Theory_Assesment;
                    }else{
                        tempMarks.Electromagnetics_Theory_Assesment = tempReportCard.thirdSemesterMarks.Electromagnetics_Theory_Assesment;
                    }
                    if(tempReportCard.thirdSemesterMarks.Electromagnetics_Theory_Final<32){
                        tempMarks.Electromagnetics_Theory_Final = reportCard.ThirdSemesterMarks.Electromagnetics_Theory_Final;
                    }else{
                        tempMarks.Electromagnetics_Theory_Final = tempReportCard.thirdSemesterMarks.Electromagnetics_Theory_Final;
                    }
                    if(tempReportCard.thirdSemesterMarks.Electromagnetics_Practical_Assesment<10){
                        tempMarks.Electromagnetics_Practical_Assesment = reportCard.ThirdSemesterMarks.Electromagnetics_Practical_Assesment;
                    }else{
                        tempMarks.Electromagnetics_Practical_Assesment = tempReportCard.thirdSemesterMarks.Electromagnetics_Practical_Assesment;
                    }
                
                    ssReportCard.thirdSemesterMarks = tempMarks;
            
                    if(tempMarks.Engineering_Mathematics_III_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Engineering_Mathematics_III_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Object_Oriented_Programming_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Object_Oriented_Programming_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Object_Oriented_Programming_Practical_Assesment<20){flag0 = 1;}
                    if(tempMarks.Theory_Of_Computation_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Theory_Of_Computation_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Electric_Circuit_Theory_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Electric_Circuit_Theory_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Electric_Circuit_Theory_Practical_Assesment<10){flag0 = 1;}
                    if(tempMarks.Electronic_Devices_And_Circuits_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Electronic_Devices_And_Circuits_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Electronic_Devices_And_Circuits_Practical_Assesment<10){flag0 = 1;}
                    if(tempMarks.Digital_Logic_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Digital_Logic_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Digital_Logic_Practical_Assesment<20){flag0 = 1;}
                    if(tempMarks.Electromagnetics_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Electromagnetics_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Electromagnetics_Practical_Assesment<10){flag0 = 1;}
        
                    if(flag0 == 1){
                        ssReportCard.result = "Fail";
                    }else{
                        ssReportCard.result = "Pass";
                        percentage = 100*(
                            tempMarks.Engineering_Mathematics_III_Theory_Assesment+
                            tempMarks.Engineering_Mathematics_III_Theory_Final+
                            tempMarks.Object_Oriented_Programming_Theory_Assesment+
                            tempMarks.Object_Oriented_Programming_Theory_Final+
                            tempMarks.Object_Oriented_Programming_Practical_Assesment+
                            tempMarks.Theory_Of_Computation_Theory_Assesment+
                            tempMarks.Theory_Of_Computation_Theory_Final+
                            tempMarks.Electric_Circuit_Theory_Theory_Assesment+
                            tempMarks.Electric_Circuit_Theory_Theory_Final+
                            tempMarks.Electric_Circuit_Theory_Practical_Assesment+
                            tempMarks.Electronic_Devices_And_Circuits_Theory_Assesment+
                            tempMarks.Electronic_Devices_And_Circuits_Theory_Final+
                            tempMarks.Electronic_Devices_And_Circuits_Practical_Assesment+
                            tempMarks.Digital_Logic_Theory_Assesment+
                            tempMarks.Digital_Logic_Theory_Final+
                            tempMarks.Digital_Logic_Practical_Assesment+
                            tempMarks.Electromagnetics_Theory_Assesment+
                            tempMarks.Electromagnetics_Theory_Final+
                            tempMarks.Electromagnetics_Practical_Assesment
                        )/875;
                    }
                    
                
                    var tempDetails = factory.newConcept(NS2, 'StudentDetails');
                    if(tempRecordForExtraction.studentDetails.firstName == reportCard.studentDetails.firstName && tempRecordForExtraction.studentDetails.lastName == reportCard.studentDetails.lastName && tempRecordForExtraction.studentDetails.enrolledCollege == reportCard.studentDetails.enrolledCollege){
                        tempDetails.registrationNumber = reportCard.studentDetails.registrationNumber;
                        tempDetails.firstName = reportCard.studentDetails.firstName;
                        tempDetails.lastName = reportCard.studentDetails.lastName;
                        tempDetails.faculty = "BCT";
                        tempDetails.enrolledCollege = reportCard.studentDetails.enrolledCollege;

                        ssReportCard.studentDetails = tempDetails;
                    }else{
                        throw new Error('Student details does not match to any record. Please provide correct details.');
                    }

                    //
                    var tempRelationship = factory.newRelationship(NS,'Record',reportCard.studentDetails.registrationNumber);
                    ssReportCard.record = tempRelationship;
                    return ssReportCard;
                }else{
                    throw new Error('Student '+ reportCard.studentDetails.registrationNumber + ' already passed third semester.');
                }
            });
        }else{
            var ssReportCard = factory.newResource(NS2, 'ThirdSemesterReportCard', reportCard.reportId );
            var tempMarks = factory.newConcept(NS2, 'ThirdSemesterMarks');

            tempMarks.Engineering_Mathematics_III_Theory_Assesment = reportCard.ThirdSemesterMarks.Engineering_Mathematics_III_Theory_Assesment;
            tempMarks.Engineering_Mathematics_III_Theory_Final = reportCard.ThirdSemesterMarks.Engineering_Mathematics_III_Theory_Final;
            tempMarks.Object_Oriented_Programming_Theory_Assesment = reportCard.ThirdSemesterMarks.Object_Oriented_Programming_Theory_Assesment ;
            tempMarks.Object_Oriented_Programming_Theory_Final = reportCard.ThirdSemesterMarks.Object_Oriented_Programming_Theory_Final;
            tempMarks.Object_Oriented_Programming_Practical_Assesment = reportCard.ThirdSemesterMarks.Object_Oriented_Programming_Practical_Assesment;
            tempMarks.Theory_Of_Computation_Theory_Assesment = reportCard.ThirdSemesterMarks.Theory_Of_Computation_Theory_Assesment;
            tempMarks.Theory_Of_Computation_Theory_Final = reportCard.ThirdSemesterMarks.Theory_Of_Computation_Theory_Final;
            tempMarks.Electric_Circuit_Theory_Theory_Assesment = reportCard.ThirdSemesterMarks.Electric_Circuit_Theory_Theory_Assesment;
            tempMarks.Electric_Circuit_Theory_Theory_Final = reportCard.ThirdSemesterMarks.Electric_Circuit_Theory_Theory_Final;
            tempMarks.Electric_Circuit_Theory_Practical_Assesment = reportCard.ThirdSemesterMarks.Electric_Circuit_Theory_Practical_Assesment;
            tempMarks.Electronic_Devices_And_Circuits_Theory_Assesment = reportCard.ThirdSemesterMarks.Electronic_Devices_And_Circuits_Theory_Assesment;
            tempMarks.Electronic_Devices_And_Circuits_Theory_Final = reportCard.ThirdSemesterMarks.Electronic_Devices_And_Circuits_Theory_Final;
            tempMarks.Electronic_Devices_And_Circuits_Practical_Assesment = reportCard.ThirdSemesterMarks.Electronic_Devices_And_Circuits_Practical_Assesment;
            tempMarks.Digital_Logic_Theory_Assesment = reportCard.ThirdSemesterMarks.Digital_Logic_Theory_Assesment;
            tempMarks.Digital_Logic_Theory_Final = reportCard.ThirdSemesterMarks.Digital_Logic_Theory_Final;
            tempMarks.Digital_Logic_Practical_Assesment = reportCard.ThirdSemesterMarks.Digital_Logic_Practical_Assesment;
            tempMarks.Electromagnetics_Theory_Assesment = reportCard.ThirdSemesterMarks.Electromagnetics_Theory_Assesment;
            tempMarks.Electromagnetics_Theory_Final = reportCard.ThirdSemesterMarks.Electromagnetics_Theory_Final;
            tempMarks.Electromagnetics_Practical_Assesment = reportCard.ThirdSemesterMarks.Electromagnetics_Practical_Assesment;


            if(tempMarks.Engineering_Mathematics_III_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Engineering_Mathematics_III_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Object_Oriented_Programming_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Object_Oriented_Programming_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Object_Oriented_Programming_Practical_Assesment<20){flag0 = 1;}
            if(tempMarks.Theory_Of_Computation_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Theory_Of_Computation_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Electric_Circuit_Theory_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Electric_Circuit_Theory_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Electric_Circuit_Theory_Practical_Assesment<10){flag0 = 1;}
            if(tempMarks.Electronic_Devices_And_Circuits_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Electronic_Devices_And_Circuits_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Electronic_Devices_And_Circuits_Practical_Assesment<10){flag0 = 1;}
            if(tempMarks.Digital_Logic_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Digital_Logic_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Digital_Logic_Practical_Assesment<20){flag0 = 1;}
            if(tempMarks.Electromagnetics_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Electromagnetics_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Electromagnetics_Practical_Assesment<10){flag0 = 1;}

            if(flag0 == 1){
                ssReportCard.result = "Fail";
            }else{
                ssReportCard.result = "Pass";
                percentage = 100*(
                    tempMarks.Engineering_Mathematics_III_Theory_Assesment+
                    tempMarks.Engineering_Mathematics_III_Theory_Final+
                    tempMarks.Object_Oriented_Programming_Theory_Assesment+
                    tempMarks.Object_Oriented_Programming_Theory_Final+
                    tempMarks.Object_Oriented_Programming_Practical_Assesment+
                    tempMarks.Theory_Of_Computation_Theory_Assesment+
                    tempMarks.Theory_Of_Computation_Theory_Final+
                    tempMarks.Electric_Circuit_Theory_Theory_Assesment+
                    tempMarks.Electric_Circuit_Theory_Theory_Final+
                    tempMarks.Electric_Circuit_Theory_Practical_Assesment+
                    tempMarks.Electronic_Devices_And_Circuits_Theory_Assesment+
                    tempMarks.Electronic_Devices_And_Circuits_Theory_Final+
                    tempMarks.Electronic_Devices_And_Circuits_Practical_Assesment+
                    tempMarks.Digital_Logic_Theory_Assesment+
                    tempMarks.Digital_Logic_Theory_Final+
                    tempMarks.Digital_Logic_Practical_Assesment+
                    tempMarks.Electromagnetics_Theory_Assesment+
                    tempMarks.Electromagnetics_Theory_Final+
                    tempMarks.Electromagnetics_Practical_Assesment
                )/875;
            }
            
            ssReportCard.thirdSemesterMarks = tempMarks;
            
            var tempDetails = factory.newConcept(NS2, 'StudentDetails');
            if(tempRecordForExtraction.studentDetails.firstName == reportCard.studentDetails.firstName && tempRecordForExtraction.studentDetails.lastName == reportCard.studentDetails.lastName && tempRecordForExtraction.studentDetails.enrolledCollege == reportCard.studentDetails.enrolledCollege){
                tempDetails.registrationNumber = reportCard.studentDetails.registrationNumber;
                tempDetails.firstName = reportCard.studentDetails.firstName;
                tempDetails.lastName = reportCard.studentDetails.lastName;
                tempDetails.faculty = "BCT";
                tempDetails.enrolledCollege = reportCard.studentDetails.enrolledCollege;

                ssReportCard.studentDetails = tempDetails;
            }else{
                throw new Error('Student details does not match to any record. Please provide correct details.');
            }

            //
            var tempRelationship = factory.newRelationship(NS,'Record',reportCard.studentDetails.registrationNumber);
            ssReportCard.record = tempRelationship;
        }
        return ssReportCard;
    }).then(function(ssReportCard){

        var recordRegistry={};
        return getAssetRegistry('org.studentrecord.reportcard.ThirdSemesterReportCard').then(function(tempRecordRegistry){
            return tempRecordRegistry.add(ssReportCard);
        }).then(function(){
            return getAssetRegistry('org.studentrecord.record.Record');
        }).then(function(tempRecordRegistry){
            recordRegistry = tempRecordRegistry;
            return tempRecordRegistry.get(reportCard.studentDetails.registrationNumber);
        }).then(function(tempRecord){
            if(flag0 == 1){
                tempRecord.thirdSemesterResult = "Fail";
            }else{
                tempRecord.thirdSemesterResult = "Pass";
                tempRecord.thirdSemesterPercentage = percentage.toFixed(2);
            }
            if(tempRecord.thirdSemesterReportId){
                tempRecord.thirdSemesterReportId.push(reportCard.reportId);
                return recordRegistry.update(tempRecord);
            }else{
                var tempArray = [reportCard.reportId];
                tempRecord.thirdSemesterReportId = tempArray;
                return recordRegistry.update(tempRecord);
            }
        });

    });

}


/**
 * This is the logic for the first semester report card.
 * @param {org.studentrecord.transactions.fourthSemesterReportCard} fourthSemesterReportCard
 * @transaction
 */
function fourthSemesterReportCard(reportCard){

    var factory = getFactory();
    var NS =  'org.studentrecord.record';
    var NS2 = 'org.studentrecord.reportcard';
    var flag0 = 0;
    var percentage = 0;
    var tempRecordForExtraction = {};

    return getAssetRegistry('org.studentrecord.record.Record').then(function(tempRecordRegistry){
        return tempRecordRegistry.get(reportCard.studentDetails.registrationNumber);
    }).then(function(tempRecord){
        tempRecordForExtraction = tempRecord;
        if(tempRecord.studentDetails.enrolledUniversity == "University A" && reportCard.universitySecret == "12345" || tempRecord.studentDetails.enrolledUniversity == "University B" && reportCard.universitySecret == "54321"){
            return tempRecord.fourthSemesterReportId;
        }else{
            throw new Error('This University is not allowed to modify the record '+tempRecord.registrationId +' .');
        }
    }).then(function(tempArray){
        if(tempArray!= null && tempArray.length>0){
            var tempArrayElement = tempArray[tempArray.length-1];
            return getAssetRegistry('org.studentrecord.reportcard.FourthSemesterReportCard').then(function(tempReportCardRegistry){
                return tempReportCardRegistry.get(tempArrayElement);
            }).then(function(tempReportCard){
                if(tempReportCard.result === 'Fail'){

                    var ssReportCard = factory.newResource(NS2, 'FourthSemesterReportCard', reportCard.reportId );
                    var tempMarks = factory.newConcept(NS2, 'FourthSemesterMarks');

                    if(tempReportCard.fourthSemesterMarks.Applied_Mathematics_Theory_Assesment<8){
                        tempMarks.Applied_Mathematics_Theory_Assesment = reportCard.FourthSemesterMarks.Applied_Mathematics_Theory_Assesment;
                    }else{
                        tempMarks.Applied_Mathematics_Theory_Assesment = tempReportCard.fourthSemesterMarks.Applied_Mathematics_Theory_Assesment;
                    }
                    if(tempReportCard.fourthSemesterMarks.Applied_Mathematics_Theory_Final<32){
                        tempMarks.Applied_Mathematics_Theory_Final = reportCard.FourthSemesterMarks.Applied_Mathematics_Theory_Final ;
                    }else{
                        tempMarks.Applied_Mathematics_Theory_Final = tempReportCard.fourthSemesterMarks.Applied_Mathematics_Theory_Final ;
                    }
                    if(tempReportCard.fourthSemesterMarks.Numerical_Method_Theory_Assesment<8){
                        tempMarks.Numerical_Method_Theory_Assesment = reportCard.FourthSemesterMarks.Numerical_Method_Theory_Assesment;
                    }else{
                        tempMarks.Numerical_Method_Theory_Assesment = tempReportCard.fourthSemesterMarks.Numerical_Method_Theory_Assesment;
                    }
                    if(tempReportCard.fourthSemesterMarks.Numerical_Method_Theory_Final<32){
                        tempMarks.Numerical_Method_Theory_Final = reportCard.FourthSemesterMarks.Numerical_Method_Theory_Final ;
                    }else{
                        tempMarks.Numerical_Method_Theory_Final = tempReportCard.fourthSemesterMarks.Numerical_Method_Theory_Final ;
                    }
                    if(tempReportCard.fourthSemesterMarks.Numerical_Method_Practical_Assesment<20){
                        tempMarks.Numerical_Method_Practical_Assesment = reportCard.FourthSemesterMarks.Numerical_Method_Practical_Assesment;
                    }else{
                        tempMarks.Numerical_Method_Practical_Assesment = tempReportCard.fourthSemesterMarks.Numerical_Method_Practical_Assesment;
                    }
                    if(tempReportCard.fourthSemesterMarks.Instrumentation_I_Theory_Assesment<8){
                        tempMarks.Instrumentation_I_Theory_Assesment = reportCard.FourthSemesterMarks.Instrumentation_I_Theory_Assesment;
                    }else{
                        tempMarks.Instrumentation_I_Theory_Assesment = tempReportCard.fourthSemesterMarks.Instrumentation_I_Theory_Assesment;
                    }
                    if(tempReportCard.fourthSemesterMarks.Instrumentation_I_Theory_Final<32){
                        tempMarks.Instrumentation_I_Theory_Final = reportCard.FourthSemesterMarks.Instrumentation_I_Theory_Final ;
                    }else{
                        tempMarks.Instrumentation_I_Theory_Final = tempReportCard.fourthSemesterMarks.Instrumentation_I_Theory_Final ;
                    }
                    if(tempReportCard.fourthSemesterMarks.Instrumentation_I_Practical_Assesment<10){
                        tempMarks.Instrumentation_I_Practical_Assesment = reportCard.FourthSemesterMarks.Instrumentation_I_Practical_Assesment;
                    }else{
                        tempMarks.Instrumentation_I_Practical_Assesment = tempReportCard.fourthSemesterMarks.Instrumentation_I_Practical_Assesment;
                    }
                    if(tempReportCard.fourthSemesterMarks.Electrical_Machines_Theory_Assesment<8){
                        tempMarks.Electrical_Machines_Theory_Assesment = reportCard.FourthSemesterMarks.Electrical_Machines_Theory_Assesment;
                    }else{
                        tempMarks.Electrical_Machines_Theory_Assesment = tempReportCard.fourthSemesterMarks.Electrical_Machines_Theory_Assesment;
                    }
                    if(tempReportCard.fourthSemesterMarks.Electrical_Machines_Theory_Final<32){
                        tempMarks.Electrical_Machines_Theory_Final = reportCard.FourthSemesterMarks.Electrical_Machines_Theory_Final ;
                    }else{
                        tempMarks.Electrical_Machines_Theory_Final = tempReportCard.fourthSemesterMarks.Electrical_Machines_Theory_Final ;
                    }
                    if(tempReportCard.fourthSemesterMarks.Electrical_Machines_Practical_Assesment<10){
                        tempMarks.Electrical_Machines_Practical_Assesment = reportCard.FourthSemesterMarks.Electrical_Machines_Practical_Assesment;
                    }else{
                        tempMarks.Electrical_Machines_Practical_Assesment = tempReportCard.fourthSemesterMarks.Electrical_Machines_Practical_Assesment;
                    }
                    if(tempReportCard.fourthSemesterMarks.Discrete_Structure_Theory_Assesment<8){
                        tempMarks.Discrete_Structure_Theory_Assesment = reportCard.FourthSemesterMarks.Discrete_Structure_Theory_Assesment;
                    }else{
                        tempMarks.Discrete_Structure_Theory_Assesment = tempReportCard.fourthSemesterMarks.Discrete_Structure_Theory_Assesment;
                    }
                    if(tempReportCard.fourthSemesterMarks.Discrete_Structure_Theory_Final<32){
                        tempMarks.Discrete_Structure_Theory_Final = reportCard.FourthSemesterMarks.Discrete_Structure_Theory_Final;
                    }else{
                        tempMarks.Discrete_Structure_Theory_Final = tempReportCard.fourthSemesterMarks.Discrete_Structure_Theory_Final;
                    }
                    if(tempReportCard.fourthSemesterMarks.Data_Structure_And_Algorithm_Theory_Assesment<8){
                        tempMarks.Data_Structure_And_Algorithm_Theory_Assesment = reportCard.FourthSemesterMarks.Data_Structure_And_Algorithm_Theory_Assesment;
                    }else{
                        tempMarks.Data_Structure_And_Algorithm_Theory_Assesment = tempReportCard.fourthSemesterMarks.Data_Structure_And_Algorithm_Theory_Assesment;
                    }
                    if(tempReportCard.fourthSemesterMarks.Data_Structure_And_Algorithm_Theory_Final<32){
                        tempMarks.Data_Structure_And_Algorithm_Theory_Final = reportCard.FourthSemesterMarks.Data_Structure_And_Algorithm_Theory_Final;
                    }else{
                        tempMarks.Data_Structure_And_Algorithm_Theory_Final = tempReportCard.fourthSemesterMarks.Data_Structure_And_Algorithm_Theory_Final;
                    }
                    if(tempReportCard.fourthSemesterMarks.Data_Structure_And_Algorithm_Practical_Assesment<20){
                        tempMarks.Data_Structure_And_Algorithm_Practical_Assesment = reportCard.FourthSemesterMarks.Data_Structure_And_Algorithm_Practical_Assesment;
                    }else{
                        tempMarks.Data_Structure_And_Algorithm_Practical_Assesment = tempReportCard.fourthSemesterMarks.Data_Structure_And_Algorithm_Practical_Assesment;
                    }
                    if(tempReportCard.fourthSemesterMarks.Microprocessor_Theory_Assesment<8){
                        tempMarks.Microprocessor_Theory_Assesment = reportCard.FourthSemesterMarks.Microprocessor_Theory_Assesment;
                    }else{
                        tempMarks.Microprocessor_Theory_Assesment = tempReportCard.fourthSemesterMarks.Microprocessor_Theory_Assesment;
                    }
                    if(tempReportCard.fourthSemesterMarks.Microprocessor_Theory_Final<32){
                        tempMarks.Microprocessor_Theory_Final = reportCard.FourthSemesterMarks.Microprocessor_Theory_Final;
                    }else{
                        tempMarks.Microprocessor_Theory_Final = tempReportCard.fourthSemesterMarks.Microprocessor_Theory_Final;
                    }
                    if(tempReportCard.fourthSemesterMarks.Microprocessor_Practical_Assesment<20){
                        tempMarks.Microprocessor_Practical_Assesment = reportCard.FourthSemesterMarks.Microprocessor_Practical_Assesment;
                    }else{
                        tempMarks.Microprocessor_Practical_Assesment = tempReportCard.fourthSemesterMarks.Microprocessor_Practical_Assesment;
                    }

                    ssReportCard.fourthSemesterMarks = tempMarks;

                    if(tempMarks.Applied_Mathematics_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Applied_Mathematics_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Numerical_Method_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Numerical_Method_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Numerical_Method_Practical_Assesment<20){flag0 = 1;}
                    if(tempMarks.Instrumentation_I_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Instrumentation_I_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Instrumentation_I_Practical_Assesment<10){flag0 = 1;}
                    if(tempMarks.Electrical_Machines_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Electrical_Machines_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Electrical_Machines_Practical_Assesment<10){flag0 = 1;}
                    if(tempMarks.Discrete_Structure_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Discrete_Structure_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Data_Structure_And_Algorithm_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Data_Structure_And_Algorithm_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Data_Structure_And_Algorithm_Practical_Assesment<20){flag0 = 1;}
                    if(tempMarks.Microprocessor_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Microprocessor_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Microprocessor_Practical_Assesment<20){flag0 = 1;}
        
                    if(flag0 == 1){
                        ssReportCard.result = "Fail";
                    }else{
                        ssReportCard.result = "Pass";
                        percentage = 100*(
                            tempMarks.Applied_Mathematics_Theory_Assesment+
                            tempMarks.Applied_Mathematics_Theory_Final+
                            tempMarks.Numerical_Method_Theory_Assesment+
                            tempMarks.Numerical_Method_Theory_Final+
                            tempMarks.Numerical_Method_Practical_Assesment+
                            tempMarks.Instrumentation_I_Theory_Assesment+
                            tempMarks.Instrumentation_I_Theory_Final+
                            tempMarks.Instrumentation_I_Practical_Assesment+
                            tempMarks.Electrical_Machines_Theory_Assesment+
                            tempMarks.Electrical_Machines_Theory_Final+
                            tempMarks.Electrical_Machines_Practical_Assesment+
                            tempMarks.Discrete_Structure_Theory_Assesment+
                            tempMarks.Discrete_Structure_Theory_Final+
                            tempMarks.Data_Structure_And_Algorithm_Theory_Assesment+
                            tempMarks.Data_Structure_And_Algorithm_Theory_Final+
                            tempMarks.Data_Structure_And_Algorithm_Practical_Assesment+
                            tempMarks.Microprocessor_Theory_Assesment+
                            tempMarks.Microprocessor_Theory_Final+
                            tempMarks.Microprocessor_Practical_Assesment
                        )/900;
                    }
                    
                    var tempDetails = factory.newConcept(NS2, 'StudentDetails');
                    if(tempRecordForExtraction.studentDetails.firstName == reportCard.studentDetails.firstName && tempRecordForExtraction.studentDetails.lastName == reportCard.studentDetails.lastName && tempRecordForExtraction.studentDetails.enrolledCollege == reportCard.studentDetails.enrolledCollege){
                        tempDetails.registrationNumber = reportCard.studentDetails.registrationNumber;
                        tempDetails.firstName = reportCard.studentDetails.firstName;
                        tempDetails.lastName = reportCard.studentDetails.lastName;
                        tempDetails.faculty = "BCT";
                        tempDetails.enrolledCollege = reportCard.studentDetails.enrolledCollege;

                        ssReportCard.studentDetails = tempDetails;
                    }else{
                        throw new Error('Student details does not match to any record. Please provide correct details.');
                    }

                    //
                    var tempRelationship = factory.newRelationship(NS,'Record',reportCard.studentDetails.registrationNumber);
                    ssReportCard.record = tempRelationship;
                    return ssReportCard;
                }else{
                    throw new Error('Student '+ reportCard.studentDetails.registrationNumber +' already passed fourth semester');
                }
            });
        }else{
            var ssReportCard = factory.newResource(NS2, 'FourthSemesterReportCard', reportCard.reportId );
            var tempMarks = factory.newConcept(NS2, 'FourthSemesterMarks');

            tempMarks.Applied_Mathematics_Theory_Assesment = reportCard.FourthSemesterMarks.Applied_Mathematics_Theory_Assesment;
            tempMarks.Applied_Mathematics_Theory_Final = reportCard.FourthSemesterMarks.Applied_Mathematics_Theory_Final ;
            tempMarks.Numerical_Method_Theory_Assesment = reportCard.FourthSemesterMarks.Numerical_Method_Theory_Assesment;
            tempMarks.Numerical_Method_Theory_Final = reportCard.FourthSemesterMarks.Numerical_Method_Theory_Final ;
            tempMarks.Numerical_Method_Practical_Assesment = reportCard.FourthSemesterMarks.Numerical_Method_Practical_Assesment;
            tempMarks.Instrumentation_I_Theory_Assesment = reportCard.FourthSemesterMarks.Instrumentation_I_Theory_Assesment;
            tempMarks.Instrumentation_I_Theory_Final = reportCard.FourthSemesterMarks.Instrumentation_I_Theory_Final ;
            tempMarks.Instrumentation_I_Practical_Assesment = reportCard.FourthSemesterMarks.Instrumentation_I_Practical_Assesment;
            tempMarks.Electrical_Machines_Theory_Assesment = reportCard.FourthSemesterMarks.Electrical_Machines_Theory_Assesment;
            tempMarks.Electrical_Machines_Theory_Final = reportCard.FourthSemesterMarks.Electrical_Machines_Theory_Final ;
            tempMarks.Electrical_Machines_Practical_Assesment = reportCard.FourthSemesterMarks.Electrical_Machines_Practical_Assesment;
            tempMarks.Discrete_Structure_Theory_Assesment = reportCard.FourthSemesterMarks.Discrete_Structure_Theory_Assesment;
            tempMarks.Discrete_Structure_Theory_Final = reportCard.FourthSemesterMarks.Discrete_Structure_Theory_Final;
            tempMarks.Data_Structure_And_Algorithm_Theory_Assesment = reportCard.FourthSemesterMarks.Data_Structure_And_Algorithm_Theory_Assesment;
            tempMarks.Data_Structure_And_Algorithm_Theory_Final = reportCard.FourthSemesterMarks.Data_Structure_And_Algorithm_Theory_Final;
            tempMarks.Data_Structure_And_Algorithm_Practical_Assesment = reportCard.FourthSemesterMarks.Data_Structure_And_Algorithm_Practical_Assesment;
            tempMarks.Microprocessor_Theory_Assesment = reportCard.FourthSemesterMarks.Microprocessor_Theory_Assesment;
            tempMarks.Microprocessor_Theory_Final = reportCard.FourthSemesterMarks.Microprocessor_Theory_Final;
            tempMarks.Microprocessor_Practical_Assesment = reportCard.FourthSemesterMarks.Microprocessor_Practical_Assesment;

            if(tempMarks.Applied_Mathematics_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Applied_Mathematics_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Numerical_Method_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Numerical_Method_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Numerical_Method_Practical_Assesment<20){flag0 = 1;}
            if(tempMarks.Instrumentation_I_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Instrumentation_I_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Instrumentation_I_Practical_Assesment<10){flag0 = 1;}
            if(tempMarks.Electrical_Machines_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Electrical_Machines_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Electrical_Machines_Practical_Assesment<10){flag0 = 1;}
            if(tempMarks.Discrete_Structure_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Discrete_Structure_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Data_Structure_And_Algorithm_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Data_Structure_And_Algorithm_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Data_Structure_And_Algorithm_Practical_Assesment<20){flag0 = 1;}
            if(tempMarks.Microprocessor_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Microprocessor_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Microprocessor_Practical_Assesment<20){flag0 = 1;}

            if(flag0 == 1){
                ssReportCard.result = "Fail";
            }else{
                ssReportCard.result = "Pass";
                percentage = 100*(
                    tempMarks.Applied_Mathematics_Theory_Assesment+
                    tempMarks.Applied_Mathematics_Theory_Final+
                    tempMarks.Numerical_Method_Theory_Assesment+
                    tempMarks.Numerical_Method_Theory_Final+
                    tempMarks.Numerical_Method_Practical_Assesment+
                    tempMarks.Instrumentation_I_Theory_Assesment+
                    tempMarks.Instrumentation_I_Theory_Final+
                    tempMarks.Instrumentation_I_Practical_Assesment+
                    tempMarks.Electrical_Machines_Theory_Assesment+
                    tempMarks.Electrical_Machines_Theory_Final+
                    tempMarks.Electrical_Machines_Practical_Assesment+
                    tempMarks.Discrete_Structure_Theory_Assesment+
                    tempMarks.Discrete_Structure_Theory_Final+
                    tempMarks.Data_Structure_And_Algorithm_Theory_Assesment+
                    tempMarks.Data_Structure_And_Algorithm_Theory_Final+
                    tempMarks.Data_Structure_And_Algorithm_Practical_Assesment+
                    tempMarks.Microprocessor_Theory_Assesment+
                    tempMarks.Microprocessor_Theory_Final+
                    tempMarks.Microprocessor_Practical_Assesment
                )/900;
            }
            

            ssReportCard.fourthSemesterMarks = tempMarks;
            
            var tempDetails = factory.newConcept(NS2, 'StudentDetails');
            if(tempRecordForExtraction.studentDetails.firstName == reportCard.studentDetails.firstName && tempRecordForExtraction.studentDetails.lastName == reportCard.studentDetails.lastName && tempRecordForExtraction.studentDetails.enrolledCollege == reportCard.studentDetails.enrolledCollege){
                tempDetails.registrationNumber = reportCard.studentDetails.registrationNumber;
                tempDetails.firstName = reportCard.studentDetails.firstName;
                tempDetails.lastName = reportCard.studentDetails.lastName;
                tempDetails.faculty = "BCT";
                tempDetails.enrolledCollege = reportCard.studentDetails.enrolledCollege;

                ssReportCard.studentDetails = tempDetails;
            }else{
                throw new Error('Student details does not match to any record. Please provide correct details.');
            }

            //
            var tempRelationship = factory.newRelationship(NS,'Record',reportCard.studentDetails.registrationNumber);
            ssReportCard.record = tempRelationship;

        }
        return ssReportCard;
    }).then(function(ssReportCard){

        var recordRegistry={};
        return getAssetRegistry('org.studentrecord.reportcard.FourthSemesterReportCard').then(function(tempRecordRegistry){
            return tempRecordRegistry.add(ssReportCard);
        }).then(function(){
            return getAssetRegistry('org.studentrecord.record.Record');
        }).then(function(tempRecordRegistry){
            recordRegistry = tempRecordRegistry;
            return tempRecordRegistry.get(reportCard.studentDetails.registrationNumber);
        }).then(function(tempRecord){
            if(flag0 == 1){
                tempRecord.fourthSemesterResult = "Fail";
            }else{
                tempRecord.fourthSemesterResult = "Pass";
                tempRecord.fourthSemesterPercentage = percentage.toFixed(2);
            }
            if(tempRecord.fourthSemesterReportId){
                tempRecord.fourthSemesterReportId.push(reportCard.reportId);
                return recordRegistry.update(tempRecord);
            }else{
                var tempArray = [reportCard.reportId];
                tempRecord.fourthSemesterReportId = tempArray;
                return recordRegistry.update(tempRecord);
            }
        });

    });

}


/**
 * This is the logic for the application.
 * @param {org.studentrecord.transactions.fifthSemesterReportCard} fifthSemesterReportCard
 * @transaction
 */
function fifthSemesterReportCard(reportCard){


    var factory = getFactory();
    var NS =  'org.studentrecord.record';
    var NS2 = 'org.studentrecord.reportcard';
    var flag0 = 0;
    var percentage = 0;
    var tempRecordForExtraction = {};


    return getAssetRegistry('org.studentrecord.record.Record').then(function(tempRecordRegistry){
        return tempRecordRegistry.get(reportCard.studentDetails.registrationNumber);
    }).then(function(tempRecord){
        tempRecordForExtraction = tempRecord;
        if(tempRecord.studentDetails.enrolledUniversity == "University A" && reportCard.universitySecret == "12345" || tempRecord.studentDetails.enrolledUniversity == "University B" && reportCard.universitySecret == "54321"){
            return tempRecord.fifthSemesterReportId;
        }else{
            throw new Error('This University is not allowed to modify the record '+tempRecord.registrationId +' .');
        }
    }).then(function(tempArray){
        if(tempArray!= null && tempArray.length>0){
            var tempArrayElement = tempArray[tempArray.length-1];
            return getAssetRegistry('org.studentrecord.reportcard.FifthSemesterReportCard').then(function(tempReportCardRegistry){
                return tempReportCardRegistry.get(tempArrayElement);
            }).then(function(tempReportCard){
                if(tempReportCard.result === 'Fail'){

                    var ssReportCard = factory.newResource(NS2, 'FifthSemesterReportCard', reportCard.reportId );
                    var tempMarks = factory.newConcept(NS2, 'FifthSemesterMarks');

                    if(tempReportCard.fifthSemesterMarks.Communication_English_Theory_Assesment<8){
                        tempMarks.Communication_English_Theory_Assesment = reportCard.FifthSemesterMarks.Communication_English_Theory_Assesment;
                    }else{
                        tempMarks.Communication_English_Theory_Assesment = tempReportCard.fifthSemesterMarks.Communication_English_Theory_Assesment;
                    }
                    if(tempReportCard.fifthSemesterMarks.Communication_English_Theory_Final<32){
                        tempMarks.Communication_English_Theory_Final = reportCard.FifthSemesterMarks.Communication_English_Theory_Final ;
                    }else{
                        tempMarks.Communication_English_Theory_Final = tempReportCard.fifthSemesterMarks.Communication_English_Theory_Final ;
                    }
                    if(tempReportCard.fifthSemesterMarks.Communication_English_Practical_Assesment<10){
                        tempMarks.Communication_English_Practical_Assesment = reportCard.FifthSemesterMarks.Communication_English_Practical_Assesment;
                    }else{
                        tempMarks.Communication_English_Practical_Assesment = tempReportCard.fifthSemesterMarks.Communication_English_Practical_Assesment;
                    }
                    if(tempReportCard.fifthSemesterMarks.Probablity_And_Statistics_Theory_Assesment<8){
                        tempMarks.Probablity_And_Statistics_Theory_Assesment =  reportCard.FifthSemesterMarks.Probablity_And_Statistics_Theory_Assesment;
                    }else{
                        tempMarks.Probablity_And_Statistics_Theory_Assesment =  tempReportCard.fifthSemesterMarks.Probablity_And_Statistics_Theory_Assesment;
                    }
                    if(tempReportCard.fifthSemesterMarks.Probablity_And_Statistics_Theory_Final<32){
                        tempMarks.Probablity_And_Statistics_Theory_Final = reportCard.FifthSemesterMarks.Probablity_And_Statistics_Theory_Final;
                    }else{
                        tempMarks.Probablity_And_Statistics_Theory_Final = tempReportCard.fifthSemesterMarks.Probablity_And_Statistics_Theory_Final;
                    }
                    if(tempReportCard.fifthSemesterMarks.Software_Engineering_Theory_Assesment<8){
                        tempMarks.Software_Engineering_Theory_Assesment = reportCard.FifthSemesterMarks.Software_Engineering_Theory_Assesment;
                    }else{
                        tempMarks.Software_Engineering_Theory_Assesment = tempReportCard.fifthSemesterMarks.Software_Engineering_Theory_Assesment;
                    }
                    if(tempReportCard.fifthSemesterMarks.Software_Engineering_Theory_Final<32){
                        tempMarks.Software_Engineering_Theory_Final = reportCard.FifthSemesterMarks.Software_Engineering_Theory_Final;
                    }else{
                        tempMarks.Software_Engineering_Theory_Final = tempReportCard.fifthSemesterMarks.Software_Engineering_Theory_Final;
                    }
                    if(tempReportCard.fifthSemesterMarks.Software_Engineering_Practical_Assesment<10){
                        tempMarks.Software_Engineering_Practical_Assesment = reportCard.FifthSemesterMarks.Software_Engineering_Practical_Assesment;
                    }else{
                        tempMarks.Software_Engineering_Practical_Assesment = tempReportCard.fifthSemesterMarks.Software_Engineering_Practical_Assesment;
                    }
                    if(tempReportCard.fifthSemesterMarks.Data_Communication_Theory_Assesment<8){
                        tempMarks.Data_Communication_Theory_Assesment = reportCard.FifthSemesterMarks.Data_Communication_Theory_Assesment;
                    }else{
                        tempMarks.Data_Communication_Theory_Assesment = tempReportCard.fifthSemesterMarks.Data_Communication_Theory_Assesment;
                    }
                    if(tempReportCard.fifthSemesterMarks.Data_Communication_Theory_Final<32){
                        tempMarks.Data_Communication_Theory_Final = reportCard.FifthSemesterMarks.Data_Communication_Theory_Final ;
                    }else{
                        tempMarks.Data_Communication_Theory_Final = tempReportCard.fifthSemesterMarks.Data_Communication_Theory_Final ;
                    }
                    if(tempReportCard.fifthSemesterMarks.Data_Communication_Practical_Assesment<10){
                        tempMarks.Data_Communication_Practical_Assesment = reportCard.FifthSemesterMarks.Data_Communication_Practical_Assesment;
                    }else{
                        tempMarks.Data_Communication_Practical_Assesment = tempReportCard.fifthSemesterMarks.Data_Communication_Practical_Assesment;
                    }
                    if(tempReportCard.fifthSemesterMarks.Computer_Organization_And_Architecture_Theory_Assesment<8){
                        tempMarks.Computer_Organization_And_Architecture_Theory_Assesment = reportCard.FifthSemesterMarks.Computer_Organization_And_Architecture_Theory_Assesment;
                    }else{
                        tempMarks.Computer_Organization_And_Architecture_Theory_Assesment = tempReportCard.fifthSemesterMarks.Computer_Organization_And_Architecture_Theory_Assesment;
                    }
                    if(tempReportCard.fifthSemesterMarks.Computer_Organization_And_Architecture_Theory_Final<32){
                        tempMarks.Computer_Organization_And_Architecture_Theory_Final = reportCard.FifthSemesterMarks.Computer_Organization_And_Architecture_Theory_Final;
                    }else{
                        tempMarks.Computer_Organization_And_Architecture_Theory_Final =tempReportCard.fifthSemesterMarks.Computer_Organization_And_Architecture_Theory_Final;
                    }
                    if(tempReportCard.fifthSemesterMarks.Computer_Organization_And_Architecture_Practical_Assesment<10){
                        tempMarks.Computer_Organization_And_Architecture_Practical_Assesment = reportCard.FifthSemesterMarks.Computer_Organization_And_Architecture_Practical_Assesment;
                    }else{
                        tempMarks.Computer_Organization_And_Architecture_Practical_Assesment = tempReportCard.fifthSemesterMarks.Computer_Organization_And_Architecture_Practical_Assesment;
                    }
                    if(tempReportCard.fifthSemesterMarks.Instrumentation_II_Theory_Assesment<8){
                        tempMarks.Instrumentation_II_Theory_Assesment = reportCard.FifthSemesterMarks.Instrumentation_II_Theory_Assesment;
                    }else{
                        tempMarks.Instrumentation_II_Theory_Assesment = tempReportCard.fifthSemesterMarks.Instrumentation_II_Theory_Assesment;
                    }
                    if(tempReportCard.fifthSemesterMarks.Instrumentation_II_Theory_Final<32){
                        tempMarks.Instrumentation_II_Theory_Final = reportCard.FifthSemesterMarks.Instrumentation_II_Theory_Final ;
                    }else{
                        tempMarks.Instrumentation_II_Theory_Final = tempReportCard.fifthSemesterMarks.Instrumentation_II_Theory_Final ;
                    }
                    if(tempReportCard.fifthSemesterMarks.Instrumentation_II_Practical_Assesment<10){
                        tempMarks.Instrumentation_II_Practical_Assesment = reportCard.FifthSemesterMarks.Instrumentation_II_Practical_Assesment;
                    }else{
                        tempMarks.Instrumentation_II_Practical_Assesment = tempReportCard.fifthSemesterMarks.Instrumentation_II_Practical_Assesment;
                    }
                    if(tempReportCard.fifthSemesterMarks.Computer_Graphics_Theory_Assesment<8){
                        tempMarks.Computer_Graphics_Theory_Assesment = reportCard.FifthSemesterMarks.Computer_Graphics_Theory_Assesment;
                    }else{
                        tempMarks.Computer_Graphics_Theory_Assesment = tempReportCard.fifthSemesterMarks.Computer_Graphics_Theory_Assesment;
                    }
                    if(tempReportCard.fifthSemesterMarks.Computer_Graphics_Theory_Final<32){
                        tempMarks.Computer_Graphics_Theory_Final = reportCard.FifthSemesterMarks.Computer_Graphics_Theory_Final ;
                    }else{
                        tempMarks.Computer_Graphics_Theory_Final = tempReportCard.fifthSemesterMarks.Computer_Graphics_Theory_Final ;
                    }
                    if(tempReportCard.fifthSemesterMarks.Computer_Graphics_Practical_Assesment<20){
                        tempMarks.Computer_Graphics_Practical_Assesment = reportCard.FifthSemesterMarks.Computer_Graphics_Practical_Assesment;
                    }else{
                        tempMarks.Computer_Graphics_Practical_Assesment = tempReportCard.fifthSemesterMarks.Computer_Graphics_Practical_Assesment;
                    }

                    ssReportCard.fifthSemesterMarks = tempMarks;

                    if(tempMarks.Communication_English_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Communication_English_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Communication_English_Practical_Assesment<10){flag0 = 1;}
                    if(tempMarks.Probablity_And_Statistics_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Probablity_And_Statistics_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Software_Engineering_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Software_Engineering_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Software_Engineering_Practical_Assesment<10){flag0 = 1;}
                    if(tempMarks.Data_Communication_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Data_Communication_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Data_Communication_Practical_Assesment<10){flag0 = 1;}
                    if(tempMarks.Computer_Organization_And_Architecture_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Computer_Organization_And_Architecture_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Computer_Organization_And_Architecture_Practical_Assesment<10){flag0 = 1;}
                    if(tempMarks.Instrumentation_II_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Instrumentation_II_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Instrumentation_II_Practical_Assesment<10){flag0 = 1;}
                    if(tempMarks.Computer_Graphics_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Computer_Graphics_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Computer_Graphics_Practical_Assesment<20){flag0 = 1;}
        
                    if(flag0 == 1){
                        ssReportCard.result = "Fail";
                    }else{
                        ssReportCard.result = "Pass";
                        percentage = 100*(
                            tempMarks.Communication_English_Theory_Assesment+
                            tempMarks.Communication_English_Theory_Final+
                            tempMarks.Communication_English_Practical_Assesment+
                            tempMarks.Probablity_And_Statistics_Theory_Assesment+
                            tempMarks.Probablity_And_Statistics_Theory_Final+
                            tempMarks.Software_Engineering_Theory_Assesment+
                            tempMarks.Software_Engineering_Theory_Final+
                            tempMarks.Software_Engineering_Practical_Assesment+
                            tempMarks.Data_Communication_Theory_Assesment+
                            tempMarks.Data_Communication_Theory_Final+
                            tempMarks.Data_Communication_Practical_Assesment+
                            tempMarks.Computer_Organization_And_Architecture_Theory_Assesment+
                            tempMarks.Computer_Organization_And_Architecture_Theory_Final+
                            tempMarks.Computer_Organization_And_Architecture_Practical_Assesment+
                            tempMarks.Instrumentation_II_Theory_Assesment+
                            tempMarks.Instrumentation_II_Theory_Final+
                            tempMarks.Instrumentation_II_Practical_Assesment+
                            tempMarks.Computer_Graphics_Theory_Assesment+
                            tempMarks.Computer_Graphics_Theory_Final+
                            tempMarks.Computer_Graphics_Practical_Assesment
                        )/875;
                    }
     
                    
                    var tempDetails = factory.newConcept(NS2, 'StudentDetails');
                    if(tempRecordForExtraction.studentDetails.firstName == reportCard.studentDetails.firstName && tempRecordForExtraction.studentDetails.lastName == reportCard.studentDetails.lastName && tempRecordForExtraction.studentDetails.enrolledCollege == reportCard.studentDetails.enrolledCollege){
                        tempDetails.registrationNumber = reportCard.studentDetails.registrationNumber;
                        tempDetails.firstName = reportCard.studentDetails.firstName;
                        tempDetails.lastName = reportCard.studentDetails.lastName;
                        tempDetails.faculty = "BCT";
                        tempDetails.enrolledCollege = reportCard.studentDetails.enrolledCollege;

                        ssReportCard.studentDetails = tempDetails;
                    }else{
                        throw new Error('Student details does not match to any record. Please provide correct details.');
                    }

                    //
                    var tempRelationship = factory.newRelationship(NS,'Record',reportCard.studentDetails.registrationNumber);
                    ssReportCard.record = tempRelationship;
                    return ssReportCard;
                }else{
                    throw new Error('Student '+ reportCard.studentDetails.registrationNumber +' already passed fifth semester.');
                }
            });
        }else{
            var ssReportCard = factory.newResource(NS2, 'FifthSemesterReportCard', reportCard.reportId );
            var tempMarks = factory.newConcept(NS2, 'FifthSemesterMarks');

            tempMarks.Communication_English_Theory_Assesment = reportCard.FifthSemesterMarks.Communication_English_Theory_Assesment;
            tempMarks.Communication_English_Theory_Final = reportCard.FifthSemesterMarks.Communication_English_Theory_Final ;
            tempMarks.Communication_English_Practical_Assesment = reportCard.FifthSemesterMarks.Communication_English_Practical_Assesment;
            tempMarks.Probablity_And_Statistics_Theory_Assesment =  reportCard.FifthSemesterMarks.Probablity_And_Statistics_Theory_Assesment;
            tempMarks.Probablity_And_Statistics_Theory_Final = reportCard.FifthSemesterMarks.Probablity_And_Statistics_Theory_Final;
            tempMarks.Software_Engineering_Theory_Assesment = reportCard.FifthSemesterMarks.Software_Engineering_Theory_Assesment;
            tempMarks.Software_Engineering_Theory_Final = reportCard.FifthSemesterMarks.Software_Engineering_Theory_Final;
            tempMarks.Software_Engineering_Practical_Assesment = reportCard.FifthSemesterMarks.Software_Engineering_Practical_Assesment;
            tempMarks.Data_Communication_Theory_Assesment = reportCard.FifthSemesterMarks.Data_Communication_Theory_Assesment;
            tempMarks.Data_Communication_Theory_Final = reportCard.FifthSemesterMarks.Data_Communication_Theory_Final ;
            tempMarks.Data_Communication_Practical_Assesment = reportCard.FifthSemesterMarks.Data_Communication_Practical_Assesment;
            tempMarks.Computer_Organization_And_Architecture_Theory_Assesment = reportCard.FifthSemesterMarks.Computer_Organization_And_Architecture_Theory_Assesment;
            tempMarks.Computer_Organization_And_Architecture_Theory_Final = reportCard.FifthSemesterMarks.Computer_Organization_And_Architecture_Theory_Final;
            tempMarks.Computer_Organization_And_Architecture_Practical_Assesment = reportCard.FifthSemesterMarks.Computer_Organization_And_Architecture_Practical_Assesment;
            tempMarks.Instrumentation_II_Theory_Assesment = reportCard.FifthSemesterMarks.Instrumentation_II_Theory_Assesment;
            tempMarks.Instrumentation_II_Theory_Final = reportCard.FifthSemesterMarks.Instrumentation_II_Theory_Final ;
            tempMarks.Instrumentation_II_Practical_Assesment = reportCard.FifthSemesterMarks.Instrumentation_II_Practical_Assesment;
            tempMarks.Computer_Graphics_Theory_Assesment = reportCard.FifthSemesterMarks.Computer_Graphics_Theory_Assesment;
            tempMarks.Computer_Graphics_Theory_Final = reportCard.FifthSemesterMarks.Computer_Graphics_Theory_Final ;
            tempMarks.Computer_Graphics_Practical_Assesment = reportCard.FifthSemesterMarks.Computer_Graphics_Practical_Assesment;


            if(tempMarks.Communication_English_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Communication_English_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Communication_English_Practical_Assesment<10){flag0 = 1;}
            if(tempMarks.Probablity_And_Statistics_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Probablity_And_Statistics_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Software_Engineering_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Software_Engineering_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Software_Engineering_Practical_Assesment<10){flag0 = 1;}
            if(tempMarks.Data_Communication_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Data_Communication_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Data_Communication_Practical_Assesment<10){flag0 = 1;}
            if(tempMarks.Computer_Organization_And_Architecture_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Computer_Organization_And_Architecture_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Computer_Organization_And_Architecture_Practical_Assesment<10){flag0 = 1;}
            if(tempMarks.Instrumentation_II_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Instrumentation_II_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Instrumentation_II_Practical_Assesment<10){flag0 = 1;}
            if(tempMarks.Computer_Graphics_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Computer_Graphics_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Computer_Graphics_Practical_Assesment<20){flag0 = 1;}

            if(flag0 == 1){
                ssReportCard.result = "Fail";
            }else{
                ssReportCard.result = "Pass";
                percentage = 100*(
                    tempMarks.Communication_English_Theory_Assesment+
                    tempMarks.Communication_English_Theory_Final+
                    tempMarks.Communication_English_Practical_Assesment+
                    tempMarks.Probablity_And_Statistics_Theory_Assesment+
                    tempMarks.Probablity_And_Statistics_Theory_Final+
                    tempMarks.Software_Engineering_Theory_Assesment+
                    tempMarks.Software_Engineering_Theory_Final+
                    tempMarks.Software_Engineering_Practical_Assesment+
                    tempMarks.Data_Communication_Theory_Assesment+
                    tempMarks.Data_Communication_Theory_Final+
                    tempMarks.Data_Communication_Practical_Assesment+
                    tempMarks.Computer_Organization_And_Architecture_Theory_Assesment+
                    tempMarks.Computer_Organization_And_Architecture_Theory_Final+
                    tempMarks.Computer_Organization_And_Architecture_Practical_Assesment+
                    tempMarks.Instrumentation_II_Theory_Assesment+
                    tempMarks.Instrumentation_II_Theory_Final+
                    tempMarks.Instrumentation_II_Practical_Assesment+
                    tempMarks.Computer_Graphics_Theory_Assesment+
                    tempMarks.Computer_Graphics_Theory_Final+
                    tempMarks.Computer_Graphics_Practical_Assesment
                )/875;
            }
        
            ssReportCard.fifthSemesterMarks = tempMarks;
            
        
            
            var tempDetails = factory.newConcept(NS2, 'StudentDetails');
            if(tempRecordForExtraction.studentDetails.firstName == reportCard.studentDetails.firstName && tempRecordForExtraction.studentDetails.lastName == reportCard.studentDetails.lastName && tempRecordForExtraction.studentDetails.enrolledCollege == reportCard.studentDetails.enrolledCollege){
                tempDetails.registrationNumber = reportCard.studentDetails.registrationNumber;
                tempDetails.firstName = reportCard.studentDetails.firstName;
                tempDetails.lastName = reportCard.studentDetails.lastName;
                tempDetails.faculty = "BCT";
                tempDetails.enrolledCollege = reportCard.studentDetails.enrolledCollege;

                ssReportCard.studentDetails = tempDetails;
            }else{
                throw new Error('Student details does not match to any record. Please provide correct details.');
            }

            //
            var tempRelationship = factory.newRelationship(NS,'Record',reportCard.studentDetails.registrationNumber);
            ssReportCard.record = tempRelationship;

        }
        return ssReportCard;
    }).then(function(ssReportCard){

        var recordRegistry={};
        return getAssetRegistry('org.studentrecord.reportcard.FifthSemesterReportCard').then(function(tempRecordRegistry){
            return tempRecordRegistry.add(ssReportCard);
        }).then(function(){
            return getAssetRegistry('org.studentrecord.record.Record');
        }).then(function(tempRecordRegistry){
            recordRegistry = tempRecordRegistry;
            return tempRecordRegistry.get(reportCard.studentDetails.registrationNumber);
        }).then(function(tempRecord){
            if(flag0 == 1){
                tempRecord.fifthSemesterResult = "Fail";
            }else{
                tempRecord.fifthSemesterResult = "Pass";
                tempRecord.fifthSemesterPercentage = percentage.toFixed(2);
            }
            if(tempRecord.fifthSemesterReportId){
                tempRecord.fifthSemesterReportId.push(reportCard.reportId);
                return recordRegistry.update(tempRecord);
            }else{
                var tempArray = [reportCard.reportId];
                tempRecord.fifthSemesterReportId = tempArray;
                return recordRegistry.update(tempRecord);
            }
        });

    });

}



/**
 * This is the logic for the application.
 * @param {org.studentrecord.transactions.sixthSemesterReportCard} sixthSemesterReportCard
 * @transaction
 */
function sixthSemesterReportCard(reportCard){


    var factory = getFactory();
    var NS =  'org.studentrecord.record';
    var NS2 = 'org.studentrecord.reportcard';
    var flag0 = 0;
    var percentage = 0;
    var tempRecordForExtraction = {};

    return getAssetRegistry('org.studentrecord.record.Record').then(function(tempRecordRegistry){
        return tempRecordRegistry.get(reportCard.studentDetails.registrationNumber);
    }).then(function(tempRecord){
        tempRecordForExtraction = tempRecord;
        if(tempRecord.studentDetails.enrolledUniversity == "University A" && reportCard.universitySecret == "12345" || tempRecord.studentDetails.enrolledUniversity == "University B" && reportCard.universitySecret == "54321"){
            return tempRecord.sixthSemesterReportId;
        }else{
            throw new Error('This University is not allowed to modify the record '+tempRecord.registrationId +' .');
        }
    }).then(function(tempArray){
        if(tempArray!= null && tempArray.length>0){
            var tempArrayElement = tempArray[tempArray.length-1];
            return getAssetRegistry('org.studentrecord.reportcard.SixthSemesterReportCard').then(function(tempReportCardRegistry){
                return tempReportCardRegistry.get(tempArrayElement);
            }).then(function(tempReportCard){
                if(tempReportCard.result == 'Fail'){

                    var ssReportCard = factory.newResource(NS2, 'SixthSemesterReportCard', reportCard.reportId );
                    var tempMarks = factory.newConcept(NS2, 'SixthSemesterMarks');

                    if(tempReportCard.sixthSemesterMarks.Engineering_Economics_Theory_Assesment<8){
                        tempMarks.Engineering_Economics_Theory_Assesment = reportCard.SixthSemesterMarks.Engineering_Economics_Theory_Assesment;
                    }else{
                        tempMarks.Engineering_Economics_Theory_Assesment = tempReportCard.sixthSemesterMarks.Engineering_Economics_Theory_Assesment;
                    }
                    if(tempReportCard.sixthSemesterMarks.Engineering_Economics_Theory_Final<32){
                        tempMarks.Engineering_Economics_Theory_Final = reportCard.SixthSemesterMarks.Engineering_Economics_Theory_Final ;
                    }else{
                        tempMarks.Engineering_Economics_Theory_Final = tempReportCard.sixthSemesterMarks.Engineering_Economics_Theory_Final ;
                    }
                    if(tempReportCard.sixthSemesterMarks.Object_Oriented_Analysis_And_Design_Theory_Assesment<8){
                        tempMarks.Object_Oriented_Analysis_And_Design_Theory_Assesment = reportCard.SixthSemesterMarks.Object_Oriented_Analysis_And_Design_Theory_Assesment ;
                    }else{
                        tempMarks.Object_Oriented_Analysis_And_Design_Theory_Assesment = tempReportCard.sixthSemesterMarks.Object_Oriented_Analysis_And_Design_Theory_Assesment ;
                    }
                    if(tempReportCard.sixthSemesterMarks.Object_Oriented_Analysis_And_Design_Theory_Final<32){
                        tempMarks.Object_Oriented_Analysis_And_Design_Theory_Final = reportCard.SixthSemesterMarks.Object_Oriented_Analysis_And_Design_Theory_Final ;
                    }else{
                        tempMarks.Object_Oriented_Analysis_And_Design_Theory_Final = tempReportCard.sixthSemesterMarks.Object_Oriented_Analysis_And_Design_Theory_Final ;
                    }
                    if(tempReportCard.sixthSemesterMarks.Object_Oriented_Analysis_And_Design_Practical_Assesment<10){
                        tempMarks.Object_Oriented_Analysis_And_Design_Practical_Assesment = reportCard.SixthSemesterMarks.Object_Oriented_Analysis_And_Design_Practical_Assesment;
                    }else{
                        tempMarks.Object_Oriented_Analysis_And_Design_Practical_Assesment = tempReportCard.sixthSemesterMarks.Object_Oriented_Analysis_And_Design_Practical_Assesment;
                    }
                    if(tempReportCard.sixthSemesterMarks.Database_Management_System_Theory_Assesment<8){
                        tempMarks.Database_Management_System_Theory_Assesment = reportCard.SixthSemesterMarks.Database_Management_System_Theory_Assesment;
                    }else{
                        tempMarks.Database_Management_System_Theory_Assesment = tempReportCard.sixthSemesterMarks.Database_Management_System_Theory_Assesment;
                    }
                    if(tempReportCard.sixthSemesterMarks.Database_Management_System_Theory_Final<32){
                        tempMarks.Database_Management_System_Theory_Final = reportCard.SixthSemesterMarks.Database_Management_System_Theory_Final ;
                    }else{
                        tempMarks.Database_Management_System_Theory_Final = tempReportCard.sixthSemesterMarks.Database_Management_System_Theory_Final ;
                    }
                    if(tempReportCard.sixthSemesterMarks.Database_Management_System_Practical_Assesment<20){
                        tempMarks.Database_Management_System_Practical_Assesment = reportCard.SixthSemesterMarks.Database_Management_System_Practical_Assesment;
                    }else{
                        tempMarks.Database_Management_System_Practical_Assesment = tempReportCard.sixthSemesterMarks.Database_Management_System_Practical_Assesment;
                    }
                    if(tempReportCard.sixthSemesterMarks.Artificial_Intellegence_Theory_Assesment<8){
                        tempMarks.Artificial_Intellegence_Theory_Assesment = reportCard.SixthSemesterMarks.Artificial_Intellegence_Theory_Assesment;
                    }else{
                        tempMarks.Artificial_Intellegence_Theory_Assesment = tempReportCard.sixthSemesterMarks.Artificial_Intellegence_Theory_Assesment;
                    }
                    if(tempReportCard.sixthSemesterMarks.Artificial_Intellegence_Theory_Final<32){
                        tempMarks.Artificial_Intellegence_Theory_Final = reportCard.SixthSemesterMarks.Artificial_Intellegence_Theory_Final ;
                    }else{
                        tempMarks.Artificial_Intellegence_Theory_Final = tempReportCard.sixthSemesterMarks.Artificial_Intellegence_Theory_Final ;
                    }
                    if(tempReportCard.sixthSemesterMarks.Artificial_Intellegence_Practical_Assesment<10){
                        tempMarks.Artificial_Intellegence_Practical_Assesment = reportCard.SixthSemesterMarks.Artificial_Intellegence_Practical_Assesment;
                    }else{
                        tempMarks.Artificial_Intellegence_Practical_Assesment = tempReportCard.sixthSemesterMarks.Artificial_Intellegence_Practical_Assesment;
                    }
                    if(tempReportCard.sixthSemesterMarks.Embedded_System_Theory_Assesment<8){
                        tempMarks.Embedded_System_Theory_Assesment = reportCard.SixthSemesterMarks.Embedded_System_Theory_Assesment;
                    }else{
                        tempMarks.Embedded_System_Theory_Assesment = tempReportCard.sixthSemesterMarks.Embedded_System_Theory_Assesment;
                    }
                    if(tempReportCard.sixthSemesterMarks.Embedded_System_Theory_Final<32){
                        tempMarks.Embedded_System_Theory_Final = reportCard.SixthSemesterMarks.Embedded_System_Theory_Final ;
                    }else{
                        tempMarks.Embedded_System_Theory_Final = tempReportCard.sixthSemesterMarks.Embedded_System_Theory_Final ;
                    }
                    if(tempReportCard.sixthSemesterMarks.Embedded_System_Practical_Assesment<10){
                        tempMarks.Embedded_System_Practical_Assesment = reportCard.SixthSemesterMarks.Embedded_System_Practical_Assesment;
                    }else{
                        tempMarks.Embedded_System_Practical_Assesment = tempReportCard.sixthSemesterMarks.Embedded_System_Practical_Assesment;
                    }
                    if(tempReportCard.sixthSemesterMarks.Operating_System_Theory_Assesment<8){
                        tempMarks.Operating_System_Theory_Assesment = reportCard.SixthSemesterMarks.Operating_System_Theory_Assesment;
                    }else{
                        tempMarks.Operating_System_Theory_Assesment = tempReportCard.sixthSemesterMarks.Operating_System_Theory_Assesment;
                    }
                    if(tempReportCard.sixthSemesterMarks.Operating_System_Theory_Final<32){
                        tempMarks.Operating_System_Theory_Final = reportCard.SixthSemesterMarks.Operating_System_Theory_Final;
                    }else{
                        tempMarks.Operating_System_Theory_Final = tempReportCard.sixthSemesterMarks.Operating_System_Theory_Final;
                    }
                    if(tempReportCard.sixthSemesterMarks.Operating_System_Practical_Assesment<10){
                        tempMarks.Operating_System_Practical_Assesment = reportCard.SixthSemesterMarks.Operating_System_Practical_Assesment;
                    }else{
                        tempMarks.Operating_System_Practical_Assesment = tempReportCard.sixthSemesterMarks.Operating_System_Practical_Assesment;
                    }
                    if(tempReportCard.sixthSemesterMarks.Minor_Project_Practical_Assesment<20){
                        tempMarks.Minor_Project_Practical_Assesment = reportCard.SixthSemesterMarks.Minor_Project_Practical_Assesment;
                    }else{
                        tempMarks.Minor_Project_Practical_Assesment = tempReportCard.sixthSemesterMarks.Minor_Project_Practical_Assesment;
                    }
                    if(tempReportCard.sixthSemesterMarks.Minor_Project_Practical_Final<10){
                        tempMarks.Minor_Project_Practical_Final = reportCard.SixthSemesterMarks.Minor_Project_Practical_Final;
                    }else{
                        tempMarks.Minor_Project_Practical_Final = tempReportCard.sixthSemesterMarks.Minor_Project_Practical_Final;
                    }
                    ssReportCard.sixthSemesterMarks = tempMarks;

                    if(tempMarks.Engineering_Economics_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Engineering_Economics_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Object_Oriented_Analysis_And_Design_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Object_Oriented_Analysis_And_Design_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Object_Oriented_Analysis_And_Design_Practical_Assesment<10){flag0 = 1;}
                    if(tempMarks.Database_Management_System_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Database_Management_System_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Database_Management_System_Practical_Assesment<20){flag0 = 1;}
                    if(tempMarks.Artificial_Intellegence_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Artificial_Intellegence_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Artificial_Intellegence_Practical_Assesment<10){flag0 = 1;}
                    if(tempMarks.Embedded_System_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Embedded_System_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Embedded_System_Practical_Assesment<10){flag0 = 1;}
                    if(tempMarks.Operating_System_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Operating_System_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Operating_System_Practical_Assesment<10){flag0 = 1;}
                    if(tempMarks.Minor_Project_Practical_Assesment<20){flag0 = 1;}
                    if(tempMarks.Minor_Project_Practical_Final<10){flag0 = 1;}
        
                    if(flag0 == 1){
                        ssReportCard.result = "Fail";
                    }else{
                        ssReportCard.result = "Pass";
                        percentage = 100*(
                            tempMarks.Engineering_Economics_Theory_Assesment+
                            tempMarks.Engineering_Economics_Theory_Final+
                            tempMarks.Object_Oriented_Analysis_And_Design_Theory_Assesment+
                            tempMarks.Object_Oriented_Analysis_And_Design_Theory_Final+
                            tempMarks.Object_Oriented_Analysis_And_Design_Practical_Assesment+
                            tempMarks.Database_Management_System_Theory_Assesment+
                            tempMarks.Database_Management_System_Theory_Final+
                            tempMarks.Database_Management_System_Practical_Assesment+
                            tempMarks.Artificial_Intellegence_Theory_Assesment+
                            tempMarks.Artificial_Intellegence_Theory_Final+
                            tempMarks.Artificial_Intellegence_Practical_Assesment+
                            tempMarks.Embedded_System_Theory_Assesment+
                            tempMarks.Embedded_System_Theory_Final+
                            tempMarks.Embedded_System_Practical_Assesment+
                            tempMarks.Operating_System_Theory_Assesment+
                            tempMarks.Operating_System_Theory_Final+
                            tempMarks.Operating_System_Practical_Assesment+
                            tempMarks.Minor_Project_Practical_Assesment+
                            tempMarks.Minor_Project_Practical_Final
                        )/825;
                    }

                    var tempDetails = factory.newConcept(NS2, 'StudentDetails');
                    if(tempRecordForExtraction.studentDetails.firstName == reportCard.studentDetails.firstName && tempRecordForExtraction.studentDetails.lastName == reportCard.studentDetails.lastName && tempRecordForExtraction.studentDetails.enrolledCollege == reportCard.studentDetails.enrolledCollege){
                        tempDetails.registrationNumber = reportCard.studentDetails.registrationNumber;
                        tempDetails.firstName = reportCard.studentDetails.firstName;
                        tempDetails.lastName = reportCard.studentDetails.lastName;
                        tempDetails.faculty = "BCT";
                        tempDetails.enrolledCollege = reportCard.studentDetails.enrolledCollege;

                        ssReportCard.studentDetails = tempDetails;
                    }else{
                        throw new Error('Student details does not match to any record. Please provide correct details.');
                    }

                    //
                    var tempRelationship = factory.newRelationship(NS,'Record',reportCard.studentDetails.registrationNumber);
                    ssReportCard.record = tempRelationship;
                }else{
                    throw new Error('Student '+reportCard.studentDetails.registrationNumber+' already passed sixth semester.');
                }

                return ssReportCard;
            });
        }else{
            var ssReportCard = factory.newResource(NS2, 'SixthSemesterReportCard', reportCard.reportId );
            var tempMarks = factory.newConcept(NS2, 'SixthSemesterMarks');

            tempMarks.Engineering_Economics_Theory_Assesment  =  reportCard.SixthSemesterMarks.Engineering_Economics_Theory_Assesment;
            tempMarks.Engineering_Economics_Theory_Final = reportCard.SixthSemesterMarks.Engineering_Economics_Theory_Final ;
            tempMarks.Object_Oriented_Analysis_And_Design_Theory_Assesment = reportCard.SixthSemesterMarks.Object_Oriented_Analysis_And_Design_Theory_Assesment ;
            tempMarks.Object_Oriented_Analysis_And_Design_Theory_Final = reportCard.SixthSemesterMarks.Object_Oriented_Analysis_And_Design_Theory_Final ;
            tempMarks.Object_Oriented_Analysis_And_Design_Practical_Assesment = reportCard.SixthSemesterMarks.Object_Oriented_Analysis_And_Design_Practical_Assesment;
            tempMarks.Database_Management_System_Theory_Assesment = reportCard.SixthSemesterMarks.Database_Management_System_Theory_Assesment;
            tempMarks.Database_Management_System_Theory_Final = reportCard.SixthSemesterMarks.Database_Management_System_Theory_Final ;
            tempMarks.Database_Management_System_Practical_Assesment = reportCard.SixthSemesterMarks.Database_Management_System_Practical_Assesment;
            tempMarks.Artificial_Intellegence_Theory_Assesment = reportCard.SixthSemesterMarks.Artificial_Intellegence_Theory_Assesment;
            tempMarks.Artificial_Intellegence_Theory_Final = reportCard.SixthSemesterMarks.Artificial_Intellegence_Theory_Final ;
            tempMarks.Artificial_Intellegence_Practical_Assesment = reportCard.SixthSemesterMarks.Artificial_Intellegence_Practical_Assesment;
            tempMarks.Embedded_System_Theory_Assesment = reportCard.SixthSemesterMarks.Embedded_System_Theory_Assesment;
            tempMarks.Embedded_System_Theory_Final = reportCard.SixthSemesterMarks.Embedded_System_Theory_Final ;
            tempMarks.Embedded_System_Practical_Assesment = reportCard.SixthSemesterMarks.Embedded_System_Practical_Assesment;
            tempMarks.Operating_System_Theory_Assesment = reportCard.SixthSemesterMarks.Operating_System_Theory_Assesment;
            tempMarks.Operating_System_Theory_Final = reportCard.SixthSemesterMarks.Operating_System_Theory_Final;
            tempMarks.Operating_System_Practical_Assesment = reportCard.SixthSemesterMarks.Operating_System_Practical_Assesment;
            tempMarks.Minor_Project_Practical_Assesment = reportCard.SixthSemesterMarks.Minor_Project_Practical_Assesment;
            tempMarks.Minor_Project_Practical_Final = reportCard.SixthSemesterMarks.Minor_Project_Practical_Final;


            if(tempMarks.Engineering_Economics_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Engineering_Economics_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Object_Oriented_Analysis_And_Design_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Object_Oriented_Analysis_And_Design_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Object_Oriented_Analysis_And_Design_Practical_Assesment<10){flag0 = 1;}
            if(tempMarks.Database_Management_System_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Database_Management_System_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Database_Management_System_Practical_Assesment<20){flag0 = 1;}
            if(tempMarks.Artificial_Intellegence_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Artificial_Intellegence_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Artificial_Intellegence_Practical_Assesment<10){flag0 = 1;}
            if(tempMarks.Embedded_System_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Embedded_System_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Embedded_System_Practical_Assesment<10){flag0 = 1;}
            if(tempMarks.Operating_System_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Operating_System_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Operating_System_Practical_Assesment<10){flag0 = 1;}
            if(tempMarks.Minor_Project_Practical_Assesment<20){flag0 = 1;}
            if(tempMarks.Minor_Project_Practical_Final<10){flag0 = 1;}

            if(flag0 == 1){
                ssReportCard.result = "Fail";
            }else{
                ssReportCard.result = "Pass";
                percentage = 100*(
                    tempMarks.Engineering_Economics_Theory_Assesment+
                    tempMarks.Engineering_Economics_Theory_Final+
                    tempMarks.Object_Oriented_Analysis_And_Design_Theory_Assesment+
                    tempMarks.Object_Oriented_Analysis_And_Design_Theory_Final+
                    tempMarks.Object_Oriented_Analysis_And_Design_Practical_Assesment+
                    tempMarks.Database_Management_System_Theory_Assesment+
                    tempMarks.Database_Management_System_Theory_Final+
                    tempMarks.Database_Management_System_Practical_Assesment+
                    tempMarks.Artificial_Intellegence_Theory_Assesment+
                    tempMarks.Artificial_Intellegence_Theory_Final+
                    tempMarks.Artificial_Intellegence_Practical_Assesment+
                    tempMarks.Embedded_System_Theory_Assesment+
                    tempMarks.Embedded_System_Theory_Final+
                    tempMarks.Embedded_System_Practical_Assesment+
                    tempMarks.Operating_System_Theory_Assesment+
                    tempMarks.Operating_System_Theory_Final+
                    tempMarks.Operating_System_Practical_Assesment+
                    tempMarks.Minor_Project_Practical_Assesment+
                    tempMarks.Minor_Project_Practical_Final
                )/825;
            }
            
            
            ssReportCard.sixthSemesterMarks = tempMarks;
            
            

            var tempDetails = factory.newConcept(NS2, 'StudentDetails');
            if(tempRecordForExtraction.studentDetails.firstName == reportCard.studentDetails.firstName && tempRecordForExtraction.studentDetails.lastName == reportCard.studentDetails.lastName && tempRecordForExtraction.studentDetails.enrolledCollege == reportCard.studentDetails.enrolledCollege){
                tempDetails.registrationNumber = reportCard.studentDetails.registrationNumber;
                tempDetails.firstName = reportCard.studentDetails.firstName;
                tempDetails.lastName = reportCard.studentDetails.lastName;
                tempDetails.faculty = "BCT";
                tempDetails.enrolledCollege = reportCard.studentDetails.enrolledCollege;

                ssReportCard.studentDetails = tempDetails;
            }else{
                throw new Error('Student details does not match to any record. Please provide correct details.');
            }

            //
            var tempRelationship = factory.newRelationship(NS,'Record',reportCard.studentDetails.registrationNumber);
            ssReportCard.record = tempRelationship;

        }
        return ssReportCard;
    }).then(function(ssReportCard){

        var recordRegistry={};
        return getAssetRegistry('org.studentrecord.reportcard.SixthSemesterReportCard').then(function(tempRecordRegistry){
            return tempRecordRegistry.add(ssReportCard);
        }).then(function(){
            return getAssetRegistry('org.studentrecord.record.Record');
        }).then(function(tempRecordRegistry){
            recordRegistry = tempRecordRegistry;
            return tempRecordRegistry.get(reportCard.studentDetails.registrationNumber);
        }).then(function(tempRecord){
            if(flag0 == 1){
                tempRecord.sixthSemesterResult = "Fail";
            }else{
                tempRecord.sixthSemesterResult = "Pass";
                tempRecord.sixthSemesterPercentage = percentage.toFixed(2);
            }
            if(tempRecord.sixthSemesterReportId){
                tempRecord.sixthSemesterReportId.push(reportCard.reportId);
                return recordRegistry.update(tempRecord);
            }else{
                var tempArray = [reportCard.reportId];
                tempRecord.sixthSemesterReportId = tempArray;
                return recordRegistry.update(tempRecord);
            }
        });

    });
}



/**
 * This is the logic for the application.
 * @param {org.studentrecord.transactions.seventhSemesterReportCard} seventhSemesterReportCard
 * @transaction
 */
function seventhSemesterReportCard(reportCard){

    var factory = getFactory();
    var NS =  'org.studentrecord.record';
    var NS2 = 'org.studentrecord.reportcard';
    var flag0 = 0;
    var percentage = 0;
    var tempRecordForExtraction = {};

    return getAssetRegistry('org.studentrecord.record.Record').then(function(tempRecordRegistry){
        return tempRecordRegistry.get(reportCard.studentDetails.registrationNumber);
    }).then(function(tempRecord){
        tempRecordForExtraction = tempRecord;
        if(tempRecord.studentDetails.enrolledUniversity == "University A" && reportCard.universitySecret == "12345" || tempRecord.studentDetails.enrolledUniversity == "University B" && reportCard.universitySecret == "54321"){
            return tempRecord.seventhSemesterReportId;
        }else{
            throw new Error('This University is not allowed to modify the record '+tempRecord.registrationId +' .');
        }
    }).then(function(tempArray){
        if(tempArray!= null && tempArray.length>0){
            var tempArrayElement = tempArray[tempArray.length-1];
            return getAssetRegistry('org.studentrecord.reportcard.SeventhSemesterReportCard').then(function(tempReportCardRegistry){
                return tempReportCardRegistry.get(tempArrayElement);
            }).then(function(tempReportCard){
                if(tempReportCard.result === 'Fail'){

                    var ssReportCard = factory.newResource(NS2, 'SeventhSemesterReportCard', reportCard.reportId );
                    var tempMarks = factory.newConcept(NS2, 'SeventhSemesterMarks');

                    if(tempReportCard.seventhSemesterMarks.Organization_And_Management_Theory_Assesment<8){
                        tempMarks.Organization_And_Management_Theory_Assesment = reportCard.SeventhSemesterMarks.Organization_And_Management_Theory_Assesment;
                    }else{
                        tempMarks.Organization_And_Management_Theory_Assesment = tempReportCard.seventhSemesterMarks.Organization_And_Management_Theory_Assesment;
                    }
                    if(tempReportCard.seventhSemesterMarks.Organization_And_Management_Theory_Final<32){
                        tempMarks.Organization_And_Management_Theory_Final = reportCard.SeventhSemesterMarks.Organization_And_Management_Theory_Final;
                    }else{
                        tempMarks.Organization_And_Management_Theory_Final = tempReportCard.seventhSemesterMarks.Organization_And_Management_Theory_Final;
                    }
                    if(tempReportCard.seventhSemesterMarks.Energy_Environment_And_Society_Theory_Assesment<4){
                        tempMarks.Energy_Environment_And_Society_Theory_Assesment = reportCard.SeventhSemesterMarks.Energy_Environment_And_Society_Theory_Assesment;
                    }else{
                        tempMarks.Energy_Environment_And_Society_Theory_Assesment = tempReportCard.seventhSemesterMarks.Energy_Environment_And_Society_Theory_Assesment;
                    }
                    if(tempReportCard.seventhSemesterMarks.Energy_Environment_And_Society_Theory_Final<16){
                        tempMarks.Energy_Environment_And_Society_Theory_Final = reportCard.SeventhSemesterMarks.Energy_Environment_And_Society_Theory_Final;
                    }else{
                        tempMarks.Energy_Environment_And_Society_Theory_Final = tempReportCard.seventhSemesterMarks.Energy_Environment_And_Society_Theory_Final;
                    }
                    if(tempReportCard.seventhSemesterMarks.Project_Management_Theory_Assesment<8){
                        tempMarks.Project_Management_Theory_Assesment= reportCard.SeventhSemesterMarks.Project_Management_Theory_Assesment;
                    }else{
                        tempMarks.Project_Management_Theory_Assesment= tempReportCard.seventhSemesterMarks.Project_Management_Theory_Assesment;
                    }
                    if(tempReportCard.seventhSemesterMarks.Project_Management_Theory_Final<32){
                        tempMarks.Project_Management_Theory_Final = reportCard.SeventhSemesterMarks.Project_Management_Theory_Final ;
                    }else{
                        tempMarks.Project_Management_Theory_Final = tempReportCard.seventhSemesterMarks.Project_Management_Theory_Final;
                    }
                    if(tempReportCard.seventhSemesterMarks.Computer_Network_Theory_Assesment<8){
                        tempMarks.Computer_Network_Theory_Assesment = reportCard.SeventhSemesterMarks.Computer_Network_Theory_Assesment ;
                    }else{
                        tempMarks.Computer_Network_Theory_Assesment = tempReportCard.seventhSemesterMarks.Computer_Network_Theory_Assesment ;
                    }
                    if(tempReportCard.seventhSemesterMarks.Computer_Network_Theory_Final<32){
                        tempMarks.Computer_Network_Theory_Final = reportCard.SeventhSemesterMarks.Computer_Network_Theory_Final ;
                    }else{
                        tempMarks.Computer_Network_Theory_Final = tempReportCard.seventhSemesterMarks.Computer_Network_Theory_Final ;
                    }
                    if(tempReportCard.seventhSemesterMarks.Computer_Network_Practical_Assesment<20){
                        tempMarks.Computer_Network_Practical_Assesment = reportCard.SeventhSemesterMarks.Computer_Network_Practical_Assesment;
                    }else{
                        tempMarks.Computer_Network_Practical_Assesment = tempReportCard.seventhSemesterMarks.Computer_Network_Practical_Assesment;
                    }
                    if(tempReportCard.seventhSemesterMarks.Distributed_System_Theory_Assesment<8){
                        tempMarks.Distributed_System_Theory_Assesment = reportCard.SeventhSemesterMarks.Distributed_System_Theory_Assesment;
                    }else{
                        tempMarks.Distributed_System_Theory_Assesment = tempReportCard.seventhSemesterMarks.Distributed_System_Theory_Assesment;
                    }
                    if(tempReportCard.seventhSemesterMarks.Distributed_System_Theory_Final<32){
                        tempMarks.Distributed_System_Theory_Final = reportCard.SeventhSemesterMarks.Distributed_System_Theory_Final;
                    }else{
                        tempMarks.Distributed_System_Theory_Final = tempReportCard.seventhSemesterMarks.Distributed_System_Theory_Final;
                    }
                    if(tempReportCard.seventhSemesterMarks.Distributed_System_Practical_Assesment<10){
                        tempMarks.Distributed_System_Practical_Assesment = reportCard.SeventhSemesterMarks.Distributed_System_Practical_Assesment;
                    }else{
                        tempMarks.Distributed_System_Practical_Assesment = tempReportCard.seventhSemesterMarks.Distributed_System_Practical_Assesment;
                    }
                    if(tempReportCard.seventhSemesterMarks.Digital_Signal_Analysis_And_Design_Theory_Assesment<8){
                        tempMarks.Digital_Signal_Analysis_And_Design_Theory_Assesment = reportCard.SeventhSemesterMarks.Digital_Signal_Analysis_And_Design_Theory_Assesment;
                    }else{
                        tempMarks.Digital_Signal_Analysis_And_Design_Theory_Assesment = tempReportCard.seventhSemesterMarks.Digital_Signal_Analysis_And_Design_Theory_Assesment;
                    }
                    if(tempReportCard.seventhSemesterMarks.Digital_Signal_Analysis_And_Design_Theory_Final<32){
                        tempMarks.Digital_Signal_Analysis_And_Design_Theory_Final = reportCard.SeventhSemesterMarks.Digital_Signal_Analysis_And_Design_Theory_Final ;
                    }else{
                        tempMarks.Digital_Signal_Analysis_And_Design_Theory_Final = tempReportCard.seventhSemesterMarks.Digital_Signal_Analysis_And_Design_Theory_Final ;
                    }
                    if(tempReportCard.seventhSemesterMarks.Digital_Signal_Analysis_And_Design_Practical_Assesment<10){
                        tempMarks.Digital_Signal_Analysis_And_Design_Practical_Assesment = reportCard.SeventhSemesterMarks.Digital_Signal_Analysis_And_Design_Practical_Assesment;
                    }else{
                        tempMarks.Digital_Signal_Analysis_And_Design_Practical_Assesment = tempReportCard.seventhSemesterMarks.Digital_Signal_Analysis_And_Design_Practical_Assesment ;
                    }
                    if(tempReportCard.seventhSemesterMarks.Elective_I_Theory_Assesment<8){
                        tempMarks.Elective_I_Theory_Assesment = reportCard.SeventhSemesterMarks.Elective_I_Theory_Assesment;
                    }else{
                        tempMarks.Elective_I_Theory_Assesment = tempReportCard.seventhSemesterMarks.Elective_I_Theory_Assesment;
                    }
                    if(tempReportCard.seventhSemesterMarks.Elective_I_Theory_Final<32){
                        tempMarks.Elective_I_Theory_Final = reportCard.SeventhSemesterMarks.Elective_I_Theory_Final;
                    }else{
                        tempMarks.Elective_I_Theory_Final = tempReportCard.seventhSemesterMarks.Elective_I_Theory_Final;
                    }
                    if(tempReportCard.seventhSemesterMarks.Elective_I_Practical_Assesment<10){
                        tempMarks.Elective_I_Practical_Assesment = reportCard.SeventhSemesterMarks.Elective_I_Practical_Assesment;
                    }else{
                        tempMarks.Elective_I_Practical_Assesment = tempReportCard.seventhSemesterMarks.Elective_I_Practical_Assesment;
                    }
                    if(tempReportCard.seventhSemesterMarks.Project_Part_A_Partical_Assesment<20){
                        tempMarks.Project_Part_A_Partical_Assesment = reportCard.SeventhSemesterMarks.Project_Part_A_Partical_Assesment;
                    }else{
                        tempMarks.Project_Part_A_Partical_Assesment = tempReportCard.seventhSemesterMarks.Project_Part_A_Partical_Assesment;
                    }

                    ssReportCard.seventhSemesterMarks = tempMarks;
                    
                    if(tempMarks.Organization_And_Management_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Organization_And_Management_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Energy_Environment_And_Society_Theory_Assesment<4){flag0 = 1;}
                    if(tempMarks.Energy_Environment_And_Society_Theory_Final<16){flag0 = 1;}
                    if(tempMarks.Project_Management_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Project_Management_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Computer_Network_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Computer_Network_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Computer_Network_Practical_Assesment<20){flag0 = 1;}
                    if(tempMarks.Distributed_System_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Distributed_System_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Distributed_System_Practical_Assesment<10){flag0 = 1;}
                    if(tempMarks.Digital_Signal_Analysis_And_Design_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Digital_Signal_Analysis_And_Design_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Digital_Signal_Analysis_And_Design_Practical_Assesment<10){flag0 = 1;}
                    if(tempMarks.Elective_I_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Elective_I_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Elective_I_Practical_Assesment<10){flag0 = 1;}
                    if(tempMarks.Project_Part_A_Partical_Assesment<20){flag0 = 1;}
        
                    if(flag0 == 1){
                        ssReportCard.result = "Fail";
                    }else{
                        ssReportCard.result = "Pass";
                        percentage = 100*(
                            tempMarks.Organization_And_Management_Theory_Assesment+
                            tempMarks.Organization_And_Management_Theory_Final+
                            tempMarks.Energy_Environment_And_Society_Theory_Assesment+
                            tempMarks.Energy_Environment_And_Society_Theory_Final+
                            tempMarks.Project_Management_Theory_Assesment+
                            tempMarks.Project_Management_Theory_Final+
                            tempMarks.Computer_Network_Theory_Assesment+
                            tempMarks.Computer_Network_Theory_Final+
                            tempMarks.Computer_Network_Practical_Assesment+
                            tempMarks.Distributed_System_Theory_Assesment+
                            tempMarks.Distributed_System_Theory_Final+
                            tempMarks.Distributed_System_Practical_Assesment+
                            tempMarks.Digital_Signal_Analysis_And_Design_Theory_Assesment+
                            tempMarks.Digital_Signal_Analysis_And_Design_Theory_Final+
                            tempMarks.Digital_Signal_Analysis_And_Design_Practical_Assesment+
                            tempMarks.Elective_I_Theory_Assesment+
                            tempMarks.Elective_I_Theory_Final+
                            tempMarks.Elective_I_Practical_Assesment+
                            tempMarks.Project_Part_A_Partical_Assesment
                        )/825;
                    }

                    var tempDetails = factory.newConcept(NS2, 'StudentDetails');
                    if(tempRecordForExtraction.studentDetails.firstName == reportCard.studentDetails.firstName && tempRecordForExtraction.studentDetails.lastName == reportCard.studentDetails.lastName && tempRecordForExtraction.studentDetails.enrolledCollege == reportCard.studentDetails.enrolledCollege){
                        tempDetails.registrationNumber = reportCard.studentDetails.registrationNumber;
                        tempDetails.firstName = reportCard.studentDetails.firstName;
                        tempDetails.lastName = reportCard.studentDetails.lastName;
                        tempDetails.faculty = "BCT";
                        tempDetails.enrolledCollege = reportCard.studentDetails.enrolledCollege;

                        ssReportCard.studentDetails = tempDetails;
                    }else{
                        throw new Error('Student details does not match to any record. Please provide correct details.');
                    }

                    //
                    var tempRelationship = factory.newRelationship(NS,'Record',reportCard.studentDetails.registrationNumber);
                    ssReportCard.record = tempRelationship;
                    return ssReportCard;
                }else{
                    throw new Error('Student '+reportCard.studentDetails.registrationNumber+' already passed seventh semester.');
                }
            });
        }else{
            var ssReportCard = factory.newResource(NS2, 'SeventhSemesterReportCard', reportCard.reportId );
            var tempMarks = factory.newConcept(NS2, 'SeventhSemesterMarks');

            tempMarks.Organization_And_Management_Theory_Assesment = reportCard.SeventhSemesterMarks.Organization_And_Management_Theory_Assesment;
            tempMarks.Organization_And_Management_Theory_Final = reportCard.SeventhSemesterMarks.Organization_And_Management_Theory_Final;
            tempMarks.Energy_Environment_And_Society_Theory_Assesment = reportCard.SeventhSemesterMarks.Energy_Environment_And_Society_Theory_Assesment;
            tempMarks.Energy_Environment_And_Society_Theory_Final = reportCard.SeventhSemesterMarks.Energy_Environment_And_Society_Theory_Final;
            tempMarks.Project_Management_Theory_Assesment= reportCard.SeventhSemesterMarks.Project_Management_Theory_Assesment;
            tempMarks.Project_Management_Theory_Final = reportCard.SeventhSemesterMarks.Project_Management_Theory_Final ;
            tempMarks.Computer_Network_Theory_Assesment = reportCard.SeventhSemesterMarks.Computer_Network_Theory_Assesment ;
            tempMarks.Computer_Network_Theory_Final = reportCard.SeventhSemesterMarks.Computer_Network_Theory_Final ;
            tempMarks.Computer_Network_Practical_Assesment = reportCard.SeventhSemesterMarks.Computer_Network_Practical_Assesment;
            tempMarks.Distributed_System_Theory_Assesment = reportCard.SeventhSemesterMarks.Distributed_System_Theory_Assesment;
            tempMarks.Distributed_System_Theory_Final = reportCard.SeventhSemesterMarks.Distributed_System_Theory_Final;
            tempMarks.Distributed_System_Practical_Assesment = reportCard.SeventhSemesterMarks.Distributed_System_Practical_Assesment;
            tempMarks.Digital_Signal_Analysis_And_Design_Theory_Assesment = reportCard.SeventhSemesterMarks.Digital_Signal_Analysis_And_Design_Theory_Assesment;
            tempMarks.Digital_Signal_Analysis_And_Design_Theory_Final = reportCard.SeventhSemesterMarks.Digital_Signal_Analysis_And_Design_Theory_Final ;
            tempMarks.Digital_Signal_Analysis_And_Design_Practical_Assesment = reportCard.SeventhSemesterMarks.Digital_Signal_Analysis_And_Design_Practical_Assesment;
            tempMarks.Elective_I_Theory_Assesment = reportCard.SeventhSemesterMarks.Elective_I_Theory_Assesment;
            tempMarks.Elective_I_Theory_Final = reportCard.SeventhSemesterMarks.Elective_I_Theory_Final ;
            tempMarks.Elective_I_Practical_Assesment = reportCard.SeventhSemesterMarks.Elective_I_Practical_Assesment;
            tempMarks.Project_Part_A_Partical_Assesment = reportCard.SeventhSemesterMarks.Project_Part_A_Partical_Assesment;

            if(tempMarks.Organization_And_Management_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Organization_And_Management_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Energy_Environment_And_Society_Theory_Assesment<4){flag0 = 1;}
            if(tempMarks.Energy_Environment_And_Society_Theory_Final<16){flag0 = 1;}
            if(tempMarks.Project_Management_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Project_Management_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Computer_Network_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Computer_Network_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Computer_Network_Practical_Assesment<20){flag0 = 1;}
            if(tempMarks.Distributed_System_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Distributed_System_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Distributed_System_Practical_Assesment<10){flag0 = 1;}
            if(tempMarks.Digital_Signal_Analysis_And_Design_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Digital_Signal_Analysis_And_Design_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Digital_Signal_Analysis_And_Design_Practical_Assesment<10){flag0 = 1;}
            if(tempMarks.Elective_I_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Elective_I_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Elective_I_Practical_Assesment<10){flag0 = 1;}
            if(tempMarks.Project_Part_A_Partical_Assesment<20){flag0 = 1;}

            if(flag0 == 1){
                ssReportCard.result = "Fail";
            }else{
                ssReportCard.result = "Pass";
                percentage = 100*(
                    tempMarks.Organization_And_Management_Theory_Assesment+
                    tempMarks.Organization_And_Management_Theory_Final+
                    tempMarks.Energy_Environment_And_Society_Theory_Assesment+
                    tempMarks.Energy_Environment_And_Society_Theory_Final+
                    tempMarks.Project_Management_Theory_Assesment+
                    tempMarks.Project_Management_Theory_Final+
                    tempMarks.Computer_Network_Theory_Assesment+
                    tempMarks.Computer_Network_Theory_Final+
                    tempMarks.Computer_Network_Practical_Assesment+
                    tempMarks.Distributed_System_Theory_Assesment+
                    tempMarks.Distributed_System_Theory_Final+
                    tempMarks.Distributed_System_Practical_Assesment+
                    tempMarks.Digital_Signal_Analysis_And_Design_Theory_Assesment+
                    tempMarks.Digital_Signal_Analysis_And_Design_Theory_Final+
                    tempMarks.Digital_Signal_Analysis_And_Design_Practical_Assesment+
                    tempMarks.Elective_I_Theory_Assesment+
                    tempMarks.Elective_I_Theory_Final+
                    tempMarks.Elective_I_Practical_Assesment+
                    tempMarks.Project_Part_A_Partical_Assesment
                )/825;
            }
            
            
            ssReportCard.seventhSemesterMarks = tempMarks;
            
            
            var tempDetails = factory.newConcept(NS2, 'StudentDetails');
            if(tempRecordForExtraction.studentDetails.firstName == reportCard.studentDetails.firstName && tempRecordForExtraction.studentDetails.lastName == reportCard.studentDetails.lastName && tempRecordForExtraction.studentDetails.enrolledCollege == reportCard.studentDetails.enrolledCollege){
                tempDetails.registrationNumber = reportCard.studentDetails.registrationNumber;
                tempDetails.firstName = reportCard.studentDetails.firstName;
                tempDetails.lastName = reportCard.studentDetails.lastName;
                tempDetails.faculty = "BCT";
                tempDetails.enrolledCollege = reportCard.studentDetails.enrolledCollege;

                ssReportCard.studentDetails = tempDetails;
            }else{
                throw new Error('Student details does not match to any record. Please provide correct details.');
            }

            //
            var tempRelationship = factory.newRelationship(NS,'Record',reportCard.studentDetails.registrationNumber);
            ssReportCard.record = tempRelationship;

        }
        return ssReportCard;
    }).then(function(ssReportCard){

        var recordRegistry={};
        return getAssetRegistry('org.studentrecord.reportcard.SeventhSemesterReportCard').then(function(tempRecordRegistry){
            return tempRecordRegistry.add(ssReportCard);
        }).then(function(){
            return getAssetRegistry('org.studentrecord.record.Record');
        }).then(function(tempRecordRegistry){
            recordRegistry = tempRecordRegistry;
            return tempRecordRegistry.get(reportCard.studentDetails.registrationNumber);
        }).then(function(tempRecord){
            if(flag0 == 1){
                tempRecord.seventhSemesterResult = "Fail";
            }else{
                tempRecord.seventhSemesterResult = "Pass";
                tempRecord.seventhSemesterPercentage = percentage.toFixed(2);
            }
            if(tempRecord.seventhSemesterReportId){
                tempRecord.seventhSemesterReportId.push(reportCard.reportId);
                return recordRegistry.update(tempRecord);
            }else{
                var tempArray = [reportCard.reportId];
                tempRecord.seventhSemesterReportId = tempArray;
                return recordRegistry.update(tempRecord);
            }
        });

    });

}


/**
 * This is the logic for the application.
 * @param {org.studentrecord.transactions.eighthSemesterReportCard} eighthSemesterReportCard
 * @transaction
 */
function eighthSemesterReportCard(reportCard){

    var factory = getFactory();
    var NS =  'org.studentrecord.record';
    var NS2 = 'org.studentrecord.reportcard';
    var flag0 = 0;
    var percentage = 0;
    var tempRecordForExtraction = {};

    return getAssetRegistry('org.studentrecord.record.Record').then(function(tempRecordRegistry){
        return tempRecordRegistry.get(reportCard.studentDetails.registrationNumber);
    }).then(function(tempRecord){
        tempRecordForExtraction = tempRecord;
        if(tempRecord.studentDetails.enrolledUniversity == "University A" && reportCard.universitySecret == "12345" || tempRecord.studentDetails.enrolledUniversity == "University B" && reportCard.universitySecret == "54321"){
            return tempRecord.eighthSemesterReportId;
        }else{
            throw new Error('This University is not allowed to modify the record '+tempRecord.registrationId +' .');
        }
    }).then(function(tempArray){
        if(tempArray!= null && tempArray.length>0){
            var tempArrayElement = tempArray[tempArray.length-1];
            return getAssetRegistry('org.studentrecord.reportcard.EighthSemesterReportCard').then(function(tempReportCardRegistry){
                return tempReportCardRegistry.get(tempArrayElement);
            }).then(function(tempReportCard){
                if(tempReportCard.result === 'Fail'){

                    var ssReportCard = factory.newResource(NS2, 'EighthSemesterReportCard', reportCard.reportId );
                    var tempMarks = factory.newConcept(NS2, 'EighthSemesterMarks');

                    if(tempReportCard.eighthSemesterMarks.Professional_Practices_Theory_Assesment<4){
                        tempMarks.Professional_Practices_Theory_Assesment  = reportCard.EighthSemesterMarks.Professional_Practices_Theory_Assesment;
                    }else{
                        tempMarks.Professional_Practices_Theory_Assesment  = tempReportCard.eighthSemesterMarks.Professional_Practices_Theory_Assesment;
                    }
                    if(tempReportCard.eighthSemesterMarks.Professional_Practices_Theory_Final<16){
                        tempMarks.Professional_Practices_Theory_Final = reportCard.EighthSemesterMarks.Professional_Practices_Theory_Final;
                    }else{
                        tempMarks.Professional_Practices_Theory_Final = tempReportCard.eighthSemesterMarks.Professional_Practices_Theory_Final;
                    }
                    if(tempReportCard.eighthSemesterMarks.Information_Systems_Theory_Assesment<8){
                        tempMarks.Information_Systems_Theory_Assesment = reportCard.EighthSemesterMarks.Information_Systems_Theory_Assesment;
                    }else{
                        tempMarks.Information_Systems_Theory_Assesment = tempReportCard.eighthSemesterMarks.Information_Systems_Theory_Assesment;
                    }
                    if(tempReportCard.eighthSemesterMarks.Information_Systems_Theory_Final<32){
                        tempMarks.Information_Systems_Theory_Final = reportCard.EighthSemesterMarks.Information_Systems_Theory_Final;
                    }else{
                        tempMarks.Information_Systems_Theory_Final = tempReportCard.eighthSemesterMarks.Information_Systems_Theory_Final;
                    }
                    if(tempReportCard.eighthSemesterMarks.Internet_And_Intranet_Theory_Assesment<8){
                        tempMarks.Internet_And_Intranet_Theory_Assesment =  reportCard.EighthSemesterMarks.Internet_And_Intranet_Theory_Assesment;
                    }else{
                        tempMarks.Internet_And_Intranet_Theory_Assesment =  tempReportCard.eighthSemesterMarks.Internet_And_Intranet_Theory_Assesment;
                    }
                    if(tempReportCard.eighthSemesterMarks.Internet_And_Intranet_Theory_Final<32){
                        tempMarks.Internet_And_Intranet_Theory_Final = reportCard.EighthSemesterMarks.Internet_And_Intranet_Theory_Final ;
                    }else{
                        tempMarks.Internet_And_Intranet_Theory_Final = tempReportCard.eighthSemesterMarks.Internet_And_Intranet_Theory_Final ;
                    }
                    if(tempReportCard.eighthSemesterMarks.Internet_And_Intranet_Practical_Assesment<10){
                        tempMarks.Internet_And_Intranet_Practical_Assesment = reportCard.EighthSemesterMarks.Internet_And_Intranet_Practical_Assesment;
                    }else{
                        tempMarks.Internet_And_Intranet_Practical_Assesment = tempReportCard.eighthSemesterMarks.Internet_And_Intranet_Practical_Assesment;
                    }
                    if(tempReportCard.eighthSemesterMarks.Simulation_And_Modelling_Theory_Assesment<8){
                        tempMarks.Simulation_And_Modelling_Theory_Assesment = reportCard.EighthSemesterMarks.Simulation_And_Modelling_Theory_Assesment;
                    }else{
                        tempMarks.Simulation_And_Modelling_Theory_Assesment = tempReportCard.eighthSemesterMarks.Simulation_And_Modelling_Theory_Assesment;
                    }
                    if(tempReportCard.eighthSemesterMarks.Simulation_And_Modelling_Theory_Final<32){
                        tempMarks.Simulation_And_Modelling_Theory_Final = reportCard.EighthSemesterMarks.Simulation_And_Modelling_Theory_Final;
                    }else{
                        tempMarks.Simulation_And_Modelling_Theory_Final = tempReportCard.eighthSemesterMarks.Simulation_And_Modelling_Theory_Final;
                    }
                    if(tempReportCard.eighthSemesterMarks.Simulation_And_Modelling_Practical_Assesment<10){
                        tempMarks.Simulation_And_Modelling_Practical_Assesment = reportCard.EighthSemesterMarks.Simulation_And_Modelling_Practical_Assesment;
                    }else{
                        tempMarks.Simulation_And_Modelling_Practical_Assesment = tempReportCard.eighthSemesterMarks.Simulation_And_Modelling_Practical_Assesment;
                    }
                    if(tempReportCard.eighthSemesterMarks.Elective_II_Theory_Assesment<8){
                        tempMarks.Elective_II_Theory_Assesment = reportCard.EighthSemesterMarks.Elective_II_Theory_Assesment;
                    }else{
                        tempMarks.Elective_II_Theory_Assesment = tempReportCard.eighthSemesterMarks.Elective_II_Theory_Assesment;
                    }
                    if(tempReportCard.eighthSemesterMarks.Elective_II_Theory_Final<32){
                        tempMarks.Elective_II_Theory_Final = reportCard.EighthSemesterMarks.Elective_II_Theory_Final;
                    }else{
                        tempMarks.Elective_II_Theory_Final = tempReportCard.eighthSemesterMarks.Elective_II_Theory_Final;
                    }
                    if(tempReportCard.eighthSemesterMarks.Elective_II_Practical_Assesment<10){
                        tempMarks.Elective_II_Practical_Assesment = reportCard.EighthSemesterMarks.Elective_II_Practical_Assesment;
                    }else{
                        tempMarks.Elective_II_Practical_Assesment = tempReportCard.eighthSemesterMarks.Elective_II_Practical_Assesment;
                    }
                    if(tempReportCard.eighthSemesterMarks.Elective_III_Theory_Assesment<8){
                        tempMarks.Elective_III_Theory_Assesment = reportCard.EighthSemesterMarks.Elective_III_Theory_Assesment;
                    }else{
                        tempMarks.Elective_III_Theory_Assesment = tempReportCard.eighthSemesterMarks.Elective_III_Theory_Assesment;
                    }
                    if(tempReportCard.eighthSemesterMarks.Elective_III_Theory_Final<32){
                        tempMarks.Elective_III_Theory_Final = reportCard.EighthSemesterMarks.Elective_III_Theory_Final;
                    }else{
                        tempMarks.Elective_III_Theory_Final = tempReportCard.eighthSemesterMarks.Elective_III_Theory_Final;
                    }
                    if(tempReportCard.eighthSemesterMarks.Elective_III_Practical_Assesment<10){
                        tempMarks.Elective_III_Practical_Assesment = reportCard.EighthSemesterMarks.Elective_III_Practical_Assesment;
                    }else{
                        tempMarks.Elective_III_Practical_Assesment = tempReportCard.eighthSemesterMarks.Elective_III_Practical_Assesment;
                    }
                    if(tempReportCard.eighthSemesterMarks.Project_Part_B_Practical_Assesment<20){
                        tempMarks.Project_Part_B_Practical_Assesment = reportCard.EighthSemesterMarks.Project_Part_B_Practical_Assesment;
                    }else{
                        tempMarks.Project_Part_B_Practical_Assesment = tempReportCard.eighthSemesterMarks.Project_Part_B_Practical_Assesment;
                    }
                    if(tempReportCard.eighthSemesterMarks.Project_Part_B_Practical_Final<20){
                        tempMarks.Project_Part_B_Practical_Final = reportCard.EighthSemesterMarks.Project_Part_B_Practical_Final;
                    }else{
                        tempMarks.Project_Part_B_Practical_Final = tempReportCard.eighthSemesterMarks.Project_Part_B_Practical_Final;
                    }

                    ssReportCard.eighthSemesterMarks = tempMarks;

                    if(tempMarks.Professional_Practices_Theory_Assesment<4){flag0 = 1;}
                    if(tempMarks.Professional_Practices_Theory_Final<16){flag0 = 1;}
                    if(tempMarks.Information_Systems_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Information_Systems_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Internet_And_Intranet_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Internet_And_Intranet_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Internet_And_Intranet_Practical_Assesment<10){flag0 = 1;}
                    if(tempMarks.Simulation_And_Modelling_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Simulation_And_Modelling_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Simulation_And_Modelling_Practical_Assesment<10){flag0 = 1;}
                    if(tempMarks.Elective_II_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Elective_II_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Elective_II_Practical_Assesment<10){flag0 = 1;}
                    if(tempMarks.Elective_III_Theory_Assesment<8){flag0 = 1;}
                    if(tempMarks.Elective_III_Theory_Final<32){flag0 = 1;}
                    if(tempMarks.Elective_III_Practical_Assesment<10){flag0 = 1;}
                    if(tempMarks.Project_Part_B_Practical_Assesment<20){flag0 = 1;}
                    if(tempMarks.Project_Part_B_Practical_Final<20){flag0 = 1;}
        
        
                    if(flag0 == 1){
                        ssReportCard.result = "Fail";
                    }else{
                        ssReportCard.result = "Pass";
                        percentage = 100*(
                            tempMarks.Professional_Practices_Theory_Assesment+
                            tempMarks.Professional_Practices_Theory_Final+
                            tempMarks.Information_Systems_Theory_Final+
                            tempMarks.Information_Systems_Theory_Assesment+
                            tempMarks.Internet_And_Intranet_Theory_Assesment+
                            tempMarks.Internet_And_Intranet_Theory_Final+
                            tempMarks.Internet_And_Intranet_Practical_Assesment+
                            tempMarks.Simulation_And_Modelling_Theory_Assesment+
                            tempMarks.Simulation_And_Modelling_Theory_Final+
                            tempMarks.Simulation_And_Modelling_Practical_Assesment+
                            tempMarks.Elective_II_Theory_Assesment+
                            tempMarks.Elective_II_Theory_Final+
                            tempMarks.Elective_II_Practical_Assesment+
                            tempMarks.Elective_III_Theory_Assesment+
                            tempMarks.Elective_III_Theory_Final+
                            tempMarks.Elective_III_Practical_Assesment+
                            tempMarks.Project_Part_B_Practical_Assesment+
                            tempMarks.Project_Part_B_Practical_Final
                        )/750;
                    }


                    var tempDetails = factory.newConcept(NS2, 'StudentDetails');
                    if(tempRecordForExtraction.studentDetails.firstName == reportCard.studentDetails.firstName && tempRecordForExtraction.studentDetails.lastName == reportCard.studentDetails.lastName && tempRecordForExtraction.studentDetails.enrolledCollege == reportCard.studentDetails.enrolledCollege){
                        tempDetails.registrationNumber = reportCard.studentDetails.registrationNumber;
                        tempDetails.firstName = reportCard.studentDetails.firstName;
                        tempDetails.lastName = reportCard.studentDetails.lastName;
                        tempDetails.faculty = "BCT";
                        tempDetails.enrolledCollege = reportCard.studentDetails.enrolledCollege;

                        ssReportCard.studentDetails = tempDetails;
                    }else{
                        throw new Error('Student details does not match to any record. Please provide correct details.');
                    }

                    //
                    var tempRelationship = factory.newRelationship(NS,'Record',reportCard.studentDetails.registrationNumber);
                    ssReportCard.record = tempRelationship;

                    return ssReportCard;
                }else{

                    throw new Error('Student '+reportCard.studentDetails.registrationNumber+' already passed eighth semester.');
                }
            });
        }else{
            var ssReportCard = factory.newResource(NS2, 'EighthSemesterReportCard', reportCard.reportId );
            var tempMarks = factory.newConcept(NS2, 'EighthSemesterMarks');

            tempMarks.Professional_Practices_Theory_Assesment  = reportCard.EighthSemesterMarks.Professional_Practices_Theory_Assesment;
            tempMarks.Professional_Practices_Theory_Final = reportCard.EighthSemesterMarks.Professional_Practices_Theory_Final;
            tempMarks.Information_Systems_Theory_Assesment = reportCard.EighthSemesterMarks.Information_Systems_Theory_Assesment;
            tempMarks.Information_Systems_Theory_Final = reportCard.EighthSemesterMarks.Information_Systems_Theory_Final;
            tempMarks.Internet_And_Intranet_Theory_Assesment =  reportCard.EighthSemesterMarks.Internet_And_Intranet_Theory_Assesment;
            tempMarks.Internet_And_Intranet_Theory_Final = reportCard.EighthSemesterMarks.Internet_And_Intranet_Theory_Final ;
            tempMarks.Internet_And_Intranet_Practical_Assesment = reportCard.EighthSemesterMarks.Internet_And_Intranet_Practical_Assesment;
            tempMarks.Simulation_And_Modelling_Theory_Assesment = reportCard.EighthSemesterMarks.Simulation_And_Modelling_Theory_Assesment;
            tempMarks.Simulation_And_Modelling_Theory_Final = reportCard.EighthSemesterMarks.Simulation_And_Modelling_Theory_Final;
            tempMarks.Simulation_And_Modelling_Practical_Assesment = reportCard.EighthSemesterMarks.Simulation_And_Modelling_Practical_Assesment;
            tempMarks.Elective_II_Theory_Assesment = reportCard.EighthSemesterMarks.Elective_II_Theory_Assesment;
            tempMarks.Elective_II_Theory_Final = reportCard.EighthSemesterMarks.Elective_II_Theory_Final ;
            tempMarks.Elective_II_Practical_Assesment = reportCard.EighthSemesterMarks.Elective_II_Practical_Assesment;
            tempMarks.Elective_III_Theory_Assesment = reportCard.EighthSemesterMarks.Elective_III_Theory_Assesment;
            tempMarks.Elective_III_Theory_Final = reportCard.EighthSemesterMarks.Elective_III_Theory_Final ;
            tempMarks.Elective_III_Practical_Assesment = reportCard.EighthSemesterMarks.Elective_III_Practical_Assesment;
            tempMarks.Project_Part_B_Practical_Assesment = reportCard.EighthSemesterMarks.Project_Part_B_Practical_Assesment;
            tempMarks.Project_Part_B_Practical_Final = reportCard.EighthSemesterMarks.Project_Part_B_Practical_Final;

            if(tempMarks.Professional_Practices_Theory_Assesment<4){flag0 = 1;}
            if(tempMarks.Professional_Practices_Theory_Final<16){flag0 = 1;}
            if(tempMarks.Information_Systems_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Information_Systems_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Internet_And_Intranet_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Internet_And_Intranet_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Internet_And_Intranet_Practical_Assesment<10){flag0 = 1;}
            if(tempMarks.Simulation_And_Modelling_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Simulation_And_Modelling_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Simulation_And_Modelling_Practical_Assesment<10){flag0 = 1;}
            if(tempMarks.Elective_II_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Elective_II_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Elective_II_Practical_Assesment<10){flag0 = 1;}
            if(tempMarks.Elective_III_Theory_Assesment<8){flag0 = 1;}
            if(tempMarks.Elective_III_Theory_Final<32){flag0 = 1;}
            if(tempMarks.Elective_III_Practical_Assesment<10){flag0 = 1;}
            if(tempMarks.Project_Part_B_Practical_Assesment<20){flag0 = 1;}
            if(tempMarks.Project_Part_B_Practical_Final<20){flag0 = 1;}


            if(flag0 == 1){
                ssReportCard.result = "Fail";
            }else{
                ssReportCard.result = "Pass";
                percentage = 100*(
                    tempMarks.Professional_Practices_Theory_Assesment+
                    tempMarks.Professional_Practices_Theory_Final+
                    tempMarks.Information_Systems_Theory_Final+
                    tempMarks.Information_Systems_Theory_Assesment+
                    tempMarks.Internet_And_Intranet_Theory_Assesment+
                    tempMarks.Internet_And_Intranet_Theory_Final+
                    tempMarks.Internet_And_Intranet_Practical_Assesment+
                    tempMarks.Simulation_And_Modelling_Theory_Assesment+
                    tempMarks.Simulation_And_Modelling_Theory_Final+
                    tempMarks.Simulation_And_Modelling_Practical_Assesment+
                    tempMarks.Elective_II_Theory_Assesment+
                    tempMarks.Elective_II_Theory_Final+
                    tempMarks.Elective_II_Practical_Assesment+
                    tempMarks.Elective_III_Theory_Assesment+
                    tempMarks.Elective_III_Theory_Final+
                    tempMarks.Elective_III_Practical_Assesment+
                    tempMarks.Project_Part_B_Practical_Assesment+
                    tempMarks.Project_Part_B_Practical_Final
                )/750;
            }
            
            ssReportCard.eighthSemesterMarks = tempMarks;
            
            var tempDetails = factory.newConcept(NS2, 'StudentDetails');
            if(tempRecordForExtraction.studentDetails.firstName == reportCard.studentDetails.firstName && tempRecordForExtraction.studentDetails.lastName == reportCard.studentDetails.lastName && tempRecordForExtraction.studentDetails.enrolledCollege == reportCard.studentDetails.enrolledCollege){
                tempDetails.registrationNumber = reportCard.studentDetails.registrationNumber;
                tempDetails.firstName = reportCard.studentDetails.firstName;
                tempDetails.lastName = reportCard.studentDetails.lastName;
                tempDetails.faculty = "BCT";
                tempDetails.enrolledCollege = reportCard.studentDetails.enrolledCollege;

                ssReportCard.studentDetails = tempDetails;
            }else{
                throw new Error('Student details does not match to any record. Please provide correct details.');
            }

            //
            var tempRelationship = factory.newRelationship(NS,'Record',reportCard.studentDetails.registrationNumber);
            ssReportCard.record = tempRelationship;
        }
        return ssReportCard;
    }).then(function(ssReportCard){

        var recordRegistry={};
        return getAssetRegistry('org.studentrecord.reportcard.EighthSemesterReportCard').then(function(tempRecordRegistry){
            return tempRecordRegistry.add(ssReportCard);
        }).then(function(){
            return getAssetRegistry('org.studentrecord.record.Record');
        }).then(function(tempRecordRegistry){
            recordRegistry = tempRecordRegistry;
            return tempRecordRegistry.get(reportCard.studentDetails.registrationNumber);
        }).then(function(tempRecord){
            if(flag0 == 1){
                tempRecord.eighthSemesterResult = "Fail";
            }else{
                tempRecord.eighthSemesterResult = "Pass";
                tempRecord.eighthSemesterPercentage = percentage.toFixed(2);
            }
            if(tempRecord.eighthSemesterReportId){
                tempRecord.eighthSemesterReportId.push(reportCard.reportId);
                return recordRegistry.update(tempRecord);
            }else{
                var tempArray = [reportCard.reportId];
                tempRecord.eighthSemesterReportId = tempArray;
                return recordRegistry.update(tempRecord);
            }
        });

    });
}

/**
 * this is to create the record and to create the relationship in the participant registry of the students
 * @param {org.studentrecord.transactions.newRecord} NewRecord
 * @transaction
 */
function NewRecord(newRecord){

    var factory = getFactory();

    var tempRecord = factory.newResource('org.studentrecord.record','Record',newRecord.registrationId);
    var tempDetails = factory.newConcept('org.studentrecord.record','StudentDetails');
    tempDetails.firstName = newRecord.studentDetails.firstName;
    tempDetails.lastName = newRecord.studentDetails.lastName;
    tempDetails.faculty = "BCT";

    if(newRecord.universitySecret == "12345"){
        tempDetails.enrolledUniversity = "University A";
    }else if(newRecord.universitySecret == "54321"){
        tempDetails.enrolledUniversity = "University B";
    }else{
        throw new Error('Unauthorized participant. Please enter valid secret.');
    }

    tempDetails.enrolledCollege = newRecord.studentDetails.enrolledCollege;

    tempRecord.studentDetails = tempDetails;





    return getAssetRegistry('org.studentrecord.record.Record').then(function(tempRecordRegistry){
        return tempRecordRegistry.add(tempRecord);
    }).catch(function(error){
        throw new Error(error);
    });
}

