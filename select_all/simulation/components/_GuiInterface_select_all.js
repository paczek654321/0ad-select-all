GuiInterface.prototype.getPlayerEntities = function(player)
{
	let cmpRangeManager = Engine.QueryInterface(SYSTEM_ENTITY, IID_RangeManager);
	return cmpRangeManager.GetEntitiesByPlayer(player)
}

GuiInterface.prototype.exposedFunctions["getPlayerEntities"] = 1;
