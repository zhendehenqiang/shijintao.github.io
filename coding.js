var qiehuan=document.querySelectorAll('.qiehuan');
var lunbo=document.querySelector('.lunbo');
var img=lunbo.querySelector('img');
var p=lunbo.querySelectorAll('p');
var a=lunbo.querySelectorAll('a');
var qh=lunbo.querySelector('.qh');
var t1,t0;
qiehuan[0].onclick=qiehuan0;
function qiehuan0(){
    if (t0)
        clearTimeout(t0);
    if (t1)
        clearTimeout(t1);
    qiehuan[0].style.borderColor='white';
    qiehuan[1].style.borderColor='rgb(160, 160, 167)';
    lunbo.style.backgroundColor='blueviolet';
    img.src='https://assets.codehub.cn/static/media/upgrade.97c571b6.png';
    img.width='182';
    img.height='30';
    p[0].style.display='block';
    p[1].style.display='block';
    p[2].style.display='none';
    a[0].style.display='block';
    a[1].style.display='none';
    qh.style.marginTop='0';
    t0=setTimeout(qiehuan1,3000);
}
qiehuan[1].onclick=qiehuan1;
function qiehuan1(){
    if (t0)
        clearTimeout(t0);
    if (t1)
        clearTimeout(t1);
    qiehuan[1].style.borderColor='white';
    qiehuan[0].style.borderColor='rgb(160, 160, 167)';
    lunbo.style.backgroundColor='rgb(0, 102, 255)';
    img.src='https://dn-coding-net-production-pp.codehub.cn/31eab668-226f-41bb-b55c-9282601f4e7b.png';
    img.width='130';
    img.height='28';
    p[0].style.display='none';
    p[1].style.display='none';
    p[2].style.display='block';
    a[0].style.display='none';
    a[1].style.display='block';
    qh.style.marginTop='162px';
    t1=setTimeout(qiehuan0,3000);
}
window.onload=qiehuan0;
var qh2=document.querySelectorAll('.qh2');
var qh2img=document.querySelector('.qh2img');
qh2[0].onclick=function(){
    qh2[0].style.backgroundColor='white';
    qh2[0].style.borderColor='white';
    qh2[1].style.backgroundColor='rgb(146, 149, 156)';
    qh2[1].style.borderColor='rgb(146, 149, 156)';
    qh2[2].style.backgroundColor='rgb(146, 149, 156)';
    qh2[2].style.borderColor='rgb(146, 149, 156)';
    qh2img.style.background='url(https://dn-coding-net-production-pp.codehub.cn/dbb26a62-68d3-4ed5-b0ef-d883b8aba999.png)';
    qh2img.style.backgroundSize='100% 100%';
}
qh2[1].onclick=function(){
    qh2[1].style.backgroundColor='white';
    qh2[1].style.borderColor='white';
    qh2[0].style.backgroundColor='rgb(146, 149, 156)';
    qh2[0].style.borderColor='rgb(146, 149, 156)';
    qh2[2].style.backgroundColor='rgb(146, 149, 156)';
    qh2[2].style.borderColor='rgb(146, 149, 156)';
    qh2img.style.background='url(https://dn-coding-net-production-pp.codehub.cn/a0fc10ff-b0f6-482f-b2c3-548fbbe74faf.png)';
    qh2img.style.backgroundSize='100% 100%';
}
qh2[2].onclick=function(){
    qh2[2].style.backgroundColor='white';
    qh2[2].style.borderColor='white';
    qh2[0].style.backgroundColor='rgb(146, 149, 156)';
    qh2[0].style.borderColor='rgb(146, 149, 156)';
    qh2[1].style.backgroundColor='rgb(146, 149, 156)';
    qh2[1].style.borderColor='rgb(146, 149, 156)';
    qh2img.style.background='url(https://dn-coding-net-production-pp.codehub.cn/cf2ab069-8272-4f95-a83f-96e649e0c379.png)';
    qh2img.style.backgroundSize='100% 100%';
}
window.onscroll=function(){
    var topscroll=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var navall=document.querySelector('.navall');
    var a=navall.querySelectorAll('a');
    if(topscroll>674){
        navall.style.position='fixed';
        navall.style.top='0';
        navall.style.zIndex='9999';
    }
    else{
        navall.style.position='static';
    }
    if(topscroll>=1274 && topscroll<1874){
        a[0].style.color='blue';
        a[1].style.color='black';
        a[2].style.color='black';
        a[3].style.color='black';
    }
    else if(topscroll>=1874 && topscroll<2474){
        a[1].style.color='blue';
        a[0].style.color='black';
        a[2].style.color='black';
        a[3].style.color='black';
    }
    else if(topscroll>=2474 && topscroll<3074){
        a[2].style.color='blue';
        a[3].style.color='blue';
        a[0].style.color='black';
        a[1].style.color='black';
    }
    else{
        a[0].style.color='black';
        a[1].style.color='black';
        a[2].style.color='black';
        a[3].style.color='black';
    }
}
