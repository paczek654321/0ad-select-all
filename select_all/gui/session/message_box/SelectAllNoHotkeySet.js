class SelectAllNoHotkeySet extends SessionMessageBox
{
	constructor()
	{
		super();
	}
}

SelectAllNoHotkeySet.prototype.Title = "Warning"
SelectAllNoHotkeySet.prototype.Caption = "Select all: None of the keybinds are set!"
SelectAllNoHotkeySet.prototype.Buttons = [
	{
		"caption": "Ok"
	}
];
