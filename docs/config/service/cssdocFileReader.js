module.exports = function cssdocFileReader() {
	return {
		name : 'cssdocFileReader',
		defualtPattern : /\.cssdoc$/,
		getDocs : function(fileInfo) {
			return [{
				content : fileInfo.content,
				startingLine : 1
			}];
		}
	};
};
