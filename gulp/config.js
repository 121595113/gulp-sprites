const src = 'src';
const dest = 'dist';
const sass = `${src}/_source`;

module.exports = {
    delete: {
        src: [
        `${src}/**/*.scss`,
        `${dest}/images/**/*`,
        `${src}/images/*.png`
        ]
    },
    imagemin: {
        images: {
            src: `${src}/images/**/*`,
            dest: `${dest}/images/`
        }
    },
    sprites: {
        src: src + '/images',
        dest: {
            css: src + '/sprites/',
            image: src + '/images/'
        }
    }
};
