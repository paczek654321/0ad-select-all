function init(){}

function select_all_count_selects()
{
    Engine.GetGUIObjectByName("select_all_count_dialog").hidden = true
    let size = Number(Engine.GetGUIObjectByName("select_all_count_label").caption)
    let selection = g_Selection.toList()
    let out = [];
    let idle_flg = Engine.GetGUIObjectByName("select_all_idle_chk").checked;
    let food_flg = Engine.GetGUIObjectByName("select_all_food_chk").checked;
    let wood_flg = Engine.GetGUIObjectByName("select_all_wood_chk").checked;
    let stone_flg = Engine.GetGUIObjectByName("select_all_stone_chk").checked;
    let metal_flg = Engine.GetGUIObjectByName("select_all_metal_chk").checked;

    if (idle_flg || food_flg || wood_flg || stone_flg || metal_flg) {
        if (idle_flg) out.push(...idle(selection));  
        if (food_flg) out.push(...gatherers(selection, "food"));  
        if (wood_flg) out.push(...gatherers(selection, "wood"));  
        if (stone_flg) out.push(...gatherers(selection, "stone"));  
        if (metal_flg) out.push(...gatherers(selection, "metal"));  
    }
    else {
        out = selection;
    }
    if (!Engine.GetGUIObjectByName("select_all_chk").checked) {
        size = Math.min(size, out.length);
        out = out.slice(0, size);
    }
    g_Selection.reset();
    g_Selection.addList(out);
}
function select_all_count_change(value)
{
    let obj = Engine.GetGUIObjectByName("select_all_count_label")
    obj.caption = Number(obj.caption)+value
}
function select_all_count_toggle()
{
    let count_lbl = Engine.GetGUIObjectByName("select_all_count_label");
    let arrow_up = Engine.GetGUIObjectByName("select_all_arrow_up");
    let arrow_down = Engine.GetGUIObjectByName("select_all_arrow_down");

    count_lbl.enabled = !Engine.GetGUIObjectByName("select_all_chk").checked;
    arrow_up.enabled = count_lbl.enabled;
    arrow_down.enabled = count_lbl.enabled;
}
function select_all_count_cancel()
{
    Engine.GetGUIObjectByName("select_all_count_dialog").hidden = true;
}