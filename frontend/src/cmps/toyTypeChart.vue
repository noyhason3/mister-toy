
<script>
import {Doughnut} from 'vue-chartjs'

export default {
  extends: Doughnut,
  props:{
    data: Object
    
  },
  mounted () {
    this.renderChart({
      labels: Object.keys(this.data),
      datasets: [
        {
          label: 'Toy\'s type',
          backgroundColor: ['#42B983','#689C80'],
          data: Object.values(this.data)
        }
      ]
    })
  }
}
</script>
