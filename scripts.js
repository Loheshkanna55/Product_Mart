window.addEventListener("pageshow", function(event) {
    // Check if the page is loaded from the cache when using the back button
    if (event.persisted || performance.getEntriesByType("navigation")[0].type === "back_forward") {
        location.reload(); // Force the page to reload
    }
});

var cont=document.querySelector(".info")
var para = document.querySelector(".para")
var sec = document.querySelector(".sec-2nd")
var price_input_div = document.querySelector(".price_input")

var storage_input_div = document.querySelector(".storage_input")

var storage_image_div = document.querySelector("storage_image_div")
var ram_div = document.querySelector(".ram-div")
ram_div.setAttribute("class","ram_input")
var apple_div11=document.querySelector(".apple_div")
apple_div11.setAttribute("class","input_div")


function start(){
    var sec_1=document.querySelector(".sec_1")
    sec_1.style.display="block"
}



function brands(){
    var brand=document.querySelector(".sec-2nd")
    brand.style.display="block"
}

var input_div=document.querySelector(".input_div")
var brand_logo=document.querySelector(".selected-brand")
var display=document.querySelector(".display")
var img=document.createElement("img")
var app_head=document.querySelector(".brand_name")
var inform_div=document.createElement("div")
var para=document.getElementById("para")
var brand_name=document.querySelector(".brand_name")

app_head.style.fontWeight="600"
para.style.fontSize="40px"
para.style.fontWeight="500"
para.style.marginLeft="130px"
para.style.marginRight="130px"
inform_div.style.marginLeft="60px"
inform_div.style.marginRight="60px"
inform_div.style.marginTop="50px"
var apple_div=document.getElementById("apple_div")
var brand_img_div=document.querySelector(".brand_img_div")
var brand_logo=document.querySelector(".selected-brand")
var app_head=document.querySelector(".brand_name")
var brand_img_div=document.querySelector(".brand_img_div")
var sec_3=document.querySelector(".sec_3")







///////

    


/////

function apple(){
    var sec_3=document.querySelector(".sec_3")
    sec_3.style.display="block"
    var apple_div=document.getElementById("apple_div")
    apple_div.style.display="block"
    display.style.display="block"
    input_div.style.display="none"
    brand_img_div.style.display="none"
    ram_input.style.display="block"
    brand_logo.style.marginTop="210px"
    brand_name.innerHTML='<img src="apple.svg" class="branded_img">'
    var branded_img=document.querySelector(".branded_img")
    para.style.marginTop="30px"
    branded_img.style.height="80px"
    branded_img.style.width="200px"
    branded_img.style.marginLeft="-120px"
    para.innerHTML=
    '<p style="margin-bottom: 50px;">The iPhone, Apple’s flagship smartphone, has been a leader in the industry since its debut in 2007. It combines powerful hardware, a polished operating system (iOS), and a broad ecosystem of software and services, setting high standards for quality, security, and user experience.</p>'
    
    var storage_tick_btn2=document.createElement("button")
    storage_tick_btn2.id="storage_iphone_btn"
    storage_tick_btn2.style.height="80px"
    storage_tick_btn2.style.width="100px"
    storage_tick_btn2.style.backgroundColor="#16A2B2"
    storage_tick_btn2.style.borderStyle="solid"
    storage_tick_btn2.style.borderWidth="1px"
    storage_tick_btn2.style.borderRadius="100%"
    storage_tick_btn2.style.borderColor="black"
    storage_tick_btn2.style.marginLeft="100px"
    storage_tick_btn2.innerHTML='<p>&#10004</p>'
    storage_tick_btn2.style.cursor="pointer"
    var apple_storage_radio=document.getElementById("apple_storage_radio")
    apple_storage_radio.appendChild(storage_tick_btn2)
    
    storage_tick_btn2.addEventListener("mouseenter",function(){
        storage_tick_btn2.style.backgroundColor="gray"
    })
    storage_tick_btn2.addEventListener("mouseleave",function(){
        storage_tick_btn2.style.backgroundColor="#16A2B2"
    })
    var search_btn_div=document.querySelector(".search-btn-div") 
    
    search_btn_div.style.marginTop="30px"
    

    var apple_btn=document.getElementById("apple_btn")
    if(apple_btn.value=="apple"){
        storage_tick_btn2.addEventListener("click",function(){
            apple_search()
        })
    }
}




var price_span_1=document.getElementById("price_span_1")
var price_span_2=document.getElementById("price_span_2")

function samsung(){
    apple_div.style.display="none"
    sec_3.style.display="block"
    display.style.display="block"
    input_div.style.display="block"
    brand_img_div.style.display="none"
    ram_input.style.display="block"
    brand_logo.style.marginTop="210px"
    brand_name.innerHTML='<img src="samsung.svg" class="branded_img">'
    var branded_img=document.querySelector(".branded_img")
    para.style.marginTop="30px"
    branded_img.style.height="80px"
    branded_img.style.width="200px"
    branded_img.style.marginLeft="-60px"
    para.innerHTML=
    '<p style="margin-bottom: 50px;">Samsung, a major player in the smartphone industry, has built a strong reputation with its Galaxy line since launching its first smartphone in 2009. Known for its innovation in hardware, vibrant displays, and versatile Android-based operating system </p>'
    var search_btn_div=document.querySelector(".search-btn-div")
    search_btn_div.style.marginTop="130px"
    var storage_tick_btn=document.createElement("button")
    var storage_radio=document.getElementById("storage_radio")
    storage_radio.style.width="100%"
    storage_tick_btn.style.height="80px"
    storage_tick_btn.style.width="100px"
    storage_tick_btn.style.backgroundColor="#16A2B2"
    storage_tick_btn.style.borderStyle="solid"
    storage_tick_btn.style.borderWidth="1px"
    storage_tick_btn.style.borderRadius="100%"
    storage_tick_btn.style.borderColor="black"
    storage_tick_btn.style.marginLeft="120px"
    storage_tick_btn.innerHTML='<p>&#10004</p>'
    storage_tick_btn.style.cursor="pointer"
    storage_radio.appendChild(storage_tick_btn)
    
    
    storage_tick_btn.addEventListener("mouseenter",function(){
        storage_tick_btn.style.backgroundColor="gray"
    })
    storage_tick_btn.addEventListener("mouseleave",function(){
        storage_tick_btn.style.backgroundColor="#16A2B2"
    })
        
    var samsung_btn=document.getElementById("samsung_btn")
    if(samsung_btn.value=="samsung"){
        storage_tick_btn.addEventListener("click",function(){
            samsung_search()
        })
    }
}



function vivo(){
    apple_div.style.display="none"
    sec_3.style.display="block"
    var storage_tick_btn=document.createElement("button")
    var storage_radio=document.getElementById("storage_radio")
    display.style.display="block"
    brand_logo.style.marginTop="190px"
    brand_img_div.style.display="none"
    brand_name.innerHTML='<img src="vivo.png" class="branded_img">'
    var branded_img=document.querySelector(".branded_img")
    para.style.marginTop="-30px"
    branded_img.style.height="140px"
    branded_img.style.width="200px"
    branded_img.style.marginLeft="-60px"
    para.innerHTML=
    '<p style="margin-bottom: 50px;">Vivo is a Chinese smartphone brand known for its stylish designs, camera innovations, and high-quality displays. Focused on delivering excellent photography features and user-friendly software, Vivo appeals seeking affordable, feature-rich devices.</p>'
    input_div.style.display="block"
    var search_btn_div=document.querySelector(".search-btn-div")
    search_btn_div.style.marginTop="130px"
    var storage_tick_btn=document.createElement("button")
    var storage_radio=document.getElementById("storage_radio")
    storage_tick_btn.style.height="80px"
    storage_tick_btn.style.width="100px"
    storage_tick_btn.style.backgroundColor="#16A2B2"
    storage_tick_btn.style.borderStyle="solid"
    storage_tick_btn.style.borderWidth="1px"
    storage_tick_btn.style.borderRadius="100%"
    storage_tick_btn.style.borderColor="black"
    storage_tick_btn.style.marginLeft="120px"
    storage_tick_btn.innerHTML='<p>&#10004</p>'
    storage_tick_btn.style.cursor="pointer"
    storage_radio.appendChild(storage_tick_btn)
    
    storage_tick_btn.addEventListener("mouseenter",function(){
        storage_tick_btn.style.backgroundColor="gray"
    })
    storage_tick_btn.addEventListener("mouseleave",function(){
        storage_tick_btn.style.backgroundColor="#16A2B2"
    })
        
    
    var vivo_btn=document.getElementById("vivo_btn")
    if(vivo_btn.value=="vivo"){
        storage_tick_btn.addEventListener("click",function(){
            vivo_search();
        })
    }
}



