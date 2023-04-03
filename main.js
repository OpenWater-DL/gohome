import './index.scss'
import'./src/imageLoader'


function createSection(title,url,p){

    let el = document.createElement('a')
    console.log("🚀 ~ file: main.js:8 ~ createSection ~ el:", el)
    el.classList.add('section')
    el.href = url;
    el.target = "_blank";

    let elTitle = document.createElement('div')
    console.log("🚀 ~ file: main.js:14 ~ createSection ~ elTitle:", elTitle)
    elTitle.classList.add('title')
    elTitle.innerText=title

    let discribe = document.createElement('p')
    discribe.classList.add('discribe')
    discribe.innerText = p

    el.appendChild(elTitle)
    el.appendChild(discribe)
    document.body.appendChild(el)

    return el;
}

createSection('日本郵便　集荷依頼',"https://www.post.japanpost.jp/send/index.html",'或者使用手机')
createSection('日本郵便　海外に送る','https://www.post.japanpost.jp/int/index.html','登录就可以填写邮寄单。30kg以内')
createSection('練馬区粗大ゴミ','https://www.sodai-nerima.jp/eco/view/nerima/top.html?te-uniquekey=18745e4e452','搜索类目，然后预约上门收废品的日子')
createSection('メルカリ','https://jp.mercari.com/','小东西可以挂')
createSection('ジモティー','https://jmty.jp/','地区附近二手')
createSection('租房解约','https://9i2n86pu.my.salesforce-sites.com/CancelEmailConfirm','解约预约')
createSection('水道局　手続きガイド','https://water.selectra.jp/tokyo/kaiyaku#%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B0%B4%E9%81%93%E5%B1%80%EF%BC%9A%E6%B0%B4%E9%81%93%E3%81%AE%E3%80%90%E8%A7%A3%E7%B4%84%E3%80%91%E6%89%8B%E7%B6%9A%E3%81%8D%E3%81%AF%E3%81%84%E3%81%A4%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%99%E3%82%8C%E3%81%B0%E3%81%84%E3%81%84%EF%BC%9F','电话orAPP。水道の利用停止日（引越し日）1週間前までを目安に東京都水道局へ解約の届出 五月初申请')
createSection('SB 网络解约','https://www.softbank.jp/support/faq/view/18972','电话解约，当月任何时候')


