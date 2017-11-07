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

    function makeProfiles() {
        var profiles = resumeJSON.basics.profiles;

        for (var i = 0; i < profiles.length; i++) {

            for (var key in profiles[i]) {
                var profileObj = profiles[i];

                var value = profileObj[key];

                var liHeader = document.createElement('li');

                var network = document.createElement("STRONG", { class: 'network' });

                network.appendChild(document.createTextNode(profileObj.network));

                liHeader.appendChild(network);
                
                liHeader.appendChild(document.createElement("br"));

                var username = document.createElement('a', { class: 'username' });

                username.innerHTML = profileObj.username;

                username.setAttribute('href', profileObj.url);

                liHeader.appendChild(username);

                document.body.appendChild(liHeader);

                return liHeader;

            }
        }
    }

    $(".profiles").html(makeProfiles());
});
