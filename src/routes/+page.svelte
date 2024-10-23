<script>
  import { onMount } from 'svelte';
  import { selectedYear, selectedNewMoon, newMoonDates } from '$lib/stores';
  import ImageGallery from '$lib/ImageGallery.svelte';

  let years = Array.from({ length: 383 }, (_, i) => 1700 + i); // Valid range of years (1700-2082)
  let availableNewMoonDates = []; // Will store valid dates with folders
  
  // Fetch new moon dates from the API for the selected year
  async function fetchNewMoonDates(year) {
    try {
      const response = await fetch(`https://craigchamberlain.github.io/moon-data/api/moon-phase-data/${year}/`);
      const data = await response.json();
      
      // Filter only the dates where Phase is 0 (New Moon)
      const newMoonDatesFromAPI = data.filter(entry => entry.Phase === 0).map(entry => entry.Date.split("T")[0]);
      
      // Simulate folder existence check
      availableNewMoonDates = newMoonDatesFromAPI.filter(date => folderExists(date));
      newMoonDates.set(availableNewMoonDates);

      // Select the closest future new moon by default
      selectClosestFutureNewMoon();
    } catch (error) {
      console.error("Error fetching new moon dates:", error);
    }
  }

  // Dummy function to simulate checking if a folder exists
  function folderExists(date) {
    // Example: Assume we have folders for some of these dates
    const existingFolders = ['2025-01-29', '2025-02-05', '2025-03-07'];
    return existingFolders.includes(date);
  }

  // Select the closest new moon date in the future
  function selectClosestFutureNewMoon() {
    const today = new Date().toISOString().split('T')[0];
    const closestFutureDate = availableNewMoonDates.find(date => date >= today);
    selectedNewMoon.set(closestFutureDate || availableNewMoonDates[0]);
  }

  // Load new moon dates when the year changes
  $: if ($selectedYear) {
    fetchNewMoonDates($selectedYear);
  }
</script>

<main>
  <header>
    <h1>Mondsichtung</h1>
  </header>

  <section>
    <h2>Wählen Sie ein Jahr</h2>
    <select bind:value={$selectedYear}>
      {#each years as year}
        <option value={year}>{year}</option>
      {/each}
    </select>

    <h2>Wählen Sie ein Neumond Datum</h2>
    {#if $newMoonDates.length > 0}
      <select bind:value={$selectedNewMoon}>
        {#each $newMoonDates as date}
          <option value={date}>{date}</option>
        {/each}
      </select>
    {:else}
      <p>Keine Neumond-Daten für dieses Jahr verfügbar.</p>
    {/if}
  </section>

  <section>
    <ImageGallery {selectedNewMoon} />
  </section>
</main>

<style>
  /* Add your styles here for layout */
</style>
