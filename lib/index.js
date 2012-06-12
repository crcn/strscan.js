module.exports = function(source) {


	var _cchar = "",
	_pos       = 0,
	_len       = 0,
	_src       = source;


	var self = {

		/**
		 * sets the source
		 */

		source: function(value) {
			_src = value;
			_len = value.length;
			_pos = 0;
		},

		/**
		 */


		

	}


	//initialize
	self.source(source);


	return self;
}