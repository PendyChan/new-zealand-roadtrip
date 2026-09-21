const days = [
  {id:'day-1',tab:'1/30',date:'01.30 Fri',title:'抵達 Queenstown',route:'機場 → 飯店',drive:'約 20 分',stay:'Queenstown 飯店',cost:'NZ$140–220／人',items:[
    ['18:45','抵達 Queenstown Airport','入境、領行李後搭機場接駁或計程車前往飯店。今晚不取露營車，避免疲勞駕駛。','transport','45–90 分','https://www.queenstownairport.co.nz/transport/','機場交通'],
    ['20:30','晚餐｜Queenstown 市區','抵達較晚，選步行可達且不用排隊太久的餐廳；Fergbaker 可作快速備案。','food','60 分','https://www.google.com/maps/search/restaurants+open+late+Queenstown','附近餐廳'],
    ['21:45','分工與行李整理','確認主要與替補駕駛、導航方式；五人行李改用軟袋並分配車內收納位置。','prep','30 分','','']
  ],extras:{meal:'早餐：飛機／轉機地；午餐：依航班；晚餐：Fergbaker 或市區餐廳（出發前確認）。',rain:'本日皆為室內與移動，不受天候影響。',note:'住宿須有延遲入住方式；租車公司接送範圍與隔日營業時間出發前確認。'}},
  {id:'day-2',tab:'1/31',date:'01.31 Sat',title:'取車，前往 Te Anau',route:'Queenstown → Te Anau',drive:'171 km · 約 2 小時 15 分',stay:'Te Anau 有供電營位',cost:'NZ$130–210／人',items:[
    ['08:00','早餐｜Bespoke Kitchen／飯店','吃飽再取車；大型行李留在飯店至接送時間。','food','60 分','https://www.google.com/maps/search/Bespoke+Kitchen+Queenstown','地圖'],
    ['09:30','Frankton 取 6-berth 露營車','五人共用一台；逐一試坐安全帶、確認三組床鋪尺寸、承重及全部行李能收納，再完成車況錄影與保險。','booking transport','2–3 小時','https://www.google.com/maps/search/6+berth+campervan+rental+Queenstown+Airport','租車點'],
    ['12:30','採購｜Frankton 超市','採買兩天早餐、行車零食、飲水與晚餐。五人共用冰箱空間有限，避免一次買滿六天。','food','60–75 分','https://www.google.com/maps/search/supermarket+Frankton+Queenstown','超市'],
    ['14:00','Queenstown → Te Anau','走 SH6、SH97、SH94；Kingston 或 Five Rivers 短休，不繞回 Queenstown。','transport nature','2 小時 15 分＋休息','https://www.google.com/maps/dir/Queenstown/Te+Anau','導航'],
    ['17:00','入住 Te Anau 營地','接電、補水並確認隔日 Milford 接駁上車點。','camp booking','45 分','https://www.google.com/maps/search/Te+Anau+Lakeview+Holiday+Park','營地'],
    ['18:30','湖畔晚餐與散步','營地料理；或 Redcliff Restaurant。日落後氣溫下降，備保暖層。','food nature','1.5–2 小時','https://www.google.com/maps/search/Redcliff+Restaurant+Te+Anau','餐廳']
  ],extras:{meal:'早餐：Bespoke Kitchen；午餐：超市熟食／Kingston；咖啡：Frankton；晚餐：營地料理或 Redcliff。',rain:'雨大時取消湖畔散步，改參觀 Te Anau Glowworm Caves；船班需預約。',note:'租車門市時間、機場接送與車款設備出發前確認。'}},
  {id:'day-3',tab:'2/1',date:'02.01 Sun',title:'Milford Sound 峽灣日',route:'Te Anau ↔ Milford',drive:'改搭巴士 · 一日約 8–10 小時',stay:'Te Anau 同一營地',cost:'NZ$270–350／人',items:[
    ['06:30','簡單早餐與接駁報到','依業者指定時間提早 15 分鐘抵達；RealNZ 常用集合點為 85 Lakefront Drive，其他業者須依確認信為準。攜帶防水外套、飲水與暈船藥。','food booking','30–45 分','https://www.realnz.com/en/experiences/day-cruises/milford-sound-day-trip-from-te-anau/','RealNZ 預訂'],
    ['07:15','Te Anau → Milford Scenic Road（巴士）','由專業司機行駛，沿途依天候停 Eglinton Valley、Mirror Lakes 等；比較 RealNZ 與 Southern Discoveries 的車型、停靠與取消條款。','nature transport booking','約 3 小時含停靠','https://www.google.com/maps/dir/Te+Anau/Milford+Sound','路線'],
    ['10:45','Milford Sound 遊船','近看峭壁、瀑布與海豹；甲板風大，手機與相機注意防水。確認船班、集合時間、餐盒與取消政策。','nature booking','約 2 小時','https://www.milford-sound.co.nz/','活動資訊','assets/milford.jpg'],
    ['13:00','午餐與回程','多數套裝為自備午餐或可加購餐盒；回程在 Te Anau 前休息，預留道路延誤緩衝。','food transport','3–4 小時','',''],
    ['17:30','營地休息、洗澡與排污','回到 Te Anau 後先完成排污、補水與洗澡；晚餐在營地簡單煮，避免再開車。','camp food','30–45 分','',''],
    ['18:30','Te Ana-au 湖岸與 Māori 地名故事','安排短程湖岸散步，了解 Te Ana-au（洞穴之地）與 Ngāi Tahu 地名；若體力不足直接休息。','nature','45–60 分','https://www.google.com/maps/search/Lake+Te+Anau+waterfront','地圖']
  ],extras:{meal:'早餐：車上簡餐；午餐：自備或套裝餐盒；咖啡：Te Anau 出發前；晚餐：營地料理。',rain:'Milford 雨天通常仍值得去；若道路封閉或船班取消，改 Te Ana-au Glowworm Caves（另訂時段）＋湖岸步道。',note:'巴士集合點、遊船、餐食、取消條款與 2027 價格必須預約並出發前確認；可比較 RealNZ 與 Southern Discoveries。'}},
  {id:'day-4',tab:'2/2',date:'02.02 Mon',title:'山湖公路到 Wānaka',route:'Te Anau → Wānaka',drive:'227 km · 約 3.5 小時',stay:'Wānaka 有供電營位',cost:'NZ$95–150／人',items:[
    ['08:00','早餐｜Sandfly Cafe／營地','補滿油、水與咖啡；今天為全程最長的移動日。','food','60 分','https://www.google.com/maps/search/Sandfly+Cafe+Te+Anau','地圖'],
    ['09:15','Te Anau → Kingston','沿原路返回，Kingston 湖畔休息 20 分鐘。','transport nature','約 1 小時 45 分','https://www.google.com/maps/dir/Te+Anau/Kingston+New+Zealand','導航'],
    ['11:30','Kingston → Cromwell','繞過 Queenstown 外圍，經 Kawarau Gorge；在 Cromwell 吃午餐與補給。','transport food','約 1 小時 45 分','',''],
    ['14:30','Cromwell → Wānaka','走 SH6 抵達 Wānaka，不走較陡且彎多的 Crown Range。','transport','約 1 小時','https://www.google.com/maps/dir/Cromwell/Wanaka','導航'],
    ['16:00','營地入住＋湖岸','安頓後步行到湖邊與 That Wānaka Tree；不追趕夕陽。','camp nature','1.5 小時','https://www.google.com/maps/search/Wanaka+TOP+10+Holiday+Park','營地'],
    ['18:30','晚餐｜Big Fig／營地','Big Fig 適合團體分享；尖峰可能排隊，營地料理作備案。','food','1–1.5 小時','https://www.google.com/maps/search/Big+Fig+Wanaka','地圖']
  ],extras:{meal:'早餐：Sandfly Cafe；午餐：Cromwell；咖啡：Cromwell；晚餐：Big Fig 或營地。',rain:'抵達後改 Puzzling World 或 Cinema Paradiso；營業時間出發前確認。',note:'露營車優先走 Cromwell／SH6；Crown Range 是否允許與天候均出發前確認。'}},
  {id:'day-5',tab:'2/3',date:'02.03 Tue',title:'Wānaka 慢旅行',route:'Wānaka 周邊',drive:'約 40–70 km',stay:'Wānaka 同一營地',cost:'NZ$75–140／人',items:[
    ['07:30','早餐｜Scroggin Coffee & Eatery','早起避開人潮；外帶步道午餐與咖啡。','food','60 分','https://www.google.com/maps/search/Scroggin+Wanaka','地圖'],
    ['09:00','Diamond Lake＋Rocky Mountain','依體力走 Lake Circuit 或上觀景點；完整往返約 3 小時。','nature','2–3.5 小時','https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/places/wanaka-area/things-to-do/diamond-lake-conservation-area/','DOC'],
    ['13:00','湖畔午餐與休息','返回 Wānaka，選 Federal Diner 或湖邊野餐。','food','1.5 小時','https://www.google.com/maps/search/Federal+Diner+Wanaka','地圖'],
    ['15:00','彈性午後','天氣好租 SUP／單車；想休息則逛鎮區與湖岸。','nature','2–3 小時','https://www.wanaka.co.nz/','旅遊資訊','assets/wanaka.jpg'],
    ['18:30','晚餐｜Kika／營地','Kika 適合分享但需預約；省預算則營地料理。','food booking','1.5–2 小時','https://www.google.com/maps/search/Kika+Wanaka','地圖'],
    ['21:00','觀星與早休','離開強光區，但勿把車停在私人地或禁止過夜處。','nature','30–60 分','','']
  ],extras:{meal:'早餐：Scroggin；午餐：Federal Diner／野餐；咖啡：Ritual Espresso；晚餐：Kika。',rain:'Puzzling World＋Cinema Paradiso＋咖啡店巡禮；若短暫陣雨，改 Waterfall Creek 平坦湖岸步道。',note:'步道、租借、水上活動與餐廳皆依天候／營業時間出發前確認。'}},
  {id:'day-6',tab:'2/4',date:'02.04 Wed',title:'穿越 Lindis Pass 到 Pukaki',route:'Wānaka → Lake Pukaki → Glentanner',drive:'約 200 km · 2.5–3 小時',stay:'Glentanner 有供電營位',cost:'NZ$90–150／人',items:[
    ['08:00','早餐與離營','營地早餐；在 Wānaka 補油，確認 SH8 與 SH80 路況。','food camp','60 分','',''],
    ['09:00','Wānaka → Lindis Pass','沿 SH8A／SH8 前進；Lindis Pass 觀景區短停，不在彎道臨停。','transport nature','約 1 小時 45 分','https://www.google.com/maps/dir/Wanaka/Lindis+Pass','導航'],
    ['11:15','Twizel 午餐與大採購','Poppies Cafe 或鎮區用餐；買足兩晚食材，山區選擇有限。','food','1.5 小時','https://www.google.com/maps/search/cafe+Twizel','附近餐廳'],
    ['13:15','Lake Pukaki 南岸觀景','在合法觀景停車區停留；欣賞冰河粉形成的藍色湖水。','nature','30–45 分','https://www.google.com/maps/search/Lake+Pukaki+Viewpoint','地圖','assets/pukaki.jpg'],
    ['14:15','SH80 沿湖公路','一路向 Aoraki 前進；Peter’s Lookout 是主要停靠點，勿跨越道路拍照。','nature transport','1–1.5 小時含停靠','https://www.google.com/maps/search/Peters+Lookout+Lake+Pukaki','地圖'],
    ['16:00','入住 Glentanner','接電、固定戶外物品；晚間看山色與星空。','camp booking nature','餘下傍晚','https://www.google.com/maps/search/Glentanner+Park+Centre','營地']
  ],extras:{meal:'早餐：營地；午餐：Twizel；咖啡：Twizel；晚餐：Glentanner 營地料理。',rain:'低雲遮山時先在 Twizel 放慢節奏；Lake Pukaki 顏色仍可見。抵達後改 Sir Edmund Hillary Alpine Centre。',note:'Glentanner 餐飲與商店選擇有限；先在 Twizel 完成補給。'}},
  {id:'day-7',tab:'2/5',date:'02.05 Thu',title:'Aoraki 健行，夜宿 Tekapo',route:'Glentanner → Aoraki → Tekapo',drive:'約 145 km · 2 小時',stay:'Lake Tekapo 有供電營位',cost:'NZ$75–145／人',items:[
    ['06:30','查看山區預報與步道警示','以 DOC、MetService 與現場公告決定路線，不只看手機一般天氣 App。','rain prep','15 分','https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/aoraki-mount-cook-national-park/','DOC'],
    ['07:00','營地早餐','準備飲水、午餐、防曬、防風防水層。','food','45 分','',''],
    ['08:15','Hooker Valley／替代步道','若全線開放且條件合適，安排 3–4 小時；否則走 Kea Point＋Tasman Glacier View。','nature rain','3–4 小時','https://www.doc.govt.nz/hooker-valley-track','步道狀況'],
    ['12:30','Aoraki Village 午餐','Hermitage 餐飲或自備野餐；尖峰時段選擇有限。','food','1–1.5 小時','https://www.google.com/maps/search/restaurants+Aoraki+Mount+Cook+Village','附近餐飲'],
    ['14:15','Aoraki → Lake Tekapo','沿 SH80 返回 Lake Pukaki，再接 SH8 前往 Tekapo；途中只安排短停。','transport nature','約 1 小時 20 分','https://www.google.com/maps/dir/Aoraki+Mount+Cook/Lake+Tekapo','導航'],
    ['16:00','入住 Tekapo 營地','接電後走 Lake Tekapo 湖岸與善牧羊人教堂外圍；尊重教堂活動與拍攝規則。','camp nature booking','1.5–2 小時','https://www.google.com/maps/search/Lakes+Edge+Holiday+Park+Lake+Tekapo','營地'],
    ['19:00','營地晚餐與暗空觀星','整理隔日還車物品；晴朗時直接在合法步行範圍觀星，不摸黑臨停公路。','food nature','2–3 小時','https://www.darkskyproject.co.nz/','付費團選項']
  ],extras:{meal:'早餐：Glentanner；午餐：自備或 Hermitage；咖啡：Aoraki Village；晚餐：Tekapo 營地。',rain:'Sir Edmund Hillary Alpine Centre＋Aoraki Visitor Centre；下午照常前往 Tekapo，晚間改 Tekapo Springs。',note:'Hooker Valley 可能局部封閉或改道；Tekapo 營位與夜間活動出發前確認。'}},
  {id:'day-8',tab:'2/6',date:'02.06 Fri',title:'Tekapo 到 Christchurch 還車',route:'Lake Tekapo → Christchurch',drive:'約 227 km · 3 小時',stay:'Christchurch 飯店',cost:'NZ$155–250／人',items:[
    ['07:00','早餐、排污與離營','完成灰水／黑水處理及車內清潔，五人行李先裝妥。','camp prep','1 小時','',''],
    ['08:00','Lake Tekapo 湖畔晨光','善牧羊人教堂、湖岸步道短停；不安排 Mt John，以免延誤還車。','nature','45–60 分','https://www.google.com/maps/search/Church+of+the+Good+Shepherd+Lake+Tekapo','地圖'],
    ['09:15','Tekapo → Geraldine','走 SH8，於 Fairlie 或 Geraldine 休息與咖啡。','transport food','約 1 小時 40 分','https://www.google.com/maps/dir/Lake+Tekapo/Geraldine+New+Zealand','導航'],
    ['11:15','Geraldine 早午餐','短暫補給後續行，不加入額外景點。','food','45–60 分','https://www.google.com/maps/search/cafe+Geraldine+New+Zealand','附近餐廳'],
    ['12:15','Geraldine → Christchurch Airport','依租車規定先補滿燃油／LPG，預留市區交通時間。','transport','約 1 小時 45 分','https://www.google.com/maps/dir/Geraldine+New+Zealand/Christchurch+Airport','導航'],
    ['14:15','Christchurch 還露營車','完成異地還車驗車、卸下五人行李；保留交車照片與單據。','booking transport','1–2 小時','https://www.google.com/maps/search/campervan+rental+Christchurch+Airport','還車點'],
    ['17:00','飯店入住與市區晚餐','優先選 Christchurch Airport、Mia 或 CBD 近機場交通的飯店；確認 5 人房型、停車、寄放行李與隔日機場接送，再前往 Riverside Market／Avon River 周邊。','food booking','2–3 小時','https://www.google.com/maps/search/Christchurch+Airport+hotel','住宿與晚餐']
  ],extras:{meal:'早餐：營地；咖啡／午餐：Geraldine；晚餐：Riverside Market 或飯店附近。',rain:'湖邊取消，直接前往 Christchurch；下午改 International Antarctic Centre 或 Canterbury Museum 臨時館。',note:'Christchurch 還車門市截止時間、清潔規範、接駁與飯店入住出發前確認。'}},
  {id:'day-9',tab:'2/7',date:'02.07 Sat',title:'飛往 Brisbane',route:'Christchurch → Brisbane',drive:'國際直飛',stay:'Brisbane 飯店',cost:'NZ$220–500／人＋機票',items:[
    ['依航班','提早 3 小時到 Christchurch Airport','國際航班、托運行李與澳洲入境資料提前完成。','transport booking','3 小時','https://www.christchurchairport.co.nz/','機場'],
    ['依航班','Christchurch → Brisbane','建議安排 2/7 下午前抵達 Brisbane 的直飛航班；航班尚未預訂，請確認行李額度、出發航廈與取消／改票條款。','transport booking','約 3 小時 50 分','https://www.airnewzealand.co.nz/flights/en-nz/flights-from-christchurch-to-brisbane','航班資訊'],
    ['抵達後','入住 Brisbane 機場交通便利區域','只住一晚，不排遠程活動；使用 Airtrain 或計程車。','transport','1–2 小時','https://www.bne.com.au/passenger/to-and-from','機場交通'],
    ['晚上','South Bank 河岸晚餐','依抵達時間散步；若航班延誤，直接飯店休息。','food','1.5–2 小時','https://www.google.com/maps/search/restaurants+South+Bank+Brisbane','附近餐廳']
  ],extras:{meal:'早餐：Christchurch；午餐：依航班；晚餐：South Bank／飯店附近。',rain:'Queensland Museum／Gallery of Modern Art；營業時間出發前確認。',note:'2/7 Christchurch → Brisbane 航班尚未預訂；確認班次、行李額度、機場報到截止時間與 2/8 22:35 國際航班的轉機緩衝。'}},
  {id:'day-10',tab:'2/8',date:'02.08 Sun',title:'Brisbane 緩衝日與返程',route:'Brisbane 市區 → BNE',drive:'約 30–45 分',stay:'22:35 離境',cost:'A$90–180／人',items:[
    ['08:30','早餐｜Brisbane CBD／South Bank','退房後寄放行李；不安排離市區太遠的景點。','food','1 小時','',''],
    ['10:00','South Bank＋City Botanic Gardens','步行為主，依高溫調整節奏。','nature','2–3 小時','https://www.google.com/maps/search/South+Bank+Parklands+Brisbane','地圖'],
    ['13:00','午餐與室內備案','高溫或下雨時改 Queensland Museum／GOMA。','food rain','2–3 小時','https://www.qagoma.qld.gov.au/','GOMA'],
    ['17:30','取行李、前往機場','22:35 起飛，建議最晚 19:00–19:30 抵達國際航廈。','transport booking','30–45 分','https://www.bne.com.au/passenger/to-and-from','機場交通'],
    ['22:35','離開 Brisbane','確認行李直掛、退稅與登機門資訊。','transport','—','','']
  ],extras:{meal:'早餐：South Bank；午餐：市區；晚餐：機場。',rain:'GOMA、Queensland Museum、Queensland Art Gallery。',note:'寄放行李、博物館營業時間、Airtrain 班次與航空公司報到截止時間出發前確認。'}}
];

