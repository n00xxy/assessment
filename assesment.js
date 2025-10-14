'use strict';
const userNameInput = document.getElementById('user-name');
const assesmentButton = document.getElementById('assesment');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');

assesmentButton.addEventListener(
  'click',
  () => {
    const userName = userNameInput.value;
    if(userName.length === 0){
      //名前が空の時は処理を終了する
      return;
    }
    
    // 診断結果表示エリアの作成
    resultDivision.innerText ='';
    tweetDivision.innerText = '';
    const heading = document.createElement('h3');
    heading.innerText = '診断結果';
    resultDivision.appendChild(heading);

    const paragraph = document.createElement('p');
    const result = assesment(userName);
    paragraph.innerText = result;
    resultDivision.appendChild(paragraph);
        //TODO ツイートエリアの作成
        tweetDivision.innerText ='';
        const anchor = document.createElement('a');
        const hrefValue =
  'https://x.com/intent/tweet?button_hashtag=' +
  encodeURIComponent('あなたのいいところ') + // どんな環境でも安心！
  '&ref_src=twsrc%5Etfw';

        anchor.setAttribute('href', hrefValue);
        anchor.setAttribute('class', 'twitter-hashtag-button');
        anchor.setAttribute('data-text', result);
        anchor.innerText = 'Tweet #あなたのいいところ';

        tweetDivision.appendChild(anchor);

        twttr.widgets.load(tweetDivision);
  }
)
const answers = [
'###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。',
'###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。',
'###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。',
'###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。',
'###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。',
'###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。',
'###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。',
'###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。',
'###userName###のいいところは決断力です。###userName###がする決断にいつも助けられる人がいます。',
'###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。',
'###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。',
'###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。',
'###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。',
'###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。',
'###userName###のいいところはそのすべてです。ありのままの###userName###自身がいいところなのです。',
'###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。',
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param{string}userName ユーザーの名前
 * @return{string}診断結果
 */
function assesment(userName){
  //全文字のコード番号を取得してそれを足し合わせる
  let sumOfCharCode = 0;
  for(let i = 0; i < userName.length; i++){
    sumOfCharCode = sumOfCharCode + 
    userName.charCodeAt(i);
  }
  // 文字のコード番号の合計をカイトの数で割って添え字の数値を求める
  const index = sumOfCharCode % answers.length;
  let result = answers[index];
  result = result.replaceAll('###userName###', userName);
  return result;
}
  // テストを行う関数
  function test(){
    console.log('診断結果の文章のテスト');

    //太郎
    console.log('太郎');
    console.assert(
      assesment('太郎') === '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
      '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
    );

    //次郎
    console.log('次郎');
    console.assert(
      assesment('次郎') === '次郎のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる次郎が皆から評価されています。',
      '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
    );

    //花子
    console.log('花子');
    console.assert(
      assesment('花子') === '花子のいいところはまなざしです。花子に見つめられた人は、気になって仕方がないでしょう。',
      '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
    );

    console.log('診断結果の文章のテスト終了'
    );
  }

  test();