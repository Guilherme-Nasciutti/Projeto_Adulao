function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');
    
    if (sidebar.style.left === "-250px") {
      sidebar.style.left = "0";
      content.style.marginLeft = "250px";
      alert("Barra lateral aberta!"); // Adiciona um alerta para teste
    } else {
      sidebar.style.left = "-250px";
      content.style.marginLeft = "0";
      alert("Barra lateral fechada!"); // Adiciona um alerta para teste
    }
  }