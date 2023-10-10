"use strict";

const App = {
  data() {
    return {
      posts: [
        {
          label: "Kitchan Design",
          photoSrc: "img/rooms/Photo6.jpg",
          heading: "Let's Get Solution For Building Construction Work",
          time: "26 December,2022",
        },
        {
          label: "Living Design",
          photoSrc: "img/rooms/Photo7.jpg",
          heading: "Low Cost Latest Invented Interior Designing Ideas.",
          time: "22 December,2022",
        },
        {
          label: "Interior Design",
          photoSrc: "img/rooms/Photo8.jpg",
          heading: "Best For Any Office & Business Interior Solution",
          time: "25 December,2022",
        },
        {
          label: "Kitchan Design",
          photoSrc: "img/rooms/Photo10.jpg",
          heading: "Let's Get Solution For Building Construction Work",
          time: "26 December,2022",
        },
        {
          label: "Living Design",
          photoSrc: "img/rooms/Photo11.jpg",
          heading: "Low Cost Latest Invented Interior Designing Ideas.",
          time: "22 December,2022",
        },
        {
          label: "Interior Design",
          photoSrc: "img/rooms/Photo12.jpg",
          heading: "Best For Any Office & Business Interior Solution",
          time: "25 December,2022",
        },
      ],
    };
  },
};
Vue.createApp(App).mount("#app");
