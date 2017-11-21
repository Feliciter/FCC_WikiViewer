window.addEventListener("load", function(event) {
    console.log("All resources finished loading!");

    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        var aaa=form.elements.ssearchh.value

        console.log("Look up: ",aaa);
        //console.log(wiki)

        var wiki='https://en.wikipedia.org/w/api.php?action=opensearch&search=%'+aaa+'&prop=info&format=json&origin=*&inprop=url'



        var xhr = new XMLHttpRequest();
        xhr.open("GET", wiki, true);
        xhr.onload = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    //console.log(xhr.responseText);

                    var jpars=JSON.parse(xhr.responseText)

                    // var title= jpars[1][0]
                    // var snipp=jpars[2][0]
                    // var link=jpars[3][0]

                    // console.log (jpars.length)
                    // console.log (jpars[1].length)
                    // console.log (jpars[2].length)
                    // console.log (jpars[3].length)

                    //  cycle

                    for(  var i=0;i<jpars[1].length;i++) {
                        var title= jpars[1][i];
                        var snipp=jpars[2][i];
                        var link=jpars[3][i];


                        //console.log('qwrtyui')

                        //test titel
                        //console.log(title)

                        //snipp
                         //console.log (snipp)

                        //
                        // link
                       //console.log (link)

                    }


                        //end   cycle



                    ///insert

                    var paras = document.getElementsByClassName("row");

                    var d1 = document.getElementById('insert');



                    // function insertt () {
                    //     d1.insertAdjacentHTML('beforeend',innahtml );
                    // }


                    //  cycle

                    function insertt () {

                        for (var i = 0; i < jpars[1].length; i++) {
                            var title = jpars[1][i];
                            var snipp = jpars[2][i];
                            var link = jpars[3][i];

                            var innahtml = '<div class="row" ><div class="col-sm" ></div><div class="col-sm-6"><h2>' + title + '</h2><p><a class="snippet" href =' + link + '>' + snipp + '</a></p></div><div class="col-sm"></div></div>'
                            d1.insertAdjacentHTML('beforeend', innahtml)

                        }
                    }


                    //end   cycle







                    if (paras) {

                        Array.prototype.forEach.call(paras, function (para) {
                            if (para.getAttribute("class") === "row")
                                para.parentNode.removeChild(para);


                        });

                        insertt ();
                    }


                    else {
                        insertt ()
                    }


                    /// end insert





                   // console.log (title +' ' + snipp +' '+link)













                } else {
                    console.error(xhr.statusText);
                }
            }
        };
        xhr.onerror = function (e) {
            console.error(xhr.statusText);
        };
        xhr.send(null);










        event.preventDefault();
    });












});