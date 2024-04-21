// lib/fontawesome.ts
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import all free solid icons
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the necessary styles

config.autoAddCss = false; // Avoid double loading of CSS

// Add the icons you intend to use
library.add(fas);
