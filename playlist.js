
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

fetch('http://127.0.0.1:5001/api')
  .then(response => response.json())
  .then(data => {
    const parent = document.getElementsByClassName("main")[0]
    const table = document.getElementsByClassName("table")[0];
    console.log(data.length)
    height = (data.length)
    for (let i = 0; i < data.length; i++) {
      console.log(data);
      const row = document.createElement("tr");
      const name = document.createElement("td");
      const artist = document.createElement("td");
      const duration = document.createElement("td");
      const remove = document.createElement("td");
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('bt',);
      removeBtn.id = data[i]['id'];
      remove.appendChild(removeBtn);
      name.textContent = data[i]['name'];
      artist.textContent = data[i]['artist'];
      duration.textContent = data[i]['duration'];
      row.appendChild(name);
      row.appendChild(artist);
      row.appendChild(duration);
      row.appendChild(remove);
      table.appendChild(row);
      console.log(data[i]['id']);
      const firstRow = table.querySelector('tr');
      if (firstRow) {
        firstRow.style.marginTop = '0';
      }
      removeBtn.addEventListener('click', (event) => {

        const rowIndex = event.target.parentElement.parentElement.rowIndex;
        console.log(1);
        table.deleteRow(rowIndex);
        for (let j = rowIndex; j < table.rows.length; j++) {
          table.rows[j].rowIndex = j;
        }

        dict = data[i]

        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data[i])
        };

        fetch('http://127.0.0.1:5001/api/delete', options)
          .then(response => response.json())
          .then(data => {

            console.log("done");
          });
      });
    }
  })
  .catch(error => {
    console.error(error);
  });