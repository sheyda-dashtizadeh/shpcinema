function toggler(a) {
    var id = a.href.split('#')[1];
    var links = document.querySelectorAll(".dash-link");
    var showContent = document.getElementById(id);
    let hideContent = document.querySelectorAll(".user-pro");

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    hideContent.forEach(element => {
        element.classList.remove("visiable");
    });

    links.forEach(element => {
        element.classList.remove("active-dash");
    });

    showContent.classList.add("visiable");
    a.classList.add("active-dash");
}

