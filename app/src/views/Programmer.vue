<template>
    <div class="programmer page">
        <PageTemp :pageDescription="description" :pageTitle="title">
            <div class="programmer-listings">
                <vk-grid matched class="uk-child-width-expand@s">
                    <div class="programmer-listing uk-text-center" id="tnb">
                        <img class="programmer-logo" src="../assets/tnb_logo@2x.png" alt="The Next Bill App created by Christopher K Jones" />
                        <img class="programmer-mac" src="../assets/tnb-macbook_dashboard@2x.png" alt="The Next Bill App created by Christopher K Jones" />
                        <a target="_blank" class="btn" href="https://github.com/tkcwebdev/thenextbill" alt="The Next Bill App. The best way to manage your bills">Github Repo</a>
                    </div>
                    <div class="programmer-listing uk-text-center" id="ito">
                        <img class="programmer-logo" src="../assets/ito_logo@2x.png" alt="InThisOrder App created by Christopher K Jones" />
                        <img class="programmer-mac" src="../assets/ito-macbook_dashboard@2x.png" alt="InThisOrder App created by Christopher K Jones" />
                        <a target="_blank" class="btn" href="https://github.com/tkcwebdev/inthisorder" alt="InThisOrder. The #1 Priority Task List for kids">Github Repo</a>
                    </div>
                </vk-grid>
            </div>
    </PageTemp>
    </div>
</template>

<script>
import PageTemp from '../components/PageTemp';

export default {
    name: "programmer",
    data() {
        return {
            title: "Programmer",
            description: "HTML, CSS, JS. Vue.js. React. Firebase. MYSQL. Node. PHP."
        }
    },
  components: {
      PageTemp
  }
}
</script>

<style scoped>
.programmer-listing img.programmer-logo {
    max-width: 250px;
    margin: 30px auto;
}
.programmer-listing a.btn {
    padding: 10px 30px;
    margin: 20px auto;
    background: var(--secon);
    display: inline-block;
    max-width: 150px;
    color: var(--prime);
}
.programmer-listing a.btn:hover {
    text-decoration: none;
    opacity: 0.7;
}
</style>