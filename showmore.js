function changeText(idElement) {
        let changetext = document.getElementById('changetext');
        let showmore = document.getElementById('showmore');
        if (changetext.innerHTML === '更多') {
          changetext.innerHTML = '关闭';
          showmore.style.display = 'block';
        } else {
          changetext.innerHTML = '更多';
          showmore.style.display = 'none';
        }
      }