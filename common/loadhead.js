/**
 * set the relative path of the resources
 * @param level  the level where a file at. The file refers to that call this function
 */

function loadheaderexecute(level) {
    var navpart = $('<nav class="navbar navbar-default" role="navigation"></nav>');
    var navpartcontainer = $('<div class="container" id="id_navcontainer"></div>');

    if (level == 1) {

        var indexurl = "index.html";
        var registration = "Registration.html";


        var OrganizeTeam = "team/committee.html"
        var ProgramTeam = "team/program-committee.html"
        var VenueSchool = "venue/school-location.html"
        var VenueZJU = "venue/about-ZJU.html"
        var VenueHZ = "venue/about-Hangzhou.html"
        var VenueTRANS = "venue/transportation.html"


        var visa = "travel/visa.html"
        var hotle = "travel/about-hotel.html"

        var accepted = "program/accepted.html"
        var speakers = "program/speakers.html"
        var sessions = "program/sessionList.html"
        var schedule = "program/schedule.html"
        var asiaPacificTrack = "program/asiaPacificTrack.html"
        var gallery = "program/gallery.html"

        var hwse = "yjjb/hwse.html"
        var jyrg = "yjjb/jyrg.html"
        var rjcs1 = "yjjb/rjcs1.html"
        var rjcs2 = "yjjb/rjcs2.html"
        var tybg = "yjjb/tybg.html"
        var yblt = "yjjb/yblt.html"
        var znrg1 = "yjjb/znrg1.html"
        var znrg2 = "yjjb/znrg2.html"


    }
    else if (level >= 2) {
        var indexurl = "../index.html";
        var registration = "../Registration.html";


        var OrganizeTeam = "../team/committee.html"
        var ProgramTeam = "../team/program-committee.html"
        var VenueSchool = "../venue/school-location.html"
        var VenueZJU = "../venue/about-ZJU.html"
        var VenueHZ = "../venue/about-Hangzhou.html"
        var VenueTRANS = "../venue/transportation.html"


        var visa = "../travel/visa.html"
        var hotle = "../travel/about-hotel.html"


        var speakers = "../program/speakers.html"
        var schedule = "../program/schedule.html"

        var hwse = "../yjjb/hwse.html"
        var jyrg = "../yjjb/jyrg.html"
        var rjcs1 = "../yjjb/rjcs1.html"
        var rjcs2 = "../yjjb/rjcs2.html"
        var tybg = "../yjjb/tybg.html"
        var yblt = "../yjjb/yblt.html"
        var znrg1 = "../yjjb/znrg1.html"
        var znrg2 = "../yjjb/znrg2.html"



    }

    var navbarheader = $('<div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="' + indexurl + '">????????????????????????</a></div>');
    navpartcontainer.append(navbarheader);

    var navbarcollapse = $('<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"></div>');
    var navbarcollapseul = $('<ul class="nav navbar-nav navbar-right" id="id_navbarul"></ul>');



    // add registration
    /* var registration_bar = $('<li><a href="' + registration + '">Registration</a></li>')
    navbarcollapseul.append(registration_bar)*/


    /*// add program
    var program_bar = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Program<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');
    program_bar.find('ul').append('<li><a href="' + schedule + '">Schedule</a></li>');
    program_bar.find('ul').append('<li><a href="' + speakers + '">Speakers</a></li>');

    navbarcollapseul.append(program_bar)*/

    // add schedule
    var schedule_bar = $('<li><a href="' + schedule +  '">????????????</a></li>')
    navbarcollapseul.append(schedule_bar)

    // add speakers
    /*var speakers_bar = $('<li><a href="' + speakers + '">????????????</a></li>')
    navbarcollapseul.append(speakers_bar)*/


    // add yjjb
    var yjjb_bar=$('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">????????????<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');
    yjjb_bar.find('ul').append('<li><a href="' + tybg + '">????????????</a></li>');
    yjjb_bar.find('ul').append('<li><a href="' + hwse + '">?????????????????????????????????</a></li>');
    yjjb_bar.find('ul').append('<li><a href="'+rjcs1+'">????????????????????????????????????</a></li>');
    yjjb_bar.find('ul').append('<li><a href="'+znrg1+'">??????????????????????????????</a></li>');
    yjjb_bar.find('ul').append('<li><a href="'+jyrg+'">??????????????????</a></li>');
    yjjb_bar.find('ul').append('<li><a href="'+znrg2+'">??????????????????????????????</a></li>');
    yjjb_bar.find('ul').append('<li><a href="'+rjcs2+'">????????????????????????????????????</a></li>');
    yjjb_bar.find('ul').append('<li><a href="'+yblt+'">????????????</a></li>');
    navbarcollapseul.append(yjjb_bar);

    // add committee
    var committee_bar = $('<li><a href="' + OrganizeTeam + '">???????????????</a></li>')
    navbarcollapseul.append(committee_bar)




    // add venue
    /* var li_venue = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Venue<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');
    //li_venue.find('ul').append('<li><a href="'+VenueConference+'">Conference Location</a> </li>');
    li_venue.find('ul').append('<li><a href="' + VenueSchool + '">Winter School Hotel</a></li>');
    li_venue.find('ul').append('<li><a href="' + VenueZJU + '">About Zhejiang University</a> </li>');
    li_venue.find('ul').append('<li><a href="' + VenueHZ + '">About Hangzhou</a></li>');
    li_venue.find('ul').append('<li><a href="' + VenueTRANS + '">Transportation</a> </li>');
    navbarcollapseul.append(li_venue);*/

    // add travel
    // var li_travel=$('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Travel<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');
    // li_travel.find('ul').append('<li><a href="'+visa+'">Visa Info</a></li>');
    // li_travel.find('ul').append('<li><a href="'+hotle+'">Accommodation</a></li>');
    // navbarcollapseul.append(li_travel);
    var travel_bar = $('<li><a href="' + hotle + '">????????????</a></li>')
    navbarcollapseul.append(travel_bar)





    navbarcollapse.append(navbarcollapseul);

    navpartcontainer.append(navbarcollapse);

    navpart.append(navpartcontainer);

    $('body').append(navpart);

};

