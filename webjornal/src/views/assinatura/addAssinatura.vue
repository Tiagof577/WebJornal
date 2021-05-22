<template>
    <section>
        <b-container>
        <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="8">
            <form @submit="onSubmit">
              <b-form-group>
        <b>Premissões do funcionario:</b><br>
        <b-form-checkbox
          v-model="form.admin"
          aria-describedby="permissions"
          aria-controls="permissions"
          @change="toggleAll"
        >
          {{ form.admin ? 'Administrador' : 'Administrador' }}
        </b-form-checkbox>

        <b-form-checkbox-group
          id="permissions"
          v-model="form.permission"
          :options="permissions"
          value-field="item"
          text-field="name"
          name="permissions"
          class="ml-4"
          aria-label="Individual permissions"
          @change="admin"
          stacked
        ></b-form-checkbox-group>
      </b-form-group>
                <b-form-input number maxlength="9" 
                id="nif"
                v-model="form.nif"
                required
                placeholder="Enter your nif"
                lazy-formatter
                :state="nif_valid.verify"
                :formatter="validateNIF"
                ></b-form-input>
                <b-form-invalid-feedback id="input-live-feedback">
                  {{nif_valid.msg}}
                </b-form-invalid-feedback>
          <b-form-group v-if="conta.nif">
            <FuncionarioConta :conta="conta"/>
          </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
            </form>
        </b-col>
        </b-row>
        </b-container>
    </section>
</template>

<script>
import router from "@/router";
import { mapActions, mapGetters } from "vuex"
import FuncionarioConta from "../../components/FuncionarioConta"
  export default {
    components:{
      FuncionarioConta
    },
    data() {
      return {
        form: {
          nif: '',
          _id: '',
        permission: [],
        admin: false,
        },
        permissions: ['Escritor', 'Recursos humanos', 'funcionario'],
      }
    },
    computed: {
      ...mapGetters({
        nif_valid: "funcionarios/nif_valid",
        conta: "funcionarios/conta"
      })
    },
    methods: {
      ...mapActions({
        nifvalidation: "funcionarios/createFuncionario",
        funcionarioadd: "funcionarios/addFuncionario"
      }),
      toggleAll(checked) {
        this.form.permission = checked ? this.permissions.slice() : []
      },
      admin(){
        {
          if (this.form.permission.length === 0) {
          this.form.admin = false
        } else if (this.form.permission.length === this.permissions.length) {
          this.form.admin = true
        } else {
          this.form.admin = false
        }
        }
      },
      validateNIF(nif) {
        this.nifvalidation(nif);
        return nif
  },
  onSubmit(event) {
        event.preventDefault()
        this.form._id = this.conta._id
        this.funcionarioadd(this.form)
        .then(
        () => {
          router.push({name: 'listFuncionarios'});
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
        
      },
      },
    }
</script>