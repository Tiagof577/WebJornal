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
          v-model="funcionario.funcionario.admin"
          aria-describedby="permissions"
          aria-controls="permissions"
          @change="toggleAll"
        >
          {{ funcionario.funcionario.admin ? 'Administrador' : 'Administrador' }}
        </b-form-checkbox>

        <b-form-checkbox-group
          id="permissions"
          v-model="selected"
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
                v-model="funcionario.nif"
                required
                placeholder="Enter your nif"
                lazy-formatter
                :state="nif_valid.verify"
                :formatter="validateNIF"
                disabled
                ></b-form-input>
                <b-form-invalid-feedback id="input-live-feedback">
                  {{nif_valid.msg}}
                </b-form-invalid-feedback>
          <b-form-group>
            <FuncionarioConta :conta="funcionario"/>
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
        selected: [],
        permissions: ['Escritor', 'Recursos humanos', 'funcionario'],
      }
    },
    computed: {
      ...mapGetters({
        nif_valid: "funcionarios/nif_valid",
        conta: "funcionarios/conta",
        funcionario: "funcionarios/funcionario"
      })
    },
    async created() {
    this.findFuncionario(this.$route.params.funcionarioId);
  },
    methods: {
      ...mapActions({
        nifvalidation: "funcionarios/createFuncionario",
        funcionarioadd: "funcionarios/addFuncionario",
        findFuncionario: "funcionarios/findFuncionario"
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
  onSubmit() {
        this.funcionarioUpdate(this.funcionario)
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