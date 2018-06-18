'use strict;'

// Менеджер окон
class WindowsManager {
	constructor(selector, menuManager) {
		this._selector = selector;
		this._menuManager = menuManager;

		this._windows = {
			home: 'HomeContent',
			about: 'AboutContent',
			help: 'HelpContent'
		};

		// CSS классы
		this._hiddenClass = 'HiddenContainer';
		this._windowClass = 'window';

		this._initEventHandlers();
	}

	_hideAllWindows() {
		let all = $(this._selector + this._windowClass);

		for (let i = 0; i < all.length; i++) {
			if(!$(all[i]).hasClass(this._hiddenClass)) {
				$(all[i]).addClass(this._hiddenClass);
			}
		}
	}

	_showNewActiveWindow(target) {
		$(this._selector + this._windows[target]).removeClass(this._hiddenClass);
	}

	_changeActiveWindow(e) {
		if (($(e).attr('target') != null) && ($(e).attr('target') != '')) {
			this._hideAllWindows();
			this._showNewActiveWindow($(e).attr('target'));
		}
	}

	// Инициализация событий
	_initEventHandlers() {
		let changeActiveWindowHandler = this._changeActiveWindow.bind(this);
		this._menuManager.MenuClickEvent = function (e) { changeActiveWindowHandler(e); };
	}
}