function oppo(){
    apple_div.style.display="none"
    sec_3.style.display="block"
    brand_img_div.style.display="none"
    brand_name.innerHTML='<img src="oppo.png" class="branded_img">'
    var branded_img=document.querySelector(".branded_img")
    
    para.style.marginTop="-50px"
    branded_img.style.height="200px"
    branded_img.style.width="200px"
    branded_img.style.marginLeft="-60px"
    para.innerHTML=
    '<p style="margin-bottom: 50px;">OPPO is a leading global smartphone brand known for its innovative technology, stylish designs, and exceptional camera capabilities. Renowned for features like fast charging and vibrant displays, OPPO devices cater to a wide range of users with premium and budget-friendly models.</p>'
    input_div.style.marginTop="400px" 

    display.style.display="block"
    input_div.style.display="block"
    var search_btn_div=document.querySelector(".search-btn-div")
    search_btn_div.style.marginTop="130px"
    var storage_tick_btn=document.createElement("button")
    var storage_radio=document.getElementById("storage_radio")
    storage_tick_btn.style.height="80px"
    storage_tick_btn.style.width="100px"
    storage_tick_btn.style.backgroundColor="#16A2B2"
    storage_tick_btn.style.borderStyle="solid"
    storage_tick_btn.style.borderWidth="1px"
    storage_tick_btn.style.borderRadius="100%"
    storage_tick_btn.style.borderColor="black"
    storage_tick_btn.style.marginLeft="120px"
    storage_tick_btn.innerHTML='<p>&#10004</p>'
    storage_tick_btn.style.cursor="pointer"
    storage_radio.appendChild(storage_tick_btn)
    
    storage_tick_btn.addEventListener("mouseenter",function(){
        storage_tick_btn.style.backgroundColor="gray"
    })
    storage_tick_btn.addEventListener("mouseleave",function(){
        storage_tick_btn.style.backgroundColor="#16A2B2"
    })
        
    var oppo_btn=document.getElementById("oppo_btn")
    if(oppo_btn.value=="oppo"){
        storage_tick_btn.addEventListener("click",function(){
            oppo_search()
        })
    }
}

function mi(){
    apple_div.style.display="none"
    sec_3.style.display="block"
    brand_logo.style.marginTop="220px"
    brand_img_div.style.display="none"
    brand_name.innerHTML='<img src="xiaomi.svg" class="branded_img">'
    var branded_img=document.querySelector(".branded_img")
    para.style.marginTop="0px"
    branded_img.style.marginTop="0px"
    branded_img.style.height="100px"
    branded_img.style.width="240px"
    branded_img.style.marginLeft="-130px"
    para.innerHTML=
    '<p style="margin-bottom: 50px;">Xiaomi is a renowned global brand offering high-quality smartphones at competitive prices, blending innovation with affordability. With advanced cameras and cutting-edge designs, Xiaomi delivers exceptional value in both flagship and budget-friendly segments.</p>'
    input_div.style.marginTop="350px"
    display.style.display="block"
    input_div.style.display="block"
    var search_btn_div=document.querySelector(".search-btn-div")
    search_btn_div.style.marginTop="130px"
    var storage_tick_btn=document.createElement("button")
    var storage_radio=document.getElementById("storage_radio")
    storage_tick_btn.style.height="80px"
    storage_tick_btn.style.width="100px"
    storage_tick_btn.style.backgroundColor="#16A2B2"
    storage_tick_btn.style.borderStyle="solid"
    storage_tick_btn.style.borderWidth="1px"
    storage_tick_btn.style.borderRadius="100%"
    storage_tick_btn.style.borderColor="black"
    storage_tick_btn.style.marginLeft="120px"
    storage_tick_btn.innerHTML='<p>&#10004</p>'
    storage_tick_btn.style.cursor="pointer"
    storage_radio.appendChild(storage_tick_btn)
    
    storage_tick_btn.addEventListener("mouseenter",function(){
        storage_tick_btn.style.backgroundColor="gray"
    })
    storage_tick_btn.addEventListener("mouseleave",function(){
        storage_tick_btn.style.backgroundColor="#16A2B2"
    })
    var mi_btn=document.getElementById("mi_btn")
    if(mi_btn.value=="mi"){
        storage_tick_btn.addEventListener("click",function(){
            mi_search()
        })
    }
}

function oneplus(){
    apple_div.style.display="none"
    sec_3.style.display="block"
    brand_img_div.style.display="none"
    brand_name.innerHTML='<img src="oneplus-logo-AD0F8C44DC-seeklogo.com.png" class="branded_img">'
    var branded_img=document.querySelector(".branded_img")
    para.style.marginTop="-0px"
    branded_img.style.height="70px"
    branded_img.style.width="200px"
    branded_img.style.marginLeft="-60px"
    para.innerHTML=
    '<p style="margin-bottom: 50px;">OnePlus is a premium smartphone brand celebrated for its sleek designs, powerful performance, and smooth OxygenOS interface. Known for flagship features like fast charging, vibrant displays, and exceptional build quality, OnePlus devices cater to tech enthusiasts and professionals.</p>'
    input_div.style.marginTop="350px"
    var search_btn_div=document.querySelector(".search-btn-div")
    search_btn_div.style.marginTop="130px"
    display.style.display="block"
    input_div.style.display="block"
    
    var storage_tick_btn=document.createElement("button")
    var storage_radio=document.getElementById("storage_radio")
    storage_tick_btn.style.height="80px"
    storage_tick_btn.style.width="100px"
    storage_tick_btn.style.backgroundColor="#16A2B2"
    storage_tick_btn.style.borderStyle="solid"
    storage_tick_btn.style.borderWidth="1px"
    storage_tick_btn.style.borderRadius="100%"
    storage_tick_btn.style.borderColor="black"
    storage_tick_btn.style.marginLeft="120px"
    storage_tick_btn.innerHTML='<p>&#10004</p>'
    storage_tick_btn.style.cursor="pointer"
    storage_radio.appendChild(storage_tick_btn)
    
    storage_tick_btn.addEventListener("mouseenter",function(){
        storage_tick_btn.style.backgroundColor="gray"
    })
    storage_tick_btn.addEventListener("mouseleave",function(){
        storage_tick_btn.style.backgroundColor="#16A2B2"
    })
        
    var oneplus_btn=document.getElementById("oneplus_btn")
    if(oneplus_btn.value=="oneplus"){
        storage_tick_btn.addEventListener("click",function(){
            oneplus_search()
        })
    }
}

function moto(){
    apple_div.style.display="none"
    sec_3.style.display="block"
    brand_img_div.style.display="none"
    brand_name.innerHTML='<img src="motorola.png" class="branded_img">'
    var branded_img=document.querySelector(".branded_img")
    para.style.marginTop="30px"
    branded_img.style.height="130px"
    branded_img.style.width="200px"
    branded_img.style.marginLeft="-60px"
    para.innerHTML=
    '<p style="margin-bottom: 50px;">Motorola is a trusted smartphone brand known for its durable designs, clean Android experience, and reliable performance. Offering a range of devices from budget-friendly models to advanced flagships, Motorola combines innovation with affordability</p>'
    input_div.style.marginTop="400px"  

    display.style.display="block"
    input_div.style.display="block"
    var search_btn_div=document.querySelector(".search-btn-div")
    search_btn_div.style.marginTop="130px"
    var storage_tick_btn=document.createElement("button")
    var storage_radio=document.getElementById("storage_radio")
    storage_tick_btn.style.height="80px"
    storage_tick_btn.style.width="100px"
    storage_tick_btn.style.backgroundColor="#16A2B2"
    storage_tick_btn.style.borderStyle="solid"
    storage_tick_btn.style.borderWidth="1px"
    storage_tick_btn.style.borderRadius="100%"
    storage_tick_btn.style.borderColor="black"
    storage_tick_btn.style.marginLeft="120px"
    storage_tick_btn.innerHTML='<p>&#10004</p>'
    storage_tick_btn.style.cursor="pointer"
    storage_radio.appendChild(storage_tick_btn)
    
    storage_tick_btn.addEventListener("mouseenter",function(){
        storage_tick_btn.style.backgroundColor="gray"
    })
    storage_tick_btn.addEventListener("mouseleave",function(){
        storage_tick_btn.style.backgroundColor="#16A2B2"
    })
        
    var moto_btn=document.getElementById("moto_btn")
    if(moto_btn.value=="moto"){
        storage_tick_btn.addEventListener("click",function(){
            moto_search()
        })
    }
}


