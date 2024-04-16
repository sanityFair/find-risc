import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import postcssMixins from 'postcss-mixins';

export default {
  plugins: {
    tailwindcss,
    autoprefixer,
    'postcss-mixins':postcssMixins
  }
}
