const nav = `      <nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <a class="navbar-brand" href="#">
    <img src="img/escudo.png" alt="MINSEG-MZA" width="40" height="46">
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="sujetos.html">Registro</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="actividad.html">Actividades</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="operaciones.html">Operaciones</a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="transporte.html">Transporte</a>
</li>
<li class="nav-item">
<a class="nav-link" href="catalogo.html">Catálogo</a>
</li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
          aria-expanded="false">
          Dropdown
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>

  </div>
</div>
</nav`;

function ventas(){
  const ventas = document.querySelector("#ventas");
  const desechos = document.querySelector("#desechos");
  ventas.innerHTML = "";
  desechos.innerHTML='';
  const h2 = document.createElement("h2");
  h2.classList.add("text-primary");
  h2.textContent = "Informacion sobre la Venta"
  ventas.appendChild(h2);
  const div = document.createElement("div");
  div.classList.add("col-md-4");
  const label = document.createElement("label");
  label.classList.add("form-label");
  label.setAttribute("for", "Nro de Factura");
  label.textContent = "Nro de Factura";
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("class", "form-control");
  input.setAttribute("id", "Nro de Factura");
  input.setAttribute("placeholder", "Ingrese Nro de Factura");
  div.appendChild(label);
  div.appendChild(input);
  ventas.appendChild(div);

  const fechaFactura = document.createElement("div");
  fechaFactura.classList.add("col-md-2");
  const label2 = document.createElement("label");
  label2.classList.add("form-label");
  label2.setAttribute("for", "Fecha de Factura");
  label2.textContent = "Fecha de Factura";
  const input2 = document.createElement("input");
  input2.setAttribute("type", "date");
  input2.setAttribute("class", "form-control");
  input2.setAttribute("id", "fecha_factura");
  fechaFactura.appendChild(label2);
  fechaFactura.appendChild(input2);
  ventas.appendChild(fechaFactura);

  const tipoFactura = document.createElement("div");
  tipoFactura.classList.add("col-md-2");
  const label3 = document.createElement("label");
  label3.classList.add("form-label");
  label3.setAttribute("for", "Tipo de Factura");
  label3.textContent = "Tipo de Factura";
  const select = document.createElement("select");
  select.setAttribute("class", "form-select");
  select.setAttribute("id", "tipo_factura");
  select.innerHTML = `<option selected>--Elija una Opción--</option>
  <option value="1">A</option>
  <option value="2">B</option>
  <option value="2">C</option>`;
  tipoFactura.appendChild(label3);
  tipoFactura.appendChild(select);
  ventas.appendChild(tipoFactura);

  const montoFactura= document.createElement("div");
  montoFactura.classList.add("col-md-2");
  const label4 = document.createElement("label");
  label4.classList.add("form-label");
  label4.setAttribute("for", "Monto de Factura");
  label4.textContent = "Monto de Factura";
  const input4 = document.createElement("input");
  input4.setAttribute("type", "text");
  input4.setAttribute("class", "form-control");
  input4.setAttribute("id", "monto_factura");
  montoFactura.appendChild(label4);
  montoFactura.appendChild(input4);
  ventas.appendChild(montoFactura);

  const metodoPago = document.createElement("div");
  metodoPago.classList.add("col-md-2");
  const label5 = document.createElement("label");
  label5.classList.add("form-label");
  label5.setAttribute("for", "Metodo de Pago");
  label5.textContent = "Metodo de Pago";
  const select2 = document.createElement("select")
  select2.setAttribute("class", "form-select");
  select2.setAttribute("id", "metodo_pago");
  select2.innerHTML = `<option selected>--Elija una Opción--</option>
  <option value="1">Efectivo</option>
  <option value="2">Tarjeta</option>
  <option value="2">Transferencia Bancaria</option>
  <option value="3">Billetera Virtual</option>`;
  metodoPago.appendChild(label5);
  metodoPago.appendChild(select2);
  ventas.appendChild(metodoPago);   
}

function desechos() {
  const desechos = document.querySelector("#desechos");
  const ventas = document.querySelector("#ventas");
  ventas.innerHTML = "";
  desechos.innerHTML = '';
  const h2 = document.createElement("h2");
  h2.classList.add("text-success");
  h2.innerHTML = "Desechos";
  desechos.appendChild(h2);


  const div = document.createElement("div");
  div.classList.add("col-md-12");
  const label = document.createElement("label");
  label.setAttribute("for", "desecho");
  label.setAttribute("class", "form-label");
  label.innerHTML = "Descripcion de material a desechar"; 
  div.appendChild(label); 
  const txtArea = document.createElement("textarea");
  txtArea.classList.add("form-control");
  txtArea.id = "desechos";
  txtArea.rows = 5;
  txtArea.placeholder = "Detalle aqui lo que va desechar";
  div.appendChild(txtArea);
  desechos.appendChild(div);
}

const TOPE=parseFloat(100);
export { nav , ventas, desechos , TOPE};