function poco(){
    apple_div.style.display="none"
    sec_3.style.display="block"
    brand_img_div.style.display="none"
    brand_name.innerHTML='<img src="POCO-Emblem.png" class="branded_img">'
    var branded_img=document.querySelector(".branded_img")
    para.style.marginTop="30px"
    branded_img.style.height="100px"
    branded_img.style.width="200px"
    branded_img.style.marginLeft="-60px"
    para.innerHTML=
    '<p style="margin-bottom: 50px;">POCO is a dynamic smartphone brand recognized for delivering high-performance devices at affordable prices. Known for powerful processors, vibrant displays, and gaming-friendly features, POCO caters to tech enthusiasts and budget-conscious users alike.</p>'
    input_div.style.marginTop="400px"  

    display.style.display="block"
    input_div.style.display="block"
    var storage_tick_btn=document.createElement("button")
    var search_btn_div=document.querySelector(".search-btn-div")
    search_btn_div.style.marginTop="130px"
    var storage_radio=document.getElementById("storage_radio")
    storage_tick_btn.style.height="80px"
    storage_tick_btn.style.width="100px"
    storage_tick_btn.style.backgroundColor="#16A2B2"
    storage_tick_btn.style.borderStyle="solid"
    storage_tick_btn.style.borderWidth="1px"
    storage_tick_btn.style.borderRadius="100%"
    storage_tick_btn.style.borderColor="black"
    storage_tick_btn.style.marginLeft="120px"
    storage_tick_btn.innerHTML='<p>&#10004</p>'
    storage_tick_btn.style.cursor="pointer"
    storage_radio.appendChild(storage_tick_btn)
    storage_tick_btn.addEventListener("mouseenter",function(){
        storage_tick_btn.style.backgroundColor="gray"
    })
    storage_tick_btn.addEventListener("mouseleave",function(){
        storage_tick_btn.style.backgroundColor="#16A2B2"
    })

    var poco_btn=document.getElementById("poco_btn")
    if(poco_btn.value=="poco"){
        storage_tick_btn.addEventListener("click",function(){
            poco_search()
        })
    }
}

function realme(){
    apple_div.style.display="none"
    sec_3.style.display="block"
    brand_logo.style.marginTop="220px"
    brand_img_div.style.display="none"
    brand_name.innerHTML='<img src="realme3.png" class="branded_img">'
    var branded_img=document.querySelector(".branded_img")
    para.style.marginTop="30px"
    branded_img.style.height="220px"
    branded_img.style.marginTop="-50px"
    branded_img.style.width="200px"
    branded_img.style.marginLeft="-60px"
    para.innerHTML=
    '<p style="margin-top: -50px;">Realme mobiles are celebrated for combining cutting-edge technology with stylish designs at budget-friendly prices. Packed with powerful processors, vibrant displays, and impressive camera setups, they cater to gamers, photographers, and everyday users alike.'
    input_div.style.marginTop="400px" 
    var search_btn_div=document.querySelector(".search-btn-div")
    search_btn_div.style.marginTop="130px"
    display.style.display="block"
    input_div.style.display="block"
    
    var storage_tick_btn=document.createElement("button")
    var storage_radio=document.getElementById("storage_radio")
    storage_tick_btn.style.height="80px"
    storage_tick_btn.style.width="100px"
    storage_tick_btn.style.backgroundColor="#16A2B2"
    storage_tick_btn.style.borderStyle="solid"
    storage_tick_btn.style.borderWidth="1px"
    storage_tick_btn.style.borderRadius="100%"
    storage_tick_btn.style.borderColor="black"
    storage_tick_btn.style.marginLeft="120px"
    storage_tick_btn.innerHTML='<p>&#10004</p>'
    storage_tick_btn.style.cursor="pointer"
    storage_radio.appendChild(storage_tick_btn)
    
    storage_tick_btn.addEventListener("mouseenter",function(){
        storage_tick_btn.style.backgroundColor="gray"
    })
    storage_tick_btn.addEventListener("mouseleave",function(){
        storage_tick_btn.style.backgroundColor="#16A2B2"
    })
        
    var realme_btn=document.getElementById("realme_btn")
    if(realme_btn.value=="realme"){
        storage_tick_btn.addEventListener("click",function(){
            realme_search()
        })
    }
}

var ram_div=document.querySelector(".ram-div")
var ram_input=document.querySelector(".ram_input")
var price_value1=document.querySelector('input[value="10K-20K"]')
var price_value2=document.querySelector('input[value="Above-20K"]')

var ram6=document.getElementById("6gb")
span_ram_1=document.getElementById("span-ram-1")
span_ram_2=document.getElementById("span-ram-2")
ram_tick_btn=document.getElementById("ram_tick_btn")
var storage_radio=document.getElementById("storage_radio")
var span_storage_1=document.getElementById("span_storage_1")
var span_storage_2=document.getElementById("span_storage_2")
/**/
function price_btn(){
    if(price_value1.checked){
        span_ram_1.innerHTML='<input type="radio" name="ram" id="4gb" value="4GB">4GB';
        span_ram_2.innerHTML='<input type="radio" name="ram" id="6gb" value="6GB">6GB';
        ram_input.style.display="block"
        ram_input.style.marginTop="60px"  
        ram_tick_btn.style.marginLeft="160px" 
    }
    if(price_value2.checked){
       span_ram_1.innerHTML='<input type="radio" name="ram" id="6Gb" value="six_gb">6GB';
        span_ram_2.innerHTML='<input type="radio" name="ram" id="8Gb" value="8Gb">8GB';
        ram_input.style.display="block" 
        ram_input.style.marginTop="60px"
        ram_tick_btn.style.marginLeft="160px"
    }  
}

function price_btn_apple(){

    var k50=document.querySelector('input[value="50K-1L"]')
    var Above_1L=document.querySelector('input[value="Above_1L"]')
    var storage_tick_btn3=document.getElementById("storage_iphone_btn")
    var storage_radio=document.getElementById("storage_radio")
    var span_storage_1_iphone=document.querySelector(".span_storage_1_iphone")
    var span_storage_2_iphone=document.querySelector(".span_storage_2_iphone")
    if(k50.checked){
        console.log("jhfyjfcjfhg")
        span_storage_1_iphone.innerHTML='<input type="radio" name="storage" id="iphone_128_gb" value="iphone_128_gb">128 GB'
        span_storage_2_iphone.innerHTML='<input type="radio" name="storage" id="256-512gb" value="256-512gb">256-512 GB'
        storage_tick_btn3.style.marginLeft="70px"
    }
    if(Above_1L.checked){
        span_storage_1_iphone.innerHTML='<input type="radio" name="storage" id="512gb" value="512gb">512 GB'
        span_storage_2_iphone.innerHTML='<input type="radio" name="storage" id="1tb" value="1tb">1TB'
        span_storage_2.style.marginRight="100px"
        storage_tick_btn3.style.marginLeft="165px"
    }

}


function ram_btn(){
    var gb4=document.querySelector('input[value="4GB"]')
    var gb6=document.querySelector('input[value="6GB"]')
    var span_storage_1=document.getElementById("span_storage_1")
    var span_storage_2=document.getElementById("span_storage_2")
    
    if(gb4.checked){
        if(gb4.value=="4GB"){
            span_storage_1.innerHTML='<input type="radio" name="storage" id="64gb" value="64GB">64 GB'
            span_storage_2.innerHTML='<input type="radio" name="storage" id="128gb" value="128GB">128 GB'
            var gb128=document.getElementById("128gb")
            gb128.style.marginLeft="135px"
        } 
    }
    
    if(gb6.checked){
        span_storage_1.innerHTML='<input type="radio" name="storage" id="64-128gb" value="64-128GB">128 GB'
        span_storage_2.innerHTML='<input type="radio" name="storage" id="128-256gb" value="128-256GB" style="margin-left: 75px;">256 GB'
        var gb_128_256=document.getElementById("128-256gb")
        gb_128_256.style.marginLeft="118px" 
    }   
}

