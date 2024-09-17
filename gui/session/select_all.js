function select_all(filter)
{
    let entities = Engine.GuiInterfaceCall("getPlayerEntities")
    let toAdd = []
    switch(filter)
    {
        case "men": toAdd = men(entities); break
        case "units": toAdd = units(entities); break
        case "buildings": toAdd = buildings(entities); break
    }
    g_Selection.reset();
    g_Selection.addList(toAdd)
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
function buildings(entities)
{
    let out = []
    for (let ent of entities)
    {
        if (!unitFilters["isUnit"](ent))
        {
            out.push(+ent)
        }
    }
    return out
}

function select_all_load()
{
    (new SelectAllNoHotkeySet()).display()
    if
    (
        Engine.GetHotkeyMap()["select_all.units"] === undefined&&
        Engine.GetHotkeyMap()["select_all.men"] === undefined&&
        Engine.GetHotkeyMap()["select_all.buildings"] === undefined
    )
    {
        warn("Select all: None of the keybinds are set!")
    }
}