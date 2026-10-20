const STORAGE_KEY = 'nz-roadtrip-todo-v1';
const todos = [
  {id:'booking-paid',title:'確認 Maui／Motorhome Republic 的付款狀態與餘款',category:'租車',priority:'high',due:'2026/12/27 前',note:'訂單：IM50747164／Maui：ERD472312/1。PDF 顯示取車前 35 天需付清，請以帳戶實際金額為準。'},
  {id:'return-time',title:'詢問是否將 Christchurch 還車時間改為 14:00–15:30',category:'租車',priority:'high',due:'儘早處理',note:'原訂 2/6 16:00；分店 16:30 關門，建議預留至少 1 小時辦理還車與檢查。',link:'https://www.maui-rentals.com/nz/en/help-centre'},
  {id:'ruc',title:'確認柴油 Road User Charge（RUC）計價與付款方式',category:'租車',priority:'high',due:'取車前',note:'RUC 依實際里程於還車時結算；費率與付款方式請出發前確認。'},
  {id:'insurance',title:'核對 Platinum Pack 與 RentalCover 零自負額保障是否重複',category:'保險',priority:'high',due:'取車前',note:'確認承保範圍、排除事項、玻璃／輪胎／底盤與道路救援，以及理賠流程。'},
  {id:'licence',title:'準備所有駕駛人的台灣駕照與國際駕照（IDP）',category:'文件',priority:'high',due:'出發前',note:'取車時需出示完整有效駕照；非英文駕照須備認可英文翻譯或 IDP。'},
  {id:'queenstown-stay',title:'預訂 1/30 Queenstown 機場附近住宿',category:'住宿',priority:'high',due:'儘早處理',note:'18:45 抵達，隔天 09:30 取車；建議選有接駁、可晚到入住的飯店。'},
  {id:'te-anau-campsite',title:'預訂 Te Anau 露營地：Tasman 優先／Lakeview 備案',category:'住宿',priority:'high',due:'儘早處理',note:'建議訂 1/31–2/2 powered site；Tasman 較靠近 RealNZ 集合點，若住 Lakeview 請另安排接駁。'},
  {id:'milford-tour',title:'預訂 Te Anau → Milford coach＋cruise 一日遊',category:'活動',priority:'high',due:'儘早處理',note:'預計 2/1；行程含 Te Anau 往返巴士與 Milford Sound 遊船，集合時間與空位出發前確認。',link:'https://www.realnz.com/en/experiences/day-cruises/milford-sound-day-trip-from-te-anau/'},
  {id:'milford-transfer',title:'確認露營地到 RealNZ Te Anau 集合點（85 Lakefront Drive）的交通',category:'交通',priority:'high',due:'訂 Milford 後',note:'RealNZ 通常不提供住宿接送；從 Tasman 可步行，從 Lakeview 建議計程車或事先約接駁。'},
  {id:'wanaka-campsite',title:'預訂 Wanaka powered site（1 晚）',category:'住宿',priority:'medium',due:'儘早處理',note:'預計 2/2；確認營地可容納約 7.5 m、6 人露營車及接電規格。'},
  {id:'pukaki-campsite',title:'預訂 Pukaki／Twizel powered site（1 晚）',category:'住宿',priority:'medium',due:'儘早處理',note:'預計 2/3；確認抵達時間、淋浴、廢水傾倒與 240V 接電。'},
  {id:'christchurch-stay',title:'預訂 Christchurch 還車前後住宿（2/4–2/8）',category:'住宿',priority:'medium',due:'儘早處理',note:'2/6 16:00 還車後不再住車；建議 2/6–2/8 住機場或市區交通方便處。'},
  {id:'flights',title:'確認國際／國內航班、行李額度與護照英文姓名',category:'機票',priority:'high',due:'訂票後',note:'特別確認 2/8 22:35 Brisbane 離境，以及紐西蘭→Brisbane 的銜接航班。'},
  {id:'nzeta',title:'每位旅客申請並確認 NZeTA 與 IVL',category:'入境',priority:'high',due:'出發前數週',note:'使用官方管道申請，姓名、護照號碼與效期逐一核對。',link:'https://www.immigration.govt.nz/visas/nzeta'},
  {id:'travel-insurance',title:'購買旅遊保險：醫療、健行、取消與露營車保障',category:'保險',priority:'high',due:'訂完主要行程後',note:'確認露營車自負額、道路救援、車底／車頂、輪胎玻璃與偏遠地區醫療。'},
  {id:'site-rules',title:'確認各營地的 powered site、車長限制與入住規則',category:'露營車',priority:'medium',due:'預訂後',note:'River 6 Berth 約 7.5 m；核對接電、污水傾倒、安靜時間與取消政策。'},
  {id:'online-checkin',title:'完成 Maui 線上報到與駕駛人資料',category:'租車',priority:'medium',due:'約 2027/01/01 起',note:'依租車公司開放時間完成；下載訂單、駕駛人及接駁資訊到手機。'},
  {id:'app',title:'下載 thl Roadtrip App，觀看取車與車內設備教學',category:'租車',priority:'medium',due:'取車前',note:'熟悉 240V、瓦斯、暖氣、廢水／黑水、冰箱與車高車寬。'},
  {id:'bond',title:'準備主駕駛信用卡額度與租車押金',category:'租車',priority:'medium',due:'取車前',note:'確認卡片可海外交易、額度足夠，並與租車公司核對押金金額與釋放時間。'},
  {id:'nztd',title:'填寫 New Zealand Traveller Declaration（NZTD）',category:'入境',priority:'high',due:'入境前 24 小時內',note:'每位旅客各自完成；生效時間與航班變更規則請出發前確認。',link:'https://www.travellerdeclaration.govt.nz/'},
  {id:'biosecurity',title:'清潔登山鞋、檢查食品與戶外用品並準備申報',category:'入境',priority:'high',due:'行李打包時',note:'紐西蘭生物安全嚴格；泥土、種子、肉類、蜂蜜與未申報物品可能被攔查。',link:'https://www.mpi.govt.nz/travel-and-recreation/arriving-in-new-zealand/'},
  {id:'road-check',title:'出發前 48 小時確認天氣、山路與 Milford Road 狀況',category:'安全',priority:'high',due:'各段出發前 48 小時',note:'確認大雨、雪、結冰、封路與巴士是否正常；不要為趕路冒險。',link:'https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/milford-sound-piopiotahi/'},
  {id:'packing',title:'完成行李與露營車用品清單',category:'行李',priority:'medium',due:'出發前一週',note:'保暖防水外套、健行鞋、頭燈、快乾衣、行動電源、耳塞、盥洗用品、個人藥物。'},
  {id:'booked-vehicle',title:'露營車已完成預訂：Maui River 6 Berth',category:'已確認',priority:'done',due:'已完成',note:'訂單與取還車地點已確認。',done:true},
  {id:'route',title:'核心路線與必訪地點已確認：Wanaka／Pukaki／Milford',category:'已確認',priority:'done',due:'已完成',note:'Milford 改為 Te Anau 出發的 coach＋cruise，不自行駕駛露營車。',done:true},
  {id:'pickup-dropoff',title:'取還車日期與地點已確認',category:'已確認',priority:'done',due:'已完成',note:'1/31 Queenstown 09:30 取車；2/6 Christchurch 16:00 還車。',done:true}
];

