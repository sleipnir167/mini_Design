// button-counter と呼ばれる新しいコンポーネントを定義します
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<div>BBB<button v-on:click="count++">You clicked me {{ count }} times.</button></div>'
})

new Vue({ el: '#components-demo' })
