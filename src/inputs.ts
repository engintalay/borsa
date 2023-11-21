class eventListenerType {
    eventType: string;
    func: (a: Event) => void;
  
    constructor(etype: string, f: (a: Event) => void) {
      this.eventType = etype;
      this.func = f;
    }
  }
  
  class InputParameters {
    _id: string;
    _type: inputTypes;
    _title: string;
    _value: string = "";
    _placeholder: string = "";
    _required: boolean = false;
    _class: string = "";
    _name: string;
    _eventListener: null | eventListenerType = null;
  
    constructor(name: string, type: inputTypes, title: string) {
      this._id = type + "_" + generateUniqueId();
      this._type = type;
      this._title = title;
      this._name = name;
    }
  }
  
  class Form {
    elements: HTMLElement[] = [];
    name: string;
    method: formMethods = formMethods.get;
    url: URL;
    id: string;
  
    constructor(name: string, url: URL) {
      this.name = name;
      this.url = url;
      this.id = "form_" + generateUniqueId();
    }
  
    addElement(element: HTMLElement) {
      this.elements.push(element);
    }
  
    generate(): HTMLElement {
      const form = document.createElement("form");
      form.name = this.name;
      form.append(...this.elements);
      let parameters = new InputParameters(
        "",
        inputTypes.clearButton,
        "Formu Temizle"
      );
      form.id = this.id;
      parameters._type = inputTypes.button;
      parameters._value = parameters._title;
      parameters._title = "";
      parameters._class = "btn btn-danger";
      parameters._eventListener = new eventListenerType("click", () => {
        form.clear();
      });
      form.append(generateInputBox(parameters));
  
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open("POST", this.url);
  
        xhr.onload = () => {
          if (xhr.status === 200) {
            console.log(xhr.responseText);
            alert(xhr.responseText);
          } else {
            console.log("Bir hata oluştu.");
            alert("Bir hata oluştu." )
          }
        };
        xhr.send(formData);
      });
  
      return form;
    }
  }
  
  function generateInputBox(parameters: InputParameters): HTMLElement {
    const div = document.createElement("div");
    div.className = formConstants.className;
  
    const label = document.createElement("label");
    if (parameters._title !== "") {
      label.textContent = parameters._title + " :";
    }
    label.className = labelConstants.className;
  
    div.appendChild(label);
    const input = document.createElement("input");
    input.type = parameters._type;
    input.name = parameters._name; 
    input.id = parameters._id;
    input.placeholder = parameters._placeholder;
    input.value = parameters._value;
    input.required = parameters._required;
    input.className += "form-control ";
    input.className += parameters._class + " ";
    if (parameters._eventListener !== null) {
      input.addEventListener(
        parameters._eventListener["eventType"],
        parameters._eventListener.func
      );
    }
    const div2 = document.createElement("div");
    div2.appendChild(input);
    div2.className = "col-sm-10";
    div.appendChild(div2);
  
    /*
  
    div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="email" class="form-control" id="inputEmail3">
      </div>
    </div>
    */
    /*
    <div class="invalid-feedback">
                  Valid first name is required.
                </div>
    */
    return div;
  }
  