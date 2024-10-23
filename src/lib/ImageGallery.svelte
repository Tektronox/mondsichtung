<script>
  export let selectedNewMoon;

  let images = [];

  $: if (selectedNewMoon) {
    loadImages(selectedNewMoon);
  }

  function loadImages(date) {
    const folder = `img/${date}`; // Assuming folder format is 'YYYY-MM-DD'
    // Assuming up to 5 images, check for the existence of up to 5 maps
    images = [1, 2, 3, 4, 5].map(num => `${folder}/map${num}.jpg`);
  }
</script>

<section>
  <h2>Images for {selectedNewMoon}</h2>
  {#if images.length > 0}
    <div class="image-gallery">
      {#each images as imgSrc}
        <img src={imgSrc} alt="Moon visibility map" loading="lazy" />
      {/each}
    </div>
  {:else}
    <p>No images available for this date.</p>
  {/if}
</section>

<style>
  .image-gallery {
    display: flex;
    gap: 10px;
  }

  .image-gallery img {
    width: 20%;
    border-radius: 5px;
  }
</style>
