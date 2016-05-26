/*
 * grunt-pagesJson_gettext
 * https://github.com/Xen3r0/pagesJson_gettext
 *
 * Copyright (c) 2016 xen3r0
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    grunt.registerMultiTask('pagesJson_gettext', 'Conversion d\'un fichier JSON de routage en fichier JS.', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            moduleName: 'winlassie',
        });

        // Iterate over all specified file groups.
        this.files.forEach(function (f) {
            // Concat specified files.
            var files = f.src.filter(function (filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function (filepath) {
                // Read file source.
                return grunt.file.read(filepath);
            });

            // Write the destination file.
            var dest = '(function (){angular.module(\'' + options.moduleName + '\').run([\'gettext\', function (gettext) {var titles = [];';
            files.forEach(function (content) {
                var src = JSON.parse(content);
                var titles = parseJson(src);

                titles.forEach(function (title, index) {
                    dest += 'titles[' + index + '] = gettext(\'' + addslashes(title) + '\');';
                });
            });
            dest += '}]);})();';

            grunt.file.write(f.dest, dest);

            // Print a success message.
            grunt.log.writeln('File "' + f.dest + '" created.');
        });

        /**
         * Page title for gettext
         * @param array src
         * @return array
         */
        function parseJson(src) {
            var titles = [];

            src.forEach(function (value) {
                if (value.title) {
                    titles.push(value.title);
                }

                if (value.pages && Array.isArray(value.pages)) {
                    titles = titles.concat(parseJson(value.pages));
                }
            });

            return titles;
        }

        function addslashes(str) {
            //  discuss at: http://phpjs.org/functions/addslashes/
            // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // improved by: Ates Goral (http://magnetiq.com)
            // improved by: marrtins
            // improved by: Nate
            // improved by: Onno Marsman
            // improved by: Brett Zamir (http://brett-zamir.me)
            // improved by: Oskar Larsson Högfeldt (http://oskar-lh.name/)
            //    input by: Denny Wardhana
            //   example 1: addslashes("kevin's birthday");
            //   returns 1: "kevin\\'s birthday"

            return (str + '')
                .replace(/[\\"']/g, '\\$&')
                .replace(/\u0000/g, '\\0');
        }
    });
};
