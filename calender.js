


window.onload = function() {
    // 現在の年月の取得
    let current = new Date();
    let year = current.getFullYear();
    let month = current.getMonth() + 1;
 
    // カレンダーの表示
    let wrapper = document.querySelector('#calendar');

    add_calendar(wrapper, year, month);
}
 

/**
 * 左側の固定枠を生成
 * @param {object} wrapper - カレンダーを追加する親要素
 * @param {number} year    - 年の指定
 * @param {number} month   - 月の指定
 */
function add_waku(wrapper, year, month) {

    // ヘッダー
    let cHead = document.createElement('div');
    cHead.className = 'waku-Head';
    wrapper.appendChild(cHead);
    
    // 中央
    let cCenter = document.createElement('div');
    cCenter.className = 'waku-Data d-flex flex-row';
    wrapper.appendChild(cCenter);

    // 中央-左
    let cLeft = document.createElement('div');
    cLeft.className = 'waku-left';
    cCenter.appendChild(cLeft);

    // 中央-データ部
    let cData = document.createElement('div');
    cData.className = 'waku-right';
    cCenter.appendChild(cData);

    return {wrapper,cHead,cLeft,cData}
}

/**
 * 指定した年月のカレンダーを表示する
 * @param {object} objWaku - カレンダーを追加する親要素
 * @param {number} year    - 年の指定
 * @param {number} month   - 月の指定
 */
function add_calendar(wrapper, year, month) {

    // 現在カレンダーが追加されている場合は一旦削除する
    wrapper.textContent = null;

    let objWaku = add_waku(wrapper, year, month);

    // ヘッダーに年月を表示
    let HeadYM = generate_Header(year, month);
    objWaku.cHead.appendChild(HeadYM);

    // ヘッダーに年月移動ボタンを表示
    let HeadMoveYM = generate_calendar_header(wrapper, year, month);
    objWaku.cHead.appendChild(HeadMoveYM);

    //　左枠に固定列を表示
    let FixedLeft2 = generate_FixedLeft(year, month);
    objWaku.cLeft.appendChild(FixedLeft2);

    // 右側にカレンダーを表示
    let bodyData = generate_month_calendar(year, month);
    objWaku.cData.appendChild(bodyData);

}

/**
 * 指定した年月のカレンダーのヘッダー要素を生成して返す
 * @param {object} wrapper - カレンダーを追加する親要素
 * @param {number} year    - 年の指定
 * @param {number} month   - 月の指定
 */
function generate_Header(year, month) {

    // 年月の追加
    var cTitle = document.createElement('div');
    cTitle.style = 'display:inline-block';
    cTitle.className = 'calendar-FixedLeft';
    var cTitleText = document.createTextNode(year + '年' + month + '月');
    cTitle.appendChild(cTitleText);
 
    return cTitle;
}
 
/**
 * 指定した年月のカレンダーのヘッダー要素を生成して返す
 * @param {object} wrapper - カレンダーを追加する親要素
 * @param {number} year    - 年の指定
 * @param {number} month   - 月の指定
 */
function generate_calendar_YM(year, month) {

    // 年月の追加
    var cTitle = document.createElement('div');
    cTitle.className = 'calendar-header__YM';
    var cTitleText = document.createTextNode(year + '年' + month + '月');
    cTitle.appendChild(cTitleText);
 
    return cTitle;
}
 
/**
 * 指定した年月のカレンダーのヘッダー要素を生成して返す
 * @param {object} wrapper - カレンダーを追加する親要素
 * @param {number} year    - 年の指定
 * @param {number} month   - 月の指定
 */