function apple_search(){
    var price_50K_1L=document.getElementById("50K-1L")
    var Above_1L=document.getElementById("Above_1L")
    var iphone_128_gb=document.getElementById("iphone_128_gb")
    var gb256_512=document.getElementById("256-512gb")
    var search_btn=document.querySelector(".search-btn")
    if(price_50K_1L.checked){
        if(price_50K_1L.value=="50K-1L"){
            if(iphone_128_gb.checked){
                if(iphone_128_gb.value=="iphone_128_gb"){
                    search_btn.addEventListener("click",function(event){
                        window.location.href="https://www.flipkart.com/search?q=iphone+below+100000+4gb+ram&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB&p%5B%5D=facets.brand%255B%255D%3DApple&page=1"
                    })
                }
            }
            if(gb256_512.checked){
                if(gb256_512.value=="256-512gb"){
                    search_btn.addEventListener("click",function(event){
                        window.location.href="https://www.flipkart.com/search?q=iphone+below+100000+4gb+ram&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&p%5B%5D=facets.brand%255B%255D%3DApple&p%5B%5D=facets.internal_storage%255B%255D%3D256%2BGB%2B%2526%2BAbove"
                    })
                }
            }
        }
    }
    var gb512=document.getElementById("512gb")
    var tb1=document.getElementById("1tb")
    if(Above_1L.checked){
        if(Above_1L.value=="Above_1L"){
            if(gb512.checked){
                if(gb512.value=="512gb"){
                    search_btn.addEventListener("click",function(event){
                        window.location.href=" https://www.flipkart.com/search?q=iphone%20pro%20max%20512g%20storage&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"
                    })
                }
            }
            if(tb1.checked){
                if(tb1.value=="1tb"){
                    search_btn.addEventListener("click",function(event){
                        window.location.href="https://www.flipkart.com/search?q=iphone%20pro%20max%201tb&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"
                    })
                }
            }
        }
    }
}

function  samsung_search(){
    var gb4=document.querySelector('input[value="4GB"]')
    var gb6=document.querySelector('input[value="6GB"]')
    var gb64=document.querySelector('input[value="64GB"]')
    var gb128=document.querySelector('input[value="128GB"]')
    var search_btn=document.querySelector(".search-btn")
    if(price_value1.checked){
        if(price_value1.value=="10K-20K"){
            if(gb4.checked){
                if(gb4.value=="4GB"){
                    if(gb64.checked){
                        if(gb64.value=="64GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href="https://www.flipkart.com/search?q=samsung+5g+mobile&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_HistoryAutoSuggest_1_2_na_na_na&otracker1=AS_QueryStore_HistoryAutoSuggest_1_2_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=samsung+5g+mobile%7CMobiles&requestId=db325a5b-df85-4a0b-929a-5b450e193f2e&as-searchtext=sa&p%5B%5D=facets.price_range.from%3D10000&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.ram%255B%255D%3D4%2BGB&p%5B%5D=facets.internal_storage%255B%255D%3D64%2B-%2B127.9%2BGB"
                            })   
                        }
                    }
                    if(gb128.checked){
                        if(gb128.value=="128GB"){
                            search_btn.addEventListener("click",function(){
                                window.location.href="https://www.flipkart.com/search?q=samsung+5g+mobile&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_HistoryAutoSuggest_2_3_na_na_na&otracker1=AS_QueryStore_HistoryAutoSuggest_2_3_na_na_na&as-pos=2&as-type=HISTORY&suggestionId=samsung+5g+mobile%7CMobiles&requestId=d6fb609e-b821-4ead-b61c-31fe84063112&p%5B%5D=facets.price_range.from%3D10000&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.ram%255B%255D%3D4%2BGB&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB"
                            })
                        }
                    }
                }
            }
            var gb64_128=document.querySelector('input[value="64-128GB"]')
            var gb128_256=document.querySelector('input[value="128-256GB"]')
            if(gb6.checked){
                if(gb6.value=="6GB"){
                    if(gb64_128.checked||gb128_256.checked){
                        if(gb64_128.value=="64-128GB"||gb128_256.value=="128-256GB"){
                            search_btn.addEventListener("click",function(event){
                            window.location.href="https://www.flipkart.com/search?q=samsung+5g+mobile&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_HistoryAutoSuggest_1_2_na_na_na&otracker1=AS_QueryStore_HistoryAutoSuggest_1_2_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=samsung+5g+mobile%7CMobiles&requestId=db325a5b-df85-4a0b-929a-5b450e193f2e&as-searchtext=sa&p%5B%5D=facets.price_range.from%3D10000&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.ram%255B%255D%3D6%2BGB&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB"
                         })
                        }
                    }
                }
            }
        } 
    }
    
    if(price_value2.checked){
        if(price_value2.value=="Above-20K"){
            var Gb6=document.querySelector('input[value="six_gb"]') 
            var Gb8=document.querySelector('input[value="8Gb"]')
            if(Gb6.checked){
                if(Gb6.value=="six_gb"){
                    var gb_128=document.querySelector('input[value="128_GB"]')
                    var gb_256=document.querySelector('input[value="256_GB"]')
                    if(gb_128.checked||gb_256.checked){
                        if(gb_128.value=="128_GB"||gb_256.value=="256_GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href='https://www.flipkart.com/search?q=samsung+5g+mobile&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_HistoryAutoSuggest_1_3_na_na_na&otracker1=AS_QueryStore_HistoryAutoSuggest_1_3_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=samsung+5g+mobile%7CMobiles&requestId=d6fb609e-b821-4ead-b61c-31fe84063112&as-searchtext=sam&p%5B%5D=facets.internal_storage%255B%255D%3D64%2B-%2B127.9%2BGB&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.ram%255B%255D%3D6%2BGB'
                            })
                        }
                    }
                }
            }
            if(Gb8.checked){
                if(Gb8.value=="8Gb"){
                    var gb_128=document.querySelector('input[value="128_GB"]')
                    var gb_256=document.querySelector('input[value="256_GB"]')
                    if(gb_128.checked){
                        if(gb_128.value=="128_GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href="https://www.flipkart.com/search?q=samsung+5g+mobile&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_HistoryAutoSuggest_1_3_na_na_na&otracker1=AS_QueryStore_HistoryAutoSuggest_1_3_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=samsung+5g+mobile%7CMobiles&requestId=d6fb609e-b821-4ead-b61c-31fe84063112&as-searchtext=sam&p%5B%5D=facets.internal_storage%255B%255D%3D64%2B-%2B127.9%2BGB&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3D30000&p%5B%5D=facets.ram%255B%255D%3D8%2BGB%2Band%2BAbove"
                            })
                        }
                    }
                    if(gb_256.checked){
                        if(gb_256.value=="256_GB"){
                            search_btn.addEventListener("click",function(event){
                                  window.location.href="https://www.flipkart.com/search?q=samsung+5g+mobile&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_HistoryAutoSuggest_1_3_na_na_na&otracker1=AS_QueryStore_HistoryAutoSuggest_1_3_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=samsung+5g+mobile%7CMobiles&requestId=d6fb609e-b821-4ead-b61c-31fe84063112&as-searchtext=sam&p%5B%5D=facets.internal_storage%255B%255D%3D64%2B-%2B127.9%2BGB&p%5B%5D=facets.internal_storage%255B%255D%3D256%2BGB%2B%2526%2BAbove&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3D30000&p%5B%5D=facets.ram%255B%255D%3D8%2BGB%2Band%2BAbove"
                            })
                        }
                    }
                }
            } 
        }
    }
}


