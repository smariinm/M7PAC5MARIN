
fetch('https://raw.githubusercontent.com/smariinm/data.xml/main/data.xml')
    .then(response => response.text())
    .then(str => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(str, 'application/xml');
        
       
        const grups = xmlDoc.getElementsByTagName('GRUP');
        const cartaDiv = document.getElementById('carta');

        
        Array.from(grups).forEach(grup => {
            const grupNom = grup.getElementsByTagName('NOM')[0].textContent;
            const grupDiv = document.createElement('div');
            grupDiv.classList.add('grup');
            
          
            const grupNomElement = document.createElement('h2');
            grupNomElement.textContent = grupNom;
            grupDiv.appendChild(grupNomElement);
            
           
            const plats = grup.getElementsByTagName('PLAT');
            Array.from(plats).forEach(plat => {
                const platNom = plat.getElementsByTagName('NOM')[0].textContent;
                const platDescripcio = plat.getElementsByTagName('DESCRIPCIO')[0].textContent;
                const platPreu = plat.getElementsByTagName('PREU')[0].textContent;
                const platAlergenos = plat.getElementsByTagName('ALERGENOS')[0] ? plat.getElementsByTagName('ALERGENOS')[0].textContent : 'No especificado';
                
    
                const platDiv = document.createElement('div');
                platDiv.classList.add('plat');
                
                const platNomElement = document.createElement('div');
                platNomElement.classList.add('nom');
                platNomElement.textContent = platNom;
                
                const platDescripcioElement = document.createElement('div');
                platDescripcioElement.classList.add('descripcio');
                platDescripcioElement.textContent = platDescripcio;
                
                const platPreuElement = document.createElement('div');
                platPreuElement.classList.add('preu');
                platPreuElement.textContent = `Preu: €${platPreu}`;
                
                const platAlergenosElement = document.createElement('div');
                platAlergenosElement.classList.add('alergenos');
                platAlergenosElement.textContent = `Alergénos: ${platAlergenos}`;
                
                
                platDiv.appendChild(platNomElement);
                platDiv.appendChild(platDescripcioElement);
                platDiv.appendChild(platPreuElement);
                platDiv.appendChild(platAlergenosElement);
                
                
                grupDiv.appendChild(platDiv);
            });
            
            
            cartaDiv.appendChild(grupDiv);
        });
    })
    .catch(error => console.log('Error cargando el XML:', error));




