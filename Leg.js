
var numberofLegs = 0 ;

var views = new Object();

var aView = createFixView() ;
views["fix"] = aView ;
var aView = createFloatView() ;
views["float"] = aView ;
var aView = createBondView() ;
views["bond"] = aView ;
var aView = createRESView() ;
views["res"] = aView ;


var buildings = ["16 Bennett", "20 Park Avenue","609 5th Avenue"] ;


function addLeg()
{
   var leg = createLeg() ;
    
   leg.addEventListener("change", handleChangeEvent) ;
}


function createFixView()
{
    var div = document.createElement('div') ;
    
    div.className = "assettypeview" ;
        
    
    var element = document.createElement('Label') ;
    element.setAttribute("for", "startdate" )
    element.className = "label" ;
    element.innerHTML = "Start date" ;
    div.appendChild(element) ;
  
    element = document.createElement('input') ;
    element.className = "field" ;
    element.type = "text" ;
    element.value = "mm/dd/yy" ;
    element.name = 'startdate' ;
    div.appendChild(element) ;
   
    var element = document.createElement('Label') ;
    element.setAttribute("for", "maturitydate" )
    element.className = "label" ;
    element.innerHTML = "Maturity date" ;
    div.appendChild(element) ;
  
    element = document.createElement('input') ;
    element.className = "field" ;
    element.type = "text" ;
    element.value = "mm/dd/yy" ;
    element.name = 'maturityDate' ;
    element.id = "maturitydate" ;
    div.appendChild(element) ;

    var element = document.createElement('Label') ;
    element.setAttribute("for", "notional" )
    element.className = "label" ;
    element.innerHTML = "Notional" ;
    div.appendChild(element) ;
  
    element = document.createElement('input') ;
    element.className = "field" ;
    element.type = "text" ;
    element.value = "1000000000" ;
    element.name = 'notional' ;
    div.appendChild(element) ;
    
  
    var element = document.createElement('Label') ;
    element.setAttribute("for", "currency" )
    element.className = "label" ;
    element.innerHTML = "Currency" ;
    div.appendChild(element) ;
  
    element = document.createElement('input') ;
    element.className = "field" ;
    element.type = "text" ;
    element.value = "USD" ;
    element.name = 'currency' ;
    
    div.appendChild(element) ;
    var element = document.createElement('Label') ;
    element.setAttribute("for", "coupon" )
    element.className = "label" ;
    element.innerHTML = "Coupon (%)" ;
    div.appendChild(element) ;
  
    element = document.createElement('input') ;
    element.className = "field" ;
    element.type = "text" ;
    element.value = "0" ;
    element.name = 'coupon' ;
    div.appendChild(element) ;

    return div ;
    
}

function createFloatView()
{
    var div = document.createElement('div') ;
    
    div.className = "assettypeview" ;
        
    
    var element = document.createElement('Label') ;
    element.setAttribute("for", "startdate" )
    element.className = "label" ;
    element.innerHTML = "Start date" ;
    div.appendChild(element) ;
  
    element = document.createElement('input') ;
    element.className = "field" ;
    element.type = "text" ;
    element.value = "mm/dd/yy" ;
    element.name = 'startdate' ;
    element.id = "startdate" ;
    div.appendChild(element) ;
   
    var element = document.createElement('Label') ;
    element.setAttribute("for", "maturitydate" )
    element.className = "label" ;
    element.innerHTML = "Maturity date" ;
    div.appendChild(element) ;
  
    element = document.createElement('input') ;
    element.className = "field" ;
    element.type = "text" ;
    element.value = "mm/dd/yy" ;
    element.name = 'maturityDate' ;
    div.appendChild(element) ;

    var element = document.createElement('Label') ;
    element.setAttribute("for", "notional" )
    element.className = "label" ;
    element.innerHTML = "Notional" ;
    div.appendChild(element) ;
  
    element = document.createElement('input') ;
    element.className = "field" ;
    element.type = "text" ;
    element.value = "1000000000" ;
    element.name = 'notional' ;
    div.appendChild(element) ;
    
    var element = document.createElement('Label') ;
    element.setAttribute("for", "index" )
    element.className = "label" ;
    element.innerHTML = "Index" ;
    div.appendChild(element) ;
  
    element = document.createElement('input') ;
    element.className = "field" ;
    element.type = "text" ;
    element.value = "LIBOR" ;
    element.name = 'index' ;
    
    div.appendChild(element) ;
    var element = document.createElement('Label') ;
    element.setAttribute("for", "spread" )
    element.className = "label" ;
    element.innerHTML = "Spread (bps)" ;
    div.appendChild(element) ;
  
    element = document.createElement('input') ;
    element.className = "field" ;
    element.type = "text" ;
    element.value = "0" ;
    element.name = 'spread' ;
    div.appendChild(element) ;

    return div ;
    
}

