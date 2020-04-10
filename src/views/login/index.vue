<template>
  <grid-page>
    <div class="container">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit" >
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </grid-page>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    data() {
      return {
        username: 'admin',
        password: '000000',
        loading: false,
      };
    },
    methods: {
      ...mapActions([
        'login', // 将 `this.login()` 映射为 `this.$store.dispatch('login')`
      ]),
      onSubmit(values) {
        console.log('submit', values);
        this.loading = true;
        this.login(values).then(() => {
          this.$router.replace(this.$route.query.redirect || '/index');
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7f8fa;
}
</style>