function  vivo_search(){
    var gb4=document.querySelector('input[value="4GB"]')
    var gb6=document.querySelector('input[value="6GB"]')
    var gb64=document.querySelector('input[value="64GB"]')
    var gb128=document.querySelector('input[value="128GB"]')
    var search_btn=document.querySelector(".search-btn")
    if(price_value1.checked){
        if(price_value1.value=="10K-20K"){
            if(gb4.checked){
                if(gb4.value=="4GB"){
                    if(gb64.checked){
                        if(gb64.value=="64GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href="https://www.flipkart.com/search?q=vivo+mobile+5g&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_na&as-pos=1&as-type=RECENT&suggestionId=vivo+mobile+5g%7CMobiles&requestId=a4a39ebc-1efb-4cb8-8616-387c150f9c27&as-searchtext=vivo+mobile+5g&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.ram%255B%255D%3D4%2BGB&p%5B%5D=facets.internal_storage%255B%255D%3D64%2B-%2B127.9%2BGB"
                            })   
                        }
                    }
                    if(gb128.checked){
                        if(gb128.value=="128GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href="https://www.flipkart.com/search?q=vivo+mobile+5g&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_na&as-pos=1&as-type=RECENT&suggestionId=vivo+mobile+5g%7CMobiles&requestId=a4a39ebc-1efb-4cb8-8616-387c150f9c27&as-searchtext=vivo+mobile+5g&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.ram%255B%255D%3D4%2BGB&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB"
                            }) 
                        }
                    }
                }
            }
            var gb64_128=document.querySelector('input[value="64-128GB"]')
            var gb128_256=document.querySelector('input[value="128-256GB"]')
            if(gb6.checked){
                if(gb6.value=="6GB"){
                    if(gb64_128.checked||gb128_256.checked){
                        if(gb64_128.value=="64-128GB"||gb128_256.value=="128-256GB"){
                            search_btn.addEventListener("click",function(event){
                            window.location.href="https://www.flipkart.com/search?q=vivo+mobile+5g&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_na&as-pos=1&as-type=RECENT&suggestionId=vivo+mobile+5g%7CMobiles&requestId=a4a39ebc-1efb-4cb8-8616-387c150f9c27&as-searchtext=vivo+mobile+5g&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.ram%255B%255D%3D6%2BGB"
                         })
                        }
                    }
                }
            }
        } 
    }
    
    
    if(price_value2.checked){
        if(price_value2.value=="Above-20K"){
            var Gb6=document.querySelector('input[value="six_gb"]') 
            var Gb8=document.querySelector('input[value="8Gb"]')
            if(Gb6.checked){
                if(Gb6.value=="six_gb"){
                    var gb_128=document.querySelector('input[value="128_GB"]')
                    var gb_256=document.querySelector('input[value="256_GB"]')
                    if(gb_128.checked||gb_256.checked){
                        if(gb_128.value=="128_GB"||gb_256.value=="256_GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href='https://www.flipkart.com/search?q=vivo&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.ram%255B%255D%3D6%2BGB'
                            })
                        }
                    }
                }
            }
            if(Gb8.checked){
                if(Gb8.value=="8Gb"){
                    var gb_128=document.querySelector('input[value="128_GB"]')
                    var gb_256=document.querySelector('input[value="256_GB"]')
                    if(gb_128.checked){
                        if(gb_128.value=="128_GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href="https://www.flipkart.com/search?q=vivo&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.ram%255B%255D%3D8%2BGB%2Band%2BAbove&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB"
                            })
                        }
                    }
                    if(gb_256.checked){
                        if(gb_256.value=="256_GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href="https://www.flipkart.com/search?q=vivo&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.ram%255B%255D%3D8%2BGB%2Band%2BAbove&p%5B%5D=facets.internal_storage%255B%255D%3D256%2BGB%2B%2526%2BAbove"
                            })
                        }
                    }
                }
            } 
        }
    }
}


function  oppo_search(){
    var gb4=document.querySelector('input[value="4GB"]')
    var gb6=document.querySelector('input[value="6GB"]')
    var gb64=document.querySelector('input[value="64GB"]')
    var gb128=document.querySelector('input[value="128GB"]')
    var search_btn=document.querySelector(".search-btn")
    if(price_value1.checked){
        if(price_value1.value=="10K-20K"){
            if(gb4.checked){
                if(gb4.value=="4GB"){
                    if(gb64.checked){
                        if(gb64.value=="64GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href="https://www.flipkart.com/search?q=oppo+mobile+5g&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=oppo+mobile+5g%7CMobiles&requestId=d088af93-b5bc-44b9-9e9e-fc994debf154&as-searchtext=oppo&p%5B%5D=facets.price_range.from%3D10000&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.ram%255B%255D%3D4%2BGB&p%5B%5D=facets.internal_storage%255B%255D%3D64%2B-%2B127.9%2BGB"
                            })   
                        }
                    }
                    if(gb128.checked){
                        if(gb128.value=="128GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href="https://www.flipkart.com/search?q=oppo+mobile+5g&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=oppo+mobile+5g%7CMobiles&requestId=d088af93-b5bc-44b9-9e9e-fc994debf154&as-searchtext=oppo&p%5B%5D=facets.price_range.from%3D10000&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.ram%255B%255D%3D4%2BGB&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB"
                            })
                        }
                    }
                }
            }
            var gb64_128=document.querySelector('input[value="64-128GB"]')
            var gb128_256=document.querySelector('input[value="128-256GB"]')
            if(gb6.checked){
                if(gb6.value=="6GB"){
                    if(gb64_128.checked||gb128_256.checked){
                        if(gb64_128.value=="64-128GB"||gb128_256.value=="128-256GB"){
                            search_btn.addEventListener("click",function(event){
                            window.location.href="https://www.flipkart.com/search?q=oppo+mobile+5g&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=oppo+mobile+5g%7CMobiles&requestId=d088af93-b5bc-44b9-9e9e-fc994debf154&as-searchtext=oppo&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB&p%5B%5D=facets.price_range.from%3D10000&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.ram%255B%255D%3D6%2BGB"
                         })
                        }
                    }
                }
            }
        } 
    }
    if(price_value2.checked){
        if(price_value2.value=="Above-20K"){
            var Gb6=document.querySelector('input[value="six_gb"]') 
            var Gb8=document.querySelector('input[value="8Gb"]')
            if(Gb6.checked){
                if(Gb6.value=="six_gb"){
                    var gb_128=document.querySelector('input[value="128_GB"]')
                    var gb_256=document.querySelector('input[value="256_GB"]')
                    if(gb_128.checked||gb_256.checked){
                        if(gb_128.value=="128_GB"||gb_256.value=="256_GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href='https://www.flipkart.com/search?q=oppo+mobile+5g&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_11_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_11_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=oppo+mobile+5g%7CMobiles&requestId=e289171d-f619-42b3-ba05-f1750961478b&as-searchtext=oppo+mobile&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3D30000&p%5B%5D=facets.brand%255B%255D%3DOPPO&p%5B%5D=facets.ram%255B%255D%3D6%2BGB%2B%2BAbove'
                            })
                        }
                    }
                }
            }
            if(Gb8.checked){
                if(Gb8.value=="8Gb"){
                    var gb_128=document.querySelector('input[value="128_GB"]')
                    var gb_256=document.querySelector('input[value="256_GB"]')
                    if(gb_128.checked){
                        if(gb_128.value=="128_GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href="https://www.flipkart.com/search?q=oppo+mobile+5g&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_11_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_11_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=oppo+mobile+5g%7CMobiles&requestId=e289171d-f619-42b3-ba05-f1750961478b&as-searchtext=oppo+mobile&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3D30000&p%5B%5D=facets.brand%255B%255D%3DOPPO&p%5B%5D=facets.ram%255B%255D%3D8%2BGB%2Band%2BAbove&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB4"
                            })
                        }
                    }
                    if(gb_256.checked){
                        if(gb_256.value=="256_GB"){
                            search_btn.addEventListener("click",function(event){
                                  window.location.href="https://www.flipkart.com/search?q=oppo+mobile+5g&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_11_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_11_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=oppo+mobile+5g%7CMobiles&requestId=e289171d-f619-42b3-ba05-f1750961478b&as-searchtext=oppo+mobile&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3D30000&p%5B%5D=facets.brand%255B%255D%3DOPPO&p%5B%5D=facets.ram%255B%255D%3D8%2BGB%2Band%2BAbove&p%5B%5D=facets.internal_storage%255B%255D%3D256%2BGB%2B%2526%2BAbove"
                            })
                        }
                    }
                }
            } 
        }
    }
}


