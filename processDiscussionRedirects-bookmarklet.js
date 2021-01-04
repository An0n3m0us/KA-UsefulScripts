// Bookmark the one-liner code below!
javascript:(function(){ $.getJSON("https://raw.githubusercontent.com/An0n3m0us/KA-UsefulScripts/master/processDiscussionRedirects/all.json",function(e){Array.from(document.getElementsByClassName("_dwmetq")).concat(Array.from(document.getElementsByClassName("_1457f06q"))).forEach(function(s){slicedLink=s.href.replace("https://www.khanacademy.org/","/").split("?")[0],expandKey=s.href.split("?")[1],Object.keys(e).includes(slicedLink)&&(s.href="https://www.khanacademy.org"+e[slicedLink]+"?"+expandKey,slicedLink.includes("profile")||"_dwmetq"!=s.className||s.setAttribute("style","border: solid 2px #FF660088"))})}); })()
// This code is meant to be used on the following page to fix the (currently) broken links; https://www.khanacademy.org/computing/computer-programming/d

$.getJSON("https://raw.githubusercontent.com/An0n3m0us/KA-UsefulScripts/master/processDiscussionRedirects/all.json", function(apidata) {
    Array.from(document.getElementsByClassName("_dwmetq")).concat(Array.from(document.getElementsByClassName("_1457f06q"))).forEach(function(linkTag){
        slicedLink = linkTag.href.replace("https://www.khanacademy.org/", "/").split("?")[0];
        expandKey = linkTag.href.split("?")[1];
        if (Object.keys(apidata).includes(slicedLink)) {
            linkTag.href = "https://www.khanacademy.org" + apidata[slicedLink] + "?" + expandKey;
            if (!slicedLink.includes("profile") && linkTag.className == "_dwmetq") {
                linkTag.setAttribute("style", "border: solid 2px #FF660088");
            }
        }
    });
});
