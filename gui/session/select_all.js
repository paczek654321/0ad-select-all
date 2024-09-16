function select_all()
{
    let entities = Engine.GuiInterfaceCall("getPlayerEntities")
    let toAdd = []
    for (let ent of entities)
    {
        if (unitFilters["isUnit"](ent))
        {
            toAdd.push(+ent)
        }
    }
    g_Selection.addList(toAdd)
}