function createBondView()
{
    var div = document.createElement('div') ;
    
    div.className = "assettypeview" ;
        
    
    var element = document.createElement('Label') ;
    element.setAttribute("for", "symbol" )
    element.className = "label" ;
    element.innerHTML = "Symbol" ;
    div.appendChild(element) ;
  
    
    var select = document.createElement('select') ;
    select.id = "bondsymbol" ;
    select.name = 'bondsymbol' ;
//    select.setAttribute('data-legname', title) ;

    div.appendChild(select) ;
    
    var option1 = document.createElement('option') ;
    option1.value = "US2Y" ;
    option1.text = "US2Y" ;
    select.appendChild(option1) ;

    var option1 = document.createElement('option') ;
    option1.value = "US5Y" ;
    option1.text = "US5Y" ;
    select.appendChild(option1) ;

    var option2 = document.createElement('option') ;
    option2.value = "US10Y" ;
    option2.text = "US10Y" ;
    select.appendChild(option2) ;
    
    return div ;
    
}


function createRESView()
{
    var div = document.createElement('div') ;
    
    
    div.className = "assettypeview" ;
        
      
    var element = document.createElement('Label') ;
    element.setAttribute("for", "building" )
    element.className = "label" ;
    element.innerHTML = "Building" ;
    div.appendChild(element) ;
    
  
    var select = document.createElement('select') ;
    select.id = "buildingname" ;
    select.name = 'buildingname' ;
    div.appendChild(select) ;
    
    var option1 = document.createElement('option') ;
    option1.value = "16_Bennett" ;
    option1.text = "16 Bennett" ;
    select.appendChild(option1) ;

    var option1 = document.createElement('option') ;
    option1.value = "609_5th_Ave" ;
    option1.text = "609 5th Ave" ;
    select.appendChild(option1) ;

    var option2 = document.createElement('option') ;
    option2.value = "Pet_Worth" ;
    option2.text = "Pet Worth" ;
    select.appendChild(option2) ;
    
    select.value = "16_Bennett" ;

    return div ;
}


function createLeg()
{
    var title ;
    var leg = document.createElement("div") ;
     leg.className = "leg" ;
    numberofLegs += 1 ;
    title = `Leg${numberofLegs}` ;
    leg.innerHTML= title ;
    leg.setAttribute('data-legname', title) ;
    
    leg.appendChild(createMarketParamSection()) ;
    leg.appendChild(createMetricsSection()) ;    
    leg.appendChild(createAssetTypeSection(title)) ;
    leg.appendChild(createGenerateCashflowsButton(leg)) ;

    document.getElementById('legcontainer').appendChild(leg);
    

    return leg ;
}

