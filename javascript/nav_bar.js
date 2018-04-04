var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        console.log("First Function", myObj);
        var menu = '';

        for(i=0;i<myObj.heading.length;i++)
        {
            console.log(myObj.heading[i].box_index, myObj.heading[i].box_name,myObj.heading[i].box_image);
        }
        for(i=0;i<myObj.sub_menu.length;i++)
        {
            console.log(myObj.sub_menu[i].box_index, myObj.sub_menu[i].item_name, myObj.sub_menu[i].item_link);
//            and so on you can list any property of myObj
        }
        //Navigation Bar computer
        for(i=0; i<myObj.heading.length; i++)
        {
            menu = menu + '<li class="institute" id ="' + myObj.heading[i].box_name + '">' + myObj.heading[i].box_name + '</li>';
        }
        document.getElementById("compnav").innerHTML = menu;

        //Navigation Bar dropdown Computer
        for(i=2; i<myObj.heading.length + 1; i++)
        {
          var menu ='';
          for(j=0; j<myObj.sub_menu.length; j++)
          {
            if(myObj.sub_menu[j].box_index == i)
            {
              menu = menu + '<li><a href="' + myObj.sub_menu[j].item_link + '">' + myObj.sub_menu[j].item_name + '</a></li>';
            }
          }

          menu = myObj.heading[i-1].box_name + '<div class="drop"><div style="position: relative;top:25%;left:50%;"><img style="max-width: 45%;position: absolute" src="../images/' + myObj.heading[i-1].box_image + '"></div><div class="row"><ul class="col l3" style="overflow:auto; height:80vh;">' + menu + '</ul></div></div></li>';
         document.getElementById(myObj.heading[i-1].box_name).innerHTML = menu;
        }

        menu ='';
        //Side nav mobile
        for(i=0; i<myObj.heading.length; i++)
        {
            menu = menu + '<li><a href="#" class="btn red" data-activates="' + myObj.heading[i].box_name + 'mobile">' + myObj.heading[i].box_name + '</a></li>';
        }
        document.getElementById("mobile-demo").innerHTML = menu;

        menu='';
        //Side nav Submenu mobile
        for(i=1; i<myObj.heading.length; i++)
        {
            menu = menu + '<ul id="' + myObj.heading[i].box_name + 'mobile" class="side-nav"></ul>';
        }
        document.getElementById("mob_sub").innerHTML = menu;

        menu='';
        for(i=2; i<myObj.heading.length + 1; i++)
        {
          var menu ='';
          for(j=0; j<myObj.sub_menu.length; j++)
          {
            if(myObj.sub_menu[j].box_index == i)
            {
              menu = menu + '<li><a class="waves-effect" href="' + myObj.sub_menu[j].item_link + '">' + myObj.sub_menu[j].item_name + '</a></li>';
            }
          }

          var id ='';
          id =id + myObj.heading[i-1].box_name + 'mobile';
         document.getElementById(id).innerHTML = menu;
        }
}
};
xmlhttp.open("GET", "../includes/Nav_bar.php", true);
xmlhttp.send();
