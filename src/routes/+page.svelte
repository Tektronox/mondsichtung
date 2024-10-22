<script>
    import Gallery from '$lib/Gallery.svelte';
  
    // List of months and their corresponding folder names
    const months = [
    //   { name: 'Januar', folder: 'january' },
    //   { name: 'Februar', folder: 'february' },
      { name: 'März', folder: 'march' },
    //   { name: 'April', folder: 'april' },
    //   { name: 'Mai', folder: 'may' },
    //   { name: 'Juni', folder: 'june' },
    //   { name: 'Juli', folder: 'july' },
    //   { name: 'August', folder: 'august' },
    //   { name: 'September', folder: 'september' },
    //   { name: 'Oktober', folder: 'october' },
    //   { name: 'November', folder: 'november' },
    //   { name: 'Dezember', folder: 'december' }
    ];
  </script>
  
  <main>
    <header>
      <h1>Mondsichtung 2025</h1>
      <p>Hier finden Sie Karten, die die Möglichkeit der Mondsichtung nach jedem Neumond für das Jahr 2025 zeigen.</p>
    </header>
  
    <!-- Loop through each month and render the Gallery component -->
    {#each months as { name, folder }}
      <Gallery monthName={name} folder={folder} />
    {/each}
  </main>
  
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      color: #333;
    }
  
    header {
      background-color: #0073e6;
      color: white;
      padding: 20px;
      text-align: center;
    }
  
    main {
      padding: 20px;
    }
  
    h1 {
      font-size: 2em;
      margin: 0;
    }
  
    p {
      font-size: 1.2em;
      line-height: 1.6;
    }
  </style>
  