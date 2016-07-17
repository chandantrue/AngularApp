module.exports = {
		app: {
			compile: {
                options: {
                    baseUrl: 'src/js',
                    paths: {
                        'lib': '../lib',
                        'jquery': '../lib/jquery/jquery-2.1.1'
                    },
                    name: 'main',
                    wrap: true,
                    preserveLicenseComments: false,
                    optimize: debug ? 'none' : 'uglify2',
                    out: 'build/app.js',
                    'onModuleBundleComplete': function (data) {
                        var fs = require('fs');
                        var amdclean = require('amdclean');
                        var outputFile = 'build/app.js';

                        fs.writeFileSync(outputFile, amdclean.clean({
                                'filePath': outputFile
                            })
                        );
                    }
                }
            }
		}
}