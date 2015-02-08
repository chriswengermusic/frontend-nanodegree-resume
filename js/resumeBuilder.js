var bio = {
	"name": "Christopher Wenger",
	"role": "Music Teacher and budding Front-End Developer",
	"contacts": {
	"email": "chriswengermusic@gmail.com",
	"phone": "717.856.4000",
	"gitHub": "https://github.com/chriswengermusic",
	"location": "Mechanicsburg, PA"
	},
	"picture": "http://upload.wikimedia.org/wikipedia/commons/1/13/Cello_bridge2.JPG",
	"welcome": "Welcome to my online resume.",
	"skills": ["teaching", "playing", "composing", "conducting", "coding", "web-design"]
}
var work = {
	"positions":[
		{
			"employer": "Central Dauphin School District",
			"title": "Elementary Instrumental Music Teacher",
			"city": "Harrisburg, PA",
			"description": "Schedule and conduct weekly pull-out lessons and large group band and orchestra rehearsals for instrumental students in grades 4-5.",
			"dates": "2010-present"
		},
		{
			"employer": "North Penn School District",
			"title": "Elementary String Specialist",
			"city": "Lansdale, PA",
			"description": "Schedule and conduct twice-weekly pull-out lessons and once-weekly large group orchestra rehearsals for string students in grades 3-6. Arrange and implement Suzuki violin lessons for students/families in grades K-6.",
			"dates": "2009-2010"
		},
		{
			"employer": "Trinity High School",
			"title": "String Ensemble/Choir Director (PT)",
			"city": "Camp Hill, PA",
			"description": "Schedule and conduct weekly pull-out lessons and orchestra rehearsals for string players in grades 9-12.",
			"dates": "2002- 2009"
		},
		{
			"employer": "Bible Baptist School",
			"title": "Band Director (PT)",
			"city": "Shiremanstown, PA",
			"description": "Conduct weekly pull-out instrumental lessons for students in grades 4-12, as well as large group Elementary and Middle-High School Band.",
			"dates": "2002-2006"
		},
		{
			"employer": "Carlisle Area School District",
			"title": "LTS - Middle/High School Orchestra",
			"city": "Carlisle, PA",
			"description": "Conduct daily rehearsals for 9-12th grade string orchestra, as well as 6-8th grade lessons and large-group orchestra rehearsals on a weekly basis.",
			"dates": "2002"
		},
		{
			"employer": "Bobby Rahal Honda",
			"title": "Sales and Leasing Consultant",
			"city": "Mechanicsburg, PA",
			"description": "Provide customers with service to buy and lease new and used automobiles. Arrange the details of the transaction and provide service after the sale.",
			"dates": "2001-2002"
		}
	]
}

var education = {
	"schools": [
	{
		"name": "Messiah College",
		"city": "Grantham, PA",
		"degree": "B.A.", 
		"major": ["Music, concentration in 'Cello performance"],
		"year": 2001
	},
	{
		"name": "Kutztown University of PA",
		"city": "Kutztown, PA",
		"degree": "Instructional I",
		"major": ["K-12 Music"],
		"year": 2010
	},
	{
		"name": "Messiah College",
		"city": "Grantham, PA",
		"degree": "Instructional II",
		"major": ["K-12 Music"],
		"year": 2014
	}		
],
"online_courses": [
	{
		"title": "How to use Git and GitHub",
		"school": "Udacity",
		"dates": 2015,
		"url": "https://www.udacity.com/course/ud775"
	},
	{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"dates": 2015,
		"url": "https://www.udacity.com/course/ud804"
	}
	]
}

var projects = {
	"sampleWork":[
		{
			"title": "Interactive Resume",
			"dates": 2015,
			"description": "This is an interactive JS website project I developed as a result of the Udacity JS class.",
			"image": "images/Busmissal"
		},
		{
			"title": "Linstead Market",
			"dates": 2012,
			"description": "Caribbean folk song",
			"image": "images/Linstead_cover"
		}
	]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.phone);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcome);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);	
$("#header").prepend(formattedPic);
$("#topContacts").append(formattedWelcome);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedLocation);

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for(var skill in bio.skills){
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkills);
	}
	
}
work.display = function(){
	for (var job in work.positions) {
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.positions[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.positions[job].title);
		var formattedWorkCity = HTMLworkLocation.replace("%data%", work.positions[job].city);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.positions[job].dates);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.positions[job].description);
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkCity);
		$(".work-entry:last").append(formattedWorkDescription);

	}
}
work.display();

education.display = function(){
	for(var school in education.schools) {
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].year);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolCity);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
	$("#education").append(HTMLonlineClasses);
	for(var course in education.online_courses){
		var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.online_courses[course].title);
		var formattedCourseSchool = HTMLonlineSchool.replace("%data%", education.online_courses[course].school);
		var formattedCourseDates = HTMLonlineDates.replace("%data%", education.online_courses[course].dates);
		var formattedCourseURL = HTMLonlineURL.replace("%data%", education.online_courses[course].url);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedCourseTitle);
		$(".education-entry:last").append(formattedCourseSchool);
		$(".education-entry:last").append(formattedCourseDates);
		$(".education-entry:last").append(formattedCourseURL);
	}
};
education.display();

projects.display = function() {
	for (var project in projects.sampleWork) {
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.sampleWork[project].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.sampleWork[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.sampleWork[project].description);
		var formattedProjectImage = HTMLprojectImage.replace("%data", projects.sampleWork[project].image);
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		$(".project-entry:last").append(formattedProjectImage);
	}
};
projects.display();
$("#mapDiv").append(googleMap);