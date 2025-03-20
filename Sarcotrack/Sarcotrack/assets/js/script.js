document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const userData = document.getElementById('userData');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const gender = document.getElementById('gender').value;
  
      // Mostrar los datos del usuario en la misma página
      userData.innerHTML = `
        <h3>Datos Registrados:</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Edad:</strong> ${age}</p>
        <p><strong>Género:</strong> ${gender}</p>
      `;
  
      // Aquí luego podrás hacer la conexión a la base de datos
      console.log({ name, age, gender });
    });
  });
  