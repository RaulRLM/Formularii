inputFields2
        /* Validació de tots els camps en temps real */

        /* 3 validacions distintes per a cada tipus de input segons la part en la que estas del formulari*/

        const validacionEnTiempoReal = (selector, regular, errorMessageId) => {
            let inputElement = document.getElementById(selector);
            inputElement.addEventListener('input', () => {
                validar(selector, regular, errorMessageId);
                checkSubmitButton(); // Llamamos a la función para verificar si se debe mostrar el botón de enviar                    
            });
        }
        const validacionEnTiempoReal2 = (selector, regular, errorMessageId) => {
            let inputElement = document.getElementById(selector);
            inputElement.addEventListener('input', () => {
                validar(selector, regular, errorMessageId);
                checkSubmitButton2();
            
            });
        }
        const validacionEnTiempoReal3 = (selector, regular, errorMessageId) => {
            let inputElement = document.getElementById(selector);
            inputElement.addEventListener('input', () => {
                validar(selector, regular, errorMessageId);
                checkSubmitButton3();
            
            });
        }
        
        
        const validar = (selector, regular, errorMessageId) => {
            let element = document.getElementById(selector);
            let message = document.getElementById(errorMessageId);
            if (element.value.length === 0) {
                message.textContent = ""; // Cambiamos el mensaje a vacío
                message.style.display = "none"; // Ocultamos el mensaje
                element.style.boxShadow = "none"; // Quitamos la sombra
                return false;
            }

            if (!regular.test(element.value)) {
                message.textContent = "Valor invàlid";
                element.style.boxShadow = "0 0 5px red"; // Agregamos sombra roja
                message.style.display = "block";
                document.getElementById("fin").style.display = "none";
                return false;
            }
            message.textContent = "";
            message.style.display = "none";
            element.style.boxShadow = "none"; // Quitamos la sombra
            return true;
        }

        const validar1 = (selector, regular, errorMessageId) => {
            let element = document.getElementById(selector);
            let message = document.getElementById(errorMessageId);
            if (element.value.length === 0) {
                message.textContent = ""; // Cambiamos el mensaje a vacío
                message.style.display = "none"; // Ocultamos el mensaje
                element.style.boxShadow = "none"; // Quitamos la sombra
                return false;
            }
            if (!regular.test(element.value)) {
                message.textContent = "Valor invàlid";
                element.style.boxShadow = "0 0 5px red"; // Agregamos sombra roja
                message.style.display = "block";
                return false;
            }
            message.textContent = "";
            message.style.display = "none";
            element.style.boxShadow = "none"; // Quitamos la sombra
            return true;
        }


        // Función para validar la fecha
        const validarFecha = (fecha) => {

        // Expresión regular para verificar si la entrada contiene letras
        const contieneLetras = /[a-zA-Z]/.test(fecha);
            if (contieneLetras) {
            return "No pots utilitzar lletres.";
            }
            
        const contieneEspeciales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?]/.test(fecha);
            if (contieneEspeciales) {
            return "Nomes pots utilitzar ' / '";
            }

        // Expresión regular para verificar si la fecha es mayor a 2024
        const fechaIngresada = new Date(fecha);

        // Expresión regular para verificar el formato de la fecha (DD/MM/AAAA)
         const formatoValido = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/.test(fecha);
            if (!formatoValido) {
                return "Format DD/MM/AAAA.";
            }

        // Verificar si la fecha ingresada es mayor a la fecha actual
        const fechaActual = new Date();
        if (fechaIngresada > fechaActual) {
        return "¡¿Vens del futur?!";
        }

        const edad = fechaActual.getFullYear() - fechaIngresada.getFullYear();
        const mesActual = fechaActual.getMonth();
        const mesNacimiento = fechaIngresada.getMonth();

            if (mesActual < mesNacimiento || (mesActual === mesNacimiento && fechaActual.getDate() < fechaIngresada.getDate())) {
            edad--;
            }

            if (edad < 18) {
            return "Has de ser major d'edat.";
            }

            return " "; // La fecha es válida y la edad es mayor o igual a 18 años
            };

        // Evento para validar la fecha al escribir en el campo
        document.getElementById('fechaInput').addEventListener('input', (event) => {
        const fecha = event.target.value;
        const errorFecha = document.getElementById('errorFecha');
        const mensajeError = validarFecha(fecha);
        errorFecha.textContent = mensajeError;
        
        checkSubmitButton(); // Llamamos a la función para verificar si se debe mostrar el botón de enviar
        });

        // select
        const frutasSelect = document.getElementById("frutas");

            // Inicialitzar la variable com false
            let valorSeleccionado = false;

        frutasSelect.addEventListener("change", () => {
            // Verifica si s'ha seleccionat algun valor
            valorSeleccionado = (frutasSelect.value !== "");
            checkSubmitButton();
        });

        /* Función para verificar si se debe mostrar el botón de enviar */
        const checkSubmitButton = () => {
        let nomValido = validar("nomInput", /^[a-zA-ZÀ-ÿ\s']{3,}$/, "errorNom");
        let emailValido = validar("emailInput", /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "errorEmail");
        let email2Valido = validar("emailInput2", /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "errorEmail2");
        let sexoMarcado = document.querySelector('input[name="sexo"]:checked');
        let emailInputValue = document.getElementById("emailInput").value;
        let emailInput2Value = document.getElementById("emailInput2").value;
        let fechaValida = validarFecha(document.getElementById('fechaInput').value);
        let apodoValido = validar("apodoInput", /^[a-zA-ZÀ-ÿñÑ\d]{1,15}\d{0,5}$/, "errorApodo");
        let messageerror = document.getElementById("errorEmail2");

            if (nomValido && emailValido && email2Valido && sexoMarcado && emailInputValue === emailInput2Value && fechaValida.trim() == '' && apodoValido && valorSeleccionado) {
            document.getElementById("submitButton").style.display = "block"; // Mostramos el botón ir atrás
            document.getElementById("p").style.display = "none";
            
            
            }
            else {
            document.getElementById("submitButton").style.display = "none";
            document.getElementById("p").style.display = "none";
            
            }

            if (email2Valido && emailInputValue && emailInputValue !== emailInput2Value) {
            messageerror.textContent = "Els correus no coincideixen"; // Cambiado el mensaje para ser más claro
            messageerror.style.display = "block"; // Mostrar el mensaje de error
            emailInput2.style.boxShadow = "0 0 5px red"; // Establecer una sombra roja al elemento
            document.getElementById("submitButton").style.display = "none";
            
            }
            }


//  document.getElementById("submitButton").addEventListener("click", segonaPart); borrar si ya esta en el boton


    /*PART 2 REGISTRE ( DOMICILI )*/

    function segonaPart() {
    let nomValido = validar("nomInput", /^[a-zA-ZÀ-ÿ\s']{3,}$/, "errorNom");
    let emailValido = validar("emailInput", /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "errorEmail");
    let email2Valido = validar("emailInput2", /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "errorEmail2");
    let sexoMarcado = document.querySelector('input[name="sexo"]:checked');
    let emailInputValue = document.getElementById("emailInput").value;
    let emailInput2Value = document.getElementById("emailInput2").value;
    let fechaValida = validarFecha(document.getElementById('fechaInput').value);
    let apodoValido = validar("apodoInput", /^[a-zA-ZÀ-ÿñÑ\d]{1,15}\d{0,5}$/, "errorApodo");

        if (nomValido && emailValido && email2Valido && sexoMarcado && emailInputValue === emailInput2Value && fechaValida.trim() == '' && apodoValido && valorSeleccionado) {
        document.getElementById("submitButton").style.display = "none";
        document.getElementById("inputFields").style.display = "none";
        document.getElementById("camposObligatorios").style.display = "none";
        document.getElementById("sexo").style.display = "none";
        document.getElementById("inputFields2").style.display = "block";
        document.getElementById("camposObligatorios2").style.display = "none";
        document.getElementById("fuites").style.display = "none";
        document.getElementById("p").style.display = "block";
        
        
        
        } else {
        document.getElementById("submitButton").style.display = "none";
        document.getElementById("inputFields").style.display = "block";
        document.getElementById("camposObligatorios").style.display = "block";
        }
        }

    /*PART 3 REGISTRE*/

    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="Llenguatge"]');

    // Agregar un event per els checkboxs
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            checkSubmitButton2();
        });
    });

     // Select
