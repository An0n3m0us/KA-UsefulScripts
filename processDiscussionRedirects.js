if (window.location.pathname.split("/")[1] == "computing" && window.location.pathname.split("/").slice(2, 4).length == 2) {
    course = window.location.pathname.split("/").slice(2, 4)[0];
    unit = window.location.pathname.split("/").slice(2, 4)[1];
    link = 'https://www.khanacademy.org/api/internal/graphql/FetchContentData?hash=1604303425&variables={"path":"computing/' + course + '/' + unit + '","queryParams":"lang=en","isModal":false,"followRedirects":true}&lang=en';
    dictionary = {};

    $.getJSON(link, function(apidata) {
        data = JSON.parse(apidata.data.contentJson).componentProps.curation.tabs[0].modules[0].tutorials;

        Object.keys(data).forEach(function(item){
            Object.values(data)[item].contentItems.forEach(function(subItem){

                (![undefined, "Challenge", "Exercise", "Video", "Article"].includes(subItem.kind) ?
                (dictionary[subItem.nodeUrl] = "/computer-programming/" + subItem.slug + "/" + subItem.progressKey.substring(1)) : undefined);
            });
        });

        console.log(JSON.stringify(dictionary, null, 2));
    });
}
