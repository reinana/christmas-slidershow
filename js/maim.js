'use strict';

{

    class Ornament{
        constructor(position, name, price, url){
            this.position = position;
            this.name = name;
            this.price = price;
            this.url = url;
    
        }
        
    }
    
    let star = new Ornament("p0", "Star", 300, "img/decoration-1791601_640.png");
    let bell = new Ornament("p1", "Bell", 200, "https://cdn.pixabay.com/photo/2016/11/02/14/29/christmas-1791779_960_720.png");
    let green = new Ornament("p2", "Green", 100, "https://cdn.pixabay.com/photo/2016/11/10/19/10/bauble-1814975_960_720.png");
    let yellow = new Ornament("p3", "Yellow", 100, "https://cdn.pixabay.com/photo/2015/12/09/13/15/christmas-bauble-1084697_960_720.png");
    let red = new Ornament("p4", "Red", 100, "https://cdn.pixabay.com/photo/2015/08/05/08/36/ball-875766_960_720.png");
    let blue = new Ornament("p5", "Blue", 100, "https://cdn.pixabay.com/photo/2015/08/05/08/38/ball-875770_960_720.png");
    let snowman = new Ornament("p6", "Snowman", 200, "https://cdn.pixabay.com/photo/2017/11/19/13/28/snow-man-2962777_960_720.png");
    let reindeer = new Ornament("p7", "Reindeer", 200, "https://cdn.pixabay.com/photo/2018/12/17/16/07/christmas-3880680_960_720.png");
    let santa = new Ornament("p8", "Santa", 200, "https://cdn.pixabay.com/photo/2018/02/04/13/40/christmas-3129893_960_720.png");
    
    const ornaments = [star,bell,green,yellow,red,blue,snowman,reindeer,santa];
    
    //ボタン作成
    let btn1 = document.createElement("button");
    btn1.classList.add("btn", "btn-danger", "col-3", "m-2");
    let btn2 = btn1.cloneNode(true);
    let btn3 = btn1.cloneNode(true);
    let btn4 = btn1.cloneNode(true);
    let btn5 = btn1.cloneNode(true);
    let btn6 = btn1.cloneNode(true);
    let btn7 = btn1.cloneNode(true);
    let btn8 = btn1.cloneNode(true);
    let btn9 = btn1.cloneNode(true);
    let btnC = btn1.cloneNode(true);
    let btn0 = btn1.cloneNode(true);
    let btnE = btn1.cloneNode(true);
    btn1.innerHTML = "1";
    btn2.innerHTML = "2";
    btn3.innerHTML = "3";
    btn4.innerHTML = "4";
    btn5.innerHTML = "5";
    btn6.innerHTML = "6";
    btn7.innerHTML = "7";
    btn8.innerHTML = "8";
    btn9.innerHTML = "9";
    btnC.innerHTML = "C";
    btn0.innerHTML = "0";
    btnE.innerHTML = "E";
    btn1.setAttribute("id", "btn1");
    btn2.setAttribute("id", "btn2");
    btn3.setAttribute("id", "btn3");
    btn4.setAttribute("id", "btn4");
    btn5.setAttribute("id", "btn5");
    btn6.setAttribute("id", "btn6");
    btn7.setAttribute("id", "btn7");
    btn8.setAttribute("id", "btn8");
    btn9.setAttribute("id", "btn9");
    btn0.setAttribute("id", "btn0");
    btnC.setAttribute("id", "btnC");
    btnE.setAttribute("id", "btnE");
    
    let btnBox = document.getElementById("btn-box");
    btnBox.append(btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,btnC,btn0,btnE);
    
    
    let currentIndex = 0;
    
    const itemImg = document.getElementById("item-img");
    
    const itemName = document.getElementById("item-name");
    const itemPrice = document.getElementById("item-price");
    
    itemName.innerHTML = ornaments[currentIndex].name;
    itemPrice.innerHTML = "Price: " + ornaments[currentIndex].price +"円";
    
    
    let sliderShow = document.createElement("div");
    let main = document.createElement("img");
    let extra = document.createElement("img");
    
    sliderShow.classList.add("col-12", "d-flex", "flex-nowrap", "overflow-hiddens");
    main.classList.add("main","full-width");
    extra.classList.add("extra", "full-width");
    main.classList.add("expand-animation");
    extra.classList.add("deplete-animation");
    
    // extra.src = ornaments[1].url
    
    sliderShow.append(main);
    sliderShow.append(extra);
    itemImg.append(sliderShow);
    
    
    main.setAttribute("data-index","0");
    
    
    main.src = ornaments[currentIndex].url;
    
    
    // 数字をクリックしたらinputnumに表示
    let inputNum = document.getElementById("inputNum");
    document.getElementById("btn1").addEventListener("click", function(){inputNum.value = inputNumCal(1, inputNum.value)});
    document.getElementById("btn2").addEventListener("click", function(){inputNum.value = inputNumCal(2, inputNum.value)});
    document.getElementById("btn3").addEventListener("click", function(){inputNum.value = inputNumCal(3, inputNum.value)});
    document.getElementById("btn4").addEventListener("click", function(){inputNum.value = inputNumCal(4, inputNum.value)});
    document.getElementById("btn5").addEventListener("click", function(){inputNum.value = inputNumCal(5, inputNum.value)});
    document.getElementById("btn6").addEventListener("click", function(){inputNum.value = inputNumCal(6, inputNum.value)});
    document.getElementById("btn7").addEventListener("click", function(){inputNum.value = inputNumCal(7, inputNum.value)});
    document.getElementById("btn8").addEventListener("click", function(){inputNum.value = inputNumCal(8, inputNum.value)});
    document.getElementById("btn9").addEventListener("click", function(){inputNum.value = inputNumCal(9, inputNum.value)});
    document.getElementById("btn0").addEventListener("click", function(){inputNum.value = inputNumCal(0, inputNum.value)});
    //クリアボタン
    document.getElementById("btnC").addEventListener("click", function(){inputNum.value = " "});
    //エンターボタン
    document.getElementById("btnE").addEventListener("click", function(){
        //inputNum.valueの数字をスライダージャンプへ入れる
        let currentIndex = main.getAttribute("data-index"); 
        //length以上の数字ならalert(ありません)
        if(inputNum.value > ornaments.length){
            alertEvent();
        }
        else if(inputNum.value == ""){
            alert("数字を入力してください");
        }
        else if(inputNum.value > currentIndex){
            slideJump(inputNum.value, "right");
            displayName(inputNum.value);
        }
        else if(inputNum.value < currentIndex){
            slideJump(inputNum.value, "left");
            displayName(inputNum.value);
        }
        inputNum.value = " "
        
    });
    //ornament1
    const ornament1 = document.createElement("div");
    ornament1.classList.add("d-flex","justify-content-center", "ornament-1");
    let starImg = document.createElement("img");
    starImg.classList.add("starImg","d-none");
    starImg.src = star.url;
    starImg.setAttribute("id", "p0");
    
    ornament1.append(starImg);
    
    //ornament2
    const ornament2 = document.createElement("div");
    ornament2.classList.add("d-flex","justify-content-center", "ornament-2","mt-5");
    //snowmanImg
    let snowmanImg = document.createElement("img");
    snowmanImg.classList.add("snowmanImg", "wh-10","d-none");
    snowmanImg.src = snowman.url;
    snowmanImg.setAttribute("id", "p6");
    //redImg
    let redImg = document.createElement("img");
    redImg.classList.add("redImg", "wh-10","d-none");
    redImg.src = red.url;
    redImg.setAttribute("id", "p4");
    
    ornament2.append(snowmanImg,redImg);
    
    //ornament3
    const ornament3 = document.createElement("div");
    ornament3.classList.add("d-flex","justify-content-center", "ornament-3","mt-5");
    //santaImg
    let santaImg = document.createElement("img");
    santaImg.classList.add("santaImg", "wh-10","d-none");
    santaImg.src = santa.url;
    santaImg.setAttribute("id", "p8");
    //greenImg
    let greenImg = document.createElement("img");
    greenImg.classList.add("greenImg", "wh-10","d-none");
    greenImg.src = green.url;
    greenImg.setAttribute("id", "p2");
    //yellowImg
    let yellowImg = document.createElement("img");
    yellowImg.classList.add("yellowImg", "wh-10","d-none");
    yellowImg.src = yellow.url;
    yellowImg.setAttribute("id", "p3");
    
    ornament3.append(greenImg, santaImg, yellowImg);
    
    //ornament4
    const ornament4 = document.createElement("div");
    ornament4.classList.add("d-flex","justify-content-center", "ornament-3","mt-5");
    //blueImg
    let blueImg = document.createElement("img");
    blueImg.classList.add("blueImg", "wh-10","d-none");
    blueImg.src = blue.url;
    blueImg.setAttribute("id", "p5");
    //bellImg
    let bellImg = document.createElement("img");
    bellImg.classList.add("bellImg", "wh-10", "mx-4","d-none");
    bellImg.src = bell.url;
    bellImg.setAttribute("id", "p1");
    //reindeerImg
    let reindeerImg = document.createElement("img");
    reindeerImg.classList.add("reindeerImg", "wh-10","d-none");
    reindeerImg.src = reindeer.url;
    reindeerImg.setAttribute("id", "p7");
    
    ornament4.append(blueImg, bellImg, reindeerImg);
    
    
    const treeBox = document.getElementById("tree-box");
    treeBox.append(ornament1,ornament2,ornament3,ornament4);
    
    
    // pushをクリックしたらツリーのオーナメントがd-noneをとる
    const push = document.getElementById("push");
    push.addEventListener("click", function(){
        let currentIndex = parseInt(main.getAttribute("data-index"));
        let displayPosition = document.getElementById(ornaments[currentIndex].position);
        toggleDisplay(displayPosition);   
    });
    function displayNone(ele){
        ele.classList.add("d-none");
    }
    
    function displayBlock(ele){
        ele.classList.remove("d-none");
    }
    
    function toggleDisplay(ele){
        // ele1が表示されているかどうかチェックします。
        // ele1とele2を切替えます。
        // classList.containはクラスが含まれているか確認します。ブーリアン値を返します。
        if(ele.classList.contains("d-none")){
            displayBlock(ele);
        }
        else{
            displayNone(ele);
        }
    }
    
    
    
    //2桁以上の対応
    function inputNumCal(clickNum, num){
        return 10 * num + clickNum;
    }
    //inputが配列の数以上の時
    function alertEvent(){
        alert("Sorry! Sold Out!");
    }
    //itemnameを表示
    function displayName(steps){
        let index = parseInt(main.getAttribute("data-index"));
        index = parseInt(steps);
    
        if(index < 0) index = ornaments.length -1;
        else if(index >= ornaments.length) index = 0;
    
    
        const itemName = document.getElementById("item-name");
        itemName.innerHTML = ornaments[index].name;
        const itemPrice = document.getElementById("item-price");
        itemPrice.innerHTML = "Price: " + ornaments[index].price +"円";
    
         
    }
    function slideJump(steps, animationType) {
        let index = parseInt(main.getAttribute("data-index"));
        let currentElement = ornaments[index].url;
    
        index = parseInt(steps);
    
        if(index < 0) index = ornaments.length -1;
        else if(index >= ornaments.length) index = 0;
    
        let nextElement = ornaments[index].url;
        
        main.setAttribute("data-index", index.toString());
        animateMain(currentElement, nextElement, animationType);
    
    }
    
    function animateMain(currentElement, nextElement, animationType) {
        main.innerHTML = "";
        main.src = nextElement;
        
        extra.innerHTML = "";
        extra.src = currentElement;
    
        main.classList.add("expand-animation");
        extra.classList.add("deplete-animation");
        
        if (animationType === "right"){
            sliderShow.innerHTML = "";
            sliderShow.append(extra);
            sliderShow.append(main);
        } else if (animationType === "left") {
            sliderShow.innerHTML = "";
            sliderShow.append(main);
            sliderShow.append(extra);
        }
    }
    
    //グルグルスライド
    // playをクリックしたらスライダーを繰り返す、文字をpouseに変える
    let timeoutId;
    function playSlideShow(){
        timeoutId = setTimeout(() => {
            let index = parseInt(main.getAttribute("data-index"));
            index+=1;
            slideJump(index, "right");
            displayName(index);
            playSlideShow();
        }, 1000);
    }
    
    let isPlaying = false;
    
    const play = document.getElementById('play');
    play.addEventListener('click' , () => {
        if(isPlaying === false){
            playSlideShow();
            document.getElementById("p0").classList.add("star-animation");
            document.getElementById("p1").classList.add("ornament-animation");
            document.getElementById("p2").classList.add("ornament-animation");
            document.getElementById("p3").classList.add("ornament-animation");
            document.getElementById("p4").classList.add("ornament-animation");
            document.getElementById("p5").classList.add("ornament-animation");
            document.getElementById("p6").classList.add("ornament-animation");
            document.getElementById("p7").classList.add("ornament-animation");
            document.getElementById("p8").classList.add("ornament-animation");
            
            play.innerHTML = "Pause";
        } 
        else{
            clearTimeout(timeoutId);
            document.getElementById("p0").classList.remove("star-animation");
            document.getElementById("p1").classList.remove("ornament-animation");
            document.getElementById("p2").classList.remove("ornament-animation");
            document.getElementById("p3").classList.remove("ornament-animation");
            document.getElementById("p4").classList.remove("ornament-animation");
            document.getElementById("p5").classList.remove("ornament-animation");
            document.getElementById("p6").classList.remove("ornament-animation");
            document.getElementById("p7").classList.remove("ornament-animation");
            document.getElementById("p8").classList.remove("ornament-animation");
            play.innerHTML = "Play";
        }
        isPlaying = !isPlaying;
    
    });    
}