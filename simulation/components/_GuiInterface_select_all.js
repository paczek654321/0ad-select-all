GuiInterface.prototype.getPlayerEntities = function(player)
{
	let cmpRangeManager = Engine.QueryInterface(SYSTEM_ENTITY, IID_RangeManager);
	return cmpRangeManager.GetEntitiesByPlayer(player)
}

let exposedFunctions =
{
	"getPlayerEntities": 1,
	"GetSimulationState": 1,
	"GetExtendedSimulationState": 1,
	"GetInitAttributes": 1,
	"GetReplayMetadata": 1,
	"GetCampaignGameEndData": 1,
	"GetRenamedEntities": 1,
	"ClearRenamedEntities": 1,
	"GetEntityState": 1,
	"GetMultipleEntityStates": 1,
	"GetAverageRangeForBuildings": 1,
	"GetTemplateData": 1,
	"IsTechnologyResearched": 1,
	"CheckTechnologyRequirements": 1,
	"GetStartedResearch": 1,
	"GetBattleState": 1,
	"GetIncomingAttacks": 1,
	"GetNeededResources": 1,
	"GetNotifications": 1,
	"GetTimeNotifications": 1,

	"GetAvailableFormations": 1,
	"GetFormationRequirements": 1,
	"CanMoveEntsIntoFormation": 1,
	"IsFormationSelected": 1,
	"GetFormationInfoFromTemplate": 1,
	"IsStanceSelected": 1,

	"UpdateDisplayedPlayerColors": 1,
	"SetSelectionHighlight": 1,
	"GetAllBuildableEntities": 1,
	"SetStatusBars": 1,
	"GetPlayerEntities": 1,
	"GetNonGaiaEntities": 1,
	"DisplayRallyPoint": 1,
	"AddTargetMarker": 1,
	"SetBuildingPlacementPreview": 1,
	"SetWallPlacementPreview": 1,
	"GetFoundationSnapData": 1,
	"PlaySound": 1,
	"PlaySoundForPlayer": 1,
	"FindIdleUnits": 1,
	"HasIdleUnits": 1,
	"GetTradingRouteGain": 1,
	"GetTradingDetails": 1,
	"CanAttack": 1,
	"GetBatchTime": 1,

	"IsMapRevealed": 1,
	"SetPathfinderDebugOverlay": 1,
	"SetPathfinderHierDebugOverlay": 1,
	"SetObstructionDebugOverlay": 1,
	"SetMotionDebugOverlay": 1,
	"SetRangeDebugOverlay": 1,
	"EnableVisualRangeOverlayType": 1,
	"SetRangeOverlays": 1,

	"GetTraderNumber": 1,
	"GetTradingGoods": 1,
	"IsTemplateModified": 1,
	"ResetTemplateModified": 1,
	"IsSelectionDirty": 1,
	"ResetSelectionDirty": 1,
	"getPlayerEntities": 1
};

GuiInterface.prototype.ScriptCall = function(player, name, args)
{
	if (exposedFunctions[name])
		return this[name](player, args);

	throw new Error("Invalid GuiInterface Call name \"" + name + "\"");
}