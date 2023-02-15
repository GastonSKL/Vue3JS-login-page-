<template>
  <main>
    <div class="formulario">
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control form-control-sm"
            id="name"
            v-model="form.nombre"
          />
          <span v-if="v$.form.nombre.$error">{{v$.form.nombre.$errors[0].$message}}</span>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control form-control-sm"
            id="email"
            v-model="form.correo"
          />
          <span v-if="v$.form.correo.$error">{{v$.form.correo.$errors[0].$message}}</span>
        </div>
        <div class="form-group">
          <label for="dni">Dni</label>
          <input
            type="number"
            class="form-control form-control-sm"
            id="dni"
            v-model="form.dni"
          />
          <span v-if="v$.form.dni.$error">{{v$.form.dni.$errors[0].$message}}</span>
        </div>
        <div class="form-group">
          <label for="direction">Direction</label>
          <input
            type="email"
            class="form-control form-control-sm"
            id="direction"
            v-model="form.direccion"
          />
          <span v-if="v$.form.direccion.$error">{{v$.form.direccion.$errors[0].$message}}</span>
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input
            type="text"
            class="form-control form-control-sm"
            id="phone"
            v-model="form.telefono"
          />
          <span v-if="v$.form.telefono.$error">{{v$.form.telefono.$errors[0].$message}}</span>
        </div>
        <div class="form-group">
          <label for="postalCode">Postal code</label>
          <input
            type="number"
            class="form-control form-control-sm"
            id="postalCode"
            v-model="form.codigoPostal"
          />
          <span v-if="v$.form.codigoPostal.$error">{{v$.form.codigoPostal.$errors[0].$message}}</span>
        </div>
        <div class="form-group">
          <label for="gender">Gender</label>
          <input
            type="text"
            class="form-control form-control-sm"
            id="gender"
            placeholder="M / F"
            v-model="form.genero"
          />
          <span v-if="v$.form.genero.$error">{{v$.form.genero.$errors[0].$message}}</span>
        </div>
        <div class="form-group">
          <label for="birth">Birth day</label>
          <input
            type="date"
            class="form-control form-control-sm"
            id="birth"
            v-model="form.fechaNacimiento"
          />
          <span v-if="v$.form.fechaNacimiento.$error">{{v$.form.fechaNacimiento.$errors[0].$message}}</span>
        </div>
        <div class="form-group btn-container">
          <button type="button" class="btn btn-primary" v-on:click="editar()">
            Edit
          </button>
          <button
            type="button"
            class="btn btn-danger margen"
            v-on:click="eliminar()"
          >
            Delete
          </button>
          <button
            type="button"
            class="btn btn-dark margen"
            v-on:click="salir()"
          >
            Exit
          </button>
        </div>
      </form>
    </div>
  </main>
</template>
<script>
import axios from "axios";
import useValidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

export default {
  name: "Editar",
  data: function () {
    return {
      v$: useValidate(),
      form: {
        pacienteId: "",
        nombre: "",
        direccion: "",
        dni: "",
        correo: "",
        codigoPostal: "",
        genero: "",
        telefono: "",
        fechaNacimiento: "",
        token: "",
      },
    };
  },
  validations() {
    return {
      form: {
        nombre: { required, maxLength: maxLength(40) },
        direccion: { required, maxLength: maxLength(20) },
        dni: { required, minLength: minLength(7), maxLength: maxLength(8) },
        correo: { required, email },
        codigoPostal: { required, minLength: minLength(4), maxLength: maxLength(5) },
        genero: { required, minLength: minLength(1) },
        telefono: { required, minLength: minLength(10), maxLength: maxLength(13) },
        fechaNacimiento: { required },
      },
    }; 
  },
  methods: {
    editar() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("Submited");
        axios
          .put("https://api.solodata.es/pacientes", this.form)
          .then((data) => {
            console.log(data);
          });
      }
    },
    salir() {
      this.$router.push("/dashboard");
    },
    eliminar() {
      var enviar = {
        pacienteId: this.form.pacienteId,
        token: this.form.token,
      };
      axios
        .delete("https://api.solodata.es/pacientes", { headers: enviar })
        .then((datos) => {
          console.log(datos);
          this.$router.push("/dashboard");
        });
    },
  },
  mounted: function () {
    this.form.pacienteId = this.$route.params.id;
    axios
      .get("https://api.solodata.es/pacientes?id=" + this.form.pacienteId)
      .then((datos) => {
        this.form.nombre = datos.data[0].Nombre;
        this.form.direccion = datos.data[0].Direccion;
        this.form.dni = datos.data[0].DNI;
        this.form.correo = datos.data[0].Correo;
        this.form.codigoPostal = datos.data[0].CodigoPostal;
        this.form.genero = datos.data[0].Genero;
        this.form.telefono = datos.data[0].Telefono;
        this.form.fechaNacimiento = datos.data[0].FechaNacimiento;
        this.form.token = localStorage.getItem("token");
      });
  },
};
</script>
<style scoped>
.left {
  text-align: left;
}
.margen {
  margin-left: 15px;
  margin-right: 15px;
}

main {
  height: 100vh;
  display: grid;
  place-content: center;
}

.formulario {
  width: 34em;
  border-radius: 0.8em;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.274);
  padding: 2em;
}

.btn-container {
  display: flex;
  justify-content: space-evenly;
  margin-top: 1em;
}

.btn {
  width: 6em;
}
</style>