const tipoCalleInput = document.getElementById("tipoCalle");

// Inicializar la variable como false
let valorSeleccionado2 = false;

// Evento que se ejecuta al cambiar la selección en el datalist
tipoCalleInput.addEventListener("input", () => {
    // Verifica si se ha seleccionado algún valor
    valorSeleccionado2 = (tipoCalleInput.value !== "");
    checkSubmitButton2();
});

    const checkSubmitButton2 = () => {
    let nomViaValidacio = validar("nomVia", /^[a-zA-ZÀ-ÿ\s']{3,}$/, "errorVia");
    let codiPostalValidacio = validar("codiPostal", /^[0-9]{5}$/, "errorcodiPostal");
    let localitatValidació = validar("localitatInput", /^[a-zA-ZÀ-ÿ\s']{3,}$/, "errorLocalitat");
    const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"][name="Llenguatge"]:checked');


        if (nomViaValidacio && codiPostalValidacio && localitatValidació && checkedCheckboxes.length >=2  && valorSeleccionado2) {
        document.getElementById("tercera").style.display = "block";
        }
        else {
        document.getElementById("tercera").style.display = "none";
        }
        }

    document.getElementById("tipo_via").addEventListener("change", checkSubmitButton2);


    const cuartaPart = () => {
    let nomViaValidacio = validar("nomVia", /^[a-zA-ZÀ-ÿ\s']{3,}$/, "errorVia");
    let codiPostalValidacio = validar("codiPostal", /^[0-9]{5}$/, "errorcodiPostal");
    let localitatValidació = validar("localitatInput", /^[a-zA-ZÀ-ÿ\s']{3,}$/, "errorLocalitat");
    const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"][name="Llenguatge"]:checked');

        if (nomViaValidacio && codiPostalValidacio && localitatValidació && checkedCheckboxes.length >=2 && valorSeleccionado2) {
        document.getElementById("inputFields2").style.display = "none";
        document.getElementById("tercera").style.display = "none";
        document.getElementById("inputFields3").style.display = "block";
        }}


    const checkSubmitButton3 = () => {
    let passwo = validar("passwordInput", /^(?=.*[A-Z])(?=.*[a-zA-Z]{5})(?=.*[0-9].*[0-9]).{8,}$/, "errorPassword");
    let confirmPassword = validar("confirmPasswordInput", /^(?=.*[A-Z])(?=.*\d{2}).{8,}$/, "errorConfirmPassword");
    let politicasPrivacidadCheckbox = document.querySelector('input[name="politicasPrivacidad"]');
    let politicasPrivacidadMarcadas = politicasPrivacidadCheckbox.checked;
    let nominput2valid = validar("nomInput2", /^(?=(?:\+\d{1,3})?\s?\d{1,25}$).{1,25}$/, "errorNom2");
    let inputImagen = document.getElementById("imagen");
    let passwoInput = document.getElementById("passwordInput");
    let confirmPasswordInput = document.getElementById("confirmPasswordInput");
    let notaFormulari = document.querySelector('input[name="satisfaccion"]:checked');
    let messageerrorpass = document.getElementById("errorConfirmPassword");


        if (inputImagen.files.length > 0) {
        // Selecciona el elemento por su ID
        const labelImagen = document.getElementById("imglbl");
        labelImagen.textContent = "Imagtge carregada";
        }

        if (passwo && confirmPassword && passwoInput.value !== confirmPasswordInput.value) {
        messageerrorpass.textContent = "Contrasenyes diferents"; 
        document.getElementById("fin").style.display = "none";
        messageerrorpass.style.display = "block"; 
        element.style.boxShadow = "0 0 5px red"; 
        }

        if (nominput2valid && politicasPrivacidadMarcadas && passwo && confirmPassword && inputImagen.files.length > 0 && passwoInput.value === confirmPasswordInput.value && notaFormulari)    {
        document.getElementById("fin").style.display = "block";
        }

        else {
        document.getElementById("fin").style.display = "none";
        }};

    //// event per a icons

    const radioInputs = document.querySelectorAll('.satisfaction-input');

    radioInputs.forEach(function(input) {
    input.addEventListener('change', function() {
    checkSubmitButton3();
    });
    });

    //////////////////////////////////////////////////

    // Selecciona la casilla de verificación de las políticas de privacidad
    const politicasPrivacidadCheckbox = document.querySelector('input[name="politicasPrivacidad"]');
    // Selecciona el mensaje de error
    const errorPoliticas = document.getElementById("errorPoliticas");

    // Función para actualizar la visibilidad del mensaje de error en tiempo real
    const updateErrorVisibility = () => {
        if (politicasPrivacidadCheckbox.checked) {
        errorPoliticas.style.display = "none"; // Oculta el mensaje de error si la casilla está marcada
        checkSubmitButton3();
        } 
        else {
        errorPoliticas.style.display = "block"; // Muestra el mensaje de error si la casilla no está marcada
        checkSubmitButton3();

        }};

    ///////

    const inputImagen = document.getElementById("imagen");

    inputImagen.addEventListener('change', function() {
    // Llama a la función checkSubmitButton3 cada vez que se cambie la imagen
    checkSubmitButton3();
    });


    // Agrega un evento de escucha para detectar cambios en la casilla de verificación
    politicasPrivacidadCheckbox.addEventListener('change', updateErrorVisibility);

    // Llama a la función una vez para inicializar el estado del mensaje de error
    updateErrorVisibility();



    /* Agregar eventos de validación en tiempo real a los campos */
    validacionEnTiempoReal("nomInput", /^[a-zA-ZÀ-ÿ\s']{3,}$/, "errorNom");
    validacionEnTiempoReal("emailInput", /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "errorEmail");
    validacionEnTiempoReal("emailInput2", /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "errorEmail2");
    validacionEnTiempoReal("apodoInput", /^[a-zA-ZÀ-ÿñÑ\d]{1,15}\d{0,5}$/, "errorApodo");


    /* 2 Part */
    validacionEnTiempoReal2("nomVia",/^[a-zA-ZÀ-ÿ\s']{3,}$/, "errorVia");
    validacionEnTiempoReal2("codiPostal", /^[0-9]{5}$/, "errorcodiPostal");
    validacionEnTiempoReal2("localitatInput", /^[a-zA-ZÀ-ÿ\s']{3,}$/, "errorLocalitat");

    /* Part 3 */
    validacionEnTiempoReal3("nomInput2", /^[a-zA-ZÀ-ÿ\s']{3,}$/, "errorNom2");

    validacionEnTiempoReal3("confirmPasswordInput", /^(?=.*[A-Z])(?=.*[a-zA-Z]{5})(?=.*[0-9].*[0-9]).{8,}$/, "errorConfirmPassword");
    validacionEnTiempoReal3("passwordInput", /^(?=.*[A-Z])(?=.*[a-zA-Z]{5})(?=.*[0-9].*[0-9]).{8,}$/, "errorPassword");


    // Agregar evento de cambio a los campos de sexo para verificar el botón de enviar
    document.querySelectorAll('input[name="sexo"]').forEach(radio => {
        radio.addEventListener('change', checkSubmitButton);
    });




    // Obtiene los elementos necesarios
    const selectWrapper = document.querySelector('.select-wrapper');
    const select = selectWrapper.querySelector('select');
    const selectArrow = selectWrapper.querySelector('.select-arrow');
    const tipoViaText = document.getElementById('tipo_via_text');
    const optionsList = document.createElement('ul');

    // Crea la lista de opciones
    Array.from(select.options).forEach(option => {
    const li = document.createElement('li');
    li.textContent = option.textContent;
    li.setAttribute('data-value', option.value);
    optionsList.appendChild(li);
    });

    // Agrega la lista de opciones al DOM
    selectWrapper.appendChild(optionsList);

    // Evento para abrir y cerrar el menú desplegable
    selectWrapper.addEventListener('click', function(event) {
    event.stopPropagation(); // Evita que el evento llegue al documento
    this.classList.toggle('active');
    });

    // Evento para seleccionar una opción
    optionsList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
    const value = e.target.getAttribute('data-value');
    select.value = value;
    // Actualiza el texto del select personalizado
    tipoViaText.textContent = value ? ` ${value}` : 'Tri una via';
    // Oculta el menú desplegable
    }
    });

    // Evento para ocultar el menú desplegable al cambiar la selección del select nativo
    select.addEventListener('change', function() {
    const selectedOption = this.options[this.selectedIndex];
    tipoViaText.textContent = selectedOption.value ? `Tri una via: ${selectedOption.value}` : 'Tri una via';
    // Oculta el menú desplegable
    selectWrapper.classList.remove('active');
    });

    // Evento para cerrar el menú desplegable al hacer clic fuera de él
    document.addEventListener('click', function(event) {
    const isClickInside = selectWrapper.contains(event.target);
    if (!isClickInside) {
    selectWrapper.classList.remove('active');
    }
    });

    // Deselecciona cualquier opción seleccionada por defecto
    select.value = '';
    // Actualiza el texto predeterminado
    tipoViaText.textContent = 'Tri una via';


    // pais

    // Obtiene los elementos necesarios
    const paisSelectWrapper = document.querySelector('.contenedor-select');
    const paisSelect = paisSelectWrapper.querySelector('select');
    const paisArrow = paisSelectWrapper.querySelector('.flecha-select');
    const paisTexto = document.getElementById('pais_texto');
    const paisOptionsList = document.createElement('ul');

    // Crea la lista de opciones
    Array.from(paisSelect.options).forEach(option => {
    const li = document.createElement('li');
    li.textContent = option.textContent;
    li.setAttribute('data-value', option.value);
    paisOptionsList.appendChild(li);
    });

    // Agrega la lista de opciones al DOM
    paisSelectWrapper.appendChild(paisOptionsList);

    // Evento para abrir y cerrar el menú desplegable
    paisSelectWrapper.addEventListener('click', function(event) {
    event.stopPropagation(); 
    this.classList.toggle('active');
    });

    // Evento para seleccionar una opción
    paisOptionsList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
    const text = e.target.textContent.trim(); // Obtiene el texto del elemento <li> sin espacios al principio y al final
    paisSelect.value = text; // Asigna el texto como valor al select
    paisTexto.textContent = text ? ` ${text}` : 'Selecciona un país'; // Actualiza el texto del select personalizado
    paisSelectWrapper.classList.remove('active'); // Oculta el menú desplegable
    }
    });

    // Evento para ocultar el menú desplegable al cambiar la selección del select nativo
    paisSelect.addEventListener('change', function() {
    const selectedOption = this.options[this.selectedIndex];
    paisTexto.textContent = selectedOption.value ? `Selecciona un país: ${selectedOption.value}` : 'Selecciona un país';
    // Oculta el menú desplegable
    paisSelectWrapper.classList.remove('active');
    });


    // Evento para cerrar el menú desplegable al hacer clic fuera de él
    document.addEventListener('click', function(event) {
    const isClickInside = paisSelectWrapper.contains(event.target);
    if (!isClickInside) {
    paisSelectWrapper.classList.remove('active');
    }
    });



    // Evento para filtrar las opciones al escribir en el campo de búsqueda
    const filterOptions = () => {
    const searchInput = document.getElementById('searchInput');
    const filter = searchInput.value.toUpperCase();
    const options = paisOptionsList.getElementsByTagName('li');
    for (let i = 0; i < options.length; i++) {
    const textValue = options[i].textContent || options[i].innerText;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
        options[i].style.display = '';
    } else {
        options[i].style.display = 'none';
    }
    }
    };

    // Agregar evento al campo de búsqueda para filtrar opciones
    document.getElementById('searchInput').addEventListener('input', filterOptions);






    //borrar
    const validarSelect = (selector, errorMessageId) => {
    let select = document.getElementById(selector);
    let message = document.getElementById(errorMessageId);
    let selectedOption = select.options[select.selectedIndex];

    if (selectedOption.value === "") {
    message.textContent = "Selecciona una opción";
    return false;
    } else {
    message.textContent = "";
    return true;
    }
    };