function  mi_search(){
    var gb4=document.querySelector('input[value="4GB"]')
    var gb6=document.querySelector('input[value="6GB"]')
    var gb64=document.querySelector('input[value="64GB"]')
    var search_btn=document.querySelector(".search-btn")
    var gb128=document.querySelector('input[value="128GB"]')
    if(price_value1.checked){
        if(price_value1.value=="10K-20K"){
            if(gb4.checked){
                if(gb4.value=="4GB"){
                    if(gb64.checked){
                        if(gb64.value=="64GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href="https://www.flipkart.com/search?q=xiaomi+5g+mobile&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_3_1_na_na_ps&otracker1=AS_Query_OrganicAutoSuggest_3_1_na_na_ps&as-pos=3&as-type=RECENT&suggestionId=xiaomi+5g+mobile&requestId=bd3ac66f-c56b-4177-868c-494940e5992e&as-searchtext=x&p%5B%5D=facets.price_range.from%3D10000&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.brand%255B%255D%3DREDMI&p%5B%5D=facets.ram%255B%255D%3D4%2BGB&p%5B%5D=facets.internal_storage%255B%255D%3D64%2B-%2B127.9%2BGB"
                            })   
                        }
                    }
                    if(gb128.checked){
                        if(gb128.value=="128GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href="https://www.flipkart.com/search?q=xiaomi+5g+mobile&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_3_1_na_na_ps&otracker1=AS_Query_OrganicAutoSuggest_3_1_na_na_ps&as-pos=3&as-type=RECENT&suggestionId=xiaomi+5g+mobile&requestId=bd3ac66f-c56b-4177-868c-494940e5992e&as-searchtext=x&p%5B%5D=facets.price_range.from%3D10000&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.brand%255B%255D%3DREDMI&p%5B%5D=facets.ram%255B%255D%3D4%2BGB&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB"
                            })
                        }
                    }
                }
            }
            var gb64_128=document.querySelector('input[value="64-128GB"]')
            var gb128_256=document.querySelector('input[value="128-256GB"]')
            if(gb6.checked){
                if(gb6.value=="6GB"){
                    if(gb64_128.checked||gb128_256.checked){
                        if(gb64_128.value=="64-128GB"||gb128_256.value=="128-256GB"){
                            search_btn.addEventListener("click",function(event){
                            window.location.href="https://www.flipkart.com/search?q=samsung+5g+mobile&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_HistoryAutoSuggest_1_2_na_na_na&otracker1=AS_QueryStore_HistoryAutoSuggest_1_2_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=samsung+5g+mobile%7CMobiles&requestId=db325a5b-df85-4a0b-929a-5b450e193f2e&as-searchtext=sa&p%5B%5D=facets.price_range.from%3D10000&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.ram%255B%255D%3D6%2BGB&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB"
                         })
                        }
                    }
                }
            }
        } 
    }
    
    
    if(price_value2.checked){
        if(price_value2.value=="Above-20K"){
            var Gb6=document.querySelector('input[value="six_gb"]') 
            var Gb8=document.querySelector('input[value="8Gb"]')
            if(Gb6.checked){
                if(Gb6.value=="six_gb"){
                    var gb_128=document.querySelector('input[value="128_GB"]')
                    var gb_256=document.querySelector('input[value="256_GB"]')
                    if(gb_128.checked||gb_256.checked){
                        if(gb_128.value=="128_GB"||gb_256.value=="256_GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href='https://www.flipkart.com/search?q=xiaomi+5g+mobile&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_3_1_na_na_ps&otracker1=AS_Query_OrganicAutoSuggest_3_1_na_na_ps&as-pos=3&as-type=RECENT&suggestionId=xiaomi+5g+mobile&requestId=bd3ac66f-c56b-4177-868c-494940e5992e&as-searchtext=x&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB&p%5B%5D=facets.brand%255B%255D%3DREDMI&p%5B%5D=facets.ram%255B%255D%3D6%2BGB&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3DMax'
                            })
                        }
                    }
                }
            }
            if(Gb8.checked){
                if(Gb8.value=="8Gb"){
                    var gb_128=document.querySelector('input[value="128_GB"]')
                    var gb_256=document.querySelector('input[value="256_GB"]')
                    if(gb_128.checked){
                        if(gb_128.value=="128_GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href="https://www.flipkart.com/search?q=xiaomi+5g+mobile&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_3_1_na_na_ps&otracker1=AS_Query_OrganicAutoSuggest_3_1_na_na_ps&as-pos=3&as-type=RECENT&suggestionId=xiaomi+5g+mobile&requestId=bd3ac66f-c56b-4177-868c-494940e5992e&as-searchtext=x&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.brand%255B%255D%3DREDMI&p%5B%5D=facets.ram%255B%255D%3D8%2BGB%2Band%2BAbove"
                            })
                        }
                    }
                    if(gb_256.checked){
                        if(gb_256.value=="256_GB"){
                            search_btn.addEventListener("click",function(event){
                                  window.location.href="https://www.flipkart.com/search?q=xiaomi+5g+mobile&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_3_1_na_na_ps&otracker1=AS_Query_OrganicAutoSuggest_3_1_na_na_ps&as-pos=3&as-type=RECENT&suggestionId=xiaomi+5g+mobile&requestId=bd3ac66f-c56b-4177-868c-494940e5992e&as-searchtext=x&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.brand%255B%255D%3DREDMI&p%5B%5D=facets.ram%255B%255D%3D8%2BGB%2Band%2BAbove&p%5B%5D=facets.internal_storage%255B%255D%3D256%2BGB%2B%2526%2BAbove"
                            })
                        }
                    }
                }
            } 
        }
    }
}


function oneplus_search(){
    var gb4=document.querySelector('input[value="4GB"]')
    var gb6=document.querySelector('input[value="6GB"]')
    var gb64=document.querySelector('input[value="64GB"]')
    var gb128=document.querySelector('input[value="128GB"]')
    var search_btn=document.querySelector(".search-btn")
    if(price_value1.checked){
        if(price_value1.value=="10K-20K"){
            if(gb4.checked){
                if(gb4.value=="4GB"){
                    if(gb64.checked){
                        if(gb64.value=="64GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href="https://www.flipkart.com/search?q=oneplus+mobile+5g&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=oneplus+mobile+5g%7CMobiles&requestId=af8b1995-171c-4b99-a737-a879dcf0846d&as-searchtext=one&p%5B%5D=facets.price_range.from%3D10000&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.ram%255B%255D%3D4%2BGB&p%5B%5D=facets.internal_storage%255B%255D%3D64%2B-%2B127.9%2BGB"
                            })   
                        }
                    }
                    if(gb128.checked){
                        if(gb128.value=="128GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href="https://www.flipkart.com/search?q=oneplus+mobile+5g&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=oneplus+mobile+5g%7CMobiles&requestId=af8b1995-171c-4b99-a737-a879dcf0846d&as-searchtext=one&p%5B%5D=facets.price_range.from%3D10000&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.ram%255B%255D%3D4%2BGB&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB"
                            })
                        }
                    }
                }
            }
            var gb64_128=document.querySelector('input[value="64-128GB"]')
            var gb128_256=document.querySelector('input[value="128-256GB"]')
            if(gb6.checked){
                if(gb6.value=="6GB"){
                    if(gb64_128.checked||gb128_256.checked){
                        if(gb64_128.value=="64-128GB"||gb128_256.value=="128-256GB"){
                            search_btn.addEventListener("click",function(event){
                            window.location.href="https://www.flipkart.com/search?q=oneplus+mobile+5g&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=oneplus+mobile+5g%7CMobiles&requestId=af8b1995-171c-4b99-a737-a879dcf0846d&as-searchtext=one&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB&p%5B%5D=facets.price_range.from%3D10000&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.ram%255B%255D%3D6%2BGB"
                         })
                        }
                    }
                }
            }
        } 
    }
    
    
    if(price_value2.checked){
        if(price_value2.value=="Above-20K"){
            var Gb6=document.querySelector('input[value="six_gb"]') 
            var Gb8=document.querySelector('input[value="8Gb"]')
            if(Gb6.checked){
                if(Gb6.value=="six_gb"){
                    var gb_128=document.querySelector('input[value="128_GB"]')
                    var gb_256=document.querySelector('input[value="256_GB"]')
                    if(gb_128.checked||gb_256.checked){
                        if(gb_128.value=="128_GB"||gb_256.value=="256_GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href='https://www.flipkart.com/search?q=oneplus+mobile+5g&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=oneplus+mobile+5g%7CMobiles&requestId=af8b1995-171c-4b99-a737-a879dcf0846d&as-searchtext=one&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB&p%5B%5D=facets.ram%255B%255D%3D6%2BGB&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3DMax'
                            })
                        }
                    }
                }
            }
            if(Gb8.checked){
                if(Gb8.value=="8Gb"){
                    var gb_128=document.querySelector('input[value="128_GB"]')
                    var gb_256=document.querySelector('input[value="256_GB"]')
                    if(gb_128.checked){
                        if(gb_128.value=="128_GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href="https://www.flipkart.com/search?q=oneplus+mobile+5g&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=oneplus+mobile+5g%7CMobiles&requestId=af8b1995-171c-4b99-a737-a879dcf0846d&as-searchtext=one&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.ram%255B%255D%3D8%2BGB%2Band%2BAbove"
                            })
                        }
                    }
                    if(gb_256.checked){
                        if(gb_256.value=="256_GB"){
                            search_btn.addEventListener("click",function(event){
                                  window.location.href="https://www.flipkart.com/search?q=oneplus+mobile+5g&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=oneplus+mobile+5g%7CMobiles&requestId=af8b1995-171c-4b99-a737-a879dcf0846d&as-searchtext=one&p%5B%5D=facets.internal_storage%255B%255D%3D256%2BGB%2B%2526%2BAbove&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.ram%255B%255D%3D8%2BGB%2Band%2BAbove"
                            })
                        }
                    }
                }
            } 
        }
    }
}


