window.addEventListener("DOMContentLoaded",
    function () {/////jQB

        var sprot = 0; //0-작동안함, 1- 작동중
        //////////////////////////////////
		    


    $(".allmenu dt").click(function(){
		$(".allmenu dd").removeClass("on");
        $(this).siblings("dd").toggleClass("on");
 
    });//////// click ////////////////
    

        ////// 오른쪽버튼 클릭 시 슬라이드 왼쪽으로 무한 이동하기
        document.querySelector(".ab2")
            .addEventListener("click", function () {

                //광클 금지!!//////////
                if (sprot === 1) return false;
                sprot = 1; //잠금설정
                setTimeout(function () {
                    sprot = 0;
                }, 600)
                ////////////////////////////

                var tg = document.querySelector("#slide");
                tg.style.left = "-250px";
                tg.style.transition = "left .6s ease-in-out";


                setTimeout(function () {
                    //첫번째 li를 맨뒤로 이동
                    var list = tg.querySelectorAll("li");
                    console.log("슬라이드개수" + list.length)
                    tg.appendChild(list[0]);
                    tg.style.left = "0";
                    tg.style.transition = "none";
                }, 600) ///////타임아웃


            }); /////////클릭함수

        ////// 왼쪽버튼 클릭 시 슬라이드 왼쪽으로 무한 이동하기
        document.querySelector(".ab1")
            .addEventListener("click", function () {

                //광클 금지!!//////////
                if (sprot === 1) return false;
                sprot = 1; //잠금설정
                setTimeout(function () {
                    sprot = 0;
                }, 600)


                setTimeout(function () {
                    //첫번째 li를 맨뒤로 이동
                    var list = tg.querySelectorAll("li");
                    tg.insertBefore(list[list.length - 1], list[0]);
                    tg.style.left = "-250px";
                    tg.style.transition = "none";
                }, 600) ///////타임아웃

                ////////////////////////////
                var tg = document.querySelector("#slide");
                tg.style.left = "0%";
                tg.style.transition = "left .6s ease-out";
            }); /////////클릭함수


        document.querySelector(".cart")
            .addEventListener("click", function () {
                document.getElementById("cartwrap").classList.toggle("on");
                document.body.classList.toggle("on");
            }); ////카트 열기 함수

        document.querySelector(".close")
            .addEventListener("click", function () {
                document.getElementById("cartwrap").classList.toggle("on");
                document.body.classList.toggle("on");
            }); ////////카트 닫기함수


        document.querySelector(".toggle")
            .addEventListener("click", function () {
                document.getElementById("nav").classList.toggle("on");
                document.body.classList.toggle("on");

                document.getElementsByClassName("toggle")[0].classList.toggle("on");
            }); ////////메뉴




        /*메인배경 변경함수*/

        var num = 1;
        startInter();
        var trun;
        //////////////////////////////////////
        ///////////이미지자동변경함수////////////
        function startInter() {
            trun = setInterval(function () {
                num++
                console.log(num)
                if (num > 4) {
                    num = 1;
                }
                imgCng();
            }, 4000)
        } //이미지 자동 변경
        ////////////////////////////////////////


        document.querySelector(".mainNext")
            .addEventListener("click", function () {
            clearInterval(trun);
            /////////////클릭시 자동변경중지

            if (sprot === 1) return false;
            sprot = 1; //잠금설정
            setTimeout(function () {
                sprot = 0;
            }, 800) //////////잠금설정

            num++;
            if (num > 4) {
                num = 1;
            } ///////////if문

            imgCng();

            setTimeout(function () {
                startInter();
            }) ////////4초후 이미지변경


        }) //다음버튼클릭시
    
        document.querySelector(".mainPrev")
            .addEventListener("click", function () {
            clearInterval(trun);
            /////////////클릭시 자동변경중지

            if (sprot === 1) return false;
            sprot = 1; //잠금설정
            setTimeout(function () {
                sprot = 0;
            }, 800) ////////잠금설정

            num--;
            if (num < 1) {
                num = 4;
            }

            imgCng();

            setTimeout(function () {
                startInter();
            }) //4초후 이미지변경
        }) //이전버튼클릭시

        ////////////////////////////////////////////////////////////////
        ///////////////// 이미지 변경 함수 ///////////////////////////////
        function imgCng() {
            document.querySelector(".nNum").innerHTML = num;
            document.querySelector("#section1").style.backgroundImage = "url(images/bg" + num + ".jpg)";
            document.querySelector("#section1").style.transition = ".6s"
        };
        /////////////////////////////////////////////////////////////////

    }); ///////////// load /////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
