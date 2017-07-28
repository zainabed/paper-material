module.exports = function parseCssTagsProcessor() {
	return {
		tagDefinitions : [],
		$validate : {
			tagDefinitions : {
				presence : true
			}
		},
		runAfter : ['files-read'],
		$runBefore : ['processing-docs'],
		$process : function(docs) {
			docs.forEach(function(doc) {
				console.log(doc);
				die;
			});
		}
	};
};
