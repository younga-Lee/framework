// --------------------------------------------------------------------------
// template literal

{
  const koreanFoods: {
    caption: string;
    rows: {
      headline: string;
      content: string;
    }[];
  } = {
    caption: '한식 메뉴',
    rows: [
      { headline: '뚝배기 불고기', content: '8,000원' },
      { headline: '스팸치즈볶음밥', content: '7,500원' },
      { headline: '불고기낙지덮밥', content: '9,000원' },
    ],
  };

  function run(): void { //타입스크립트는 반환값이 없을 때 void이용해서 명시하게됨
    let rendredResult = printTableHTML(koreanFoods);
    rendredResult = removeSpaceString(rendredResult);
    console.log(rendredResult);
    // return undefined;
  }
  
  // 공백제거
  function removeSpaceString(data: string): string {
    return data
      .replace(/(\s+<$|>\s+)/g, ($1) => {
        if (/\s+<$/.test($1)) {
          return '<';
        } else if (/>\s+/.test($1)) {
          return '>';
        } else {
          return '';
        }
      })
      .trim();
  }

  function printTableHTML(data: {
    caption: string;
    rows: {
      headline: string;
      content: string;
    }[];
  }): string {
    return `
      <table class="table">
        <caption class="sr-only">${data.caption}</caption>
        ${data.rows
          .map(
            (item) =>
              ` 
              <tr>
                <th>${item.headline}</th>
                <td>${item.content}</td>
              </tr>
            `
          )
          .join('')} 
      </table>
    `; // join활용해서 문자열로 만들기
  }

  function renderTable(data: {
    caption: string;
    rows: {
      headline: string;
      content: string;
    }[];
  }): string {
    return [
      '<table class="table">',
      '<caption class="sr-only">' + data.caption + '</caption>',
      data.rows.reduce(function (htmlString, rowData) {
        const rowString = [
          '<tr>',
          '<th>' + rowData.headline + '</th>',
          '<td>' + rowData.content + '</td>',
          '</tr>',
        ].join('');
        return htmlString + rowString;
      }, ''),
      '</table>',
    ].join('');
  }

  run();
}
