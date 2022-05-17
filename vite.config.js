const path = require('path');

import viteImagemin from 'vite-plugin-imagemin';
import legacy from '@vitejs/plugin-legacy';

export default {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options
    },
  },
  plugins: [
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
};