const tabs=document.getElementById('dayTabs'), itinerary=document.getElementById('itinerary'), search=document.getElementById('searchInput'), noResults=document.getElementById('noResults');
let selectedDay='all', selectedFilter='all';
const categoryLabel={nature:'自然',food:'餐飲',camp:'露營',booking:'需預約',rain:'雨備',transport:'交通',prep:'準備'};

function renderDays(){
  tabs.innerHTML=`<button class="day-tab active" role="tab" data-day="all"><strong>全部</strong><span>總行程</span></button>`+days.map((d,i)=>`<button class="day-tab" role="tab" data-day="${d.id}"><strong>D${i+1} · ${d.tab}</strong><span>${d.title}</span></button>`).join('');
  itinerary.innerHTML=days.map((d,i)=>`<article class="day-panel active searchable" id="${d.id}" data-search="${d.date} ${d.title} ${d.route} ${d.items.map(x=>x.slice(1,3).join(' ')).join(' ')}">
    <div class="day-hero"><aside class="day-summary"><span class="day-number">${String(i+1).padStart(2,'0')}</span><p class="eyebrow">${d.date}</p><h3>${d.title}</h3><dl><dt>路線</dt><dd>${d.route}</dd><dt>移動</dt><dd>${d.drive}</dd><dt>住宿</dt><dd>${d.stay}</dd><dt>預估</dt><dd>${d.cost}</dd></dl></aside>
    <div class="timeline">${d.items.map((item,itemIndex)=>{const imageId=`${d.id}-image-${itemIndex}`;return `<div class="timeline-item searchable" data-category="${item[3]}" data-search="${item.slice(0,5).join(' ')}"><div class="timeline-time">${item[0]}</div><div class="timeline-content"><h4>${item[1]}</h4><p>${item[2]}</p><div class="tags">${item[3].split(' ').map(c=>`<span class="tag ${c}">${categoryLabel[c]||c}</span>`).join('')}<span class="tag">${item[4]}</span></div>${item[5]?`<div class="item-links"><a href="${item[5]}" target="_blank" rel="noopener">${item[6]} ↗</a>${item[7]?`<button class="image-toggle" type="button" aria-expanded="false" aria-controls="${imageId}">查看景點圖片</button>`:''}</div>${item[7]?`<figure class="item-image" id="${imageId}" hidden><img src="${item[7]}" alt="${item[1]} 景點圖片"><figcaption>${item[1]}</figcaption></figure>`:''}`:''}</div></div>`}).join('')}</div></div>
    <div class="day-extras"><div class="mini-card"><h4>🍴 餐飲節奏</h4><p>${d.extras.meal}</p></div><div class="mini-card rain searchable" data-category="rain" data-search="雨天 備案 ${d.extras.rain}"><h4>☂ 雨天備案</h4><p>${d.extras.rain}</p></div><div class="mini-card warning searchable" data-category="booking" data-search="預約 注意 ${d.extras.note}"><h4>⌁ 出發前確認</h4><p>${d.extras.note}</p></div></div>
  </article>`).join('');
}

