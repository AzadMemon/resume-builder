function ResumeCtrl($scope, $routeParams){
	$scope.sections = [];

	$scope.section = {

	}
	$scope.options = [
		'-','&#8226'
	];

	$scope.addSection = function(){
		var sectionNumber = $scope.sections.length + 1;

		$scope.sections.push({
			"sectionNumber": sectionNumber,
			"sectionId": "section"+ sectionNumber,
			"sectionTitle": "Section " + sectionNumber,
			"subsections":[{
				"id": 1,
				"jobTitle": "",
				"date": "",
				"location": "",
				"companyName": "",
				"bullets": [{
					"label": "Bullet Point 1",
					"name": "bullet1",
					"value": "",
					"bulletType": ""
				}],
				"bulletCount": 1,
				"dash": "",
				"showDate": true,
				"showCompanyName": true,
				"showJobTitle": true,
				"showLocation": true
			}]
		});
	}

	$scope.resetSection = function(section){
		section.sectionTitle = "Section " + section.sectionNumber;
		section.subsections = [{
			"id": 1,
			"jobTitle": "",
			"date": "",
			"location": "",
			"companyName": "",
			"bullets": [{
				"label": "Bullet Point 1",
				"name": "bullet1",
				"value": "",
				"bulletType": ""
			}],
			"bulletCount": 1,
			"dash": "",
			"showDate": true,
			"showCompanyName": true,
			"showJobTitle": true,
			"showLocation": true
		}]
	}

	$scope.removeSection = function(section){
		var sectionDeleted = false;
		for(var i = 0; i<$scope.sections.length;i++){
			if($scope.sections[i].sectionId == section.sectionId){
				$scope.sections.splice(i, 1);
				sectionDeleted = true;
				i--
			}
			else if(sectionDeleted){
				$scope.sections[i].sectionNumber-=1;
				$scope.sections[i].sectionId = "section" + $scope.sections[i].sectionNumber;
				if($scope.sections[i].sectionTitle.substring(0, 7)=="Section"){
					$scope.sections[i].sectionTitle = "Section " + $scope.sections[i].sectionNumber;
				}
			}
		}
	}

	$scope.hasSection = function(){
		return sections.section.length>0;
	}

	$scope.addSubsection = function(section){
		section.subsections.push({
				"id": section.subsections.length+1,
				"jobTitle": "",
				"date": "",
				"location": "",
				"companyName": "",
				"bullets": [{
					"label": "Bullet Point 1",
					"name": "bullet1",
					"value": "",
					"bulletType": ""
				}],
				"bulletCount": 1,
				"dash": "",
				"showDate": true,
				"showCompanyName": true,
				"showJobTitle": true,
				"showLocation": true
			});
	}

	$scope.resetSubsection = function(subsection){
		subsection.jobTitle="";
		subsection.date="";
		subsection.location="";
		subsection.companyName="";

		subsection.bullets = [{
				"label":"Bullet Point 1",
				"name":"bullet1",
				"value":"",
				"bulletType":""
			}];

		subsection.bulletCount = 1;

		subsection.dash="";
		subsection.showDate=true;
		subsection.showCompanyName=true;
		subsection.showJobTitle=true;
		subsection.showLocation=true;
	}

	//TODO
	$scope.removeSubsection = function(section, subsection){
		var subsectionDeleted = false;
		for(var i = 0; i<section.subsections.length;i++){
			if(section.subsections[i].id == subsection.id){
				section.subsections.splice(i, 1);
				subsectionDeleted = true;
				i--;
			}
			else if(subsectionDeleted){
				section.subsections[i].id-=1;
			}
		}
	}

	$scope.hasSubsection = function(section){
		return section.subsections.length>0
	}
	$scope.addBulletPoint = function(subsection){
		currentBulletsLength = subsection.bullets.length;
		newBulletsLength = currentBulletsLength+1;
		
		subsection.bullets[currentBulletsLength] = {"label":"Bullet point " + newBulletsLength , "name":"bullet"+ newBulletsLength, "value":"","bulletType":""}
		subsection.bulletCount++;
	}

	$scope.deleteBulletPoint = function(subsection){
		currentBulletsLength = subsection.bullets.length;
		
		subsection.bullets.splice(currentBulletsLength-1, 1);
		subsection.bulletCount--;
	}

	

	$scope.isJobTitleAndDateEmpty = function(subsection){
		return angular.equals($.trim(subsection.jobTitle), '')&&angular.equals($.trim(subsection.date), '');
	}

	$scope.isCompanyNameAndLocationEmpty = function(subsection){
		return !angular.equals($.trim(subsection.companyName), '')&&!angular.equals($.trim(subsection.location), '');
	}

	//Header
	$scope.personsName='';
	$scope.email='';
	
	$scope.currStreet = '';
	$scope.currCity = '';
	$scope.currProvince = '';
	$scope.currPostalCode = '';
	$scope.currTel = '';
	$scope.currCell = '';

	$scope.permStreet = '';
	$scope.permCity = '';
	$scope.permProvince = '';
	$scope.permPostalCode = '';
	$scope.permTel = '';
	$scope.permCell = '';

	$scope.showCurrLabel = true;
	$scope.showCurrStreet = true;
	$scope.showCurrCity = true;
	$scope.showCurrProvince = true;
	$scope.showCurrFirstComma = true;
	$scope.showCurrSecondComma = true;
	$scope.showCurrPostalCode = true;
	$scope.showCurrTel = true;
	$scope.showCurrCell = true;

	
	$scope.showPermLabel = true;
	$scope.showPermStreet = true;
	$scope.showPermCity = true;
	$scope.showPermProvince = true;
	$scope.showPermFirstComma = true;
	$scope.showPermSecondComma = true;
	$scope.showPermPostalCode = true;
	$scope.showPermTel = true;
	$scope.showPermCell = true;

	$scope.showPermLabel = function(){
		return !angular.equals($.trim($scope.permStreet), '')||
			!angular.equals($.trim($scope.permCity), '')||
			!angular.equals($.trim($scope.permProvince), '')||
			!angular.equals($.trim($scope.permPostalCode), '')||
			!angular.equals($.trim($scope.permTel), '')||
			!angular.equals($.trim($scope.permCell), '');
	}

	$scope.showCurrLabel = function(){
		return !angular.equals($.trim($scope.currStreet), '')||
			!angular.equals($.trim($scope.currCity), '')||
			!angular.equals($.trim($scope.currProvince), '')||
			!angular.equals($.trim($scope.currPostalCode), '')||
			!angular.equals($.trim($scope.currTel), '')||
			!angular.equals($.trim($scope.currCell), '');
	}

	$scope.showPermTelLabel = function(){
		return !angular.equals($.trim($scope.permTel), '');
	}

	$scope.showPermCellLabel = function(){
		return !angular.equals($.trim($scope.permCell), '');
	}
	$scope.showCurrTelLabel = function(){
		return !angular.equals($.trim($scope.currTel), '');
	}
	$scope.showCurrCellLabel = function(){
		return !angular.equals($.trim($scope.currCell), '');
	}
}