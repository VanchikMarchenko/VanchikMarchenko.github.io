'use strict;'

// Менеджер меню
class MenuManager {
	constructor(selector) {
		this._menuItems = [
			'MenuItemHome',
			'MenuItemAbout',
			'MenuItemHelp'
		];

		this._selector = selector;

		this._initHandlers();
	}

	_menuClickHandler(e) {
		this.MenuClickEvent(e.currentTarget);
	}

	_initHandlers() {
		let handler = this._menuClickHandler.bind(this);

		for (let i = 0; i < this._menuItems.length; i++) {
			$(this._selector + this._menuItems[i]).on('click', function(e) { handler(e); });
		}
	}

	MenuClickEvent(e) { }
}