function createMarketParamSection()
{
    var  mkt = document.createElement('div') ;
    
    mkt.className = "marketparameters" ;
        
    
    var element = document.createElement('Label') ;
    element.setAttribute("for", "discountingcurve" )
    element.className = "label" ;
    element.innerHTML = "Discounting Curve" ;
    mkt.appendChild(element) ;
  
    element = document.createElement('input') ;
    element.className = "field" ;
    element.type = "text" ;
    element.value = "discounting curve" ;
    element.name = 'discountingcurve' ;
    mkt.appendChild(element) ;
    
    mkt.appendChild(document.createElement('br')) ;
    
    element = document.createElement('label') ;
    element.className = "label" ;
    element.innerHTML = "Forward Curve" ;
    element.htmlFor = "forwardcurve" ;
    mkt.appendChild(element) ;
  
    element = document.createElement('input') ;
    element.className = "field" ;
    element.type = "text" ;
    element.value = "growth curve" ;
    element.name = 'forwardcurve' ;
    mkt.appendChild(element) ;
    
    
    mkt.appendChild(document.createElement('br')) ;
    
     element = document.createElement('label') ;
    element.className = "label" ;
    element.innerHTML = "Model date" ;
    element.htmlFor = "modeldate" ;
    mkt.appendChild(element) ;

    element = document.createElement('input') ;
    element.className = "field" ;
    element.type = "text" ;
    element.value = "mm/dd/yy" ;
    element.name = 'modeldate' ;
    element.id = 'modeldate' ;
    mkt.appendChild(element) ;
    
    
    mkt.appendChild(document.createElement('br')) ;
    

    
    return mkt ;

}

//function createAssetTypeSection()
//{
//     var div = document.createElement('button') ;
//    div.style.background = 'blue' ;
//    div.appendChild(document.createElement('br')) ;
//
//    return div ;
//   
//}

function createMetricsSection()
{
    var  metrics = document.createElement('div') ;
    
    metrics.className = "metrics" ;
        
    
    var element = document.createElement('Label') ;
    element.setAttribute("for", "pv" )
    element.className = "label" ;
    element.innerHTML = "PV" ;
    metrics.appendChild(element) ;
  
    element = document.createElement('input') ;
    element.className = "field" ;
    element.type = "text" ;
    element.value = "0.0" ;
    element.name = 'pv' ;
    metrics.appendChild(element) ;
    
    metrics.appendChild(document.createElement('br')) ;
    
    var element = document.createElement('Label') ;
    element.setAttribute("for", "irr" )
    element.className = "label" ;
    element.innerHTML = "IRR" ;
    metrics.appendChild(element) ;
  
    element = document.createElement('input') ;
    element.className = "field" ;
    element.type = "text" ;
    element.value = "0.0" ;
    element.name = 'irr' ;
    metrics.appendChild(element) ;
    
    metrics.appendChild(document.createElement('br')) ;
    
    var element = document.createElement('Label') ;
    element.setAttribute("for", "totalreturn" )
    element.className = "label" ;
    element.innerHTML = "Total return" ;
    metrics.appendChild(element) ;
  
    element = document.createElement('input') ;
    element.className = "field" ;
    element.type = "text" ;
    element.value = "0.0" ;
    element.name = 'totalreturn' ;
    metrics.appendChild(element) ;
    
    metrics.appendChild(document.createElement('br')) ;

    
    return metrics ;

}

function createAssetTypeSection(title)
{
    var  asset = document.createElement('div') ;
    asset.className = "assetparameters" ;
    

    var option ;
        
    
    var element = document.createElement('Label') ;
    element.setAttribute("for", "assetType" )
    element.className = "label" ;
    element.innerHTML = "Asset type" ;
    asset.appendChild(element) ;
  
    var select = document.createElement('select') ;
    select.id = "assettype" ;
    select.name = 'assetType' ;
    select.setAttribute('data-legname', title) ;

    asset.appendChild(select) ;

    
    var option1 = document.createElement('option') ;
    option1.value = "fix" ;
    option1.text = "Fix" ;
    select.appendChild(option1) ;

    var option1 = document.createElement('option') ;
    option1.value = "float" ;
    option1.text = "Float" ;
    select.appendChild(option1) ;

    var option2 = document.createElement('option') ;
    option2.value = "bond" ;
    option2.text = "Bond" ;
    select.appendChild(option2) ;

//    var option3 = document.createElement('option') ;
//    option3.value = "irfuture" ;
//    option3.text = "IR Future" ;
//    select.appendChild(option3) ;
//
//    var option4 = document.createElement('option') ;
//    option4.value = "bondfuture" ;
//    option4.text = "Bond Future" ;
//    select.appendChild(option4) ;
//    
//    var option5 = document.createElement('option') ;
//    option5.value = "cdsIndex" ;
//    option5.text = "Cds Index" ;
//    select.appendChild(option5) ;
    
    var option6 = document.createElement('option') ;
    option6.value = "res" ;
    option6.text = "RE Security" ;
    select.appendChild(option6) ;

    element = document.createElement('div') ;
    element.id = "assetview" ;
    element.innerHTML = "" ;
    asset.appendChild(element) ;

    select.value = "res" ;
    return asset ;
}

