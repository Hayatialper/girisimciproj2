//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues = 0;
var lang;
var score = 0;
var SQLquestions = [ //


    {
        question: "1. Asagidakilerden hangisi SQL injection saldirisi icin en yaygin kullanilan tekniklerden biri degildir?",
        choices: ["Tek tirnak isareti ('') kullanarak komutlari sizdirma", "Cift tirnak isareti (\"\") kullanarak komutlari sizdirma", "Yorum satirlari kullanarak komutlari sizdirma"],
        answer: 3

    },
    {
        question: "SELECT * FROM users WHERE username = '$username' AND password = '$password';",
        choices: ["$username degiskeninin dogrudan sorguda kullanilmasi", " $password degiskeninin dogrudan sorguda kullanilmasi", "Her iki degiskenin de dogrudan sorguda kullanilmasi", "Hicbiri"],
        answer: 1

    },
    {
        question: "3. Asagidakilerden hangisi SQL injection saldirilarindan korunmak icin en iyi uygulamalardan biridir?",
        choices: ["Kullanici girisi verilerini her zaman parametrize edilmis sorgularla islemek", "Guclu parolalar kullanmak ve bunlari sik sik degistirmek", "Yaziliminizi guncel tutmak\n", "Tumunu yap"],
        answer: 4

    },
    {
        question: "4. Bir web sitesinin giris sayfasinda asagidaki form bulunur. Bu formda hangi alan SQL injection saldirisi icin en riskli alan olabilir?",
        choices: ["Kullanici adi", "Parola", "E-posta adresi", "Hepsi"],
        answer: 2

    },
    {
        question: "5.Bir SQL injection saldirisi gerceklestiginde veritabanina ne gibi zararlar verebilir?",
        choices: ["Hassas verilerin calinmasi veya silinmesi", "Web sitesinin cokmesi veya kullanilamamasi", "Kimlik avi saldirilari icin platform olusturma", "Tumunu yap"],
        answer: 4

    },
    {
        question: "Asagidakilerden hangisi bir SQL injection saldirisinin isareti olabilir?",
        choices: ["Beklenmedik hata mesajlari", "Yanlis veya eksik veriler", "Web sitesinin anormal sekilde davranmasi", "Hepsi"],
        answer: 4

    },
    {
        question: "SQL injection saldirilarindan korunmak icin web gelistiriciler hangi adimlari atabilirler?",
        choices: ["Kullanici girisi verilerini her zaman dogrulamak ve temizlemek", "Guvenli kodlama uygulamalarini takip etmek", "Veritabanlarini guncel tutmak", "Tumunu yap"],
        answer: 4

    },

    {
        question: "Bir web sitesinin URL'sinde asagidaki gibi parametreler gorurseniz, bu durum SQL injection saldirisina isaret ediyor olabilir mi?\n" +
            "\n" + "http://www.example.com/login.php?username=admin&password=12345",
        choices: ["Ever", "Hayir"],
        answer: 1

    },
    {/*10*/
        question: "10. Asagidakilerden hangisi SQL injection ile ilgili degildir?",
        choices: ["XSS (Cross-Site Scripting)", "CSRF (Cross-Site Request Forgery)", "LDAP enjeksiyonu", "XML enjeksiyonu"],
        answer: 1

    }

];
var BrokenAccessControlquestions = [ // //burada "blank"questions şeklinde indexteki options kısmına "blank" yerine ne koyuyorsan o olacak.

    {
        question: "1. Bir web uygulamasinda, kullanicilar profil bilgilerini duzenlemek icin bir form kullanir. Form, kullanicinin kimlik dogrulamasi icin bir kimlik numarasi (ID) ve yeni profili iceren JSON verisi kabul eder. Hangi senaryo bir Broken Access Control zafiyeti gosterir?",
        choices: ["Bir kullanici, baska bir kullanicinin profilini duzenlemek icin kendi kimlik numarasini ve yeni profili kullanabilir.\n", "Bir kullanici, profilini guncellemek icin gecersiz bir kimlik numarasi kullanabilir.", "Bir kullanici, profil bilgilerini duzenlemek icin ozel karakterler iceren bir JSON verisi kullanabilir.","Bir kullanici, profil bilgilerini duzenlemek icin bos bir JSON verisi kullanabilir."],
        answer: 1

    },
    {
        question: "2. Bir e-ticaret web sitesinde, kullanicilar sepetlerini goruntulemek icin bir API kullanir. API, kullanicinin kimlik dogrulamasi icin bir oturum kimligi (token) ve sepet bilgilerini dondurur. Hangi senaryo bir Broken Access Control zafiyeti gosterir?",
        choices: ["Bir kullanici, baska bir kullanicinin sepetini goruntulemek icin kendi oturum kimligini kullanabilir.", "Bir kullanici, gecersiz bir oturum kimligi kullanarak sepetini goruntuleyebilir.", "Bir kullanici, sepetini goruntulemek icin bos bir oturum kimligi kullanabilir.","Bir kullanici, sepetini goruntulemek icin suresi dolmus bir oturum kimligi kullanabilir."],
        answer: 1

    },
    {
        question: "3. Bir bankacilik uygulamasinda, kullanicilar hesap bakiyelerini kontrol etmek icin bir web arayuzu kullanir. Web arayuzu, kullanicinin kimlik dogrulamasi icin bir kullanici adi ve sifre ve hesap bakiyesini dondurur. Hangi senaryo bir Broken Access Control zafiyeti gosterir?",
        choices: ["Bir kullanici, baska bir kullanicinin hesap bakiyesini kontrol etmek icin kendi kullanici adini ve sifresini kullanabilir.", "Bir kullanici, gecersiz bir kullanici adi ve sifre kullanarak hesap bakiyesini kontrol edebilir.", "Bir kullanici, hesap bakiyesini kontrol etmek icin bos bir kullanici adi ve sifre kullanabilir.","Bir kullanici, hesap bakiyesini kontrol etmek icin kaba kuvvet saldirisi kullanabilir."],
        answer: 1

    },
    {
        question: "4. Bir sosyal medya platformunda, kullanicilar gonderilerini duzenlemek icin bir API kullanir. API, kullanicinin kimlik dogrulamasi icin bir API anahtari ve gonderi bilgilerini dondurur. Hangi senaryo bir Broken Access Control zafiyeti gosterir?",
        choices: ["Bir kullanici, baska bir kullanicinin gonderisini duzenlemek icin kendi API anahtarini kullanabilir.", "Bir kullanici, gecersiz bir API anahtari kullanarak gonderisini duzenleyebilir.", "Bir kullanici, gonderisini duzenlemek icin bos bir API anahtari kullanabilir.","Bir kullanici, gonderisini duzenlemek icin suresi dolmus bir API anahtari kullanabilir."],
        answer: 1

    },
    {
        question: "5. Bir SaaS uygulamasinda, kullanicilar kurulus verilerini yonetmek icin bir web arayuzu kullanir. Web arayuzu, kullanicinin kimlik dogrulamasi icin bir rol ve kurulus bilgilerini dondurur. Hangi senaryo bir Broken Access Control zafiyeti gosterir?",
        choices: ["Bir kullanici, baska bir kurulusun verilerini yonetmek icin kendi rolunu kullanabilir.", "Bir kullanici, gecersiz bir rol kullanarak kurulus verilerini yonetebilir.", "Bir kullanici, kurulus verilerini yonetmek icin bos bir rol kullanabilir.","Bir kullanici, kurulus verilerini yonetmek icin atanmamis bir rol kullanabilir."],
        answer: 1

    },
    {
        question: "6. Bir IoT cihazinda, kullanicilar cihaz ayarlarini degistirmek icin bir mobil uygulama kullanir. Mobil uygulama, kullanicinin kimlik dogrulamasi icin bir cihaz kimligi (ID) ve yeni ayarlari kabul eder. Hangi senaryo bir Broken Access Control zafiyeti gosterir?",
        choices: ["Bir kullanici, baska bir cihazin ayarlarini degistirmek icin kendi cihaz kimligini kullanabilir.", "Bir kullanici, gecersiz bir cihaz kimligi kullanarak ayarlarini degistirebilir.", "Bir kullanici, ayarlarini degistirmek icin bos bir cihaz kimligi kullanabilir.","Bir kullanici, ayarlarini degistirmek icin ozel karakterler iceren bir cihaz kimligi kullanabilir."],
        answer: 1

    },
    {
        question: "7. Bir API ag gecidinde, kullanicilar ucuncu taraf API'lerine erismek icin kimlik dogrulamasi yapar. Ag gecidi, kullanicinin kimlik dogrulama jetonu (token) ve ucuncu taraf API'sine erisim izni olup olmadigini kontrol eder. Hangi senaryo bir Broken Access Control zafiyeti gosterir?",
        choices: ["Bir kullanici, baska bir kullanicinin kimlik dogrulama jetonunu kullanarak ucuncu taraf API'lerine erisebilir.", "Bir kullanici, gecersiz bir kimlik dogrulama jetonu kullanarak ucuncu taraf API'lerine erisebilir.", "Bir kullanici, bos bir kimlik dogrulama jetonu kullanarak ucuncu taraf API'lerine erisebilir."," Bir kullanici, suresi dolmus bir kimlik dogrulama jetonu kullanarak ucuncu taraf API'lerine erisebilir."],
        answer: 1

    },
    {
        question: "8. Bir bulut depolama platformunda, kullanicilar dosyalarini yonetmek icin bir web arayuzu kullanir. Web arayuzu, kullanicinin kimlik dogrulamasi icin bir API anahtari ve dosya bilgilerini dondurur. Hangi senaryo bir Broken Access Control zafiyeti gosterir?",
        choices: ["Bir kullanici, baska bir kullanicinin dosyalarini yonetmek icin kendi API anahtarini kullanabilir.", "Bir kullanici, gecersiz bir API anahtari kullanarak dosyalarini yonetebilir.", "Bir kullanici, dosyalarini yonetmek icin bos bir API anahtari kullanabilir.","Bir kullanici, dosyalarini yonetmek icin suresi dolmus bir API anahtari kullanabilir."],
        answer: 1

    },
    {
        question: "9. Bir is takip platformunda, kullanicilar proje ayrintilarini goruntulemek icin bir web uygulamasi kullanir. Web uygulamasi, kullanicinin kimlik dogrulamasi icin bir yetki seviyesi ve proje bilgilerini dondurur. Hangi senaryo bir Broken Access Control zafiyeti gosterir?",
        choices: ["Bir kullanici, baska bir kullanicinin proje ayrintilarini goruntulemek icin kendi yetki seviyesini kullanabilir.", "Bir kullanici, gecersiz bir yetki seviyesi kullanarak proje ayrintilarini goruntuleyebilir.", "Bir kullanici, proje ayrintilarini goruntulemek icin bos bir yetki seviyesi kullanabilir.","Bir kullanici, proje ayrintilarini goruntulemek icin atanmamis bir yetki seviyesi kullanabilir."],
        answer: 1

    },
    {
        question: "10. Bir video konferans platformunda, kullanicilar toplanti kaydetme yetkisine sahip olup olmadiklarini kontrol eden bir kimlik dogrulama mekanizmasina sahiptir. Hangi senaryo bir Broken Access Control zafiyeti gosterir?",
        choices: ["Bir kullanici, baska bir kullanicinin toplantisini kaydetmek icin kendi kimlik dogrulamasi bilgilerini kullanabilir.", "Bir kullanici, gecersiz kimlik dogrulamasi bilgileri kullanarak bir toplanti kaydedebilir.", "Bir kullanici, toplanti kaydetmek icin bos kimlik dogrulamasi bilgileri kullanabilir.","Bir kullanici, toplanti kaydetmek icin birden fazla hesaptan oturum acabilir."],
        answer: 1

    }

];