function applyFilters(){
  const q=search.value.trim().toLowerCase();let visibleCount=0;
  document.querySelectorAll('.day-panel').forEach(panel=>{
    const dayOK=selectedDay==='all'||panel.id===selectedDay;let panelHits=0;
    panel.querySelectorAll('.timeline-item,.mini-card').forEach(item=>{
      const text=(item.dataset.search||item.textContent).toLowerCase();const cats=item.dataset.category||'';
      const okText=!q||text.includes(q);const okCat=selectedFilter==='all'||cats.split(' ').includes(selectedFilter);const show=dayOK&&okText&&okCat;
      item.style.display=show?'grid':'none';if(show)panelHits++;
    });
    const panelText=(panel.dataset.search||'').toLowerCase();
    const showPanel=dayOK&&(panelHits>0||(selectedFilter==='all'&&(!q||panelText.includes(q))));panel.classList.toggle('active',showPanel);if(showPanel)visibleCount++;
  });
  document.querySelectorAll('#campGrid .searchable').forEach(card=>{const t=(card.dataset.search||card.textContent).toLowerCase();const cats=card.dataset.category||'';const show=(!q||t.includes(q))&&(selectedFilter==='all'||cats.includes(selectedFilter));card.style.display=show?'flex':'none';});
  noResults.hidden=visibleCount>0;
}

