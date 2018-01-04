function changeText(idElement) {
        let changetext = document.getElementById('changetext');
        let showmore = document.getElementById('showmore');
        let basic = document.getElementById('basic');

        if (changetext.innerHTML === '更多') {
          changetext.innerHTML = '关闭';
          showmore.style.display = 'block';
          basic.style.display = 'none';
        } else {
          changetext.innerHTML = '更多';
          showmore.style.display = 'none';
          basic.style.display = 'block';
        }
      }