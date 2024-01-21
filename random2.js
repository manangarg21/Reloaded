const links = document.querySelectorAll('.link');
links.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.backgroundColor = 'white';
    link.style.color = 'black';
  });
  link.addEventListener('mouseout', () => {
    link.style.backgroundColor = '';
    link.style.color = '';
  });
});

 
let artist_name = 'Arctic Monkeys';

    const buttons = document.querySelectorAll('.save-button');
    buttons.forEach(button => {
      button.addEventListener('click', event => {
        const row = event.target.closest('tr');
        const data = {
          song_name: row.cells[1].textContent,
          duration: row.cells[2].textContent,
          artist: artist_name
        };
        
          fetch('http://localhost:5001/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        });
      });