function generate_calendar_header(wrapper, year, month) {
    // 前月と翌月を取得
    var nextMonth = new Date(year, (month - 1));
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    var prevMonth = new Date(year, (month - 1));
    prevMonth.setMonth(prevMonth.getMonth() - 1);
 
    // ヘッダー要素
    var cHeader = document.createElement('div');
    cHeader.className = 'calendar-header';
 
    // 前月ボタンの追加
    var cPrev = document.createElement('button');
    cPrev.className = 'calendar-header__prev';
    var cPrevText = document.createTextNode('prev');
    cPrev.appendChild(cPrevText);
    // 前月ボタンをクリックした時のイベント設定
    cPrev.addEventListener('click', function() {
        add_calendar(wrapper, prevMonth.getFullYear(), (prevMonth.getMonth() + 1));
    }, false);
    cHeader.appendChild(cPrev);
 
    // 翌月ボタンの追加
    var cNext = document.createElement('button');
    cNext.className = 'calendar-header__next';
    var cNextText = document.createTextNode('next');
    cNext.appendChild(cNextText);
    // 翌月ボタンをクリックした時のイベント設定
    cNext.addEventListener('click', function() {
        add_calendar(wrapper, nextMonth.getFullYear(), (nextMonth.getMonth() + 1));
    }, false);
    cHeader.appendChild(cNext);
 
    return cHeader;
}
 

/**
 * 指定した年月のカレンダー要素を生成して返す
 * @param {number} year  - 年の指定
 * @param {number} month - 月の指定
 */
function generate_FixedLeft(year, month) {

    // カレンダーの要素を生成
    var cTable = document.createElement('div');
    cTable.className = 'calendar-table';
 
    var insertData = '';

    // 日付部分の生成
    insertData += '<div class="KensaGridLeftP">';
    insertData += '<div class="KensaGridLeftC">';
    insertData += "編成名";
    insertData += '</div>';
    insertData += '<div class="KensaGridLeftCEnd">';

    for(let w = 0; w < 2; w++){
        insertData += '<div class="KensaGridLeftC">';
        insertData += `H10${w}`;
        insertData += '</div>';
        insertData += '<div class="KensaGridLeftCEnd">';
        insertData += '</div>';
    }
    
    insertData += '</div>';

    cTable.innerHTML = insertData;
    return cTable;
}
 

/**
 * 指定した年月のカレンダー要素を生成して返す
 * @param {number} year  - 年の指定
 * @param {number} month - 月の指定
 */
function generate_month_calendar(year, month) {
    // カレンダーの情報を取得
    var calendarData = get_month_calendar(year, month);
 
    var i = calendarData[0]['weekday']; // 初日の曜日を取得

    // カレンダーの要素を生成
    var cTable = document.createElement('div');
    cTable.className = 'calendar-table';
 
    var insertData = '';

    // 日付部分の生成
    insertData += '<div class="KensaGridDataP">';
    for (var i = 0; i < calendarData.length; i++) {
        insertData += '<div class="KensaGridDataC">';
        insertData += calendarData[i]['day'] + "日";
        insertData += '</div>';
    }
    insertData += '<div class="KensaGridDataCEnd">';

    // データ部
    let startS = 0;
    let pluskiro = 0;

    for(let w = 0; w < 2; w++){
        for (var i = 0; i < calendarData.length; i++) {
            insertData += '<div class="KensaGridDataC">';
            insertData += `U${i}`;
            insertData += '</div>';
        }
        insertData += '<div class="KensaGridDataCEnd">';
        insertData += '</div>';
    }
    
    insertData += '</div>';

    cTable.innerHTML = insertData;
    return cTable;
}
 
/**
 * 指定した年月のカレンダー情報を返す
 * @param {number} year  - 年の指定
 * @param {number} month - 月の指定
 */
function get_month_calendar(year, month) {
    var firstDate = new Date(year, (month - 1), 1); // 指定した年月の初日の情報
    var lastDay = new Date(year, (firstDate.getMonth() + 1), 0).getDate(); // 指定した年月の末日
    var weekday = firstDate.getDay(); // 指定した年月の初日の曜日
 
    var calendarData = []; // カレンダーの情報を格納
    var weekdayCount = weekday; // 曜日のカウント用
    for (var i = 0; i < lastDay; i++) {
        calendarData[i] = {
            day: i + 1,
            weekday: weekdayCount
        }
        // 曜日のカウントが6(土曜日)まできたら0(日曜日)に戻す
        if(weekdayCount >= 6) {
            weekdayCount = 0;
        } else {
            weekdayCount++;
        }
    }
    return calendarData;
}
