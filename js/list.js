 $(function (){///////////////JQB//////////////////////////////////////
    
     var list = [
         {lim:5 , forder:'oils'},
         {lim:4 , forder:'acid'},
         {lim:3 , forder:'foundation'},
         {lim:2 , forder:'primer' },
         
     ];//리스트 배열
     
     
     list.forEach(function (el, index) {

         for (i = 0; i < el.lim; i++) {
             $(".itemwrap").append('<li class='+el.forder+'><span class="bestimg"><span class="imgover"><span><img src="images/search_wh.png">view</span></span></span><span class="rectit">Vitamin C Suspension 30% in Silicone</span><span class="rectxt2"><span class="price">7,900원</span><span class="recadd"><i class="fas fa-shopping-cart"></i> <i class="fas fa-heart"></i></span></span></li>')

             $("."+el.forder).children(".bestimg").eq(i).css({
                 'background': 'url(images/'+el.forder+'/sum'+i+'.png) bottom/contain'
             }); //CSS

         }; ///for문

     }); //////////foreach

     });///////////////////////JQB///////////////////////////////////


