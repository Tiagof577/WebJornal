<template>
    <div>
            <div class="form-group">
              <input
                v-model="conta.email"
                type="email"
                class="form-control form-control-lg"
                id="txtEmail"
                placeholder="escreve o teu E-mail"
                required
                disabled
              />
            </div>
            <div class="form-group">
              <input
                v-model="conta.name"
                type="text"
                class="form-control form-control-lg"
                id="txtName"
                placeholder="escreve o teu nome"
                required
                disabled
              />
            </div>
            <div class="form-group">
              <b-form-datepicker 
                id="birth_date" 
                class="mb-2"
                v-model="conta.birth_date"
                type="text"
                onmouseenter="(this.type='date')"
                onmouseleave="(this.type='text')"
                placeholder="escreve a tua data de nascimento"
                required
                disabled
              />
            </div>
            <div class="form-group">
              <input
                v-model="conta.username"
                type="text"
                class="form-control form-control-lg"
                id="txtEmail"
                placeholder="escreve o teu username"
                required
                disabled
              />
            </div>
    </div>
</template>
<script>
export default {
    name: "FuncionarioConta",
    props: {
    conta: Object,
  },
}
</script>