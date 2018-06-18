'use strict;'

// Сам конвертер
class Converter {
	constructor(selector) {
		this._grivInput = 'GrivInput';
		this._dollarInput = 'DollarInput';
		this._euroInput = 'EuroInput';

		this._selector = selector;

		this._isCalculating = false;

		this._initEventsHandlers();
	}

	_convertEuro(e) {
		//console.log(e.currentTarget.value);
		let value = e.currentTarget.value;

		if (!this._isCalculating) {
			this._isCalculating = true;

			let euroInGrivn = 30.5;
			let euroInDollar = 1.1660;

			$(this._selector + this._grivInput).val(value * euroInGrivn);
			$(this._selector + this._dollarInput).val(value * euroInDollar);

			this._isCalculating = false;
		}
	}

	_convertDollar(e) {
		//console.log(e.currentTarget.value);
		let value = e.currentTarget.value;

		if (!this._isCalculating) {
			this._isCalculating = true;

			let dollarInEuro = 0.86;
			let dollarInGrivn = 26.12;

			$(this._selector + this._euroInput).val(value * dollarInEuro);
			$(this._selector + this._grivInput).val(value * dollarInGrivn);

			this._isCalculating = false;
		}
	}

	_convertGrivn(e) {
		//console.log(e.currentTarget.value);
		let value = e.currentTarget.value;

		if (!this._isCalculating) {
			this._isCalculating = true;

			let grivnInEuro = 0.033;
			let grivnInDollar = 0.038;

			$(this._selector + this._euroInput).val(value * grivnInEuro);
			$(this._selector + this._dollarInput).val(value * grivnInDollar);

			this._isCalculating = false;
		}
	}

	_initEventsHandlers() {
		let euroHandler = this._convertEuro.bind(this);
		let dollarHandler = this._convertDollar.bind(this);
		let grivHandler = this._convertGrivn.bind(this);

		$(this._selector + this._grivInput).on('change', function(e) { grivHandler(e); });
		$(this._selector + this._dollarInput).on('change', function(e) { dollarHandler(e); });
		$(this._selector + this._euroInput).on('change', function(e) { euroHandler(e); });
	}
}