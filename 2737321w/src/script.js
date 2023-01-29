mapboxgl.accessToken =
"pk.eyJ1IjoiYWxpYTc3NzI1IiwiYSI6ImNsY3EzbDV2dDAyNXYzb2xoMDY2N3ZnZXAifQ.HJ5beEwsWGa_dHmD4ts_bA";

const style_2000 = "mapbox://styles/alia77725/cldhf7a8b000x01lxxk8orl7q";
const style_2001 = "mapbox://styles/alia77725/cldhfjh79000y01o6s1u194vc";
const style_2002 = "mapbox://styles/alia77725/cldhfkt90000x01pbdvbc42yw";
const style_2003 = "mapbox://styles/alia77725/cldhfmjh6004k01rvwop0sf6m";
const style_2004 = "mapbox://styles/alia77725/cldhfqgnd00b901oeuqkef7s8";
const style_2005 = "mapbox://styles/alia77725/cldhfrmgv000h01kdym4t0w75";
const style_2006 = "mapbox://styles/alia77725/cldhfsl1o000n01lablhmwin2";
const style_2007 = "mapbox://styles/alia77725/cldhfteob000i01kdcjczcg4f";
const style_2008 = "mapbox://styles/alia77725/cldhfu26a00ab01r0svjo7zq5";
const style_2009 = "mapbox://styles/alia77725/cldhfvabu002y01n0gshoucf4";
const style_2010 = "mapbox://styles/alia77725/cldhfxr52000p01muuk0nnjnf";
const style_2011 = "mapbox://styles/alia77725/cldhfyjhf001n01s0f9rj4btx";
const style_2014 = "mapbox://styles/alia77725/cldhfznar000j01kdvfd63t05";
const style_2015 = "mapbox://styles/alia77725/cldhg2lty002001przf1yula8";
const style_2016 = "mapbox://styles/alia77725/cldhg3dnj001p01s0v55u6dq1";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: style_2000,
  center: [-120, 36],
  zoom: 4
});
const layerList = document.getElementById("menu");
const inputs = layerList.getElementsByTagName("input");

for (const input of inputs) {
  input.onclick = (layer) => {
    if (layer.target.id == "style_2000") {
      map.setStyle(style_2000);
    }
    
    if (layer.target.id == "style_2001") {
      map.setStyle(style_2001);
          }
    if (layer.target.id == "style_2002") {
      map.setStyle(style_2002);
    }
    if (layer.target.id == "style_2003") {
      map.setStyle(style_2003);
    }
    if (layer.target.id == "style_2004") {
      map.setStyle(style_2004);
    }
    if (layer.target.id == "style_2005") {
      map.setStyle(style_2005);
    }
    if (layer.target.id == "style_2006") {
      map.setStyle(style_2006);
    }
    if (layer.target.id == "style_2007") {
      map.setStyle(style_2007);
    }
    if (layer.target.id == "style_2008") {
      map.setStyle(style_2008);
    }
    if (layer.target.id == "style_2009") {
      map.setStyle(style_2009);
    }
    if (layer.target.id == "style_2010") {
      map.setStyle(style_2010);
    }
    if (layer.target.id == "style_2011") {
      map.setStyle(style_2011);
    }
    if (layer.target.id == "style_2014") {
      map.setStyle(style_2014);
    }
    if (layer.target.id == "style_2015") {
      map.setStyle(style_2015);
    }
    if (layer.target.id == "style_2016") {
      map.setStyle(style_2016);
    }
  };
}


