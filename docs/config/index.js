var Package = require('dgeni').Package;
var path = require('canonical-path');
var packagePath = __dirname;
var basePath = path.resolve(packagePath, '../..');
var files = require(basePath + '/config/file.path.js');

module.exports = new Package('cssdoc', [
	require('dgeni-packages/ngdoc'),
	require('dgeni-packages/nunjucks'),
	require('dgeni-packages/examples')
])

// Register processors.
.processor(require('./processor/componentRouteProcessor'))

// Register services
.factory(require('./service/deployment/defaultDeployment'))

// Confogurations
.config(function(log, readFilesProcessor, writeFilesProcessor, templateFinder) {

	log.level = 'info';
	readFilesProcessor.basePath = basePath;
	readFilesProcessor.sourceFiles = [{
		include : files.css.src,
		basePath : files.css.basePath,
		//		fileReader : 'ngdocFileReader'
	}];

	templateFinder.templateFolders.unshift(path.resolve(__dirname, 'templates'));
	templateFinder.templateFolders.unshift(path.resolve(__dirname, 'templates/ngdoc'));
	templateFinder.templateFolders.unshift(path.resolve(__dirname, 'templates/examples'));

	writeFilesProcessor.outputFolder = files.doc.buildPath;
})

.config(function(computePathsProcessor) {

	computePathsProcessor.pathTemplates.push({
		docTypes: ['module'],
		pathTemplate: '${area}/${name}',
		outputPathTemplate: 'partials/${area}/${name}.html'
	});

	computePathsProcessor.pathTemplates.push({
		docTypes: ['componentGroup'],
		pathTemplate: '${area}/${moduleName}/${groupType}',
		outputPathTemplate: 'partials/${area}/${moduleName}/${groupType}.html'
	});

})

.config(function(generateExamplesProcessor, generateProtractorTestsProcessor, defaultDeployment) {
	generateExamplesProcessor.deployments = [
		defaultDeployment
	];

	generateProtractorTestsProcessor.deployments = [
		defaultDeployment
	];
});