//alert(questions.length);
document.getElementById("score").textContent = "Skor : " + 0;
document.querySelector(".view-results").style.display = "none";
document.querySelector(".quiz").style.display = "none";
document.querySelector(".final-result").style.display = "none";


document.querySelector(".choose-lang").addEventListener("click", function () {

    lang = document.getElementById("language").value + "questions";
    document.getElementById("ques-left").textContent = "Soru : " + (countQues + 1) + "/" + window[lang].length;

//    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display = "block";

    document.querySelector(".question").innerHTML = "<h1>" + window[lang][countQues].question + "</h1>";
    for (i = 0; i <= 3; i++) {
        document.getElementById("opt" + i).value = window[lang][countQues].choices[i];
        document.getElementById("lb" + i).innerHTML = window[lang][countQues].choices[i];

    }
    ;/*For loop Closed*/

//    window.location.href="#score";

});


document.querySelector(".submit-answer").addEventListener("click", function () {
//     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
//     alert(document.querySelector('input[name="options"]:checked').value);

    if (document.querySelector('input[name="options"]:checked').value === window[lang][countQues].choices[window[lang][countQues].answer - 1]) {

        score += 10;
        document.getElementById("score").textContent = "Skor : " + score;
        document.getElementById("ques-view").innerHTML += "<div class='ques-circle correct'>" + (countQues + 1) + "</div>";

    } else {

        score -= 5;
        document.getElementById("score").textContent = "Skor : " + score;
        document.getElementById("ques-view").innerHTML += "<div class='ques-circle incorrect'>" + (countQues + 1) + "</div>";
    }
    ;

    if (countQues < window[lang].length - 1) {
        countQues++;
    } else {
        document.querySelector(".submit-answer").style.display = "none";
        document.querySelector(".view-results").style.display = "unset";

    }

    document.getElementById("ques-left").textContent = "Soru : " + (countQues + 1) + "/" + window[lang].length;
    document.querySelector(".question").innerHTML = "<h1>" + window[lang][countQues].question + "</h1>";
    for (i = 0; i <= 3; i++) {
        document.getElementById("opt" + i).value = window[lang][countQues].choices[i];
        document.getElementById("lb" + i).innerHTML = window[lang][countQues].choices[i];

    }
    ;/*For loop Closed*/

});