function assetViewOfType(type)
{

    var node = views[type]
    return node.cloneNode(true) ;
}

function changeBuilding()
{
    
}

function handleChangeEvent(event)
{
    var legname ;
    var selectName ;
    
    var leg = event.currentTarget ;
    
    legname = leg.getAttribute('data-legname') ;
    selectName = event.target.getAttribute('data-legname') ;
    
//    alert ('leg name ' + legname) ;
//    alert ('select leg name ' + selectName) ;
    
    if (legname == selectName)

    {
        var nodelist = leg.childNodes ;

        var e = leg.querySelector("#assettype") ;        

        var value = e.value ;

        var node = leg.querySelector("#assetview") ;

        var child = node.lastElementChild ;

        while(child)
        {    node.removeChild(child) ;
            child = node.lastElementChild ;
        }
        
        node.appendChild(assetViewOfType(value)) ;
    }
}

function createGenerateCashflowsButton(leg)
{
    var legName = leg.getAttribute('data-legname') ;
    var gen = document.createElement("button") ;
    gen.className = "generateButton" ;
    gen.id = "generateButton" ;
    gen.innerHTML= "Generate Cashflows" ;
    gen.setAttribute('data-legname', legName) ;
//    alert(legName) ;
    leg.addEventListener("click", (e)=>generateCashflows(e)) ;

    return gen ;

}

function generateCashflows(event)
{
    var legName ;
    var selectLegName ;
    var symbol;
    
    if ((event.target.id) == "generateButton")
    {
        legName = event.currentTarget.getAttribute('data-legname') ;
        selectLegName = event.target.getAttribute('data-legname') ;

//        alert('Gen CF legname ' + legName) ;
//        alert('Gen CF select legname ' + selectLegName) ;

        if (legName == selectLegName)
        {

           if (event.target == event.currentTarget.querySelector("#generateButton"))
            {
                var title = event.currentTarget.getAttribute('data-legname') ;
                ;
                var assetType = event.currentTarget.querySelector("#assettype").value ;

                if (assetType == "bond")
                {
                    symbol = event.currentTarget.querySelector("#bondsymbol").value ;
                }
                
                if (assetType == "res")
                {
                    symbol = event.currentTarget.querySelector("#buildingname").value ;
                }

                var file = cashFlowFileForAssetType(assetType, symbol) ;
            
                var cols = columnsForAssetType(assetType) ;


                addTab(title) ;
                 
//                clear columns if the grid is already created
//                  if(w2ui[title] != undefined)
//                
//                  {
//                      $(function () {
//                        w2ui[title].columns = [] ;
//                        w2ui[title].clear();
//                      }) ;
//                  }
           
                $(function () {
                        

                        $("#"+title).w2grid({
                            name:title ,
                    //        url: 'fixcf.json',
                            method: 'GET',

                            columns:cols,

                        });
                    
// set columns to be cols if the grid was already created before this method was called
                        w2ui[title].columns = cols;
                        w2ui[title].refresh();
                    
                        w2ui[title].load(file);
                    });


                selectTab(title) ;
            }
        }
        else
        {
            console.log("click trapped in wrong leg") ;
        }
    }
}
 

function addTab(title) 
{
    
    var tab = w2ui.tabs.get(title) ;
    
    if (!tab)
    {
        w2ui.tabs.add({id: title, text: title });

        var d = document.createElement('div') ;
        d.id = title ;
        d.className = "tab" ;
        document.getElementById("tab-bar").appendChild(d) ;
    }
//    else
//    {
//        $(function ()
//        {
//            alert('clear') ;
//            w2ui[title].reset();
//        }) ;
//       
//    }
}

