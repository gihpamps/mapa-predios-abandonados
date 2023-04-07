ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:31982").setExtent([777031.899933, 9838172.367356, 778759.968196, 9839095.734303]);
var wms_layers = [];

var lyr_ORTOMOSAICO_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "ORTOMOSAICO",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ORTOMOSAICO_0.png",
    attributions: ' ',
                                projection: 'EPSG:31982',
                                alwaysInRange: true,
                                imageExtent: [777014.900500, 9836916.081100, 778777.300500, 9839242.981100]
                            })
                        });
var format_CidadeVelha_1 = new ol.format.GeoJSON();
var features_CidadeVelha_1 = format_CidadeVelha_1.readFeatures(json_CidadeVelha_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_CidadeVelha_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CidadeVelha_1.addFeatures(features_CidadeVelha_1);
var lyr_CidadeVelha_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CidadeVelha_1, 
                style: style_CidadeVelha_1,
                interactive: false,
                title: '<img src="styles/legend/CidadeVelha_1.png" /> Cidade Velha'
            });
var format_Logradouro_2 = new ol.format.GeoJSON();
var features_Logradouro_2 = format_Logradouro_2.readFeatures(json_Logradouro_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Logradouro_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Logradouro_2.addFeatures(features_Logradouro_2);
var lyr_Logradouro_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Logradouro_2, 
                style: style_Logradouro_2,
                interactive: false,
                title: '<img src="styles/legend/Logradouro_2.png" /> Logradouro'
            });
var format_PrdiosAbandonados_3 = new ol.format.GeoJSON();
var features_PrdiosAbandonados_3 = format_PrdiosAbandonados_3.readFeatures(json_PrdiosAbandonados_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_PrdiosAbandonados_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrdiosAbandonados_3.addFeatures(features_PrdiosAbandonados_3);
var lyr_PrdiosAbandonados_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrdiosAbandonados_3, 
                style: style_PrdiosAbandonados_3,
                interactive: true,
    title: 'Prédios Abandonados<br />\
    <img src="styles/legend/PrdiosAbandonados_3_0.png" /> Arruinado<br />\
    <img src="styles/legend/PrdiosAbandonados_3_1.png" /> Em Arruinamento<br />\
    <img src="styles/legend/PrdiosAbandonados_3_2.png" /> Precário<br />\
    <img src="styles/legend/PrdiosAbandonados_3_3.png" /> Regular<br />\
    <img src="styles/legend/PrdiosAbandonados_3_4.png" /> Bom<br />'
        });

lyr_ORTOMOSAICO_0.setVisible(true);lyr_CidadeVelha_1.setVisible(true);lyr_Logradouro_2.setVisible(true);lyr_PrdiosAbandonados_3.setVisible(true);
var layersList = [lyr_ORTOMOSAICO_0,lyr_CidadeVelha_1,lyr_Logradouro_2,lyr_PrdiosAbandonados_3];
lyr_CidadeVelha_1.set('fieldAliases', {'STRING': 'STRING', 'COD_BAIRRO': 'COD_BAIRRO', });
lyr_Logradouro_2.set('fieldAliases', {'codidouro': 'codidouro', 'totaadras': 'totaadras', 'procnacao': 'procnacao', 'categoria': 'categoria', 'tipodouro': 'tipodouro', 'titudouro': 'titudouro', 'nomedouro': 'nomedouro', 'codinicial': 'codinicial', 'codiefinal': 'codiefinal', 'tipoerior': 'tipoerior', 'tituerior': 'tituerior', 'nomeerior': 'nomeerior', 'dataastro': 'dataastro', 'dataizacao': 'dataizacao', 'codidouro1': 'codidouro1', 'codiicipio': 'codiicipio', 'LOGRADOURO': 'LOGRADOURO', });
lyr_PrdiosAbandonados_3.set('fieldAliases', {'Name': 'Name', 'Endereco': 'Endereco', 'Fotografia': 'Fotografia', 'Estado': 'Estado', });
lyr_CidadeVelha_1.set('fieldImages', {'STRING': 'TextEdit', 'COD_BAIRRO': 'TextEdit', });
lyr_Logradouro_2.set('fieldImages', {'codidouro': 'TextEdit', 'totaadras': 'TextEdit', 'procnacao': 'TextEdit', 'categoria': 'TextEdit', 'tipodouro': 'TextEdit', 'titudouro': 'TextEdit', 'nomedouro': 'TextEdit', 'codinicial': 'TextEdit', 'codiefinal': 'TextEdit', 'tipoerior': 'TextEdit', 'tituerior': 'TextEdit', 'nomeerior': 'TextEdit', 'dataastro': 'TextEdit', 'dataizacao': 'TextEdit', 'codidouro1': 'TextEdit', 'codiicipio': 'TextEdit', 'LOGRADOURO': 'TextEdit', });
lyr_PrdiosAbandonados_3.set('fieldImages', {'Name': 'TextEdit', 'Endereco': 'TextEdit', 'Fotografia': 'ExternalResource', 'Estado': 'TextEdit', });
lyr_CidadeVelha_1.set('fieldLabels', {'STRING': 'no label', 'COD_BAIRRO': 'no label', });
lyr_Logradouro_2.set('fieldLabels', {'codidouro': 'no label', 'totaadras': 'no label', 'procnacao': 'no label', 'categoria': 'no label', 'tipodouro': 'no label', 'titudouro': 'no label', 'nomedouro': 'no label', 'codinicial': 'no label', 'codiefinal': 'no label', 'tipoerior': 'no label', 'tituerior': 'no label', 'nomeerior': 'no label', 'dataastro': 'no label', 'dataizacao': 'no label', 'codidouro1': 'no label', 'codiicipio': 'no label', 'LOGRADOURO': 'no label', });
lyr_PrdiosAbandonados_3.set('fieldLabels', {'Name': 'no label', 'Endereco': 'no label', 'Fotografia': 'header label', 'Estado': 'no label', });
lyr_PrdiosAbandonados_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});