document.querySelector(".view-results").addEventListener("click", function () {

    document.querySelector(".final-result").style.display = "block";

    document.querySelector(".solved-ques-no").innerHTML = "Cozulen sorular " + (countQues + 1) + " Kategori " + document.getElementById("language").value;

    var correct = document.getElementById("ques-view").getElementsByClassName("Dogru").length;

    document.querySelector(".right-wrong").innerHTML = correct + " Dogru ve " + ((countQues + 1) - correct) + " yanlis";

    document.getElementById("display-final-score").innerHTML = "Son Skorunuz: " + score;

    if (correct / (countQues + 1) > 0.8) {
        document.querySelector(".remark").innerHTML = "Sonuc: Cok iyi! Mukemmel :)";
    } else if (correct / (countQues + 1) > 0.6) {
        document.querySelector(".remark").innerHTML = "Sonuc: Gayet iyi böyle devam edin.";

    } else if (correct / (countQues + 1)) {
        document.querySelector(".remark").innerHTML = "Sonuc: Eh biraz daha iyi olabilirdi. Daha fazla ogrenin.";
    } else {
        document.querySelector(".remark").innerHTML = "Sonuc: Tekrar deneyin. Daha iyisini basarabilirsiniz.";
    }

//    window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click", function () {
    location.reload();

});

document.getElementById("about").addEventListener("click", function () {
    alert("Hayati Eser tarafindan girisimcilik projesi icin yapilmistir.");

});


/*Smooth Scroll*/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});


/*Smooth Scroll End*/
