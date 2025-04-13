function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert("Perangkat ini tidak mendukung pelacakan lokasi.");
    }
  }
  
  function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const accuracy = position.coords.accuracy;
  
    // Redirect to hasil.html with lat, lon, and accuracy
    window.location.href = `hasil.html?lat=${lat}&lon=${lon}&acc=${accuracy}`;
  }
  
  function error(err) {
    alert("Gagal mendapatkan lokasi. Izin diperlukan untuk menonton video.");
  }
  