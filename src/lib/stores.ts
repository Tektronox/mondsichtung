// src/stores.js
import { writable } from 'svelte/store';

// Store for the selected year (default: 2025)
export const selectedYear = writable(2025);

// Store for the selected new moon date
export const selectedNewMoon = writable(null);

// Store for the valid new moon dates (filtered and checked for folders)
export const newMoonDates = writable([]);
