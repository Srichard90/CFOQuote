//Design by Steve Richardville of Summit CPA Group
function updateCosts() {
	
	//Determine Revenue Range and set scale factors
	var VCFOSvc1 = document.getElementById('VCFOType1').value;
	var VCFOSvc2 = document.getElementById('VCFOType2').value;
	var VCFOSvc3 = document.getElementById('VCFOType3').value;
	var VCFOSvc4 = document.getElementById('VCFOType4').value;
	var VCFOSvc5 = document.getElementById('VCFOType5').value;
	var VCFOSvc6 = document.getElementById('VCFOType6').value;
	var VCFOSvc7 = document.getElementById('VCFOType7').value;
	var VCFOSvc8 = document.getElementById('VCFOType8').value;
	var VCFOInt1 = (parseInt(VCFOSvc1,10));
	var VCFOInt2 = (parseInt(VCFOSvc2,10));
	var VCFOInt3 = (parseInt(VCFOSvc3,10));
	var VCFOInt4 = (parseInt(VCFOSvc4,10));
	var VCFOInt5 = (parseInt(VCFOSvc5,10));
	var VCFOInt6 = (parseInt(VCFOSvc6,10));
	var VCFOInt7 = (parseInt(VCFOSvc7,10));
	var VCFOInt8 = (parseInt(VCFOSvc8,10));
	
	var VCFOTotal = (VCFOInt1 + VCFOInt2 + VCFOInt3 + VCFOInt4 + VCFOInt5 + VCFOInt6 + VCFOInt7 + VCFOInt8);
		
		
	var NumComp = document.getElementById('NumComp').value;
	var annualRev1 = document.getElementById('AnnualRev1').value;
	var annualRev2 = document.getElementById('AnnualRev2').value;
	var annualRev3 = document.getElementById('AnnualRev3').value;
	var annualRev4 = document.getElementById('AnnualRev4').value;
	var annualRev5 = document.getElementById('AnnualRev5').value;
	var annualRev = 0;
	
	var annualRev1Int = (parseInt(annualRev1,10));
	var annualRev2Int = (parseInt(annualRev2,10));
	var annualRev3Int = (parseInt(annualRev3,10));
	var annualRev4Int = (parseInt(annualRev4,10));
	var annualRev5Int = (parseInt(annualRev5,10));
	
	if (VCFOTotal > 0) {
		document.getElementById('FcstCount1').value = 1;
	}	
	
	
	if (NumComp == 0 || NumComp == 1) {
		annualRev = annualRev1Int;
	} else if (NumComp == 2) {
		annualRev = (annualRev1Int + annualRev2Int);
	} else if (NumComp == 3) {
		annualRev = (annualRev1Int + annualRev2Int + annualRev3Int);
	} else if (NumComp == 4) {
		annualRev = (annualRev1Int + annualRev2Int + annualRev3Int + annualRev4Int);
	} else if (NumComp == 5) {
		annualRev = (annualRev1Int + annualRev2Int + annualRev3Int + annualRev4Int + annualRev5Int);
	}
	
	
	var TaxRate = 0;
	var TaxRate1 = 0;
	var TaxRate2 = 0;
	var TaxRate3 = 0;
	var TaxRate4 = 0;
	var TaxRate5 = 0;
	var CoreScale = 0;
	var AddOnsScale = 0;
	
	var RevRng0 = 99999;
	var RevRng1 = 299999;
	var RevRng2 = 599999;
	var RevRng3 = 899999;
	var RevRng4 = 1199999;
	var RevRng5 = 1499000;
	var RevRng6 = 1799999;
	var RevRng7 = 2099999;
	var RevRng8 = 2499999;
	var RevRng9 = 2999999;
	var RevRng10 = 3499999;
	var RevRng11 = 3999999;
	var RevRng12 = 4499999;
	var RevRng13 = 4999999;
	var RevRng14 = 5999999;
	var RevRng15 = 6999999;
	var RevRng16 = 7999999;
	var RevRng17 = 8999999;
	var RevRng18 = 9999999;
	var RevRng19 = 12499999;
	var RevRng20 = 14999999;
	var RevRng21 = 17499999;
	var RevRng22 = 19999999;
	var RevRng23 = 22499999;
	var RevRng24 = 24999999;
	var RevRng25 = 27499999;
	var RevRng26 = 29999999;
	var RevRng27 = 32499999;
	var RevRng28 = 34999999;
	var RevRng29 = 37499999;
	var RevRng30 = 39999999;
	var RevRng31 = 42499999;
	var RevRng32 = 44999999;
	var RevRng33 = 47499999;
	var RevRng34 = 49999999;
	var RevRng35 = 50000000;
	
	
	//Annual Revenue for Comp 1 tax calc
	if (annualRev1Int <= RevRng0) {
		TaxRate1 = 600;
	} else if (annualRev1Int > RevRng0 && annualRev1Int <= RevRng1) {
		TaxRate1 = 600;
	} else if (annualRev1Int > RevRng1 && annualRev1Int <= RevRng2) {
		TaxRate1 = 900;
	} else if (annualRev1Int > RevRng2 && annualRev1Int <= RevRng3) {
		TaxRate1 = 1200;
	} else if (annualRev1Int > RevRng3 && annualRev1Int <= RevRng4) {
		TaxRate1 = 1800;
	} else if (annualRev1Int > RevRng4 && annualRev1Int <= RevRng5) {
		TaxRate1 = 2200;
	} else if (annualRev1Int > RevRng5 && annualRev1Int <= RevRng6) {
		TaxRate1 = 2600;
	} else if (annualRev1Int > RevRng6 && annualRev1Int <= RevRng7) {
		TaxRate1 = 2900;
	} else if (annualRev1Int > RevRng7 && annualRev1Int <= RevRng8) {
		TaxRate1 = 3200;
	} else if (annualRev1Int > RevRng8 && annualRev1Int <= RevRng9) {
		TaxRate1 = 3500;
	} else if (annualRev1Int > RevRng9 && annualRev1Int <= RevRng10) {
		TaxRate1 = 3800;
	} else if (annualRev1Int > RevRng10 && annualRev1Int <= RevRng11) {
		TaxRate1 = 4100;
	} else if (annualRev1Int > RevRng11 && annualRev1Int <= RevRng12) {
		TaxRate1 = 4400;
	} else if (annualRev1Int > RevRng12 && annualRev1Int <= RevRng13) {
		TaxRate1 = 4700;
	} else if (annualRev1Int > RevRng13 && annualRev1Int <= RevRng14) {
		TaxRate1 = 5000;
	} else if (annualRev1Int > RevRng14 && annualRev1Int <= RevRng15) {
		TaxRate1 = 5500;
	} else if (annualRev1Int > RevRng15 && annualRev1Int <= RevRng16) {
		TaxRate1 = 6000;
	} else if (annualRev1Int > RevRng16 && annualRev1Int <= RevRng17) {
		TaxRate1 = 6500;
	} else if (annualRev1Int > RevRng17 && annualRev1Int <= RevRng18) {
		TaxRate1 = 7000;
	} else if (annualRev1Int > RevRng18 && annualRev1Int <= RevRng19) {
		TaxRate1 = 7500;
	} else if (annualRev1Int > RevRng19 && annualRev1Int <= RevRng20) {
		TaxRate1 = 8700;
	} else if (annualRev1Int > RevRng20 && annualRev1Int <= RevRng21) {
		TaxRate1 = 9900;
	} else if (annualRev1Int > RevRng21 && annualRev1Int <= RevRng22) {
		TaxRate1 = 11100;
	} else if (annualRev1Int > RevRng22 && annualRev1Int <= RevRng23) {
		TaxRate1 = 12300;
	} else if (annualRev1Int > RevRng23 && annualRev1Int <= RevRng24) {
		TaxRate1 = 13500;
	} else if (annualRev1Int > RevRng24 && annualRev1Int <= RevRng25) {
		TaxRate1 = 14700;
	} else if (annualRev1Int > RevRng25 && annualRev1Int <= RevRng26) {
		TaxRate1 = 15900;
	} else if (annualRev1Int > RevRng26 && annualRev1Int <= RevRng27) {
		TaxRate1 = 17100;
	} else if (annualRev1Int > RevRng27 && annualRev1Int <= RevRng28) {
		TaxRate1 = 18300;
	} else if (annualRev1Int > RevRng28 && annualRev1Int <= RevRng29) {
		TaxRate1 = 19500;
	} else if (annualRev1Int > RevRng29 && annualRev1Int <= RevRng30) {
		TaxRate1 = 20700;
	} else if (annualRev1Int > RevRng30 && annualRev1Int <= RevRng31) {
		TaxRate1 = 21900;
	} else if (annualRev1Int > RevRng31 && annualRev1Int <= RevRng32) {
		TaxRate1 = 23100;
	} else if (annualRev1Int > RevRng32 && annualRev1Int <= RevRng33) {
		TaxRate1 = 24300;
	} else if (annualRev1Int > RevRng33 && annualRev1Int <= RevRng34) {
		TaxRate1 = 25500;
	} else if (annualRev1Int > RevRng34 && annualRev1Int <= RevRng35) {
		TaxRate1 = 26700;
	} else if (annualRev1Int > RevRng35) {
		TaxRate1 = 26700;
	}
	
	//Annual Revenue for Comp 2 tax calc
	if (annualRev2Int <= RevRng0) {
		TaxRate2 = 600;
	} else if (annualRev2Int > RevRng0 && annualRev2Int <= RevRng1) {
		TaxRate2 = 600;
	} else if (annualRev2Int > RevRng1 && annualRev2Int <= RevRng2) {
		TaxRate2 = 900;
	} else if (annualRev2Int > RevRng2 && annualRev2Int <= RevRng3) {
		TaxRate2 = 1200;
	} else if (annualRev2Int > RevRng3 && annualRev2Int <= RevRng4) {
		TaxRate2 = 1800;
	} else if (annualRev2Int > RevRng4 && annualRev2Int <= RevRng5) {
		TaxRate2 = 2200;
	} else if (annualRev2Int > RevRng5 && annualRev2Int <= RevRng6) {
		TaxRate2 = 2600;
	} else if (annualRev2Int > RevRng6 && annualRev2Int <= RevRng7) {
		TaxRate2 = 2900;
	} else if (annualRev2Int > RevRng7 && annualRev2Int <= RevRng8) {
		TaxRate2 = 3200;
	} else if (annualRev2Int > RevRng8 && annualRev2Int <= RevRng9) {
		TaxRate2 = 3500;
	} else if (annualRev2Int > RevRng9 && annualRev2Int <= RevRng10) {
		TaxRate2 = 3800;
	} else if (annualRev2Int > RevRng10 && annualRev2Int <= RevRng11) {
		TaxRate2 = 4100;
	} else if (annualRev2Int > RevRng11 && annualRev2Int <= RevRng12) {
		TaxRate2 = 4400;
	} else if (annualRev2Int > RevRng12 && annualRev2Int <= RevRng13) {
		TaxRate2 = 4700;
	} else if (annualRev2Int > RevRng13 && annualRev2Int <= RevRng14) {
		TaxRate2 = 5000;
	} else if (annualRev2Int > RevRng14 && annualRev2Int <= RevRng15) {
		TaxRate2 = 5500;
	} else if (annualRev2Int > RevRng15 && annualRev2Int <= RevRng16) {
		TaxRate2 = 6000;
	} else if (annualRev2Int > RevRng16 && annualRev2Int <= RevRng17) {
		TaxRate2 = 6500;
	} else if (annualRev2Int > RevRng17 && annualRev2Int <= RevRng18) {
		TaxRate2 = 7000;
	} else if (annualRev2Int > RevRng18 && annualRev2Int <= RevRng19) {
		TaxRate2 = 7500;
	} else if (annualRev2Int > RevRng19 && annualRev2Int <= RevRng20) {
		TaxRate2 = 8700;
	} else if (annualRev2Int > RevRng20 && annualRev2Int <= RevRng21) {
		TaxRate2 = 9900;
	} else if (annualRev2Int > RevRng21 && annualRev2Int <= RevRng22) {
		TaxRate2 = 11100;
	} else if (annualRev2Int > RevRng22 && annualRev2Int <= RevRng23) {
		TaxRate2 = 12300;
	} else if (annualRev2Int > RevRng23 && annualRev2Int <= RevRng24) {
		TaxRate2 = 13500;
	} else if (annualRev2Int > RevRng24 && annualRev2Int <= RevRng25) {
		TaxRate2 = 14700;
	} else if (annualRev2Int > RevRng25 && annualRev2Int <= RevRng26) {
		TaxRate2 = 15900;
	} else if (annualRev2Int > RevRng26 && annualRev2Int <= RevRng27) {
		TaxRate2 = 17100;
	} else if (annualRev2Int > RevRng27 && annualRev2Int <= RevRng28) {
		TaxRate2 = 18300;
	} else if (annualRev2Int > RevRng28 && annualRev2Int <= RevRng29) {
		TaxRate2 = 19500;
	} else if (annualRev2Int > RevRng29 && annualRev2Int <= RevRng30) {
		TaxRate2 = 20700;
	} else if (annualRev2Int > RevRng30 && annualRev2Int <= RevRng31) {
		TaxRate2 = 21900;
	} else if (annualRev2Int > RevRng31 && annualRev2Int <= RevRng32) {
		TaxRate2 = 23100;
	} else if (annualRev2Int > RevRng32 && annualRev2Int <= RevRng33) {
		TaxRate2 = 24300;
	} else if (annualRev2Int > RevRng33 && annualRev2Int <= RevRng34) {
		TaxRate2 = 25500;
	} else if (annualRev2Int > RevRng34 && annualRev2Int <= RevRng35) {
		TaxRate2 = 26700;
	} else if (annualRev2Int > RevRng35) {
		TaxRate2 = 26700;
	}
	
	
	//Annual Revenue for Comp 3 tax calc
	if (annualRev3Int <= RevRng0) {
		TaxRate3 = 600;
	} else if (annualRev3Int > RevRng0 && annualRev3Int <= RevRng1) {
		TaxRate3 = 600;
	} else if (annualRev3Int > RevRng1 && annualRev3Int <= RevRng2) {
		TaxRate3 = 900;
	} else if (annualRev3Int > RevRng2 && annualRev3Int <= RevRng3) {
		TaxRate3 = 1200;
	} else if (annualRev3Int > RevRng3 && annualRev3Int <= RevRng4) {
		TaxRate3 = 1800;
	} else if (annualRev3Int > RevRng4 && annualRev3Int <= RevRng5) {
		TaxRate3 = 2200;
	} else if (annualRev3Int > RevRng5 && annualRev3Int <= RevRng6) {
		TaxRate3 = 2600;
	} else if (annualRev3Int > RevRng6 && annualRev3Int <= RevRng7) {
		TaxRate3 = 2900;
	} else if (annualRev3Int > RevRng7 && annualRev3Int <= RevRng8) {
		TaxRate3 = 3200;
	} else if (annualRev3Int > RevRng8 && annualRev3Int <= RevRng9) {
		TaxRate3 = 3500;
	} else if (annualRev3Int > RevRng9 && annualRev3Int <= RevRng10) {
		TaxRate3 = 3800;
	} else if (annualRev3Int > RevRng10 && annualRev3Int <= RevRng11) {
		TaxRate3 = 4100;
	} else if (annualRev3Int > RevRng11 && annualRev3Int <= RevRng12) {
		TaxRate3 = 4400;
	} else if (annualRev3Int > RevRng12 && annualRev3Int <= RevRng13) {
		TaxRate3 = 4700;
	} else if (annualRev3Int > RevRng13 && annualRev3Int <= RevRng14) {
		TaxRate3 = 5000;
	} else if (annualRev3Int > RevRng14 && annualRev3Int <= RevRng15) {
		TaxRate3 = 5500;
	} else if (annualRev3Int > RevRng15 && annualRev3Int <= RevRng16) {
		TaxRate3 = 6000;
	} else if (annualRev3Int > RevRng16 && annualRev3Int <= RevRng17) {
		TaxRate3 = 6500;
	} else if (annualRev3Int > RevRng17 && annualRev3Int <= RevRng18) {
		TaxRate3 = 7000;
	} else if (annualRev3Int > RevRng18 && annualRev3Int <= RevRng19) {
		TaxRate3 = 7500;
	} else if (annualRev3Int > RevRng19 && annualRev3Int <= RevRng20) {
		TaxRate3 = 8700;
	} else if (annualRev3Int > RevRng20 && annualRev3Int <= RevRng21) {
		TaxRate3 = 9900;
	} else if (annualRev3Int > RevRng21 && annualRev3Int <= RevRng22) {
		TaxRate3 = 11100;
	} else if (annualRev3Int > RevRng22 && annualRev3Int <= RevRng23) {
		TaxRate3 = 12300;
	} else if (annualRev3Int > RevRng23 && annualRev3Int <= RevRng24) {
		TaxRate3 = 13500;
	} else if (annualRev3Int > RevRng24 && annualRev3Int <= RevRng25) {
		TaxRate3 = 14700;
	} else if (annualRev3Int > RevRng25 && annualRev3Int <= RevRng26) {
		TaxRate3 = 15900;
	} else if (annualRev3Int > RevRng26 && annualRev3Int <= RevRng27) {
		TaxRate3 = 17100;
	} else if (annualRev3Int > RevRng27 && annualRev3Int <= RevRng28) {
		TaxRate3 = 18300;
	} else if (annualRev3Int > RevRng28 && annualRev3Int <= RevRng29) {
		TaxRate3 = 19500;
	} else if (annualRev3Int > RevRng29 && annualRev3Int <= RevRng30) {
		TaxRate3 = 20700;
	} else if (annualRev3Int > RevRng30 && annualRev3Int <= RevRng31) {
		TaxRate3 = 21900;
	} else if (annualRev3Int > RevRng31 && annualRev3Int <= RevRng32) {
		TaxRate3 = 23100;
	} else if (annualRev3Int > RevRng32 && annualRev3Int <= RevRng33) {
		TaxRate3 = 24300;
	} else if (annualRev3Int > RevRng33 && annualRev3Int <= RevRng34) {
		TaxRate3 = 25500;
	} else if (annualRev3Int > RevRng34 && annualRev3Int <= RevRng35) {
		TaxRate3 = 26700;
	} else if (annualRev3Int > RevRng35) {
		TaxRate3 = 26700;
	}


	//Annual Revenue for Comp 4 tax calc
	if (annualRev4Int <= RevRng0) {
		TaxRate4 = 600;
	} else if (annualRev4Int > RevRng0 && annualRev4Int <= RevRng1) {
		TaxRate4 = 600;
	} else if (annualRev4Int > RevRng1 && annualRev4Int <= RevRng2) {
		TaxRate4 = 900;
	} else if (annualRev4Int > RevRng2 && annualRev4Int <= RevRng3) {
		TaxRate4 = 1200;
	} else if (annualRev4Int > RevRng3 && annualRev4Int <= RevRng4) {
		TaxRate4 = 1800;
	} else if (annualRev4Int > RevRng4 && annualRev4Int <= RevRng5) {
		TaxRate4 = 2200;
	} else if (annualRev4Int > RevRng5 && annualRev4Int <= RevRng6) {
		TaxRate4 = 2600;
	} else if (annualRev4Int > RevRng6 && annualRev4Int <= RevRng7) {
		TaxRate4 = 2900;
	} else if (annualRev4Int > RevRng7 && annualRev4Int <= RevRng8) {
		TaxRate4 = 3200;
	} else if (annualRev4Int > RevRng8 && annualRev4Int <= RevRng9) {
		TaxRate4 = 3500;
	} else if (annualRev4Int > RevRng9 && annualRev4Int <= RevRng10) {
		TaxRate4 = 3800;
	} else if (annualRev4Int > RevRng10 && annualRev4Int <= RevRng11) {
		TaxRate4 = 4100;
	} else if (annualRev4Int > RevRng11 && annualRev4Int <= RevRng12) {
		TaxRate4 = 4400;
	} else if (annualRev4Int > RevRng12 && annualRev4Int <= RevRng13) {
		TaxRate4 = 4700;
	} else if (annualRev4Int > RevRng13 && annualRev4Int <= RevRng14) {
		TaxRate4 = 5000;
	} else if (annualRev4Int > RevRng14 && annualRev4Int <= RevRng15) {
		TaxRate4 = 5500;
	} else if (annualRev4Int > RevRng15 && annualRev4Int <= RevRng16) {
		TaxRate4 = 6000;
	} else if (annualRev4Int > RevRng16 && annualRev4Int <= RevRng17) {
		TaxRate4 = 6500;
	} else if (annualRev4Int > RevRng17 && annualRev4Int <= RevRng18) {
		TaxRate4 = 7000;
	} else if (annualRev4Int > RevRng18 && annualRev4Int <= RevRng19) {
		TaxRate4 = 7500;
	} else if (annualRev4Int > RevRng19 && annualRev4Int <= RevRng20) {
		TaxRate4 = 8700;
	} else if (annualRev4Int > RevRng20 && annualRev4Int <= RevRng21) {
		TaxRate4 = 9900;
	} else if (annualRev4Int > RevRng21 && annualRev4Int <= RevRng22) {
		TaxRate4 = 11100;
	} else if (annualRev4Int > RevRng22 && annualRev4Int <= RevRng23) {
		TaxRate4 = 12300;
	} else if (annualRev4Int > RevRng23 && annualRev4Int <= RevRng24) {
		TaxRate4 = 13500;
	} else if (annualRev4Int > RevRng24 && annualRev4Int <= RevRng25) {
		TaxRate4 = 14700;
	} else if (annualRev4Int > RevRng25 && annualRev4Int <= RevRng26) {
		TaxRate4 = 15900;
	} else if (annualRev4Int > RevRng26 && annualRev4Int <= RevRng27) {
		TaxRate4 = 17100;
	} else if (annualRev4Int > RevRng27 && annualRev4Int <= RevRng28) {
		TaxRate4 = 18300;
	} else if (annualRev4Int > RevRng28 && annualRev4Int <= RevRng29) {
		TaxRate4 = 19500;
	} else if (annualRev4Int > RevRng29 && annualRev4Int <= RevRng30) {
		TaxRate4 = 20700;
	} else if (annualRev4Int > RevRng30 && annualRev4Int <= RevRng31) {
		TaxRate4 = 21900;
	} else if (annualRev4Int > RevRng31 && annualRev4Int <= RevRng32) {
		TaxRate4 = 23100;
	} else if (annualRev4Int > RevRng32 && annualRev4Int <= RevRng33) {
		TaxRate4 = 24300;
	} else if (annualRev4Int > RevRng33 && annualRev4Int <= RevRng34) {
		TaxRate4 = 25500;
	} else if (annualRev4Int > RevRng34 && annualRev4Int <= RevRng35) {
		TaxRate4 = 26700;
	} else if (annualRev4Int > RevRng35) {
		TaxRate4 = 26700;
	}

	//Annual Revenue for Comp 5 tax calc
	if (annualRev5Int <= RevRng0) {
		TaxRate5 = 600;
	} else if (annualRev5Int > RevRng0 && annualRev5Int <= RevRng1) {
		TaxRate5 = 600;
	} else if (annualRev5Int > RevRng1 && annualRev5Int <= RevRng2) {
		TaxRate5 = 900;
	} else if (annualRev5Int > RevRng2 && annualRev5Int <= RevRng3) {
		TaxRate5 = 1200;
	} else if (annualRev5Int > RevRng3 && annualRev5Int <= RevRng4) {
		TaxRate5 = 1800;
	} else if (annualRev5Int > RevRng4 && annualRev5Int <= RevRng5) {
		TaxRate5 = 2200;
	} else if (annualRev5Int > RevRng5 && annualRev5Int <= RevRng6) {
		TaxRate5 = 2600;
	} else if (annualRev5Int > RevRng6 && annualRev5Int <= RevRng7) {
		TaxRate5 = 2900;
	} else if (annualRev5Int > RevRng7 && annualRev5Int <= RevRng8) {
		TaxRate5 = 3200;
	} else if (annualRev5Int > RevRng8 && annualRev5Int <= RevRng9) {
		TaxRate5 = 3500;
	} else if (annualRev5Int > RevRng9 && annualRev5Int <= RevRng10) {
		TaxRate5 = 3800;
	} else if (annualRev5Int > RevRng10 && annualRev5Int <= RevRng11) {
		TaxRate5 = 4100;
	} else if (annualRev5Int > RevRng11 && annualRev5Int <= RevRng12) {
		TaxRate5 = 4400;
	} else if (annualRev5Int > RevRng12 && annualRev5Int <= RevRng13) {
		TaxRate5 = 4700;
	} else if (annualRev5Int > RevRng13 && annualRev5Int <= RevRng14) {
		TaxRate5 = 5000;
	} else if (annualRev5Int > RevRng14 && annualRev5Int <= RevRng15) {
		TaxRate5 = 5500;
	} else if (annualRev5Int > RevRng15 && annualRev5Int <= RevRng16) {
		TaxRate5 = 6000;
	} else if (annualRev5Int > RevRng16 && annualRev5Int <= RevRng17) {
		TaxRate5 = 6500;
	} else if (annualRev5Int > RevRng17 && annualRev5Int <= RevRng18) {
		TaxRate5 = 7000;
	} else if (annualRev5Int > RevRng18 && annualRev5Int <= RevRng19) {
		TaxRate5 = 7500;
	} else if (annualRev5Int > RevRng19 && annualRev5Int <= RevRng20) {
		TaxRate5 = 8700;
	} else if (annualRev5Int > RevRng20 && annualRev5Int <= RevRng21) {
		TaxRate5 = 9900;
	} else if (annualRev5Int > RevRng21 && annualRev5Int <= RevRng22) {
		TaxRate5 = 11100;
	} else if (annualRev5Int > RevRng22 && annualRev5Int <= RevRng23) {
		TaxRate5 = 12300;
	} else if (annualRev5Int > RevRng23 && annualRev5Int <= RevRng24) {
		TaxRate5 = 13500;
	} else if (annualRev5Int > RevRng24 && annualRev5Int <= RevRng25) {
		TaxRate5 = 14700;
	} else if (annualRev5Int > RevRng25 && annualRev5Int <= RevRng26) {
		TaxRate5 = 15900;
	} else if (annualRev5Int > RevRng26 && annualRev5Int <= RevRng27) {
		TaxRate5 = 17100;
	} else if (annualRev5Int > RevRng27 && annualRev5Int <= RevRng28) {
		TaxRate5 = 18300;
	} else if (annualRev5Int > RevRng28 && annualRev5Int <= RevRng29) {
		TaxRate5 = 19500;
	} else if (annualRev5Int > RevRng29 && annualRev5Int <= RevRng30) {
		TaxRate5 = 20700;
	} else if (annualRev5Int > RevRng30 && annualRev5Int <= RevRng31) {
		TaxRate5 = 21900;
	} else if (annualRev5Int > RevRng31 && annualRev5Int <= RevRng32) {
		TaxRate5 = 23100;
	} else if (annualRev5Int > RevRng32 && annualRev5Int <= RevRng33) {
		TaxRate5 = 24300;
	} else if (annualRev5Int > RevRng33 && annualRev5Int <= RevRng34) {
		TaxRate5 = 25500;
	} else if (annualRev5Int > RevRng34 && annualRev5Int <= RevRng35) {
		TaxRate5 = 26700;
	} else if (annualRev5Int > RevRng35) {
		TaxRate5 = 26700;
	}
	
	//Annual Rev for all Comp combined ratio calc
	if (annualRev <= RevRng0) {
		CoreScale = -Math.abs(-0.25);
		AddOnsScale = -Math.abs(-0.25);
	} else if (annualRev > RevRng0 && annualRev <= RevRng1) {
		CoreScale = -Math.abs(-0.25);
		AddOnsScale = -Math.abs(-0.25);
	} else if (annualRev > RevRng1 && annualRev <= RevRng2) {
		CoreScale = -Math.abs(-0.25);
		AddOnsScale = -Math.abs(-0.25);
	} else if (annualRev > RevRng2 && annualRev <= RevRng3) {
		CoreScale = -Math.abs(-0.25);
		AddOnsScale = -Math.abs(-0.25);
	} else if (annualRev > RevRng3 && annualRev <= RevRng4) {
		CoreScale = -Math.abs(-0.20);
		AddOnsScale = -Math.abs(-0.20);
	} else if (annualRev > RevRng4 && annualRev <= RevRng5) {
		CoreScale = -Math.abs(-0.05);
		AddOnsScale = -Math.abs(-0.05);
	} else if (annualRev > RevRng5 && annualRev <= RevRng6) {
		CoreScale = -Math.abs(-0.05);
		AddOnsScale = -Math.abs(-0.05);
	} else if (annualRev > RevRng6 && annualRev <= RevRng7) {
		CoreScale = -Math.abs(-0.05);
		AddOnsScale = -Math.abs(-0.05);
	} else if (annualRev > RevRng7 && annualRev <= RevRng8) {
		CoreScale = 0;
		AddOnsScale = 0;
	} else if (annualRev > RevRng8 && annualRev <= RevRng9) {
		CoreScale = 0;
		AddOnsScale = 0;
	} else if (annualRev > RevRng9 && annualRev <= RevRng10) {
		CoreScale = 0;
		AddOnsScale = 0;
	} else if (annualRev > RevRng10 && annualRev <= RevRng11) {
		CoreScale = 0;
		AddOnsScale = 0;
	} else if (annualRev > RevRng11 && annualRev <= RevRng12) {
		CoreScale = 0;
		AddOnsScale = 0;
	} else if (annualRev > RevRng12 && annualRev <= RevRng13) {
		CoreScale = 0;
		AddOnsScale = 0;
	} else if (annualRev > RevRng13 && annualRev <= RevRng14) {
		CoreScale = 0;
		AddOnsScale = 0;
	} else if (annualRev > RevRng14 && annualRev <= RevRng15) {
		CoreScale = 0.05;
		AddOnsScale = 0.05;
	} else if (annualRev > RevRng15 && annualRev <= RevRng16) {
		CoreScale = 0.05;
		AddOnsScale = 0.05;
	} else if (annualRev > RevRng16 && annualRev <= RevRng17) {
		CoreScale = 0.10;
		AddOnsScale = 0.10;
	} else if (annualRev > RevRng17 && annualRev <= RevRng18) {
		CoreScale = 0.10;
		AddOnsScale = 0.10;
	} else if (annualRev > RevRng18 && annualRev <= RevRng19) {
		CoreScale = 0.15;
		AddOnsScale = 0.15;
	} else if (annualRev > RevRng19 && annualRev <= RevRng20) {
		CoreScale = 0.15;
		AddOnsScale = 0.15;
	} else if (annualRev > RevRng20 && annualRev <= RevRng21) {
		CoreScale = 0.15;
		AddOnsScale = 0.15;
	} else if (annualRev > RevRng21 && annualRev <= RevRng22) {
		CoreScale = 0.15;
		AddOnsScale = 0.15;
	} else if (annualRev > RevRng22 && annualRev <= RevRng23) {
		CoreScale = 0.20;
		AddOnsScale = 0.25;
	} else if (annualRev > RevRng23 && annualRev <= RevRng24) {
		CoreScale = 0.20;
		AddOnsScale = 0.50;
	} else if (annualRev > RevRng24 && annualRev <= RevRng25) {
		CoreScale = 0.25;
		AddOnsScale = 0.75;
	} else if (annualRev > RevRng25 && annualRev <= RevRng26) {
		CoreScale = 0.25;
		AddOnsScale = 1.00;
	} else if (annualRev > RevRng26 && annualRev <= RevRng27) {
		CoreScale = 0.25;
		AddOnsScale = 1.25;
	} else if (annualRev > RevRng27 && annualRev <= RevRng28) {
		CoreScale = 0.30;
		AddOnsScale = 1.50;
	} else if (annualRev > RevRng28 && annualRev <= RevRng29) {
		CoreScale = 0.30;
		AddOnsScale = 1.75;
	} else if (annualRev > RevRng29 && annualRev <= RevRng30) {
		CoreScale = 0.30;
		AddOnsScale = 2.00;
	} else if (annualRev > RevRng30 && annualRev <= RevRng31) {
		CoreScale = 0.40;
		AddOnsScale = 2.25;
	} else if (annualRev > RevRng31 && annualRev <= RevRng32) {
		CoreScale = 0.40;
		AddOnsScale = 2.50;
	} else if (annualRev > RevRng32 && annualRev <= RevRng33) {
		CoreScale = 0.40;
		AddOnsScale = 2.75;
	} else if (annualRev > RevRng33 && annualRev <= RevRng34) {
		CoreScale = 0.50;
		AddOnsScale = 3.00;
	} else if (annualRev > RevRng34 && annualRev <= RevRng35) {
		CoreScale = 0.50;
		AddOnsScale = 3.25;
	} else if (annualRev > RevRng35) {
		CoreScale = 0.50;
		AddOnsScale = 3.25;
	}
	
	//Update Financial Statements
	var optionFinancialType = "";
	var convertOption = 1;
	var TotalFinancialRate = 0;
	var financialRate = 206.25;
	var financialBase = 68.75;
	
	var QualDepartment = document.getElementById('QualDepartment').value;
	var NumFiles = document.getElementById('NumFiles').value;
	
	if (NumComp == 0) {
		optionFinancialType = "Standard"
		document.getElementById('FinancialTypeCalc').value = "Single-Entity";
		document.getElementById('FinancialTypeCost').value = "Included";	
		document.getElementById('FinancialTypeCost').style.backgroundColor = "#7CFC00";
	} else if (NumComp == 1 && QualDepartment != 1) {
		optionFinancialType = "Standard"
		document.getElementById('FinancialTypeCalc').value = "Single-Entity";
		document.getElementById('FinancialTypeCost').value = "Included";
		document.getElementById('FinancialTypeCost').style.backgroundColor = "#7CFC00";
	} else if (NumComp == 1 && QualDepartment == 1) {
		optionFinancialType = "Classes"
		document.getElementById('FinancialTypeCalc').value = "Single-Entity: Classes";
		document.getElementById('FinancialTypeCost').value = "Included";
		document.getElementById('FinancialTypeCost').style.backgroundColor = "#7CFC00";
	} else if (NumComp > 1 && NumFiles == 1) {
		optionFinancialType = "Classes"
		document.getElementById('FinancialTypeCalc').value = "Multi-Entity: Single File";
		document.getElementById('FinancialTypeCost').value = "Included";
		document.getElementById('FinancialTypeCost').style.backgroundColor = "#7CFC00";
	} else if (NumComp > 1 && NumFiles == 0) {
		optionFinancialType = "Multiple"
		document.getElementById('FinancialTypeCalc').value = "Multi-Entity: Multiple Files";
		document.getElementById('FinancialTypeCost').value = "Included";
		document.getElementById('FinancialTypeCost').style.backgroundColor = "#7CFC00";
	}
	
	
	if (optionFinancialType === "Standard") {
		convertOption = (1 * financialRate) + financialBase;
		TotalFinancialRate = convertOption * (1 + CoreScale);
	} else if (optionFinancialType === "Classes") {
		convertOption = (1.5 * financialRate) + financialBase;
		TotalFinancialRate = convertOption * (1 + CoreScale);
	} else if (optionFinancialType === "Multiple") {
		convertOption = (2 * financialRate) + financialBase;
		TotalFinancialRate = convertOption * (1 + CoreScale);
	} 

	
	//Update Forecasting
	var convertFcstCount1 = document.getElementById('FcstCount1').value;
	var convertFcstCount2 = document.getElementById('FcstCount2').value;
	var convertFcstCount3 = document.getElementById('FcstCount3').value;
	var convertFcstCount4 = document.getElementById('FcstCount4').value;
	var convertFcstCount5 = document.getElementById('FcstCount5').value;
	var convertFcstCount = 0;
	var convertFcstRate = 0;
	var TotalFcstRate = 0;
	var forecastRate = 125;
	var forecastBase = 125;
	

	if (NumComp == 0 || NumComp ==1) {
		convertFcstCount = (parseInt(convertFcstCount1,10));
	} else if (NumComp == 2) {
		convertFcstCount = (parseInt(convertFcstCount1,10) + parseInt(convertFcstCount2,10));
	} else if (NumComp == 3) {
		convertFcstCount = (parseInt(convertFcstCount1,10) + parseInt(convertFcstCount2,10) + parseInt(convertFcstCount3,10));
	} else if (NumComp == 4) {
		convertFcstCount = (parseInt(convertFcstCount1,10) + parseInt(convertFcstCount2,10) + parseInt(convertFcstCount3,10) + parseInt(convertFcstCount4,10));
	} else if (NumComp == 5) {
		convertFcstCount = (parseInt(convertFcstCount1,10) + parseInt(convertFcstCount2,10) + parseInt(convertFcstCount3,10) + parseInt(convertFcstCount4,10) + parseInt(convertFcstCount5,10));
	}

	document.getElementById('FcstCountCalc').value = convertFcstCount;
	
	if (convertFcstCount == 0) {
		TotalFcstRate = 0;
		
		document.getElementById('FcstCountCost').value = "Not Included";
		document.getElementById('FcstCountCost').style.backgroundColor = "#F08080";
	} else {
		convertFcstRate = (convertFcstCount * forecastRate) + forecastBase;
		TotalFcstRate = convertFcstRate * (1 + CoreScale);
		document.getElementById('FcstCountCost').value = "Included";
		document.getElementById('FcstCountCost').style.backgroundColor = "#7CFC00";
	}

	
	
	//Update Virtual CFO Services
	var CFORate = 400;
	var TotalCFORate = 0;
	
	if (VCFOTotal > 0) {
		TotalCFORate = CFORate * (1 + CoreScale);
	} else {
		TotalCFORate = 0;
	}

	
	
	
	//Update Payroll Administration
	//Update Emploee Expense Tracking
	var EmpCounter1 = document.getElementById('EmpCount1').value;
	var EmpCounter2 = document.getElementById('EmpCount2').value;
	var EmpCounter3 = document.getElementById('EmpCount3').value;
	var EmpCounter4 = document.getElementById('EmpCount4').value;
	var EmpCounter5 = document.getElementById('EmpCount5').value;
	var EmpCounter = 0;
	var payrollTypeInt = document.getElementById('PayrollType').value;
	var ExpTypeInt = document.getElementById('ExpTrackType').value;
	var payTypeFactor = 0;
	var expTypeFactor = 0;
	var EmpExpRate = 0;
	var EmpRate = 0;
	
	
	
	if (NumComp == 0 || NumComp == 1) {
		EmpCounter = (parseInt(EmpCounter1,10));
	} else if (NumComp == 2) {
		EmpCounter = (parseInt(EmpCounter1,10) + parseInt(EmpCounter2,10));
	} else if (NumComp == 3) {
		EmpCounter = (parseInt(EmpCounter1,10) + parseInt(EmpCounter2,10) + parseInt(EmpCounter3,10));
	} else if (NumComp == 4) {
		EmpCounter = (parseInt(EmpCounter1,10) + parseInt(EmpCounter2,10) + parseInt(EmpCounter3,10) + parseInt(EmpCounter4,10));
	} else if (NumComp == 5) {
		EmpCounter = (parseInt(EmpCounter1,10) + parseInt(EmpCounter2,10) + parseInt(EmpCounter3,10) + parseInt(EmpCounter4,10) + parseInt(EmpCounter5,10));
	}
	
	var EmpRng0 = 10;
	var EmpRng1 = 20;
	var EmpRng2 = 30;
	var EmpRng3 = 40;
	var EmpRng4 = 50;
	var EmpRng5 = 100;
	var EmpRng6 = 150;
	var EmpRng7 = 200;
	var EmpRng8 = 250;
	var EmpRng9 = 251;
	
	if (payrollTypeInt == 0) {
		payTypeFactor = 0;
		document.getElementById('PayrollAdminCost').value = "Not Included";
		document.getElementById('PayrollAdminCost').style.backgroundColor = "#F08080";
	} else if (payrollTypeInt == 1) {
		payTypeFactor = 2;
		document.getElementById('PayrollAdminCost').value = "Included";
		document.getElementById('PayrollAdminCost').style.backgroundColor = "#7CFC00";
	} else if (payrollTypeInt == 2) {
		payTypeFactor = 1;
		document.getElementById('PayrollAdminCost').value = "Included";
		document.getElementById('PayrollAdminCost').style.backgroundColor = "#7CFC00";
	} else if (payrollTypeInt == 3) {
		payTypeFactor = 1;
		document.getElementById('PayrollAdminCost').value = "Included";
		document.getElementById('PayrollAdminCost').style.backgroundColor = "#7CFC00";
	} else if (payrollTypeInt == 4) {
		payTypeFactor = 0.5;
		document.getElementById('PayrollAdminCost').value = "Included";
		document.getElementById('PayrollAdminCost').style.backgroundColor = "#7CFC00";
	}
	
	
	
		if (EmpCounter <= EmpRng0) {
			EmpRate = payTypeFactor * 50;
		} else if (EmpCounter > EmpRng0 && EmpCounter <= EmpRng1) {
			EmpRate = payTypeFactor * 70;
		} else if (EmpCounter > EmpRng1 && EmpCounter <= EmpRng2) {
			EmpRate = payTypeFactor * 90;
		} else if (EmpCounter > EmpRng2 && EmpCounter <= EmpRng3) {
			EmpRate = payTypeFactor * 110;
		} else if (EmpCounter > EmpRng3 && EmpCounter <= EmpRng4) {
			EmpRate = payTypeFactor * 130;
		} else if (EmpCounter > EmpRng4 && EmpCounter <= EmpRng5) {
			EmpRate = payTypeFactor * 175;
		} else if (EmpCounter > EmpRng5 && EmpCounter <= EmpRng6) {
			EmpRate = payTypeFactor * 200;
		} else if (EmpCounter > EmpRng6 && EmpCounter <= EmpRng7) {
			EmpRate = payTypeFactor * 225;
		} else if (EmpCounter > EmpRng7 && EmpCounter <= EmpRng8) {
			EmpRate = payTypeFactor * 250;
		} else if (EmpCounter > EmpRng8 && EmpCounter <= EmpRng9) {
			EmpRate = payTypeFactor * 300;
		} else if (EmpCounter > EmpRng9) {
			EmpRate = payTypeFactor * 300;
		}

	if (ExpTypeInt == 0) {
		expTypeFactor = 0;
		document.getElementById('EmpExpenseTrackCost').value = "Not Included";
		document.getElementById('EmpExpenseTrackCost').style.backgroundColor = "#F08080";
	} else if (ExpTypeInt == 1) {
		expTypeFactor = 2;
		document.getElementById('EmpExpenseTrackCost').value = "Included";
		document.getElementById('EmpExpenseTrackCost').style.backgroundColor = "#7CFC00";
	} else if (ExpTypeInt == 2) {
		expTypeFactor = 1;
		document.getElementById('EmpExpenseTrackCost').value = "Included";
		document.getElementById('EmpExpenseTrackCost').style.backgroundColor = "#7CFC00";
	} else if (ExpTypeInt == 3) {
		expTypeFactor = 1;
		document.getElementById('EmpExpenseTrackCost').value = "Included";
		document.getElementById('EmpExpenseTrackCost').style.backgroundColor = "#7CFC00";
	} else if (ExpTypeInt == 4) {
		expTypeFactor = 0.5;
		document.getElementById('EmpExpenseTrackCost').value = "Included";
		document.getElementById('EmpExpenseTrackCost').style.backgroundColor = "#7CFC00";
	}

		if (EmpCounter <= EmpRng0) {
			EmpExpRate = expTypeFactor * 25;
		} else if (EmpCounter > EmpRng0 && EmpCounter <= EmpRng1) {
			EmpExpRate = expTypeFactor * 35;
		} else if (EmpCounter > EmpRng1 && EmpCounter <= EmpRng2) {
			EmpExpRate = expTypeFactor * 45;
		} else if (EmpCounter > EmpRng2 && EmpCounter <= EmpRng3) {
			EmpExpRate = expTypeFactor * 55;
		} else if (EmpCounter > EmpRng3 && EmpCounter <= EmpRng4) {
			EmpExpRate = expTypeFactor * 65;
		} else if (EmpCounter > EmpRng4 && EmpCounter <= EmpRng5) {
			EmpExpRate = expTypeFactor * 75;
		} else if (EmpCounter > EmpRng5 && EmpCounter <= EmpRng6) {
			EmpExpRate = expTypeFactor * 85;
		} else if (EmpCounter > EmpRng6 && EmpCounter <= EmpRng7) {
			EmpExpRate = expTypeFactor * 95;
		} else if (EmpCounter > EmpRng7 && EmpCounter <= EmpRng8) {
			EmpExpRate = expTypeFactor * 105;
		} else if (EmpCounter > EmpRng8 && EmpCounter <= EmpRng9) {
			EmpExpRate = expTypeFactor * 115;
		} else if (EmpCounter > EmpRng9) {
			EmpExpRate = expTypeFactor * 115;
		}

	
	//Update Cash Flow Management
	var CFRate = 0;
	
	if (document.QuoterCalc.chkCashFlow.checked == true) {
		if (document.QuoterCalc.chkAccountsPayable.checked == true || document.QuoterCalc.chkAccountsRecievable.checked == true) {
			CFRate = 0;
			document.getElementById('CashFlowCost').value = "Included with AR/AP";
			document.getElementById('CashFlowCost').style.backgroundColor = "#7CFC00";
		} else {
			CFRate = 200;
			document.getElementById('CashFlowCost').value = "Included";
			document.getElementById('CashFlowCost').style.backgroundColor = "#7CFC00";
		}
	} else {
		CFRate = 0;
		document.getElementById('CashFlowCost').value = "Not Included";
		document.getElementById('CashFlowCost').style.backgroundColor = "#F08080";
	}
	

	//Update Bank Reconciliations
	var convertBankRecCount = document.getElementById('BankRecs').value;
	var BankRecRate = 25;
	var TotalBankRecRate = 0;
	
	if (convertBankRecCount == 0) {
		TotalBankRecRate = 0;
		document.getElementById('BankRecsCost').value = "Not Included";
		document.getElementById('BankRecsCost').style.backgroundColor = "#F08080";
	} else {
		TotalBankRecRate = BankRecRate * convertBankRecCount;
		document.getElementById('BankRecsCost').value = "Included";
		document.getElementById('BankRecsCost').style.backgroundColor = "#7CFC00";
	}
	
	
	//Update Credit Card Reconciliations
	var convertCreditCardCount = document.getElementById('CreditCardRecs').value
	var CreditCardRecRate = 25;
	var TotalCreditCardRecRate = 0;
	
	
	if (convertCreditCardCount == 0) {
		TotalCreditCardRecRate = 0;
		document.getElementById('CreditCardRecsCost').value = "Not Included";
		document.getElementById('CreditCardRecsCost').style.backgroundColor = "#F08080";
	} else {
		TotalCreditCardRecRate = CreditCardRecRate * convertCreditCardCount;
		document.getElementById('CreditCardRecsCost').value = "Included";
		document.getElementById('CreditCardRecsCost').style.backgroundColor = "#7CFC00";
	}
	
	
	
	//Update Accounts Payable
	var optionAP = document.getElementById('AccountsPayable').value
	var TotalAPRate = 0;
	
	if (document.QuoterCalc.chkAccountsPayable.checked == true) {		
		document.QuoterCalc.chkCashFlow.checked = true;
		CFRate = 0;
		document.getElementById('CashFlowCost').value = "Included with AR/AP";
		document.getElementById('CashFlowCost').style.backgroundColor = "#7CFC00";
		if (optionAP === "Low") {
			TotalAPRate = 350 * (1 + AddOnsScale);
			document.getElementById('AccountsPayableCost').value = "Included";
			document.getElementById('AccountsPayableCost').style.backgroundColor = "#7CFC00";
		} else if (optionAP === "Medium") {
			TotalAPRate = 500 * (1 + AddOnsScale);
			document.getElementById('AccountsPayableCost').value = "Included";
			document.getElementById('AccountsPayableCost').style.backgroundColor = "#7CFC00";
		} else if (optionAP === "High") {
			TotalAPRate = 650 * (1 + AddOnsScale);
			document.getElementById('AccountsPayableCost').value = "Included";
			document.getElementById('AccountsPayableCost').style.backgroundColor = "#7CFC00";
		} 
	} else {
		TotalAPRate = 0;
		document.getElementById('AccountsPayableCost').value = "Not Included";
		document.getElementById('AccountsPayableCost').style.backgroundColor = "#F08080";
	}	
	
	
	
	//Update Accounts Receivable
	var optionAR = document.getElementById('AccountsRecievable').value
	var TotalARRate = 0;
	
	if (document.QuoterCalc.chkAccountsRecievable.checked == true) {	
		document.QuoterCalc.chkCashFlow.checked = true;
		CFRate = 0;
		document.getElementById('CashFlowCost').value = "Included with AR/AP";
		document.getElementById('CashFlowCost').style.backgroundColor = "#7CFC00";
		if (optionAR === "Low") {
			TotalARRate = 350 * (1 + AddOnsScale);
			document.getElementById('AccountsRecievableCost').value = "Included";
			document.getElementById('AccountsRecievableCost').style.backgroundColor = "#7CFC00";
		} else if (optionAR === "Medium") {
			TotalARRate = 500 * (1 + AddOnsScale);
			document.getElementById('AccountsRecievableCost').value = "Included";
			document.getElementById('AccountsRecievableCost').style.backgroundColor = "#7CFC00";
		} else if (optionAR === "High") {
			TotalARRate = 650 * (1 + AddOnsScale);
			document.getElementById('AccountsRecievableCost').value = "Included";
			document.getElementById('AccountsRecievableCost').style.backgroundColor = "#7CFC00";
		} 
	} else {
		TotalARRate = 0;
		document.getElementById('AccountsRecievableCost').value = "Not Included";
		document.getElementById('AccountsRecievableCost').style.backgroundColor = "#F08080";
	}	
	
	
	
	
	//Update Business Tax
	var weekTaxRate = 0;
	var weekTaxRate1 = (TaxRate1 / 52);
	var weekTaxRate2 = (TaxRate2 / 52);
	var weekTaxRate3 = (TaxRate3 / 52);
	var weekTaxRate4 = (TaxRate4 / 52);
	var weekTaxRate5 = (TaxRate5 / 52);
	var totalTaxRate = 0;
	
	if (NumComp == 0 || NumComp == 1) {
		totalTaxRate = weekTaxRate1;
	} else if (NumComp == 2) {
		totalTaxRate = (weekTaxRate1 + weekTaxRate2);
	} else if (NumComp == 3) {
		totalTaxRate = (weekTaxRate1 + weekTaxRate2 + weekTaxRate3);
	} else if (NumComp == 4) {
		totalTaxRate = (weekTaxRate1 + weekTaxRate2 + weekTaxRate3 + weekTaxRate4);
	} else if (NumComp == 5) {
		totalTaxRate = (weekTaxRate1 + weekTaxRate2 + weekTaxRate3 + weekTaxRate4 + weekTaxRate5);
	}
	
	if (document.QuoterCalc.chkBusinessTax.checked == true) {	
		weekTaxRate = totalTaxRate;
		document.getElementById('BusinessTaxCost').value = "Included";
		document.getElementById('BusinessTaxCost').style.backgroundColor = "#7CFC00";
	} else {
		weekTaxRate = 0;
		document.getElementById('BusinessTaxCost').value = "Not Included";
		document.getElementById('BusinessTaxCost').style.backgroundColor = "#F08080";
	}	
	
	
	
	//Update Individual Tax
	var IndCount = document.getElementById('IndividualTax').value;
	var IndRate = 6;
	var TotalIndRate = 0;
		
	if (IndCount != 0) {	
		TotalIndRate = (IndCount * IndRate);	
		document.getElementById('IndividualTaxCost').value = "Included";
		document.getElementById('IndividualTaxCost').style.backgroundColor = "#7CFC00";
	} else {
		TotalIndRate = 0;	
		document.getElementById('IndividualTaxCost').value = "Not Included";
		document.getElementById('IndividualTaxCost').style.backgroundColor = "#F08080";
	}
	

	
	//Update Multi-State Tax
	var MultiCount = document.getElementById('MultiStateTax').value
	var MultiRate = 4;
	var TotalMultiRate = 0;
	
	if (MultiCount != 0) {		
		TotalMultiRate = MultiCount * MultiRate;
		document.getElementById('MultiStateTaxCost').value = "Included";
		document.getElementById('MultiStateTaxCost').style.backgroundColor = "#7CFC00";
	} else {
		TotalMultiRate = 0;	
		document.getElementById('MultiStateTaxCost').value = "NotIncluded";
		document.getElementById('MultiStateTaxCost').style.backgroundColor = "#F08080";
	}
	
	
	
	//Update Sales Tax
	var SalesTaxCount = document.getElementById('SalesTax').value
	var SalesTaxRate = 4;
	var TotalSalesTaxRate = 0;

	if (SalesTaxCount != 0) {		
		TotalSalesTaxRate = SalesTaxCount * SalesTaxRate;
		document.getElementById('SalesTaxCost').value = "Included";
		document.getElementById('SalesTaxCost').style.backgroundColor = "#7CFC00";
	} else {
		TotalSalesTaxRate = 0;	
		document.getElementById('SalesTaxCost').value = "Not Included";
		document.getElementById('SalesTaxCost').style.backgroundColor = "#F08080";
	}
	
	
	
	//Update Personal Property Tax
	var PPTCount = document.getElementById('PersonalPropertyTax').value
	var PPTRate = 4;
	var TotalPPTRate = 0;
	
	if (PPTCount != 0) {	
		TotalPPTRate = PPTCount * PPTRate;
		document.getElementById('PersonalPropertyTaxCost').value = "Included";
		document.getElementById('PersonalPropertyTaxCost').style.backgroundColor = "#7CFC00";
	} else {
		TotalPPTRate = 0;
		document.getElementById('PersonalPropertyTaxCost').value = "Not Included";
		document.getElementById('PersonalPropertyTaxCost').style.backgroundColor = "#F08080";
	}
	
	
	//Update 1099s
	var count1099 = document.getElementById('1099Filings').value
	var rate1099 = 0;
	
	if (count1099 != 0) {	
		rate1099 = ((count1099/10*50+150)/52);
		document.getElementById('1099FilingsCost').value = "Included";
		document.getElementById('1099FilingsCost').style.backgroundColor = "#7CFC00";
	} else {
		rate1099 = 0;	
		document.getElementById('1099FilingsCost').value = "Not Included";
		document.getElementById('1099FilingsCost').style.backgroundColor = "#F08080";
	}
	
	
	
	//Calculate Weekly and Annual Fees
	var TotalWeeklyFee = 0;
	var AnnualizeFee = 0;
	
		
		TotalWeeklyFee = TotalFinancialRate + TotalFcstRate + TotalCFORate + EmpRate + EmpExpRate + CFRate + TotalBankRecRate + TotalCreditCardRecRate + TotalAPRate + TotalARRate + weekTaxRate + 
							TotalIndRate + TotalMultiRate + TotalSalesTaxRate + TotalPPTRate + rate1099;
		AnnualizeFee = (TotalWeeklyFee * 52);
	
		document.getElementById('TotalWeeklyCost').value = TotalWeeklyFee.toFixed(0);
		document.getElementById('TotalAnnualFee').value = AnnualizeFee.toFixed(0);
	
	
		//Determine Service Type and calculate Onboarding Fee
		var convertServiceRate = "";
		var ServiceFactor = 0;

		if (VCFOTotal == 0 && convertFcstCount == 0) {
			convertServiceRate = "Transactional";
		} else if (VCFOTotal == 0 && convertFcstCount > 0) {
			convertServiceRate = "Controller";
		} else if (VCFOTotal > 0) {
			convertServiceRate = "CFO";
		}
		
		
		if (convertServiceRate === "CFO") {
			ServiceFactor = 8;
			document.getElementById('CFOServicesCost').value = "Included";
			document.getElementById('CFOServicesCost').style.backgroundColor = "#7CFC00";
		} else if (convertServiceRate === "Controller") {
			ServiceFactor = 6;
			document.getElementById('CFOServicesCost').value = "Not Included";
			document.getElementById('CFOServicesCost').style.backgroundColor = "#F08080";
		} else if (convertServiceRate === "Transactional") {
			ServiceFactor = 4;
			document.getElementById('CFOServicesCost').value = "Not Included";
			document.getElementById('CFOServicesCost').style.backgroundColor = "#F08080";
		} 
	
		var OnboardingFee = ServiceFactor * TotalWeeklyFee;
		document.getElementById('OnboardingCost').value = OnboardingFee.toFixed(0);
		

	
}