function moto_search(){
    var gb4=document.querySelector('input[value="4GB"]')
    var gb6=document.querySelector('input[value="6GB"]')
    var gb64=document.querySelector('input[value="64GB"]')
    var gb128=document.querySelector('input[value="128GB"]')
    var search_btn=document.querySelector(".search-btn")
    if(price_value1.checked){
        if(price_value1.value=="10K-20K"){
            if(gb4.checked){
                if(gb4.value=="4GB"){
                    if(gb64.checked){
                        if(gb64.value=="64GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href="https://www.flipkart.com/search?q=motorola+mobiles+5g&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=motorola+mobiles+5g%7CMobiles&requestId=9f389d35-ca71-4c0c-9253-a768efaed8a9&as-searchtext=moto&p%5B%5D=facets.price_range.from%3D10000&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.brand%255B%255D%3DMOTOROLA&p%5B%5D=facets.ram%255B%255D%3D4%2BGB&p%5B%5D=facets.internal_storage%255B%255D%3D64%2B-%2B127.9%2BGB"
                            })   
                        }
                    }
                    if(gb128.checked){
                        if(gb128.value=="128GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href="https://www.flipkart.com/search?q=motorola+mobiles+5g&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=motorola+mobiles+5g%7CMobiles&requestId=9f389d35-ca71-4c0c-9253-a768efaed8a9&as-searchtext=moto&p%5B%5D=facets.price_range.from%3D10000&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.brand%255B%255D%3DMOTOROLA&p%5B%5D=facets.ram%255B%255D%3D4%2BGB&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB"
                            })
                        }
                    }
                }
            }
            var gb64_128=document.querySelector('input[value="64-128GB"]')
            var gb128_256=document.querySelector('input[value="128-256GB"]')
            if(gb6.checked){
                if(gb6.value=="6GB"){
                    if(gb64_128.checked||gb128_256.checked){
                        if(gb64_128.value=="64-128GB"||gb128_256.value=="128-256GB"){
                            search_btn.addEventListener("click",function(event){
                            window.location.href="https://www.flipkart.com/search?q=motorola+mobiles+5g&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=motorola+mobiles+5g%7CMobiles&requestId=9f389d35-ca71-4c0c-9253-a768efaed8a9&as-searchtext=moto&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB&p%5B%5D=facets.price_range.from%3D10000&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.brand%255B%255D%3DMOTOROLA&p%5B%5D=facets.ram%255B%255D%3D6%2BGB"
                         })
                        }
                    }
                }
            }
        } 
    }
    if(price_value2.checked){
        if(price_value2.value=="Above-20K"){
            var Gb6=document.querySelector('input[value="six_gb"]') 
            var Gb8=document.querySelector('input[value="8Gb"]')
            if(Gb6.checked){
                if(Gb6.value=="six_gb"){
                    var gb_128=document.querySelector('input[value="128_GB"]')
                    var gb_256=document.querySelector('input[value="256_GB"]')
                    if(gb_128.checked||gb_256.checked){
                        if(gb_128.value=="128_GB"||gb_256.value=="256_GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href='https://www.flipkart.com/search?q=motorola+mobiles+5g&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=motorola+mobiles+5g%7CMobiles&requestId=9f389d35-ca71-4c0c-9253-a768efaed8a9&as-searchtext=moto&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3D30000&p%5B%5D=facets.brand%255B%255D%3DMOTOROLA&p%5B%5D=facets.ram%255B%255D%3D6%2BGB'
                            })
                        }
                    }
                }
            }
            if(Gb8.checked){
                if(Gb8.value=="8Gb"){
                    var gb_128=document.querySelector('input[value="128_GB"]')
                    var gb_256=document.querySelector('input[value="256_GB"]')
                    if(gb_128.checked){
                        if(gb_128.value=="128_GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href="https://www.flipkart.com/search?q=motorola+mobiles+5g&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=motorola+mobiles+5g%7CMobiles&requestId=9f389d35-ca71-4c0c-9253-a768efaed8a9&as-searchtext=moto&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3D30000&p%5B%5D=facets.brand%255B%255D%3DMOTOROLA&p%5B%5D=facets.ram%255B%255D%3D6%2BGB%2B%2BAbove&p%5B%5D=facets.ram%255B%255D%3D8%2BGB%2Band%2BAbove"
                            })
                        }
                    }
                    if(gb_256.checked){
                        if(gb_256.value=="256_GB"){
                            search_btn.addEventListener("click",function(event){
                                  window.location.href="https://www.flipkart.com/search?q=motorola+mobiles+5g&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=motorola+mobiles+5g%7CMobiles&requestId=9f389d35-ca71-4c0c-9253-a768efaed8a9&as-searchtext=moto&p%5B%5D=facets.internal_storage%255B%255D%3D256%2BGB%2B%2BAbove&p%5B%5D=facets.internal_storage%255B%255D%3D256%2BGB%2B%2526%2BAbove&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3D30000&p%5B%5D=facets.brand%255B%255D%3DMOTOROLA&p%5B%5D=facets.ram%255B%255D%3D8%2BGB%2Band%2BAbove"
                            })
                        }
                    }
                }
            } 
        }
    }
}

