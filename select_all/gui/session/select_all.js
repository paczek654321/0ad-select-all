function select_all(filter)
{
    let entities = Engine.GuiInterfaceCall("getPlayerEntities")
    let toAdd = []
    switch(filter)
    {
        case "men": toAdd = men(entities); break
        case "units": toAdd = units(entities); break
        case "buildings": toAdd = buildings(entities); break
        case "warriors": toAdd = warriors(entities); break
        case "idle": toAdd = idle(entities); break
        case "wounded": toAdd = wounded(entities); break
        case "food": toAdd = gatherers(entities, "food"); break
        case "wood": toAdd = gatherers(entities, "wood"); break
        case "stone": toAdd = gatherers(entities, "stone"); break
        case "metal": toAdd = gatherers(entities, "metal"); break
    }
    g_Selection.reset();
    g_Selection.addList(toAdd)
}


function gatherers(entities, resource)
{
    let out = []
	for (let ent of entities)
    {
        if (unitFilters["isUnit"](ent)&&hasClass(GetEntityState(ent), "Worker")&&!unitFilters["isIdle"](ent))
        {
            for (let order of GetEntityState(ent).unitAI["orders"])
            {
                if (order["type"] === "Gather"&&order.data.type.generic === resource)
                {
                    out.push(+ent)
                    break
                }
            }
        }
    }
    return out
}

function men(entities)
{   
    let out = []
    for (let ent of entities)
    {
        if (unitFilters["isUnit"](ent)&&!hasClass(GetEntityState(ent), "FemaleCitizen"))
        {
            out.push(+ent)
        }
    }
    return out
}
function units(entities)
{
    let out = []
    for (let ent of entities)
    {
        if (unitFilters["isUnit"](ent))
        {
            out.push(+ent)
        }
    }
    return out
}
function warriors(entities)
{
    let out = []
    for (let ent of entities)
    {
        if (unitFilters["isUnit"](ent)&&!hasClass(GetEntityState(ent), "Worker"))
        {
            out.push(+ent)
        }
    }
    return out
}
function idle(entities)
{
    let out = []
    for (let ent of entities)
    {
        if (unitFilters["isIdle"](ent))
        {
            out.push(+ent)
        }
    }
    return out
}
function wounded(entities)
{
    let out = []
    for (let ent of entities)
    {
        let entState = GetEntityState(ent);
        if (hasClass(entState, "Unit")&&entState.hitpoints < entState.maxHitpoints)
        {
            out.push(+ent)
        }
    }
    return out
}
function buildings(entities)
{
    let out = []
    for (let ent of entities)
    {
        if
        (
            GetEntityState(ent).identity&&
            !unitFilters["isUnit"](ent)&&
            !hasClass(GetEntityState(ent), "Formation")
        )
        {
            out.push(+ent)
        }
    }
    return out
}

function select_all_load()
{
    if
    (
        Engine.GetHotkeyMap()["select_all.units"] === undefined&&
        Engine.GetHotkeyMap()["select_all.men"] === undefined&&
        Engine.GetHotkeyMap()["select_all.buildings"] === undefined&&
        Engine.GetHotkeyMap()["select_all.warriors"] === undefined&&
        Engine.GetHotkeyMap()["select_all.idle"] === undefined&&
        Engine.GetHotkeyMap()["select_all.wounded"] === undefined
    )
    {
        (new SelectAllNoHotkeySet()).display()
    }
    delete Engine.GetGUIObjectByName("selectAll").onTick
}