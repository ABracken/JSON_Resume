function swapStyleSheet(sheet) {
    document.getElementById('pagestyle').setAttribute('href', sheet);
}

$.getJSON('js/resume.json', function (resumeJSON) {
    $.each($('.display-wrapper').children(), function (idx, child) {
        $(child).html(JSON.stringify(resumeJSON, null, 4));
    });

    $(".name").html(resumeJSON.basics.name);
    $(".label").html(resumeJSON.basics.label);
    $(".logo").attr('src', resumeJSON.basics.logo);
    $(".website").attr('src', resumeJSON.basics.website);
    $(".summary").html(resumeJSON.basics.summary);
    $(".email").html(resumeJSON.basics.contact.email);
    $(".phone").html(resumeJSON.basics.contact.phone);
    $(".address").html(resumeJSON.basics.location.address);
    $(".postal-code").html(resumeJSON.basics.location.postalCode);
    $(".city").html(resumeJSON.basics.location.city);
    $(".country").html(resumeJSON.basics.location.country);
    $(".state").html(resumeJSON.basics.location.state);

    var profiles = resumeJSON.basics.profiles;

    $(".profiles").html(function () {
        for (i = 0; i < profiles.length; i++) {

            var liHead = document.createElement('li');

            var network = document.createElement("STRONG", { class: 'network' });

            network.appendChild(document.createTextNode(profiles[i].network));

            liHead.appendChild(network);

            liHead.appendChild(document.createElement("br"));

            var username = document.createElement('a', { class: 'username' });

            username.innerHTML = profiles[i].username;

            username.setAttribute('href', profiles[i].url);

            liHead.appendChild(username);

            $(".profiles").append(liHead);
        }
    });

    var projects = resumeJSON.projects;


    $(".projects").html(function () {
        for (i = 0; i < projects.length; i++) {

            var liHead = document.createElement('li');

            var ulHead = document.createElement('ul')

            var title = document.createElement('li');

            var titleHeader = document.createElement('h4');

            titleHeader.innerHTML = 'Title:';

            title.appendChild(titleHeader);

            title.appendChild(document.createTextNode(projects[i].title));

            ulHead.appendChild(title);

            var description = document.createElement('li');

            var descriptionHeader = document.createElement('h4');

            descriptionHeader.innerHTML = 'Description:';

            description.appendChild(descriptionHeader);

            description.appendChild(document.createTextNode(projects[i].description));

            ulHead.appendChild(description);

            var liveUrl = document.createElement('li');

            var liveUrlHeader = document.createElement('h4');

            liveUrlHeader.innerHTML = 'Live Url:';

            liveUrl.appendChild(liveUrlHeader);

            liveUrl.appendChild(document.createTextNode(projects[i].liveUrl));

            ulHead.appendChild(liveUrl);

            var githubUrl = document.createElement('li');

            var githubUrlHeader = document.createElement('h4');

            githubUrlHeader.innerHTML = 'Github Url:';

            githubUrl.appendChild(githubUrlHeader);

            githubUrl.appendChild(document.createTextNode(projects[i].githubUrl));

            ulHead.appendChild(githubUrl);

            var difficulty = document.createElement('li');

            var difficultyHeader = document.createElement('h4');

            difficultyHeader.innerHTML = 'Difficulty:';

            difficulty.appendChild(difficultyHeader);

            difficulty.appendChild(document.createTextNode(projects[i].difficulty));

            ulHead.appendChild(difficulty);

            var enjoyment = document.createElement('li');

            var enjoymentHeader = document.createElement('h4');

            enjoymentHeader.innerHTML = 'Enjoyment:';

            enjoyment.appendChild(enjoymentHeader);

            enjoyment.appendChild(document.createTextNode(projects[i].enjoyment));

            ulHead.appendChild(enjoyment);

            var learningValue = document.createElement('li');

            var learningValueHeader = document.createElement('h4');

            learningValueHeader.innerHTML = 'Learning Value:';

            learningValue.appendChild(learningValueHeader);

            learningValue.appendChild(document.createTextNode(projects[i].learningValue));

            ulHead.appendChild(learningValue);

            var skillsUsed = document.createElement('ul');

            var skillsUsedHeader = document.createElement('h4');

            skillsUsedHeader.innerHTML = 'Skills Used:';

            skillsUsed.appendChild(skillsUsedHeader);

            var skills = document.createElement('li');

            skills.appendChild(document.createTextNode(projects[i].skillsUsed));

            skillsUsed.appendChild(skills);

            ulHead.appendChild(skillsUsed);

            liHead.appendChild(ulHead);

            $(".projects").append(liHead);
        }
    });
});
