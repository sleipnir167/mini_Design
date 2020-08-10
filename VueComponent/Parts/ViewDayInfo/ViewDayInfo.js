const ViewDayInfo = {
  template:
    '<div class="ViewDayInfo" v-on:click="popups">' +
    '   <div class="firstLine">' +
    "       <p>{{ name }}</p>" +
    "   </div>" +
    '   <div class="secondLine">' +
    "       <p>{{ price }}</p>" +
    "   </div>" +
    "</div>",
  data: function () {
    return {
      name: "車",
      price: "200.2km",
      end: "2018/06/01",
    };
  },
  methods: {
    popups: function () {
      alert(
        "name : " +
          this.name +
          "\nprice : " +
          this.price +
          "\nend : " +
          this.end
      );
    },
  },
};

new Vue({
  el: "#contents",
  components: {
    "template_view-day-info": ViewDayInfo,
  },
});