const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
const state = {filter:'all',category:'all',query:'',done:{...Object.fromEntries(todos.map(t=>[t.id,Boolean(t.done)])),...saved}};
const $ = (s)=>document.querySelector(s);

function esc(value){return String(value).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function renderCategories(){const cats=[...new Set(todos.map(t=>t.category))];$('#categoryFilter').insertAdjacentHTML('beforeend',cats.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join(''));}
function visible(t){
  const q=state.query.toLowerCase();
  const matchesQuery=!q||[t.title,t.category,t.note,t.due].join(' ').toLowerCase().includes(q);
  const matchesFilter=state.filter==='all'||(state.filter==='high'&&t.priority==='high'&&!state.done[t.id])||(state.filter==='open'&&!state.done[t.id])||(state.filter==='done'&&state.done[t.id]);
  return matchesQuery&&matchesFilter&&(state.category==='all'||t.category===state.category);
}
function render(){
  const list=todos.filter(visible); $('#todoList').innerHTML=list.map(t=>{
    const done=state.done[t.id]; const p=t.priority==='high'?'高優先':t.priority==='medium'?'一般':'已確認';
    return `<article class="todo-card ${done?'done':''}"><input class="check" type="checkbox" data-id="${t.id}" ${done?'checked':''} aria-label="完成 ${esc(t.title)}"><div class="todo-head"><div class="todo-title">${esc(t.title)}</div><span class="badge ${t.priority}">${p}</span></div><p class="todo-note">${esc(t.note)}</p><div class="todo-meta"><span>分類｜${esc(t.category)}</span><span>期限｜${esc(t.due)}</span>${t.link?`<a class="todo-link" href="${t.link}" target="_blank" rel="noopener">官方連結 ↗</a>`:''}</div></article>`;
  }).join(''); $('#emptyState').hidden=list.length>0;
  const doneCount=Object.values(state.done).filter(Boolean).length,total=todos.length,openHigh=todos.filter(t=>t.priority==='high'&&!state.done[t.id]).length;
  $('#doneCount').textContent=doneCount;$('#totalCount').textContent=total;$('#highCount').textContent=openHigh;$('#progressText').textContent=`${Math.round(doneCount/total*100)}%`;$('#progressBar').style.width=`${doneCount/total*100}%`;
  const departure=new Date('2027-01-30T00:00:00+08:00'); const days=Math.max(0,Math.ceil((departure-new Date())/86400000)); $('#daysToGo').textContent=Number.isFinite(days)?days:'—';
  localStorage.setItem(STORAGE_KEY,JSON.stringify(state.done));
}
renderCategories();render();
document.addEventListener('click',e=>{if(e.target.matches('.filter')){document.querySelectorAll('.filter').forEach(b=>b.classList.remove('is-active'));e.target.classList.add('is-active');state.filter=e.target.dataset.filter;render();}if(e.target.matches('.check')){state.done[e.target.dataset.id]=e.target.checked;render();}});
$('#searchInput').addEventListener('input',e=>{state.query=e.target.value;render();});
$('#categoryFilter').addEventListener('change',e=>{state.category=e.target.value;render();});

