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
    let keybinds =
    [
        "select_all.units",
		"select_all.men",
		"select_all.idle",
		"select_all.wounded",
		"select_all.warriors",
		"select_all.buildings",
		"select_all.food",
		"select_all.wood",
        "select_all.stone",
        "select_all.metal",
        "select_all.count"
    ]
    let none_set = true
    for (let bind of keybinds)
    {
        if (Engine.GetHotkeyMap()[bind] !== undefined)
        {
            none_set = false
            break
        }
    }
    if (none_set)
    {
        (new SelectAllNoHotkeySet()).display()
    }
    delete Engine.GetGUIObjectByName("selectAll").onTick
}

async function select_all_count_show_popup()
{
    //Engine.PushGuiPage("page_select_all_choose_number.xml")
    Engine.GetGUIObjectByName("select_all_count_dialog").hidden = false
}