function loadCarousel(level) {

    if (level == 1) {
        var slide1 = "./img_system/ZJU-overview-words.jpeg";
        var slide2 = "./img_system/002-words.jpeg";
        var slide3 = "./img_system/003-words.jpeg";
    } else {
        var slide1 = "../img_system/ZJU-overview-words.jpeg";
        var slide2 = "../img_system/002-words.jpeg";
        var slide3 = "../img_system/003-words.jpeg";
    }
    var carousel = $('<div class="container">\n' +
        '    <div id="myCarousel" class="carousel slide">\n' +
        '        <!-- ?????????Carousel????????? -->\n' +
        '        <ol class="carousel-indicators">\n' +
        '            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>\n' +
        '            <li data-target="#myCarousel" data-slide-to="1"></li>\n' +
        '            <li data-target="#myCarousel" data-slide-to="2"></li>\n' +
        '        </ol>\n' +
        '        <!-- ?????????Carousel????????? -->\n' +
        '        <div class="carousel-inner">\n' +
        '            <div class="item active">\n' +
        '                <img src="' + slide1 + '" alt="First slide">\n' +
        '            </div>\n' +
        '            <div class="item">\n' +
        '                <img src="' + slide2 + '" alt="Second slide">\n' +
        '            </div>\n' +
        '            <div class="item">\n' +
        '                <img src="' + slide3 + '" alt="Third slide">\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>');

    $('body').append(carousel)

    $(document).ready(function () {
        $('#myCarousel').carousel({ interval: 3000 });//??????5???????????????
    });

};

function test(level) {

};


