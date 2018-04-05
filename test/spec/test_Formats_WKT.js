import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

import WKT from "../../src/Formats/WKT";

describe("-- Test for WKT --", function () {

    var strWktLine = "LINESTRING (2.416907 48.846577, 2.416916 48.846613)";
    var strWktPolygon = "POLYGON((-34 127,-34.88593094075315 126.9140625,-34.81380331711314 126.9140625,-34.52466147177172 126.9140625,-34.089061315849946 126.9140625,-33.72433966174759 126.9140625,-33.28461996888768 126.9140625,-32.990235559651055 126.9140625,-32.76880048488168 126.9140625,-32.472695022061494 126.9140625,-32.10118973232094 126.9140625,-31.653381399663985 126.9140625,-31.12819929911197 126.9140625,-30.751277776257812 126.9140625,-30.44867367928755 126.9140625,-30.145127183376115 126.9140625,-29.91685223307016 126.9140625,-29.688052749856787 126.9140625,-29.382175075145277 126.9140625,-29.07537517955836 126.9140625,-28.613459424004414 126.9140625,-28.226970038918324 126.9140625,-27.839076094777802 126.9140625,-27.44979032978423 127.08984375,-26.980828590472093 127.08984375,-26.509904531413927 127.177734375,-26.11598592533351 127.265625,-25.79989118208832 127.265625,-25.641526373065755 127.265625,-25.562265014427492 127.265625,-25.48295117535531 127.265625,-25.40358497318669 127.265625,-25.40358497318669 127.265625,-25.40358497318669 127.353515625,-25.40358497318669 127.353515625,-25.40358497318669 127.353515625,-25.40358497318669 127.353515625,-25.40358497318669 127.44140625,-25.40358497318669 127.44140625,-25.40358497318669 127.6171875,-25.40358497318669 127.880859375,-25.40358497318669 128.408203125,-25.40358497318669 129.375,-25.40358497318669 131.044921875,-25.40358497318669 133.330078125,-25.40358497318669 135,-25.40358497318669 136.23046875,-25.79989118208832 137.021484375,-26.11598592533351 137.63671875,-26.352497858154 138.251953125,-26.588527147308625 138.69140625,-26.745610382199008 138.955078125,-26.82407078047018 139.130859375,-26.980828590472093 139.21875,-27.059125784374054 139.39453125,-27.215556209029675 139.482421875,-27.29368922485238 139.5703125,-27.371767300523032 139.658203125,-27.371767300523032 139.74609375,-27.371767300523032 139.74609375,-27.371767300523032 139.833984375,-27.371767300523032 139.833984375,-27.371767300523032 139.833984375,-27.44979032978423 139.833984375,-27.44979032978423 139.833984375,-27.527758206861897 139.833984375,-27.527758206861897 139.833984375,-27.605670826465456 139.833984375,-27.605670826465456 139.833984375,-27.683528083787756 139.833984375,-27.76132987450523 139.833984375,-27.839076094777802 139.833984375,-27.994401411046145 139.833984375,-28.30438068296277 139.833984375,-28.613459424004414 139.833984375,-28.998531814051795 139.833984375,-29.382175075145277 139.833984375,-29.688052749856787 139.833984375,-29.91685223307016 139.833984375,-30.221101852485983 139.833984375,-30.600093873550072 139.833984375,-30.826780904779774 139.833984375,-31.05293398570514 139.833984375,-31.203404950917385 139.833984375,-31.428663117358596 139.833984375,-31.653381399663985 139.833984375,-32.026706293336126 139.833984375,-32.32427558887655 139.833984375,-32.8426736319543 139.833984375,-33.21111647241684 139.833984375,-33.50475906922606 139.833984375,-33.72433966174759 139.833984375,-33.9433599465788 139.833984375,-34.089061315849946 139.833984375,-34.30714385628803 139.833984375,-34.452218472826544 139.833984375,-34.59704151614416 139.833984375,-34.74161249883172 139.833984375,-34.95799531086791 139.833984375,-35.17380831799957 139.833984375,-35.6037187406973 139.833984375,-36.03133177633187 139.833984375,-36.45663601159621 139.833984375,-36.879620605026766 139.833984375,-37.09023980307207 139.833984375,-37.23032838760386 139.833984375,-37.37015718405751 139.833984375,-37.37015718405751 139.833984375,-37.43997405227057 139.833984375,-37.43997405227057 140.009765625,-37.43997405227057 140.712890625,-37.43997405227057 142.822265625,-37.43997405227057 145.1953125,-36.80928470205938 147.83203125,-36.80928470205938 150.029296875,-36.45663601159621 152.05078125,-36.45663601159621 154.16015625,-36.45663601159621 156.09375,-36.45663601159621 157.8515625,-36.45663601159621 158.90625,-36.45663601159621 159.43359375,-36.45663601159621 159.609375,-36.45663601159621 159.697265625,-36.45663601159621 159.78515625,-36.45663601159621 159.78515625,-36.45663601159621 159.78515625,-36.45663601159621 159.78515625,-36.45663601159621 159.78515625,-36.45663601159621 159.873046875,-36.597889133070204 159.873046875,-36.73888412439431 159.873046875,-37.09023980307207 159.873046875,-37.43997405227057 159.78515625,-37.99616267972812 159.609375,-38.685509760012 159.43359375,-39.70718665682654 159.169921875,-40.31304320888089 159.08203125,-40.78054143186031 158.994140625,-41.11246878918085 158.994140625,-41.37680856570233 158.90625,-41.57436130598912 158.818359375,-41.70572851523751 158.818359375,-41.771311679764054 158.73046875,-41.836827860727134 158.73046875,-41.836827860727134 158.73046875,-41.90227704096369 158.642578125,-41.96765920367816 158.642578125,-41.96765920367816 158.642578125,-41.96765920367816 158.5546875,-41.96765920367816 158.5546875,-41.96765920367816 158.5546875,-41.96765920367816 158.466796875,-41.96765920367816 158.291015625,-41.96765920367816 157.587890625,-41.96765920367816 155.91796875,-41.96765920367816 154.16015625,-41.96765920367816 152.05078125,-41.96765920367816 149.765625,-41.96765920367816 147.83203125,-41.96765920367816 145.986328125,-41.96765920367816 144.755859375,-41.96765920367816 143.701171875,-41.96765920367816 142.294921875,-41.96765920367816 141.15234375,-41.96765920367816 140.09765625,-41.96765920367816 139.130859375,-41.96765920367816 138.603515625,-41.96765920367816 138.251953125,-41.96765920367816 137.98828125,-41.96765920367816 137.8125,-41.96765920367816 137.63671875,-41.96765920367816 137.548828125,-41.96765920367816 137.548828125,-41.96765920367816 137.548828125,-41.96765920367816 137.4609375,-41.96765920367816 137.4609375,-41.96765920367816 137.4609375,-41.90227704096369 137.4609375,-41.836827860727134 137.4609375,-41.70572851523751 137.4609375,-41.64007838467892 137.373046875,-41.37680856570233 137.28515625,-41.11246878918085 137.109375,-40.78054143186031 136.845703125,-40.24599150419902 136.669921875,-39.639537564366705 136.40625,-39.09596293630548 136.23046875,-38.54816542304657 136.0546875,-38.20365531807149 135.966796875,-37.85750715625204 135.87890625,-37.57941251343839 135.791015625,-37.37015718405751 135.703125,-37.16031654673676 135.615234375,-36.949891786813275 135.52734375,-36.80928470205938 135.52734375,-36.66841891894784 135.439453125,-36.52729481454623 135.3515625,-36.38591277287651 135.263671875,-36.17335693522159 135.263671875,-35.96022296929668 135.17578125,-35.7465122599185 135.087890625,-35.38904996691167 134.912109375,-35.2456190942068 134.912109375,-35.02999636902565 134.82421875,-34.74161249883172 134.736328125,-34.59704151614416 134.736328125,-34.52466147177172 134.6484375,-34.452218472826544 134.560546875,-34.37971258046219 134.47265625,-34.37971258046219 134.47265625,-34.30714385628803 134.384765625,-34.30714385628803 134.384765625,-34.30714385628803 134.296875,-34.30714385628803 134.208984375,-34.23451236236984 134.12109375,-34.23451236236984 134.033203125,-34.16181816123038 133.9453125,-34.089061315849946 133.857421875,-34.089061315849946 133.681640625,-34.016241889667015 133.505859375,-34.016241889667015 133.2421875,-34.016241889667015 133.06640625,-34.016241889667015 132.71484375,-34.016241889667015 132.36328125,-34.016241889667015 132.01171875,-34.016241889667015 131.66015625,-34.016241889667015 131.396484375,-34.016241889667015 131.220703125,-34.016241889667015 131.1328125,-34.016241889667015 131.044921875,-34.089061315849946 130.95703125,-34.23451236236984 130.78125,-34.37971258046219 130.693359375,-34.52466147177172 130.517578125,-34.66935854524543 130.4296875,-34.88593094075315 130.4296875,-35.17380831799957 130.341796875,-35.46066995149529 130.166015625,-35.7465122599185 129.990234375,-36.10237644873644 129.90234375,-36.597889133070204 129.638671875,-36.879620605026766 129.55078125,-37.16031654673676 129.375,-37.43997405227057 129.287109375,-37.78808138412046 129.19921875,-37.926867601481334 129.111328125,-37.99616267972812 129.0234375,-38.13455657705411 129.0234375,-38.20365531807149 129.0234375,-38.27268853598096 128.935546875,-38.34165619279594 128.935546875,-38.41055825094608 128.935546875,-38.47939467327644 128.84765625,-38.47939467327644 128.84765625,-38.54816542304657 128.84765625,-38.61687046392973 128.84765625,-38.685509760012 128.84765625,-38.75408327579141 128.84765625,-38.8225909761771 128.84765625,-38.8225909761771 128.84765625,-38.89103282648846 128.759765625,-38.89103282648846 128.759765625,-38.89103282648846 128.759765625,-38.89103282648846 128.759765625,-38.89103282648846 128.759765625,-38.8225909761771 128.671875,-38.61687046392973 128.671875,-38.47939467327644 128.583984375,-38.27268853598096 128.49609375,-38.13455657705411 128.49609375,-37.99616267972812 128.408203125,-37.78808138412046 128.3203125,-37.57941251343839 128.232421875,-37.43997405227057 128.14453125,-37.30027528134431 128.056640625,-37.16031654673676 127.79296875,-36.949891786813275 127.529296875,-36.80928470205938 127.353515625,-36.66841891894784 127.08984375,-36.45663601159621 126.9140625,-36.24427318493909 126.73828125,-36.17335693522159 126.5625,-36.03133177633187 126.474609375,-35.96022296929668 126.298828125,-35.96022296929668 126.2109375,-35.96022296929668 126.123046875,-35.96022296929668 126.03515625,-35.96022296929668 125.947265625,-34.88593094075315 127.001953125))";

    describe("WKT", function () {

        it("parse une ligne", function () {
            WKT.toJson(strWktLine, function (json) {
                expect(json).to.have.property("type", "LineString");
                expect(json).to.have.property("coordinates");
                expect(json.coordinates).to.be.an("array");
                expect(json.coordinates).to.have.length(2);
                expect(json.coordinates[0][0]).to.equal(2.416907);
                expect(json.coordinates[0][1]).to.equal(48.846577);
                expect(json.coordinates[1][0]).to.equal(2.416916);
                expect(json.coordinates[1][1]).to.equal(48.846613);
            });
        });

        it("parse un polygone", function () {
            WKT.toJson(strWktPolygon, function (json) {
                expect(json).to.have.property("type", "Polygon");
                expect(json).to.have.property("coordinates");
                expect(json.coordinates).to.be.an("array");
                expect(json.coordinates[0]).to.have.length(289);
                expect(json.coordinates[0][0][0]).to.equal(-34);
                expect(json.coordinates[0][0][1]).to.equal(127);
            });
        });

        it("parse une ligne avec des entiers", function (done) {
            var onSuccess = function (json) {
                expect(json).to.have.property("type", "LineString");
                expect(json).to.have.property("coordinates");
                expect(json.coordinates).to.be.an("array");
                expect(json.coordinates).to.have.length(2);
                expect(json.coordinates[0][0]).to.equal(2);
                expect(json.coordinates[0][1]).to.equal(48);
                expect(json.coordinates[1][0]).to.equal(2);
                expect(json.coordinates[1][1]).to.equal(48);
                done();
            };
            var onError = function (e) {
                console.log(e);
                expect(false).to.be.true;
                done(e);
            };
            WKT.toJson("LINESTRING (2 48, 2 48)", onSuccess, onError);
        });

        it("erreur : (La chaine WKT n'est pas renseignée !)", function () {
            var onSuccess = function (e) { };
            var onError = function (e) {
                should().exist(e);
                expect(e.message).to.be.equal("La chaine WKT n'est pas renseignée !");
            };
            WKT.toJson("", onSuccess, onError);
        });

        it("erreur : (La liste des points est vide !)", function () {
            var onSuccess = function (e) { };
            var onError = function (e) {
                should().exist(e);
                expect(e.message).to.be.equal("La liste des points est vide !");
            };
            WKT.toJson("LINESTRING ()", onSuccess, onError);
        });

        it("erreur : 1 (erreur de parsing json !)", function () {
            var onSuccess = function (e) { };
            var onError = function (e) {
                should().exist(e);
                expect(e).to.be.equal("Erreur de parsing JSON !");
            };
            WKT.toJson(" (45 2)", onSuccess, onError);
        });

        it("erreur : 2 (erreur de parsing json !)", function () {
            var onSuccess = function (e) { };
            var onError = function (e) {
                should().exist(e);
                expect(e).to.be.equal("Erreur de parsing JSON !");
            };
            WKT.toJson("LINESTRING ((45 2),(46 3))", onSuccess, onError);
        });

        it("erreur : 3 (erreur de parsing json !)", function () {
            var onSuccess = function (e) { };
            var onError = function (e) {
                should().exist(e);
                expect(e).to.be.equal("Erreur de parsing JSON !");
            };
            WKT.toJson("     ", onSuccess, onError);
        });
    });
});
