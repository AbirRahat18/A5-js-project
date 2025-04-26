function getCurrentTime() {
    const now = new Date();
    return now.toTimeString().slice(0, 5);
  }
  
  document.getElementById('mainCard').addEventListener('click', function(event) {
      event.preventDefault(); 
      window.location.href = '2npart.html'; 
    });

  
    const completedButtons = document.getElementsByClassName('completed');

 
    for (let i = 0; i < completedButtons.length; i++) {
      completedButtons[i].addEventListener('click', function() {
        
      
        const twentyThreeElement = document.getElementById('twentyThree');
        let twentyThreeValue = parseInt(twentyThreeElement.innerText);
        twentyThreeValue--;
        if (twentyThreeValue < 0) {
          twentyThreeValue = 0; 
        }
        twentyThreeElement.innerText = twentyThreeValue;

      
        const fiveElement = document.getElementById('five');
        let fiveValue = parseInt(fiveElement.innerText);
        fiveValue++;
        fiveElement.innerText = fiveValue;

    
        completedButtons[i].disabled = true;
        completedButtons[i].style.backgroundColor = '#d1d5db'; 
        completedButtons[i].style.color = '#4b5563'; 
      });
    }
  
    const themeBtn = document.getElementById('themeBtn');

   
    const themes = [
      { background: '#fef3c7', color: '#92400e' }, 
      { background: '#d1fae5', color: '#065f46' }, 
      { background: '#e0e7ff', color: '#3730a3' }, 
      { background: '#ffe4e6', color: '#9d174d' }, 
      { background: '#f3e8ff', color: '#6b21a8' },
    ];

    let currentTheme = 0; 

    themeBtn.addEventListener('click', function() {
     
      document.body.style.backgroundColor = themes[currentTheme].background;
      document.body.style.color = themes[currentTheme].color;

   
      currentTheme++;
      if (currentTheme >= themes.length) {
        currentTheme = 0; 
      }
    });




   
const completed1 = document.getElementById('Completed1');
const completed2 = document.getElementById('Completed2');
const completed3 = document.getElementById('Completed3');
const completed4 = document.getElementById('Completed4');
const completed5 = document.getElementById('Completed5');
const completed6 = document.getElementById('Completed6');


const historyContainer = document.getElementById('historyContainer');


const clearHistoryBtn = document.getElementById('history');


completed1.addEventListener('click', function() {
  const newHistory = document.createElement('p')
  newHistory.innerText = `Fix Mobile Button Issue Completed ${getCurrentTime()}`; 
  newHistory.classList.add('p-2', 'rounded', 'bg-slate-50', 'shadow-md','mb-2' )
  historyContainer.appendChild(newHistory);  
});

completed2.addEventListener('click', function() {
  const newHistory = document.createElement('p');
  newHistory.innerText = `Optimize Home page Completed ${getCurrentTime()}`;
  newHistory.classList.add('p-2', 'rounded', 'bg-slate-50', 'shadow-md','mb-2' )
  historyContainer.appendChild(newHistory);
});

completed3.addEventListener('click', function() {
  const newHistory = document.createElement('p');
  newHistory.innerText = `Improve Job searching Completed ${getCurrentTime()}`;
  newHistory.classList.add('p-2', 'rounded', 'bg-slate-50', 'shadow-md','mb-2' )
  historyContainer.appendChild(newHistory);
});

completed4.addEventListener('click', function() {
  const newHistory = document.createElement('p');
  newHistory.innerText = `Integrate OpenAI API Completed ${getCurrentTime()}`;
  newHistory.classList.add('p-2', 'rounded', 'bg-slate-50', 'shadow-md','mb-2' )
  historyContainer.appendChild(newHistory);
});

completed5.addEventListener('click', function() {
  const newHistory = document.createElement('p');
  newHistory.innerText = `Add new emoji 🤲 completed ${getCurrentTime()} `;
  newHistory.classList.add('p-2', 'rounded', 'bg-slate-50', 'shadow-md','mb-2' )
  historyContainer.appendChild(newHistory);
});

completed6.addEventListener('click', function() {
  const newHistory = document.createElement('p');
  newHistory.innerText = `Optimize Home page Completed ${getCurrentTime()}`;
  newHistory.classList.add('p-2', 'rounded', 'bg-slate-50', 'shadow-md','mb-2' )
  historyContainer.appendChild(newHistory);
});


clearHistoryBtn.addEventListener('click', function() {
  historyContainer.innerHTML = ''; 
});




function updateDateTime() {
    const now = new Date();
    return now.toLocaleString()
}

setInterval( function() { document.getElementById('dateAndTime').innerText = updateDateTime(); }, 1000);
    
    