function selectTab(name)
{
    w2ui['tabs'].select(name);
    $('#tab-bar .tab').hide();
    $('#tab-bar #' + name).show();

}

function columnsForAssetType(assetType)
{
    
    var cols ;
            
    switch (assetType)
    {
            
            case "fix":
        {
            cols = [
                    { field: 'type', caption: 'Asset Type', size: '100px', resizable: true},
                    { field: 'sdate', caption: 'Start Date', size: '100px' , type:'date',resizable: true, editable: { type: 'date' } },
                    { field: 'mdate', caption: 'Maturity Date', size: '100px' , type:'date',resizable: true, editable: { type: 'date' } },
                    { field: 'notional', caption: 'Notional', size: '100px' , resizable: true,  editable: { type: 'int' } },
                    { field: 'coupon', caption: 'Coupon (%)', size: '100px' , type:'date',resizable: true, editable: { type: 'int' } },
                    { field: 'currency', caption: 'Currency', size: '100px' , type:'date',resizable: true, editable: { type: 'text' } }
                ] ;
            break ;
        }

        case "float":
        {
            cols = [
                    { field: 'type', caption: 'Asset Type', size: '100px',resizable: true},
                    { field: 'resetdate', caption: 'Reset Date', type:'date',size: '100px',resizable: true, editable: { type: 'date' } },
                    { field: 'sdate', caption: 'Start Date', type:'date',size: '100px',resizable: true, editable: { type: 'date' } },
                    { field: 'mdate', caption: 'Maturity Date', type:'date',size: '100px',resizable: true, editable: { type: 'date' } },
                    { field: 'resetindex', caption: 'Index', type:'date',size: '100px',resizable: true, editable: { type: 'text' } },
                    { field: 'spread', caption: 'Spread (bps)', type:'date',size: '100px',resizable: true, editable: { type: 'int' } },
                    { field: 'notional', caption: 'Notional',resizable: true,  size: '100px',editable: { type: 'int' } },
                    { field: 'currency', caption: 'Currency', type:'date',size: '100px', resizable: true, editable: { type: 'text' } }
            ] ;
            break ;
        }
            
                
        case "bond" :    
        {
            cols = [
                    { field: 'type', caption: 'Asset Type', size: '100px', resizable: true},
                    { field: 'mdate', caption: 'Maturity Date', size: '100px' , type:'date',resizable: true, editable: { type: 'date' } },
                    { field: 'notional', caption: 'Notional', size: '100px' , resizable: true,  editable: { type: 'int' } },
                    { field: 'coupon', caption: 'Coupon (%)', size: '100px' , type:'date',resizable: true, editable: { type: 'int' } },
                    { field: 'currency', caption: 'Currency', size: '100px' , type:'date',resizable: true, editable: { type: 'text' } }
                ] ;
            break ;
        }
        case "res" :    
        {
            cols = [
                    { field: 'type', caption: 'Asset Type', size: '100px', resizable: true},
                    { field: 'mdate', caption: 'Maturity Date', size: '100px' , type:'date',resizable: true, editable: { type: 'date' } },
                    { field: 'notional', caption: 'Notional', size: '100px' , resizable: true,  editable: { type: 'int' } },
                    { field: 'currency', caption: 'Currency', size: '100px' , type:'date',resizable: true, editable: { type: 'text' } }
                ] ;
            break ;
        }


        default:
        {
            alert('default in columnsForAssetType') ;
            cols = [] ;
        }
    }
    return cols ;
}

function cashFlowFileForAssetType(assetType, symbol)
{
    var file ;
     switch (assetType)
    {
        
        case "fix":
        {
            file = "fixcf.json" ;
            break ;
        }
        case "float":
        {
            file = "floatcf.json" ;
            break ;
        }
        case "bond":
        {
            file = `${symbol}.json` ;
            break ;
        }
        case "res":
        {
            file = `${symbol}.json` ;
            break ;
        }

        default:
        {
            file = "junk.json" ;
            alert ("Missing file") ;
            break ;
          
        }
    }
    return file ;
}