renderDays();
itinerary.addEventListener('click',e=>{const button=e.target.closest('.image-toggle');if(!button)return;const image=document.getElementById(button.getAttribute('aria-controls'));const open=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!open));button.textContent=open?'查看景點圖片':'收合景點圖片';image.hidden=open;});
tabs.addEventListener('click',e=>{const b=e.target.closest('[data-day]');if(!b)return;selectedDay=b.dataset.day;tabs.querySelectorAll('.day-tab').forEach(x=>x.classList.toggle('active',x===b));applyFilters();});
document.querySelector('.filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;selectedFilter=b.dataset.filter;document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===b));applyFilters();});
search.addEventListener('input',()=>{if(search.value.trim()){selectedDay='all';tabs.querySelectorAll('.day-tab').forEach(x=>x.classList.toggle('active',x.dataset.day==='all'));}applyFilters();});

document.querySelector('.nav-toggle').addEventListener('click',e=>{const nav=document.getElementById('mainNav');const open=nav.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',open)});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.getElementById('mainNav').classList.remove('open')));
document.getElementById('printBtn').addEventListener('click',()=>window.print());

document.querySelectorAll('.prep-grid input').forEach((box,i)=>{const key=`nz-trip-check-${i}`;box.checked=localStorage.getItem(key)==='1';box.addEventListener('change',()=>localStorage.setItem(key,box.checked?'1':'0'));});
