<template>

        <section>
        <ul v-for="review in toy.reviews" :key="review._id">
          <li>
              {{review.txt}}
          </li>
        </ul>
        </section>




</template>

<script>
export default {
  name: "toyReviews",
  props: ["toy"],
};
</script>

