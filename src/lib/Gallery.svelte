<script>
    export let monthName;
    export let folder;
  
    // Array of image filenames (assuming each folder has 3 images)
    const images = [1, 2, 3];
  </script>
  
  <section>
    <h2>Neumond im {monthName}</h2>
    <div class="image-gallery">
      {#each images as imgIndex}
        <img 
          src={`/static/img/${folder}/${imgIndex}.png`} 
          alt={`${monthName} Mondkarte ${imgIndex}`} 
          loading="lazy"
        />
      {/each}
    </div>
  </section>
  
  <style>
    h2 {
      color: #0073e6;
      font-size: 1.5em;
      margin-top: 20px;
    }
  
    .image-gallery {
      display: flex;
      gap: 10px;
      margin-top: 10px;
    }
  
    .image-gallery img {
      width: 30%;
      border: 2px solid #ccc;
      border-radius: 5px;
    }
  </style>
  