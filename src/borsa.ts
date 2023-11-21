const navbar = new Navigation("BIST - Borsa");
navbar.addMenuItem("Alış", "alis");
navbar.addMenuItem("Satış", "satis");
navbar.addMenuItem("Özet", "ozet");
let app = document.getElementById("app") as HTMLElement;
if (app) {
  app.innerHTML = "";
  app.appendChild(navbar.generate());
}
/*
const form = new Form("IlkForm", new URL("http://localhost:5500/service/service.php", window.location.href));

const ad1 = new InputParameters("ad1", inputTypes.input, "Adı");
ad1._placeholder = "Lütfen adınızı giriniz.";
form.addElement(generateInputBox(ad1));

const soyad1 = new InputParameters("soyad1", inputTypes.input, "Soyadı");
soyad1._placeholder = "Lütfen soyadınızı giriniz.";
form.addElement(generateInputBox(soyad1));

const babaadi1 = new InputParameters("babaadi1", inputTypes.input, "Baba Adı");
babaadi1._placeholder = "Lütfen baba adınızı giriniz.";
form.addElement(generateInputBox(babaadi1));

const anneadi = new InputParameters("anneadi1", inputTypes.input, "Anne Adı");
anneadi._placeholder = "Lütfen anne adınızı giriniz.";
form.addElement(generateInputBox(anneadi)); 

const submitButton = new InputParameters("submit", inputTypes.submit, "");
submitButton._value = "Gönder";
submitButton._class = "btn btn-primary";
form.addElement(generateInputBox(submitButton));

let app = document.getElementById("app") as HTMLElement;
if (app) {
  app.innerHTML = "";
  app.appendChild(form.generate());
}
*/
