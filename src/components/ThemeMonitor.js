const ThemeMonitor = (mode) => {

    var searchBox = document.body.querySelector(".SearchGroup");
    var boxText = document.body.querySelector(".InputLabel");
    var cards = document.body.querySelectorAll(".Card");
    var titles = document.body.querySelectorAll(".JobTitle");

    var companySection = document.body.querySelector(".Company");
    var companyTitle = document.body.querySelectorAll(".CompanyTitle");

    var jobDetailSection = document.body.querySelector(".JobDetail");
    var jobDetailTitle = document.body.querySelector(".JobDetailTitle");

    var jobHowHeading = document.body.querySelector(".JobHowHeading");
    var companyFooterSection = document.body.querySelector(".CompanyFooter");


    if (mode === "light") {
        console.log("light on");
        document.body.style.backgroundColor = "#F5F6F8";

        if (searchBox != null) searchBox.style.backgroundColor = "white";
        if (boxText != null) boxText.style.color = "black";
        if (cards.length != 0) cards.forEach((element) => { element.style.backgroundColor = "white"; });
        if (titles.length != 0) titles.forEach((element) => { element.style.color = "#19202d"; });
        if(companySection != null) companySection.style.backgroundColor = "white";
        if(jobDetailSection != null) jobDetailSection.style.backgroundColor = "white";
        if(companyFooterSection != null) companyFooterSection.style.backgroundColor = "white";

        if(companyTitle.length != 0) companyTitle.forEach((element) => { element.style.color = "#19202d"; });
        if(jobDetailTitle != null) jobDetailTitle.style.color = "#19202d";
        if(jobHowHeading != null) jobHowHeading.style.color = "#19202d";
    }

    if (mode === "dark") {
        console.log("dark on");
        document.body.style.backgroundColor = "#131822";

        if (searchBox != null) searchBox.style.backgroundColor = "#19202d";
        if (boxText != null) boxText.style.color = "white";
        if (cards.length != 0) cards.forEach((element) => { element.style.backgroundColor = "#19202d"; });
        if (titles.length != 0) titles.forEach((element) => { element.style.color = "white"; });
        if(companySection != null) companySection.style.backgroundColor = "#19202d";
        if(jobDetailSection != null) jobDetailSection.style.backgroundColor = "#19202d";
        if(companyFooterSection != null) companyFooterSection.style.backgroundColor = "#19202d";

        if(companyTitle.length != 0) companyTitle.forEach((element) => { element.style.color = "white"; });
        if(jobDetailTitle != null) jobDetailTitle.style.color = "white";
        if(jobHowHeading != null) jobHowHeading.style.color = "white";
    }
};

export default ThemeMonitor;