function poco_search(){
    var gb4=document.querySelector('input[value="4GB"]')
    var gb6=document.querySelector('input[value="6GB"]')
    var gb64=document.querySelector('input[value="64GB"]')
    var gb128=document.querySelector('input[value="128GB"]')
    var search_btn=document.querySelector(".search-btn")
    if(price_value1.checked){
        if(price_value1.value=="10K-20K"){
            if(gb4.checked){
                if(gb4.value=="4GB"){
                    if(gb64.checked){
                        if(gb64.value=="64GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href="https://www.flipkart.com/search?q=poco+5g+mobile&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=poco+5g+mobile%7CMobiles&requestId=18f3fb4a-e158-41cb-9224-97d22eb3d6cb&as-searchtext=poco&p%5B%5D=facets.price_range.from%3D10000&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.ram%255B%255D%3D4%2BGB&p%5B%5D=facets.internal_storage%255B%255D%3D64%2B-%2B127.9%2BGB"
                            })   
                        }
                    }
                    if(gb128.checked){
                        if(gb128.value=="128GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href="https://www.flipkart.com/search?q=poco+5g+mobile&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=poco+5g+mobile%7CMobiles&requestId=18f3fb4a-e158-41cb-9224-97d22eb3d6cb&as-searchtext=poco&p%5B%5D=facets.price_range.from%3D10000&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.ram%255B%255D%3D4%2BGB&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB"
                            })
                        }
                    }
                }
            }
            var gb64_128=document.querySelector('input[value="64-128GB"]')
            var gb128_256=document.querySelector('input[value="128-256GB"]')
            if(gb6.checked){
                if(gb6.value=="6GB"){
                    if(gb64_128.checked||gb128_256.checked){
                        if(gb64_128.value=="64-128GB"||gb128_256.value=="128-256GB"){
                            search_btn.addEventListener("click",function(event){
                            window.location.href="https://www.flipkart.com/search?q=poco+5g+mobile&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=poco+5g+mobile%7CMobiles&requestId=18f3fb4a-e158-41cb-9224-97d22eb3d6cb&as-searchtext=poco&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB&p%5B%5D=facets.price_range.from%3D10000&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.ram%255B%255D%3D6%2BGB"
                         })
                        }
                    }
                }
            }
        } 
    }
    if(price_value2.checked){
        if(price_value2.value=="Above-20K"){
            var Gb6=document.querySelector('input[value="six_gb"]') 
            var Gb8=document.querySelector('input[value="8Gb"]')
            if(Gb6.checked){
                if(Gb6.value=="six_gb"){
                    var gb_128=document.querySelector('input[value="128_GB"]')
                    var gb_256=document.querySelector('input[value="256_GB"]')
                    if(gb_128.checked||gb_256.checked){
                        if(gb_128.value=="128_GB"||gb_256.value=="256_GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href='https://www.flipkart.com/search?q=poco+5g+mobile&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=poco+5g+mobile%7CMobiles&requestId=18f3fb4a-e158-41cb-9224-97d22eb3d6cb&as-searchtext=poco&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.ram%255B%255D%3D6%2BGB'
                            })
                        }
                    }
                }
            }
            if(Gb8.checked){
                if(Gb8.value=="8Gb"){
                    var gb_128=document.querySelector('input[value="128_GB"]')
                    var gb_256=document.querySelector('input[value="256_GB"]')
                    if(gb_128.checked){
                        if(gb_128.value=="128_GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href="https://www.flipkart.com/search?q=poco+5g+mobile&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=poco+5g+mobile%7CMobiles&requestId=18f3fb4a-e158-41cb-9224-97d22eb3d6cb&as-searchtext=poco&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.ram%255B%255D%3D8%2BGB%2Band%2BAbove"
                            })
                        }
                    }
                    if(gb_256.checked){
                        if(gb_256.value=="256_GB"){
                            search_btn.addEventListener("click",function(event){
                                  window.location.href="https://www.flipkart.com/search?q=poco+5g+mobile&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=poco+5g+mobile%7CMobiles&requestId=18f3fb4a-e158-41cb-9224-97d22eb3d6cb&as-searchtext=poco&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.ram%255B%255D%3D8%2BGB%2Band%2BAbove&p%5B%5D=facets.internal_storage%255B%255D%3D256%2BGB%2B%2526%2BAbove"
                            })
                        }
                    }
                }
            } 
        }
    }
}

function realme_search(){
    var gb4=document.querySelector('input[value="4GB"]')
    var gb6=document.querySelector('input[value="6GB"]')
    var gb64=document.querySelector('input[value="64GB"]')
    var gb128=document.querySelector('input[value="128GB"]')
    var search_btn=document.querySelector(".search-btn")
    if(price_value1.checked){
        if(price_value1.value=="10K-20K"){
            if(gb4.checked){
                if(gb4.value=="4GB"){
                    if(gb64.checked){
                        if(gb64.value=="64GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href="https://www.flipkart.com/search?q=realme+mobile&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_2_3_na_na_ps&otracker1=AS_Query_OrganicAutoSuggest_2_3_na_na_ps&as-pos=2&as-type=RECENT&suggestionId=realme+mobile&requestId=4b811d07-8d32-4dc1-a76f-bc466ed14d57&as-searchtext=rea&p%5B%5D=facets.price_range.from%3D10000&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.ram%255B%255D%3D4%2BGB&p%5B%5D=facets.internal_storage%255B%255D%3D64%2B-%2B127.9%2BGB"
                            })   
                        }
                    }
                    if(gb128.checked){
                        if(gb128.value=="128GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href="https://www.flipkart.com/search?q=realme+mobile&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_2_3_na_na_ps&otracker1=AS_Query_OrganicAutoSuggest_2_3_na_na_ps&as-pos=2&as-type=RECENT&suggestionId=realme+mobile&requestId=4b811d07-8d32-4dc1-a76f-bc466ed14d57&as-searchtext=rea&p%5B%5D=facets.price_range.from%3D10000&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.ram%255B%255D%3D4%2BGB&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB"
                            })
                        }
                    }
                }
            }
            var gb64_128=document.querySelector('input[value="64-128GB"]')
            var gb128_256=document.querySelector('input[value="128-256GB"]')
            if(gb6.checked){
                if(gb6.value=="6GB"){
                    if(gb64_128.checked||gb128_256.checked){
                        if(gb64_128.value=="64-128GB"||gb128_256.value=="128-256GB"){
                            search_btn.addEventListener("click",function(event){
                            window.location.href="https://www.flipkart.com/search?q=realme+mobile&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_2_3_na_na_ps&otracker1=AS_Query_OrganicAutoSuggest_2_3_na_na_ps&as-pos=2&as-type=RECENT&suggestionId=realme+mobile&requestId=4b811d07-8d32-4dc1-a76f-bc466ed14d57&as-searchtext=rea&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB&p%5B%5D=facets.price_range.from%3D10000&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.ram%255B%255D%3D6%2BGB"
                         })
                        }
                    }
                }
            }
        } 
    }
    if(price_value2.checked){
        if(price_value2.value=="Above-20K"){
            var Gb6=document.querySelector('input[value="six_gb"]') 
            var Gb8=document.querySelector('input[value="8Gb"]')
            if(Gb6.checked){
                if(Gb6.value=="six_gb"){
                    var gb_128=document.querySelector('input[value="128_GB"]')
                    var gb_256=document.querySelector('input[value="256_GB"]')
                    if(gb_128.checked||gb_256.checked){
                        if(gb_128.value=="128_GB"||gb_256.value=="256_GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href='https://www.flipkart.com/search?q=realme+mobile&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_2_3_na_na_ps&otracker1=AS_Query_OrganicAutoSuggest_2_3_na_na_ps&as-pos=2&as-type=RECENT&suggestionId=realme+mobile&requestId=4b811d07-8d32-4dc1-a76f-bc466ed14d57&as-searchtext=rea&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3D30000&p%5B%5D=facets.ram%255B%255D%3D6%2BGB'
                            })
                        }
                    }
                }
            }
            if(Gb8.checked){
                if(Gb8.value=="8Gb"){
                    var gb_128=document.querySelector('input[value="128_GB"]')
                    var gb_256=document.querySelector('input[value="256_GB"]')
                    if(gb_128.checked){
                        if(gb_128.value=="128_GB"){
                            search_btn.addEventListener("click",function(event){
                                window.location.href="https://www.flipkart.com/search?q=realme+mobile&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_2_3_na_na_ps&otracker1=AS_Query_OrganicAutoSuggest_2_3_na_na_ps&as-pos=2&as-type=RECENT&suggestionId=realme+mobile&requestId=4b811d07-8d32-4dc1-a76f-bc466ed14d57&as-searchtext=rea&p%5B%5D=facets.internal_storage%255B%255D%3D128%2B-%2B255.9%2BGB&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3D30000&p%5B%5D=facets.ram%255B%255D%3D8%2BGB%2Band%2BAbove"
                            })
                        }
                    }
                    if(gb_256.checked){
                        if(gb_256.value=="256_GB"){
                            search_btn.addEventListener("click",function(event){
                                  window.location.href="https://www.flipkart.com/search?q=realme+mobile&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_2_3_na_na_ps&otracker1=AS_Query_OrganicAutoSuggest_2_3_na_na_ps&as-pos=2&as-type=RECENT&suggestionId=realme+mobile&requestId=4b811d07-8d32-4dc1-a76f-bc466ed14d57&as-searchtext=rea&p%5B%5D=facets.price_range.from%3D20000&p%5B%5D=facets.price_range.to%3D30000&p%5B%5D=facets.ram%255B%255D%3D8%2BGB%2Band%2BAbove&p%5B%5D=facets.internal_storage%255B%255D%3D256%2BGB%2B%2526%2BAbove"
                            })
                        }
                    }
                }
            } 
        }
    }
}