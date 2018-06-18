'use strict;'

// Главный класс плагина
class Plugin {
	// Инициализация
	constructor (rootContainerId, mainContainerClass) {
		this._containerClass = mainContainerClass;
		this._rootId = rootContainerId;

		this._rootContainer = document.getElementById(rootContainerId);

		this._selector = '#' + rootContainerId + ' .';

		// Главные контейнеры для плагина
		this._headClass = 'HeadContainer';
		this._footerClass = 'FooterContainer';
		this._contentClass = 'ContentContainer';
	}

	// Тест запуска плагина
	_startTest() {
		$(this._rootContainer).attr('plugin', 'new-plugin');

		$(this._selector + this._headClass).attr('head', 'site-head');
		$(this._selector + this._footerClass).attr('footer', 'site-footer');
		$(this._selector + this._contentClass).attr('content', 'site-content');
	}

	// Главная точка запуска плагина
	_main() {
		this._menuManager = new MenuManager(this._selector);
		this._windowsManager = new WindowsManager(this._selector, this._menuManager);

		this._converter = new Converter(this._selector);
	}

	// Метод для внешнего запуска
	Start() {
		this._startTest();
		this._main();
	}
}
